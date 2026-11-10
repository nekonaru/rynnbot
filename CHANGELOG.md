# Changelog

## v3.0.1

Rynn v3.0.1 membuat bot bisa di-install dan dijalankan di Termux (Android) dan memperbaiki banner CLI.

### Peningkatan

- **Dukungan Termux.** `@napi-rs/canvas` kini menjadi optional dependency, sehingga `npm install` tidak lagi gagal di perangkat tanpa prebuilt binary atau system library; render gambar otomatis fallback ke PureImage. Jalur installer Termux memakai `pkg` + `npm install`, kedua README memuat panduan setup Termux (Android), dan installer tetap berjalan di Termux.

### Perbaikan bug

- **Banner art CLI.** Memperbaiki banner art yang rusak dan karakter nyasar yang tampil di banner startup CLI.

## v3.0.0

RynnBot v3.0.0 dibangun ulang di atas codebase upstream terbaru dan dirancang ulang sebagai proyek Rynn: identitas dipindahkan sepenuhnya ke Rynn/Nekonaruu, secret dipindahkan ke `.env`, dan dokumentasi kini berbahasa Indonesia.

### Perubahan besar

- **Nama file command handler berubah.** `naze.js` kini `handler.js`, mengikuti tata letak upstream. Fork yang membawa perubahan custom harus rebase manual.
- **API key hanya hidup di `.env`.** `settings.js` tidak lagi menyimpan key literal maupun fallback hardcoded. Pindahkan `NAZE_API_KEY` dan `NEOSANTARA_API_KEY` ke `.env` (copy `.env.example`). `rynn setup` dan `.setapikey` menulis ke `.env`, bukan `settings.js`.
- **Self-update menunjuk repo ini.** Perintah `.update` bawaan kini mengunduh `nekonaru/rynnbot` (branch main), bukan repositori upstream Hitori.
- **Dashboard dan remote exec mati secara default.** Set `DASHBOARD_ENABLED=true` untuk connect ke relay dashboard dan `ALLOW_REMOTE_EXEC=true` untuk mengaktifkan endpoint remote exec. Admin key tidak lagi memakai fallback konstan yang lemah.

### Peningkatan

- **Sejalan dengan upstream.** Sinkron dengan upstream terbaru: parser/serializer pesan yang ditulis ulang, CloneBot sub-bot, interactive messages, lid-to-pn mapping, bounded LID cache, penanganan SSL yang lebih aman.
- **Verifikasi TLS aktif secara default.** Pipeline fetch tidak lagi mematikan verifikasi sertifikat; set `ALLOW_INSECURE_TLS=true` untuk opt-out dengan peringatan keras.
- **Penanganan key diperketat.** Tidak ada key di `settings.js`, `.env.example`, atau jalur CLI; `.setapikey` men-mask key di reply-nya; wizard setup tidak lagi menulis key placeholder ke `.env`.
- **Checks dan CI.** Baru: `npm run check` (syntax check setiap `.js` + scan key bocor), workflow GitHub Actions (`npm ci`, `npm run check`, `npm audit` advisory), dan `package-lock.json` yang ter-commit; Dockerfile dan Procfile kini memakai `npm ci`.
- **Dokumen dibangun ulang.** README dan CHANGELOG kini satu bahasa (Indonesia); `SECURITY.md` (kebijakan pelaporan) dan `AGENTS.md` (panduan project) baru.

### Perbaikan bug

- **URL update di-pin.** Auto-update mengarah ke repositori upstream, yang akan diam-diam mengganti identitas dan menimpa kode Rynn; kini mengarah ke `nekonaru/rynnbot`.
- **Jalur update tidak aman.** Download update tidak lagi melewati verifikasi TLS.
- **Kebocoran placeholder.** `.env.example` tidak lagi memuat key yang ter-commit di rilis sebelumnya; perilaku memperlakukan key yang terekspos sebagai bocor kini didokumentasikan.
