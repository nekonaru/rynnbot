# Changelog

## v3.1.1

Rynn v3.1.1 stabil mencakup perbaikan bug fungsi inti, pengetatan privilege command, dan redaksi key di log/error.

### Perbaikan bug

- **KuisMath tidak pernah berakhir.** Timer dan penghapusan sesi diperbaiki; soal kausal dihentikan dengan benar.
- **Family 100.** Jawaban salah sekarang ditolak ("Jawaban Salah!"), bukan diam-diam diterima.
- **tebakbom.** Regex tebakan angka dibatasi 1-10 dengan benar.
- **Backup database dan sesi rusak total** saat memakai `global.tempatDB` yang tidak ada; sekarang memakai `global.database.path` dan mendukung database remote.
- **Board/Chess image tidak pernah muncul.** URL eksternal di-fetch langsung, bukan dirutekan lewat Naze API (di mana URL jadi `naze.dev/api/v1/https://...`).
- **fetchApi tanpa timeout** bisa menggantung selamanya. Sekarang 60 detik.
- **`getsession`/`deletesession`/`backup session`** mengikuti folder sesi yang dikonfigurasi (`global.database.path`), bukan hardcoded `./rynn-session`.

### Perbaikan keamanan

- **Privilege escape.** `delmsg`/`deletemsg` sekarang owner-only; `delcmd` hanya bisa dihapus oleh pembuat atau owner; `listblock` dan `.speedtest` diberi gate owner.
- **API key tidak lagi bocor** ke owner lewat pesan error dan tidak di-log mentah (redaksi `apikey`, `nz-` dan `nsk_`).

### Peningkatan

- **Cakupan test.** 11 unit test awal untuk `lib/function.js` (URL, anti-spam, similarity, compress/decompress); `npm test` hijau dan dijalankan CI.
- **CI** sekarang menjalankan `npm test` setelah `npm run check`.

## v3.1.0

Rynn v3.1.0 menambahkan wizard setup pertama langsung di WhatsApp, ikon mascot baru, dan dokumentasi lengkap dari instalasi sampai operasi.

### Fitur baru

- **Wizard setup pertama.** Saat pairing baru, owner menerima panduan setup langsung di WhatsApp: nama author, nama bot, nama paket stiker, nomor owner, Naze API key (wajib), dan Neosantara AI key (opsional). Semua langkah bisa di-`skip` memakai bawaan kecuali Naze API key. Setelah selesai, bot siap dipakai dan wizard bisa diulang kapan pun dengan `.setupbot`.
- **Ikon mascot Rynn.** Logo mascot transparan (`assets/rynn-mascot.png`) dipakai di README dan thumbnail bot.

### Peningkatan

- **Dokumentasi lengkap.** README dari instalasi (termasuk Termux) sampai operasi harian, daftar perintah populer, tabel pemecahan masalah, dan bagian Author yang center.
- **Bahasa Indonesia menyeluruh.** Seluruh project (kode, pesan UI, dokumen, release notes, metadata repo) hanya berbahasa Indonesia.
- **Dockerfile non-root.** Container berjalan sebagai user `node`, dengan direktori runtime (`database/`, `backup/`, `rynn-session/`) yang dimiliki user node.
- **Pesan gagal download lebih jelas** untuk ytmp3/ytmp4, Instagram, TikTok (termasuk audio), dan Facebook, plus tag `[ytmp3]`, `[instagram]`, `[tiktok]`, `[facebook]` di console.

### Perbaikan bug

- **install.sh tidak berhenti lagi di lingkungan tanpa root.** Deteksi sudo diuji dulu (`sudo -v`); bila tidak tersedia, script tetap jalan tanpa hak admin, PM2 dan pendaftaran command `rynn` bersifat opsional, dan pemasangan dependensi sistem dilewati dengan petunjuk yang jelas bila tidak ada hak superuser.
- **Bot tidak bisa menulis `database/` di image.** Direktori runtime (`database/`, `rynn-session/`, `backup/`) di dalam image kini dimiliki user node, sehingga bot berjalan normal sebagai user non-root.

## v3.0.1

Rynn v3.0.1 membuat bot bisa di-install dan dijalankan di Termux (Android) dan memperbaiki banner CLI.

### Peningkatan

- **Dukungan Termux.** `@napi-rs/canvas` kini menjadi optional dependency, sehingga `npm install` tidak lagi gagal di perangkat tanpa prebuilt binary atau system library; render gambar otomatis fallback ke PureImage. Jalur installer Termux memakai `pkg` + `npm install`, README memuat panduan setup Termux (Android), dan installer tetap berjalan di Termux.

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
