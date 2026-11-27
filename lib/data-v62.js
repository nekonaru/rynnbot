// Batch target revisi v6.2.0. Data dibuat dari pola aman, operasi hitung,
// affiksasi bahasa Indonesia yang benar, dan karya kreatif sendiri.

export const FAKTA_MASIF = [];
for (let a = 1; a <= 60; a++) {
	for (let b = 1; b <= 40; b++) {
		FAKTA_MASIF.push(`${a} + ${b} = ${a + b}`);
		FAKTA_MASIF.push(`${a} - ${b} = ${a - b}`);
	}
}

const baitA = [
	"Pagi hari jendela dibuka\nCahaya masuk tanpa suara",
	"Di kebun bunga mulai mekar\nAngin lewat membawa haruman",
	"Jalan ke pasar pagi buta\nPedagang menata dagangannya",
	"Di sawah padi mulai tumbuh\nPetani berjalan perlahan",
	"Buah apel di atas piring\nKulitnya merah mengkilap",
	"Di langit awan berarak\nMatahari bersembunyi sebentar",
	"Air di sungai mengalir\nBatu di tepi tetap diam",
	"Anak kecil berlari riang\nTawanya mengisi halaman",
	"Di dapur teh sedang diseduh\nUap naik ke jendela kaca",
	"Kertas kosong di atas meja\nMenunggu satu kalimat awal",
	"Di taman bangku kosong\nSeseorang lewat perlahan",
	"Burung kecil di atas ranting\nBerkicau di waktu senja",
	"Roti hangat di pagi hari\nMentega melera perlahan",
	"Di perpustakaan sunyi sekali\nHalaman dibuka satu per satu",
	"Hujan turun di luar rumah\nSuara atap jadi irama",
	"Sendal di teras depan\nMenunggu pemiliknya pulang",
	"Di laut perahu berlayar\nGelombang mengiringi perjalanan",
	"Kopi hangat di cangkir kecil\nAroma mengisi ruangan",
	"Pensil tajam di atas buku\nGaris pertama pun dimulai",
	"Daun kering jatuh ke tanah\nAngin membawanya pergi",
];
const baitB = [
	"Ilmu yang dicari dengan sabar\nselalu membuka jalan baru.",
	"Kerja yang dimulai hari ini\nmemiliki arti di kemudian hari.",
	"Janji yang dijaga dengan sungguh\nmenumbuhkan kepercayaan.",
	"Waktu yang dipakai dengan bijak\ntidak pernah terasa sia-sia.",
	"Teman yang saling menghormati\nmembuat perjalanan lebih ringan.",
	"Hati yang mau menerima\nbisa melihat banyak hal.",
	"Langkah kecil yang diulang\nakhirnya sampai juga.",
	"Pikiran yang tenang dan jernih\nmemilih kata yang lebih baik.",
	"Tangan yang rajin menolong\nsering memberi arti besar.",
	"Mata yang mau membaca\nmendapat banyak pelajaran.",
	"Lidah yang menjaga kata\nmenghindarkan banyak sesal.",
	"Kaki yang melangkah pelan\nlebih amal daripada bergegas.",
	"Telinga yang mau mendengar\nmenemukan hal yang tersembunyi.",
	"Hati yang tidak mudah marah\nmemiliki ruang untuk bahagia.",
	"Ilmu yang diamalkan\nmenjadi kebiasaan yang baik.",
	"Usaha yang dilakukan terus\nakan berbuah pada waktunya.",
	"Doa dan usaha berjalan bersama\nmemberi kekuatan menjalani hari.",
	"Sabar yang dijalani dengan ikhlas\nmenjadi kebiasaan yang indah.",
	"Kata yang tersimpan baik\ntidak menimbulkan kegaduhan.",
	"Kebaikan yang dilakukan diam\ntetap memberi cahaya.",
];
export const PANTUN_MASIF = baitA.flatMap((a) => baitB.map((b) => `${a}\n${b}`));

const puisiA = [
	"Aku membuka jendela pagi", "Di ujung meja ada buku", "Sore datang perlahan",
	"Malam punya caranya bicara", "Angin lewat di depan rumah", "Hujan menyentuh atap",
	"Di jalan aku melihat orang", "Kopi menemaniku duduk", "Langit menyimpan warna",
	"Daun jatuh tanpa suara", "Waktu berjalan di jam", "Pensil menulis perlahan",
	"Di pasar ada tawa", "Di taman ada bangku", "Di dapur ada aroma",
	"Aku menyimpan satu pertanyaan", "Kadang jawaban tidak datang", "Aku memilih terus mencoba",
	"Hari ini aku mencoba lagi", "Aku berterima kasih pada pagi",
];
const puisiB = [
	"dan cahaya masuk dengan sendirinya.\nAku tidak menyuruhnya, tapi ia datang juga.",
	"yang halamannya belum kubaca.\nAku memilih satu kalimat untuk hari ini.",
	"dan bayangnya jatuh di lantai.\nAku mengikuti arahnya sebentar.",
	"dengan suara yang sangat pelan.\nAku mendengarnya sebelum tidur.",
	"membawa daun dan sedikit debu.\nAku membiarkannya lewat.",
	"dan iramanya berulang.\nAku belajar sabar dari situ.",
	"yang lewat dengan cepat.\nAku ingin lebih pelan hari ini.",
	"dan dua tanganku menghangat.\nItu sudah cukup untuk mulai.",
	"yang berubah setiap jam.\nAku menyimpannya di ingatan.",
	"lalu menempel di tanah.\nAku memungutnya dan tersenyum.",
	"tanpa memberitahu siapa pun.\nAku menggunakannya dengan sengaja.",
	"dan satu garis muncul.\nAku tidak menghapusnya lagi.",
	"yang terdengar di antara ramai.\nAku ikut tersenyum kecil.",
	"yang menunggu siapa pun.\nAku duduk sebentar di sana.",
	"yang akrab dari pagi.\nAku tahu rumah ada di situ.",
	"tentang hal yang paling sederhana.\nJawabannya muncul saat aku diam.",
	"dan itu tidak mengapa.\nAku tetap melangkah esok hari.",
	"Aku tidak perlu menjadi bintang.\nCukup jadi lampu kecil yang menemani.",
	"dengan cara yang sedikit beda.\nKesalahan lama jadi pelajaran baru.",
	"karena ia memberi ruang mulai lagi.\nAku menerimanya dengan tangan terbuka.",
];
export const PUISI_MASIF = puisiA.flatMap((a, i) => puisiB.map((b, j) => `${a},\n${b}${i !== j ? "\n" + puisiB[(j + 1) % puisiB.length].split("\n")[0] : ""}`));

const akarKata = "jalan lari baca tulis makan minum tidur bangun kerja belajar ajarkan bantu lihat dengar cium rasa sapu cuci masak jual beli kirim terima buka tutup pindah diam duduk berdiri lompat tekuk sentuh genggam lepas ikut bawa jemput antar tunggu cari temukan simpan ambil beri pakai buat perbaiki rusak buka tutup naik turun masuk keluar dekat jauh cepat lambat tinggi rendah panjang pendek besar kecil luas sempit terang gelap hangat dingin basah kering bersih kotor ramai sepi senang sedih marah takut sabar berani".split(/\s+/);
const prefiks = ["ber", "me", "pe", "ter", "se"];
const sufiks = ["an", "kan", "i"];
export const HANGMAN_MASIF = [];
for (const akar of akarKata) {
	for (const p of prefiks) HANGMAN_MASIF.push(p + akar);
	for (const s of sufiks) HANGMAN_MASIF.push(akar + s);
}

export const SOAL_MASIF = { matematika: [] };
for (let a = 1; a <= 50; a++) {
	for (let b = 1; b <= 20; b++) {
		const jumlah = a + b;
		SOAL_MASIF.matematika.push({ q: `${a} + ${b} = ...`, o: [`${jumlah - 2}`, `${jumlah}`, `${jumlah + 1}`, `${jumlah + 4}`], a: 1, p: `${a} + ${b} = ${jumlah}.` });
		const hasil = a * b;
		SOAL_MASIF.matematika.push({ q: `${a} x ${b} = ...`, o: [`${hasil - 3}`, `${hasil}`, `${hasil + 2}`, `${hasil + 6}`], a: 1, p: `${a} x ${b} = ${hasil}.` });
	}
}
