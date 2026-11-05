// Chrome plumbing shared by the PDF builds (build-report.mjs, build-gantt.mjs): finds a local
// Chrome, serves the project folder, and talks CDP over --remote-debugging-pipe. No npm deps.
import { createServer } from 'node:http';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json', '.pdf': 'application/pdf',
};

export function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  ].filter(Boolean);
  const hit = candidates.find(p => existsSync(p));
  if (!hit) throw new Error('Chrome not found. Set CHROME_PATH to a Chrome or Chromium executable.');
  return hit;
}

export function serve() {
  const server = createServer(async (req, res) => {
    const { pathname } = new URL(req.url, 'http://localhost');
    const file = path.join(ROOT, decodeURIComponent(pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(ROOT + path.sep)) return res.writeHead(403).end();
    try {
      const body = await readFile(file);
      res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' }).end(body);
    } catch {
      res.writeHead(404).end();
    }
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

// Chrome DevTools Protocol over --remote-debugging-pipe: fd 3 in, fd 4 out, NUL-delimited JSON.
export class Cdp {
  constructor(proc) {
    this.out = proc.stdio[3];
    this.nextId = 0;
    this.pending = new Map();
    this.onEvent = () => {};
    let buf = Buffer.alloc(0);
    proc.stdio[4].on('data', chunk => {
      buf = Buffer.concat([buf, chunk]);
      let end;
      while ((end = buf.indexOf(0)) >= 0) {
        const msg = JSON.parse(buf.subarray(0, end).toString('utf8'));
        buf = buf.subarray(end + 1);
        const waiter = msg.id != null && this.pending.get(msg.id);
        if (waiter) {
          this.pending.delete(msg.id);
          msg.error ? waiter.reject(new Error(`${waiter.method}: ${msg.error.message}`)) : waiter.resolve(msg.result);
        } else {
          this.onEvent(msg);
        }
      }
    });
  }
  send(method, params = {}, sessionId) {
    const id = ++this.nextId;
    this.out.write(JSON.stringify({ id, method, params, ...(sessionId && { sessionId }) }) + '\0');
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject, method }));
  }
}

// "Week 38, 2026": ISO week of the day the report is built.
export function isoWeekLabel(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const week = Math.ceil(((d - Date.UTC(d.getUTCFullYear(), 0, 1)) / 86400000 + 1) / 7);
  return `Week ${week}, ${d.getUTCFullYear()}`;
}

export async function waitFor(evaluate, expression, what, timeout = 30_000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const { result } = await evaluate({ expression, returnByValue: true });
    if (result.value) return;
    await new Promise(r => setTimeout(r, 250));
  }
  throw new Error(`Timed out waiting for ${what}`);
}
