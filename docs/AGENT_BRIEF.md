# Agent Brief

Last Updated: 2026-11-26

This file is a compressed context for session start (≤60 lines). For details, open linked documents only when needed.

> ▶ NEXT SESSION: Overnight harness just installed; backlog is empty. Run `/overnight-seed` to add `[auto]` items to `docs/NEXT_PLAN.md` before any unattended run.

## Snapshot

React 16 (Create React App) personal portfolio site based on the developerFolio template, deployed to
GitHub Pages at https://men16922.github.io (`master` at `9714700`). Content lives in `src/portfolio.js`,
`src/portfolioData/*` (EN/KO), and `src/content/articles.js` (`public/posts/*`). Published sections
include the Articles page, `Awards & Recognition` (`Achievement.js`), and `talkSection.featured` (`Talks.js`).
Baseline: `make check` (1/1) and `make smoke-local` green offline; Actions `Build and Deploy` green.

## Active Work

Authority: `docs/NEXT_PLAN.md`. No approved tasks yet — seed the backlog first.

## Read Order

1. Current State: `docs/STATUS.md`
2. Next Work: `docs/NEXT_PLAN.md`
3. Recent Log: `docs/PROGRESS_LOG.md`

## Commands

- Verification Gate: `make check`  <!-- CI=true react-scripts test, offline+deterministic -->
- Offline smoke: `make smoke-local`  <!-- production build, bypasses online fetch.js -->

## Guardrails

- Online/outward actions are forbidden for unattended runs: `npm run deploy`, `gh-pages`, `npm run build`,
  `npm start`, `node fetch.js`, `git push` (all denied in `scripts/overnight/overnight-settings.json`).
- Visual/UX/content/theming work cannot be verified offline → tag `[manual]`.
- Only `[auto]` items (offline-gate-verifiable) are consumed by the loop.
