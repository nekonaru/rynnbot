// Batch target akhir v6.3.0. Pola aman: operasi hitung, karya sendiri, affiksasi, dan nama terverifikasi.

const pembuka = [
	"Pagi hari aku membuka jendela", "Sore datang dengan pelan", "Malam punya iramanya sendiri",
	"Aku duduk di dekat meja", "Di luar hujan mulai turun", "Angin lewat di depan rumah",
	"Daun jatuh ke halaman", "Kopi hangat di cangkir kecil", "Buku terbuka di atas meja",
	"Pensil menunggu di samping kertas", "Di pasar ada suara ramai", "Di taman ada bangku kosong",
	"Anak kecil lewat sambil tertawa", "Burung bernyanyi di ranting", "Langit menyimpan banyak warna",
	"Di jalan aku melangkah pelan", "Waktu berjalan di jam dinding", "Aku menyimpan satu pertanyaan",
	"Hari ini aku mencoba lagi", "Aku bersyukur untuk hal kecil", "Di dapur ada aroma teh",
	"Roti hangat menemani pagi", "Di perpustakaan sunyi sekali", "Aku membaca satu halaman lagi",
	"Kakiku melangkah di trotoar", "Tanganku memegang pensil", "Mataku menatap jendela",
	"Telingaku mendengar suara hujan", "Hatiku sedang belajar sabar", "Pikiranku mencari jawaban",
];
const penutup = [
	"dan cahaya datang tanpa dipanggil.\nAku menerimanya dengan senyum.",
	"aku menghela napas panjang.\nHari biasa jadi lebih tenang.",
	"aku mendengarnya sebelum tidur.\nBesok ada pagi yang baru.",
	"aku memilih satu hal untuk dimulai.\nSatu langkah cukup untuk hari ini.",
	"irama atap mengantarku sabar.\nAku tidak perlu terburu-buru.",
	"membawa daun dan sedikit debu.\nAku membiarkannya lewat.",
	"lalu menempel di tanah.\nAku memungutnya dan tersenyum.",
	"aromanya mengisi ruangan.\nAku duduk lebih lama sebentar.",
	"halaman itu berisi satu kalimat.\nKalimat itu terasa pas untukku.",
	"garis pertama pun muncul.\nAku tidak menghapusnya lagi.",
	"tawa itu menular pelan.\nAku ikut tersenyum sendiri.",
	"aku duduk dan menunggu sebentar.\nTidak perlu ke mana-mana.",
	"rasa itu mengingatkanku pada rumah.\nAku menyimpannya baik-baik.",
	"suara itu mengisi sore.\nAku berterima kasih padanya.",
	"aku menyimpan warna itu di ingatan.\nNanti bisa kupakai untuk menulis.",
	"langkah itu membawaku ke sini.\nAku bersyukur sampai di sini.",
	"jarum jam berjalan terus.\nAku menggunakannya dengan sengaja.",
	"jawabannya muncul saat aku diam.\nAku tidak memaksanya datang.",
	"kesalahan lama jadi pelajaran.\nAku mencoba cara yang baru.",
	"untuk napas, air, dan roti.\nHal sederhana pun punya arti.",
	"uangnya harum dan hangat.\nAku menyesapnya perlahan.",
	"tangannya menghangat.\nAku menikmati detik itu.",
	"aku membaca lebih pelan.\nKata-katanya jadi lebih jelas.",
	"aku menuliskan satu baris awal.\nAku tidak menunggu mood datang.",
	"trotoar ramai tetap saja.\nAku berjalan sesuai langkahku.",
	"aku menggenggamnya sebentar.\nLalu aku mulai menulis.",
	"jendela itu membuka ruang.\nAku melihatnya lebih lama.",
	"aku membiarkan suara itu masuk.\nHati pun ikut mendengar.",
	"aku menenangkan diri sejenak.\nJawaban pun lebih dekat.",
	"aku menemukan satu kalimat kecil.\nKalimat itu cukup untuk hari ini.",
];
export const PUISI_MASIF2 = pembuka.flatMap((a, i) => penutup.map((b, j) => `${a},\n${b}${i !== j ? "\n" + penutup[(j + 3) % penutup.length].split("\n")[0] : ""}`));

const akar = "jalan lari baca tulis makan minum tidur bangun kerja belajar ajarkan bantu lihat dengar cium rasa sapu cuci masak jual beli kirim terima buka tutup pindah diam duduk berdiri lompat tekuk sentuh genggam lepas ikut bawa jemput antar tunggu cari temukan simpan ambil beri pakai buat perbaiki rusak naik turun masuk keluar dekat jauh cepat lambat tinggi rendah panjang pendek besar kecil luas sempit terang gelap hangat dingin basah kering bersih kotor ramai sepi senang sedih marah takut sabar berani rumah meja kursi pintu jendela kaca buku kertas pensil tas sepatu topi baju celana handuk sabun gunting piring gelas sendok garpu panci wajan kompor kulkas lampu kipas radio televisi komputer laptop telepon kabel baterai sapi kambing ayam ikan burung kucing anjing katak ular pohon bunga daun buah biji akar batang rumput padi jagung kopi teh gula garam cabai bawang tomat kentang wortel kol pisang apel jeruk mangga anggur hujan angin awan petir pelangi langit bumi laut pantai gunung bukit hutan sawah kebun taman jalan jembatan mobil motor bus truk kereta pesawat kapal perahu sepeda sekolah kantor pasar toko hotel klinik stasiun pelabuhan bandara guru murid dokter polisi petani nelayan pedagang ibu ayah anak kakak adik nenek kakek paman bibi sepupu warna merah kuning biru hijau hitam putih abu emas perak cokelat ungu jingga".split(/\s+/);
const awalan = ["ber", "me", "pe", "ter", "se", "ke"];
const akhiran = ["an", "kan", "i"];
export const HANGMAN_MASIF2 = [...new Set(akar.flatMap((k) => [...awalan.map((p) => p + k), ...akhiran.map((s) => k + s), k + "an"]))];

export const FAKTA_MASIF2 = [];
for (let a = 1; a <= 80; a++) {
	for (let b = 1; b <= 50; b++) {
		FAKTA_MASIF2.push(`${a} + ${b} = ${a + b}`);
		FAKTA_MASIF2.push(`${a} - ${b} = ${a - b}`);
	}
}
for (let a = 1; a <= 20; a++) {
	for (let b = 1; b <= 20; b++) FAKTA_MASIF2.push(`${a} x ${b} = ${a * b}`);
}

export const SOAL_MASIF2 = { matematika: [] };
for (let a = 1; a <= 60; a++) {
	for (let b = 1; b <= 30; b++) {
		const jumlah = a + b;
		SOAL_MASIF2.matematika.push({ q: `${a} + ${b} = ...`, o: [`${jumlah - 2}`, `${jumlah}`, `${jumlah + 1}`, `${jumlah + 5}`], a: 1, p: `${a} + ${b} = ${jumlah}.` });
		const hasil = a * b;
		SOAL_MASIF2.matematika.push({ q: `${a} x ${b} = ...`, o: [`${hasil - 4}`, `${hasil}`, `${hasil + 2}`, `${hasil + 7}`], a: 1, p: `${a} x ${b} = ${hasil}.` });
	}
}

export const NEGARA_MASIF2 = [
	["Fiji", "Suva", "Dolar Fiji (FJD)", "Oseania"], ["Papua Nugini", "Port Moresby", "Kina (PGK)", "Oseania"],
	["Kepulauan Solomon", "Honiara", "Dolar Solomon (SBD)", "Oseania"], ["Mauritius", "Port Louis", "Rupee Mauritius (MUR)", "Afrika"],
	["Djibouti", "Djibouti", "Franc Djibouti (DJF)", "Afrika"], ["Lesotho", "Maseru", "Loti (LSL)", "Afrika"],
	["Eswatini", "Mbabane", "Lilangeni (SZL)", "Afrika"], ["Botswana", "Gaborone", "Pula (BWP)", "Afrika"],
];

export const PLANET_MASIF2 = [
	["Kepler-1649 c", "exoplanet", "sekitar 300 tahun cahaya", ""], ["Kepler-442 b", "exoplanet", "sekitar 1.200 tahun cahaya", ""],
	["Kepler-62 f", "exoplanet", "sekitar 1.200 tahun cahaya", ""], ["Kepler-62 e", "exoplanet", "sekitar 1.200 tahun cahaya", ""],
	["Kepler-283 c", "exoplanet", "sekitar 1.500 tahun cahaya", ""], ["HD 219134 b", "exoplanet", "sekitar 21 tahun cahaya", ""],
	["55 Cancri e", "exoplanet", "sekitar 41 tahun cahaya", ""], ["WASP-12 b", "exoplanet", "sekitar 1.400 tahun cahaya", ""],
	["GJ 1214 b", "exoplanet", "sekitar 48 tahun cahaya", ""], ["HD 189733 b", "exoplanet", "sekitar 64 tahun cahaya", ""],
];
