# Status

Last Updated: 2026-11-26

## Current Baseline

React 16 / CRA portfolio site, deployed to GitHub Pages (`master` at `9714700`, GitHub Actions `Build and Deploy` Run `45800869528` green). `make check` (`src/App.test.js`, 1/1) and `make smoke-local` both pass offline. Content spans EN/KO `src/portfolioData/*`, the Articles page (`/articles/*`, `/kr/articles/*`), `Awards & Recognition` (`Achievement.js` via `card.category`), and `talkSection.featured` spotlight cards (`Talks.js`).

## Active Focus

Authority: `docs/NEXT_PLAN.md`.

0. Backlog is empty — `/overnight-seed` needed before the first unattended run.

## Open Risks

- Test coverage is a single mount-smoke test; the gate cannot catch broken content/config shapes
  (`src/portfolio.js` / `src/portfolioData/*`) beyond "App renders".
- `npm run check-format` is red at baseline (pre-existing source + generated `build/` artifacts), so
  format is intentionally NOT in the gate.
- Config drift: `.claude/harness-config.json` pins `harness_root` to `0.7.0` (absent from cache), while `2.2.0` is installed.
