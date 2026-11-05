#!/usr/bin/env node
// Builds qs-roadmap-review.html: one self-contained file with all three pages, the runtime, the
// palette, the logo and both data files inlined, for sending to someone to review.
// It still loads React and the Manrope font from the internet, so the reader needs a connection.
//
//   npm run build:single
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'qs-roadmap-review.html');

const PAGES = [
  { id: 'roadmap', file: 'index.html', label: 'Delivery Plan', title: '2027 Data and Engineering Delivery Plan' },
  { id: 'transformation', file: 'transformation.html', label: 'Transformation', title: 'Tech Transformation by Quarter' },
  { id: 'architecture', file: 'architecture.html', label: 'Architecture', title: 'QS Emerging Platform Architecture' },
  { id: 'weekly', file: 'weekly.html', label: 'Reports', title: 'Reports' },
  { id: 'teams', file: 'teams.html', label: 'Teams', title: 'Teams' },
  { id: 'people', file: 'people.html', label: 'People', title: 'People' },
  { id: 'data', file: 'data.html', label: 'Data', title: 'Data' },
];
const LINKS = [
  [/href="index\.html"/g, 'href="#" data-qs-page="roadmap"'],
  [/href="teams\.html"/g, 'href="#" data-qs-page="teams"'],
  [/href="transformation\.html"/g, 'href="#" data-qs-page="transformation"'],
  [/href="architecture\.html"/g, 'href="#" data-qs-page="architecture"'],
  [/href="people\.html"/g, 'href="#" data-qs-page="people"'],
  [/href="data\.html"/g, 'href="#" data-qs-page="data"'],
  [/href="weekly\.html"/g, 'href="#" data-qs-page="weekly"'],
];

function between(src, open, close, what, file) {
  const a = src.indexOf(open);
  const b = src.indexOf(close, a + open.length);
  if (a < 0 || b < 0) throw new Error(`${file}: could not find ${what}`);
  return src.slice(a + open.length, b);
}

const read = f => readFile(path.join(ROOT, f), 'utf8');

const pages = [];
for (const page of PAGES) {
  const src = await read(page.file);
  let template = between(src, '<x-dc>', '</x-dc>', '<x-dc> block', page.file);
  const scriptOpen = src.slice(src.indexOf('<script type="text/x-dc"'), src.indexOf('>', src.indexOf('<script type="text/x-dc"')) + 1);
  const props = /data-props="([^"]*)"/.exec(scriptOpen)?.[1] ?? '';
  let logic = between(src, scriptOpen, '</script>', 'component logic', page.file);

  // Cross-page links become in-file page switches; the epic chips on Teams carry the target hash.
  for (const [re, to] of LINKS) template = template.replace(re, to);
  template = template.replace('<a href="{{ lb.href }}"', '<a data-qs-page="roadmap" href="{{ lb.href }}"');
  logic = logic.replace("'index.html#' + epic[1]", "'#' + epic[1]");
  // The report is a separate file, so drop its download button.
  template = template.replace(/\n\s*<a data-download[\s\S]*?<\/a>/g, '');
  // Styles and the logo are inlined once in the document head.
  template = template.replace(/\n\s*<link href="palette\.css" rel="stylesheet">/g, '');
  template = template.replace(/src="uploads\/qs-logo\.png"/g, 'src="__QS_LOGO__"');

  for (const [name, text] of [['template', template], ['logic', logic]]) {
    if (/<\/script/i.test(text)) throw new Error(`${page.file}: ${name} contains a closing script tag`);
  }
  pages.push({ ...page, template, logic, props });
}

const [support, palette, plan, logo, telegraf] = await Promise.all([
  read('support.js'), read('palette.css'), read('data/plan.js'),
  readFile(path.join(ROOT, 'uploads/qs-logo.png')).then(b => 'data:image/png;base64,' + b.toString('base64')),
  readFile(path.join(ROOT, 'fonts/PPTelegraf-Regular.otf')).then(b => 'data:font/otf;base64,' + b.toString('base64')),
]);

// The review copy is one file, so the font travels inside it rather than as a relative URL.
const paletteCss = palette.replace("url('fonts/PPTelegraf-Regular.otf')", `url('${telegraf}')`);

const holders = pages.map(p => `
<script type="text/plain" id="tpl-${p.id}">${p.template.replace(/__QS_LOGO__/g, logo)}</script>
<script type="text/plain" id="js-${p.id}">${p.logic}</script>`).join('');

const boot = `
(function () {
  var PAGES = ${JSON.stringify(pages.map(p => ({ id: p.id, title: p.title, props: p.props })))};
  var first = PAGES[0];

  // The runtime re-fetches the page source unless __resources exists; there is nothing to fetch here.
  window.__resources = {};

  // history.pushState throws on file:// in some browsers; fall back to the hash.
  ['pushState', 'replaceState'].forEach(function (fn) {
    var orig = history[fn].bind(history);
    history[fn] = function (a, b, url) {
      try { orig(a, b, url); } catch (e) {
        if (typeof url === 'string' && url.charAt(0) === '#') location.hash = url.slice(1);
        else if (typeof url === 'string') location.hash = '';
      }
    };
  });

  function text(prefix, id) { return document.getElementById(prefix + '-' + id).textContent; }

  // First page: put its template and logic in the document so the runtime boots straight into it.
  document.title = first.title;
  var host = document.createElement('x-dc');
  host.innerHTML = text('tpl', first.id);
  document.body.appendChild(host);
  var logic = document.createElement('script');
  logic.type = 'text/x-dc';
  logic.setAttribute('data-dc-script', '');
  if (first.props) logic.setAttribute('data-props', first.props);
  logic.textContent = text('js', first.id);
  document.body.appendChild(logic);

  // Switching pages swaps the mounted component's template and logic, so the old page unmounts cleanly.
  function show(id) {
    var page = PAGES.filter(function (p) { return p.id === id; })[0];
    if (!page || !window.__dcRootName) return;
    var name = window.__dcRootName();
    document.title = page.title;
    window.__dcUpdate(name, 'html', text('tpl', page.id));
    window.__dcUpdate(name, 'js', text('js', page.id));
    window.scrollTo(0, 0);
    // The runtime carries the old page's state across the swap, so tell the new page to read the
    // hash: the roadmap opens the project a Teams chip pointed at, and a plain switch clears it.
    setTimeout(function () {
      try { window.dispatchEvent(new PopStateEvent('popstate')); } catch (e) {}
      try { window.dispatchEvent(new HashChangeEvent('hashchange')); } catch (e) {}
    }, 0);
  }

  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-qs-page]') : null;
    if (!el) return;
    e.preventDefault();
    var href = el.getAttribute('href') || '';
    var hash = href.charAt(0) === '#' ? href.slice(1) : '';
    if ((location.hash || '').slice(1) !== hash) {
      try { location.hash = hash; } catch (err) {}
    }
    show(el.getAttribute('data-qs-page'));
  }, true);
})();`;

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>2027 Data and Engineering Delivery Plan</title>
<!-- Self-contained review copy of the QS 2027 Data and Engineering Delivery Plan prototype: Roadmap, Transformation
     and Teams in one file, with all data inlined. Built by scripts/build-single-file.mjs; edit the
     source files in the project, not this file. React and the Manrope font load from the internet. -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
${paletteCss}
</style>
</head>
<body>
${holders}
<script>
${plan}
</script>
<script>${boot}
</script>
<script>
${support}
</script>
</body>
</html>
`;

await writeFile(OUT, html);
const kb = Math.round(Buffer.byteLength(html) / 1024);
console.log(`Wrote ${path.relative(process.cwd(), OUT) || OUT} (${kb} KB, ${pages.map(p => p.label).join(' + ')})`);
