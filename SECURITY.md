# Security Policy

## Supported versions

Only the latest release receives security fixes.

| Version | Supported |
|---------|-----------|
| 3.x     | yes       |
| < 3.0   | no        |

## Reporting a vulnerability

Please do not disclose security issues in public issues or pull requests. Report privately through GitHub's private vulnerability reporting (Security tab, "Report a vulnerability") on this repository. Include steps to reproduce and the impact. You can expect an acknowledgment within a few days.

## Secrets

API keys and credentials live only in `.env`, which is gitignored and never committed. Do not open pull requests that add keys, tokens, or credentials to the repository. If you find a committed secret, report it privately as described above.

## Scope

This policy covers the code in this repository, including `handler.js`, `index.js`, `start.js`, `settings.js`, `src/` and `lib/`. It does not cover WhatsApp's services, the Naze API, or the relay dashboard at `bot.naze.biz.id`, which are third-party services operated by their respective providers.
