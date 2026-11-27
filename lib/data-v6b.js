// Batch data masif v6.1.0. Semua entri memakai pola aman:
// operasi hitung, karya sendiri, atau kosakata umum Indonesia.

export const FAKTA_V6B = [];
for (let a = 1; a <= 40; a++) {
	for (let b = 1; b <= 20; b++) {
		FAKTA_V6B.push(`${a} + ${b} = ${a + b}`);
		FAKTA_V6B.push(`${a} - ${b} = ${a - b}`);
	}
}
for (let a = 1; a <= 12; a++) {
	for (let b = 1; b <= 12; b++) FAKTA_V6B.push(`${a} x ${b} = ${a * b}`);
}

const tempat = ["desa", "kota", "kebun", "pasar", "sawah", "pantai", "hutan", "taman", "rumah", "sekolah"];
const benda = ["bunga", "burung", "pohon", "angin", "awan", "laut", "sungai", "jembatan", "kertas", "buku"];
const waktu = ["pagi", "siang", "sore", "malam"];
const sifat = ["indah", "tenang", "ramai", "sejuk", "cerah"];
const nasihatA = [
	"Ilmu yang dipelajari",
	"Kerja yang dilakukan dengan sabar",
	"Janji yang selalu ditepati",
	"Waktu yang dipakai dengan bijak",
	"Teman yang saling menghormati",
	"Doa dan usaha yang berjalan bersama",
	"Hati yang tidak mudah mengeluh",
	"Langkah kecil yang terus diulang",
];
const nasihatB = [
	"menjadi bekal seumur hidup.",
	"biasanya membuahkan hasil.",
	"menumbuhkan kepercayaan.",
	"tidak bisa diambil kembali.",
	"membuat hari terasa ringan.",
	"sering membuka jalan baru.",
	"lebih kuat dari keluhan panjang.",
	"akhirnya sampai juga ke tujuan.",
];
export const PANTUN_V6B = [];
for (const t of tempat) {
	for (const b of benda) {
		for (const w of waktu) {
			for (const s of sifat) {
				for (let i = 0; i < nasihatA.length; i++) {
					PANTUN_V6B.push(`Di ${t} ada ${b} ${s}\n${b} itu terlihat di ${w}\n${nasihatA[i]}\n${nasihatB[i]}`);
				}
			}
		}
	}
}

const puisiA = [
	"Pagi menyapa dengan cahaya", "Sore datang membawa angin", "Malam turun perlahan",
	"Di jalan pulang aku berjalan", "Di meja ada catatan kecil", "Ketika hujan mulai turun",
	"Aku membaca satu halaman", "Kopi menemani percakapan", "Angin lewat di jendela",
	"Waktu berjalan tanpa suara", "Daun jatuh di halaman", "Langit menyimpan banyak cerita",
];
const puisiB = [
	"dan aku memilih untuk mulai lagi.\nSatu langkah kecil sudah cukup.",
	"aku tersenyum tanpa alasan khusus.\nHari biasa jadi terasa hangat.",
	"aku meletakkan lelah di bantal.\nBesok masih ada pagi baru.",
	"aku memikirkan hal yang sederhana.\nKadang itulah yang paling berarti.",
	"aku menulisnya supaya tidak lupa.\nKata-kata kecil pun punya tempat.",
	"aku mendengar iramanya pelan.\nHati pun ikut pelan-pelan.",
	"aku menemukan satu kalimat.\nSeolah ditulis untuk hari ini.",
	"dan dua orang saling mengisi.\nTidak perlu banyak kata.",
	"aku membiarkannya lewat begitu saja.\nSeperti membiarkan hari berjalan.",
	"aku menggunakannya dengan sengaja.\nTidak untuk mengejar, tapi untuk hadir.",
	"aku menganggapnya sebagai tanda.\nSemua yang tumbuh akan berganti.",
	"aku menunggu sebentar saja.\nJawaban datang saat aku tenang.",
];
export const PUISI_V6B = puisiA.flatMap((a) => puisiB.map((b) => `${a},\n${b}`));

const kataTambahan = "acara aksi alat alur aman analisis arah arsip artikel asal asam asli awal awanayam bakar baju baling batang baterai bawang bayi bebek bedak beha belajar benar benih beras berita berjalan beruang besok biaya bibir bintang biru bisu boats bodoh buah batu bujang bulu bumi bunga buru buta cacing cadangan calon cangkir capai cara carut catatan cawan cermin cita cuaca daftar dagu dahan dampak danau dangkal daun debu dekat delapan depan desa dapur deburan diam dinding dinas dongeng dua dusun dua belas ejaan elang emas enam enam belas empat enam puluh ereksi es faedah fajar fauna fenomena ferri filen final flora foto fret fungsi gajah galur".split(/\s+/);
export const HANGMAN_V6B = [...new Set(kataTambahan.filter((w) => /^[a-z]+$/.test(w)))];

export const SOAL_V6B = { matematika: [], ipa: [], ips: [], bindon: [], ppkn: [] };
for (let a = 1; a <= 40; a++) {
	for (let b = 1; b <= 10; b++) {
		const jumlah = a + b;
		SOAL_V6B.matematika.push({ q: `${a} + ${b} = ...`, o: [`${jumlah - 1}`, `${jumlah}`, `${jumlah + 1}`, `${jumlah + 3}`], a: 1, p: `${a} + ${b} = ${jumlah}.` });
		const hasil = a * b;
		SOAL_V6B.matematika.push({ q: `${a} x ${b} = ...`, o: [`${hasil - 2}`, `${hasil}`, `${hasil + 2}`, `${hasil + 4}`], a: 1, p: `${a} x ${b} = ${hasil}.` });
	}
}
const ipaFakta = [
	["Air terdiri dari unsur ...", ["hidrogen dan oksigen", "karbon dan oksigen", "nitrogen dan hidrogen", "besi dan oksigen"], 0, "Rumus air H2O."],
	["Simbol kimia besi adalah ...", ["Fe", "F", "Br", "Pb"], 0, "Fe dari ferrum."],
	["Planet terdekat dengan Matahari adalah ...", ["Merkurius", "Venus", "Bumi", "Mars"], 0, "Merkurius mengorbit paling dekat."],
	["Satelit alami Bumi adalah ...", ["Bulan", "Mars", "Venus", "Sabit"], 0, "Bumi memiliki satu satelit alami."],
	["Tumbuhan menghasilkan energi melalui ...", ["fotosintesis", "respirasi", "fermentasi", "evaporasi"], 0, "Fotosintesis memakai cahaya."],
];
for (const [q, o, a, p] of ipaFakta) SOAL_V6B.ipa.push({ q, o, a, p });
