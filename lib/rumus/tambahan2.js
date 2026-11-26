// Ekspansi lanjutan sistem rumus Rynn v4.1.0.
// Pola yang dipakai tetap rumus standar atau bentuk ulangnya.

export function tambahEkspansiLanjutan(tambah) {
	// Fisika: gerak jatuh bebas, energi, dan hukum gas
	for (let t = 1; t <= 20; t++) {
		tambah("fisika", "gerak", `Jarak jatuh bebas detik ke-${t}`, `s = 1/2 x g x ${t}^2 = ${(0.5 * 9.8 * t * t).toFixed(2)} m`, "g = 9,8 m/s2", "dasar", "m");
		tambah("fisika", "gerak", `Kecepatan jatuh bebas detik ke-${t}`, `v = g x ${t} = ${(9.8 * t).toFixed(2)} m/s`, "g = 9,8 m/s2", "dasar", "m/s");
	}
	for (let m = 1; m <= 15; m++) {
		tambah("fisika", "energi", `Energi kinetik massa ${m} kg kecepatan 10 m/s`, `Ek = 1/2 x ${m} x 10^2 = ${50 * m} joule`, "v = 10 m/s", "dasar", "joule");
		tambah("fisika", "gravitasi", `Gaya berat massa ${m} kg`, `w = ${m} x 9,8 = ${(m * 9.8).toFixed(1)} newton`, "g = 9,8 m/s2", "dasar", "newton");
	}
	for (let n = 2; n <= 12; n++) {
		tambah("fisika", "listrik", `Kapasitor seri ${n} komponen`, `1/Ctot = 1/C1 + 1/C2 + ... + 1/C${n}`, "n kapasitor", "menengah");
		tambah("fisika", "listrik", `Kapasitor paralel ${n} komponen`, `Ctot = C1 + C2 + ... + C${n}`, "n kapasitor", "menengah");
	}

	// Biologi: pembelahan dan populasi
	for (let n = 1; n <= 30; n++) {
		tambah("biologi", "sel", `Jumlah sel setelah ${n} pembelahan`, `N = 2^${n} = ${2 ** n} sel`, "mitosis", "dasar");
	}
	for (let n = 1; n <= 12; n++) {
		tambah("biologi", "ekologi", `Pertumbuhan eksponensial tahun ${n}`, `N = N0 e^(r x ${n})`, "r = laju", "menengah");
	}

	// Geografi: ketinggian dan suhu, kepadatan
	for (let lintang = 0; lintang <= 90; lintang += 10) {
		tambah("geografi", "astronomi", `Sudut matahari lintang ${lintang} derajat`, `kosinus zenith = sin(${lintang}) sin(delta) + cos(${lintang}) cos(delta) cos(H)`, "H = sudut jam", "lanjut");
	}
	for (let n = 1; n <= 20; n++) {
		tambah("geografi", "hidrologi", `Debit sungai luas ${n} meter persegi`, `Q = ${n} x v`, "v = kecepatan air", "dasar", "m3/s");
	}

	// Teknik: resistor, kapasitor, daya
	for (let n = 2; n <= 20; n++) {
		tambah("teknik", "rangkaian", `Resistansi seri ${n} ohm`, `Rtot = R1 + ... + R${n}`, "n resistor", "dasar", "ohm");
		tambah("teknik", "rangkaian", `Kapasitansi paralel ${n} komponen`, `Ctot = C1 + ... + C${n}`, "n kapasitor", "dasar", "farad");
	}
	for (const v of [110, 220, 380]) {
		tambah("teknik", "daya", `Daya pada ${v} volt`, `P = ${v} x I`, "I = arus", "dasar", "watt");
	}

	// Komputer: biner 0 sampai 63 dan pangkat dua
	for (let n = 0; n <= 63; n++) {
		tambah("komputer", "bilangan", `Biner dari ${n}`, `${n} = ${n.toString(2)}`, "desimal ke biner", "dasar");
	}
	for (let n = 1; n <= 20; n++) {
		tambah("komputer", "kompleksitas", `log2 dari 2 pangkat ${n}`, `log2(2^${n}) = ${n}`, "basis dua", "dasar");
	}

	// Statistika dan peluang lanjutan
	for (let n = 5; n <= 20; n++) {
		tambah("statistika", "kombinasi", `Kombinasi ${n} ambil 3`, `C(${n},3) = ${Math.round((n * (n - 1) * (n - 2)) / 6)}`, "n objek", "dasar");
		tambah("peluang", "binomial", `Binomial ${n} sukses dua`, `P(X=2) = C(${n},2) p^2 (1-p)^(${n}-2)`, "p = peluang", "menengah");
	}
	for (let k = 0; k <= 10; k++) {
		tambah("peluang", "poisson", `Poisson lambda 5 k=${k}`, `P(X=${k}) = e^(-5) 5^${k}/${k}!`, "lambda = 5", "menengah");
	}

	// Matriks dan vektor contoh
	for (let n = 1; n <= 15; n++) {
		tambah("matriks", "contoh", `Invers [[${n},1],[1,2]]`, `inv = (1/(${2 * n - 1})) [[2,-1],[-1,${n}]]`, `determinan ${2 * n - 1}`, "menengah");
	}
	const vektorContoh = [[1, 2, 3], [4, 5, 6], [2, 0, 1], [1, 1, 1], [3, 4, 0], [0, 5, 12], [6, 8, 10], [2, 3, 6], [7, 24, 0], [1, 0, 0]];
	for (const [a, b, c] of vektorContoh) {
		tambah("vektor", "contoh", `Dot (${a},${b},${c}) dengan (1,2,3)`, `dot = ${a} + ${2 * b} + ${3 * c} = ${a + 2 * b + 3 * c}`, "tiga dimensi", "dasar");
		tambah("vektor", "contoh", `Panjang (${a},${b},${c})`, `akar(${a}^2+${b}^2+${c}^2) = akar(${a * a + b * b + c * c})`, "tiga dimensi", "dasar");
	}

	// Sistem bilangan: konversi 1 sampai 50
	for (let n = 1; n <= 50; n++) {
		tambah("sistem bilangan", "konversi", `Desimal ${n} ke biner`, `${n} = ${n.toString(2)}`, "basis dua", "dasar");
		tambah("sistem bilangan", "konversi", `Desimal ${n} ke heksadesimal`, `${n} = ${n.toString(16).toUpperCase()}`, "basis enam belas", "dasar");
	}

	// Kesehatan dan musik lanjutan
	for (let berat = 45; berat <= 95; berat += 5) {
		tambah("kesehatan", "gizi", `Air untuk ${berat} kg`, `${berat} x 30 = ${berat * 30} ml`, "perkiraan", "dasar", "ml");
	}
	for (let n = 24; n <= 108; n++) {
		tambah("musik", "nada", `Frekuensi MIDI ${n}`, `f = 440 x 2^((${n} - 69)/12)`, "A4 = 440 Hz", "menengah", "Hz");
	}
}
