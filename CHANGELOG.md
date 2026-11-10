# Changelog

## v3.0.1

Rynn v3.0.1 makes the bot install and run on Termux (Android) and fixes the CLI banner.

### Improvements

- **Termux support.** `@napi-rs/canvas` is now an optional dependency, so `npm install` no longer fails on devices without prebuilt binaries or system libraries; image rendering falls back to PureImage automatically. The Termux installer path uses `pkg` + `npm install`, both READMEs include a Termux (Android) setup, and the installer stays working on Termux.

### Bug fixes

- **CLI banner art.** Fixed the corrupted banner art and a stray character shown at the CLI startup banner.

## v3.0.0

RynnBot v3.0.0 is rebuilt on the latest upstream codebase and reworked as the Rynn project: identity moved fully to Rynn/Nekonaruu, secrets moved to `.env`, and the documentation is now bilingual.

### Breaking changes

- **Command handler renamed.** `naze.js` is now `handler.js`, matching upstream layout. Forks that carried custom changes must rebase manually.
- **API keys live only in `.env`.** `settings.js` no longer stores literal keys or falls back to hardcoded ones. Move `NAZE_API_KEY` and `NEOSANTARA_API_KEY` into `.env` (copy `.env.example`). `rynn setup` and `.setapikey` write to `.env` instead of `settings.js`.
- **Self-update targets this repo.** The built-in `.update` command now downloads `nekonaru/rynnbot` (main branch) instead of the upstream Hitori repository.
- **Dashboard and remote exec are off by default.** Set `DASHBOARD_ENABLED=true` to connect to the relay dashboard and `ALLOW_REMOTE_EXEC=true` to enable the remote exec endpoint. The admin key no longer falls back to a weak constant.

### Improvements

- **Upstream parity.** Synced with the latest upstream: rewritten message parser/serializer, CloneBot sub-bots, interactive messages, lid-to-pn mapping, bounded LID caches, safer SSL handling.
- **TLS verification on by default.** The fetch pipeline no longer disables certificate verification; set `ALLOW_INSECURE_TLS=true` to opt out with a loud warning.
- **Key handling hardened.** No keys in `settings.js`, `.env.example`, or the CLI path; `.setapikey` masks keys in its reply; the setup wizard no longer writes placeholder keys into `.env`.
- **Checks and CI.** New `npm run check` (syntax check of every `.js` + leaked key scan), a GitHub Actions workflow (`npm ci`, `npm run check`, advisory `npm audit`), and a committed `package-lock.json`; Dockerfile and Procfile now use `npm ci`.
- **Docs rebuilt bilingual.** `README.md` (English) and `README.id.md` (Indonesian), aligned section order; new `CHANGELOG.md` / `CHANGELOG.id.md`; `SECURITY.md` reporting policy; `AGENTS.md` project section.

### Bug fixes

- **Update URL pinned.** Auto-update pointed at the upstream repository, which would have silently re-branded and overwritten the Rynn code; now points at `nekonaru/rynnbot`.
- **Insecure update path.** The update download no longer bypasses TLS verification.
- **Placeholder leakage.** `.env.example` no longer ships keys that were committed in earlier releases; treating exposed keys as leaked is now documented.
