// Data target akhir v7.0.0. Pola aman: affiksasi, bait puisi karya sendiri, dan nama terverifikasi.

const pA = [
	"Pagi ini aku membuka jendela", "Sore datang lewat pintu belakang", "Malam menyimpan banyak cerita",
	"Di meja ada buku yang belum dibaca", "Hujan turun di luar rumah", "Angin lewat di depan teras",
	"Daun jatuh pelan ke tanah", "Kopi hangat menemani duduk", "Pensil menunggu di atas kertas",
	"Di pasar ada suara tawar menawar", "Di taman ada bangku kosong", "Anak kecil berlari di halaman",
	"Burung bernyanyi di ranting", "Langit berubah warna pelan", "Di jalan aku melangkah pelan",
	"Jam dinding berjalan terus", "Aku menyimpan satu pertanyaan", "Hari ini aku mencoba lagi",
	"Aku bersyukur untuk air dan roti", "Di dapur ada aroma teh", "Roti hangat di pagi hari",
	"Perpustakaan sunyi sekali", "Aku membaca satu halaman lagi", "Kakiku berjalan di trotoar",
	"Tanganku memegang pensil", "Mataku menatap jendela", "Telingaku mendengar hujan",
	"Hatiku sedang belajar sabar", "Pikiranku mencari jawaban", "Aku menulis baris pertama",
];
const pB = [
	"dan cahaya masuk tanpa dipanggil.\nAku menerimanya dengan senyum.\nHari pun dimulai.",
	"aku menghela napas panjang.\nHari biasa jadi lebih tenang.\nAku siap melangkah.",
	"dengan suara yang sangat pelan.\nAku mendengarkannya sebelum tidur.\nBesok ada pagi baru.",
	"aku memilih satu halaman saja.\nSatu kalimat cukup untuk hari ini.\nAku tidak terburu-buru.",
	"irama atap jadi pengiring sabar.\nAku menunggu tanpa mengeluh.\nWaktu berjalan dengan baik.",
	"membawa daun dan sedikit debu.\nAku membiarkannya lewat.\nSeperti membiarkan hari berjalan.",
	"lalu menempel di tanah.\nAku memungutnya dan tersenyum.\nHal kecil pun berarti.",
	"aromanya mengisi ruangan.\nAku duduk lebih lama sebentar.\nKetenangan datang pelan.",
	"garis pertama pun muncul.\nAku tidak menghapusnya lagi.\nKata itu menemukan rumahnya.",
	"tawa itu menular perlahan.\nAku ikut tersenyum sendiri.\nRamai jadi terasa hangat.",
	"aku duduk dan menunggu sebentar.\nTidak perlu pergi ke mana-mana.\nDiam pun punya isi.",
	"kecil itu menular riangnya.\nAku mengikuti langkahnya sejenak.\nHari jadi lebih ringan.",
	"di ranting itu ia bersuara.\nAku berdiri dan mendengar.\nPagi terasa lebih lengkap.",
	"dari biru ke jingga perlahan.\nAku menyimpannya di ingatan.\nNanti bisa kupakai untuk menulis.",
	"langkah itu membawaku ke sini.\nAku bersyukur sampai di sini.\nJalan pun jadi lebih jelas.",
	"tidak peduli seberapa cepat.\nAku memakainya dengan sengaja.\nWaktu bukan untuk dikejar.",
	"jawabannya muncul saat aku diam.\nAku tidak memaksanya datang.\nDiam sering memberi jalan.",
	"dengan cara yang sedikit berbeda.\nKesalahan lama jadi pelajaran.\nAku melangkah lagi.",
	"hal sederhana pun punya arti.\nAku menyimpannya baik-baik.\nSyukur tumbuh dari situ.",
	"hangatnya mengundang duduk lama.\nAku menyesapnya perlahan.\nPagi jadi lebih sabar.",
	"dari ujung jalan pagi buta.\nAku mengikuti aroma itu pulang.\nRumah terasa lebih dekat.",
	"aku membaca lebih pelan hari ini.\nKata-katanya jadi lebih jelas.\nSatu halaman cukup.",
	"dan aku menuliskannya segera.\nKalau tidak, ide itu pergi.\nAku memegang pensil lebih erat.",
	"hati pun mengikuti langkah kaki.\nAku tidak memilih arah yang jauh.\nCukup satu langkah benar.",
	"dan satu garis muncul di kertas.\nAku tidak menghapusnya lagi.\nItu awal dari sesuatu.",
	"jendela itu membuka ruang baru.\nAku melihatnya lebih lama.\nDunia terasa lebih luas.",
	"suara itu masuk ke ruang sunyi.\nAku membiarkannya menemani.\nHati pun ikut bernyanyi.",
	"aku menenangkan diri sejenak.\nJawaban pun jadi lebih dekat.\nSabar ternyata punya suara.",
	"pikiran itu pelan-pelan tertata.\nAku memilih satu hal saja.\nSatu hal yang bisa selesai.",
	"aku menuliskan baris pertama.\nTidak harus bagus dulu.\nYang penting mau terus menulis.",
];
export const PUISI_V7 = pA.flatMap((a, i) => pB.map((b, j) => `${a},\n${b}${i !== j ? "\n" + pB[(j + 7) % pB.length].split("\n")[0] : ""}`));

const akar = "jalan lari baca tulis makan minum tidur bangun kerja belajar ajar bantu lihat dengar cium rasa sapu cuci masak jual beli kirim terima buka tutup pindah diam duduk berdiri lompat tekuk sentuh genggam lepas ikut bawa jemput antar tunggu cari temukan simpan ambil beri pakai perbaiki rusak naik turun masuk keluar dekat jauh cepat lambat tinggi rendah panjang pendek besar kecil luas sempit terang gelap hangat dingin basah kering bersih kotor ramai sepi senang sedih marah takut sabar berani rumah meja kursi pintu jendela kaca buku kertas pensil tas sepatu topi baju celana handuk sabun gunting piring gelas sendok garpu panci wajan kompor kulkas lampu kipas radio televisi komputer laptop telepon kabel baterai sapi kambing ayam ikan burung kucing anjing katak ular pohon bunga daun buah biji akar batang rumput padi jagung kopi teh gula garam cabai bawang tomat kentang wortel kol pisang apel jeruk mangga anggur hujan angin awan petir pelangi langit bumi laut pantai gunung bukit hutan sawah kebun taman jembatan mobil motor bus truk kereta pesawat kapal perahu sepeda sekolah kantor pasar toko hotel klinik stasiun pelabuhan bandara guru murid dokter polisi petani nelayan pedagang ibu ayah anak kakak adik nenek kakek paman bibi sepupu warna merah kuning biru hijau hitam putih abu emas perak cokelat ungu jingga".split(/\s+/);
const awalan = ["ber", "me", "pe", "ter", "se", "ke", "per"];
const akhiran = ["an", "kan", "i", "nya"];
export const HANGMAN_V7 = [...new Set(akar.flatMap((k) => [...awalan.map((p) => p + k), ...akhiran.map((s) => k + s), ...awalan.flatMap((p) => akhiran.map((s) => p + k + s))]))];

export const NEGARA_V7 = [
	["Sao Tome dan Principe", "Sao Tome", "Dobra (STN)", "Afrika"],
	["Guinea Bissau", "Bissau", "Franc CFA (XOF)", "Afrika"],
	["Togo", "Lome", "Franc CFA (XOF)", "Afrika"],
	["Benin", "Porto-Novo", "Franc CFA (XOF)", "Afrika"],
	["Burkina Faso", "Ouagadougou", "Franc CFA (XOF)", "Afrika"],
	["Mali", "Bamako", "Franc CFA (XOF)", "Afrika"],
	["Niger", "Niamey", "Franc CFA (XOF)", "Afrika"],
	["Chad", "N'Djamena", "Franc CFA (XOF)", "Afrika"],
	["Mauritania", "Nouakchott", "Ouguiya (MRU)", "Afrika"],
	["Gambia", "Banjul", "Dalasi (GMD)", "Afrika"],
];

export const PLANET_V7 = [
	["WASP-121 b", "exoplanet", "sekitar 1.800 tahun cahaya", ""], ["WASP-19 b", "exoplanet", "sekitar 800 tahun cahaya", ""],
	["WASP-33 b", "exoplanet", "sekitar 380 tahun cahaya", ""], ["HAT-P-7 b", "exoplanet", "sekitar 1.000 tahun cahaya", ""],
	["HD 209458 b", "exoplanet", "sekitar 160 tahun cahaya", ""], ["HD 189733 b", "exoplanet", "sekitar 64 tahun cahaya", ""],
	["GJ 436 b", "exoplanet", "sekitar 33 tahun cahaya", ""], ["GJ 876 d", "exoplanet", "sekitar 15 tahun cahaya", ""],
	["Gliese 581 c", "exoplanet", "sekitar 20 tahun cahaya", ""], ["Kepler-10 b", "exoplanet", "sekitar 560 tahun cahaya", ""],
	["Kepler-10 c", "exoplanet", "sekitar 560 tahun cahaya", ""], ["Kepler-20 e", "exoplanet", "sekitar 950 tahun cahaya", ""],
	["Kepler-20 f", "exoplanet", "sekitar 950 tahun cahaya", ""], ["Kepler-37 b", "exoplanet", "sekitar 215 tahun cahaya", ""],
	["Kepler-42 d", "exoplanet", "sekitar 1.260 tahun cahaya", ""], ["TOI-700 b", "exoplanet", "sekitar 100 tahun cahaya", ""],
	["TOI-700 c", "exoplanet", "sekitar 100 tahun cahaya", ""], ["TOI-700 e", "exoplanet", "sekitar 100 tahun cahaya", ""],
	["L 98-59 c", "exoplanet", "sekitar 35 tahun cahaya", ""], ["L 98-59 d", "exoplanet", "sekitar 35 tahun cahaya", ""],
];
