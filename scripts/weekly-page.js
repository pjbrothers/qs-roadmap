// Runs inside weekly.html during `npm run build:weekly`; never loaded by the app itself.
// Walks the week's deck, copies each slide onto its own 16:9 sheet and leaves them for Chrome to print.
async function buildQsWeekly({ week }) {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const frame = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

  async function click(sel) {
    const n = $(sel);
    if (!n) throw new Error('weekly: control not found ' + sel);
    n.click();
    await frame();
  }

  await document.fonts.ready;
  if (week) await click(`[data-week-link="${week}"]`);
  await frame();

  const stage = $('[data-slide-stage]');
  const count = Number(stage && stage.dataset.slideCount) || 0;
  if (!count) throw new Error('weekly: the deck is empty');

  // The Gantt slides are filled from a hidden copy of the delivery plan; wait for it. A deck with no
  // Gantt at all (the quarterly patterns read) declares none, so there is nothing to wait for.
  if (Number(stage.dataset.deckGantts) > 0) {
    const deadline = Date.now() + 60000;
    while (Date.now() < deadline) {
      const slots = $$('[data-gantt-slot]');
      if (slots.length && slots.every(s => s.dataset.filled)) break;
      await new Promise(r => setTimeout(r, 200));
    }
  }

  const css = document.createElement('style');
  css.textContent = `
    @page { size: 339mm 191mm; margin: 0; }
    /* Pin the document to the slide width, or Chrome shrinks the whole page to fit stray content. */
    html, body { width: 1280px !important; height: auto !important; overflow: hidden !important; background: #fff !important; }
    #qs-weekly { font-family: 'PP Telegraf', 'Manrope', system-ui, sans-serif; color: var(--qs-ink); }
    #qs-weekly * { box-sizing: border-box; }
    /* The sheet is the slide's own 1280x720, not the paper's 339x191mm. They are the same size to
       within a pixel, but at the paper's height a short deck tips over the page box and every slide
       prints a near-blank second page; at the slide's own size no deck does. */
    .qs-slide-sheet { width: 1280px; height: 720px; overflow: hidden; position: relative; background: #fff;
      break-after: page; page-break-after: always;
      -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .qs-slide-sheet:last-child { break-after: auto; page-break-after: auto; }
  `;
  document.head.appendChild(css);
  const deck = document.createElement('div');
  deck.id = 'qs-weekly';
  document.body.appendChild(deck);

  // Each slide is rendered live, then copied at its native 1280×720 with the preview's scaling undone.
  for (let n = 0; n < count; n++) {
    if (n) await click('[data-slide-next]');
    await frame();
    // A slide carrying a Gantt is fitted across two animation frames: the first pass rebuilds the
    // columns at a new width and the second re-measures them. Cloning between the two prints the
    // chart at the wrong scale — it lands short and clipped — so let the fit settle first.
    if ($('[data-gantt-slot]')) {
      await new Promise(r => setTimeout(r, 150));
      await frame();
      await frame();
    }
    const slide = $('[data-slide]');
    const sheet = document.createElement('div');
    sheet.className = 'qs-slide-sheet';
    const copy = slide.cloneNode(true);
    copy.style.position = 'static';
    copy.style.transform = 'none';
    sheet.appendChild(copy);
    deck.appendChild(sheet);
  }

  // The hidden copy of the delivery plan would otherwise stretch the printed page and shrink it to fit.
  $$('[data-gantt-source]').forEach(f => f.remove());
  $('#dc-root').style.display = 'none';
  await Promise.all($$('img', deck).map(img => img.decode().catch(() => {})));
  document.title = 'QS ' + (/^\d+$/.test(String(week)) ? 'Week ' + week : week) + ' report';

  // The runtime injects its own @media print { @page { margin } } block; drop every page rule that
  // is not ours, then re-add ours last so the paper size and zero margins win.
  for (const sheet of [...document.styleSheets]) {
    let rules;
    try { rules = sheet.cssRules; } catch (e) { continue; }
    for (let i = rules.length - 1; i >= 0; i--) {
      const text = rules[i].cssText || '';
      if (/@page|@media\s+print/i.test(text) && sheet.ownerNode !== css) sheet.deleteRule(i);
    }
  }
  document.head.appendChild(css);

  // A viewport meta makes Chrome lay the print out at the emulated device width rather than the page.
  document.querySelectorAll('meta[name="viewport"]').forEach(m => m.remove());
  window.scrollTo(0, 0);
  await frame();
  return { slides: count, week };
}
