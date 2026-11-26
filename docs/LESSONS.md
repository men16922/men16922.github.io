# Lessons

Repo-specific traps and non-obvious conventions learned during sessions (≤40 lines).

- **Deploy via `origin/master`, not `npm run deploy`**: `package.json` defines `"deploy": "gh-pages -b master -d build"`, which targets `master` instead of `gh-pages`. Pushing to `origin/master` triggers `.github/workflows/deploy.yml` to build and deploy `build/` to `gh-pages`.
- **`Talks.js` ignores legacy `talkSection.talks`**: Since `5deae29`, `src/containers/talks/Talks.js` renders the `Articles` CTA and `talkSection.featured` spotlight cards under `#talks` — do not add cards to `talkSection.talks`.
- **`Achievement.js` category precedence**: `Achievement.js` groups cards by explicit `card.category` (e.g. `"Awards"`) first, then falls back to `card.title` regex (`AWS` / `Kubernetes` / `Google Cloud` / `Etc`).
