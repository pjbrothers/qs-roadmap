#!/usr/bin/env node
// Builds qs-roadmap-report.pdf from index.html: serves this folder locally, drives the installed
// Chrome over its DevTools pipe, runs scripts/report-page.js inside the page to lay the report out,
// then prints it. The page's "Download report" button links to the result.
//
//   npm run build            (or: node scripts/build-report.mjs)
//   CHROME_PATH=/path/to/chrome npm run build   to use a specific browser
import { spawn } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { Cdp, ROOT, findChrome, isoWeekLabel, serve, waitFor } from './chrome.mjs';

const OUT = path.join(ROOT, 'qs-roadmap-report.pdf');
const TIMEOUT_MS = 120_000;

async function main() {
  const server = await serve();
  const profile = await mkdtemp(path.join(tmpdir(), 'qs-report-chrome-'));
  const chrome = spawn(findChrome(), [
    '--headless=new', '--remote-debugging-pipe', `--user-data-dir=${profile}`,
    '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--hide-scrollbars', 'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe', 'pipe', 'pipe'] });
  const timer = setTimeout(() => { console.error('Report build timed out.'); chrome.kill(); process.exit(1); }, TIMEOUT_MS);

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
    await page('Emulation.setDeviceMetricsOverride', { width: 1600, height: 1000, deviceScaleFactor: 1, mobile: false });

    const { port } = server.address();
    await page('Page.navigate', { url: `http://127.0.0.1:${port}/index.html` });
    const evaluate = params => page('Runtime.evaluate', params);
    await waitFor(evaluate, `!!document.querySelector('[data-view-chip="Kanban"]') && !!document.querySelector('[data-table-row], [data-kanban-card], [data-gantt-row]')`, 'the roadmap to render');

    // Lay the report out under print media at A4-landscape size, so what gets measured is what gets printed.
    await page('Emulation.setEmulatedMedia', { media: 'print' });
    await page('Emulation.setDeviceMetricsOverride', { width: 1123, height: 794, deviceScaleFactor: 1, mobile: false });
    const generated = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const week = isoWeekLabel(new Date());
    const script = await readFile(path.join(ROOT, 'scripts', 'report-page.js'), 'utf8');
    const res = await evaluate({ expression: `${script}\nbuildQsReport(${JSON.stringify({ generated, week })})`, awaitPromise: true, returnByValue: true });
    if (res.exceptionDetails) {
      throw new Error('Report layout failed: ' + (res.exceptionDetails.exception?.description || res.exceptionDetails.text));
    }

    const { data } = await page('Page.printToPDF', {
      printBackground: true, preferCSSPageSize: true,
      marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0,
    });
    await writeFile(OUT, Buffer.from(data, 'base64'));
    console.log(`Wrote ${path.relative(process.cwd(), OUT) || OUT} (${res.result.value.pages} pages)`);
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
