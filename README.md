<div align="center">
  <h1>Rynn: Self-Hosted WhatsApp Bot</h1>
  <p><b>Run your own WhatsApp bot with hundreds of commands, games, AI tools,<br/>an interactive CLI, and multi-database storage.</b></p>

  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-%E2%89%A520-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" /></a>
  <a href="https://github.com/nekonaru/rynnbot/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License" /></a>
  <a href="https://github.com/nekonaru/rynnbot"><img src="https://img.shields.io/badge/platform-Linux%20%C2%B7%20macOS%20%C2%B7%20Windows%20%C2%B7%20Termux-informational?style=flat-square" alt="Platform" /></a>
</div>

<br />

**English** | [Bahasa Indonesia](README.id.md)

> [!CAUTION]
> **Unofficial API, account risk.** Rynn uses Baileys, an unofficial WhatsApp Web API. Automated clients violate WhatsApp's Terms of Service, and your number can face restrictions or a ban. The author accepts no liability. Use at your own risk. Read [Disclaimer and anti-ban guide](#disclaimer-and-anti-ban-guide) before deploying.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Integration](#api-integration)
- [Database & Storage](#database--storage)
- [Web Dashboard](#web-dashboard)
- [CLI](#cli)
- [Project Structure](#project-structure)
- [Development](#development)
- [Testing](#testing)
- [Continuous Integration](#continuous-integration)
- [FAQ](#faq)
- [Author](#author)
- [Disclaimer and Anti-Ban Guide](#disclaimer-and-anti-ban-guide)
- [License](#license)

---

## About

Rynn is a self-hosted WhatsApp bot for people who want full control: your server, your session, your keys. It ships hundreds of ready-made commands (downloaders, AI tools, games, group management, an economy), a wizard-based CLI for setup and day-to-day control, and a database layer that runs on local JSON files or on MongoDB, PostgreSQL, and MySQL.

> _"Your bot, your server, your rules."_

Originally based on Hitori Bot by [Nazedev](https://github.com/nazedev/hitori), heavily reworked and relicensed for the Rynn project.

---

## Features

| Category | Feature | Description |
|----------|---------|-------------|
| Menu & General | **Menu and help** | Categorized menus, command list, bot info, ping |
| Menu & General | **Interactive CLI** | First-time setup wizard, settings manager, status dashboard, log viewer |
| Menu & General | **Hot reload** | `settings.js` is hot-reloaded on save |
| Group Tools | **Group management** | Kick, promote, demote, mute/unmute, tagall, welcome/leave messages, anti-link, anti-spam, anti-toxic |
| Group Tools | **Anti-spam** | Per-user command cooldown with `.antispam` toggle per group |
| Downloader | **YouTube, TikTok, Instagram, Facebook, Spotify, Pinterest, MediaFire** | `ytmp3`, `ytmp4`, `tiktok`, `ig`, `fb`, `spotify`, `pin`, `mediafire`, and more |
| AI Tools | **AI chat** | `ai`, `claude`, `gemini`, `r1`, `glm` powered by the Naze API and Neosantara AI |
| AI Tools | **Media AI** | AI image generation, background removal, and image upscaling via the API |
| Utility | **Stickers and media** | `sticker`, `stickerwm`, `toimg`, `tomp3`, `tovn`, `translate`, `tts`, `qr` |
| Games | **Werewolf, chess, tic-tac-toe, math quiz, slot, casino** | Multiplayer and single-player games with real game engines |
| Games | **Quizzes** | `tebakgambar`, `tebakkata`, `susunkata`, `caklontong`, `kuismath`, `tekateki`, `family100` |
| Economy | **RPG economy** | Coin limits, money, premium/VIP tiers, `daily`, `transfer`, `cangkulan`, `merampok`, `profile`, `leaderboard` |
| Owner | **Owner commands** | `eval`, `broadcast`, `sewa` (rent), premium/VIP management, `ban`/`unban`, `backup` |
| Owner | **Self-update** | `update` pulls the latest release over the network |
| Sub-bot | **JadiBot / CloneBot** | Let others pair their own number as a sub-bot under your bot |
| Reminder | **Sholat reminders** | Scheduled prayer-time messages per group (Aladhan-style schedule in `settings.js`) |

---

## Requirements

| Dependency | Minimum Version | Notes |
|------------|-----------------|-------|
| **Node.js** | v20 | Required |
| **Git** | any | Required (source install) |
| **FFmpeg** | any | Required for media commands; installed by the install scripts |
| **PM2** | any | Optional, used for process management and auto-restart |
| **npm** or **yarn** | any | yarn recommended on Termux |

> [!TIP]
> You do not need to install FFmpeg or PM2 manually. The install scripts handle them.

### Never used a terminal? Start here

<details><summary><b>Show terminal basics</b></summary>

1. **Windows:** press `Win + R`, type `powershell`, press Enter. WSL is also fine.
2. **macOS:** open `Terminal` from Applications, or Spotlight (`Cmd + Space`, type `terminal`).
3. **Linux:** `Ctrl + Alt + T`.
4. **Android (Termux):** install Termux from F-Droid (not the Play Store build), open it.
5. Type or paste a command, press Enter, and read the output. `Ctrl + C` stops a running process.
</details>

---

## Installation

### Option A: Automatic installer (recommended)

1. Clone the repository:

```bash
git clone https://github.com/nekonaru/rynnbot.git
cd rynnbot
```

2. Run the installer for your platform:

**Linux / macOS / Termux:**

```bash
bash install.sh
```

**Windows (PowerShell):**

```powershell
.\install.ps1
```

Both scripts detect your package manager, install system dependencies, install PM2, run `npm install`, register the global `rynn` command via `npm link`, and launch the first-time setup wizard.

### Option B: Manual (build from source)

<details><summary><b>I have Git installed</b></summary>

```bash
git clone https://github.com/nekonaru/rynnbot.git
cd rynnbot
npm install
```
</details>

<details><summary><b>I don't have Git</b></summary>

1. Download the latest source from the [releases page](https://github.com/nekonaru/rynnbot/releases) (Assets, `source code (zip)`).
2. Extract it, then open a terminal in the extracted folder.
3. Run `npm install` (install [Node.js v20+](https://nodejs.org) first).
</details>

4. Create your `.env`:

```bash
cp .env.example .env
```

5. Open `.env` and fill in your keys (see [Configuration](#configuration)).

6. Start the bot:

```bash
npm start
# or, if you registered the CLI globally:
rynn start
```

---

## Configuration

### 1. Environment variables (`.env`)

Secrets live only in `.env`, which is gitignored and never committed. Copy `.env.example` and fill in your values:

| Variable | Required | Description |
|----------|----------|-------------|
| `NAZE_API_KEY` | Yes (for API features) | Naze API key from [naze.dev](https://naze.dev) |
| `NEOSANTARA_API_KEY` | No | Neosantara AI key |
| `MONGODB_URL` | No | MongoDB/MySQL/PostgreSQL connection string. Empty = local folder storage |
| `NUMBER_BOT` | No | Bot WhatsApp number for pairing, format `628xx` |
| `OWNER_NUMBER` | No | Owner number(s), comma separated |
| `ADMIN_KEY` | Only if dashboard enabled | Admin key for the relay dashboard |
| `DASHBOARD_ENABLED` | No | `true` to connect to the relay dashboard. Default `false` |
| `ALLOW_REMOTE_EXEC` | No | `true` enables the remote shell-exec endpoint even when the dashboard is on. Default `false` |
| `ALLOW_INSECURE_TLS` | No | `true` disables TLS verification for external APIs. Default `false` |

> [!IMPORTANT]
> Keys that were shipped as examples in older releases of this file were committed to the repository and must be treated as leaked. Regenerate them at [naze.dev](https://naze.dev) and put your new keys in `.env`.

### 2. `settings.js` (hot-reloaded)

All non-secret bot settings live in `settings.js`: owner, bot name, author, prefix list, timezone, locale, limits, money, jadwal sholat, bad words, database path. Edit it directly (it hot-reloads) or use `rynn settings`.

### 3. Setup wizard

```bash
rynn --setup
```

Walks you through owner number, author, bot name, Naze API key, and bot WhatsApp number.

---

## API Integration

Rynn talks to the **Naze API** (`https://naze.dev/api/v1`) for downloaders, AI tools, and media utilities, and to **Neosantara AI** for some AI models. Get your keys at [naze.dev](https://naze.dev) and [app.neosantara.xyz](https://app.neosantara.xyz).

A global `global.fetchApi(endpoint, data, options)` helper is defined in `index.js`. It resolves the base URL from `global.APIs`, injects your key automatically, and parses the response.

Function shape:

```js
await global.fetchApi(endpoint, data, options)
```

- `endpoint`: route starting with `/` (for example `/ai/chat`).
- `data`: object. GET requests become query string parameters; POST requests are sent as a JSON body (or as `FormData` when `options.form = true`).
- `options`:
  - `method`: `"GET"` (default) or `"POST"`
  - `stream`: `true` or a file path to stream the response to a temp file
  - `buffer`: `true` to return a `Buffer`
  - `api`: provider index (`1` = Naze, `2` = Neosantara)
  - `responseType`: `"json"` (default), `"text"`, or `"arrayBuffer"`

### Example: AI chat with GET (default)

```js
const response = await global.fetchApi("/ai/chat", { query: text });
await m.reply(response.result.message);
```

### Example: AI chat with POST

```js
const response = await global.fetchApi("/ai/chat", { query: text, model: "default" }, { method: "POST" });
await m.reply(response.result.message);
```

> [!TIP]
> For endpoints that return media (TTS, image generators), pass `{ stream: true }`. `fetchApi` saves the file and returns its local path, ready for `sock.sendMessage()`.

> [!NOTE]
> Without a valid API key, API-powered commands fail with a clear message telling you to set `NAZE_API_KEY` in `.env` or run `.setapikey`.

---

## Database & Storage

Rynn splits data into three layers, each configurable independently:

1. **Session auth** (`global.database.path`): WhatsApp credentials and signal keys, written through an async FIFO write queue.
2. **Message store** (`global.database.options.store`): Baileys cache for messages, contacts, and group metadata.
3. **Bot database** (`global.database.options.database`): users, economy, limits, group settings.

| Engine | Prefix | Notes |
|--------|--------|-------|
| **Local JSON** | *(folder name, e.g. `rynn-session`)* | Default. Zero setup |
| **MongoDB** | `mongodb://` or `mongodb+srv://` | Shared connection pool, SSL auto-detected |
| **PostgreSQL** | `postgres://` or `postgresql://` | Works with Supabase, Neon, Aiven, RDS |
| **MySQL** | `mysql://` | Works with TiDB Cloud, PlanetScale |

All layers can share one server (`store: true, database: true`), or each can point at its own engine or local file (`store: { path: "mongodb+srv://..." }`). Never hardcode credentials in `settings.js`; put them in `.env` or in the connection string.

```js
// settings.js example: local JSON (default)
global.database = {
	path: "rynn-session",
	options: { store: true, database: true },
};

// settings.js example: PostgreSQL everywhere (URL from .env)
global.database = {
	path: process.env.MONGODB_URL, // or a postgres:// string
	options: { store: true, database: true },
};
```

---

## Web Dashboard

Rynn can connect to a relay-based dashboard at `bot.naze.biz.id` via Socket.IO. It is **disabled by default** and must be opted into:

```env
DASHBOARD_ENABLED=true
ADMIN_KEY=<a long random string>
ALLOW_REMOTE_EXEC=false   # optional, enables remote shell exec. Keep false unless you need it.
```

When enabled, the bot registers itself and prints a dashboard URL (containing the admin key) to the console. From the panel you can view stats, browse/edit data, change settings, and send messages.

> [!CAUTION]
> The dashboard is a third-party relay service. Enabling it exposes your bot's admin controls to whoever holds the admin key. The remote exec endpoint (`ALLOW_REMOTE_EXEC=true`) can run shell commands on your server as the bot user. Keep both off unless you fully trust the relay and your network.

See [Security](#security-notes) below for how the relay is authorized.

### Security notes

- `package.json` runs with `private: true`; there is no npm publish path.
- Secrets live only in `.env` (gitignored). `scripts/check.js` scans for key patterns in CI.
- The dashboard and its remote exec are off by default and require separate opt-in flags.
- Admin key comparison uses timing-safe comparison; failed attempts are locked out for 15 minutes.
- TLS verification is on by default; `ALLOW_INSECURE_TLS=true` opts out explicitly (with a loud warning).
- Dependencies are installed with `npm ci` from the committed lockfile.

---

## CLI

Rynn ships a full CLI (registered globally by the installers as `rynn`):

```text
rynn                  Open the interactive main menu
rynn start            Start the bot
rynn settings         Open the settings manager
rynn status           System health dashboard
rynn report           Logs and diagnostics
rynn --setup          Re-run the first-time setup wizard
rynn --help           Help
```

The settings manager edits `settings.js` (and your `.env` for the Naze API key) with a guided menu. Status shows dependency checks, PM2 process info, database file info, and system resources. Report shows recent PM2 logs, filtered errors, a JSON integrity check, and `npm audit`.

---

## Project Structure

```text
rynnbot/
├── index.js                  # Core connector: Baileys init, events, pairing, auto-restart hooks
├── handler.js                # All bot commands (switch (command) block)
├── start.js                  # Entry point: spawns index.js, restarts on crash, graceful shutdown
├── settings.js               # Configuration, hot-reloaded
├── cli.js                    # CLI entry point
├── speed.py                  # Speedtest helper used by the .speed command
├── install.sh                # Installer (Linux / macOS / Termux)
├── install.ps1               # Installer (Windows)
├── install.cmd               # Installer launcher (Windows)
├── .env.example              # Template for your .env (always safe to commit)
├── lib/
│   ├── converter.js          # Media conversion (audio, video, GIF, WebP)
│   ├── exif.js               # Sticker EXIF metadata
│   ├── function.js           # Shared helpers (fetchJson, updateSettings, antiSpam, backups)
│   ├── game.js               # Game logic (Werewolf, Chess AI, RPG economy)
│   ├── math.js               # Math quiz generator
│   ├── scraper.js            # YouTube/media scrapers
│   ├── template_menu.js      # Menu templates
│   ├── tictactoe.js          # Tic-tac-toe engine
│   ├── uploader.js           # File uploads
│   ├── werewolf.js           # Werewolf game engine
│   └── interactive.js        # Interactive message helpers
├── src/
│   ├── auth.js               # Custom auth adapter (local/MongoDB/SQL)
│   ├── database.js           # Database adapter (JSON / MongoDB / MySQL / PostgreSQL)
│   ├── message.js            # Message parser, serializer, lid-mapping
│   ├── clonebot.js           # Sub-bot (clonebot) sessions
│   ├── server.js             # Relay dashboard client (disabled by default)
│   ├── env.js                # .env read/write helpers
│   ├── cli/                  # CLI modules (setup, settings, status, report)
│   ├── helper/               # Interactive message builders
│   ├── lib/interactive.js    # Interactive message re-exports
│   ├── media/                # Static assets
│   └── nulis/                # Handwriting image generator assets
├── scripts/
│   └── check.js              # `npm run check`: syntax + leaked-key scan
├── .github/workflows/ci.yml  # CI
├── database/                 # Runtime data (gitignored)
├── Dockerfile
├── docker-compose.yml
├── package.json
└── package-lock.json
```

---

## Development

### Adding a new command

1. Open `handler.js` and find the `switch (command)` block.
2. Add a new `case`:

```js
case "ping": {
	await m.reply("pong");
}
break;
```

3. Register the command in the menu template (`lib/template_menu.js`) if it should be listed.
4. Run `npm run check` before committing (syntax + secret scan).

Do not restructure the main `switch` block. Add commands as separate `case` entries only.

### Updating

`settings.js` is hot-reloaded on save. For code updates, pull the latest changes or run `.update` in WhatsApp, then restart the bot (`Ctrl + C`, `npm start`).

---

## Testing

```bash
npm run check   # node --check every .js file + scan for leaked key patterns
```

| Check | Requirement |
|-------|-------------|
| `node --check` on every `.js` file | Must pass |
| Secret scan (`gsk_`, `nz-` followed by 10+ hex, `nsk_` followed by 16+ hex) in tracked files | Must find nothing |
| `npm audit --omit=dev --audit-level=high` | Advisory in CI (does not fail the build) |

Linting is left to your editor; the project ships a Prettier config (`.prettierrc.json`) but no mandatory lint gate.

---

## Continuous Integration

| Workflow | Purpose |
|----------|---------|
| `.github/workflows/ci.yml` | On every push to `main`, tags `v*`, and PRs: install with `npm ci`, run `npm run check`, and run `npm audit` as advisory |

---

## FAQ

<details><summary><b>I got a pairing code but the bot won't connect. What's wrong?</b></summary>

The number set in `NUMBER_BOT` (`.env`) must be a WhatsApp number you control and must not be logged in elsewhere. Try deleting the session folder (`rynn-session/`), restarting, and re-pairing. See the anti-ban guide before using a fresh number.
</details>

<details><summary><b>Can I use Rynn for two WhatsApp numbers?</b></summary>

Yes. `jadibot`/`clonebot` let other people's numbers run as sub-bots under your bot. Owners can manage them with `listjadibot` and `deljadibot`.
</details>

<details><summary><b>Where do I put the API key?</b></summary>

In `.env` as `NAZE_API_KEY` (copy `.env.example`). You can also run `.setapikey your-key` in WhatsApp, or `rynn settings` and pick API Keys. The key is stored in `.env`, never in `settings.js`.
</details>

<details><summary><b>My number got banned. Can you help?</b></summary>

No. Bans are issued by Meta's anti-spam systems and are outside anyone's control. Please read the [Disclaimer and anti-ban guide](#disclaimer-and-anti-ban-guide) before deploying, and never use a fresh SIM card.
</details>

<details><summary><b>Does this project store my WhatsApp messages?</b></summary>

Messages are cached locally in the session/store folder to make Baileys work, and bot data (limits, premium, etc.) lives in the configured database. Nothing is sent to third parties except the API providers you call, and the relay dashboard if you enable it (off by default).
</details>

<details><summary><b>How do I update?</b></summary>

`git pull` (or `.update` in WhatsApp) followed by `npm start`. The bot restarts automatically on crash when launched via `start.js`.
</details>

---

## Author

<div align="center">

| [![Nekonaruu](https://github.com/nekonaru.png?size=100)](https://github.com/nekonaru) |
|:---:|
| **[Nekonaruu](https://github.com/nekonaru)** |

</div>

Based on Hitori Bot by [Nazedev](https://github.com/nazedev/hitori).


---

## Disclaimer and Anti-Ban Guide

### 1. Unofficial API and legal disclaimer

Rynn is an independent open-source project built on Baileys, an unofficial WhatsApp Web multi-device protocol. It is not affiliated with, endorsed, or authorized by WhatsApp Inc. or Meta Platforms, Inc. Using it violates WhatsApp's Terms of Service. By downloading, installing, or running Rynn, you accept all risks, including account restriction or ban, message loss, and any resulting damages. The author and contributors accept no liability.

### 2. Why accounts get banned

1. **Fresh SIM cards.** New numbers have no chat history and are flagged immediately. Warm a number up for 2-4 weeks with normal human use before botting it.
2. **User reports.** Two or three "Report and block" clicks in public groups will trigger an instant ban. Restrict the bot to private or trusted groups.
3. **Datacenter IPs.** Cloud VPS IP ranges (AWS, DigitalOcean, Heroku, Railway) are treated with higher suspicion than residential connections. Avoid frequent reconnects and keep message volume realistic.

### 3. Maintainer policy

Issues complaining about banned numbers will be closed without action. Account safety is 100% the user's responsibility.

---

## License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.
