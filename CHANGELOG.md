# Changelog

## v3.10.0

Rynn v3.10.0 menambahkan bundle belajar SMA, nama bayi Indonesia, dan memperkaya data di hampir semua fitur.

### Fitur baru

- **`.soal`** - bank soal SMA campuran. Jawaban dengan `.soal a` sampai `.soal d`. Hadiah +25 uang per jawaban benar. `.soal skor` untuk melihat skor.
- **`.soalmtk`**, **`.soalipa`**, **`.soalips`**, **`.soalbindon`**, **`.soalppkn`** - bank soal per mata pelajaran (matematika, IPA, IPS, Bahasa Indonesia, PPKn).
- **`.namabayi`** - nama bayi Indonesia beserta asal dan arti. `.namabayi cowo`, `.namabayi cewe`, `.namabayi cowo artinya rama`.

### Peningkatan data besar-besaran

- Fakta: 330 ke 400, puisi: 65 ke 75, pantun: 62 ke 100.
- Kuliner: 4 item baru (sotokudus, wingkobabad, lumpia, ayamlodho).
- WISATA: 22 destinasi baru.
- WAYANG: 4 tokoh baru.
- HANGMAN: 30 kosakata baru.

### Catatan

- Bank soal berisi jawaban yang disesuaikan dengan kurikulum nasional SMA/sederajat.
- Semua data nama bayi dan asalnya diambil dari referensi umum.

## v3.9.0

Rynn v3.9.0 memperluas konverter mata uang, rumus, konversi, dan memperkaya data besar-besaran.

### Perubahan besar

- **`.kurs`** diperluas menjadi konverter mata uang penuh:
  - Konversi dua arah dengan alias: `.kurs 100 USD IDR`, `.kurs USD IDR 100`, `.kurs 25000 IDR USD` (alias: rupiah, dolar, euro, yen, ringgit, baht, yuan, won, rupee, poundsterling).
  - `.kurs` menampilkan kurs 49 mata uang utama (base USD).
  - `.kurs list` menampilkan semua kode mata uang (~160).
  - Setiap konversi menampilkan kurs satuan dan waktu pembaruan dari server.
- **`.rumus`** diperluas menjadi 15 kategori (tambahan: basis/sistem bilangan, biologi, termodinamika), total sekitar 130+ rumus.
- **`.konversi`** diperluas: daya (watt, kw, hp, pk), frekuensi (hz, khz, mhz, ghz), sudut (derajat, rad, grad). Total 13 kelompok satuan.
- **`.hangman`** diperluas dari 200 ke 300 kosakata.
- **Data** diperluas: fakta 330 ke 359, puisi 55 ke 65, pantun 62 ke 82, kuliner 111 ke 124, resep 71 ke 83, wisata 93 ke 100 (total lebih dari 1.500 entri data).
- **Audit**: semua fitur `.kurs`, `.konversi`, `.rumus` diverifikasi berjalan; `npm run check`, `npm test`, CI hijau.

### Catatan

- Kurs mata uang memakai open.er-api.com (diperbarui harian, tanpa API key). Angka kurs bisa berbeda dengan kurs bank.

## v3.8.0

Rynn v3.8.0 menambahkan opsi `random`, perintah `.lagudaerah` (ganti dari `.lagu`), rumus dan konversi yang jauh lebih lengkap, planet diperluas (planet kerdil dan exoplanet), serta menu EDUKASI yang lebih ringkas.

### Yang ditambah

- **`.lagudaerah`** (alias `.lagu`) - nama perintah diganti supaya lebih spesifik.
- **Opsi `random`** untuk .suku, .kuliner, .resep, .wayang, .wisata, .lagudaerah, .negara, .ibukota, .unsur, .planet, .provinsi, .rumus (contoh: `.suku random`, `.planet random`).
- **`.rumus`** diperluas menjadi 12 kategori (tambahan: peluang, matriks, vektor, kalkulus), total sekitar 110+ rumus.
- **`.konversi`** diperluas: kecepatan (mps, kmh, mph, knot), energi (j, kj, kalori, kkal, kwh), tekanan (pa, kpa, bar, atm, mmhg, psi), data digital (b, kb, mb, gb, tb, bit), waktu (s, detik, menit, jam, hari, minggu, bulan, tahun).
- **`.planet`** diperluas menjadi 21 entri: 8 planet tata surya, 5 planet kerdil (pluto, ceres, eris, makemake, haumea), 8 exoplanet terkenal (proxima, trappist-1e, kepler-186f, kepler-452b, 51 pegasi b, HD 209458 b, K2-18 b, TOI-700 d).
- **Data** diperluas: fakta 277 ke 330, kuliner 89 ke 111, resep 53 ke 71, wisata 81 ke 93, wayang 43 ke 48, (total lebih dari 1.300 entri data).

### Peningkatan

- **Menu EDUKASI**: keterangan dalam kurung dihilangkan (sesuai permintaan), footer GAME-EDUKASI dirapikan di kedua menu.
- **`.rumus`** dan **`.konversi`** kini mencantumkan daftar satuan/kategori yang lengkap di pesan bantuan.
- **README** diperbarui.

### Catatan

- Exoplanet: jarak adalah perkiraan tahun cahaya, diameter perkiraan. Momen penemuan: 1995 untuk 51 Pegasi b (exoplanet pertama yang ditemukan mengelilingi bintang mirip Matahari).

## v3.7.0

Rynn v3.7.0 fokus pada memperkaya data (lebih dari 1.300 entri data Indonesia dan dunia) dan memudahkan update di Termux lewat perintah `.update`.

### Peningkatan besar

- **Data diperluas masif**: fakta 277, puisi 55, pantun 62, suku 61, kuliner 89, resep 53, lagu daerah 28, wisata 81, tokoh wayang 43, provinsi 38 (ditambah field `Kota besar`), negara 181 (146 + 35), unsur 118 (tabel periodik lengkap), kata hangman 200.
- **`.provinsi`** kini menampilkan `Kota besar` selain ibukota, gubernur, penduduk, suku, bahasa, lagu daerah, rumah adat, kuliner, wisata, dan khas provinsi.

### Perbaikan perintah `.update`

- Termux sekarang memakai `npm install --omit=dev` (bukan yarn yang sering tidak terpasang). Dependensi hanya dipasang ulang jika memang berubah.
- `.update` menunggu update selesai, lalu membalas hasilnya, dan **bot memulai ulang otomatis** jika dijalankan lewat `npm start` (start.js), tanpa perlu instalasi ulang. Backup otomatis dibuat sebelum update dengan rollback jika gagal.

### Catatan

- Angka populasi negara dibulatkan (estimasi Bank Dunia 2023) dan diberi tanda ±.
- Data provinsi: penduduk dibulatkan (Sensus 2020); gubernur hanya diisi untuk yang diyakini menang Pilkada 2024.

## v3.6.0

Rynn v3.6.0 menambahkan perintah dunia & sains, teks, dan game hangman. Semua berjalan lokal tanpa API eksternal.

### Fitur baru

- **`.ibukota`** - ibukota sekitar 150 negara (`.ibukota jepang`).
- **`.negara`** - info negara: ibukota, mata uang, benua, penduduk (dibulatkan, estimasi Bank Dunia 2023) (`.negara jepang`).
- **`.unsur`** - tabel periodik mini, sekitar 80 unsur (nama atau simbol: `.unsur emas` atau `.unsur au`).
- **`.planet`** - info 8 planet tata surya (`.planet mars`).
- **`.balik`** - teks dibalik (`.balik halo`).
- **`.hitungkata`** - statistik teks: jumlah kata, karakter (dengan/tanpa spasi), kalimat (`.hitungkata halo dunia`).
- **`.warna`** - warna acak dalam HEX, RGB, dan HSL.
- **`.hangman`** - tebak kata Indonesia, 6 nyawa, hadiah 100 uang (alias `.gantung`).
- **`.rumus`** diperluas: kategori statistika, trigonometri, aljabar, dan geometri lanjutan.

### Peningkatan

- Kategori **EDUKASI** berisi perintah dunia & sains; `.warna` masuk FUN, `.hangman` masuk GAME.
- `.edukasimenu` diperluas mencakup semua perintah edukasi.
- **README** mencatat perintah-perintah baru di tabel fitur dan perintah populer.

### Catatan

- Populasi negara dibulatkan dari estimasi Bank Dunia 2023 dan diberi tanda ±. Angka bisa berubah seiring waktu.
- Data tabel periodik dan planet adalah data textbook umum.

## v3.5.0

Rynn v3.5.0 menambahkan lebih dari 20 perintah baru, mayoritas edukasi, budaya Indonesia, konversi, dan MBTI. Mayoritas berjalan lokal tanpa API eksternal.

### Fitur baru

- **`.provinsi`** - info 38 provinsi Indonesia: ibukota, gubernur (Pilkada 2024, hanya yang diyakini), penduduk (Sensus 2020, dibulatkan), suku, bahasa, lagu daerah, rumah adat, kuliner khas, wisata.
- **`.mbti`** - tes kepribadian MBTI, 16 pertanyaan (4 per sumbu). Deskripsi 16 tipe. Hasil tersimpan di db user.
- **`.wayang`** - info tokoh wayang Indonesia.
- **`.lagu`** - daftar lagu daerah + daerah asal.
- **`.wisata`** - 40 destinasi wisata Indonesia.
- **`.resep`** - 22 resep sederhana masakan Indonesia.
- **`.fakta`** - sekitar 100 fakta menarik.
- **`.puisi`** - puisi pendek orisinal.
- **`.pantun`** - diperluas dari 5 menjadi 20.
- **`.suku`** - diperluas dari 15 menjadi lebih dari 30 suku.
- **`.kuliner`** - diperluas dari 12 menjadi lebih dari 40 kuliner.
- **`.umur`** - kalkulator umur + hitung mundur ulang tahun berikutnya.
- **`.terbilang`** - angka ke kata Indonesia (sampai triliun).
- **`.roman`** - konversi angka Arab dan Romawi dua arah.
- **`.konversi`** - konversi panjang, berat, suhu, luas, volume.
- **`.morse`** - encode/decode kode Morse.
- **`.binary`** - encode/decode binary.
- **`.hex`** - encode/decode hex.
- **`.rot13`** - cipher ROT13.
- **`.angkaacak`** - angka acak dalam rentang (`.angkaacak 1-100`).
- **`.pilih`** - random choice picker (`.pilih kopi | teh | susu`).
- **`.zodiak`** - zodiak + elemen dan rentang tanggal.
- **`.lirik`** - lirik lagu lewat Naze API (`.lirik Pamungkas - To The Bone`).

### Peningkatan

- Kategori **EDUKASI** di menu berisi semua perintah edukasi baru; perintah `.pilih` dan `.angkaacak` masuk kategori FUN.
- `.suku`, `.kuliner`, `.pantun` memakai data terpusat yang lebih besar (`lib/data-indonesia.js`, `lib/data-umum.js`).
- **README** mencatat perintah-perintah baru di tabel fitur dan perintah populer.

### Catatan

- Data provinsi: penduduk dibulatkan dari Sensus Penduduk 2020; gubernur hanya diisi untuk provinsi yang diyakini menang Pilkada 2024, sisanya diisi jujur "data belum tersedia".
- Endpoint Naze `/ai/sunora` (lagu AI) dan `/tools/ocr` (ocr) tidak dirilis karena tidak berfungsi dengan key yang dipakai. `/ai/zonerai/txt2img` (gambar) tidak dirilis karena menuntut akses VIP. Lirik lagu (`/music/lyrics`) sudah diverifikasi dan disertakan.

## v3.4.0

Rynn v3.4.0 menambahkan perintah edukasi dan permainan, semuanya bisa dipakai tanpa API eksternal, kecuali `.hitung` yang memakai Naze API.

### Fitur baru

- **`.quiz`** - kuis pengetahuan umum pilihan ganda. Hadiah 50 uang per jawaban benar. `.quiz` untuk soal baru, `.quiz a` (sampai `d`) untuk menjawab, `.quiz skor` untuk melihat skor.
- **`.team <n>`** (alias `.tim`) - bagi anggota grup menjadi 2-8 tim secara acak.
- **`.pair`** (alias `.pasangan`) - pasangan acak dua anggota grup, cocok untuk games.
- **`.rumus`** - rumus matematika, fisika, kimia, dan Bahasa Indonesia (`.rumus matematika`).
- **`.hitung`** - evaluasi soal matematika lewat Naze API (contoh: `.hitung (2+3)*4`).
- **`.hitungmundur`** (alias `.countdown`) - hitung mundur N hari ke depan atau menuju tanggal tertentu (contoh: `.hitungmundur 30`, `.hitungmundur 2026-12-25`).
- **`.suku`** - info singkat 15 suku Nusantara (`.suku jawa`).
- **`.kuliner`** - info 12 kuliner khas Indonesia (`.kuliner rendang`).
- **`.edukasimenu`** - menu perintah edukasi.

### Peningkatan

- **Menu utama**: kategori `EDUKASI` baru berisi `.rumus`, `.hitung`, `.suku`, `.kuliner`, `.hitungmundur`. Perintah `.quiz`, `.team`, `.pair` masuk kategori GAME.
- **README** mencatat perintah-perintah baru di tabel fitur dan perintah populer.

### Catatan

- Naze menyediakan endpoint `ocr`, `zonerai txt2img`, dan `sunora`, tetapi ketiganya tidak disertakan di rilis ini: ocr mengembalikan error 500 di sisi penyedia, txt2img menuntut akses VIP, dan sunora gagal menghasilkan lagu dengan key yang dipakai.

## v3.3.0

Rynn v3.3.0 menambahkan perintah utility dan hiburan tanpa API eksternal, memperketat ownership command, dan memperbaiki bug kecil.

### Fitur baru

- **`.cal`** - tampilkan kalender bulan berjalan (atau `.cal 12 2026`).
- **`.password`** - generate password acak (`.password 16`).
- **`.b64`** - encode/decode base64 (`.b64 encode teks`, `.b64 decode aGFsbw==`).
- **`.pantun`** - pantun acak.
- **`.admins`** - daftar admin grup.
- **`.saldo`** - cek saldo limit, uang, dan status (free/premium).
- **`.kickall confirm`** - keluarkan semua anggota non-admin dalam grup (owner, dengan konfirmasi eksplisit).

### Perbaikan bug

- **`totalfitur`** dihitung dari `case "` (sebelumnya `case '` yang tidak pernah cocok).
- **`setbio`** memperbaiki referensi variabel yang salah.
- **Menu**: hapus `txt2img` dari semua menu karena command tidak tersedia.
- **`donasi`** menampilkan opsi dukungan: GitHub Sponsors, Saweria, Sociabuzz, dan Bagibagi.

### Peningkatan

- **Menu yang lebih jelas**: daftar perintah baru `.remind`, `.note`, `.poll`, `.gempa`, `.kurs`, `.stats` sekarang muncul di menu utama.
- **README** mencatat perintah-perintah baru di tabel fitur dan perintah populer.

## v3.2.0

Rynn v3.2.0 menambahkan pengingat, catatan pribadi, polling, dan perintah informasi.

### Fitur baru

- **`.remind`** - pengingat pribadi: `.remind 30m teks`, `.remind 07:30 teks`, `.remind besok 07:00 teks`, `.remind 2026-12-01 07:00 teks`, `.remind setiap 07:00 teks`. Lihat daftar dengan `.remind`, hapus dengan `.reminddel <nomor>`. Bot mengirim pesan reminder di waktu yang dijadwalkan; reminder `setiap` berjalan harian.
- **`.note`** - catatan pribadi per pengguna: `.note teks`, `.notes`, `.notedel <nomor>`.
- **`.poll`** - polling native WhatsApp (grup): `.poll "Judul" opsi1 | opsi2 | opsi3`.
- **`.stats`** - statistik bot untuk owner: versi, uptime, memori, pengguna/grup/premium/sewa, total perintah dipakai, top 5 perintah.
- **`.gempa`** - gempa terkini BMKG (tanggal, magnitudo, wilayah, kedalaman, potensi tsunami).
- **`.kurs`** - kurs mata uang: tanpa argumen (menu ringkas), atau `.kurs USD IDR 1`.

### Peningkatan

- **Persistensi data baru.** `global.db` kini menyimpan `reminders` dan `notes` (ikut tersimpan ke database lokal/remote).
- **Checker reminder setiap menit** di `index.js` yang mengirim pesan saat waktunya tiba.

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
