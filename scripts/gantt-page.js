// Runs inside index.html during `npm run build:gantt` (see build-gantt.mjs); never loaded by the app.
// Puts the live page on the Gantt, then copies the whole thing onto one A3-portrait sheet, scaled
// down until it fits. Chrome's 6px minimum font size stops small text scaling linearly, so the fit
// is re-measured rather than computed once.
async function buildQsGantt({ generated, week, group, sort }) {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const frame = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  const el = (tag, style, html) => {
    const n = document.createElement(tag);
    if (style) n.style.cssText = style;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  async function click(sel) {
    const n = $(sel);
    if (!n) throw new Error('gantt: control not found ' + sel);
    n.click();
    await frame();
  }

  await document.fonts.ready;
  await click('[data-view-chip="Gantt"]');
  await click('[data-stack-chip="All"]');
  if ($('[data-hide-released="yes"]')) await click('[data-hide-released]');
  for (const chip of $$('[data-portfolio-chip]')) {
    if (chip.dataset.on === 'yes') await click(`[data-portfolio-chip="${chip.dataset.portfolioChip}"]`);
  }
  if (sort) await click(`[data-gantt-sort="${sort}"]`);
  if (group) await click(`[data-gantt-group="${group}"]`);
  await frame();

  // ---- Snapshot the rendered Gantt, then take it apart into blocks that can be paged
  const live = $('[data-view="gantt"]');
  if (!live) throw new Error('gantt: the Gantt view did not render');
  const card = live.cloneNode(true);
  // The Gantt names its own parts, so an extra block (the effort legend) cannot shift them.
  const kids = [...card.children];
  const monthHead = card.querySelector('[data-gantt-head]') || kids[0];
  const total = card.querySelector('[data-gantt-total]') || kids[kids.length - 1];
  const bodyWrap = card.querySelector('[data-gantt-body]') || kids[1];
  const legend = card.querySelector('[data-gantt-legend]');
  const overlay = bodyWrap.querySelector('[data-today-overlay]');   // the single red today line
  const blocks = [];
  for (const band of [...bodyWrap.children]) {
    if (band === overlay) continue;
    for (const child of [...band.children]) {
      blocks.push({ node: child, band: band.dataset.ganttBand, head: !child.dataset.ganttRow });
    }
  }
  const projects = blocks.filter(b => !b.head).length;

  // Two narrow columns leave no room for "SEP 26", so each month is headed by its initial.
  function headClone() {
    const h = monthHead.cloneNode(true);
    const track = [...h.children].find(c => c.style.position === 'relative') || h.children[1];
    for (const cell of [...track.children]) {
      if (cell.getAttribute('title')) continue;        // the Today cap
      cell.textContent = (cell.textContent || '').trim().charAt(0);
      cell.style.letterSpacing = '0';
    }
    return h;
  }
  const totalText = total.textContent.replace(/\s+/g, ' ').trim();

  // ---- Sheet scaffolding
  const css = el('style');
  css.textContent = `
    @page { size: A3 portrait; margin: 0; }
    html, body { height: auto !important; background: var(--qs-page) !important; }
    #qs-gantt { font-family: 'PP Telegraf', 'Manrope', system-ui, sans-serif; color: var(--qs-ink); }
    #qs-gantt * { box-sizing: border-box; }
    .qs-sheet { width: 297mm; height: 420mm; padding: 10mm 10mm 8mm; background: var(--qs-page); display: flex; flex-direction: column;
      overflow: hidden; position: relative; break-after: page; page-break-after: always;
      -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .qs-sheet:last-child { break-after: auto; page-break-after: auto; }
    .qs-eyebrow { font-size: 9px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: var(--qs-600); }
    /* The quarter banding and current-month tint read as white blocks on the printed sheet, so the
       guide columns keep their rules but lose their fills. */
    #qs-gantt [data-gantt-row] div[style*="border-right"] { background: transparent !important; }
  `;
  document.head.appendChild(css);
  const report = el('div');
  report.id = 'qs-gantt';
  document.body.appendChild(report);
  $('#dc-root').style.display = 'none';

  function sheet(sub) {
    const s = el('div');
    s.className = 'qs-sheet';
    s.appendChild(el('div', 'flex:0 0 auto; display:flex; align-items:center; justify-content:space-between; gap:16px; padding-bottom:4mm; border-bottom:1px solid var(--qs-250);', `
      <div style="display:flex; align-items:center; gap:12px;">
        <img src="uploads/qs-logo.png" alt="QS" style="width:30px; height:30px; object-fit:contain;">
        <div>
          <div class="qs-eyebrow">${esc(week)}</div>
          <div style="font-size:19px; font-weight:800; letter-spacing:-0.3px; line-height:1.15;">2027 Data and Engineering Delivery Plan</div>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:10px; font-size:13px; font-weight:800;">
        <span>Delivery Gantt</span>
        <span style="color:var(--qs-600); font-weight:700;">${esc(sub)}</span>
      </div>`));
    // The effort key travels with the sheet: without it a quarter-filled bar is just a thin bar.
    if (legend) {
      const key = legend.cloneNode(true);
      key.style.cssText = 'flex:0 0 auto; display:flex; align-items:center; gap:13px; flex-wrap:wrap; padding:2.5mm 0 0;';
      s.appendChild(key);
    }
    const body = el('div', 'flex:1 1 auto; min-height:0; margin-top:4mm; position:relative; overflow:hidden;');
    s.appendChild(body);
    s.appendChild(el('div', 'flex:0 0 auto; display:flex; justify-content:space-between; gap:16px; margin-top:3mm; font-size:9px; font-weight:700; color:var(--qs-550);',
      `<span>Generated ${esc(generated)}. ${esc(totalText)}</span><span data-page-no></span>`));
    report.appendChild(s);
    return body;
  }

  // ---- One sheet, two columns. Bands stay whole: a band that will not fit the first column starts
  // the second one. Each column carries its own month header; the total closes the last column.
  const body = sheet(`${projects} initiatives · grouped by ${group || 'portfolio'}`);
  const wrap = el('div', 'position:absolute; top:0; left:0; transform-origin:top left;');
  body.appendChild(wrap);
  const limit = body.getBoundingClientRect();
  const GUTTER = 26;

  // Band order, each as its header plus its rows, so a band can be measured and moved as a unit.
  const bands = [];
  for (const b of blocks) {
    if (b.head || !bands.length) bands.push([]);
    bands[bands.length - 1].push(b.node);
  }

  // Lay the two columns out at a candidate width, splitting the bands as evenly as the whole bands
  // allow, and report the scale that width would print at.
  async function layout(width) {
    wrap.innerHTML = '';
    wrap.style.zoom = 1;
    const cols = [el('div', `width:${width}px; position:relative;`), el('div', `width:${width}px; position:relative;`)];
    const row = el('div', `display:flex; gap:${GUTTER}px; align-items:flex-start;`);
    cols.forEach(c => { c.appendChild(headClone()); row.appendChild(c); });
    wrap.appendChild(row);
    await frame();

    const heights = [];
    for (const band of bands) {
      const probe = el('div', `width:${width}px; position:absolute; visibility:hidden;`);
      band.forEach(n => probe.appendChild(n.cloneNode(true)));
      wrap.appendChild(probe);
      heights.push(probe.offsetHeight);
      probe.remove();
    }
    const totalH = heights.reduce((a, b) => a + b, 0);
    let filled = 0;
    let col = 0;
    bands.forEach((band, i) => {
      if (col === 0 && filled > 0 && filled + heights[i] / 2 > totalH / 2) col = 1;
      band.forEach(n => cols[col].appendChild(n.cloneNode(true)));
      if (col === 0) filled += heights[i];
    });
    cols[1].appendChild(total.cloneNode(true));
    // One red line per column, running the whole height rather than a segment per row, and a second
    // line closing the plan at the end of December 2027.
    if (overlay) cols.forEach(c => {
      c.appendChild(overlay.cloneNode(true));
      const end = overlay.cloneNode(true);
      end.setAttribute('title', 'End of the plan, December 2027');
      const line = end.children[1] && end.children[1].firstElementChild;   // [label spacer][track][capex spacer]
      if (!line) return;
      line.style.left = '100%';
      line.style.marginLeft = '-1px';
      line.style.width = '1px';
      line.style.background = 'var(--qs-250)';   // the same weight as a quarter rule
      c.appendChild(end);
    });
    await frame();
    const w = row.offsetWidth;
    const h = row.offsetHeight;
    return { zoom: Math.min(limit.width / w, limit.height / h), width, w, h };
  }

  // A wider column gives each initiative more timeline but costs scale; try a few and keep the best.
  let best = null;
  for (const width of [620, 700, 780, 860, 940]) {
    const got = await layout(width);
    if (!best || got.zoom > best.zoom) best = got;
  }
  await layout(best.width);
  let zoom = best.zoom;
  wrap.style.zoom = zoom;
  for (let n = 0; n < 10; n++) {
    const r = wrap.getBoundingClientRect();
    const over = Math.max(r.height / limit.height, r.width / limit.width);
    if (over <= 1.001) break;
    zoom = zoom / over * 0.997;
    wrap.style.zoom = zoom;
  }
  const pages = 1;

  $('[data-page-no]', body.parentElement).textContent = 'Page 1 of 1';

  await frame();
  return { pages, projects, zoom: Math.round(zoom * 100) / 100, column: best.width };
}
