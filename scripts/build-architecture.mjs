#!/usr/bin/env node
// Builds an architecture page as a single 16:9 PDF. The page's own @media print rules give
// the board the height the header leaves, so what prints is the page as it appears on screen,
// on one slide.
//
//   npm run build:architecture
import { spawn } from 'node:child_process';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { Cdp, ROOT, findChrome, serve, waitFor } from './chrome.mjs';

const TIMEOUT_MS = 120_000;
const VIEW = { width: 1600, height: 1000 };          // wide enough that the header sits on one row
const PAPER = { width: 1600 / 96, height: 900 / 96 };  // 16:9 at 96dpi, matching the @page rule
const PAGE_FILE = 'architecture.html';
const OUT = 'reports/qs-platform-architecture.pdf';

async function main() {
  const server = await serve();
  const profile = await mkdtemp(path.join(tmpdir(), 'qs-architecture-chrome-'));
  const chrome = spawn(findChrome(), [
    '--headless=new', '--remote-debugging-pipe', `--user-data-dir=${profile}`,
    '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--hide-scrollbars', 'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe', 'pipe', 'pipe'] });
  const timer = setTimeout(() => { console.error('Architecture build timed out.'); chrome.kill(); process.exit(1); }, TIMEOUT_MS);

  try {
    const cdp = new Cdp(chrome);
    const { port } = server.address();
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
    await page('Emulation.setDeviceMetricsOverride', { ...VIEW, deviceScaleFactor: 1, mobile: false });
    await page('Page.navigate', { url: `http://127.0.0.1:${port}/${PAGE_FILE}` });
    const evaluate = params => page('Runtime.evaluate', params);

    await waitFor(evaluate, `!!document.querySelector('.board .canvas')`, 'the board to render');
    await waitFor(evaluate, `(() => { const c = document.querySelector('.canvas'); return c && /scale\\(/.test(c.style.transform); })()`, 'the board to fit itself');
    await waitFor(evaluate, `document.fonts.status === 'loaded'`, 'the fonts');

    // Print styles resize the board, and the board rescales its canvas from a ResizeObserver,
    // so switch media first and let that settle before asking for the PDF.
    await page('Emulation.setEmulatedMedia', { media: 'print' });
    await new Promise(r => setTimeout(r, 600));

    const check = await evaluate({
      expression: `(() => {
        const bd = document.querySelector('.board'), cv = document.querySelector('.canvas');
        const scale = parseFloat((getComputedStyle(cv).transform.match(/matrix\\(([^,]+)/) || [0, 1])[1]);
        return {
          boardW: Math.round(bd.clientWidth), boardH: Math.round(bd.clientHeight),
          ratio: +(bd.clientWidth / bd.clientHeight).toFixed(3),
          pageH: Math.round(document.querySelector('.arch-page').getBoundingClientRect().height),
          overflow: +(cv.offsetHeight * (bd.clientWidth / cv.offsetWidth) - bd.clientHeight).toFixed(1),
          unresolved: (document.querySelector('.arch-page').innerHTML.match(/\\{\\{[^}]*\\}\\}/g) || []).length,
          scale,
        };
      })()`,
      returnByValue: true,
    });
    const info = check.result.value;
    if (info.unresolved) throw new Error(`${PAGE_FILE}: ${info.unresolved} unresolved bindings`);
    if (Math.abs(info.ratio - 16 / 9) > 0.01) throw new Error(`${PAGE_FILE}: board is ${info.ratio}:1, not 16:9`);
    if (info.overflow > 1) throw new Error(`${PAGE_FILE}: board content overflows by ${info.overflow}px`);

    const { data } = await page('Page.printToPDF', {
      printBackground: true, preferCSSPageSize: false, scale: 1,
      paperWidth: PAPER.width, paperHeight: PAPER.height,
      marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0,
    });
    const out = path.join(ROOT, OUT);
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, Buffer.from(data, 'base64'));
    const kb = Math.round(Buffer.from(data, 'base64').byteLength / 1024);
    console.log(`Wrote ${OUT} (16:9, one page, ${kb} KB, board ${info.boardW}×${info.boardH})`);

    await page('Page.close').catch(() => {});
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
