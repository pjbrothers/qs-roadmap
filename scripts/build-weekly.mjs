#!/usr/bin/env node
// Builds one report from data/plan.js as a 16:9 slide PDF, at the path that report declares, so every
// published report stays retrievable: reports/qs-week-41-report.pdf, reports/qs-q3-patterns-report.pdf.
//
//   npm run build:weekly              the newest report in data/plan.js
//   npm run build:weekly 38           that week
//   npm run build:weekly q3-patterns  that report, by its id
//   npm run build:weekly all          every report we hold
import { spawn } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { Cdp, ROOT, findChrome, serve, waitFor } from './chrome.mjs';

const TIMEOUT_MS = 600_000;      // `all` builds eight decks, each loading the delivery plan for its Gantts
const PAGE = { width: 1280, height: 720 };     // 16:9 at 96dpi, the slide's own size

async function reportsFromPlan() {
  const src = await readFile(path.join(ROOT, 'data', 'plan.js'), 'utf8');
  const g = { window: {} };
  new Function('window', src.slice(src.indexOf('window.QS_PLAN')))(g.window);
  return (g.window.QS_PLAN.weekly.reports || []).map(r => ({
    week: r.week, id: r.id || String(r.week), label: r.label || `Week ${r.week}`,
    out: r.pdf || `reports/qs-week-${r.week}-report.pdf`,
  }));
}

async function main() {
  const arg = process.argv[2];
  const all = await reportsFromPlan();
  const pick = () => {
    const want = String(arg).toLowerCase();
    const hit = all.find(r => r.id.toLowerCase() === want || String(r.week).toLowerCase() === want);
    if (!hit) throw new Error(`No report "${arg}" in data/plan.js. Reports: ${all.map(r => r.id).join(', ')}`);
    return [hit];
  };
  const weeks = !arg ? [all[0]] : (arg === 'all' ? all : pick());
  await mkdir(path.join(ROOT, 'reports'), { recursive: true });

  const server = await serve();
  const profile = await mkdtemp(path.join(tmpdir(), 'qs-weekly-chrome-'));
  const chrome = spawn(findChrome(), [
    '--headless=new', '--remote-debugging-pipe', `--user-data-dir=${profile}`,
    '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--hide-scrollbars', 'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe', 'pipe', 'pipe'] });
  const timer = setTimeout(() => { console.error('Weekly build timed out.'); chrome.kill(); process.exit(1); }, TIMEOUT_MS);

  try {
    const cdp = new Cdp(chrome);
    const script = await readFile(path.join(ROOT, 'scripts', 'weekly-page.js'), 'utf8');
    const { port } = server.address();

    for (const report of weeks) {
      const week = report.week;
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
      await page('Page.navigate', { url: `http://127.0.0.1:${port}/weekly.html` });
      const evaluate = params => page('Runtime.evaluate', params);
      await waitFor(evaluate, `!!document.querySelector('[data-slide-stage]')`, 'the weekly deck to render');
      await page('Emulation.setEmulatedMedia', { media: 'print' });

      const res = await evaluate({
        expression: `${script}\nbuildQsWeekly(${JSON.stringify({ week })})`,
        awaitPromise: true, returnByValue: true,
      });
      if (res.exceptionDetails) {
        throw new Error('Weekly layout failed: ' + (res.exceptionDetails.exception?.description || res.exceptionDetails.text));
      }
      // Explicit paper size rather than preferCSSPageSize: the slides are authored at 1280×720 CSS
      // pixels, which is exactly 13.333in × 7.5in, and Chrome otherwise rescales the page.
      await page('Emulation.setDeviceMetricsOverride', { ...PAGE, deviceScaleFactor: 1, mobile: false });
      const { data } = await page('Page.printToPDF', {
        // Chrome lays this page out at two thirds of the paper width (96dpi CSS against a 144dpi
        // print context), so the deck prints at 1.5 to fill the sheet. Verified: a 100%-width bar
        // spans the full page with this scale and 65% of it without.
        printBackground: true, preferCSSPageSize: true, scale: 1.5,
        marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0,
      });
      const out = path.join(ROOT, report.out);
      await mkdir(path.dirname(out), { recursive: true });
      await writeFile(out, Buffer.from(data, 'base64'));
      console.log(`Wrote ${path.relative(process.cwd(), out)} (16:9, ${res.result.value.slides} slides, ${report.label})`);
      await page('Page.close').catch(() => {});
    }
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
