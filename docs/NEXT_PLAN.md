# Next Plan

Last Updated: 2026-06-29

Rolling plan containing open work (things to do) only. Completed history is in `docs/COMPLETED_SUMMARY.md`.

## Priority 0 — Seed the backlog

No approved tasks yet. Create checkboxes only when adding actual work.

Format Example (do not leave as is; replace with actual work):

```text
- [ ] [auto] Work verifiable via deterministic, offline gate. Done: 1 line of definition of done.
- [ ] [manual] Work requiring human judgment, feel, or external service (forbidden for unattended run).
```

## Rules

- Read `docs/AGENT_BRIEF.md` → `docs/STATUS.md` → this file in order before starting work.
- Design snapshots for large tasks live in `docs/plans/YYYY-MM-DD-<topic>.md`.

### Automation Tags (for overnight loop)

A separate axis from status boxes (`[x]`/`[/]`/`[ ]`), indicating if it can be consumed by the unattended loop.

- `[auto]` — Only for items verifiable via local, deterministic, offline gate (e.g. `make check`).
- `[manual]` — Requires human judgment, feel, or external service. Skipped by the unattended loop.
- `[blocked]` — Unmet dependencies or 2 accumulated Blockers (runner marks automatically). Lift after human review.
- **No Tag = Not for unattended run** (security default). The runner only consumes `[auto]`.
