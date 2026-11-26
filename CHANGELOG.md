# Changelog

## v3.26.0

Rynn v3.26.0 menambahkan operasi matriks 2x2 dan memperbaiki pengelolaan kedua API key di CLI.

### Fitur baru

- `.matriks det|invers|transpose|kali <a b c d> [e f g h]` - operasi matriks 2x2; input baris demi baris. Invers menolak determinan nol.
- Perintah tampil di `.allmenu` dan `.edukasimenu`.

### Perbaikan

- CLI (`src/cli/settings-parser.js`, `src/cli/settings-menu.js`) sekarang bisa membaca dan menulis **NEOSANTARA_API_KEY** lewat menu API Keys, sama seperti `NAZE_API_KEY`. Sebelumnya hanya Naze yang bisa diatur dari CLI, sehingga kunci Neosantara harus disunting manual di `.env`.

### Audit

- Meninjau seluruh `FIELD_MAP` di parser pengaturan: field `tempatStore` sudah usang (settings.js memakai `global.database`), tetapi dibiarkan agar tidak mengubah perilaku; tidak dipakai lagi oleh alur aktif.
- Modul baru `lib/matriks.js` dengan 4 tes unit; total sekarang **62 tes lolos**.
- Audit menu terhadap `case`: 651 case, 342 perintah menu unik, semua punya implementasi.
- `npm run check` lolos (118 file). CI hijau sebelum tag `v3.26.0`.

## v3.25.0

Rynn v3.25.0 menambahkan empat perintah aljabar/deret setelah audit roundtrip terhadap fungsi encoding.

### Fitur baru

- `.deret aritmetika|geometri <a> <b> <n>` - suku ke-n dan jumlah n suku; alias `ar` dan `geo`.
- `.linear <a> <b> <c>` - penyelesai `ax + b = c`, termasuk kasus identitas dan inkonsisten.
- `.persen <bagian> <total>` - persentase suatu bagian dari total.
- `.persen naik <dari> <ke>` - persentase perubahan (positif berarti naik, negatif berarti turun).
- Keempat mode tampil di `.allmenu` dan `.edukasimenu` lewat tiga perintah baru.

### Audit

- Menulis tes roundtrip untuk `morseEncode`/`morseDecode`, `binaryEncode`/`binaryDecode`, `hexEncode`/`hexDecode`, `rot13`, `toRoman`/`fromRoman`, dan `zodiacFor` di `lib/util-lokal.js`: 6 tes lolos, tidak ada anomali.
- Modul baru `lib/deret.js` dengan 4 tes unit; total sekarang **58 tes lolos**.
- Audit menu terhadap `case`: 650 case, 341 perintah menu unik, semua punya implementasi.
- `npm run check` lolos (115 file). CI hijau sebelum tag `v3.25.0`.

## v3.24.0

Rynn v3.24.0 menambahkan tiga perintah geometri/aljabar dan memperbaiki satu anomali numerik yang tertangkap oleh tes unit.

### Fitur baru

- `.luas <jenis> <ukuran...>` - luas 8 bangun datar (persegi, persegi panjang, segitiga, lingkaran, jajargenjang, trapesium, layang-layang, belah ketupat).
- `.volume <jenis> <ukuran...>` - volume 7 bangun ruang (kubus, balok, prisma, silinder/tabung, kerucut, bola, limas).
- `.kuadrat <a> <b> <c>` - akar persamaan kuadrat `ax^2 + bx + c = 0`, termasuk akar kembar dan akar kompleks.
- Ketiga perintah tampil di `.allmenu` dan `.edukasimenu`.

### Audit

- Menguji 12 konversi satuan di `convertUnit` (`lib/util-lokal.js`): 11 sesuai harapan. Kasus `1 gb -> mb = 1000` ternyata benar karena repo memakai satuan desimal SI (`kb=1e3`, `mb=1e6`), bukan bug; tidak diubah.
- Modul baru `lib/geometri.js` dengan 3 tes unit. Tes menemukan akar kompleks mengembalikan `-0` ketika `b=0`; dinormalisasi menjadi `0`.
- Audit menu terhadap `case`: 647 case, 338 perintah menu unik, semua punya implementasi.
- Total tes sekarang **48 lolos**. `npm run check` lolos (112 file). CI hijau sebelum tag `v3.24.0`.

## v3.23.0

Rynn v3.23.0 menambahkan tiga utilitas pengembang dan memperbaiki log reconnect yang menyesatkan.

### Fitur baru

- `.hash [algoritma] <teks>` - hash lokal md5, sha1, sha256 (default), atau sha512; tanpa jaringan dan tanpa penyimpanan input.
- `.urlcode encode|decode <teks>` - encode/decode URL lokal.
- `.json <json>` (alias `.cekjson`) - validasi JSON; `.json rapi <json>` menampilkan hasil format indentation.
- Ketiga perintah tampil di `.allmenu` dan `.edukasimenu`.

### Perbaikan

- `index.js` - log saat `badSession` tidak lagi mengatakan "Hapus sesi dan scan lagi" (kode hanya melakukan reconnect otomatis). Perilaku reconnect tidak diubah untuk menghindari penghapusan sesi yang berisiko.

### Audit

- Meninjau jalur startup dan reconnect di `index.js`: DNS kustom, cleanup temp, state DB/store, pairing code, reconnect dengan backoff, pengingat, dan GC. Tidak ditemukan perubahan yang diperlukan selain pesan log di atas.
- Modul baru `lib/devutils.js` dengan 3 tes unit (total 45 tes lolos).
- Audit menu terhadap `case`: 644 case, 335 perintah menu unik, semua punya implementasi.
- `npm run check` lolos (110 file). CI hijau sebelum tag `v3.23.0`.

## v3.22.0

Rynn v3.22.0 menambahkan modul utilitas teks dan tiga perintah baru, setelah audit lanjutan atas string dan format data.

### Fitur baru

- `.format` (alias `.formattanggal`) - format tanggal dan waktu untuk zona tertentu (`Asia/Tokyo`, `UTC`, dan lain-lain), memakai `global.timezone` sebagai default.
- `.potong` (alias `.potongteks`) - memotong teks sampai panjang tertentu dengan elipsis.
- `.hitungteks` - statistik kata, karakter dengan/tanpa spasi, dan kalimat.
- Ketiga perintah tampil di `.allmenu` dan `.edukasimenu`.

### Audit

- Memindai seluruh file `.js` untuk placeholder dan artefak teks: semua kecocokan `undefined` adalah kode JavaScript yang sah (pengecekan nilai), bukan error.
- Modul baru `lib/teks.js` dengan 5 tes unit: saat pengembangan satu expectation test diperbaiki setelah hasil aktual terbukti benar (karakter tanpa spasi).
- Audit menu terhadap `case`: 640 case, 332 perintah menu unik, semua punya implementasi.
- Total tes sekarang **42 lolos**. `npm run check` lolos (109 file). CI hijau sebelum tag `v3.22.0`.

## v3.21.0

Rynn v3.21.0 menambahkan modul bilangan Bahasa Indonesia dan tiga perintah baru, setelah audit data lanjutan.

### Fitur baru

- `.terbilang2` (alias `.katabilangan`) - mengubah bilangan 0 sampai 999.999.999.999 menjadi kata Bahasa Indonesia, termasuk "seribu" dan "seratus satu".
- `.hurufke` - konversi dua arah antara nomor 1-26 dan huruf A-Z.
- `.sapaan [jam]` - ucapan waktu (Selamat pagi/siang/sore/malam); tanpa argumen memakai jam lokal.
- Ketiga perintah tampil di `.allmenu` dan `.edukasimenu`.

### Audit

- Memeriksa 181 negara di `data-dunia.js`: semua punya ibukota; nama Tiongkok memakai kunci `tiongkok` (bukan `china`), tidak ada yang hilang.
- Memeriksa 38 provinsi: semua field terisi.
- Menemukan dan memperbaiki dua bug pada modul `lib/bilangan.js` saat pengembangan: ejaan "seratus satu"/"seribu" dan offset konversi huruf; keduanya tertangkap oleh tes unit sebelum rilis.
- 4 tes unit baru; total sekarang **37 tes lolos**. `npm run check` lolos (106 file). CI hijau sebelum tag `v3.21.0`.

## v3.20.0

Rynn v3.20.0 menambahkan tiga perintah hitung baru, memperbaiki path thumbnail saat bot dijalankan dari direktori lain, dan menyelesaikan audit lanjutan.

### Fitur baru

- `.statistik <bilangan...>` - statistik dasar: jumlah, total, rata-rata, median, minimum, maksimum (maksimal 1000 bilangan).
- `.pecahan` (alias `.sederhanakan`) - menyederhanakan pecahan lewat FPB, menampilkan bentuk sederhana dan desimal.
- `.progress` (alias `.progres`) - bilah progres 20 karakter dan persentase dari pasangan selesai/total.
- Ketiga perintah tampil di `.allmenu` dan `.edukasimenu`.

### Perbaikan

- `settings.js` - path `src/media/rynn.png` sekarang relatif terhadap direktori proyek (`__dirname`), bukan terhadap cwd. Sebelumnya thumbnail gagal dimuat bila bot dijalankan dari folder lain.

### Audit

- Validasi seluruh 249 soal: struktur 4 opsi, indeks jawaban 0-3, pembahasan, dan jawaban tidak kosong. Semua lolos.
- Meninjau jalur berkas relatif di handler.js dan settings.js; perbaikan path thumbnail diterapkan.
- Audit menu terhadap `case`: semua perintah di menu punya implementasi (631 case, 326 perintah menu unik).
- 3 tes unit baru: total sekarang 33 tes, semua lolos. `npm run check` lolos (105 file).

## v3.19.0

Rynn v3.19.0 menambahkan optimisasi memori untuk sesi game dan tiga perintah matematika/tanggal baru.

### Fitur baru

- `.selisihhari YYYY-MM-DD YYYY-MM-DD` - selisih hari kalender antara dua tanggal (memakai UTC agar tidak terpengaruh waktu musim panas).
- `.fibonacci [n]` - deret Fibonacci pertama dengan BigInt (1 sampai 100 suku, default 10).
- `.primaantara <a> <b>` - bilangan prima dalam rentang tertutup, dibatasi 10.000 bilangan untuk menjaga respons.
- Ketiga perintah tampil di `.allmenu` dan `.edukasimenu`.

### Optimisasi

- State sesi `quizState`, `mbtiState`, `hangmanState`, dan `soalState` sekarang dibersihkan otomatis setiap 5 menit oleh pembersih berbasis interval dengan `unref()`. Sebelumnya entri yang ditinggalkan user bertahan di memori selamanya pada bot publik.
- Pembersih hanya menghapus entri yang sudah lebih tua dari 15 menit (sesuai masa berlaku sesi di handler).

### Audit

- Meninjau semua jalur state global di handler.js; menemukan empat Map sesi tanpa pembersih otomatis (diperbaiki di rilis ini).
- Audit menu terhadap `case`: semua perintah di menu punya implementasi.
- 3 tes unit baru untuk selisih hari, Fibonacci, dan rentang prima (total 30 tes).
- `npm run check` lolos, 30 tes lolos, CI hijau sebelum tag `v3.19.0`.

## v3.18.0

Rynn v3.18.0 adalah pembaruan data terbesar: lebih dari 400 entri baru ditambahkan, dataset lama dibersihkan dari entri `undefined`, dan perintah `.statistikdata` ditambahkan.

### Data baru

- `lib/data-tambahan.js` (baru): 34 fakta umum terverifikasi, 150 kata Hangman, 20 pantun, 20 puisi, 21 resep, 13 peribahasa, dan 40 soal pilihan ganda (20 matematika, 10 IPA, 10 Bahasa Indonesia) dengan jawaban dan pembahasan terverifikasi.
- `lib/data-kreatif.js` (baru): 40 pantun dan 30 puisi karya sendiri.
- Gabungan ke dataset utama:
  - FAKTA: 464 menjadi 498 (semua unik).
  - PUISI: 94 menjadi 143.
  - PANTUN: 102 menjadi 161.
  - HANGMAN_KATA: 375 menjadi 420.
  - RESEP: 85 menjadi 101.
  - PERIBAHASA: 44 menjadi 57.
  - SOAL: 209 menjadi 249 soal (matematika 60, IPA 68, IPS 42, Bahasa Indonesia 50, PPKn 29).
  - Total entri pada dataset inti: 1.629.
- Semua penggabungan memakai `dedupeArray` agar duplikat persis tidak masuk.

### Fitur baru

- `.statistikdata` - menampilkan jumlah entri semua dataset Rynn secara langsung dari data yang dimuat (selalu akurat setelah data berubah). Tampil di EDUKASI.

### Audit dan perbaikan anomali

- Ditemukan dan dihapus dua entri literal `undefined` pada data PUISI dan PANTUN bawaan (penyebab `.puisi` atau `.pantun` bisa menampilkan teks "undefined"). `dedupeArray` sekarang juga membuang entri null/undefined.
- Validasi seluruh soal baru: 4 opsi, indeks jawaban 0-3, pembahasan ada, tidak ada pertanyaan duplikat.
- Validasi pantun baru: tepat 4 baris, tanpa artefak teks.
- Audit menu terhadap `case`: semua perintah menu punya implementasi.
- `npm run check` lolos (107 file), 27 tes unit lolos, CI hijau sebelum tag `v3.18.0`.

## v3.17.0

Rynn v3.17.0 menambahkan 5 perintah baru, 5 berkas data baru, dan menyelesaikan audit menyeluruh atas CI, dependensi, export, dan menu.

### Fitur baru

- `.pulau` - 10 pulau terkenal di Indonesia (Sumatera, Jawa, Kalimantan, Sulawesi, Papua, Bali, Madura, Nusa Tenggara, Maluku, Bangka Belitung).
- `.sungai` - 10 sungai terkenal di Indonesia (Kapuas, Batanghari, Bengawan Solo, Musi, Mahakam, Citarum, Brantas, Siak, Barito, Ciliwung).
- `.haribersejarah` - 13 tanggal peringatan bersejarah yang umum di Indonesia; tanpa argumen menampilkan peringatan hari ini, `.haribersejarah list` menampilkan semua.
- `.waktu` - waktu terkini di 12 kota memakai zona IANA; tanpa argumen menampilkan WIB/WITA/WIT.
- `.surat` - 5 templat surat Bahasa Indonesia (lamaran kerja, izin, undangan rapat, kuasa, surat resmi) dengan placeholder.
- Perintah baru tampil di `.allmenu`, submenu terkait, dan README.

### Audit dan optimalisasi

- CI workflow ditinjau: `npm ci` + `npm run check` + `npm test` + `npm audit` (advisory-only), Node 22, sesuai dengan lingkungan lokal Node 24.
- 93 berkas terlacak: tidak ada berkas cadangan/log/sementara yang ikut tercommit.
- 27 dependency runtime dicek: semuanya dipakai (import/require/dynamic import). Tidak ada dependency menganggur.
- Audit export library: 15 symbol hanya dipakai internally; dibiarkan (bukan bug, penghapusan berisiko).
- Audit menu terhadap `case`: semua perintah menu memiliki implementasi (tidak ada yang menggantung).
- `npm run check` lolos (105 file), 27 tes unit lolos, CI hijau sebelum tag `v3.17.0`.
- `npm audit --omit=dev`: tetap 30 advisory high dari `zod` lewat `@jimp/*` (sudah didokumentasikan dan tidak bisa diperbaiki tanpa merusak API jimp).

## v3.16.0

Rynn v3.16.0 menambahkan 8 perintah baru dengan 3 berkas data baru, dan memperketat audit menu.

### Fitur baru

- `.bahasa` - bahasa daerah Nusantara (7 bahasa: Jawa, Sunda, Minang, Batak Toba, Bali, Betawi, Manado). Kosakata umum yang diverifikasi.
- `.danau` - 12 danau terkenal di Indonesia (Danau Toba, Singkarak, Maninjau, Sentani, Poso, Tempe, Kelimutu, Limboto, Tondano, Lindu, Paniai, Laut Tawar).
- `.gunung` - 12 gunung terkenal di Indonesia (Puncak Jaya, Kerinci, Rinjani, Semeru, Slamet, Tambora, Merapi, Agung, Bromo, Galunggung, Anak Krakatau, Ijen).
- `.akar` - akar kuadrat (akar tepat ditampilkan tanpa desimal).
- `.faktorial` - faktorial dengan BigInt (sampai 200!).
- `.hariini` - tanggal, waktu, dan nomor minggu (zona `global.timezone`, default Asia/Jakarta).
- `.koin` - lempar koin (Angka/Gambar, hingga 10 koin).
- `.acakkata` - mengacak huruf setiap kata.
- Semua perintah baru tampil di `.allmenu`, submenu terkait, dan README.

### Menu

- `.kickall` dan `.update` yang selama ini tersembunyi kini tampil di `.ownermenu` dan `.allmenu` (bagian OWNER).
- `.hariini` tampil di BOT, `.akar`/`.faktorial`/`.bahasa`/`.danau`/`.gunung` di EDUKASI, `.koin`/`.acakkata` di FUN.

### Audit

- Skrip audit menu dijalankan: semua perintah yang tampil di menu memiliki `case` yang sesuai (tidak ada yang menggantung).
- 5 `case` dengan indentasi tidak konsisten diperbaiki (`team`, `fakta`, `ibukota`, `soal`, `kuliner`); inner switch tetap 6 tab.
- `lib/kalkulator.js` ditambah `akar`, `faktorial` (BigInt), `formatBigInt`, `isoWeek`; 5 tes unit baru.
- `npm run check` lolos, 27 tes unit lolos.

## v3.15.0

Rynn v3.15.0 menambahkan submenu per kategori yang tertaut di `.allmenu` dan menu author, serta membersihkan data duplikat.

### Fitur baru

- `.authormenu` - menu author (sama seperti `.edukasimenu`): `.author`, `.owner`, `.donasi`, `.repo`, `.channel`, `.versi`.
- `.grupmenu` - alias Bahasa Indonesia untuk `.groupmenu`.
- `.author` - info pembuat Rynn (nama, repositori, lisensi MIT, dukungan, channel WhatsApp).
- `.repo` - tautan repositori dan halaman rilis Rynn.
- `.channel` - tautan channel WhatsApp resmi Rynn.

### Menu

- `.allmenu` sekarang diakhiri bagian `SUBMENU` yang mendaftar semua menu kategori: `.botmenu`, `.groupmenu` (`.grupmenu`), `.searchmenu`, `.downloadmenu`, `.quotesmenu`, `.toolsmenu`, `.aimenu`, `.randommenu`, `.stalkermenu`, `.animemenu`, `.gamemenu`, `.funmenu`, `.edukasimenu`, `.ownermenu`, `.authormenu`.

### Data

- `FAKTA` diperluas dan dibersihkan: 464 entri tanpa duplikat, termasuk 18 fakta baru yang diverifikasi.
- `PANTUN` dibersihkan dari duplikat: 125 menjadi 102.
- `PUISI` dibersihkan dari duplikat: 100 menjadi 94.
- `WISATA` - satu duplikat (Gunung Rinjani) dihapus, 114 destinasi.
- `namabayi` (NAMA_BAYI_CEWE) - satu duplikat (Intan) dihapus, 60 nama.
- `BANK SOAL` diperiksa, semua 209 soal unik.

### Audit

- Meninjau seluruh `case` di handler.js (624 total, termasuk alias); duplikat tersisa hanya sub-command game internal yang memang disengaja.
- `npm run check` lolos, 23 tes unit lolos, CI hijau sebelum tag `v3.15.0`.

## v3.14.0

Rynn v3.14.0 mengganti logo sementara dari v3.13.0 dengan desain final dan menambahkan 11 perintah baru.

### Brand / identitas visual

- **Logo final** (diberikan pengguna, `assets/rynn-icon.svg`): ikon kepala kucing dengan bentuk membulat, gradasi ungu (`#5B47E0` ke `#2A1B4D`), muka krem (`#FFF7EE`) dengan chevron mata, hidung oranye (`#FF9F1C`), telinga dalam peach (`#FFC9A3`), dan ekor speech bubble.
- Semua PNG dibuat ulang dari SVG dengan `sharp`: `assets/icon-1024.png`, `assets/icon-512.png`, `assets/icon-192.png`, `assets/icon-128.png` (baru), `assets/icon-64.png`, `assets/favicon-32.png`, `assets/rynn-mascot.png`, `src/media/rynn.png`, dan `assets/rynn-lockup.png` (sumber `assets/rynn-lockup.svg`, horizontal untuk README).
- Varian `assets/icon-light-512.png` dan `assets/icon-accent-512.png` dihapus (tidak dipakai).

### Fitur baru

- `.kpk` / `.fpb` - kelipatan persekutuan terkecil dan faktor persekutuan terbesar (hingga 8 bilangan).
- `.faktor` (alias `.faktorisasi`) - faktorisasi prima.
- `.prima` - cek bilangan prima dengan pembagi terkecil.
- `.palindrom` - cek palindrom (spasi dan tanda baca diabaikan).
- `.anagram` - cek anagram dua teks (pisahkan dengan garis tegak).
- `.diskon` - harga setelah diskon, dengan hitung hemat.
- `.cicilan` - simulasi cicilan anuitas (pokok, bunga-tahunan, tenor).
- `.bmi` - kalkulator BMI standar WHO (bukan diagnosis medis).
- `.jamtidur` - prediksi waktu bangun ideal (3 opsi, siklus 90 menit, +15 menit tertidur).
- `.uuid` - UUID v4 acak (hingga 5 per perintah).
- `.base64` dan `.password` yang sudah ada ikut ditampilkan di menu TOOLS; `.password` sekarang memilih karakter tanpa bias modulo.
- Perintah baru tampil di `.allmenu`, `.edukasimenu`, `.gamemenu`, `.toolsmenu`, dan README.
- `lib/kalkulator.js` - modul matematika murni baru, tercakup 12 tes unit di `test/kalkulator.test.js`.

### Peningkatan

- `.peribahasa` - dari 24 menjadi 44 entri pepatah klasik Indonesia.
- `src/database.js` - kalau berkas database utama dan cadangan `.bak` sama-sama rusak, bot tetap boot dengan database kosong dan error dicatat di log (sebelumnya crash saat startup).
- `lib/function.js` - cek pembaruan tidak lagi melempar kalau `package.json` tidak bisa dibaca.
- `src/message.js` - `buttonParamsJson` yang rusak tidak lagi menggagalkan pengiriman tombol/kartu.

### Audit

- Meninjau alur baca/tulis database, dashboard relay, clone bot, dan parsing JSON di jalur kritis; ditemukan dan diperbaiki empat titik parse tanpa pengaman. Tidak ada kerentanan baru.

## v3.13.0

Rynn v3.13.0 memperkenalkan identitas visual baru dan perbaikan beberapa aspek kode.

### Brand / identitas visual

- **Logo baru** (menggantikan mascot lama sejak rilis ini): ikon kepala kucing bergaya speech bubble krem pada kartu navy gelap. Revisi aset programmatic, semua varian konsisten: `assets/icon-1024.png`, `assets/icon-512.png`, `assets/icon-192.png`, `assets/icon-64.png`, `assets/favicon-32.png`, `assets/icon-light-512.png`, `assets/icon-accent-512.png`, `assets/rynn-lockup.png`.
- `assets/rynn-mascot.png` dan `src/media/rynn.png` diperbarui dengan desain baru (tidak lagi transparan). README menampilkan lockup horizontal.
- `AGENTS.md` diperbarui sesuai aset baru.

### Peningkatan

- `src/auth.js` - penanganan data sesi rusak/korup sekarang kembali `null` daripada menyebabkan crash. Tidak ada perubahan perilaku perintah.
- Audit umum: `npm run check`, `npm test`, CI hijau.

## v3.12.0

Rynn v3.12.0 menambahkan `.peribahasa` (24 pepatah/peribahasa Indonesia) dan memperkaya respons audit.

### Fitur baru

- **`.peribahasa`** - pepatah dan peribahasa Indonesia. Ketik `.peribahasa` untuk acak, `.peribahasa <kata kunci>` untuk cari, `.peribahasa list` untuk lihat daftar.

### Peningkatan data besar-besaran

- Fakta: 440 ke 487 (47 fakta baru)
- Puisi: 85 ke 100 (15 puisi baru)
- Pantun: 110 ke 125 (15 pantun baru)

### Peningkatan

- `.auth` (proses baca tulis data sesi) sekarang menolak data rusak/korup dengan aman (tidak crash, hanya skip). Audit mendeteksi potensi crash saat data sesi tersimpan rusak di database.

## v3.11.0

Rynn v3.11.0 memperkaya data lebih banyak lagi di hampir semua fitur.

### Peningkatan data besar-besaran

- Fakta: 400 ke 440 (40 fakta baru).
- Puisi: 75 ke 85 (10 puisi baru).
- Pantun: 100 ke 110 (10 pantun baru).
- Kuliner: 124 ke 130 (6 entri baru).
- Berjumlah sekitar 1.800 entri data di semua kumpulan.

### Peningkatan

- Daftar yang muncul pada perintah `.suku`, `.kuliner`, `.lagu`, `.wisata`, `.resep` juga bertambah karena data-data baru di atas.

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
