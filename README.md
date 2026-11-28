<div align="center">
  <img src="assets/rynn-lockup.png" alt="Logo Rynn" width="420" />
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
- [Menjalankan Pertama Kali](#menjalankan-pertama-kali)
- [CLI](#cli)
- [Integrasi API](#integrasi-api)
- [Database & Penyimpanan](#database--penyimpanan)
- [Web Dashboard](#web-dashboard)
- [Operasi Harian](#operasi-harian)
- [Perintah Populer](#perintah-populer)
- [Pemecahan Masalah](#pemecahan-masalah)
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
| Menu & Umum | **Navigasi v8** | `.jelajah`, `.cmdbaru`, `.peta`, `.aliasglobal`, `.statcmd` |
| Menu & Umum | **Catatan v8** | `.catat`, `.agenda`, `.ceklis`, `.template` |
| Menu & Umum | **Owner v8** | `.audit`, `.backup jadwal`, `.aksesdefault`, `.blacklist`, `.whitelistcmd`, `.system` |
| Menu & Umum | **Ekonomi v8** | `.bank`, `.tabung`, `.tarik`, `.pinjam`, `.lunas`, `.top`, `.dompetgrafik` |
| Menu & Umum | **Game v8** | `.turnamen`, `.tebak riddle` |
| Menu & Umum | **Data v8** | `.data cari`, `.data rekomendasi` |
| Menu & Umum | **Pembagian dan turnamen** | `.bagi <anggota> <kelompok>` (per kelompok, sisa, distribusi), `.team <game> <pemain>` (ukuran ML 5, PUBG/FF 4), `.turnamen buat|daftar|mulai|bracket|menang|juara|reset` sampai juara |
| Menu & Umum | **AI teks** | `.ringkas`, `.ide`, `.paragraf`, `.judulkan`, `.tanya`, `.terjemah`, `.teks` |
| Menu & Umum | **Kalender dan jadwal** | `.kalender [YYYY-MM]`, `.jadwal <jam> <tugas>`, `.notifikasi on|off` |
| Menu & Umum | **Perintah akhir v9** | `.diam`, `.ownerlist`, `.sesihapus`, `.akseswarisan`, `.tabungtarget`, `.bungapinjam`, `.hadiahevent`, `.topbulanan`, `.transferbatch`, `.uanglog`, `.quizberuntun`, `.quizjawab`, `.tebakjawab`, `.rankmingguan`, `.statistiklanjut`, `.matriks3`, `.turunan`, `.integral`, `.koordinat`, `.datasetpenuh` |
| Menu & Umum | **Keuangan dan belajar v10** | `.anggaran`, `.pengeluaran`, `.pemasukan`, `.laporanuang`, `.flashcard`, `.kuisharian`, `.skorbelajar`, `.modul` |
| Menu & Umum | **Absensi dan acara** | `.absen`, `.acara`, `.acararsvp` |
| Menu & Umum | **Liga** | `.liga`, `.klasemen` |
| Menu & Umum | **Utilitas v10** | `.bendera`, `.umurdetail`, `.grafik`, `.pilihberat`, `.acakurutan` |
| Menu & Umum | **Owner v10** | `.aksesgrup`, `.pemeliharaan` |
| Menu & Umum | **Grup lanjutan v11** | `.presensi`, `.kuorum`, `.rapat`, `.notulen`, `.laporgrup`, `.moderasi` |
| Menu & Umum | **Koleksi dan progres** | `.koleksi`, `.gacha`, `.achievement`, `.level`, `.levelboard` |
| Menu & Umum | **Ekonomi simulasi** | `.investasi`, `.deposito`, `.asuransi`, `.keuangannilai`, `.transferterjadwal` |
| Menu & Umum | **Sosial dan otomasi** | `.sapaanpribadi`, `.pujian`, `.semangat`, `.ceritapendek`, `.mood`, `.moodrekap`, `.teman`, `.autoreply`, `.autotag`, `.autosalam` |
| Menu & Umum | **Game baru** | `.wordle`, `.wordlejawab`, `.scramble`, `.bingo`, `.lotre`, `.tebakwarna`, `.gameskor` |
| Menu & Umum | **Utilitas dan AI v11** | `.markdown`, `.tabel2`, `.diagram`, `.hitungpanjang`, `.indeksdata`, `.contohdata`, `.bantuansaya`, `.code`, `.dialog`, `.brainstorm`, `.kritik`, `.translateid`, `.airiwayat` |
| Menu & Umum | **Owner dan statistik v11** | `.restartnow`, `.updatenow`, `.logunduh`, `.pengguna`, `.daftargroup`, `.databaseinfo`, `.maintenancewhy`, `.laporharian`, `.lapormingguan`, `.statistikgrup`, `.statistikpengguna`, `.statistikperintah`, `.statistikkinerja` |
| Menu & Umum | **Arsitektur internal v11.1** | Dataset dimuat malas lewat `lib/data-state.js`, registry v2 dengan alias dan metadata, modul kategori di `lib/handler/`, benchmark startup, dan ambang coverage di CI |
| Menu & Umum | **Desain dan UX v12** | Design token dari logo, renderer balasan tunggal, typing dan progress bar, panel lokal dengan `.dashboardbuka` |
| Menu & Umum | **Kompetisi v12** | `.turnamen2`, `.liga2`, `.juaraboards` |
| Menu & Umum | **Kelompok v12** | `.bagiacak`, `.bagiseimbang`, `.baginama`, `.teamseimbang`, `.teamrotasi`, `.teamlist`, `.teamhapus`, `.kelompokrekap` |
| Menu & Umum | **Ekonomi v12** | `.investasihari`, `.tabunggrafik`, `.utangjadwal`, `.dompetriwayat`, `.pasarsimulasi`, `.sisaanggaran`, `.topdompet` |
| Menu & Umum | **Belajar v12** | `.flashcardharian`, `.kuisadaptif`, `.kuisskor`, `.materipeta`, `.catattopik`, `.rangkumcatatan`, `.hafalanstreak` |
| Menu & Umum | **Produktivitas v12** | `.agendaminggu`, `.absengrafik`, `.pollhasil`, `.rapatringkas`, `.notulencari`, `.tugastambah`, `.tugasselesai`, `.tugaslist`, `.peraturanversi`, `.peringatan`, `.peringatanlist`, `.moderasiskor`, `.laporstatus`, `.adminlog` |
| Menu & Umum | **Media dan AI v12** | `.kartuwarna`, `.posterteks`, `.kartuucapan`, `.komikpendek`, `.galeri`, `.stikeranimasi`, `.aigaya`, `.aitopik`, `.aicontoh`, `.aibatalkan`, `.aikuota`, `.aibandingkan` |
| Menu & Umum | **Owner v12** | `.health`, `.metrik`, `.logringkas`, `.auditcari`, `.diagnosapenuh`, `.modehemat`, `.cacheinfo`, `.memori`, `.dashboardbuka`, `.dashboardtutup` |
| Menu & Umum | **Akun dan identitas v13** | `.profilkartu`, `.bio`, `.xp`, `.xptop`, `.badge`, `.identitas` |
| Menu & Umum | **Ekonomi v13** | `.rekening`, `.arisan`, `.kreditskor`, `.asuransiklaim`, `.pajaksimulasi`, `.grafikpengeluaran`, `.pendapatanharian` |
| Menu & Umum | **Komunitas v13** | `.guild`, `.temanrekomendasi`, `.perkenalan`, `.sapagrup`, `.icekartu`, `.komunitasstatistik` |
| Menu & Umum | **Game v13** | `.sudoku`, `.game2048`, `.kartuingatan`, `.tebaktokoh`, `.tebaklagu`, `.riddleai`, `.gameharian`, `.gamepass`, `.quizturnamen`, `.rekapgame` |
| Menu & Umum | **Edukasi v13** | `.kosakataharian`, `.kosakatacari`, `.ejaan`, `.tatabahasa`, `.terjemahbalik`, `.pantunbuat`, `.puisibuat`, `.resepcari`, `.sejarahharian`, `.rumustantangan` |
| Menu & Umum | **Produktivitas v13** | `.target`, `.proyek`, `.catatcari`, `.cattag`, `.agendaekspor`, `.absenbulanan` |
| Menu & Umum | **Grup v13** | `.admindaftar`, `.admintambah`, `.peraturankategori`, `.peraturansemua`, `.linkaman`, `.spamdeteksi`, `.grupkartu`, `.grupaktivitas`, `.lapordetail` |
| Menu & Umum | **Media dan AI v13** | `.stikerteks`, `.stikerkartu`, `.stickergambar`, `.fotoprofil`, `.kartuundangan`, `.posterucapan`, `.diagramlingkaran`, `.tabeldua`, `.aimemori`, `.ailupa`, `.aipersona`, `.aidebat`, `.airangkum`, `.aireviewkode`, `.airencana`, `.aibatas` |
| Menu & Umum | **Owner v13** | `.relaystatus`, `.deploystatus`, `.backupverifikasi`, `.restorediff`, `.sesilist`, `.databasemigrasi`, `.databaseinfopenuh`, `.logekspor`, `.ratelimit`, `.domainblokir`, `.maintenancealasan`, `.auditekspor` |
| Menu & Umum | **Privasi v14** | `.privasi`, `.auditaku` dengan ekspor dan penghapusan data pribadi |
| Menu & Umum | **Tiket v14** | `.tiket`, `.faq`, `.faqcari`, `.faqtambah` |
| Menu & Umum | **Aset dan siaran v14** | `.aset`, `.konten`, `.siaran` |
| Menu & Umum | **Analitik v14** | `.laporanbulanan`, `.laporantren`, `.laporanbanding`, `.statistikanggota`, `.statistikjam`, `.statistikrespons`, `.trenperintah`, `.ringkasanbot` |
| Menu & Umum | **Sosial v14** | `.apresiasi`, `.apresiasipapan`, `.salam`, `.tanyakomunitas`, `.ceritalanjut`, `.ceritabaca`, `.ceritareset`, `.rekomendasiperintah` |
| Menu & Umum | **Kreatif v14** | `.namamerek`, `.namagrup`, `.caption`, `.hashtag`, `.tagline`, `.judulalternatif`, `.dialogpendek`, `.suratpendek` |
| Menu & Umum | **Edukasi v14** | `.glosarium`, `.peribahasaarti`, `.latihanhitung`, `.teorisingkat`, `.petarumus`, `.soalkategori`, `.hafalancek`, `.rangkumpelajaran` |
| Menu & Umum | **Ekonomi v14** | `.portofolio`, `.dividen`, `.obligasi`, `.emassimulasi`, `.sahamsimulasi`, `.kurssimulasi`, `.inflasisimulasi`, `.warisansimulasi` |
| Menu & Umum | **Game v14** | `.wordleturnamen`, `.rankinggame`, `.gametim`, `.tebakurutan`, `.kartutaruhan`, `.papanskorharian` |
| Menu & Umum | **Owner v14** | `.bootinfo`, `.stateinfo`, `.cachebersih`, `.backupinkremental`, `.dbekspor`, `.dbimpor`, `.loglevel`, `.debugmode`, `.ketersediaan` |
| Menu & Umum | **Aturan v15** | `.aturan`, `.filter` dengan uji dan penonaktifan aturan |
| Menu & Umum | **Poin v15** | `.poin`, `.hadiahpoin` dengan penukaran dan transfer |
| Menu & Umum | **Toko v15** | `.toko`, `.lelang` simulasi |
| Menu & Umum | **Reputasi v15** | `.reputasi`, `.tepercaya` |
| Menu & Umum | **Kursus v15** | `.kursus`, `.materi` |
| Menu & Umum | **Keputusan v15** | `.keputusan`, `.notulenversi`, `.proyekgrup` |
| Menu & Umum | **Arsip v15** | `.arsip`, `.cadangan` |
| Menu & Umum | **Teks v15** | `.teksrapi`, `.teksbalik`, `.teksulang`, `.tekspotong`, `.teksbersih`, `.teksheksa`, `.teksdariheksa`, `.teksbanding` |
| Menu & Umum | **Keamanan v15** | `.kunci`, `.verifikasi`, `.akunaman`, `.logkeamanan` |
| Menu & Umum | **Media v15** | `.stikerpaket`, `.wallpaperteks`, `.kartupos` |
| Menu & Umum | **Owner v15** | `.penggunaaktif`, `.grupaktif`, `.perintahmati`, `.cooldownlist`, `.akseslist`, `.whitelisttambah`, `.blacklistalasan`, `.rollback` |
| Menu & Umum | **Paket v16** | `.paket`, `.undang`, `.referral` simulasi |
| Menu & Umum | **Artikel v16** | `.artikel`, `.seri`, `.survei` |
| Menu & Umum | **Koperasi v16** | `.koperasi`, `.inventaris`, `.avatar` |
| Menu & Umum | **Papan v16** | `.papan` dengan enam mode |
| Menu & Umum | **Portabilitas v16** | `.pindah`, `.datasehat` |
| Menu & Umum | **Mode v16** | `.modedebot`, `.fitur` |
| Menu & Umum | **Konstitusi v16** | `.konstitusi`, `.tandatangan` |
| Menu & Umum | **Owner v16** | `.ownerringkas`, `.aksesmatriks`, `.limitatur`, `.limitlihat`, `.statebersih`, `.memoripeta`, `.eventlog`, `.jadwalkerja` |
| Menu & Umum | **Pendalaman v17** | Audit router dan state di CI, transaksi uang terpusat, bracket double elimination, jawaban game seragam, domain blokir di semua jalur jaringan |
| Menu & Umum | **Dokumentasi otomatis v18** | `docs/COMMANDS.md` dihasilkan dari registry lewat `npm run docs:gen` |
| Menu & Umum | **Mesin turnamen v19** | `.turnamen2 mesin buat\|lanjut\|hasil\|klasemen\|jadwal\|lihat` dengan single, double, dan round robin |
| Menu & Umum | **Penyatuan v20** | Liga, kuis, dan wordle memakai mesin turnamen yang sama; juara dan poin tercatat otomatis |
| Menu & Umum | **Kategori baku v21** | 14 kategori: UMUM, BOT, GRUP, EKONOMI, GAME, TURNAMEN, EDUKASI, AI, MEDIA, PENCARIAN, KOMUNITAS, STATISTIK, KEAMANAN, OWNER |
| Menu & Umum | **Audit dan optimalisasi v11.2** | Antrean per user, state game tanpa kebocoran, konfirmasi transfer batch, akses alias, import berat ditunda, Levenshtein dua baris, cache statistik rumus, dan ffmpeg non-blokir |
| Menu & Umum | **Eksplorasi perintah** | `.explore`, `.randomcmd`, `.riwayat`, `.shortcut`, `.pintasan`, `.dataset`, `.rekomendasi` |
| Menu & Umum | **Produktivitas chat** | `.todo` (tugas pribadi), `.catatancari`, `.peraturan`, `.icebreak`, `.tabel` |
| Menu & Umum | **Ekonomi lanjutan** | `.dompet`, `.topuang`, `.toplimit`, `.hadiah` |
| Menu & Umum | **Game lanjutan** | `.questmingguan`, `.dailykalender`, `.papanperingkat`, `.trivia` |
| Menu & Umum | **Hot reload** | `settings.js` dimuat ulang otomatis saat disimpan |
| Menu & Umum | **Format daftar seragam** | Semua perintah data menampilkan entri acak di atas, daftar bernomor per halaman, dan petunjuk lanjut/cari/detail |
| Menu & Umum | **Penemuan lanjutan** | `.help`, `.contoh <cmd>`, `.alias <cmd>`, `.cmdlist [kategori]`, `.saran <kata>` |
| Menu & Umum | **Owner lanjutan** | `.envstatus` (nama variabel saja), `.backuplist`, `.sesi`, `.setmotd <teks>` |
| Menu & Umum | **Generator menu** | `.menu <kategori>` kini menampilkan submenu asli dari registry, bukan petunjuk |
| Utilitas | **Data edukasi baru** | `.matauang` (56 mata uang), `.budaya`, `.tarian`, `.rumahadat`, `.alatmusik`, `.batik` |
| Utilitas | **Pengetahuan Indonesia** | `.negara` (195 negara), `.planet` (70), `.suku` (83), `.bahasa` (24), `.sejarah`, `.tokoh`, `.olahraga`, `.singkatan`, `.sinonim`, `.antonim`, `.kamus` |
| Menu & Umum | **Penemuan perintah** | `.cari <kata>` (cari perintah dan rumus), `.bantuan <cmd>`, `.kategori`, `.menu <kategori>`, `.statistikbot`, `.topcmd` |
| Menu & Umum | **Kontrol akses** | `.akses <cmd> <role>`, `.matikan <cmd>`, `.hidupkan <cmd>`, `.cooldown <cmd> <detik>` |
| Menu & Umum | **Progression** | `.streak` (klaim harian beruntun), `.rankgame` (peringkat game) |
| Utilitas | **Sistem rumus** | `.rumus` dengan 35 kategori dan 11.013 rumus: halaman 12 entri, `.rumus cari`, `.rumus detail <id>`, `.rumus random [kategori]`, `.rumus sub <kategori>`, `.rumus statistik` |
| Menu & Umum | **Diagnosa** | `.diagnosa` (owner): cek Node.js, ffmpeg, status kunci API tanpa menampilkan nilai, tipe database, zona waktu, jumlah entri data |
| Menu & Umum | **Ekonomi** | `.ekonomi` (harga limit, hadiah kuis/soal/hangman, saldo), `.gameinfo` (cooldown dan aturan game) |
| Menu & Umum | **Panduan** | `.panduan` (langkah mulai pakai, prefix, submenu, perintah owner) |
| Menu & Umum | **Owner lanjutan** | `.broadcast confirm <token>` (maksimal 10 grup, jeda 10 detik), `.logaudit` (owner-only, tidak di-git), `.restore confirm <token>`, `.maintenance on\|off` (user mendapat pesan sedang maintenance) |
| Utilitas | **Kalender & hiburan** | `.cal` (kalender bulan), `.pantun` (pantun acak), `.b64` (encode/decode base64), `.password` (generate password acak) |
| Utilitas | **Cek anggota** | `.admins` (daftar admin grup), `.saldo` (saldo limit/uang/status) |
| Utilitas | **Belajar SMA** | `.soal` (5.312 soal, bank soal campuran), `.hangman` (8.850 kata), `.soalmtk` (120 soal), `.soalipa` (79 soal), `.soalips` (56 soal), `.soalbindon` (63 soal), `.soalppkn` (43 soal), `.namabayi` (nama bayi Indonesia + asal + arti) |
| Utilitas | **Hiburan & pengetahuan** | `.fakta` (9.051 fakta), `.puisi` (2.630 puisi), `.pantun` (16.873 pantun), `.wisata` (109 destinasi), `.peribahasa` (67 pepatah), `.resep` (130 resep), `.kuliner` (140 kuliner) |
| Utilitas | **Statistik data** | `.statistikdata` (jumlah seluruh entri data Rynn) |
| Utilitas | **Author & proyek** | `.author` (info pembuat), `.repo` (repositori), `.channel` (channel resmi), `.donasi` (dukungan), `.versi` (versi bot) |
| Menu | **Submenu per kategori** | `.botmenu`, `.groupmenu` (`.grupmenu`), `.searchmenu`, `.downloadmenu`, `.quotesmenu`, `.toolsmenu`, `.aimenu`, `.randommenu`, `.stalkermenu`, `.animemenu`, `.gamemenu`, `.funmenu`, `.edukasimenu`, `.ownermenu`, `.authormenu` |
| Utilitas | **Matematika & utilitas** | `.kpk`, `.fpb`, `.faktor`, `.prima`, `.diskon`, `.cicilan`, `.bmi`, `.jamtidur`, `.akar`, `.faktorial` |
| Utilitas | **Geometri & aljabar** | `.luas`, `.volume`, `.kuadrat`, `.deret`, `.linear`, `.persen`, `.matriks` (2x2), `.vektor` (dot/cross/panjang), `.kompleks` (tambah/kurang/kali/bagi/konjugat/modulus) |
| Utilitas | **Dunia & sains** | `.ibukota` (~180 negara), `.negara` (ibukota/mata uang/benua/populasi), `.unsur` (tabel periodik lengkap, 118 unsur), `.planet` (21 planet & exoplanet) |
| Utilitas | **Konversi & angka** | `.umur`, `.terbilang`, `.roman`, `.konversi` (panjang/berat/suhu/luas/volume/kecepatan/energi/tekanan/data/waktu), `.morse`, `.binary`, `.hex`, `.rot13`, `.akar`, `.faktorial`, `.fibonacci`, `.primaantara`, `.statistik`, `.pecahan`, `.progress`, `.selisihhari`, `.terbilang2` (0-999 miliar), `.hurufke`, `.sapaan`, `.basis` (2-36), `.durasi` |
| Utilitas | **Bahasa & geografi** | `.bahasa` (7 bahasa daerah Nusantara), `.danau` (12 danau), `.gunung` (12 gunung), `.pulau` (10 pulau), `.sungai` (10 sungai), `.hewan` (16 fauna), `.tumbuhan` (16 flora) |
| Utilitas | **Waktu & sejarah** | `.hariini`, `.waktu` (12 kota), `.haribersejarah` (13 tanggal bersejarah Indonesia) |
| Utilitas | **Templat surat** | `.surat` (lamaran kerja, izin, undangan rapat, kuasa, surat resmi) |
| Utilitas | **Hari ini** | `.hariini` (tanggal, waktu, minggu ke-n) di zona `global.timezone` |
| Utilitas | **Kata & teks** | `.palindrom`, `.anagram`, `.balik`, `.uuid`, `.acakkata`, `.format` (format tanggal + zona), `.potong`, `.hitungteks`, `.slug` (URL-friendly) |
| Utilitas | **Pengembang** | `.hash` (md5/sha1/sha256/sha512), `.urlcode` (encode/decode URL), `.json` (validasi & format JSON) |
| Utilitas | **Hiburan** | `.koin` (lempar koin), `.dadu`, `.angkaacak`, `.pilih` |
| Utilitas | **Lirik lagu** | `.lirik <artis> - <judul>` lewat Naze API |
| Game | **Kuis & tim** | `.quiz` (kuis pengetahuan umum, hadiah 50 uang), `.team` (bagi tim acak), `.pair` (pasangan acak di grup) |
| Owner | **Keluar semua** | `.kickall confirm` (keluarkan semua non-admin, dengan konfirmasi) |
| Alat Grup | **Manajemen grup** | Kick, promote, demote, mute/unmute, tagall, pesan welcome/leave, anti-link, anti-spam, anti-toxic |
| Alat Grup | **Anti-spam** | Cooldown perintah per user dengan toggle `.antispam` per grup |
| Downloader | **YouTube, TikTok, Instagram, Facebook, Spotify, Pinterest, MediaFire** | `ytmp3`, `ytmp4`, `tiktok`, `ig`, `fb`, `spotify`, `pin`, `mediafire`, dan lainnya |
| Perkakas AI | **AI chat** | `ai`, `claude`, `gemini`, `r1`, `glm` lewat Naze API dan Neosantara AI |
| Perkakas AI | **AI media** | AI image generation, background removal, dan upscale gambar lewat API |
| Utilitas | **Stiker dan media** | `sticker`, `stickerwm`, `toimg`, `tomp3`, `tovn`, `translate`, `tts`, `qr` |
| Utilitas | **Informasi & hiburan** | `.gempa` (gempa terkini BMKG), `.kurs` (konversi mata uang 160+ kode), `.poll` (polling native WhatsApp) |
| Produktivitas | **Reminder & catatan** | `.remind` (pengingat sekali atau setiap hari), `.note` (catatan pribadi per user) |
| Owner | **Statistik bot** | `.stats` untuk owner: uptime, memori, pengguna/grup, top 5 perintah |
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

## Menjalankan Pertama Kali

1. Pastikan sudah instalasi dan `.env` terisi ([Instalasi](#instalasi), [Konfigurasi](#konfigurasi)).
2. Jalankan:

```bash
npm start
```

3. Kalau pairing code aktif dan `NUMBER_BOT` terisi, bot mencetak **pairing code** 8 digit di terminal. Buka WhatsApp di ponsel kamu: **Pengaturan > Perangkat tertaut > Tautkan perangkat**, lalu masukkan kode tersebut.
   - Kalau `NUMBER_BOT` kosong, bot akan menanyakan nomor di terminal. Isi dengan nomor yang akan dipakai sebagai nomor bot (format `628xx`).
4. Tunggu sampai bot login (sekitar 30-120 detik). Bot online jika koneksi terbuka terlihat di log.
5. Dari nomor kamu, kirim pesan ke nomor bot:

```text
.ping
```

6. Tambahkan bot ke grup (opsional), lalu jalankan `.menu` di grup.
7. Pastikan kamu terdaftar sebagai owner: owner adalah nomor di `OWNER_NUMBER` (`.env`) atau `global.owner` di `settings.js`. Untuk menambah owner tanpa restart, owner bisa menjalankan `.addowner 628xxxxxxxxxx`.

> [!NOTE]
> Pairing hanya perlu sekali. Kredensial sesi tersimpan di `rynn-session/` (atau di database kalau kamu pakai MongoDB/PostgreSQL). Folder itu di-gitignore dan tidak pernah di-commit.

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

## Operasi Harian

**Start / stop.**

```bash
npm start          # atau: rynn start
```

Tekan `Ctrl + C` untuk berhenti. `start.js` me-restart bot otomatis kalau crash (jeda 3 detik).

**Jalankan di background dengan PM2 (opsional).**

```bash
pm2 start start.js --name rynn
pm2 logs rynn       # lihat log
pm2 restart rynn    # restart
pm2 stop rynn       # berhenti
```

**Lihat log dan diagnostik.**

```bash
rynn report         # log PM2, error, cek integritas JSON, npm audit
rynn status         # kesehatan sistem & proses bot
```

**Update bot.**

```bash
git pull && npm install
# atau di WhatsApp (sebagai owner): .update
```

`settings.js` di-hot-reload otomatis saat disimpan; perubahan konfigurasi langsung berlaku tanpa restart. Untuk update kode, restart bot setelah pull/install.

**Backup database.** Owner bisa menjalankan `.backup` di WhatsApp. Kalau auto-backup diaktifkan di pengaturan, database dicadangkan otomatis **setiap hari** (cron jam 00:00) dan dikirim ke owner; arsip backup dirotasi, maksimal 5 arsip di folder `backup/`.

**Dimana data disimpan.**

- Sesi WhatsApp: `rynn-session/` (atau `MONGODB_URL` kalau kamu pakai database)
- Database bot: `database/database.json` (atau `MONGODB_URL`)
- Temp media: `database/temp/`

Semua di-gitignore; tidak pernah ikut ter-commit.

---

## Perintah Populer

Semua perintah memakai prefix default `.` `!` atau `+` (atur di `settings.js`).

| Perintah | Fungsi |
|----------|--------|
| `.menu` | Tampilkan menu semua perintah |
| `.ping` | Cek bot hidup |
| `.sticker` (reply gambar/video) | Buat stiker |
| `.ytmp3` / `.ytmp4` <url> | Download audio/video YouTube |
| `.tiktok` <url> | Download TikTok |
| `.ig` <url> | Download Instagram |
| `.ai` <teks> | Chat dengan AI |
| `.tts` <teks> | Ubah teks jadi suara |
| `.translate` <teks> | Terjemahkan teks |
| `.daily` | Klaim limit harian |
| `.remind` `30m` teks / `07:30` teks / `setiap 07:00` teks | Pengingat pribadi |
| `.note` teks | Simpan catatan pribadi |
| `.gempa` | Gempa terkini BMKG |
| `.kurs 100 USD IDR` | Konversi mata uang (160+ kode, alias: rupiah, dolar, euro, yen) |
| `.kurs` | 49 kurs utama (base USD) |
| `.poll "judul" opt1 \| opt2` | Buat polling (grup) |
| `.stats` | Statistik bot (owner) |
| `.cal` | Kalender bulan berjalan |
| `.password` | Generate password acak |
| `.b64` `encode`/`decode` teks | Encode/decode base64 |
| `.pantun` | Pantun acak |
| `.soal` | Bank soal SMA (campuran) |
| `.soalmtk` / `.soalipa` / `.soalips` / `.soalbindon` / `.soalppkn` | Bank soal per mata pelajaran |
| `.namabayi cowo` / `.namabayi cewe` | Nama bayi Indonesia + asal + arti |
| `.admins` | Daftar admin grup |
| `.saldo` | Cek saldo limit/uang/status |
| `.quiz` | Kuis pengetahuan umum (hadiah 50 uang) |
| `.team 2` | Bagi anggota grup menjadi tim acak |
| `.pair` | Cari pasangan acak di grup |
| `.rumus matematika 1` | Rumus pelajaran per halaman (12 entri) |
| `.rumus cari energi` | Cari rumus lintas kategori |
| `.rumus detail MAT-00001` | Detail satu rumus |
| `.rumus random fisika` | Rumus acak dari kategori |
| `.rumus sub geometri` | Daftar subkategori |
| `.rumus statistik` | Jumlah rumus per kategori |
| `.hitung (2+3)*4` | Kalkulator matematika |
| `.hitungmundur 30` | Hitung mundur 30 hari ke depan |
| `.suku jawa` | Info suku Nusantara |
| `.kuliner rendang` | Info kuliner khas daerah |
| `.provinsi jawa barat` | Info provinsi (38 provinsi) |
| `.mbti` | Tes kepribadian MBTI (16 pertanyaan) |
| `.fakta` | Fakta menarik acak |
| `.resep nasigoreng` | Resep sederhana masakan Indonesia |
| `.wisata bromo` | Destinasi wisata di Indonesia |
| `.lagu sunda` | Lagu daerah Indonesia |
| `.wayang gatotkaca` | Info tokoh wayang |
| `.umur 1999-05-20` | Kalkulator umur |
| `.konversi 1 km ke mil` | Konversi panjang/berat/suhu/luas/volume |
| `.lirik Pamungkas - To The Bone` | Lirik lagu |
| `.update` | Perbarui bot dari chat (aman di Termux: backup, update, restart otomatis) |
| `.ibukota jepang` | Ibukota negara |
| `.negara jepang` | Info negara (ibukota, mata uang, benua, penduduk) |
| `.unsur emas` | Tabel periodik mini |
| `.planet mars` | Info planet tata surya |
| `.hangman` | Tebak kata Indonesia |
| `.peribahasa` | Pepatah dan peribahasa Indonesia (65) |
| `.kpk 4 6 8` / `.fpb 48 36 24` | Kelipatan/faktor persekutuan terkecil & terbesar |
| `.faktor 360` | Faktorisasi prima |
| `.prima 97` | Cek bilangan prima |
| `.palindrom katak` | Cek palindrom |
| `.anagram kucing \| kucin` | Cek anagram |
| `.diskon 150000 25` | Harga setelah diskon |
| `.cicilan 5000000 12 12` | Simulasi cicilan anuitas (pokok bunga% tenor) |
| `.bmi 65 170` | Kalkulator BMI (standar WHO) |
| `.jamtidur 23:00` | Prediksi waktu bangun (siklus 90 menit) |
| `.uuid 3` | UUID v4 acak |
| `.akar 144` | Akar kuadrat |
| `.faktorial 20` | Faktorial (bilangan besar, hingga 200!) |
| `.hariini` | Tanggal, waktu, nomor minggu (zona `global.timezone`) |
| `.koin 3` | Lempar koin (Angka/Gambar) |
| `.acakkata belajar` | Acak huruf setiap kata |
| `.bahasa jawa` | Bahasa daerah Nusantara |
| `.danau toba` | Info danau di Indonesia |
| `.gunung kerinci` | Info gunung di Indonesia |
| `.hewan komodo` | Fauna khas Indonesia (16 entri) |
| `.tumbuhan rafflesia` | Flora khas Indonesia (16 entri) |
| `.pulau jawa` | Info pulau di Indonesia |
| `.sungai kapuas` | Info sungai di Indonesia |
| `.haribersejarah 17 agustus` | Peringatan hari bersejarah (tanpa argumen: hari ini) |
| `.waktu tokyo` | Waktu di kota tertentu (tanpa argumen: 3 zona waktu Indonesia) |
| `.surat lamaran` | Templat surat (lamaran/izin/undangan/kuasa/resmi) |
| `.statistikdata` | Jumlah seluruh entri data Rynn |
| `.diagnosa` | Cek lingkungan runtime (owner, tanpa menampilkan kunci) |
| `.ekonomi` | Ringkasan harga limit, hadiah, dan saldo |
| `.gameinfo` | Cooldown dan aturan game (daily, rampok, begal, slot, casino, samgong) |
| `.panduan` | Panduan singkat mulai pakai Rynn |
| `.liga2 skor` | Klasemen liga dari mesin turnamen |
| `.quizturnamen` / `.wordleturnamen` | Turnamen memakai mesin yang sama |
| `.juaraboards` | Papan juara terpusat |
| `.rekapgame` / `.identitas` | Skor dan aktivitas dari satu sumber |
| `.turnamen2 mesin buat roundrobin Liga` (tag peserta) | Buat turnamen dengan mesin baru |
| `.turnamen2 mesin lanjut` | Lihat pertandingan berikutnya |
| `.turnamen2 mesin hasil A B A` | Catat hasil dan lanjutkan bracket |
| `.turnamen2 mesin klasemen` | Klasemen otomatis |
| `.turnamen2 mesin jadwal A B 19:00` | Catat jadwal pertandingan |
| `.paket list` / `.paket pilih plus` / `.paket status` | Paket layanan simulasi |
| `.undang buat` / `.referral papan` | Kode undangan dan referral |
| `.artikel buat Judul` / `.artikel isi <id> <teks>` / `.artikel cari <kata>` | Artikel pribadi |
| `.survei buat Judul` / `.survei jawab <id> <opsi>` / `.survei hasil <id>` | Survei grup |
| `.koperasi buat Bersama` / `.koperasi setor 100` / `.koperasi rekap` | Koperasi simulasi |
| `.inventaris buat kotak` / `.avatar pakai kucing` | Inventaris dan avatar |
| `.papan umum` / `.papan game` / `.papan kontribusi` | Papan peringkat |
| `.pindah ekspor confirm` / `.datasehat cek` | Portabilitas dan integritas data |
| `.modedebot pakai ringkas` / `.fitur flag beta` | Mode dan penanda fitur |
| `.konstitusi buat Aturan` / `.tandatangan halo` | Konstitusi grup dan tanda tangan |
| `.ownerringkas` / `.aksesmatriks` / `.jadwalkerja` | Diagnostik owner |
| `.aturan buat sapa halo hai` / `.aturan uji halo` | Aturan balasan grup |
| `.poin` / `.poin tukar stiker` / `.hadiahpoin tambah stiker 50` | Poin dan hadiah |
| `.toko buka warung` / `.lelang buat buku` | Toko dan lelang simulasi |
| `.reputasi beri @user 2` / `.reputasi papan` | Reputasi grup |
| `.kursus mulai dasar` / `.kursus lanjut` / `.kursus sertifikat` | Kursus mini |
| `.keputusan buat Rapat` / `.proyekgrup papan` | Keputusan dan proyek grup |
| `.arsip cari kata` / `.cadangan buat confirm` | Arsip dan cadangan pribadi |
| `.teksheksa halo` / `.teksdariheksa <heksa>` | Konversi teks |
| `.kunci perintah transfer 1234` | Kunci perintah dengan PIN |
| `.stikerpaket buat lucu` / `.wallpaperteks halo` | Paket stiker dan wallpaper |
| `.penggunaaktif` / `.akseslist` / `.rollback <tag> confirm` | Administrasi lanjutan, owner saja |
| `.privasi` / `.privasi ekspor` / `.privasi hapus confirm` | Kendali data pribadi |
| `.tiket buat <judul>` / `.tiket status <id>` | Tiket dukungan |
| `.aset simpan <nama> <isi>` / `.aset cari <tag>` | Pustaka aset pribadi |
| `.siaran jadwal <teks>` / `.siaran list` | Siaran grup tertunda |
| `.laporanbulanan` / `.ringkasanbot` | Laporan dan ringkasan metrik |
| `.apresiasi @user <teks>` / `.ceritalanjut <kalimat>` | Interaksi sosial grup |
| `.namamerek <kata>` / `.caption <teks>` / `.hashtag <topik>` | Generator kreatif lokal |
| `.glosarium <kata>` / `.teorisingkat <topik>` | Bantuan edukasi |
| `.portofolio` / `.dividen <nominal>` / `.warisansimulasi <nominal> <bagian>` | Ekonomi simulasi |
| `.gametim buat <nama>` / `.tebakurutan` / `.papanskorharian` | Game lanjutan |
| `.bootinfo` / `.stateinfo` / `.ketersediaan` | Informasi sistem, owner saja |
| `.profilkartu` / `.xp` / `.xptop` | Kartu profil, pengalaman, dan papan peringkat |
| `.rekening buat liburan` / `.arisan buat Kelas 50000` | Dompet dan arisan simulasi |
| `.guild buat Rynn` / `.guild papan` | Guild komunitas |
| `.sudoku buat mudah` / `.game2048` | Game baru berbasis teks |
| `.kosakataharian` / `.rumustantangan` | Kosakata dan tantangan rumus |
| `.target buat baca 20` / `.proyek papan` | Target dan papan proyek |
| `.admindaftar` / `.peraturansemua` / `.grupkartu` | Administrasi grup |
| `.stikerteks halo` / `.kartuundangan Rapat 2026-12-01` | Kartu dan stiker lokal |
| `.aimemori on` / `.aipersona guru` / `.aidebat topik` | AI dengan memori opt-in |
| `.health` / `.backupverifikasi` / `.ratelimit` | Observability, owner saja |
| `.bantuanku` / `.carifitur <kata>` / `.coba <perintah>` | Bantuan adaptif tanpa efek samping |
| `.turnamen2 buat` / `.turnamen2 seed @a @b` / `.turnamen2 juara @nama` | Turnamen lanjutan dengan seed dan arsip |
| `.liga2 buat` / `.liga2 anggota @nama` / `.liga2 skor` | Liga grup lanjutan |
| `.bagiacak 3 @a @b @c @d @e @f` | Pembagian kelompok acak |
| `.bagiseimbang 2 @a @b @c @d` | Tim seimbang |
| `.investasihari` / `.tabunggrafik` | Ringkasan investasi dan progres tabungan simulasi |
| `.flashcardharian` / `.kuisadaptif` | Kartu harian dan kuis adaptif |
| `.tugastambah <tugas>` / `.tugaslist` / `.tugasselesai <id>` | Tugas pribadi |
| `.posterteks <judul> <isi>` / `.kartuucapan <nama> <pesan>` | Kartu dan poster teks |
| `.aigaya singkat <topik>` / `.aikuota` | Gaya jawaban AI dan kuota |
| `.health` / `.metrik` / `.memori` | Ringkasan kesehatan bot, owner saja |
| `.modehemat on` / `.modehemat off` | Matikan typing dan animasi |
| `.dashboardbuka` / `.dashboardtutup` | Panel lokal di 127.0.0.1 dengan token sesi |
| `npm run bench` | Bandingkan waktu muat data eager dan malas |
| `npm run test:coverage` | Jalankan tes dengan ambang baris 80, cabang 75, fungsi 75 |
| `.presensi hadir` / `.kuorum 10` | Presensi dan cek kuorum grup |
| `.rapat <judul>` / `.notulen <teks>` | Agenda dan notulen rapat grup (admin) |
| `.laporgrup <alasan>` | Laporkan anggota ke admin grup |
| `.moderasi` | Ringkasan status moderasi grup |
| `.koleksi <nama>` / `.gacha` | Koleksi pribadi dan gacha kosmetik lokal |
| `.achievement` / `.level` / `.levelboard` | Pencapaian dan level user |
| `.investasi <nominal>` / `.investasi cek` | Simulasi investasi, bunga 1 persen per hari |
| `.deposito <nominal> <hari>` | Simulasi deposito, bunga 0,5 persen per hari |
| `.asuransi <nominal>` | Simulasi dana perlindungan, bukan produk nyata |
| `.keuangannilai` | Ringkasan aset simulasi user |
| `.transferterjadwal @user <nominal> <mode>` | Catat transfer berulang |
| `.sapaanpribadi <teks>` | Sapaan otomatis per user |
| `.pujian` / `.semangat` / `.ceritapendek` | Kalimat kreatif acak lokal |
| `.mood <nama>` / `.moodrekap` | Catat dan rekap mood tujuh hari |
| `.teman <nama>` | Catat nama teman untuk ice breaker |
| `.autoreply <kata> \| <balasan>` | Balasan otomatis grup (admin) |
| `.autotag on\|off` / `.autosalam on\|off` | Otomasi grup (admin) |
| `.wordle <kata>` / `.wordlejawab <teks>` | Tebak kata dengan petunjuk huruf |
| `.scramble <kata>` / `.bingo <n>` / `.lotre` | Game kata dan angka lokal |
| `.tebakwarna <warna>` | Tebak warna dari petunjuk |
| `.gameskor` | Skor game user |
| `.markdown` / `.tabel2` / `.diagram` | Format teks dan diagram |
| `.hitungpanjang <teks>` | Statistik panjang teks |
| `.indeksdata <kata>` / `.contohdata <perintah>` | Indeks dan contoh perintah |
| `.bantuansaya` | Perintah paling sering dipakai user |
| `.code` / `.dialog` / `.brainstorm` / `.kritik` | AI teks lanjutan |
| `.translateid <teks>` | Terjemah ke Bahasa Indonesia |
| `.airiwayat <kata>` | Cari riwayat perintah AI |
| `.restartnow confirm` | Restart lewat start.js (owner) |
| `.updatenow confirm` | Perbarui bot (owner) |
| `.logunduh` / `.pengguna` / `.daftargroup` | Ringkasan log dan daftar (owner) |
| `.databaseinfo` / `.maintenancewhy <alasan>` | Info database dan alasan maintenance (owner) |
| `.laporharian` / `.lapormingguan` | Laporan aktivitas bot |
| `.statistikgrup` / `.statistikpengguna` / `.statistikperintah` / `.statistikkinerja` | Statistik grup, user, perintah, kinerja |
| Guard proses | `lib/process-guard.js` menangkap promise gagal dan menutup resource saat SIGINT/SIGTERM |
| `.anggaran <kategori> <nominal>` | Anggaran bulanan |
| `.pengeluaran <kategori> <nominal>` | Catat pengeluaran |
| `.pemasukan <sumber> <nominal>` | Catat pemasukan |
| `.laporanuang` | Ringkasan uang bulanan |
| `.flashcard <pertanyaan> \| <jawaban>` | Kartu hafalan |
| `.flashcard ulang` / `.flashcardjawab <teks>` | Ulang dan jawab kartu |
| `.kuisharian` / `.kuisjawab <a-d>` | Kuis harian |
| `.skorbelajar` | Skor belajar user |
| `.modul` | Daftar modul soal |
| `.absen` / `.absen list` / `.absen rekap` | Absensi grup |
| `.acara <nama> <YYYY-MM-DD>` | Buat acara grup |
| `.acararsvp ya\|tidak` | RSVP acara |
| `.liga buat\|daftar\|skor\|menang\|juara` | Liga grup |
| `.klasemen` | Klasemen aktivitas |
| `.bendera ID` | Bendera emoji dari kode ISO |
| `.umurdetail <YYYY-MM-DD>` | Umur dalam tahun, bulan, minggu, hari |
| `.grafik kopi=8, teh=4` | Grafik bilah teks |
| `.pilihberat kopi:3, teh:1` | Pilihan acak berbobot |
| `.acakurutan 10` | Urutan acak |
| `.aksesgrup <role>` | Role default grup (owner) |
| `.pemeliharaan` | Bersihkan cache dan state (owner) |
| `.diam on\|off` | Mode diam, hanya owner dibalas |
| `.ownerlist` | Daftar owner |
| `.sesihapus <nama>` | Hapus sesi lokal dengan konfirmasi nama |
| `.akseswarisan on\|off` | Warisan role default |
| `.tabungtarget <nominal> [nama]` | Target tabungan |
| `.bungapinjam <persen>` | Bunga pinjaman lokal (owner) |
| `.hadiahevent <teks>` | Pengumuman hadiah event (owner) |
| `.topbulanan` | Peringkat bulanan |
| `.transferbatch @a @b <n>` | Transfer banyak target dengan konfirmasi |
| `.uanglog` | Riwayat uang |
| `.quizberuntun` / `.quizjawab <a-d>` | Kuis beruntun dengan skor |
| `.tebakjawab <teks>` | Jawab tebak peribahasa |
| `.rankmingguan` | Peringkat mingguan |
| `.statistiklanjut <angka...>` | Varians, simpangan baku, rentang |
| `.matriks3 <9 angka>` | Determinan 3x3 |
| `.turunan <a> <n>` | Turunan polinomial |
| `.integral <a> <n>` | Integral polinomial |
| `.koordinat <lat1 lon1 lat2 lon2>` | Jarak haversine |
| `.datasetpenuh` | Daftar kategori rumus |
| `.bagi 38 5` | Bagi 38 anggota ke 5 kelompok, tampil sisa dan distribusi |
| `.team mobile legend 20` | Bagi pemain sesuai ukuran tim game |
| `.turnamen buat` / `.turnamen daftar` / `.turnamen mulai` | Buat, daftar peserta, dan mulai bracket |
| `.turnamen bracket` | Lihat bracket dan status pertandingan |
| `.turnamen menang 1 1 @nama` | Catat pemenang, lanjut sampai juara |
| `.turnamen juara` | Tampilkan juara |
| `.ringkas <teks>` | Ringkas teks lewat AI |
| `.ide <topik>` | Usulan ide lewat AI |
| `.paragraf <topik>` | Paragraf pendek lewat AI |
| `.judulkan <teks>` | Usulan judul lewat AI |
| `.tanya <pertanyaan>` | Tanya ke AI |
| `.terjemah <teks>` | Terjemah teks |
| `.teks <mode> <teks>` | judul, kecil, besar, kebab, camel, snake |
| `.kalender [YYYY-MM]` | Kalender bulan |
| `.jadwal 08:00 belajar` | Jadwal tugas |
| `.notifikasi on\|off` | Notifikasi per user |
| `.jelajah [kategori]` | Jelajah perintah per kategori |
| `.cmdbaru` | Daftar perintah terbaru |
| `.peta` | Peta seluruh kategori perintah |
| `.aliasglobal <nama>` | Cek alias perintah |
| `.statcmd <nama>` | Statistik pemakaian perintah |
| `.catat <judul> <isi>` | Catatan pribadi terstruktur |
| `.agenda` | Ringkasan tugas, catatan, dan pengingat |
| `.ceklis <n>` | Tandai tugas selesai |
| `.template <jenis>` | Template surat |
| `.audit penuh` / `.audit bersihkan` | Log audit owner |
| `.backup jadwal <jam>` | Catat jadwal backup harian |
| `.aksesdefault <role>` | Role default perintah |
| `.blacklist <cmd>` / `.whitelistcmd <cmd>` | Kelola perintah global |
| `.system` | Info sistem dan versi |
| `.bank` | Ringkasan saldo, tabungan, utang |
| `.tabung <n>` / `.tarik <n>` | Kelola tabungan |
| `.pinjam <n>` / `.lunas` | Pinjaman lokal |
| `.top [mingguan]` | Peringkat uang atau limit |
| `.dompetgrafik` | Ringkasan ekonomi berbentuk bilah |
| `.turnamen <game>` | Panel turnamen grup |
| `.tebak riddle` | Tebak peribahasa |
| `.data cari <kata>` | Cari lintas data |
| `.data rekomendasi <kata>` | Rekomendasi perintah data |
| `.broadcast <pesan>` | Warning + konfirmasi, maksimal 10 grup, jeda 10 detik, owner saja |
| `.logaudit [n]` | Log aksi owner, tersimpan di database lokal |
| `.restore <berkas>` | Konfirmasi dua langkah sebelum menimpa database |
| `.maintenance on\|off` | Mode perbaikan, user mendapat pesan sedang maintenance |
| `.explore edukasi` | Jelajahi perintah per kategori |
| `.randomcmd` | Perintah acak beserta contoh |
| `.riwayat` | Riwayat perintah terakhir |
| `.shortcut r rumus` / `.pintasan` | Pintasan perintah pribadi |
| `.todo belajar` | Daftar tugas pribadi |
| `.peraturan` | Atur atau lihat peraturan grup |
| `.icebreak` | Kalimat pemancing obrolan |
| `.dompet` | Ringkasan uang, limit, streak, quest |
| `.topuang` / `.toplimit` | Peringkat uang atau limit |
| `.hadiah` | Daftar hadiah dan syaratnya |
| `.questmingguan` | Quest mingguan |
| `.dailykalender` | Kalender klaim harian |
| `.papanperingkat` | Peringkat game |
| `.trivia` | Kuis acak dari bank data |
| `.dataset` | Daftar dataset |
| `.rekomendasi kata` | Saran perintah terkait |
| `.statistikdata penuh` | Statistik semua dataset |
| `.tabel kopi, teh, susu` | Tabel ASCII sederhana |
| `.help` | Bantuan umum dan perintah sering dipakai |
| `.contoh rumus` | Contoh pemakaian perintah |
| `.alias rumus` | Daftar alias perintah |
| `.cmdlist edukasi` | Daftar perintah per kategori |
| `.saran rumuss` | Saran perintah mirip |
| `.sejarah 17 agustus` | Peristiwa sejarah Indonesia |
| `.tokoh kartini` | Tokoh Indonesia dan perannya |
| `.olahraga bulu` | Cabang olahraga |
| `.singkatan KTP` / `.singkatan cari kesehatan` | Singkatan umum |
| `.sinonim senang` / `.antonim panas` | Pasangan kata |
| `.kamus senang` | Cari sinonim, antonim, dan singkatan |
| `.envstatus` | Status variabel .env tanpa nilai (owner) |
| `.backuplist`, `.sesi`, `.setmotd` | Tools owner tambahan |
| `.cari rumus` | Cari perintah dan rumus |
| `.bantuan rumus` | Detail penggunaan perintah |
| `.kategori` | Daftar kategori perintah |
| `.menu edukasi` | Arahkan ke submenu kategori |
| `.statistikbot` | Statistik pemakaian perintah |
| `.akses rumus premium` | Atur role perintah (owner) |
| `.matikan rumus` / `.hidupkan rumus` | Nonaktifkan atau aktifkan perintah di grup |
| `.cooldown rumus 5` | Atur jeda perintah (owner) |
| `.streak` | Klaim harian beruntun |
| `.quest` | Quest harian tiga misi (+1.000 uang, +5 limit) |
| `.rankgame` | Peringkat game |
| `.basis 1010 2 16` | Konversi bilangan antarbasis 2-36 |
| `.durasi 3661` | Format jumlah detik menjadi hari/jam/menit/detik |
| `.selisihhari 2026-01-01 2026-12-31` | Selisih hari antara dua tanggal |
| `.fibonacci 10` | Deret Fibonacci (BigInt, sampai 100 suku) |
| `.primaantara 1 100` | Bilangan prima dalam rentang (maksimal 10.000 bilangan) |
| `.statistik 4 7 2 9` | Statistik dasar (total, rata-rata, median, min, maks) |
| `.pecahan 12/18` | Menyederhanakan pecahan |
| `.progress 7 10` | Bilah progres dan persentase |
| `.terbilang2 1234567` | Bilangan menjadi kata Indonesia (0-999 miliar) |
| `.hurufke 1` / `.hurufke z` | Konversi nomor dan huruf alfabet |
| `.sapaan 8` | Ucapan waktu (pagi/siang/sore/malam) |
| `.format 2026-11-26 10:30 Asia/Tokyo` | Format tanggal dan waktu per zona |
| `.potong 20 teks yang panjang` | Potong teks dengan elipsis |
| `.hitungteks halo dunia` | Statistik kata, karakter, dan kalimat |
| `.slug Halo Dunia 123` | Slug URL dari teks |
| `.hash sha256 halo` | Hash teks (md5, sha1, sha256, sha512) |
| `.urlcode encode a b&c=d` | Encode/decode URL |
| `.json rapi {"a":1}` | Validasi dan format JSON |
| `.luas segitiga 6 4` | Luas 8 jenis bangun datar |
| `.volume bola 5` | Volume 7 jenis bangun ruang |
| `.kuadrat 1 -5 6` | Akar persamaan kuadrat (real/kompleks) |
| `.deret aritmetika 2 3 5` | Suku ke-n dan jumlah n suku (juga geometri) |
| `.linear 2 3 11` | Solusi persamaan ax + b = c |
| `.persen 25 200` / `.persen naik 100 125` | Persen dari atau persentase perubahan |
| `.matriks det 2 3 1 4` | Operasi matriks 2x2 (det/invers/transpose/kali) |
| `.vektor dot 1 2 3 4 5 6` | Dot/cross product dan panjang vektor |
| `.kompleks kali 1 2 3 4` | Operasi bilangan kompleks |
| `.base64` | Alias `.b64` (encode/decode base64) |
| `.author` | Info pembuat Rynn |
| `.repo` | Repositori dan rilis Rynn |
| `.channel` | Channel WhatsApp resmi Rynn |
| `.grupmenu` | Alias `.groupmenu` |
| `.authormenu` | Menu author (sama seperti `.edukasimenu`) |
| `.mode public` / `.mode self` | Mode publik / khusus owner |

Daftar lengkap: jalankan `.menu` di WhatsApp.

---

## Pemecahan Masalah

| Masalah | Solusi |
|---------|--------|
| Bot tidak mau connect / pairing gagal | Pastikan `NUMBER_BOT` benar dan nomor itu tidak dipakai di tempat lain. Hapus `rynn-session/`, jalankan ulang, pairing ulang. |
| Bot restart terus-menerus | Jalankan `rynn report` dan baca log error. Biasanya karena ffmpeg belum terpasang atau `.env` salah isi. |
| Perintah media (stiker/video/audio) gagal | Pasang ffmpeg (`bash install.sh` mengurusnya) dan cek `ffmpeg -version`. |
| Perintah tidak direspons di grup | Cek `.antispam` (cooldown per user), prefix di `settings.js`, dan apakah bot di-mute (`.mute`). |
| `API Error` saat download/AI | `NAZE_API_KEY` belum diisi atau limit API habis. Isi di `.env` atau jalankan `.setapikey`. |
| Gambar/thumbnail tidak muncul | Pastikan `src/media/rynn.png` ada. Bot tetap jalan tanpanya. |
| `npm ci` gagal di Termux | Pakai `bash install.sh`, jangan di `/storage/...`; clone ke `~/rynnbot`. |
| Dependensi native gagal dibangun | Tidak masalah; `@napi-rs/canvas` bersifat opsional dan render gambar otomatis fallback ke PureImage. |

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
npm test        # unit test (node --test) untuk lib/function.js
```

| Cek | Kebutuhan |
|-----|-----------|
| `node --check` di setiap file `.js` | Harus lolos |
| Scan secret (`gsk_`, `nz-` diikuti 10+ hex, `nsk_` diikuti 16+ hex) di file ter-track | Harus kosong |
| `npm test` (unit test) | Harus hijau |
| `npm audit --omit=dev --audit-level=high` | Advisory di CI (tidak menggagalkan build) |

Linting diserahkan ke editor kamu; proyek membawa konfigurasi Prettier (`.prettierrc.json`) tapi tanpa gate lint wajib.

---

## Continuous Integration

| Workflow | Tujuan |
|----------|--------|
| `.github/workflows/ci.yml` | Setiap push ke `main`, tag `v*`, dan PR: install dengan `npm ci`, jalankan `npm run check` dan `npm test`, lalu `npm audit` sebagai advisory |

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

<img src="https://github.com/nekonaru.png?size=120" width="120" alt="Nekonaruu" /><br />
<b><a href="https://github.com/nekonaru">Nekonaruu</a></b><br />
Pembuat &amp; maintainer<br />
Berbasis Hitori Bot karya <a href="https://github.com/nazedev/hitori">Nazedev</a>

</div>


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
