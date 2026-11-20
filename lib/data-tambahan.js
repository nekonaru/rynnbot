// Data tambahan terverifikasi/karya sendiri untuk memperluas dataset Rynn.
// Fakta hanya memakai pengetahuan umum yang pasti; puisi/pantun/resep/kosakata
// adalah karya sendiri sehingga tidak ada klaim kebenaran eksternal.

// Buang entri duplikat secara in-place (dari belakang supaya indeks tetap aman).
export const dedupeArray = (arr, key = (x) => x) => {
	const seen = new Set();
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === undefined || arr[i] === null) {
			arr.splice(i, 1);
			continue;
		}
		const k = key(arr[i]);
		if (seen.has(k)) arr.splice(i, 1);
		else seen.add(k);
	}
	return arr;
};

export const FAKTA_BARU = [
	"Air adalah senyawa dengan rumus kimia H2O.",
	"Oksigen memiliki nomor atom 8.",
	"Karbon memiliki simbol kimia C.",
	"Emas memiliki simbol kimia Au.",
	"Besi memiliki simbol kimia Fe.",
	"Perak memiliki simbol kimia Ag.",
	"Air raksa adalah logam yang cair pada suhu ruang.",
	"Es mengapung di air karena massa jenisnya lebih kecil.",
	"Cahaya bergerak jauh lebih cepat daripada suara.",
	"Guruh terdengar setelah kilat karena cahaya lebih cepat daripada suara.",
	"Bulan mengorbit Bumi dan Bumi mengorbit Matahari.",
	"Matahari adalah sebuah bintang.",
	"Galaksi tempat Bumi berada disebut Bima Sakti atau Milky Way.",
	"Tumbuhan melakukan respirasi selain melakukan fotosintesis.",
	"Daun umumnya berwarna hijau karena mengandung klorofil.",
	"Serangga memiliki enam kaki.",
	"Laba-laba bukan serangga; ia memiliki delapan kaki.",
	"Ikan bernapas memakai insang.",
	"Burung bertelur dan sebagian besar memiliki sayap.",
	"Mamalia menyusui anaknya dengan air susu.",
	"Reptil seperti kadal dan ular memiliki kulit bersisik.",
	"Amfibi seperti katak dapat hidup di air dan di darat.",
	"Manusia memiliki lima indera: penglihatan, pendengaran, penciuman, perasa, dan peraba.",
	"Gigi manusia dewasa normalnya berjumlah 32.",
	"Sistem pencernaan manusia dimulai dari mulut.",
	"Paru-paru berperan dalam pertukaran oksigen dan karbon dioksida.",
	"Kulit adalah organ terbesar pada tubuh manusia.",
	"Darah manusia berwarna merah karena kandungan hemoglobin.",
	"Indonesia dilalui garis khatulistiwa.",
	"Lagu kebangsaan Indonesia berjudul Indonesia Raya.",
	"Waktu setempat di Indonesia bagian timur disebut WIT.",
	"Bahasa Indonesia ditulis dengan huruf Latin yang berjumlah 26.",
	"Angka Romawi untuk seratus ditulis C.",
	"Air laut lebih asin daripada air tawar.",
];

export const HANGMAN_BARU = [
	"kucing", "anjing", "sapi", "kambing", "ayam", "bebek", "ikan", "burung", "ular", "katak",
	"kupu", "lebah", "semut", "kecoa", "nyamuk", "lalat", "gajah", "singa", "harimau", "beruang",
	"serigala", "rubah", "kelinci", "tupai", "monyet", "kera", "buaya", "penyu", "paus", "hiu",
	"cumi", "gurita", "kepiting", "udang", "kerang", "siput", "cacing", "jamur", "lumut", "pohon",
	"akar", "daun", "bunga", "buah", "biji", "ranting", "batang", "kayu", "rumput", "padi",
	"jagung", "gandum", "kopi", "teh", "susu", "gula", "garam", "minyak", "api", "asap",
	"awan", "hujan", "petir", "pelangi", "angin", "badai", "salju", "kabut", "embun", "matahari",
	"bulan", "bintang", "langit", "bumi", "laut", "danau", "sungai", "pantai", "pasir", "batu",
	"gunung", "lembah", "hutan", "padang", "gurun", "pulau", "kota", "desa", "jalan", "sekolah",
	"kantor", "pasar", "toko", "hotel", "restoran", "stasiun", "pelabuhan", "bandara", "kereta", "mobil",
	"motor", "bus", "truk", "perahu", "kapal", "pesawat", "helikopter", "sepeda", "gerobak", "becak",
	"sendok", "garpu", "piring", "mangkuk", "gelas", "cangkir", "teko", "panci", "wajan", "kulkas",
	"kompor", "lemari", "kasur", "bantal", "selimut", "handuk", "sabun", "sikat", "sisir", "cermin",
	"jam", "kunci", "tali", "kertas", "pensil", "penghapus", "penggaris", "spidol", "kapur", "tinta",
	"baju", "celana", "sepatu", "sandal", "topi", "jaket", "kemeja", "daster", "sarung", "ika",
];

export const PANTUN_BARU = [
	"Pergi ke kebun memetik mawar\nDaun hijau di bawah sinar\nIlmu yang terus kamu cari\nMenjadi bekal sepanjang hari",
	"Naik perahu ke pulau kecil\nGelombang tenang di pagi hari\nHati yang ikhlas selalu ringan\nWalau pekerjaan bertumpuk rapi",
	"Tanam padi di sawah basah\nTumbuh subur di bawah mendung\nBila kata disimpan baik\nTeman sehati takkan pergi jauh",
	"Beli kain di pasar tradisional\nWarnanya cerah seperti senja\nBerteman baik dengan tetangga\nItu kekayaan yang tak ternilai harga",
	"Burung pipit terbang berdua\nHinggap di ranting pohon mangga\nDua tangan lebih kuat bersama\nSatu hati membangun harapan bersama",
	"Pagi hari menyapu halaman\nDaun kering jatuh berurutan\nMulailah kerja dengan senyum\nHasilnya mengikuti niat yang tulus",
	"Di hutan ada bunga liar\nDi kebun ada bunga mawar\nDi hati ada cita yang besar\nDiraih dengan langkah demi langkah",
	"Laut biru ombaknya tenang\nPerahu kecil berlayar perlahan\nSabar itu bukan berarti diam\nTapi terus melangkah dengan yakin",
	"Makan nasi dengan lauk pedas\nMinum air dingin di siang hari\nSemangat baru setelah istirahat\nKembali bekerja dengan hati gembira",
	"Kakek bercerita di teras\nTentang desa dan masa mudanya\nPesan lama masih terasa\nJangan lupa asal-usul sendiri",
	"Penjual roti di sudut jalan\nAroma harum di pagi buta\nRezeki datang dari usaha\nBerbesar hati dalam menerima",
	"Menanam benih di tanah gembur\nMenyiramnya dengan air bersih\nBila tetap dirawat dengan sabar\nBuah manis akan segera menjemput",
	"Sungai kecil mengalir ke hilir\nBatu di tepi tetap diam\nIlmu yang dipelajari setiap hari\nBekal hidup sepanjang zaman",
	"Di langit ada awan putih\nDi bumi ada rumput hijau\nJangan menunda-nunda kebaikan\nKarena waktu tak bisa diputar ulang",
	"Anak gembala meniup seruling\nSuara merdu di sore hari\nBila hati bersih dan jujur\nTidur malam jadi lebih tenang",
	"Terbang tinggi burung camar\nMencari ikan di laut lepas\nBekerja keras tanpa mengeluh\nHasil baik pasti menyusul",
	"Pungut sampah di depan teras\nBersih lingkungan nyaman bersama\nKebiasaan kecil yang baik\nBisa mengubah wajah negeri",
	"Di dapur ada panci mendidih\nAroma sup menghangatkan ruang\nBila keluarga duduk bersama\nMakan sederhana terasa istimewa",
	"Pak tani pulang dari sawah\nPadi di punggung beratnya terasa\nBerterima kasih pada yang memberi rezeki\nItu tanda hati yang bersyukur",
	"Jalan ke pasar melewati jembatan\nDi bawahnya air mengalir jernih\nBerpikir panjang sebelum memutus\nItu jalan agar tak menyesal",
];

export const PUISI_BARU = [
	"Pagi menyapa lewat jendela,\ncahaya masuk tanpa ketuk pintu.\nAku bangun dengan niat baru,\nmenyimpan hari ini untuk mu.",
	"Di tengah sibuknya dunia,\naku menyisihkan satu menit hening.\nSuara hatiku terdengar lagi,\nmengajak pulang ke dalam diri.",
	"Hujan turun di atas atap,\nmerangkai irama tanpa partitur.\nAku duduk mendengarkannya,\ndan belajar sabar dari air.",
	"Jangan takut langkah kecil,\nwalau hanya satu hari sekali.\nGunung pun terbentuk dari debu,\nyang tak pernah berhenti turun.",
	"Kopi hangat di ujung meja,\ncatatan kecil berisi rencana.\nHari tak selalu sesuai harapan,\ntapi selalu ada yang bisa dipelajari.",
	"Ketika jalan terasa buntu,\nlihatlah ke samping sebentar.\nMungkin ada pintu yang tak terlihat,\nmenunggu kita menyadarinya.",
	"Aku menulis untuk mengingat,\nbahwa setiap hari punya cerita.\nWalau cuma tentang teh yang dingin,\ndan hatinya yang kembali hangat.",
	"Teman datang tanpa diundang,\nmembawa tawa dan sedikit kabar.\nSatu pertemuan singkat cukup,\nuntuk membuat hari terasa ringan.",
	"Malam memberi ruang untuk diam,\nbintang menyala di atas sana.\nAku meletakkan lelah di bantal,\ndan memercayakan esok pada pagi.",
	"Ilmu adalah cahaya kecil,\nyang dinyalakan di dalam dada.\nSemakin sering dibaca,\nsemakin terang jalan yang dilalui.",
	"Keringat jatuh di tanah,\nbenih tumbuh pelan-pelan.\nTidak ada hasil yang instan,\nyang indah biasanya ditunggu.",
	"Senyum sederhana di pagi hari,\nbisa menjadi hadiah untuk orang lain.\nKita tak tahu beban yang dipikulnya,\nmaka berlemah lembutlah selalu.",
	"Di pasar suara berbaur,\npenjual menawar dengan senyum.\nKehidupan berjalan di sela tawar-menawar,\ndan rezeki hadir dari kerja keras.",
	"Air mengalir mengikuti lembah,\ntidak pernah melawan arusnya.\nIa sampai juga ke tujuan,\nkarena terus bergerak meski pelan.",
	"Ketika kata sulit diucapkan,\ndiam pun bisa menjadi jawaban.\nNamun bila kebenaran harus disampaikan,\nucapkan dengan jujur dan lembut.",
	"Aku menyimpan daftar kecil:\nyang sudah kupelajari, yang kupahami,\ndan yang masih perlu kutanya.\nItu cara bertumbuh setiap hari.",
	"Angin membawa kabar dari jauh,\nmelewati bukit dan lembah.\nAku ingin menjadi seperti itu,\nmembawa manfaat ke mana pun pergi.",
	"Di bawah pohon rindang,\nseseorang membaca buku tipis.\nDia tersenyum kecil,\nseolah menemukan kunci sebuah pintu.",
	"Waktu tidak menunggu siapa pun,\nmaka gunakanlah hari ini.\nSatu langkah jujur hari ini,\nlebih berarti dari seribu rencana.",
	"Keluarga adalah tempat kembali,\nsaat dunia terasa berat.\nMeja makan yang sederhana,\nsering jadi obat paling manis.",
];

export const RESEP_BARU = {
	"mie goreng": "Bahan: mi, telur, sawi, bawang merah, bawang putih, kecap manis, garam, merica. Cara: rebus mi hingga matang, tumis bumbu yang dihaluskan, masukkan telur dan sayur, tambahkan mi, bumbui kecap, garam, merica, aduk rata.",
	"nasi uduk": "Bahan: beras, santan, daun salam, serai, lengkuas, garam. Cara: cuci beras, masak dengan santan dan bumbu sampai tanak, sajikan dengan lauk pilihan.",
	"nasi kuning": "Bahan: beras, kunyit, santan, daun salam, serai, garam. Cara: haluskan kunyit, masak beras bersama santan dan bumbu hingga matang, sajikan dengan lauk.",
	"ayam goreng": "Bahan: ayam, bawang putih, kunyit, ketumbar, garam, tepung, minyak. Cara: lumuri ayam dengan bumbu halus, diamkan sebentar, balur tepung, goreng sampai keemasan.",
	"ayam bakar": "Bahan: ayam, kecap manis, bawang merah, bawang putih, ketumbar, garam. Cara: haluskan bumbu, oleskan ke ayam, bakar di atas arang atau panggangan sambil dioles bumbu sampai matang.",
	"sate ayam": "Bahan: ayam, tusuk sate, kecap manis, kacang tanah, bawang merah, garam. Cara: potong ayam, tusuk, bakar sambil dioles kecap; buat bumbu kacang dari kacang goreng yang dihaluskan dengan bumbu, sajikan bersama sate.",
	"gudeg": "Bahan: nangka muda, gula merah, santan, telur, daun salam, lengkuas, garam. Cara: masak nangka dengan santan, gula merah, dan bumbu dengan api kecil sampai empuk dan berwarna cokelat, tambahkan telur.",
	"soto ayam": "Bahan: ayam, kunyit, jahe, lengkuas, serai, daun salam, soun, kol, telur, garam. Cara: rebus ayam bersama bumbu untuk kuah, suwir daging ayam, sajikan dengan soun, kol, dan telur.",
	"bakso": "Bahan: daging sapi, tepung tapioka, bawang putih, es batu, garam, merica. Cara: giling daging dengan bumbu dan es sampai kenyal, bentuk bulat, rebus dalam air mendidih sampai mengapung.",
	"pempek": "Bahan: ikan tenggiri, tepung tapioka, air, garam, bawang putih. Cara: campur ikan giling dengan air dan bumbu, tambahkan tapioka sedikit demi sedikit, bentuk, rebus, sajikan dengan cuko.",
	"martabak manis": "Bahan: tepung terigu, gula, telur, ragi, susu, air, mentega, topping. Cara: buat adonan cair, diamkan, tuang ke wajan panas, tambahkan telur dan gula, lipat setelah matang, beri mentega dan topping.",
	"klepon": "Bahan: tepung ketan, gula merah, kelapa parut, air, garam. Cara: bentuk adonan ketan isi gula merah, rebus sampai mengapung, gulingkan ke kelapa parut.",
	"getuk": "Bahan: singkong, gula merah, kelapa parut, garam. Cara: kukus singkong, haluskan dengan gula merah, bentuk sesuai selera, taburi kelapa parut.",
	"kolak pisang": "Bahan: pisang, gula merah, santan, daun pandan, garam. Cara: rebus pisang dengan gula merah dan daun pandan, tambahkan santan, masak sebentar, sajikan hangat atau dingin.",
	"pisang goreng": "Bahan: pisang, tepung terigu, telur, gula, garam, minyak. Cara: potong pisang, celup ke adonan tepur telur, goreng sampai keemasan.",
	"tahu goreng": "Bahan: tahu, bawang putih, kunyit, ketumbar, garam, minyak. Cara: potong tahu, lumuri bumbu halus, goreng sampai kuning keemasan.",
	"tempe goreng": "Bahan: tempe, bawang putih, ketumbar, garam, minyak. Cara: potong tempe tipis, lumuri bumbu, goreng sampai krispi.",
	"urap": "Bahan: sayur rebus (kangkung, tauge, kol), kelapa parut, bawang merah, bawang putih, kencur, gula merah, garam. Cara: haluskan bumbu dengan kelapa, tumis sebentar, campur dengan sayur rebus.",
	"sayur asem": "Bahan: kacang tanah, jagung manis, labu siam, daun salam, asam jawa, gula merah, garam. Cara: rebus kacang dan jagung, tambahkan labu dan bumbu, masak hingga sayur matang dengan rasa asam manis.",
	"sayur lodeh": "Bahan: sayuran (kangkung, wortel, kacang panjang), santan, bawang merah, bawang putih, lengkuas, daun salam, garam. Cara: tumis bumbu halus, tambahkan santan dan sayur, masak sampai matang.",
	"sambal terasi": "Bahan: cabai merah, cabai rawit, bawang merah, bawang putih, terasi, gula, garam, minyak. Cara: goreng cabai dan bumbu sebentar, ulek dengan terasi, gula, dan garam, tumis sebentar sebelum disajikan.",
};

export const PERIBAHASA_BARU = [
	{ pepatah: "Alah bisa karena biasa", makna: "Suatu pekerjaan menjadi mudah karena sering dilakukan." },
	{ pepatah: "Bumi mana yang tidak ditimpa hujan", makna: "Setiap orang bisa mengalami kesalahan atau musibah." },
	{ pepatah: "Di mana ada kemauan, di situ ada jalan", makna: "Kemauan yang kuat akan menemukan jalan untuk berhasil." },
	{ pepatah: "Hemat pangkal kaya", makna: "Berhemat adalah awal untuk menjadi kaya." },
	{ pepatah: "Ingat sebelum kena, jimat sebelum habis", makna: "Berhati-hatilah sebelum terkena musibah atau kehabisan." },
	{ pepatah: "Laksana air dengan minyak", makna: "Dua hal atau dua orang yang sama sekali tidak bisa cocok." },
	{ pepatah: "Malu bertanya sesat jalan", makna: "Orang yang malu bertanya bisa salah jalan atau salah paham." },
	{ pepatah: "Sepandai-pandai tupai melompat, akhirnya jatuh juga", makna: "Sehebat apa pun seseorang, ia pasti pernah melakukan kesalahan." },
	{ pepatah: "Tak ada rotan, akar pun jadi", makna: "Bila yang diinginkan tidak ada, gunakan apa yang tersedia." },
	{ pepatah: "Tangan satu tak dapat bertepuk", makna: "Pekerjaan besar memerlukan kerja sama." },
	{ pepatah: "Air beriak tanda tak dalam", makna: "Orang yang banyak bicara biasanya kurang berilmu." },
	{ pepatah: "Berpikir sebelum berbicara", makna: "Pikirkan baik-baik kata-kata sebelum mengucapkannya." },
	{ pepatah: "Buah jatuh tak jauh dari pohonnya", makna: "Anak biasanya menyerupai sifat orang tuanya." },
];

// Soal pilihan ganda baru. Setiap entri: { q, o: [4 opsi], a: indeks (0-3), p: pembahasan }.
export const SOAL_BARU = {
	matematika: [
		{ q: "Hasil dari 12 + 8 x 3 adalah ...", o: ["60", "36", "44", "48"], a: 1, p: "Perkalian didahulukan: 8 x 3 = 24, kemudian 12 + 24 = 36." },
		{ q: "Nilai x dari 3x + 5 = 20 adalah ...", o: ["3", "5", "15", "25"], a: 1, p: "3x = 15, sehingga x = 5." },
		{ q: "Luas persegi dengan sisi 9 cm adalah ...", o: ["18 cm2", "36 cm2", "81 cm2", "90 cm2"], a: 2, p: "Luas = sisi x sisi = 9 x 9 = 81 cm2." },
		{ q: "Keliling lingkaran dengan jari-jari 7 cm (π = 22/7) adalah ...", o: ["22 cm", "44 cm", "154 cm", "308 cm"], a: 1, p: "Keliling = 2πr = 2 x 22/7 x 7 = 44 cm." },
		{ q: "Pecahan 3/4 dinyatakan dalam persen adalah ...", o: ["34%", "43%", "75%", "80%"], a: 2, p: "3/4 = 0,75 = 75%." },
		{ q: "FPB dari 24 dan 36 adalah ...", o: ["6", "12", "18", "24"], a: 1, p: "Faktor persekutuan terbesar 24 dan 36 adalah 12." },
		{ q: "KPK dari 4, 6, dan 8 adalah ...", o: ["12", "24", "32", "48"], a: 1, p: "KPK 4, 6, 8 adalah 24." },
		{ q: "Akar kuadrat dari 225 adalah ...", o: ["15", "25", "12", "45"], a: 0, p: "15 x 15 = 225." },
		{ q: "Nilai 2^5 adalah ...", o: ["10", "16", "32", "64"], a: 2, p: "2^5 = 2 x 2 x 2 x 2 x 2 = 32." },
		{ q: "Nilai 15% dari 200 adalah ...", o: ["20", "25", "30", "35"], a: 2, p: "15% x 200 = 30." },
		{ q: "Rata-rata dari 4, 6, 8, 10 adalah ...", o: ["6", "7", "8", "9"], a: 1, p: "(4+6+8+10)/4 = 28/4 = 7." },
		{ q: "Volume kubus dengan rusuk 5 cm adalah ...", o: ["25 cm3", "75 cm3", "125 cm3", "150 cm3"], a: 2, p: "Volume = 5 x 5 x 5 = 125 cm3." },
		{ q: "Sudut dalam segitiga samarata adalah ...", o: ["45°", "60°", "90°", "120°"], a: 1, p: "Jumlah sudut 180°, dibagi 3 sama besar sehingga 60°." },
		{ q: "Nilai dari 7/8 + 1/8 adalah ...", o: ["1", "8/16", "6/8", "2"], a: 0, p: "7/8 + 1/8 = 8/8 = 1." },
		{ q: "Kecepatan 72 km/jam sama dengan ... m/s", o: ["10", "20", "36", "72"], a: 1, p: "72 km/jam = 72.000/3.600 = 20 m/s." },
		{ q: "Diameter lingkaran jika jari-jarinya 6 cm adalah ...", o: ["3 cm", "6 cm", "12 cm", "36 cm"], a: 2, p: "Diameter = 2 x jari-jari = 12 cm." },
		{ q: "Bilangan prima terkecil setelah 7 adalah ...", o: ["8", "9", "11", "13"], a: 2, p: "11 adalah bilangan prima pertama setelah 7." },
		{ q: "Nilai dari (-3) x (-4) adalah ...", o: ["-12", "-7", "7", "12"], a: 3, p: "Minus dikali minus menghasilkan positif: 12." },
		{ q: "Luas segitiga dengan alas 10 cm dan tinggi 6 cm adalah ...", o: ["30 cm2", "60 cm2", "16 cm2", "12 cm2"], a: 0, p: "Luas = 1/2 x alas x tinggi = 1/2 x 10 x 6 = 30 cm2." },
		{ q: "Nilai 0,25 + 1/2 adalah ...", o: ["0,5", "0,75", "1", "1,25"], a: 1, p: "1/2 = 0,5, jadi 0,25 + 0,5 = 0,75." },
	],
	ipa: [
		{ q: "Simbol kimia untuk air adalah ...", o: ["CO2", "H2O", "O2", "NaCl"], a: 1, p: "Air terdiri dari dua atom hidrogen dan satu atom oksigen: H2O." },
		{ q: "Nomor atom oksigen adalah ...", o: ["6", "7", "8", "9"], a: 2, p: "Oksigen memiliki nomor atom 8." },
		{ q: "Organel sel yang berfungsi menghasilkan energi adalah ...", o: ["Inti sel", "Mitokondria", "Ribosom", "Lisosom"], a: 1, p: "Mitokondria adalah tempat respirasi sel yang menghasilkan energi." },
		{ q: "Proses tumbuhan membuat makanan dengan cahaya disebut ...", o: ["Respirasi", "Fotosintesis", "Transpirasi", "Fermentasi"], a: 1, p: "Fotosintesis memakai cahaya untuk mengubah air dan karbon dioksida menjadi glukosa." },
		{ q: "Serangga memiliki jumlah kaki ...", o: ["4", "6", "8", "10"], a: 1, p: "Serangga memiliki enam kaki." },
		{ q: "Alat pernapasan ikan adalah ...", o: ["Paru-paru", "Insang", "Kulit", "Trakea"], a: 1, p: "Ikan bernapas dengan insang." },
		{ q: "Massa jenis es dibandingkan air adalah ...", o: ["lebih besar", "lebih kecil", "sama", "tidak bisa dibandingkan"], a: 1, p: "Es mengapung karena massa jenisnya lebih kecil daripada air." },
		{ q: "Cahaya dan suara, yang lebih cepat adalah ...", o: ["Suara", "Cahaya", "Sama cepatnya", "Tergantung cuaca"], a: 1, p: "Cahaya jauh lebih cepat daripada suara, itulah sebabnya kilat terlihat lebih dulu daripada guruh." },
		{ q: "Bumi mengorbit ...", o: ["Bulan", "Matahari", "Planet Jupiter", "Galaksi"], a: 1, p: "Bumi mengelilingi Matahari dalam satu tahun." },
		{ q: "Lima indera manusia yang bukan termasuk adalah ...", o: ["Penglihatan", "Pendengaran", "Penciuman", "Keseimbangan"], a: 3, p: "Lima indera klasik adalah penglihatan, pendengaran, penciuman, perasa, dan peraba." },
	],
	bindon: [
		{ q: "Kalimat yang benar secara ejaan adalah ...", o: ["Saya pergi kerumahnya.", "Saya pergi ke rumahnya.", "Saya pergi ke Rumahnya.", "saya pergi ke rumahnya"], a: 1, p: "Kata depan 'ke' ditulis terpisah dan awal kalimat menggunakan huruf kapital." },
		{ q: "Sinonim kata 'ceria' adalah ...", o: ["Gembira", "Sedih", "Marah", "Lelah"], a: 0, p: "Ceria berarti gembira atau riang." },
		{ q: "Antonim kata 'rajin' adalah ...", o: ["Sabar", "Malas", "Cepat", "Tekun"], a: 1, p: "Lawan kata rajin adalah malas." },
		{ q: "Kata yangtepat untuk mengisi: 'Dia ___ buku di perpustakaan.' adalah ...", o: ["membaca", "membacakan", "bacaan", "dibaca"], a: 0, p: "Kalimat aktif sederhana memakai 'membaca'." },
		{ q: "Kalimat majemuk setara ditandai dengan ...", o: ["Karena", "Namun", "Dan", "Jika"], a: 2, p: "Kata 'dan' menghubungkan dua klausa yang setara." },
		{ q: "Ejaan yang benar untuk nama hari adalah ...", o: ["senin", "Senin", "SENIN", "seNIn"], a: 1, p: "Nama hari diawali huruf kapital: Senin." },
		{ q: "Arti kata 'menghayati' adalah ...", o: ["Mengetahui secara mendalam", "Menulis dengan cepat", "Menolak dengan halus", "Menjual kembali"], a: 0, p: "Menghayati berarti memahami dan merasakan secara mendalam." },
		{ q: "Kata baku yang benar adalah ...", o: ["Nomor", "No mor", "Nomer", "nomor"], a: 0, p: "Bentuk baku adalah 'nomor'." },
		{ q: "Kalimat berikut yang termasuk kalimat tanya adalah ...", o: ["Dia sedang membaca buku.", "Apakah kamu sudah makan?", "Buku itu sangat menarik.", "Kami pergi ke sekolah."], a: 1, p: "Kalimat tanya ditandai dengan kata tanya 'apakah' dan tanda tanya." },
		{ q: "Peribahasa 'sambil menyelam minum air' berarti ...", o: ["Melakukan dua pekerjaan sekaligus", "Bekerja tanpa arah", "Terlalu terburu-buru", "Menyerah sebelum mencoba"], a: 0, p: "Peribahasa itu menggambarkan melakukan satu pekerjaan sambil mendapat manfaat lain." },
	],
};
