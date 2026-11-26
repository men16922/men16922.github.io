# Progress Log

Last Updated: 2026-11-26

This file maintains only recent incremental summaries (newest 3-5 items, ≤120 lines). Older entries are archived to `docs/archive/progress-YYYY-MM.md` via `/tidy-docs`.

## 2026-11-26 — Google Cloud Special Recognition award & Flower Labs featured card deployed
- Status: Done; commit `9714700` pushed to `origin/master` and deployed via GitHub Actions `Build and Deploy` (Run `45800869528`, `success`).
- Changed: Added explicit `card.category` + top `Awards & Recognition` category in `src/containers/achievement/Achievement.js`; added Google Cloud Gen AI Academy APAC Cohort 3 Special Recognition ($600 Prize) and grouped Hyundai AutoEver Grand Prize under `Awards` in EN/KO `src/portfolioData/*`.
- Changed: Added `talkSection.featured` spotlight card rendering in `src/containers/talks/Talks.js` + `Talks.scss` for the Flower Labs Official LinkedIn feature (`Endeavor 1.0` benchmark), linking to the LinkedIn post and `/articles/endeavor` (`/kr/articles/endeavor`).
- Changed: Added local 800×800 assets `src/assets/images/flower-labs-featured.jpg` and `src/assets/images/hack2skill-special-recognition.png` (rendered from page 6 of the Hack2skill recognition PDF).
- Verified: `npx prettier --write` on touched JS/SCSS; `npm ci`; `make check` (`PASS src/App.test.js`, 1/1); `make smoke-local` (`Compiled successfully.`); local preview on `http://localhost:3000`; GitHub Actions `Build and Deploy` Run `45800869528` (`success`, 49s).
- Blockers: None (untracked raw PDF `src/assets/images/1790755769346.pdf` intentionally excluded from git).
- Next: Seed `[auto]` items into `docs/NEXT_PLAN.md` via `/overnight-seed` before unattended runs; optionally update stale `harness_root` pin (`0.7.0` → `2.2.0`) in `.claude/harness-config.json`.

## 2026-07-05 — AWS Machine Learning Engineer certification published
- Status: Done; commit `d4df55c` is present on `origin/master`.
- Changed: Added the 2026 AWS Certified Machine Learning Engineer - Associate card to EN/KO portfolio data.
- Changed: Linked the card to the supplied public Credly verification URL and official badge image.
- Verified: `npm start` compiled successfully and served the site at `http://localhost:3000`.
- Verified: `make check` passed (1 test suite, 1 test); `git diff --check` passed before commit.
- Blockers: None.
- Next: Resume backlog seeding from `docs/NEXT_PLAN.md` when new work is approved.
