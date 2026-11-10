# Kebijakan Keamanan

## Versi yang didukung

Hanya rilis terbaru yang menerima perbaikan keamanan.

| Versi | Didukung |
|-------|----------|
| 3.x   | ya       |
| < 3.0 | tidak    |

## Melaporkan kerentanan

Jangan laporkan masalah keamanan di issue atau pull request publik. Laporkan secara privat lewat GitHub private vulnerability reporting (tab Security, "Report a vulnerability") di repositori ini. Sertakan langkah reproduksi dan dampaknya. Kamu bisa mengharapkan konfirmasi dalam beberapa hari.

## Secret

API key dan kredensial hanya hidup di `.env`, yang di-gitignore dan tidak pernah di-commit. Jangan buka pull request yang menambahkan key, token, atau kredensial ke repositori. Kalau menemukan secret yang ter-commit, laporkan secara privat sesuai cara di atas.

## Lingkup

Kebijakan ini mencakup kode di repositori ini, termasuk `handler.js`, `index.js`, `start.js`, `settings.js`, `src/`, dan `lib/`. Tidak mencakup layanan WhatsApp, Naze API, atau relay dashboard di `bot.naze.biz.id`, yang semuanya layanan pihak ketiga yang dioperasikan penyedianya masing-masing.
