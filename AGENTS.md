# Rynn - Agent Guide

## Project

- **PROJECT_NAME**: Rynn
- **REPO**: nekonaru/rynnbot
- **AUTHOR_NAME**: Nekonaruu
- **AUTHOR_GITHUB**: nekonaru
- **PROJECT_KIND**: general (self-hosted CLI bot/service)
- **STACK**: Node.js (ESM), Baileys, multi-database (JSON/MongoDB/MySQL/PostgreSQL)
- **PLATFORMS**: Linux, macOS, Windows, Android (Termux)
- **MIN_OS**: n/a (Node.js >=20)
- **DEFAULT_BRANCH**: main
- **LICENSE**: MIT
- **UI_LANGUAGES**: English, Bahasa Indonesia
- **VERIFICATION**: local-and-ci (local Node 24, CI on GitHub Actions)

## Working on this repo

- English is the source language for code, comments, commits, and docs. Indonesian is the translation (`README.id.md`, `CHANGELOG.id.md`), never the source.
- `settings.js` is hot-reloaded. Secrets (API keys, DB URLs) live only in `.env` (gitignored). Never commit secrets, never hardcode keys in `settings.js`.
- Before committing, run `npm run check` (syntax check + leak scan). CI runs the same on every push.
- The main command router is the `switch (command)` block in `handler.js`. Add new commands as separate `case` entries; do not restructure the block.
- `README.md` and `README.id.md` must change together with the same section order, table rows, and callouts.
- Releases: bump `package.json`, update `CHANGELOG.md` + `CHANGELOG.id.md`, tag `vX.Y.Z` after CI is green, and create bilingual release notes (English first).
- Local-only working files (`SECURITY_MAP.md`, `SECURITY_REVIEW.md`, `SECURITY_REPORT.md`) are never committed.
