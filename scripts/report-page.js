// Runs inside index.html during `npm run build` (see build-report.mjs); never loaded by the app itself.
// Drives the live page through its data-* hooks, copies each rendered view into A4-landscape
// sheets, scales it to fit, and leaves the sheets in the document for Chrome to print.
async function buildQsReport({ generated, week }) {
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
    if (!n) throw new Error('report: control not found ' + sel);
    n.click();
    await frame();
  }
  const showView = name => click(`[data-view-chip="${name}"]`);
  async function showPortfolio(label) {
    for (const chip of $$('[data-portfolio-chip]')) {
      const want = chip.dataset.portfolioChip === label;
      if ((chip.dataset.on === 'yes') !== want) await click(`[data-portfolio-chip="${chip.dataset.portfolioChip}"]`);
    }
  }

  await document.fonts.ready;
  await click('[data-stack-chip="All"]');
  if ($('[data-hide-released="yes"]')) await click('[data-hide-released]');
  await showPortfolio(null);

  // ---- Snapshot everything the report needs from the live page
  const portfolios = $$('[data-portfolio-chip]').map(c => ({
    label: c.dataset.portfolioChip,
    color: c.querySelector('span').style.background,
  }));
  const STAGES = ['Scoping', 'Prototype', 'Building', 'Release planning', 'Released'];

  await showView('Table');
  const projects = $$('[data-table-row]').map(r => ({ ...r.dataset }));

  await showView('Kanban');
  const kanban = $('[data-view="kanban"]').cloneNode(true);

  await showView('Gantt');
  const ganttAll = $('[data-view="gantt"]').cloneNode(true);

  const perPortfolio = [];
  for (const p of portfolios) {
    await showPortfolio(p.label);
    await showView('Table');
    const table = $('[data-view="table"]').cloneNode(true);
    await showView('Gantt');
    const gantt = $('[data-view="gantt"]').cloneNode(true);
    perPortfolio.push({ ...p, table, gantt, projects: projects.filter(x => x.portfolio === p.label) });
  }
  await showPortfolio(null);
  await showView('Table');

  async function snapshotTransformation() {
    const frame = el('iframe', 'position:absolute; left:-20000px; top:0; width:1500px; height:1100px; border:0;');
    frame.src = 'transformation.html';
    const loaded = new Promise((resolve, reject) => { frame.onload = resolve; frame.onerror = reject; });
    document.body.appendChild(frame);
    await loaded;
    const doc = frame.contentDocument;
    for (let t = 0; t < 300 && !doc.querySelector('[data-transformation] [data-portfolio-filter]'); t++) {
      await new Promise(r => setTimeout(r, 100));
    }
    const src = doc.querySelector('[data-transformation]');
    if (!src) throw new Error('report: transformation page did not render');
    await doc.fonts.ready;
    const node = document.importNode(src, true);
    node.querySelector('[data-portfolio-filter]').remove();
    frame.remove();
    return node;
  }
  const transformation = await snapshotTransformation();

  // ---- Sheet scaffolding
  const css = el('style');
  css.textContent = `
    @page { size: A4 landscape; margin: 0; }
    html, body { height: auto !important; background: var(--qs-page) !important; }
    #qs-report { font-family: 'PP Telegraf', 'Manrope', system-ui, sans-serif; color: var(--qs-ink); }
    #qs-report * { box-sizing: border-box; }
    .qs-sheet { width: 297mm; height: 210mm; padding: 8mm 10mm 6mm; background: var(--qs-page); display: flex; flex-direction: column;
      overflow: hidden; position: relative; break-after: page; page-break-after: always;
      -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .qs-sheet:last-child { break-after: auto; page-break-after: auto; }
    .qs-fit { flex: 1 1 auto; min-height: 0; min-width: 0; position: relative; overflow: hidden; }
    .qs-eyebrow { font-size: 8px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase; color: var(--qs-600); }
  `;
  document.head.appendChild(css);
  const report = el('div');
  report.id = 'qs-report';
  document.body.appendChild(report);
  $('#dc-root').style.display = 'none';

  function sheet(sectionHtml) {
    const s = el('div');
    s.className = 'qs-sheet';
    s.appendChild(el('div', 'flex:0 0 auto; display:flex; align-items:center; justify-content:space-between; gap:16px; padding-bottom:3mm; border-bottom:1px solid var(--qs-250);', `
      <div style="display:flex; align-items:center; gap:10px;">
        <img src="uploads/qs-logo.png" alt="QS" style="width:24px; height:24px; object-fit:contain;">
        <div>
          <div class="qs-eyebrow">${esc(week)}</div>
          <div style="font-size:14px; font-weight:800; letter-spacing:-0.2px; line-height:1.15;">2027 Data and Engineering Delivery Plan</div>
        </div>
      </div>
      <div data-section style="display:flex; align-items:center; gap:8px; font-size:11px; font-weight:800;">${sectionHtml}</div>`));
    const body = el('div', 'flex:1 1 auto; min-height:0; display:flex; gap:6mm; margin-top:4mm;');
    s.appendChild(body);
    s.appendChild(el('div', 'flex:0 0 auto; display:flex; justify-content:space-between; gap:16px; margin-top:3mm; font-size:8px; font-weight:700; color:var(--qs-550);',
      `<span>Generated ${esc(generated)} from the roadmap Kanban. Leads, readiness and technical risk are inherited from roadmap product profiles and are working placeholders.</span><span data-page-no></span>`));
    report.appendChild(s);
    return body;
  }
  // Mark a sheet for the contents page. Only marked sheets are listed, in page order.
  const mark = (body, label, color) => {
    const s = body.closest('.qs-sheet');
    s.dataset.tocLabel = label;
    if (color) s.dataset.tocColor = color;
    return body;
  };

  const fitBox = body => {
    const box = el('div');
    box.className = 'qs-fit';
    body.appendChild(box);
    return box;
  };
  const dot = color => `<span style="display:inline-block; width:10px; height:10px; border-radius:3px; background:${color};"></span>`;
  const section = (color, title, sub) => `${color ? dot(color) : ''}<span>${esc(title)}</span>${sub ? `<span style="color:var(--qs-600); font-weight:700;">${esc(sub)}</span>` : ''}`;
  const count = (list, key, value) => list.filter(x => x[key] === value).length;
  const productsOf = list => [...new Set(list.map(x => x.product).filter(Boolean))];
  const statRow = (label, value, color) => `
    <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:3px 0; border-bottom:1px solid var(--qs-150);">
      <span style="display:flex; align-items:center; gap:6px;">${color ? dot(color) : ''}${esc(label)}</span><span style="font-weight:800;">${value}</span>
    </div>`;
  const block = (title, inner) => `<div style="margin-top:12px;"><div class="qs-eyebrow" style="margin-bottom:4px;">${esc(title)}</div>${inner}</div>`;
  function watchList(list) {
    const critical = list.filter(x => x.risk === 'Critical');
    const high = list.filter(x => x.risk === 'High');
    const item = (n, text, detail) => `<div style="margin-top:6px;"><span style="font-weight:800;">${n}</span> ${esc(text)}${detail ? `<div style="color:var(--qs-600); font-size:9px; margin-top:1px;">${esc(detail)}</div>` : ''}</div>`;
    return [
      item(critical.length, 'with critical technical risk', productsOf(critical).join(', ')),
      item(high.length, 'with high technical risk', productsOf(high).join(', ')),
      item(count(list, 'owner', 'Unassigned'), 'with no owner on the Kanban'),
      item(count(list, 'placeholder', 'yes'), 'placeholders with no roadmap profile yet'),
    ].join('');
  }
  function summary(list) {
    return block('By stage', STAGES.map(s => statRow(s, count(list, 'stage', s))).join('')) +
      block('Stack', ['QAS', 'Legacy', 'Other'].map(s => statRow(s, count(list, 'stack', s))).join('')) +
      block('Watch list', `<div style="font-size:10px; line-height:1.35;">${watchList(list)}</div>`);
  }

  // Split a Gantt into N columns, keeping each band whole: a band that will not fit the column it is
  // on starts the next one. Every column repeats the month header and carries the today line.
  function ganttColumns(gantt, count, width) {
    const kids = [...gantt.children];
    const head = gantt.querySelector('[data-gantt-head]') || kids[0];
    const bodyWrap = gantt.querySelector('[data-gantt-body]') || kids[1];
    const total = gantt.querySelector('[data-gantt-total]') || kids[kids.length - 1];
    const overlay = bodyWrap.querySelector('[data-today-overlay]');
    const bands = [...bodyWrap.children].filter(n => n !== overlay);

    const row = el('div', `display:flex; gap:7mm; align-items:flex-start; width:max-content;`);
    const cols = [];
    for (let n = 0; n < count; n++) {
      const col = el('div', `width:${width}px; position:relative;`);
      col.appendChild(head.cloneNode(true));
      row.appendChild(col);
      cols.push(col);
    }
    // Measure each band, then fill the columns to an even depth.
    const probe = el('div', `width:${width}px; position:absolute; left:-20000px; top:0;`);
    document.body.appendChild(probe);
    const heights = bands.map(b => { probe.innerHTML = ''; probe.appendChild(b.cloneNode(true)); return probe.offsetHeight; });
    probe.remove();
    const target = heights.reduce((a, b) => a + b, 0) / count;
    let col = 0;
    let filled = 0;
    bands.forEach((band, i) => {
      if (col < count - 1 && filled > 0 && filled + heights[i] / 2 > target) { col += 1; filled = 0; }
      cols[col].appendChild(band.cloneNode(true));
      filled += heights[i];
    });
    cols[count - 1].appendChild(total.cloneNode(true));
    if (overlay) cols.forEach(c => c.appendChild(overlay.cloneNode(true)));
    const legend = gantt.querySelector('[data-gantt-legend]');
    if (!legend) return row;
    const stack = el('div', 'display:flex; flex-direction:column; gap:3mm; width:max-content;');
    const key = legend.cloneNode(true);
    key.style.cssText = 'display:flex; align-items:center; gap:4mm; flex-wrap:wrap; padding:0;';
    stack.appendChild(key);
    stack.appendChild(row);
    return stack;
  }

  // Apply a zoom, then keep shrinking until the node really fits: Chrome's minimum font size stops
  // small text scaling below 6px, so heavily zoomed views come out taller than a straight scale.
  function settle(box, node, zoom) {
    const limit = box.getBoundingClientRect();
    node.style.zoom = zoom;
    for (let n = 0; n < 8; n++) {
      const r = node.getBoundingClientRect();
      const over = Math.max(r.height / limit.height, r.width / limit.width);
      if (over <= 1) break;
      zoom = zoom / over * 0.995;
      node.style.zoom = zoom;
    }
    return zoom;
  }

  // Scale a copied view into a box. `width` is the layout width it renders at before zooming.
  function fit(box, node, width) {
    const wrap = el('div', `width:${width}px;`);
    wrap.appendChild(node);
    box.appendChild(wrap);
    return settle(box, wrap, Math.min(box.clientWidth / wrap.offsetWidth, box.clientHeight / wrap.offsetHeight));
  }

  // ---- Cover
  {
    const s = el('div');
    s.className = 'qs-sheet';
    s.style.cssText += 'padding:0; display:flex; flex-direction:row;';
    s.appendChild(el('div', `flex:0 0 108mm; background:var(--qs-ink); color:#fff; padding:18mm 14mm; display:flex; flex-direction:column; justify-content:space-between;
      -webkit-print-color-adjust:exact; print-color-adjust:exact;`, `
      <div>
        <img src="uploads/qs-logo.png" alt="QS" style="width:42px; height:42px; object-fit:contain;">
        <div style="font-size:10px; font-weight:800; letter-spacing:2.4px; text-transform:uppercase; opacity:0.72; margin-top:22mm;">${esc(week)}</div>
        <div style="font-size:40px; font-weight:800; letter-spacing:-1.2px; line-height:1.05; margin-top:6px;">2027 Data and Engineering<br>Delivery Plan</div>
        <div style="font-size:13px; font-weight:600; opacity:0.8; margin-top:10px; max-width:74mm; line-height:1.5;">Every initiative QS Technology is carrying into 2027: what it is, who owns it, when it builds and what it costs.</div>
      </div>
      <div style="display:flex; gap:14px; flex-wrap:wrap;">
        ${portfolios.map(p => `<div style="display:flex; align-items:center; gap:7px; font-size:10.5px; font-weight:700;">
          <span style="width:9px; height:9px; border-radius:3px; background:${p.color};"></span>${esc(p.label)}</div>`).join('')}
      </div>`));
    s.appendChild(el('div', 'flex:1 1 auto; padding:18mm 16mm; display:flex; flex-direction:column; justify-content:space-between;', `
      <div>
        <div class="qs-eyebrow">At a glance</div>
        <div style="display:flex; gap:10mm; flex-wrap:wrap; margin-top:6mm;">
          <div><div style="font-size:40px; font-weight:800; letter-spacing:-1px;">${projects.length}</div>
            <div style="font-size:10px; font-weight:800; letter-spacing:1.4px; text-transform:uppercase; color:var(--qs-600);">Initiatives</div></div>
          <div><div style="font-size:40px; font-weight:800; letter-spacing:-1px;">${portfolios.length}</div>
            <div style="font-size:10px; font-weight:800; letter-spacing:1.4px; text-transform:uppercase; color:var(--qs-600);">Portfolios</div></div>
          <div><div style="font-size:40px; font-weight:800; letter-spacing:-1px;">${count(projects, 'stage', 'Building') + count(projects, 'stage', 'Release planning')}</div>
            <div style="font-size:10px; font-weight:800; letter-spacing:1.4px; text-transform:uppercase; color:var(--qs-600);">In build or release</div></div>
        </div>
        <div style="margin-top:10mm; font-size:11px; font-weight:600; color:var(--qs-650); line-height:1.6; max-width:120mm;">
          Read the portfolio Kanban for where work sits by stage, the tables for the detail, and each portfolio section for its delivery schedule.
          Priority, area, technical risk and build windows are set where they have been agreed and inferred from the weekly reports otherwise.
        </div>
      </div>
      <div style="font-size:10px; font-weight:700; color:var(--qs-550);">Generated ${esc(generated)} · internal use</div>`));
    report.appendChild(s);
  }

  // ---- Contents, filled in once every sheet exists
  const tocBody = sheet(section(null, 'Contents', ''));
  const toc = el('div', 'flex:1 1 auto; column-count:2; column-gap:12mm;');
  tocBody.appendChild(toc);

  // ---- Everything, as three columns of Gantt
  {
    const body = mark(sheet(section(null, 'Delivery schedule', `${projects.length} initiatives`)), 'Delivery schedule');
    const box = fitBox(body);
    ganttAll.style.minWidth = '0';
    ganttAll.style.boxShadow = 'none';
    const cols = ganttColumns(ganttAll, 2, 1120);
    box.appendChild(cols);
    settle(box, cols, Math.min(box.clientWidth / cols.offsetWidth, box.clientHeight / cols.offsetHeight));
  }

  // ---- Page 1: whole Kanban, commentary on the left
  {
    const body = mark(sheet(section(null, 'Portfolio Kanban', `${projects.length} projects`)), 'Portfolio Kanban');
    body.appendChild(el('div', 'flex:0 0 58mm; font-size:10px; font-weight:600; color:var(--qs-650); overflow:hidden;', `
      <div style="font-size:18px; font-weight:800; color:var(--qs-ink); letter-spacing:-0.3px;">Portfolio Kanban</div>
      <div style="margin-top:3px;">${projects.length} projects across ${portfolios.length} portfolios, by stage.</div>
      ${block('By portfolio', portfolios.map(p => statRow(p.label, count(projects, 'portfolio', p.label), p.color)).join(''))}
      ${summary(projects)}`));
    const box = fitBox(body);
    kanban.style.minWidth = '0';
    kanban.style.boxShadow = 'none';
    // Lay the board out at the width that matches the box's shape, so it fills the page.
    const probe = el('div', 'width:1080px;');
    probe.appendChild(kanban);
    box.appendChild(probe);
    const width = Math.max(1080, Math.round(probe.offsetHeight * box.clientWidth / box.clientHeight));
    box.removeChild(probe);
    fit(box, kanban, width);
  }

  // ---- Page 2: technology transformation by quarter, laid out at desktop width so the 12 quarter
  // columns keep their names inside the cards
  {
    const box = fitBox(mark(sheet(section(null, 'Tech Transformation by Quarter', 'Q1 2025 – Q4 2027')), 'Tech Transformation by Quarter'));
    transformation.firstElementChild.style.marginTop = '0';
    transformation.querySelectorAll('[data-quarter-foot]').forEach(n => { n.style.position = 'static'; n.style.boxShadow = 'none'; });
    const zoom = fit(box, transformation, 1380);
    // Stretch the timeline to the sheet's full height so the quarter row sits on the bottom edge.
    transformation.style.height = `${box.clientHeight / zoom - 1}px`;
  }

  // ---- Table view, one portfolio per page run. A portfolio that nearly fits one page is laid out
  // wider and zoomed down (not below MIN_TABLE_ZOOM) instead of spilling a few rows onto a second page.
  const TABLE_WIDTH = 1240;
  const MIN_TABLE_ZOOM = 0.7;
  function tableShell(p, head) {
    const card = p.table.cloneNode(false);
    card.style.marginTop = '0';
    card.style.overflow = 'visible';
    const body = p.table.firstElementChild.cloneNode(false);
    body.style.minWidth = '0';
    body.appendChild(head.cloneNode(true));
    card.appendChild(body);
    return { card, body };
  }
  for (const p of perPortfolio) {
    const inner = p.table.firstElementChild;
    const head = inner.querySelector('[data-table-head]');
    const rows = $$('[data-table-row]', inner);
    const pages = [];

    const firstBox = fitBox(sheet(''));
    let onePageZoom = null;
    for (let z = firstBox.clientWidth / TABLE_WIDTH; z >= MIN_TABLE_ZOOM; z -= 0.02) {
      const { card, body } = tableShell(p, head);
      rows.forEach(r => body.appendChild(r.cloneNode(true)));
      const wrap = el('div', `width:${firstBox.clientWidth / z}px;`);
      wrap.appendChild(card);
      firstBox.appendChild(wrap);
      const fits = wrap.offsetHeight * z <= firstBox.clientHeight;
      wrap.remove();
      if (fits) { onePageZoom = z; break; }
    }

    if (onePageZoom) {
      pages.push(firstBox.closest('.qs-sheet'));
      const { card, body } = tableShell(p, head);
      rows.forEach(r => body.appendChild(r));
      const wrap = el('div', `width:${firstBox.clientWidth / onePageZoom}px;`);
      wrap.appendChild(card);
      firstBox.appendChild(wrap);
      settle(firstBox, wrap, onePageZoom);
    } else {
      let i = 0;
      let box = firstBox;
      while (i < rows.length) {
        if (!box) box = fitBox(sheet(''));
        pages.push(box.closest('.qs-sheet'));
        const { card, body } = tableShell(p, head);
        const wrap = el('div', `width:${TABLE_WIDTH}px;`);
        wrap.appendChild(card);
        box.appendChild(wrap);
        const zoom = box.clientWidth / TABLE_WIDTH;
        const limit = box.clientHeight / zoom;
        let added = 0;
        while (i < rows.length) {
          body.appendChild(rows[i]);
          if (added > 0 && wrap.offsetHeight > limit) { body.removeChild(rows[i]); break; }
          i++; added++;
        }
        settle(box, wrap, zoom);
        box = null;
      }
    }
    pages.forEach((pg, n) => {
      pg.querySelector('[data-section]').innerHTML = section(p.color, `${p.label} · Table`,
        `${p.projects.length} projects${pages.length > 1 ? ` · ${n + 1} of ${pages.length}` : ''}`);
      if (n === 0) { pg.dataset.tocLabel = `${p.label} · Table`; pg.dataset.tocColor = p.color; }
    });
  }

  // ---- Portfolio chapter: the colour block on the left, the portfolio's Gantt on the right
  perPortfolio.forEach((p, idx) => {
    const body = mark(sheet(section(p.color, p.label, `${p.projects.length} projects`)), `${p.label} · Schedule`, p.color);
    body.appendChild(el('div', `flex:0 0 72mm; border-radius:16px; padding:11mm 10mm; display:flex; flex-direction:column; justify-content:space-between;
      background:${p.color}; color:var(--qs-ink-on-fill); -webkit-print-color-adjust:exact; print-color-adjust:exact;`, `
      <div style="font-size:9px; font-weight:800; letter-spacing:1.8px; text-transform:uppercase;">Section ${idx + 1} of ${perPortfolio.length}</div>
      <div>
        <div style="font-size:34px; font-weight:800; letter-spacing:-0.9px; line-height:1.05;">${esc(p.label)}</div>
        <div style="font-size:12px; font-weight:700; margin-top:6px;">${p.projects.length} initiatives · delivery schedule</div>
      </div>
      <div style="font-size:10px; font-weight:700; line-height:1.5;">
        ${STAGES.map(st => { const n = count(p.projects, 'stage', st); return n ? `<div>${n} ${esc(st.toLowerCase())}</div>` : ''; }).join('')}
      </div>`));
    const box = fitBox(body);
    const gantt = p.gantt.cloneNode(true);
    gantt.style.minWidth = '0';
    gantt.style.boxShadow = 'none';
    fit(box, gantt, 1180);
  });

  // ---- Page numbers, then the contents from each sheet's own section label
  const sheets = $$('.qs-sheet', report);
  sheets.forEach((s, n) => {
    const no = s.querySelector('[data-page-no]');
    if (no) no.textContent = `Page ${n + 1} of ${sheets.length}`;
  });
  toc.innerHTML = sheets.map((s, n) => {
    const label = s.dataset.tocLabel;
    if (!label) return '';
    const color = s.dataset.tocColor || '';
    return `<div style="break-inside:avoid; display:flex; align-items:baseline; gap:8px; padding:2.8mm 0; border-bottom:1px solid var(--qs-150);">
      ${color ? `<span style="flex:0 0 auto; width:9px; height:9px; border-radius:3px; background:${color};"></span>` : '<span style="flex:0 0 auto; width:9px;"></span>'}
      <span style="font-size:11.5px; font-weight:800;">${esc(label)}</span>
      <span style="flex:1 1 auto; border-bottom:1px dotted var(--qs-250); margin:0 4px 3px;"></span>
      <span style="font-size:11px; font-weight:800; color:var(--qs-600);">${n + 1}</span>
    </div>`;
  }).join('');
  await Promise.all($$('img', report).map(img => img.decode().catch(() => {})));
  document.title = 'QS 2027 Data and Engineering Delivery Plan report';
  window.scrollTo(0, 0);
  return { pages: sheets.length };
}
