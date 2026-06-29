# Engineering Interpretation — men16922.github.io

This document maps the **general concepts (Bibles)** in `docs/engineering/*_ENGINEERING.md` to the
**actual files, commands, and mechanisms of this repo** — a React 16 (Create React App) personal
portfolio site (developerFolio template) deployed to GitHub Pages.

## HARNESS — Maturity/Verification/Permissions (Bible `HARNESS_ENGINEERING.md`)
- gate (verification): `make check` → `CI=true npx react-scripts test --watchAll=false` (harness-config.gate)
- permission boundary: `scripts/overnight/overnight-settings.json` — allow=`make check`/`make smoke-local`/
  `npx react-scripts test`; deny=`npm run deploy`/`gh-pages`/`npm run build`/`npm start`/`node fetch.js`/`git push`
- current maturity: single render-smoke test; offline gate green at baseline. Next investment: add component
  tests for containers/components so the gate proves more than "App mounts".

## LOOP — Unattended Loop (Bible `LOOP_ENGINEERING.md`)
- runner: `scripts/overnight/run.sh` (plugin-sourced, engine=claude). env: `GATE_CMD`/`MAX_ITER`/`PAUSE`/...
- backlog tags: `[auto]`/`[manual]`/`[blocked]` in `docs/NEXT_PLAN.md`
- iteration prompt: plugin default (no per-repo `scripts/overnight/PROMPT.md` override)
- skills: `/sync` `/checkpoint` `/overnight-report` `/overnight-seed`

## VERIFICATION — 3 Layers (Bible `VERIFICATION_ENGINEERING.md`)
- mechanical (gate): `make check` — proves the React app + all components render without crashing in jsdom
  (no network). Push lint/format here later only after fixing baseline format issues + excluding `build/`.
- semantic (critic): `OVERNIGHT_CRITIC=0` (none yet). Domain invariants if enabled: `src/portfolio.js` /
  `src/portfolioData/*` config objects keep the shape each container consumes (missing keys → runtime crash,
  not caught by the smoke test); i18n EN/KO configs stay structurally parallel.
- creative (human): `[manual]` = visual/UX, copy, theming, layout feel, anything needing the browser. These
  CANNOT be offline-verified (fetch.js + GitHub Pages are online). Morning-review focus: rendered look, content.

## AGENTIC — Multi-Agent (Bible `AGENTIC_ENGINEERING.md`)
- single engine (claude). No lane/worktree splitting configured.

## CONTEXT — Context/Doc Discipline (Bible `CONTEXT_ENGINEERING.md`)
- Read Path: `docs/AGENT_BRIEF.md` → `docs/STATUS.md` → `docs/NEXT_PLAN.md` → `docs/PROGRESS_LOG.md`
- line budget: brief ≤60 · status/plan/log ≤120 (harness-config.budgets)
- Resume Pointer: `▶ NEXT SESSION` line at top of `docs/AGENT_BRIEF.md`
- archive: `docs/archive/`

## PROMPT — Prompt Layer (Bible `PROMPT_ENGINEERING.md`)
- harness prompt: plugin default
- runtime/domain prompt: N/A (no LLM used at runtime; `fetch.js` only calls GitHub GraphQL + Medium RSS)
