// Ekspansi sistematis untuk sistem rumus Rynn v4.
// Semua entri memakai pola rumus standar, bukan data baru yang dikarang.

export function tambahEkspansi(tambah) {
	// Aljabar: hukum pangkat dan logaritma
	for (let n = 1; n <= 30; n++) {
		tambah("aljabar", "pangkat", `a pangkat ${n} kali a pangkat ${n}`, `a^${n} x a^${n} = a^${2 * n}`, "a bilangan", "dasar");
		tambah("aljabar", "logaritma", `log a pangkat ${n}`, `log(a^${n}) = ${n} log a`, "a > 0", "menengah");
		tambah("aljabar", "akar", `akar pangkat ${n}`, `akar(${n})(a^${n}) = |a| untuk n genap`, "n genap", "menengah");
	}
	for (let n = 2; n <= 20; n++) {
		tambah("aljabar", "pertidaksamaan", `Rata-rata geometrik ${n} bilangan`, `((a1 a2 ... a${n})^(1/${n})) <= (a1 + a2 + ... + a${n})/${n}`, "ai > 0", "lanjut");
	}

	// Statistika: nilai kritis dan ukuran sampel
	for (const [persen, z] of [["80", "1,282"], ["90", "1,645"], ["95", "1,960"], ["98", "2,326"], ["99", "2,576"]]) {
		tambah("statistika", "interval kepercayaan", `z untuk kepercayaan ${persen} persen`, `z = ${z}`, "distribusi normal", "menengah");
	}
	for (let e = 1; e <= 10; e++) {
		tambah("statistika", "ukuran sampel", `Ukuran sampel marjin ${e}`, `n = (z^2 sigma^2)/${e}^2`, "E = marjin galat", "menengah");
	}
	for (let n = 5; n <= 20; n++) {
		tambah("statistika", "kombinasi", `Kombinasi ${n} ambil 2`, `C(${n},2) = ${(n * (n - 1)) / 2}`, "n objek", "dasar");
	}

	// Peluang: distribusi binomial dan Poisson
	for (let n = 5; n <= 20; n++) {
		tambah("peluang", "binomial", `Binomial n=${n}`, `P(X=k) = C(${n},k) p^k (1-p)^(${n}-k)`, "k = 0 sampai n", "menengah");
	}
	for (let lambda = 1; lambda <= 10; lambda++) {
		tambah("peluang", "poisson", `Poisson lambda=${lambda}`, `P(X=k) = e^(-${lambda}) ${lambda}^k/k!`, "k = 0,1,2,...", "menengah");
	}
	for (let n = 5; n <= 15; n++) {
		tambah("peluang", "permutasi", `Permutasi ${n} ambil 3`, `P(${n},3) = ${n} x ${n - 1} x ${n - 2} = ${n * (n - 1) * (n - 2)}`, "n objek", "dasar");
	}

	// Biologi: kombinasi genetik
	for (let n = 1; n <= 23; n++) {
		tambah("biologi", "genetika", `Jumlah gamet dari ${n} pasangan kromosom`, `2^${n} = ${2 ** n} kombinasi`, "tanpa pindah silang", "menengah");
	}
	for (let n = 1; n <= 10; n++) {
		tambah("biologi", "genetika", `Genotipe pada ${n} lokus`, `3^${n} = ${3 ** n} genotipe`, "dua alel per lokus", "menengah");
	}

	// Ekonomi: bunga majemuk dan anuitas per tahun
	for (let n = 1; n <= 30; n++) {
		tambah("ekonomi", "bunga majemuk", `Nilai akhir tahun ${n}`, `A = P(1+r)^${n}`, "r = bunga per tahun", "dasar");
		if (n >= 5) tambah("ekonomi", "anuitas", `Faktor anuitas tahun ${n}`, `F = ((1+r)^${n} - 1)/r`, "r tidak nol", "menengah");
	}

	// Geografi: ketinggian dan gempa
	for (let tinggi = 500; tinggi <= 5000; tinggi += 500) {
		const turun = (tinggi / 1000) * 6.5;
		tambah("geografi", "atmosfer", `Penurunan suhu pada ${tinggi} m`, `delta T = 6,5 x ${tinggi / 1000} = ${turun} derajat Celsius`, "troposfer", "dasar");
	}
	for (let m = 4; m <= 9; m++) {
		tambah("geografi", "seismologi", `Energi gempa magnitudo ${m}`, `log E = 11,4 + 1,5 x ${m}`, "E dalam joule", "menengah");
	}
	for (let bulan = 1; bulan <= 12; bulan++) {
		tambah("geografi", "astronomi", `Deklinasi matahari bulan ${bulan}`, `delta ≈ 23,44 x sin(360 x (284 + N)/365) derajat`, "N = hari ke dalam tahun", "menengah");
	}

	// Teknik: resistor seri dan paralel
	for (let n = 2; n <= 12; n++) {
		tambah("teknik", "rangkaian", `Seri ${n} resistor`, `Rtot = R1 + R2 + ... + R${n}`, "n resistor", "dasar");
		tambah("teknik", "rangkaian", `Paralel ${n} resistor`, `1/Rtot = 1/R1 + 1/R2 + ... + 1/R${n}`, "n resistor", "dasar");
	}

	// Komputer: bilangan biner dan kompleksitas
	for (let n = 1; n <= 32; n++) {
		tambah("komputer", "bilangan", `Jumlah nilai ${n} bit`, `2^${n} = ${2 ** n} nilai`, "n bit", "dasar");
	}
	for (let n = 1; n <= 10; n++) {
		tambah("komputer", "kompleksitas", `log basis 2 dari 2 pangkat ${n}`, `log2(2^${n}) = ${n}`, "n bilangan bulat", "dasar");
	}
	for (let n = 0; n <= 15; n++) {
		tambah("komputer", "bitwise", `Biner ${n}`, `${n} = ${n.toString(2)}`, "desimal ke biner", "dasar");
	}

	// Kesehatan: BMR menurut usia dan air
	for (let usia = 20; usia <= 80; usia += 10) {
		tambah("kesehatan", "metabolisme", `BMR pria usia ${usia}`, `BMR = 10B + 6,25T - 5 x ${usia} + 5`, "B kg, T cm", "menengah", "kkal/hari");
		tambah("kesehatan", "metabolisme", `BMR wanita usia ${usia}`, `BMR = 10B + 6,25T - 5 x ${usia} - 161`, "B kg, T cm", "menengah", "kkal/hari");
	}
	for (let berat = 40; berat <= 100; berat += 10) {
		tambah("kesehatan", "hidrasi", `Kebutuhan air ${berat} kg`, `air = ${berat} x 30 = ${berat * 30} ml`, "perkiraan", "dasar", "ml");
	}

	// Musik: nada MIDI dan harmonik
	for (let n = 60; n <= 84; n++) {
		tambah("musik", "nada", `Frekuensi MIDI ${n}`, `f = 440 x 2^((${n} - 69)/12)`, "A4 = 440 Hz", "menengah", "Hz");
	}
	for (let n = 1; n <= 16; n++) {
		tambah("musik", "harmonik", `Harmonik ke-${n}`, `f${n} = ${n} x f1`, "f1 = frekuensi dasar", "menengah", "Hz");
	}

	// Matriks dan vektor: contoh numeric
	for (let n = 1; n <= 20; n++) {
		tambah("matriks", "contoh", `Determinan contoh ${n}`, `det([[${n},2],[3,4]]) = ${n} x 4 - 2 x 3 = ${4 * n - 6}`, "matriks 2x2", "dasar");
	}
	const triples = [[3, 4], [5, 12], [6, 8], [8, 15], [7, 24], [9, 12], [10, 24], [12, 16], [15, 20], [20, 21]];
	for (const [a, b] of triples) {
		tambah("vektor", "contoh", `Panjang vektor (${a},${b})`, `|a| = akar(${a}^2 + ${b}^2) = akar(${a * a + b * b})`, "dua dimensi", "dasar");
	}
}
