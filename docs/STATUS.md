# Status

Last Updated: 2026-06-29

## Current Baseline

React 16 / CRA portfolio site, deployed to GitHub Pages. `make check` is green: 1 render-smoke test
(`src/App.test.js`) passes offline in jsdom. Overnight harness installed and wired (gate=`make check`,
runner resolves to plugin v0.7.0, permission boundary set). No app-behavior changes made during install.

## Active Focus

Authority: `docs/NEXT_PLAN.md`.

0. Harness bring-up complete. Backlog is empty — `/overnight-seed` needed before the first unattended run.

## Open Risks

- Test coverage is a single mount-smoke test; the gate cannot catch broken content/config shapes
  (`src/portfolio.js` / `src/portfolioData/*`) beyond "App renders".
- `npm run check-format` is red at baseline (pre-existing source + generated `build/` artifacts), so
  format is intentionally NOT in the gate.
