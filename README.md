<div align="center">
  <img src="assets/ryn-mark.png" alt="Rynn" width="140" />
  <h1>Rynn: Bot WhatsApp Self-Hosted</h1>
  <p><b>Jalankan bot WhatsApp milikmu sendiri dengan ratusan perintah, game, perkakas AI,<br/>CLI interaktif, dan penyimpanan multi-database.</b></p>

  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-%E2%89%A520-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" /></a>
  <a href="https://github.com/nekonaru/rynnbot/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License" /></a>
  <a href="https://github.com/nekonaru/rynnbot"><img src="https://img.shields.io/badge/platform-Linux%20%C2%B7%20macOS%20%C2%B7%20Windows%20%C2%B7%20Termux-informational?style=flat-square" alt="Platform" /></a>
</div>

<br />


> [!CAUTION]
> **API tidak resmi, risiko akun.** Rynn memakai Baileys, API WhatsApp Web tidak resmi. Klien otomatis melanggar Terms of Service WhatsApp, dan nomor kamu bisa kena pembatasan atau banned. Penulis tidak bertanggung jawab atas risiko apa pun. Gunakan dengan risiko kamu sendiri. Baca [Disclaimer dan panduan anti-banned](#disclaimer-dan-panduan-anti-banned) sebelum deploy.

---

## Daftar Isi

- [Tentang](#tentang)
- [Fitur](#fitur)
- [Kebutuhan](#kebutuhan)
- [Instalasi](#instalasi)
- [Konfigurasi](#konfigurasi)
- [Integrasi API](#integrasi-api)
- [Database & Penyimpanan](#database--penyimpanan)
- [Web Dashboard](#web-dashboard)
- [CLI](#cli)
- [Struktur Proyek](#struktur-proyek)
- [Pengembangan](#pengembangan)
- [Pengujian](#pengujian)
- [Continuous Integration](#continuous-integration)
- [FAQ](#faq)
- [Author](#author)
- [Disclaimer dan Panduan Anti-Banned](#disclaimer-dan-panduan-anti-banned)
- [Lisensi](#lisensi)

---

## Tentang

Rynn adalah bot WhatsApp self-hosted untuk kamu yang ingin kendali penuh: server kamu, sesi kamu, kunci API kamu. Rynn membawa ratusan perintah siap pakai (downloader, perkakas AI, game, manajemen grup, ekonomi), CLI berbasis wizard untuk instalasi dan pengelolaan harian, dan lapisan database yang bisa jalan di JSON lokal atau di MongoDB, PostgreSQL, dan MySQL.

> _"Bot kamu, server kamu, aturan kamu."_

Berbasis Hitori Bot karya [Nazedev](https://github.com/nazedev/hitori), yang dirombak total dan dilisensikan ulang untuk proyek Rynn.

---

## Fitur

| Kategori | Fitur | Deskripsi |
|----------|-------|-----------|
| Menu & Umum | **Menu dan bantuan** | Menu berkategori, daftar perintah, info bot, ping |
| Menu & Umum | **CLI interaktif** | Wizard setup pertama, manajer pengaturan, dashboard status, pembaca log |
| Menu & Umum | **Hot reload** | `settings.js` dimuat ulang otomatis saat disimpan |
| Alat Grup | **Manajemen grup** | Kick, promote, demote, mute/unmute, tagall, pesan welcome/leave, anti-link, anti-spam, anti-toxic |
| Alat Grup | **Anti-spam** | Cooldown perintah per user dengan toggle `.antispam` per grup |
| Downloader | **YouTube, TikTok, Instagram, Facebook, Spotify, Pinterest, MediaFire** | `ytmp3`, `ytmp4`, `tiktok`, `ig`, `fb`, `spotify`, `pin`, `mediafire`, dan lainnya |
| Perkakas AI | **AI chat** | `ai`, `claude`, `gemini`, `r1`, `glm` lewat Naze API dan Neosantara AI |
| Perkakas AI | **AI media** | AI image generation, background removal, dan upscale gambar lewat API |
| Utilitas | **Stiker dan media** | `sticker`, `stickerwm`, `toimg`, `tomp3`, `tovn`, `translate`, `tts`, `qr` |
| Game | **Werewolf, catur, tic-tac-toe, kuis math, slot, casino** | Game multipemain dan single player dengan engine game sungguhan |
| Game | **Kuis** | `tebakgambar`, `tebakkata`, `susunkata`, `caklontong`, `kuismath`, `tekateki`, `family100` |
| Ekonomi | **Ekonomi RPG** | Limit koin, uang, tier premium/VIP, `daily`, `transfer`, `cangkulan`, `merampok`, `profile`, `leaderboard` |
| Owner | **Perintah owner** | `eval`, `broadcast`, `sewa`, manajemen premium/VIP, `ban`/`unban`, `backup` |
| Owner | **Self-update** | `update` menarik rilis terbaru lewat jaringan |
| Sub-bot | **JadiBot / CloneBot** | Izinkan nomor orang lain berjalan sebagai sub-bot di bawah botmu |
| Pengingat | **Pengingat shalat** | Pesan waktu shalat terjadwal per grup (jadwal di `settings.js`) |

---

## Kebutuhan

| Dependensi | Versi Minimum | Catatan |
|------------|---------------|---------|
| **Node.js** | v20 | Wajib |
| **Git** | any | Wajib (instalasi dari source) |
| **FFmpeg** | any | Wajib untuk perintah media; dipasang oleh install script |
| **PM2** | any | Opsional, untuk process management dan auto-restart |
| **npm** atau **yarn** | any | yarn direkomendasikan di Termux |

> [!TIP]
> Kamu tidak perlu memasang FFmpeg atau PM2 manual. Install script sudah mengurusnya.

### Belum pernah pakai terminal? Mulai dari sini

<details><summary><b>Tampilkan dasar-dasar terminal</b></summary>

1. **Windows:** tekan `Win + R`, ketik `powershell`, tekan Enter. WSL juga bisa.
2. **macOS:** buka `Terminal` dari folder Applications, atau Spotlight (`Cmd + Space`, ketik `terminal`).
3. **Linux:** `Ctrl + Alt + T`.
4. **Android (Termux):** pasang Termux dari F-Droid (bukan build Play Store), lalu buka.
5. Ketik atau tempel perintah, tekan Enter, lalu baca output-nya. `Ctrl + C` menghentikan proses yang sedang berjalan.
</details>

---

## Instalasi

### Opsi A: Installer otomatis (direkomendasikan)

1. Clone repositori:

```bash
git clone https://github.com/nekonaru/rynnbot.git
cd rynnbot
```

2. Jalankan installer untuk platform kamu:

**Linux / macOS / Termux:**

```bash
bash install.sh
```

**Windows (PowerShell):**

```powershell
.\install.ps1
```

Kedua script mendeteksi package manager, memasang dependensi sistem, memasang PM2, menjalankan `npm install`, mendaftarkan command global `rynn` lewat `npm link`, lalu membuka wizard setup pertama.

### Termux (Android)

Berjalan di instalasi Termux standar. Pasang Termux dari F-Droid (bukan build Play Store), lalu:

```bash
pkg update && pkg upgrade
pkg install git nodejs-lts ffmpeg python
git clone https://github.com/nekonaru/rynnbot.git
cd rynnbot
npm install
```

- Jangan clone ke `/storage/...`; filesystem itu tidak mendukung symlink dan Node.js membutuhkannya. Clone ke home directory (misalnya `~/rynnbot`). `bash install.sh` mendeteksi ini dan berhenti dengan petunjuk.
- `@napi-rs/canvas` adalah optional dependency. Jika gagal dibangun di perangkatmu, render gambar otomatis fallback ke PureImage; tidak ada yang terpengaruh selainnya.
- `ffmpeg` wajib untuk perintah media (stiker, konversi video). `python` dibutuhkan untuk perintah `.speed`.
- `bash install.sh` juga berjalan di Termux (memakai `pkg`, memasang dependensi yang sama, dan mendaftarkan command global `rynn`).

### Opsi B: Manual (build from source)

<details><summary><b>Saya sudah punya Git</b></summary>

```bash
git clone https://github.com/nekonaru/rynnbot.git
cd rynnbot
npm install
```
</details>

<details><summary><b>Saya tidak punya Git</b></summary>

1. Unduh source terbaru dari [halaman releases](https://github.com/nekonaru/rynnbot/releases) (Assets, `source code (zip)`).
2. Ekstrak, lalu buka terminal di folder hasil ekstrak.
3. Jalankan `npm install` (pasang [Node.js v20+](https://nodejs.org) dulu).
</details>

4. Buat file `.env`:

```bash
cp .env.example .env
```

5. Buka `.env` dan isi key kamu (lihat [Konfigurasi](#konfigurasi)).

6. Jalankan bot:

```bash
npm start
# atau, jika CLI terdaftar global:
rynn start
```

---

## Konfigurasi

### 1. Environment variables (`.env`)

Secret hanya hidup di `.env`, yang di-gitignore dan tidak pernah di-commit. Copy `.env.example` lalu isi:

| Variable | Wajib | Deskripsi |
|----------|-------|-----------|
| `NAZE_API_KEY` | Ya (untuk fitur API) | Naze API key dari [naze.dev](https://naze.dev) |
| `NEOSANTARA_API_KEY` | Tidak | Neosantara AI key |
| `MONGODB_URL` | Tidak | Connection string MongoDB/MySQL/PostgreSQL. Kosong = penyimpanan folder lokal |
| `NUMBER_BOT` | Tidak | Nomor WhatsApp bot untuk pairing, format `628xx` |
| `OWNER_NUMBER` | Tidak | Nomor owner, pisahkan dengan koma |
| `ADMIN_KEY` | Hanya jika dashboard aktif | Admin key untuk relay dashboard |
| `DASHBOARD_ENABLED` | Tidak | `true` untuk connect ke relay dashboard. Default `false` |
| `ALLOW_REMOTE_EXEC` | Tidak | `true` mengaktifkan endpoint exec shell jarak jauh walau dashboard aktif. Default `false` |
| `ALLOW_INSECURE_TLS` | Tidak | `true` mematikan verifikasi TLS untuk API eksternal. Default `false` |

> [!IMPORTANT]
> Key contoh yang pernah dikirim sebagai contoh di rilis lama file ini ter-commit ke repositori dan harus dianggap bocor. Generate ulang di [naze.dev](https://naze.dev) lalu taruh key baru kamu di `.env`.

### 2. `settings.js` (hot-reloaded)

Semua pengaturan non-secret ada di `settings.js`: owner, nama bot, author, prefix, timezone, locale, limit, money, jadwal sholat, bad words, path database. Edit langsung (hot-reload) atau pakai `rynn settings`.

### 3. Wizard setup

```bash
rynn --setup
```

Wizard ini memandu kamu mengisi nomor owner, author, nama bot, Naze API key, dan nomor WhatsApp bot.

---

## Integrasi API

Rynn berbicara dengan **Naze API** (`https://naze.dev/api/v1`) untuk downloader, perkakas AI, dan utilitas media, serta **Neosantara AI** untuk beberapa model AI. Ambil key kamu di [naze.dev](https://naze.dev) dan [app.neosantara.xyz](https://app.neosantara.xyz).

Helper global `global.fetchApi(endpoint, data, options)` didefinisikan di `index.js`. Helper ini me-resolve base URL dari `global.APIs`, menyuntikkan key kamu otomatis, dan mem-parse respons.

Bentuk fungsi:

```js
await global.fetchApi(endpoint, data, options)
```

- `endpoint`: route yang diawali `/` (misalnya `/ai/chat`).
- `data`: object. Request GET menjadi query string; request POST dikirim sebagai JSON body (atau `FormData` jika `options.form = true`).
- `options`:
  - `method`: `"GET"` (default) atau `"POST"`
  - `stream`: `true` atau path file untuk streaming respons ke file temp
  - `buffer`: `true` untuk mengembalikan `Buffer`
  - `api`: index provider (`1` = Naze, `2` = Neosantara)
  - `responseType`: `"json"` (default), `"text"`, atau `"arrayBuffer"`

### Contoh: AI chat dengan GET (default)

```js
const response = await global.fetchApi("/ai/chat", { query: text });
await m.reply(response.result.message);
```

### Contoh: AI chat dengan POST

```js
const response = await global.fetchApi("/ai/chat", { query: text, model: "default" }, { method: "POST" });
await m.reply(response.result.message);
```

> [!TIP]
> Untuk endpoint yang mengembalikan media (TTS, image generator), kirim `{ stream: true }`. `fetchApi` menyimpan file dan mengembalikan path lokalnya, siap dipakai `sock.sendMessage()`.

> [!NOTE]
> Tanpa API key yang valid, perintah berbasis API gagal dengan pesan yang jelas menyuruh kamu mengisi `NAZE_API_KEY` di `.env` atau jalankan `.setapikey`.

---

## Database & Penyimpanan

Rynn membagi data menjadi tiga lapis, masing-masing bisa dikonfigurasi sendiri:

1. **Session auth** (`global.database.path`): kredensial WhatsApp dan signal key, ditulis lewat antrean FIFO async.
2. **Message store** (`global.database.options.store`): cache Baileys untuk pesan, kontak, dan metadata grup.
3. **Bot database** (`global.database.options.database`): user, ekonomi, limit, pengaturan grup.

| Engine | Prefix | Catatan |
|--------|--------|---------|
| **JSON lokal** | *(nama folder, misal `rynn-session`)* | Default. Nol setup |
| **MongoDB** | `mongodb://` atau `mongodb+srv://` | Connection pool berbagi, SSL auto-detected |
| **PostgreSQL** | `postgres://` atau `postgresql://` | Cocok untuk Supabase, Neon, Aiven, RDS |
| **MySQL** | `mysql://` | Cocok untuk TiDB Cloud, PlanetScale |

Semua lapis bisa berbagi satu server (`store: true, database: true`), atau masing-masing menunjuk engine/file lokal sendiri (`store: { path: "mongodb+srv://..." }`). Jangan hardcode kredensial di `settings.js`; taruh di `.env` atau di connection string.

```js
// contoh settings.js: JSON lokal (default)
global.database = {
	path: "rynn-session",
	options: { store: true, database: true },
};

// contoh settings.js: PostgreSQL di semua lapis (URL dari .env)
global.database = {
	path: process.env.MONGODB_URL, // atau string postgres://
	options: { store: true, database: true },
};
```

---

## Web Dashboard

Rynn bisa terhubung ke relay dashboard di `bot.naze.biz.id` lewat Socket.IO. **Nonaktif secara default** dan harus diaktifkan manual:

```env
DASHBOARD_ENABLED=true
ADMIN_KEY=<string acak yang panjang>
ALLOW_REMOTE_EXEC=false   # opsional, mengaktifkan exec shell jarak jauh. Biarkan false kecuali perlu.
```

Saat aktif, bot mendaftarkan dirinya dan mencetak dashboard URL (berisi admin key) ke console. Dari panel kamu bisa melihat statistik, jelajah/edit data, mengubah pengaturan, dan mengirim pesan.

> [!CAUTION]
> Dashboard ini adalah layanan relay pihak ketiga. Mengaktifkannya mengekspos kontrol admin bot ke siapa pun yang memegang admin key. Endpoint remote exec (`ALLOW_REMOTE_EXEC=true`) bisa menjalankan perintah shell di server kamu sebagai user bot. Biarkan keduanya mati kecuali kamu benar-benar percaya relay dan jaringanmu.

Lihat bagian [Catatan keamanan](#catatan-keamanan) di bawah untuk cara otorisasi relay-nya.

### Catatan keamanan

- `package.json` berjalan dengan `private: true`; tidak ada jalur publish ke npm.
- Secret hanya hidup di `.env` (di-gitignore). `scripts/check.js` memindai pola key di CI.
- Dashboard dan remote exec nonaktif secara default dan butuh flag opt-in terpisah.
- Perbandingan admin key memakai timing-safe comparison; percobaan gagal dikunci 15 menit.
- Verifikasi TLS aktif secara default; `ALLOW_INSECURE_TLS=true` mematikan dengan peringatan keras.
- Dependensi dipasang dengan `npm ci` dari lockfile yang ter-commit.

---

## CLI

Rynn membawa CLI lengkap (terdaftar global sebagai `rynn` oleh installer):

```text
rynn                  Buka menu utama interaktif
rynn start            Jalankan bot
rynn settings         Buka manajer pengaturan
rynn status           Dashboard kesehatan sistem
rynn report           Log dan diagnostik
rynn --setup          Ulangi wizard setup pertama
rynn --help           Bantuan
```

Manajer pengaturan mengedit `settings.js` (dan `.env` untuk Naze API key) lewat menu terarah. Status menampilkan cek dependensi, info proses PM2, info file database, dan resource sistem. Report menampilkan log PM2 terakhir, error terfilter, cek integritas JSON, dan `npm audit`.

---

## Struktur Proyek

```text
rynnbot/
├── index.js                  # Core connector: init Baileys, event, pairing, auto-restart
├── handler.js                # Semua perintah bot (blok switch (command))
├── start.js                  # Entry point: spawn index.js, restart saat crash, graceful shutdown
├── settings.js               # Konfigurasi, hot-reload
├── cli.js                    # Entry point CLI
├── speed.py                  # Helper speedtest untuk perintah .speed
├── install.sh                # Installer (Linux / macOS / Termux)
├── install.ps1               # Installer (Windows)
├── install.cmd               # Launcher installer (Windows)
├── .env.example              # Template .env (aman di-commit)
├── lib/
│   ├── converter.js          # Konversi media (audio, video, GIF, WebP)
│   ├── exif.js               # Metadata EXIF stiker
│   ├── function.js           # Helper bersama (fetchJson, updateSettings, antiSpam, backup)
│   ├── game.js               # Logika game (Werewolf, Chess AI, ekonomi RPG)
│   ├── math.js               # Generator kuis math
│   ├── scraper.js            # Scraper YouTube/media
│   ├── template_menu.js      # Template menu
│   ├── tictactoe.js          # Engine tic-tac-toe
│   ├── uploader.js           # Upload file
│   ├── werewolf.js           # Engine game Werewolf
│   └── interactive.js        # Helper interactive message
├── src/
│   ├── auth.js               # Adapter auth custom (lokal/MongoDB/SQL)
│   ├── database.js           # Adapter database (JSON / MongoDB / MySQL / PostgreSQL)
│   ├── message.js            # Parser & serializer pesan, lid-mapping
│   ├── clonebot.js           # Sesi sub-bot (clonebot)
│   ├── server.js             # Klien relay dashboard (nonaktif default)
│   ├── env.js                # Helper read/write .env
│   ├── cli/                  # Modul CLI (setup, settings, status, report)
│   ├── helper/               # Builder interactive message
│   ├── lib/interactive.js    # Re-export interactive message
│   ├── media/                # Aset statis
│   └── nulis/                # Aset generator gambar tulisan tangan
├── scripts/
│   └── check.js              # `npm run check`: cek sintaks + pemindai key bocor
├── .github/workflows/ci.yml  # CI
├── database/                 # Data runtime (gitignored)
├── Dockerfile
├── docker-compose.yml
├── package.json
└── package-lock.json
```

---

## Pengembangan

### Menambah perintah baru

1. Buka `handler.js`, cari blok `switch (command)`.
2. Tambahkan `case` baru:

```js
case "ping": {
	await m.reply("pong");
}
break;
```

3. Daftarkan perintah di template menu (`lib/template_menu.js`) jika ingin muncul di menu.
4. Jalankan `npm run check` sebelum commit (cek sintaks + pemindai secret).

Jangan restrukturisasi blok `switch` utama. Tambah perintah sebagai entri `case` terpisah saja.

### Update

`settings.js` di-hot-reload saat disimpan. Untuk update kode, pull perubahan terbaru atau jalankan `.update` di WhatsApp, lalu restart bot (`Ctrl + C`, `npm start`).

---

## Pengujian

```bash
npm run check   # node --check semua file .js + scan pola key bocor
```

| Cek | Kebutuhan |
|-----|-----------|
| `node --check` di setiap file `.js` | Harus lolos |
| Scan secret (`gsk_`, `nz-` diikuti 10+ hex, `nsk_` diikuti 16+ hex) di file ter-track | Harus kosong |
| `npm audit --omit=dev --audit-level=high` | Advisory di CI (tidak menggagalkan build) |

Linting diserahkan ke editor kamu; proyek membawa konfigurasi Prettier (`.prettierrc.json`) tapi tanpa gate lint wajib.

---

## Continuous Integration

| Workflow | Tujuan |
|----------|--------|
| `.github/workflows/ci.yml` | Setiap push ke `main`, tag `v*`, dan PR: install dengan `npm ci`, jalankan `npm run check`, dan `npm audit` sebagai advisory |

---

## FAQ

<details><summary><b>Saya dapat pairing code tapi bot tidak connect. Kenapa?</b></summary>

Nomor di `NUMBER_BOT` (`.env`) harus nomor WhatsApp yang kamu kontrol dan tidak sedang dipakai di tempat lain. Coba hapus folder sesi (`rynn-session/`), restart, lalu pairing ulang. Baca panduan anti-banned dulu sebelum memakai nomor baru.
</details>

<details><summary><b>Bisa dipakai untuk dua nomor WhatsApp?</b></summary>

Bisa. `jadibot`/`clonebot` mengizinkan nomor orang lain berjalan sebagai sub-bot di bawah botmu. Owner bisa mengelolanya lewat `listjadibot` dan `deljadibot`.
</details>

<details><summary><b>Taruh API key di mana?</b></summary>

Di `.env` sebagai `NAZE_API_KEY` (copy `.env.example`). Kamu juga bisa jalankan `.setapikey key-kamu` di WhatsApp, atau `rynn settings` lalu pilih API Keys. Key tersimpan di `.env`, tidak pernah di `settings.js`.
</details>

<details><summary><b>Nomor saya banned. Bisa dibantu?</b></summary>

Tidak bisa. Banned dikeluarkan oleh sistem anti-spam Meta dan di luar kendali siapa pun. Baca [Disclaimer dan panduan anti-banned](#disclaimer-dan-panduan-anti-banned) sebelum deploy, dan jangan pernah memakai SIM card baru.
</details>

<details><summary><b>Apakah proyek ini menyimpan pesan WhatsApp saya?</b></summary>

Pesan di-cache lokal di folder sesi/store supaya Baileys bisa bekerja, dan data bot (limit, premium, dll) hidup di database yang kamu konfigurasi. Tidak ada yang dikirim ke pihak ketiga selain API provider yang kamu panggil, dan relay dashboard jika kamu mengaktifkannya (nonaktif default).
</details>

<details><summary><b>Bagaimana cara update?</b></summary>

`git pull` (atau `.update` di WhatsApp) lalu `npm start`. Bot restart otomatis saat crash jika dijalankan lewat `start.js`.
</details>

---

## Author

<div align="center">

| [![Nekonaruu](https://github.com/nekonaru.png?size=100)](https://github.com/nekonaru) |
|:---:|
| **[Nekonaruu](https://github.com/nekonaru)** |

</div>

Berbasis Hitori Bot karya [Nazedev](https://github.com/nazedev/hitori).


---

## Disclaimer dan Panduan Anti-Banned

### 1. API tidak resmi dan disclaimer hukum

Rynn adalah proyek open-source independen yang dibangun di atas Baileys, protokol WhatsApp Web multi-device tidak resmi. Proyek ini tidak berafiliasi dengan, didukung, atau diotorisasi oleh WhatsApp Inc. maupun Meta Platforms, Inc. Penggunaannya melanggar Terms of Service WhatsApp. Dengan mengunduh, memasang, atau menjalankan Rynn, kamu menerima semua risiko, termasuk pembatasan atau banned akun, kehilangan pesan, dan kerugian apa pun yang timbul. Penulis dan kontributor tidak bertanggung jawab.

### 2. Kenapa akun di-banned

1. **SIM card baru.** Nomor baru tidak punya jejak chat dan langsung ditandai. Hangatkan nomor 2-4 minggu dengan pemakaian manusia normal sebelum dipakai bot.
2. **Laporan user.** Dua atau tiga klik "Report and block" di grup publik akan memicu banned instan. Batasi bot ke grup privat atau tepercaya.
3. **IP datacenter.** Range IP VPS cloud (AWS, DigitalOcean, Heroku, Railway) dicurigai lebih tinggi dibanding koneksi rumahan. Hindari reconnect terlalu sering dan jaga volume pesan tetap realistis.

### 3. Kebijakan maintainer

Issue yang mengeluhkan nomor banned akan ditutup tanpa tindakan. Keamanan akun 100% tanggung jawab pengguna bot.

---

## Lisensi

Didistribusikan di bawah **Lisensi MIT**. Lihat [`LICENSE`](LICENSE) untuk informasi lebih lanjut.
