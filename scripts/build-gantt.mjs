#!/usr/bin/env node
// Builds qs-roadmap-gantt.pdf: the Gantt view on its own, A3 portrait, everything on one page. Same
// plumbing as the report build, a different page script. The page's "Gantt A3" button links to it.
//
//   npm run build:gantt      (or: node scripts/build-gantt.mjs)
//   GANTT_GROUP=Stage GANTT_SORT=Priority npm run build:gantt
import { spawn } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { Cdp, ROOT, findChrome, isoWeekLabel, serve, waitFor } from './chrome.mjs';

const OUT = path.join(ROOT, 'qs-roadmap-gantt.pdf');
const TIMEOUT_MS = 120_000;
// A3 portrait at 96dpi, so what gets measured is what gets printed.
const PAGE = { width: 1123, height: 1587 };

async function main() {
  const server = await serve();
  const profile = await mkdtemp(path.join(tmpdir(), 'qs-gantt-chrome-'));
  const chrome = spawn(findChrome(), [
    '--headless=new', '--remote-debugging-pipe', `--user-data-dir=${profile}`,
    '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--hide-scrollbars', 'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe', 'pipe', 'pipe'] });
  const timer = setTimeout(() => { console.error('Gantt build timed out.'); chrome.kill(); process.exit(1); }, TIMEOUT_MS);

  try {
    const cdp = new Cdp(chrome);
    const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
    const page = (method, params) => cdp.send(method, params, sessionId);
    cdp.onEvent = msg => {
      if (msg.sessionId !== sessionId) return;
      if (msg.method === 'Runtime.exceptionThrown') console.error('page error:', msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text);
      if (msg.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(msg.params.type)) {
        console.error(`page ${msg.params.type}:`, msg.params.args.map(a => a.value ?? a.description).join(' '));
      }
    };
    await page('Runtime.enable');
    await page('Page.enable');
    await page('Emulation.setDeviceMetricsOverride', { ...PAGE, deviceScaleFactor: 1, mobile: false });

    const { port } = server.address();
    await page('Page.navigate', { url: `http://127.0.0.1:${port}/index.html` });
    const evaluate = params => page('Runtime.evaluate', params);
    await waitFor(evaluate, `!!document.querySelector('[data-view-chip="Gantt"]')`, 'the roadmap to render');

    await page('Emulation.setEmulatedMedia', { media: 'print' });
    const generated = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const week = isoWeekLabel(new Date());
    const group = process.env.GANTT_GROUP || 'Portfolio';
    const sort = process.env.GANTT_SORT || 'Start';
    const script = await readFile(path.join(ROOT, 'scripts', 'gantt-page.js'), 'utf8');
    const res = await evaluate({
      expression: `${script}\nbuildQsGantt(${JSON.stringify({ generated, week, group, sort })})`,
      awaitPromise: true, returnByValue: true,
    });
    if (res.exceptionDetails) {
      throw new Error('Gantt layout failed: ' + (res.exceptionDetails.exception?.description || res.exceptionDetails.text));
    }

    const { data } = await page('Page.printToPDF', {
      printBackground: true, preferCSSPageSize: true,
      marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0,
    });
    await writeFile(OUT, Buffer.from(data, 'base64'));
    const { pages, projects, zoom, column } = res.result.value;
    console.log(`Wrote ${path.relative(process.cwd(), OUT) || OUT} (A3 portrait, ${pages} page, ${projects} initiatives, two columns at ${column}px, scaled to ${Math.round(zoom * 100)}%)`);
    await cdp.send('Browser.close').catch(() => {});
  } finally {
    clearTimeout(timer);
    chrome.kill();
    server.close();
    await rm(profile, { recursive: true, force: true }).catch(() => {});
  }
}

main().catch(err => {
  console.error(err.message || err);
  process.exit(1);
});
