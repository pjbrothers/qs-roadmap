# Build notes — what this was, and what was taken out

Kept deliberately: the prototype went through a lot of shapes before this one, and the reasons for the
current shape are not obvious from the code alone. If you are picking this up cold, read this first and
then `README.md`, which describes the app as it stands.

## Where the data lives

**`data/plan.js` is the application.** One object, `window.QS_PLAN`, holding `meta`, `portfolios`,
`lanes`, `stages`, `owners`, `teams`, `teamColumns`, `products`, `initiatives`, `schedule`, `updates`,
`teamUpdates` and `weekly`. Every page reads it and nothing else. Updates go in here, not in the pages.

It did not start that way. Until mid-October the same data was spread across `data/weekly-updates.js`,
`data/team-updates.js`, `data/schedule.js` and about eight keyed maps inside `index.html` —
`tiers()`, `areas()`, `epicRisks()`, `epicBuildWindows()`, `investmentApproved()`, `heavyMaintenance()`,
`epicDescriptions()`, `initiativeLeads()`. Each one keyed by epic id, each one a place to forget to make
an edit. They were folded into the initiative records, and the three data files were deleted. The methods
of those names still exist in `index.html` but are now thin reads over `plan()` — they stay because
`renderVals()` is written against their shapes.

**Keys stay `EP-nn`, labels read `IN-nn`.** Jira and the weekly tech reports write EP numbers, so an
update that arrives naming EP-46 still lands on the right card with no translation step.
`initiativeLabel()` does the swap at render time. Do not rename the keys.

**Cards with no epic number** are keyed by their name (the Data and Cyber workstreams, the HubSpot
initiatives). Everything that looks a card up accepts either — `keysOf()` in `index.html`, the schedule
rows, the update entries. When Jira numbers arrive, put them in `ids` and re-key.

## Views that were removed

- **Months** — months down the page, teams across it, one cell per team per month. Removed once the
  Gantt covered the same schedule in less space. `data/plan.js → schedule` and `teamColumns` are what is
  left of it; `teamColumns` still drives the Gantt's *Group by → Team*.
- **Columns** — a card per project with a label column beside it. Removed from the switcher, but the
  markup stays: the project detail page renders exactly one of those cards. `showColumns` is now
  `!!detail`.
- The PDF report's per-portfolio pages used to be Columns pages; they are now that portfolio's Gantt.

## Things that look odd but are deliberate

- **`sc-if` tests truthiness**, so flags passed to it must be real booleans. `'no'` is a non-empty string
  and renders. This was a live bug for a while — `lightFlag`, `stateFlag` and the Gantt band's
  `showHead` were strings and never hid anything.
- **Inline styles are normalised by React**, so a selector like `[style*="position:absolute"]` will not
  match the rendered DOM (it becomes `position: absolute`). The print scripts walk the DOM by structure
  instead.
- **Chrome enforces a 6px minimum font size**, so a heavily zoomed view does not scale linearly. Both
  print scripts re-measure and shrink in a loop (`settle()`) rather than computing one scale factor.
- **The A3 gantt lays out at whatever width makes the height-driven scale fill the page**, then splits
  the bands across two columns. That is why the column width is searched rather than fixed.
- **The traffic light is unlit for work the investment committee has not approved.** That was asked for
  explicitly: no approval, no status.
- **Priority, area, risk and build windows are partly inferred** where nobody has set them — the rules
  are written at the top of each method in `index.html` and in `README.md`. Anything set by hand in
  `data/plan.js` wins.

## One format

There is one house format for everything printed: the download report's. The weekly deck uses the same
header (logo, week eyebrow, document title left; section label with its portfolio dot right), the same
footer (generation line left, page number right) and the same type scale — it is 16:9 rather than A4
landscape, and that is the only difference. If you restyle one, restyle both; do not introduce a third.

The weekly slides on screen **are** the PDF: `scripts/weekly-page.js` clones the live slide nodes at
their native 1280×720 and prints them. There is no second renderer to keep in step.

## The typeface

PP Telegraf is QS's own licence and lives in `fonts/`. The file we have is **Regular only** — one static
weight, not variable — while the design leans on 700 and 800 throughout, so those are synthetic bold.
It prints acceptably (the PDFs embed the face and text still extracts), but if the real weights turn up,
add them to the `@font-face` block in `palette.css` and the synthesis disappears.

## Printing the weekly deck

`npm run build:weekly` prints at **`scale: 1.5`** and that is deliberate. Chrome lays this page out at
two thirds of the paper width — a 100%-width test bar spanned 853px of a 1282px page — so without the
scale every slide prints into the top-left two thirds of the sheet. The delivery-plan report does not
need it. If a future Chrome fixes this, the symptom is the reverse: content overflowing the page, and
the fix is to drop the scale back to 1. The test that settles it is a sheet holding a `width:100%` bar:
it must span the full page.

The deck also strips the runtime's own `@media print { @page { margin } }` block and the viewport meta
before printing, and removes the hidden `index.html` frame it borrows the Gantt charts from — left in
place, that frame widens the document and Chrome shrinks the whole page to fit.

**The print sheet is 1280×720px, not 339×191mm.** The two are the same size to within two pixels, and
every weekly deck printed correctly at the paper's own size. The nine-slide quarterly deck did not: at
191mm each sheet tipped over the page box by a hair and printed a near-blank second page, 18 pages for
9 slides. At the slide's own pixel size no deck does. If a deck ever prints double, that is the first
thing to check — count pages against slides, not by eye.

**A report is a week or a period.** `weekly.reports` entries carry `id`, `label`, `week`, `pdf` and
optionally `kind`, `from` and `to`. `kind: 'patterns'` builds the quarterly read from `patternSlides()`
rather than the week's updates, and `week` is then a string (`'Q3'`), so anything keyed on the week has
to tolerate one. The build takes either (`npm run build:weekly 41`, `npm run build:weekly q3-patterns`)
and writes to the `pdf` path the report itself declares.

**The patterns deck counts, it does not editorialise.** Every number on those slides is derived in
`patternSlides()` from `updates.entries`, `teamUpdates.sections` and the initiative records, and the
recommendations on the cover and page 3 are assembled from those counts. If a figure looks wrong, the
fix is in the data or the count, not in prose.

## Changed after the clean-up (13 October 2026)

- The page switch says **Reports**, not Weekly Report: that page now holds the quarterly patterns
  report as well as the weekly ones.
- Week 40 holds both the Week 40 Tech Report and the Data Team Week 40 update. Where that report
  labels an item *Non-roadmap* it stays off the initiative pages and lands in **Other updates** — that
  is the report's own judgement, not a failure to match.

## Effort, and why the Gantt is marked by structure now (14 October 2026)

Every initiative carries an `effort` of `small`, `medium` or `large`, fixed for the whole build. It
sets the rate — £1k, £2k or £5k a week, from `meta.effortWeekGbp` — and it sets how much of the Gantt
bar is filled from the bottom: a quarter, a half, all of it. Width is duration, height is effort.
`meta.podWeekGbp` is left in place as the large rate for anything still reading it.

The timeline is quarter-aligned: build windows run over calendar quarters (Q4 26 is months 1–3, Q1 27
is 4–6, and so on from Sep 26 = 0), because that is how the work is now programmed.

**The Gantt's parts are named** — `data-gantt-legend`, `data-gantt-head`, `data-gantt-body`,
`data-gantt-total`. The three print scripts used to take them positionally (`children[0]` is the
header, `children[1]` the body, the last child the total), so adding the effort key to the top of the
view made `build:gantt` print **0 initiatives**. They now look the markers up and fall back to
position. If you add another block to the Gantt, give it a marker and leave the four alone.

**Chrome drops a CSS transform when it prints this deck.** The weekly Gantt slides are fitted into
their slot by scaling the chart; with `transform: scale()` the screen was right and the PDF was not —
the chart printed at full size inside a clipped slot, so the page showed about a third of the rows
with white space beneath. The DOM measured correctly at every step, including in the cloned sheet
right before printing, which is what made it look like a layout bug rather than a print one. The fit
uses `zoom` now, as the A3 sheet and the report always have, followed by the same re-measure loop —
zoom changes layout, so the zoomed node can come back taller than the ratio predicted. If a printed
chart is ever clipped again, check for a transform before touching the layout.

**The effort key is not on the weekly slide.** The deck fits its Gantt by measuring the node it
builds, so an extra block above the columns throws the measurement out — the chart lands at a third
of the slide with rows dropped. The key prints on the A3 sheet and in the report instead. If you want
it on the slide, the fit in `placeGantts()` has to measure the chart alone, not the wrapper.

**A build window is not a bar.** The bars come from `schedule.rows`, so an initiative with a window
but no schedule rows reads *Not scheduled*. When a window is dictated for work that never had a team
allocation, rows have to be written for it; the team falls back to the lane's busiest team in the
schedule, which is a guess worth checking.

## Where a team's work lands (19 October 2026)

`data/plan.js → teams[].portfolio` is what files a reporting team's work in the weekly deck. An
update that names an initiative follows the initiative's own lane; everything else — the unlinked
work and the risks a team raised against no initiative — follows the team's portfolio. Set it on any
new team, or that team's work drops into the catch-all section at the back of the deck.

## The plan is written to be shareable (19 October 2026)

Weekly reports arrive with things a delivery plan should not carry: who was off sick, who has handed
in their notice, which contractor's end date forces a decision, which supplier walked away, a named
person described as the bottleneck. All of it was neutralised in `data/plan.js` on 19 October and the
substance kept — "reduced delivery cover", "an outstanding external input", "the external partner
engagement has ended". One note (a resignation, naming the person and their last day) was deleted
outright.

Keep it that way when a new week is merged. Before the merge lands, read the week for: absence and
sickness, departures, resignations, backfill and headcount decisions, HR process, contractor names
and end dates, suppliers named as having failed, and anything that reads as a judgement on a team or
a person rather than on the work. Say what it means for delivery instead of who it was about. The
scrub pass in the scratchpad (`scrub.py`) holds the wording used last time.

## Dangling update keys (13 October 2026)

An update entry names the initiatives it belongs to by key. A key that matches no initiative is
dropped silently, so the work vanishes from the deck without any error. Three cases were found and
fixed, and a check now runs over the whole file:

- **EP-89, MoveIN Smart Match / AI Email** — 20 entries across weeks 38, 40 and 41 with no initiative
  behind them, so every MoveIN update was being thrown away. The initiative was added (University
  Services, building, schedule rows against the MoveIN pod); the EP number is the reports' own.
- **EP-74** (13 entries) and **EP-49**, **EP-62** (1 each) — retired roadmap rows. Every entry naming
  one also named a live initiative, so the stale key was dropped and nothing was lost.

If updates for a team look thin, check for dangling keys before rewriting anything.

## Removed in the production clean-up (13 October 2026)

- `qs-roadmap-review1.html` — a one-off review copy from September, superseded by `qs-roadmap-review.html`.
- `data/weekly-updates.js`, `data/team-updates.js`, `data/schedule.js` — folded into `data/plan.js`.
- The Months view markup and its renderVals block; the Columns view chip.

Nothing else was deleted. `support.js` is the DC runtime the pages are built on and is required.
