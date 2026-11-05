# Handoff: QS 2027 Data and Engineering Delivery Plan

## Overview

Six linked internal pages for QS Technology leadership, plus three PDF builds. A **Delivery Plan | Reports | Teams | People | Transformation | Data** switch at the top right of each page moves between them. Everything reads one file, `data/plan.js` — see `NOTES.md` for why, and for what was taken out along the way.

1. **2027 Data and Engineering Delivery Plan** (`index.html`) — every initiative as a Gantt row, a Kanban card or a table row, with its priority, area, risk, build window, approval, leads and capex.
2. **Reports** (`weekly.html`) — every published report, weekly and quarterly, with a 16:9 slide deck of the selected one and a PDF of exactly those slides.
3. **Teams** (`teams.html`) — each delivery team's weekly updates, the people on it and the initiatives it carries.
4. **People** (`people.html`) — product, data and engineering leads, with the initiatives each one holds.
5. **Tech Transformation by Quarter** (`transformation.html`) — the portfolio as a timeline: systems arriving above a centre line and retired below it, Q1 2025 to Q4 2027.
6. **Data** (`data.html`) — `data/plan.js` rendered as pretty-printed JSON, section by section, with a copy button.

Clicking any project on the roadmap opens its **project detail page**: its Columns card on the left and its weekly updates on the right.

They exist to answer two leadership questions in one screen each: *what are we building, who owns it, and how exposed are we?* and *what turns on and what turns off, quarter by quarter?* The roadmap is deliberately dense — it is a review artefact for an ELT-style meeting, not a dashboard for daily use.

## About the design files

The two HTML files in this bundle (`index.html` and the `.dc.html` quarter view) are **design references created in HTML**. They are prototypes of the intended look and behaviour, not production code to lift. `support.js` is the runtime that renders them locally; serve the folder and open either file in a browser to view it.

The task in a real codebase is to **recreate these views in the target environment** (React, Vue, whatever the app already uses) with its own component library, routing and data layer. All content is currently hardcoded in the prototype's logic class — in production it should come from the portfolio system of record (the epic board / roadmap tool), not from a literal array.

## Running locally

A macOS LaunchAgent (`~/Library/LaunchAgents/com.qs.roadmap.server.plist`) serves this folder at **http://localhost:8765**. It starts at login, keeps running through sleep, and restarts itself if it stops. Its log is `~/Library/Logs/qs-roadmap-server.log`.

- Check it: `launchctl print gui/$(id -u)/com.qs.roadmap.server | grep state`
- Restart it: `launchctl kickstart -k gui/$(id -u)/com.qs.roadmap.server`
- Load it again if it was removed: `launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.qs.roadmap.server.plist`
- Stop it for good: `launchctl bootout gui/$(id -u)/com.qs.roadmap.server`
- Without the service: `cd ~/Code/qs-roadmap && python3 -m http.server 8765`. Use another port if the service already holds 8765.

The pages load React (unpkg) and the Manrope font (Google Fonts) from the internet, so they need a connection to render.

## Fidelity

**High fidelity.** Colours, type sizes, spacing, row heights and hover behaviour are final and specified below. Recreate pixel-accurately using the codebase's primitives.

## Screens / views

### 1. 2027 Data and Engineering Delivery Plan

Three display modes behind one segmented switcher — Gantt, Kanban, Table — sharing one set of filters. A Months mode (months down the page, teams across it) and a Columns mode were retired once the Gantt covered the same ground; the Columns card markup stays, because the project detail page renders one. **The Kanban is the master list:** every other mode shows exactly the same 67 projects, one per Kanban card, with no grouping. Columns and Kanban keep board order (lane, then stage, then position). Table rows sort by the chosen column header (see Table mode); the default is A→Z by project name. The page opens on the Gantt.

**Page frame**
- Background `--qs-page`, ink `--qs-ink`, font Manrope (400–800), page padding `34px 40px 46px`.
- Header: 46×46 QS logo; eyebrow with today's ISO week, e.g. `WEEK 38, 2026` (11px / 800 / 2.4px tracking / `--qs-600`); title `2027 Data and Engineering Delivery Plan` (31px / 800 / −0.6px).
- Right of header, top row: the **page switch**, a white pill (padding 4, radius 999) holding *Roadmap* (active: `--qs-ink` bg, white 12px/800) and *Transformation* (a link, 12px/700 `--qs-600`). Next to it, **Download report**: an ink pill (`8px 16px`, 12px/800 white, `↓` glyph) linking to `qs-roadmap-report.pdf` with a `download` filename of `QS 2027 Data and Engineering Delivery Plan report.pdf`.
- Right of header, second row: legend pills (white, radius 999, `8px 15px`, 12px/700 `--qs-600`) with a 10px colour chip: QAS stack `--qs-750`, Legacy `--qs-250`, Other white with a `--qs-400` ring, Heavy maintenance (35% amber tint), Placeholder (hatched `--qs-600` / `--qs-250`).

**Filter bar** — white, radius 16, padding `14px 18px`, three control groups, a toggle and a count, in this order:
- *View* (first, leftmost): segmented Kanban / Months / Table / Columns (Kanban is the default) in a `--qs-page` pill; active = `--qs-ink` bg, white text.
- *Portfolio*: four multi-select chips — Core, Sector Intelligence, D&E, University Services (Data Collection is part of Core). Off = white bg, ink text, 1.5px `--qs-150` border. On = portfolio colour bg, ink text. Each shows its project count.
- *Stack*: segmented All / QAS / Legacy / Other, same treatment as View.
- **Hide Released** toggle: a pill (`7px 15px`, 12px/700). Off is white with a `1.5px --qs-150` border; on is `--qs-ink` with white text. When on, Released projects drop out of every view and the Kanban loses its Released column.
- Right-aligned: `N of 62 projects`.

**Columns mode** — horizontal scroll (`overflow-x:auto`), 10px gap.
- Sticky left label column, 176px, page-background, right-aligned uppercase labels (11px / 800 / 0.6px / `--qs-600`), each with a `1px --qs-150` top border. An 82px spacer aligns it with the card headers. **Row heights must match the card cells exactly**: 40, 46, 46, 46, 84, 58, 58, 48, 48, 48, 48, 48, 96, 132.
- Project cards: 242px wide, white, radius 16, shadow `0 1px 2px rgba(26,39,46,0.06)`. Hover: `translateY(-4px)` + `0 14px 34px rgba(26,39,46,0.16)`, 150ms.
- Card header, 82px, lane portfolio colour, radius 16 top: project name (15.5px / 800 / `--qs-ink-on-fill`), clamped to two lines, then a bottom row with the Kanban lane as caption (10px / 800 / 1.4px) and, on unprofiled projects only, a `PLACEHOLDER` tag on its right (9.5px / 800 / uppercase / ink on a `rgba(255,255,255,0.7)` pill). Keeping the tag off the name row lets long names use the full width.
- **Initiative leads** come from `initiativeLeads()` in the logic class: `EP-nn: [product, data, engineering]`, assigned per initiative. A card with an entry shows only those names, and a role left blank reads `TBC`. A card with no entry keeps the Kanban owner as product leader and the roadmap product's inherited data and engineering leads. An assigned name that matches a Kanban owner keeps that owner's avatar colour; anyone else gets `--qs-600` with white initials.
- Rows in order: **Stack** (40px — the stack pill, 11px/800 uppercase, `4px 11px`); **Product leader** (the Kanban owner, in their owner colour; unassigned = `–` in `--qs-600` on `--qs-150`), **Data leader** (`--qs-600` avatar), **Engineering leader** (`--qs-650` avatar) — 23px circles with 9.5px/800 white initials and the name beside; **Product description** (84px, 11.5px / 600 / 1.45 / `--qs-650`); **Epic** (58px — `EP-nn` chip(s), 10px/800 `--qs-650` on `--qs-page`, radius 999, `3px 7px`, over a `Roadmap product: …` line in 10.5px/700 `--qs-550`); **Expected build** (58px — 15 month dashes plus a range caption); **Data readiness**, **Design system**, **Engineering** (48px each — four segment bars plus a level word); **Stage** (48px — the Kanban stage pill); **Ready check** (48px — TW value plus a note); **Technical risk** (96px — four severity bars, a severity word, and the risk statement); **Commentary** (132px — Position and Next, each an uppercase portfolio-colour head over body copy).
- Expected build track: 16 dashes = Sep 26 → Dec 27, 9px tall, radius 2, filled in the portfolio colour for the build window, `--qs-150` otherwise.
- A build window can be a list of ranges (`epicBuildWindows()`), for work that stops and restarts: only those months fill, the gaps read as off-build, and the caption joins the ranges with `·`. Ready check and build sort still come from the first range.
- **Heavy maintenance**: for epics listed in `heavyMaintenance()` (currently EP-32 MyQS Cerebrum and EP-26 MyQS Design System), every month outside the build window is a light tint of the portfolio colour, `color-mix(in srgb, <portfolio> 35%, #fff)`, instead of `--qs-150`. A `Heavy maintenance outside build` line (10px/700 `--qs-600`, with a 12×8 swatch of the tint) sits under the range caption in Columns and Table.
- Readiness bars: four segments, 8px tall, radius 999, filled `--qs-600`, empty `--qs-150`; labels None / Early / In progress / Near ready / Ready.
- Risk bars use their own ramp (below) and labels None / Low / Moderate / High / Critical.
- **Placeholders** are projects with no roadmap product profile yet. The header gets a hatch over the portfolio colour, `repeating-linear-gradient(135deg, rgba(255,255,255,0.4) 0 8px, transparent 8px 16px)`, plus the `PLACEHOLDER` tag. The data and engineering leads, build, readiness, risk and ready-check rows read `TBC` over empty tracks. In Table mode the meta reads `EP-nn · PLACEHOLDER`.
- **Released** projects show `Released` for expected build (no dashes filled) and `Live` for ready check.

**Table mode** — one white card, radius 16, eight columns: Project, Stack, Stage, Leads, Description, Expected build, Technical risk, Ready check.
- `grid-template-columns: minmax(130px,1.3fr) 76px 118px 88px minmax(150px,1.5fr) minmax(130px,1.4fr) minmax(100px,1fr) 92px`, gap 11px, inside a `min-width:1000px` wrapper. The card scrolls horizontally below that width. Keep the fr/minmax floors.
- Header row: 10.5px / 800 / 1.4px uppercase `--qs-550`, `1.5px --qs-150` bottom border.
- **Sorting**: Project, Stage, Expected build, Technical risk and Ready check headers are clickable. The active header turns ink with a `▲`/`▼`, and clicking it again reverses the order. Default directions: risk is highest first; the others are A→Z or earliest first. Expected build orders Released first, then by build start and end month. Ready check orders Live, TW4 → TW7. TBC values always sort last, and ties fall back to name.
- Rows: padding `13px 22px`, `1px #F2F5F6` bottom border, hover `#F8FAFB`.
- Project cell: 4px lane-colour spine, name 13.5px/800, meta `EP-nn · ROADMAP PRODUCT` 9.5px/800/1px `--qs-550`.
- Stack cell: pill, 9.5px/800/0.8px uppercase, `3px 8px`. Colours as in the stack pill tokens below.
- Stage cell: the stage pill at 9.5px/800/0.6px uppercase, `4px 9px`.
- Leads cell: three 24px initials-only avatars left to right — product, data, engineering — each with its role and name in the `title` (e.g. `Product leader: Charlie Liu`).
- Description clamped to two lines (`max-height:34px; overflow:hidden`).
- Expected build and Risk reuse the bar components; Ready check shows the TW value plus its note.

**Gantt mode** — the same schedule as Months, turned on its side: one row per initiative, the 16 months across. One white card, radius 16, `min-width:1060px` inside a horizontal-scroll wrapper. `npm run build:gantt` prints it alone on a single A3 portrait page in **two columns**: bands stay whole, so a band that will not fit the first column starts the second, each column repeats the month header, and the Total capex row closes the second. The build tries a range of column widths and keeps the one that prints largest — currently 620px a column at 83%. Each column carries two full-height rules: the red today line, and a `--qs-600` one closing the plan at the end of December 2027.
- Label column 308px, one line: a 4px portfolio spine running the full row height, the name (12px/800, ellipsis), the epic IDs right-aligned against the timeline, then a 15px priority square, a 15px uncoloured area square, an 11px rounded-square traffic light and the Kanban stage as a bare two-letter code — **SC** scoping, **PR** prototype, **BD** building, **RP** release planning, **RS** released. The code has no box, so it reads as a label rather than another chip. Rows are 27px. Clicking a row opens the project detail page.
- Traffic light, on every row: `--qs-signal-blue` once a system is deployed, otherwise technical risk in signal colours set apart from the portfolio hues — `--qs-signal-red` (High, Critical), `--qs-signal-orange` (Moderate), `--qs-signal-green` (Low, None) — each with a `rgba(26,39,46,0.14)` inset ring. A card with no roadmap profile takes its risk from `epicRisks()` (keyed by epic id or name — the Data and Cyber workstreams carry the status their report printed). Failing that, the light reads exposure instead: red if it builds within two months of now, orange if it is scheduled later, green if nothing is scheduled. Its `title` reads `Deployed` or `Technical risk: <level>`, with `(inferred, no roadmap profile)` on the 22 exposure lights.
- Track: 16 equal guide columns (`1px #F2F5F6` rules). Banding follows **calendar quarters** — the series opens in Sep 26, the last month of Q3 — alternating between transparent and `#FAFBFC`, with a heavier `1px --qs-250` rule opening each quarter in both the header and the rows. The month the page is read in is tinted `--qs-150` at 55% with a darker header label. On the A3 the fills are dropped (they print as white blocks) and the quarter rules carry the structure on their own.
- **A bar's width is its duration and its fill height is its effort.** Build effort is fixed for the whole build — small, medium or large, never changing mid-flight — and it prices the work: **small £1k a week, medium £2k, large £5k**, four weeks to the month. A small bar is filled a quarter of the way up from the bottom, a medium one half, a large one all the way. The fill colour is the stage: full portfolio colour while an initiative is **building or in release planning**, a 52% tint while it is still **scoping or prototyping**, grey once it is **released**. Work the investment committee has not approved keeps its dashed border and a paler track whatever the stage. The key sits above the Gantt and travels with it into the A3 sheet, the report and the weekly decks.
- Bars are built from `data/schedule.js`, not from the build window: consecutive months with the same team collapse into one bar, so an initiative that changes team mid-flight reads as two bars with a break between them, and a split build window (Cerebrum, MCP) reads as separate bars. A bar is 14px tall, radius 4, and carries the team's short name when it spans two months or more. An initiative the investment committee has approved (`investmentApproved()`) draws in the portfolio colour with ink-on-fill text; one that is not yet approved draws at an 18% tint with a dashed 65% border and `--qs-600` text, and its traffic light is left unlit — a white square with a `--qs-250` ring — so unfunded work carries no status at all. The row's spine keeps the full portfolio colour either way. Its `title` gives the name, ID, month range, full team and whether it is approved.
- Tier, from `tiers()` keyed by epic id or by card name: **1** white on `--qs-ink`, **2** ink on `--qs-450`, **3** `--qs-600` on `--qs-150`, and `–` in `--qs-300` when no tier is set. Its `title` reads `Tier N` or `Tier not set`. Tiers are inferred from the Week 33–38, 40 and 41 reports — how many of the eight reported weeks carried an update for that initiative: 3 or more is tier 1 (18), one or two is tier 2 (73), none is tier 3 (12). Edit an entry in `tiers()` to set one by hand.
- Area, from `areas()` keyed by epic id or card name: a 15px square the same size as the tier but uncoloured — white with a `--qs-250` inset ring — holding **S** Skills (employability, labour market, LMI), **R** Recruitment (candidate recruitment, global student flows), **I** Innovation (HolonIQ, AI evaluation, market intelligence), **P** Performance (rankings, reputation) or **Q** every area of QS — the platform, identity, infrastructure, security, data layer and company-wide tooling the rest is built on. Its `title` reads `<Area> (<context>)`, e.g. `Performance (rankings submissions)` or `All of QS (estate-wide security posture)`. Current split: 41 R, 31 Q, 17 P, 15 S, 4 I.
- A row with no schedule rows shows `Not scheduled` in grey or `Released` in `--qs-signal-blue` in place of a bar. Released sorts to the top of its band and Not scheduled to the bottom. In between, rows follow the Sort control.
- **Sort** (segmented, Gantt only, `state.ganttSort`, default Start): **Start** orders by start month, then length, then A→Z, with released at the top of each band; **Priority** orders by tier (1, 2, 3, then no tier) then start month; **Area** orders Q, P, R, S, I — the order the business reads them in, not alphabetically — then by tier, then start month; **Stage** runs down the Kanban pipeline — scoping, prototype, building, release planning, released — then by tier, then start month, so the list reads as progress rather than alphabetically.
- **Group by** (a segmented control that appears beside the view switcher only in Gantt mode, `state.ganttGroup`, default Portfolio): **Portfolio**, **Priority** (Priority 1, 2, 3, then No priority set), **Area** (All of QS, Performance, Recruitment, Skills, Innovation), **Stage**, **Team** (the `monthColumns()` group its first bar sits in, else Unassigned), **Stack** or **None**. Each band has a header — an 11px colour chip, the name in 12px/800/1.4px caps, an `N items` pill and a rule filling the row — except None, which is one unlabelled band, so the gantt stays a flat list. Bands keep the source order (lane order, stage order, column order, QAS/Legacy/Other); rows inside a band keep the start-month sort.
- **Capex**, a 76px right-aligned column after the timeline: a pod week costs £5,000 and a scheduled month is four pod weeks, so capex is `months × 4 × £5k` over the months the schedule actually holds for that initiative — a split window only counts the months in it. Rounded to `£20k` / `£1.2m`, tabular figures, and `–` in `--qs-300` when nothing is scheduled. Its `title` spells out the months and pod weeks.
- A **Total capex** row closes the grid: a `1.5px --qs-150` rule, the label in the initiative column, the working in the middle (`N of M initiatives scheduled, P pod months at £5k a week, 4 weeks a month`) and the total in 15px/800 under the capex column. Each band header carries its own subtotal in the same column, and the working line splits the total into approved and not-yet-approved capex. Both follow the filters, so narrowing to a portfolio or stack reads as that slice's capex.

**Kanban mode** — a copy of the epic board. One white card, radius 16, padding `16px 16px 18px`, `min-width:1080px` inside a horizontal-scroll wrapper.
- Five stage columns (four while Hide Released is on), `repeat(N, minmax(0,1fr))`, gap 10px: **Scoping, Prototype, Building, Release planning, Released**. The header row uses ink `--qs-ink` bars (radius 10, `9px 12px`) with an 11px/800/1.2px uppercase white label and a count pill on `rgba(255,255,255,0.16)`.
- One swimlane per portfolio: Core, Sector Intelligence, D&E, University Services. The source board calls the first lane QS Platform; here it is Core, and the Data Collection epics (Codex EP-72, QAS Data Collection – Rankings EP-21 and – Evaluation EP-28) sit together at the top of its Scoping column. Each lane has a header with a 12px portfolio-colour chip, a 15px/800/1.6px uppercase name, an `N items` pill (`--qs-150`, 11.5px/700 `--qs-600`) and a `1px --qs-150` rule filling the rest of the row. Lanes with no cards after filtering are hidden.
- Each lane × stage cell is a `--qs-page` well, radius 12, padding 6, gap 6. Wells in a lane stretch to the tallest one.
- Epic card: white, `1px --qs-150` border, radius `0 8px 8px 0` (square left end, rounded right), with a 4px portfolio-colour rectangle running the full height of the left edge (a child element, not a border) and `7px 0` vertical padding on the contents rather than the card. The name is 13px/800 on one line with an ellipsis. A 10px stack chip in the legend colours comes before the ID, with `Stack: …` in its `title`. The ID is 10px/800/0.8px `--qs-600` (merged duplicates show `EP-74 · EP-80`). The owner is a 20px initials avatar, or a dashed `--qs-250` circle with a person glyph when unassigned. The `title` holds the full name, ID(s) and the roadmap product(s) the epic rolls into. Under that row, the same expected-build track as the other views runs the full width of the card at 3px tall, so every view shows the build window; its `title` reads `Expected build: <range>`. Hover lifts 1px.
- Owner avatar colours: see *Owner avatars* in Design tokens.
- Filtering (all three views): a portfolio chip matches a project through its Kanban lane. Stack matches the project's own stack.

**Project detail page** — opens when you click a Table row, a Columns card or a Kanban card. It lives at `index.html#<epic id>` (or `#<name>` for a card with no ID, e.g. `#CX%20Admin%202`), so it can be linked to. A merged card answers to either of its IDs (`#EP-80` opens Strengthen Cyber Security). The browser's back button, the **← Back to <view>** pill and Esc all return to the view you came from.
- The filter bar is replaced by a detail bar: the back pill, a portfolio-colour chip, the project name, `EP-nn · LANE · STAGE` in 10.5px/800 caps, and a right-aligned count (`N updates in M of 6 weekly reports`).
- Left: the project's Columns card with the row-label column. This is the same markup as Columns mode; the row switches to `align-items:flex-start` and drops its `max-content` min-width.
- Right: a white panel that opens with **Initiative review** — the leadership walkthrough commentary for that initiative, in a `--qs-page` box with optional *Leading* and *Timing* lines — then **Weekly updates** (flex `1 1 480px`, 360–900px, radius 16, padding `4px 24px 12px`), newest week first. Each week (weeks 33–38) has:
  - a header (`Week 37` 17px/800 plus dates in 12px/700 `--qs-600`) and, when the report's roadmap-alignment table covered the project, its board phase as a pill (stage pill colours; Jira phases like *Build Ready*, *In Progress*, *Done* map onto the grey ramp);
  - the alignment table's one-line summary (12.5px/700 ink);
  - the Week 35 **delivery hypothesis** note, if any: signal plus statement in a `--qs-page` box;
  - delivery items, each with a 3px portfolio-colour left rule: title 13px/800, status pill (dark for Shipped / Done, orange tint for Behind / Delivered late / On hold, light grey for On track), team caption 10px/800 caps, body 12px/600 `--qs-650`, optional bullets;
  - risks and decisions in an orange-tint box with an orange left rule;
  - *No update for this project in the week's report* when there is nothing;
  - for weeks 33–34, a note that items were mapped by subject.

Updates come from `data/weekly-updates.js` (see *Weekly update data*).

### 3. Teams (`teams.html`)

- Same page frame, week eyebrow and header as the other pages; title `Teams`; the page switch with *Teams* active, then Download report.
- Two columns under the header, gap 20px:
  - **Team menu** (left): 250px white card (radius 16, padding 10), sticky at `top:20px` and scrolling on its own when taller than the screen. It is grouped as in the two most recent reports (Weeks 37–38): QS Application System (SYD1, Cerebrum), Security (Cyber, Security (CISO)), Sector Intelligence (BLR2, BLR1, ECU1, ECU2, MoveIN), Digital and Events (Events and Drupal), University Services (QS Apply (Appian), UBS Development, CX Systems) and Infrastructure (MIMO, D&E, UBS). Each group header (10.5px/800 caps on `--qs-page`, with *All*) opens the whole group. Each team row shows its name (13px/800), lead (10.5px/700) and an `N/6` count of reports it appears in. The active row is ink with white text.
  - **Panel** (right, max 980px): a header card (group eyebrow, team name 24px/800, lead, `Updates in N of 6 weekly reports`), then one white card per week, newest first. Each card has the week label, dates and source report, then each team section's printed heading, highlights (13.5px/600 ink), **Delivery** items, risks, **Next week** (→ bullets) and **Notes**. Delivery items show a title, an epic label chip that links to that project's detail page on the roadmap (`index.html#EP-nn`, with ↗) or a plain *Non-roadmap* / *Initiative not identified* chip, a status pill, the body and any bullets. A week with nothing from the team reads *No update from this team in the Week N report.*
- Selection lives in the URL hash (`teams.html#blr2`, `teams.html#si` for a whole group); SYD1 is the default.
- Earlier reports named some teams differently: Week 34's UBS HubSpot Systems and Week 33's University Services (Simon Pennington), and Week 33's single Infrastructure section. These appear only in their group's *All* view, under their original headings. Cerebrum (Nicolas Jourdain) reported separately in Weeks 34 and 38 and is a current team.
- Week 38 reports ECU1 and ECU2 as one section. It appears under both teams, and once in the Sector Intelligence *All* view.
- Data comes from `data/team-updates.js` (see *Weekly update data*).

### 2. Tech Transformation by Quarter

- Same page frame, week eyebrow and header pattern; title `Tech Transformation by Quarter` (no subline). Top right: the page switch with *Transformation* active, then Download report.
- Key row (white, radius 16): the four portfolio filter chips (multi-select, same palette colours and ink text as the roadmap; Data Collection events count as Core), the arriving / retired keys, and two counters (arriving in ink, retired in `#A9301F`).
- The page is a full-height flex column, so the timeline stretches to fill the screen and the bottom quarter row sits on the bottom edge. On screens too short to fit, that row is `position: sticky; bottom: 12px`, with a page-colour halo, so it stays visible while the page scrolls.
- **No horizontal scroll** — a 12-column CSS grid (`repeat(12, minmax(0,1fr))`, gap 7px) fits Q1 2025 → Q4 2027 on one page.
- Each column: a quarter header bar (radius 10, `8px 9px`, centred, 11.5px/800 label over an 8.5px/800 era caption), an arriving stack bottom-aligned above a **3px `#1A272E` centre line**, a retired stack below it, and the quarter label repeated in a matching bar at the foot.
- Era shading on the header bars: Pre-transition `#DFE6E9` with `#5C6B75` text; Build `#1A272E` white; Replatform `#2068C0` white.
- Arriving cards: white, radius 9, padding `8px 9px`, 3px portfolio-colour spine, name 10.5px/800, note 8.5px/800 uppercase `#8A99A3`. Hover lifts 3px.
- Retired cards: 1.5px dashed `#C3CFD5`, translucent white fill, name struck through in `#5C6B75`, spine at 45% opacity.

## Interactions & behaviour

- Portfolio chips toggle (multi-select, empty set = show all). Stack and View are single-select. Hide Released is an on/off toggle, and the Table sort is set by its headers.
- All filtering is client-side over one in-memory list; the count label reflects the filtered length.
- Card and row hover lifts / tints as specified; no click-through, no modals, no animation beyond the 120–150ms transitions.
- Lead names in table mode appear only as native tooltips — if the target app has a tooltip component, use it instead.
- Layout is fixed-width by intent in Columns and Kanban modes (horizontal scroll is the reading mechanic). Table mode reflows down to 1000px and scrolls horizontally below that. The quarter grid must reflow down to ~900px.

## State management

| State | Type | Default |
| --- | --- | --- |
| `groups` | array of portfolio keys | `[]` (all) |
| `stack` | `'All' \| 'QAS' \| 'Legacy' \| 'Other'` | `'All'` |
| `view` | `'Kanban' \| 'Months' \| 'Table' \| 'Columns'` | `'Kanban'` |
| `hideReleased` | boolean | `false` |
| `sortKey` | `'name' \| 'stage' \| 'build' \| 'risk' \| 'ready'` | `'name'` |
| `sortDir` | `'asc' \| 'desc'` | `'asc'` |

| `selected` | epic key from the URL hash, or `null` | `null` |

The quarter page carries only `groups`. The Teams page carries only `selected` (a team or group id from the URL hash, default `syd1`).

Derived per project, from its roadmap product profile: month-dash array, three readiness bar arrays with level words, risk bar array with severity word and colour, prototype pill colours, initials, and the TW ready-check value (`TW = min(7, 4 + floor(monthsAfterOct26 / 3))`, where TW4 falls in November).

#### 4. Reports

`weekly.html` — every report we hold, newest first, down the left (its label, dates, and a PDF link to the file that report declares). The right is a 16:9 slide deck laid out at 1280×720 and scaled to the panel, starting level with the sidebar; the arrows sit over the slide so no width is given up to them, and ← → page it too.

**The initiative is the primary dimension, not the team.** Every update is filed under the portfolio its initiative number belongs to. A weekly deck runs: a **cover** carrying the week at a glance, a block per portfolio with *Outcomes* and *Risks & decisions*; **Contents**; the whole-plan **Delivery schedule** Gantt across two columns; the **Engineering activity** heatmaps; then, for each portfolio, a **part cover** in the portfolio colour beside that portfolio's Gantt, followed straight by its **update pages** — one heading per initiative, its IN number, teams and stage, the week's update at length, and its own **Risks and decisions** line beneath. A risk a team raised that is not pinned to one initiative becomes its own block in the same pages, and so does that team's unlinked work — every reporting team carries a `portfolio` in `data/plan.js → teams`, so MoveIN, MoveON and MIMO file under Sector Intelligence, Digital and Events and QS Apply under D&E, UBS Development and CX Systems under University Services, and so on. Only a team with no portfolio at all would fall through to a closing **Other updates** section. There is no per-portfolio executive summary page: it said less than the updates it sat in front of. Week 42 is 21 slides.

The **quarterly patterns** report (`kind: 'patterns'`) reads across every week in its range instead of reporting one week. It is nine slides: a cover carrying the recommendations, Contents, **Recommendations**, **Persistent risks** (initiatives that raised a risk in two or more separate weeks, newest wording), **Momentum and inertia** (reported in five weeks or more, against initiatives inside their build window the reports barely mention), **Concentration** (initiatives per product lead, delivery items per team), **Funding exposure** (unapproved build by portfolio and the largest commitments), **Work off the plan** (unlinked delivery by team, and the same item recurring in three weeks or more) and the heatmaps. Every figure is counted from `data/plan.js`; the recommendations are written from those counts, not by hand.

The two illustrative heatmap panels — a **Productivity Heatmap** (lines of code a day) and **AI Code Intensity** (share of code written by AI, near zero two years ago to about 45% now, weekends light) — share one page, 30 days down and 24 months across. Both come from a fixed seed, so they are identical in the page and the PDF.

Slides use narrow margins, a top-aligned header and a bottom-aligned footer. `npm run build:weekly [week|id|all]` prints exactly those slides at 13.333in × 7.5in to the path that report declares — `reports/qs-week-NN-report.pdf`, `reports/qs-q3-patterns-report.pdf` — so every published report stays retrievable.

### 5. People

`people.html` — three columns, **Product**, **Data** and **Engineering**. Each column lists the people in that role, most initiatives first, with the initiatives they carry indented underneath as Kanban-style cards (portfolio spine, name, stack chip, IN-nn, priority, area and the expected-build strip). An initiative appears once in each column, under whichever lead holds that role, so it repeats across the three. Leads come from the initiative where it names them, from its roadmap product profile otherwise; TBC and Unassigned sort last. The filters match the Gantt's: portfolio chips, area (Q/P/R/S/I), stack and Hide Released, with the count on the right.

### 6. Data

`data.html` renders `data/plan.js` as pretty-printed JSON so the structure can be read and copied. A left menu lists every top-level key with its size; **Structure** summarises the shape (key, type, size, fields) rather than the contents, and **Everything** is the whole object. The Copy button copies whatever section is on screen, falling back to a hidden textarea where the clipboard API is blocked.

The Teams page carries two panels on the right: **People** — everyone named as a product, data or engineering lead on the initiatives that team holds, with how many each carries — and **Initiatives** — what the team is on or has been on, built from the schedule (which months it holds) and the weekly updates (what it reported against), each marked Working on it, Worked on it, Ahead or Not scheduled.

## One source

`data/plan.js` holds everything: `meta` (title, the month series, the pod rate), `portfolios`, `lanes`, `stages`, `owners`, `teams`, `teamColumns`, `products` (roadmap product profiles with leads, description, risk and commentary), `initiatives` (every card with its own ids, stage, priority, area, risk, build window, approval, leads and description), `schedule` (rows, unscheduled, released), `updates` (weekly history per initiative) and `teamUpdates` (weekly history per team). The pages read it and nothing else — `index.html` maps it into the shapes `renderVals` wants through `plan()`, `fromInitiatives()` and `byKey()`; `teams.html` and `data.html` read it directly. Updates go in here, not in the pages.

**Initiative numbers** — shown as **IN-nn** everywhere on screen, but every key underneath stays **EP-nn**: the epic rows, `data/schedule.js`, `tiers()`, `areas()`, `epicRisks()`, `epicBuildWindows()`, the weekly update entries and the detail page's `#EP-46` link. That is deliberate — Jira and the weekly tech reports write EP-nn, so an update that arrives naming EP-nn still lands on the right card without a translation step. `initiativeLabel()` does the EP→IN swap at render time, and the Teams page does the same for the epic chips while keeping the EP link.

## Data shape to implement against

```
Epic {                               // master record: one per Kanban card, one row / column / card in every view
  ids: string[],                     // usually one; >1 when duplicate epics are merged; [] if the board has no ID
  name, lane: 'Core' | 'Sector Intelligence' | 'D&E' | 'University Services',
  stage: 0-4,                        // Scoping, Prototype, Building, Release planning, Released
  owner: initials | null,            // shown as the product leader
  products: string[]                 // roadmap product profile(s) it inherits from; [] = placeholder
}

Product {                            // profile shared by the epics that point at it; not shown on its own
  name, portfolio, stack: 'QAS' | 'Legacy' | 'Other',
  productLeader, dataLeader, engineeringLeader,
  description,                       // 2 sentences max
  buildWindow: [startMonthIdx, endMonthIdx]    // 0 = Sep 26, 15 = Dec 27. Inherited from the roadmap
    | [[start, end], …],                       // product unless epicBuildWindows() sets one on the
                                               // initiative itself. A one-month window reads as that
                                               // month; a list of ranges is work that pauses and picks
                                               // up again, and reads as "Dec 26 – Jan 27 · Mar 27 – …"
  dataReadiness, designReadiness, engineeringReadiness,  // 0-4
  risk: { level: 0-4, statement },
  readyCheck: 'TW4' | 'TW5' | 'TW6' | 'TW7',
  readyCheckNote,                    // e.g. 'ELT', 'Review'
  commentary: { position, next }
}

TimelineEvent { quarterIdx: 0-11, kind: 'new' | 'retired', name, note, portfolio }
```

The Kanban supplies each project's name, IDs, lane, stage and owner. Stack, data and engineering leads, description, build window, readiness, technical risk, ready check and commentary come from the product profile the epic points at, so epics under the same product share those values. For an epic with a multi-product mapping, the first product is used. An epic with no profile is a placeholder: its stack is QAS when its name starts with `QAS`, and Other otherwise. Product profiles that no epic points at (currently AI Help, WUR, SR, AR, ER, Rank Ad and TUN) stay in the data but are not shown. The prototype logs a console warning for any epic that points at an unknown product.

## PDF report

`npm run build` writes **`qs-roadmap-report.pdf`**, which the Download report button on both pages links to. The PDF is built ahead of time, not on the fly: rebuild it whenever the data changes. It needs Node 18+ and a local Chrome or Chromium. The script finds the usual install paths; set `CHROME_PATH` to override. It has no npm dependencies.

How it works (`scripts/build-report.mjs`):
1. Serves this folder on a local port.
2. Starts headless Chrome and drives it over the DevTools pipe.
3. Opens `index.html` and waits for it to render.
4. Switches to print media at A4-landscape size and runs `scripts/report-page.js` inside the page.
5. That script clicks through the live views using the `data-*` hooks (`data-view-chip`, `data-portfolio-chip` / `data-on`, `data-stack-chip`, `data-hide-released`, `data-view`, `data-table-row`, `data-card`, `data-labels`). It copies each rendered view into A4-landscape sheets, scaling each copy to fit, then prints the result.

The text stays vector, so the PDF zooms cleanly. Chrome won't render text below 6px, so heavily scaled views lay out slightly taller than a straight scale predicts. The layout script handles this by re-measuring after it scales and shrinking until each view fits.

Report structure (A4 landscape; every sheet after the cover has the week eyebrow, the title, a section label, the generation date and page numbers):
1. **Cover** — an ink panel with the week, the title and the portfolio legend, beside the headline counts.
2. **Contents** — built at the end from each sheet's own section label, two columns, with the portfolio colour against each entry.
3. **Delivery schedule** — the whole Gantt on one page in **two columns**, bands kept whole: a band that will not fit the first column starts the second, and each column repeats the month header and the today line.
4. **Portfolio Kanban** — the whole Kanban scaled onto one page, with a commentary column: counts by portfolio, stage and stack, plus a watch list (critical and high technical risk, projects with no owner, placeholders).
5. **Tech Transformation by Quarter** — the timeline, loaded from its own page in a hidden frame, laid out at 1380px and stretched to the sheet height so the quarter row sits on the bottom edge.
6. **Table view by portfolio** — each portfolio starts on a new page and runs A→Z. Its header repeats on continuation pages. A portfolio that nearly fits one page is laid out wider and scaled down (not below 70%) instead of spilling a few rows onto a second page.
7. **Portfolio chapters**, one page each: the portfolio colour block on the left (section number, name, counts by stage) and that portfolio's **Gantt** on the right.

The build always shows every project: it turns Hide Released off and leaves all filters clear.

## Weekly update data

Both data files are extracted from the QS weekly tech reports for weeks 33–38 (10 August – 19 September 2026). For Week 35, the extraction used the later, 14-page version of the report.

**`data/weekly-updates.js`** (`window.QS_WEEKLY_UPDATES`) feeds the project detail page: `weeks` (week, dates, report, `mapping`) and `entries`. Each entry has a `week`, a `kind` (`summary`, `hypothesis`, `item`, `risk`) and the `epics` it belongs to. Items add `team`, `title`, `status`, `text` and optional `bullets`; summaries add the board `phase`; hypotheses add a `signal`. A separate `reviews` array holds the initiative-review commentary (`epics`, `text`, optional `owner` and `timing`), shown above the weekly updates.
- Weeks 35–38 label every delivery item with its epic, so those mappings come straight from the reports: delivery labels, the roadmap-alignment table and the Week 35 delivery hypothesis.
- Weeks 33–34 have no labels. Their items are mapped by subject, only where a card clearly matches (`mapping: 'inferred'`), and other team work is left out.
- Entries for EP-88 (Decommission Informatica) and EP-89 (MoveIN Features) are kept. Both epics appear in the Week 37 and 38 reports but not on the Kanban, so they show up automatically if those cards are added.

**`data/schedule.js`** (`window.QS_SCHEDULE`) feeds the Months view. `rows` are `[ticket, month index, team id]` triples — 0 = Sep 26 through 15 = Dec 27 — so a ticket can sit with one team one month and another the next; add or edit rows to move work. `unscheduled` and `released` are `[ticket, team id]` for tickets with no expected build window yet and for deployed work. Rows follow each ticket's build window, so changing a window in `epicBuildWindows()` or a product profile means editing its rows here too.
- It is seeded from each ticket's expected build window (inherited from its roadmap product), one row per month in the window.
- The team is whoever last reported on that ticket in the weekly reports. Where no report names one, it falls back to the team that owns the area (1 Mentor to ECU1, Career Match microsite to ECU2, MoveIN, infrastructure to MIMO, Cyber, Cerebrum) and otherwise to the lane's main team: SYD1, BLR2, Events and Drupal or UBS Development. Those are starting points to correct, not reported fact.

**`data/team-updates.js`** (`window.QS_TEAM_UPDATES`) feeds the Teams page: `weeks`, plus one `section` per team per report. Each section has `team`, `heading`, `highlights` / `highlightBullets`, `delivery` items (`title`, `label`, `status`, `text`, `bullets`), `risks`, `nextWeek` and `notes`. Team ids follow the structure of the two most recent reports; a section whose `team` is a list (Week 38's combined ECU1 and ECU2) belongs to each of those teams. For current teams, the page shows a consistent `Name · Lead` section heading, with the heading the report printed as a tooltip; renamed earlier teams show the printed heading. To add a week, append its sections (same shape) and a `weeks` entry. Filler such as "No major risks this week" is left out of `risks`.

Text is verbatim from the reports, with only PDF line-break hyphenation repaired.

## Review copy (single file)

`npm run build:single` writes **`qs-roadmap-review.html`**: one self-contained file (about 440 KB) holding all three pages, the runtime, the palette, the logo and both data files. Send it to someone and they open it by double-clicking; no server and nothing else to install. It is generated, so edit the source files and rebuild rather than editing it.

- The page switch works inside the file: it swaps the mounted component rather than navigating, and then tells the new page to re-read the URL hash, so a project chip on Teams opens that project's detail page on the roadmap.
- Deep links still work (`qs-roadmap-review.html#EP-46`), including from `file://`.
- `history.pushState` is wrapped, because some browsers refuse it on `file://`; it falls back to setting the hash.
- The Download report button is dropped, since the PDF is a separate file. Send `qs-roadmap-report.pdf` alongside it if the reader needs it.
- It still loads React and the Manrope font from the internet, so it needs a connection to render.

## Design tokens

Both pages use the **QS priority palette**, declared once as CSS custom properties in `palette.css` and linked from each page. Every colour below is a `var(--qs-…)`. The hues are the palette sheet's values. The greys were estimated by eye from the sheet, so replace them with the exact brand values in that one file. The pages stay in light mode. The quarter view uses the palette for its portfolio colours and chips; its neutrals and era bars keep their original values.

| Token | Value | Token | Value |
| --- | --- | --- | --- |
| `--qs-amber` | `#F5A100` | `--qs-150` | `#E8EAEB` |
| `--qs-yellow` | `#FFC800` | `--qs-250` | `#CDD1D3` |
| `--qs-orange` | `#F05A00` | `--qs-300` | `#C4C9CB` |
| `--qs-lightblue` | `#6FB3E8` | `--qs-400` | `#A8AEB1` |
| `--qs-blue` | `#2273C9` | `--qs-450` | `#9FA5A8` |
| `--qs-mint` | `#6FCFA9` | `--qs-550` | `#71797E` |
| `--qs-teal` | `#00957F` | `--qs-600` | `#5A6166` |
| `--qs-lilac` | `#B47FD0` | `--qs-650` | `#50585D` |
| `--qs-pink` | `#F4B5CF` | `--qs-750` | `#3A444A` |
| `--qs-red` | `#E0301E` | `--qs-ink` / `--qs-ink-on-fill` / `--qs-page` | `#1A272E` / `#141E24` / `#F2F5F6` |

**Typeface** — **PP Telegraf**, licensed to QS and stored in `fonts/PPTelegraf-Regular.otf`, declared once in `palette.css` and used by every page and every PDF build. Only the Regular weight (400) was supplied, so the 600–800 weights the design uses are synthesised by the browser; drop real Medium/Bold files into `fonts/` and add them to the `@font-face` block when we have them. Manrope stays in the stack as a fallback. The single-file review build inlines the font as a data URI so it travels with the file.

**Signal colours** — set apart from the brand hues so a status never reads as a portfolio: `--qs-signal-red` `#B3261E`, `--qs-signal-orange` `#D96C00`, `--qs-signal-green` `#0E7C4A`, `--qs-signal-none` `#C4C9CB` (defined, currently unused) and `--qs-signal-blue` `#15589B` for deployed (Gantt lights and state labels, the Released stage pill, released work).

**Portfolio colours** — the palette's multicolour set, in order: Core amber, Sector Intelligence yellow, D&E orange, University Services light blue, Cyber & Infra lilac, Data mint. Header fills, lane chips, spines, filter chips and build-window dashes use these. All four are light, so text on them is `--qs-ink-on-fill` (≥ 4.9:1; plain ink is only 4.49:1 on orange).

| Portfolio (= Kanban lane) | Token |
| --- | --- |
| Core | `--qs-amber` |
| Sector Intelligence | `--qs-yellow` |
| D&E | `--qs-orange` |
| University Services | `--qs-lightblue` |

**Technical risk ramp** — the warm priority colours: bar fills `--qs-150` / `--qs-yellow` / `--qs-amber` / `--qs-orange` / `--qs-red` for None → Critical. Label inks are `--qs-550` / `#7A6000` / `#8A5200` / `#B34100` / `#B32617`: darker shades of the same hues, needed for text contrast on white.

**Ordinal and labelled values use the grey ramp**, so they never read as a portfolio or a risk level:
- Readiness bars: filled `--qs-600`, empty `--qs-150`.
- Stage pills: Scoping `--qs-150`, Prototype `--qs-250`, Building `--qs-400` (all ink text); Release planning `--qs-600` and Released `--qs-signal-blue` (white text).
- Stack pills: QAS white on `--qs-750`; Legacy ink on `--qs-250`; Other `--qs-600` on white with a `--qs-400` border.

**Owner avatars** — palette colours clear of the portfolio hues: CL `--qs-lilac`, NJ `--qs-mint` and SP `--qs-pink` with ink initials; SH `--qs-750` with white initials. Data leader avatar `--qs-600` and engineering leader `--qs-650`, both with white initials. Unassigned is `–` in `--qs-600` on `--qs-150`.

**Neutrals** — page `--qs-page`, surface `#FFFFFF`, ink `--qs-ink`, body `--qs-650`, secondary `--qs-600`, muted `--qs-550`, hairlines, borders and empty tracks `--qs-150`, dashed `--qs-250`, scrollbar `--qs-150` / `--qs-400`.

**Type** — Manrope. 31/800 page title; 15.5/800 card title; 13.5/800 table product; 12.5/700 names; 11.5/600/1.45 body; 11/800/0.6px row labels; 10.5/800/1.4px column heads; 9.5/800/0.9–1.1px micro caps.

**Spacing** — page `34px 40px`; card gap 10px; table gap 11px; quarter gap 7px; card padding `0 15px`; radii 9 / 10 / 11 / 13 / 16 / 999.

**Shadows** — rest `0 1px 2px rgba(26,39,46,0.06)`; hover `0 14px 34px rgba(26,39,46,0.16)`; quarter hover `0 12px 26px rgba(26,39,46,0.15)`.

## Accessibility notes

Every coloured surface carrying text was checked for 4.5:1, including the small 8.5–9.5px avatar initials. The palette's light fills (amber, yellow, orange, light blue, lilac, mint, pink) carry ink text; `--qs-600`, `--qs-650`, `--qs-750` and the dark stage pills carry white text. If the exact brand greys differ from the estimates, re-check card headers, active filter chips, avatar circles and the stage pills.

## Assets

- `uploads/qs-logo.png` — QS logo mark, 46×46 in both headers. Replace with the brand asset already in the codebase.
- No icon set, no imagery. Everything else is CSS.

## Files

- `index.html` — the 2027 Data and Engineering Delivery Plan (Table, Columns and Kanban views). Formerly `QS Product Readiness Board.dc.html`.
- `transformation.html` — the quarter timeline.
- `palette.css` — the shared QS palette tokens.
- `package.json` — `npm run build`.
- `scripts/build-report.mjs` — builds the PDF with headless Chrome.
- `scripts/report-page.js` — lays out the report inside the page during the build. The app never loads it.
- `teams.html` — the Teams page.
- `scripts/build-single-file.mjs` — builds the shareable single-file copy.
- `qs-roadmap-review.html` — the generated review copy. Rebuild with `npm run build:single`.
- `data/weekly-updates.js` — per-project weekly updates, used by the project detail page.
- `data/team-updates.js` — per-team weekly updates, used by the Teams page.
- `data/schedule.js` — the month-by-team delivery schedule, used by the Gantt. Rows key on an epic id, or on the card name where an initiative has no epic number yet.
- `qs-roadmap-report.pdf` — the generated report. Rebuild with `npm run build`; don't edit it by hand.
- `support.js` — prototype runtime, needed only to view the files locally.
- `uploads/qs-logo.png` — logo used by both pages.

## Content caveat

Leaders, readiness levels, build windows, risk levels, ready-check slots, descriptions and commentary in the prototypes are **working placeholders inferred from the portfolio and org work** — accurate in shape, not signed off as fact. Wire the real source before this is used for a decision.

Every card carries its Jira ticket number, reconciled against the Jira export. The Kanban stage names were first inferred from a cropped board screenshot, then confirmed by the Week 36 report ("25 scoping, 20 prototype, 13 building, 1 release planning, 6 released"). Six names that were cut off on the board were completed from the reports: Applicant Journey Optimisation, Aurora – Student Sentiment Insights, QAS Uni Svcs Reporting App, Uni Services – Productivity Dashboards, Uni Svcs – Operational Tickets JIRA and Aurora – Student Scoring Model. Epic-to-product mappings follow the product descriptions and commentary. Where no product clearly covers an epic, it gets a placeholder instead of a guessed mapping.
