# Rynn - Panduan untuk Agen

## Project

- **PROJECT_NAME**: Rynn
- **REPO**: nekonaru/rynnbot
- **AUTHOR_NAME**: Nekonaruu
- **AUTHOR_GITHUB**: nekonaru
- **PROJECT_KIND**: general (bot/CLI self-hosted)
- **STACK**: Node.js (ESM), Baileys, multi-database (JSON/MongoDB/MySQL/PostgreSQL)
- **PLATFORMS**: Linux, macOS, Windows, Android (Termux)
- **MIN_OS**: n/a (Node.js >=20)
- **DEFAULT_BRANCH**: main
- **LICENSE**: MIT
- **UI_LANGUAGES**: Bahasa Indonesia (bahasa utama dan satu-satunya; perintah bot dan pesan pengguna dalam Bahasa Indonesia)
- **VERIFICATION**: local-and-ci (lokal Node 24, CI di GitHub Actions)

## Bahasa

Seluruh project ini berbahasa Indonesia: kode, komentar, pesan yang tampil ke pengguna, dokumen, commit message, dan release notes. Jangan menambah teks berbahasa Inggris kecuali untuk istilah teknis yang memang tidak punya padanan (nama package, perintah shell, nama API).

## Bekerja di repo ini

- `settings.js` di-hot-reload. Secret (API key, URL DB) hanya hidup di `.env` (gitignored). Jangan pernah commit secret atau hardcode key di `settings.js`.
- Sebelum commit, jalankan `npm run check` (syntax check + scan kebocoran key). CI menjalankan check yang sama di setiap push.
- Router perintah utama adalah blok `switch (command)` di `handler.js`. Tambah perintah sebagai entri `case` terpisah; jangan restrukturisasi bloknya.
- `README.md` dan `CHANGELOG.md` adalah dokumen tunggal berbahasa Indonesia. Ubah keduanya dalam commit yang sama kalau fitur, versi, atau perintah berubah.
- Release: bump `package.json` + `package-lock.json`, update `CHANGELOG.md`, tag `vX.Y.Z` setelah CI hijau, dan buat release notes berbahasa Indonesia.
- File kerja lokal (`SECURITY_MAP.md`, `SECURITY_REVIEW.md`, `SECURITY_REPORT.md`) tidak pernah di-commit.

## Aset brand

Logo Rynn: mascot oranye melambai (`assets/rynn-mascot.png`, 512x512 dengan background transparan, dipakai README) dan `src/media/rynn.png` (768x768, thumbnail bot di adReply).
