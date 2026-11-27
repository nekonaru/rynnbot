// Data ekspansi v6.0.0. Fakta memakai pengetahuan umum atau operasi hitung.
// Pantun dan puisi adalah karya sendiri yang dirakit dari bait aman.

const bait1 = [
	"Pagi hari membuka jendela\nCahaya masuk tanpa ketuk pintu",
	"Jalan ke pasar lewat gang sempit\nPedagang menyapa dengan ramah",
	"Di kebun ada bunga mawar\nDi halaman ada tanaman muda",
	"Air menetes dari gayung\nKe dalam ember di teras rumah",
	"Di sawah padi mulai menguning\nBurung kecil terbang di atasnya",
	"Menyapu halaman pagi buta\nDaun kering berkumpul di satu sisi",
	"Buah mangga di atas meja\nManis rasanya waktu matang",
	"Perahu kecil di tepi pantai\nGelombang lembut menyapa perahu",
	"Di kota lampu menyala malam\nDi desa bintang tampak terang",
	"Menanam benih di pot kecil\nDisiram sore dan pagi hari",
	"Buku lama di rak atas\nHalamannya berisi catatan",
	"Anak kecil bermain di halaman\nTawaannya mengisi sore hari",
	"Di pasar suara tawar menawar\nPedagang tersenyum menanti pembeli",
	"Hujan turun di sore hari\nAtap berbunyi pelan-pelan",
	"Jalan ke kantor lewat taman\nBunga kecil di pinggir jalan",
	"Di laut ikan berenang bebas\nDi daratan pohon berakar kuat",
];
const bait2 = [
	"Kerja kecil yang dilakukan\nlama-lama jadi kebiasaan baik",
	"Bila hati lapang dan jujur\nrezeki datang dengan cara yang baik",
	"Ilmu yang terus dipelajari\nmenjadi bekal sampai tua",
	"Sabar itu menetes pelan\ntapi hasilnya lama-lama penuh",
	"Kerja keras yang tak terlihat\nbiasanya memberi hasil nanti",
	"Pikiran yang teratur rapi\nmembuat hari jadi lebih tenang",
	"Berbagi sedikit dengan teman\nhati jadi lebih lapang",
	"Langkah kecil yang dimulai\npelan-pelan sampai ke tujuan",
	"Di mana pun kita berpijak\nbawa kebaikan di dalam gendong",
	"Perhatian yang diberikan terus\nbuat tanaman tumbuh sendiri",
	"Ilmu yang dibaca ulang\nsering memberi pengertian baru",
	"Kesempatan yang diberikan hari ini\nbisa jadi kenangan nanti",
	"Bekerja dengan tangan jujur\nlebih tenang daripada seribu janji",
	"Setelah hujan berhenti\nlangit jadi lebih bersih dan terang",
	"Satu senyum untuk orang asing\nbisa membuat hari lebih berwarna",
	"Ilmu yang kuat akarnya\ntidak mudah goyah oleh waktu",
];

export const PANTUN_V6 = bait1.flatMap((a) => bait2.map((b) => `${a}\n${b}`));

const sajakA = [
	"Hari ini aku belajar sabar",
	"Di sela rapat dan pesan masuk",
	"Ketika semua tampak berat",
	"Pagi datang tanpa suara",
	"Aku simpan pertanyaan kecil",
	"Di pasar ada suara-suara",
	"Saat hujan aku suka mendengar",
	"Ilmu yang kubaca tadi malam",
	"Di antara dua kesibukan",
	"Malam ini aku berterima kasih",
];
const sajakB = [
	"dari air yang menetes di batu.\nTidak terburu-buru,\ntapi tak pernah berhenti.",
	"aku menulis satu baris kecil.\nTentang napas yang masih ada,\ntentang hari yang masih mau diajak bicara.",
	"coba angkat satu hal saja.\nSatu hal yang bisa dilakukan,\nitu sudah cukup untuk memulai.",
	"menyentuh jendela dan meja.\nAku menyapanya dengan senyum,\nmeski belum sempat minum kopi.",
	"apa yang bisa kuberikan hari ini?\nJawabannya tak selalu besar,\nkadang cuma satu kalimat yang sabar.",
	"tawar-menawar dan tawa.\nAku belajar dari situ,\nbahwa hidup butuh keseimbangan.",
	"dari atap yang berbunyi pelan.\nSeolah dunia berbisik,\nhati tak perlu selalu cepat.",
	"hari ini jadi pegangan.\nTernyata belajar itu seperti menabung,\nhasilnya muncul saat dibutuhkan.",
	"aku menyisipkan waktu untuk diam.\nDuduk, bernapas, dan melihat,\nbahwa dunia masih berjalan.",
	"untuk hal-hal yang sederhana:\nnasi hangat, air minum, dan tempat,\ntempat untuk beristirahat.",
];
export const PUISI_V6 = sajakA.flatMap((a) => sajakB.map((b) => `${a},\n${b}`));

const kataDasar = "pagi sore malam siang hari bulan tahun minggu jam menit detik rumah jendela pintu meja kursi lantai dinding atap tangga teras halaman dapur kamar gudang garasi kaca cermin lampu kipas televisi radio komputer laptop telepon kabel baterai buku majalah koran pensil pena spidol kapur penghapus penggaris tas dompet topi jaket baju celana sepatu sandal handuk sabun sisir gunting sendok garpu pisau piring mangkuk gelas cangkir teko panci wajan kompor kulkas oven blender sofa rak laci nasi roti mi susu telur keju mentega gula garam lada cabai bawang tomat kentang wortel kol sawi bayam jagung pisang apel jeruk mangga anggur semangka melon pepaya kelapa ayam sapi kambing ikan udang cumi kepiting bebek burung kucing anjing kelinci hamster ular kadal katak serangga hujan angin awan petir pelangi langit bumi laut pantai gunung bukit lembah hutan sawah kebun taman lapangan jalan jembatan mobil motor bus truk kereta pesawat kapal perahu sepeda becak sekolah kantor pasar toko hotel klinik stasiun pelabuhan bandara guru murid dokter polisi petani nelayan pedagang ibu ayah anak kakak adik nenek kakek paman bibi sepupu warna merah kuning biru hijau hitam putih abu emas perak cokelat ungu jingga pink senang sedih marah tenang gembira sabar cepat lambat panjang pendek tinggi rendah besar kecil luas sempit terang gelap hangat dingin basah kering".split(/\s+/);
export const HANGMAN_V6 = [...new Set(kataDasar)];

export const FAKTA_HITUNG = [];
for (let a = 1; a <= 20; a++) {
	for (let b = 1; b <= 10; b++) {
		FAKTA_HITUNG.push(`${a} + ${b} = ${a + b}`);
		FAKTA_HITUNG.push(`${a} - ${b} = ${a - b}`);
	}
}

export const SOAL_V6 = { matematika: [] };
for (let a = 1; a <= 30; a++) {
	for (let b = 1; b <= 5; b++) {
		const hasil = a * b;
		SOAL_V6.matematika.push({
			q: `Hasil dari ${a} x ${b} adalah ...`,
			o: [`${hasil - 2}`, `${hasil}`, `${hasil + 2}`, `${hasil + 5}`],
			a: 1,
			p: `${a} x ${b} = ${hasil}.`,
		});
	}
}

export const PERIBAHASA_V6 = [
	{ pepatah: "Bagai aur dengan tebing", makna: "Saling melengkapi dan bergantung." },
	{ pepatah: "Api dalam sekam", makna: "Rahasia yang tersembunyi tetapi bisa muncul." },
	{ pepatah: "Kecil-kecil cili api", makna: "Orang muda pun bisa berbuat besar." },
	{ pepatah: "Rambut sama hitam, hati lain-lain", makna: "Tiap orang punya keinginan berbeda." },
	{ pepatah: "Tangan di atas lebih baik daripada tangan di bawah", makna: "Memberi lebih mulia daripada meminta." },
	{ pepatah: "Yang dikejar tak dapat, yang dikendong berciciran", makna: "Kehilangan yang ada karena mengejar yang belum pasti." },
	{ pepatah: "Ada asap ada api", makna: "Setiap kejadian ada sebabnya." },
	{ pepatah: "Berpikir sebelum berbicara", makna: "Pikirkan kata-kata sebelum mengucapkannya." },
	{ pepatah: "Hemat pangkal kaya", makna: "Berhemat adalah awal kekayaan." },
	{ pepatah: "Malu bertanya sesat jalan", makna: "Takut bertanya bisa menyesatkan." },
	{ pepatah: "Tak ada rotan, akar pun jadi", makna: "Memakai alternatif yang tersedia." },
	{ pepatah: "Sepandai-pandai tupai melompat", makna: "Siapa pun bisa salah." },
];
