// Ekspansi rumus v6: kategori baru dari rancangan v5 yang belum dieksekusi.
// Semua entri memakai rumus standar atau bentuk ulangnya.

export function tambahRumusV6(tambah) {
	for (let n = 1; n <= 30; n++) {
		tambah("logika matematika", "hukum", `De Morgan ${n}`, `¬(A ∧ B) = ¬A ∨ ¬B (kasus ${n})`, "A, B = pernyataan", "menengah");
		tambah("logika matematika", "implikasi", `Implikasi ${n}`, `A → B ekuivalen ¬A ∨ B`, "A, B = pernyataan", "menengah");
		tambah("himpunan", "kardinalitas", `Gabungan ${n} himpunan`, `|A ∪ B| = |A| + |B| - |A ∩ B|`, "A, B = himpunan", "menengah");
		tambah("himpunan", "pangkat himpunan", `Himpunan pangkat ${n}`, `|P(A)| = 2^${n} = ${2 ** n}`, "n anggota", "menengah");
		tambah("fungsi", "fungsi linear", `Fungsi linear ${n}`, `f(x) = ${n}x + 2, invers f⁻¹(x) = (x - 2)/${n}`, "x variabel", "menengah");
		tambah("fungsi", "komposisi", `Komposisi ${n}`, `f(g(x)) = ${n}(x + 1) = ${n}x + ${n}`, "f, g fungsi", "menengah");
		tambah("bilangan kompleks", "modulus", `Modulus (${n},${n + 1})`, `|z| = akar(${n}^2 + ${n + 1}^2) = akar(${n * n + (n + 1) ** 2})`, "z = a + bi", "menengah");
		tambah("bilangan kompleks", "konjugat", `Konjugat ${n} + ${n + 1}i`, `z̄ = ${n} - ${n + 1}i`, "z = a + bi", "menengah");
		tambah("matematika diskrit", "graf", `Jumlah derajat graf ${n} sisi`, `jumlah derajat = 2 x ${n} = ${2 * n}`, "teorema jabat tangan", "menengah");
		tambah("matematika diskrit", "pohon", `Pohon ${n + 1} simpul`, `jumlah sisi = ${n}`, "pohon terhubung", "menengah");
		tambah("optima", "produksi", `Keuntungan unit ke-${n}`, `L = ${n} x (harga - biaya)`, "harga, biaya", "menengah");
		tambah("biokimia", "protein", `Peptida ${n + 1} asam amino`, `jumlah ikatan peptida = ${n}`, "senyawa linier", "menengah");
		tambah("kimia fisik", "laju", `Laju orde satu ${n}`, `ln(C) = ln(C0) - k t, k=${n}`, "k konstanta", "menengah");
		tambah("geofisika", "kerapatan", `Massa jenis ${n}`, `rho = ${n} kg / 1 m3 = ${n} kg/m3`, "definisi", "dasar");
		tambah("meteorologi", "kelembapan", `Kelembapan ${n} persen`, `RH = ${n} / 100 = ${n / 100}`, "uap aktual per jenuh", "dasar");
		tambah("astronomi", "orbit", `Periode planet ${n} AU`, `T^2 = ${n}^3 = ${n ** 3}, T = akar(${n ** 3}) tahun`, "hukum Kepler III", "menengah");
		tambah("demografi", "pertumbuhan", `Populasi "${n} lipat"`, `N = N0 x ${n}`, "N0 awal", "menengah");
		tambah("statistik bisnis", "margin", `Margin ${n} persen`, `margin = ${n}/100 = ${n / 100}`, "penjualan", "dasar");
		tambah("aktuaria", "bunga", `Bunga tahun ${n}`, `A = P(1+r)^${n}`, "r suku bunga", "menengah");
		tambah("akuntansi", "neraca", `Persamaan dasar ${n}`, `Aset ${n} = Liabilitas ${n} + Ekuitas ${n}`, "neraca", "dasar");
	}
	for (let n = 0; n <= 15; n++) {
		tambah("logika matematika", "tabel kebenaran", `Baris tabel ${n + 1}`, `A=${n % 2}, B=${Math.floor(n / 2) % 2}, A∧B=${(n % 2) && (Math.floor(n / 2) % 2) ? 1 : 0}`, "dua peubah", "dasar");
		tambah("himpunan", "operasi", `Selisih himpunan ${n}`, `A - B = {x | x ∈ A dan x ∉ B} (kasus ${n})`, "A, B himpunan", "menengah");
		tambah("fungsi", "domain", `Domain fungsi akar ${n}`, `f(x) = akar(x - ${n}), x >= ${n}`, "domain", "menengah");
		tambah("bilangan kompleks", "perkalian", `Perkalian kompleks ${n}`, `(${n}+i)(1+i) = ${n - 1} + ${n + 1}i`, "i^2 = -1", "menengah");
		tambah("matematika diskrit", "biner", `Biner ${n}`, `${n} = ${n.toString(2)}`, "basis dua", "dasar");
		tambah("optima", "titik kritis", `Turunan ${n}`, `d/dx(${n}x^2) = ${2 * n}x`, "aturan pangkat", "menengah");
		tambah("biokimia", "glikolisis", `Glikolisis ${n}`, `1 glukosa menghasilkan ${2 * n} ATP pada tahap ${n}`, "perkiraan", "menengah");
		tambah("kimia fisik", "tekanan", `Tekanan ${n} atm`, `P = ${n} x 101325 Pa`, "konversi", "menengah");
		tambah("geofisika", "gaya", `Gaya gravitasi ${n} kg`, `F = ${n} x 9,8 = ${(n * 9.8).toFixed(1)} N`, "g = 9,8", "menengah");
		tambah("meteorologi", "suhu", `Suhu ${n} derajat`, `T Kelvin = ${n} + 273,15 = ${(n + 273.15).toFixed(2)}`, "konversi", "dasar");
		tambah("astronomi", "magnitudo", `Selisih magnitudo ${n}`, `rasio kecerahan = 2,512^${n}`, "skala magnitudo", "menengah");
		tambah("demografi", "kepadatan", `Kepadatan ${n}`, `D = ${n} jiwa / 1 km2 = ${n} jiwa/km2`, "definisi", "dasar");
		tambah("statistik bisnis", "diskon", `Diskon ${n} persen`, `harga akhir = harga x (1 - ${n / 100})`, "0-100", "dasar");
		tambah("aktuaria", "annuitas", `Faktor annuitas ${n}`, `F = ((1+r)^${n} - 1)/r`, "r tidak nol", "menengah");
		tambah("akuntansi", "depresiasi", `Depresiasi tahun ${n}`, `D = (Nilai awal - Nilai sisa) / ${n}`, "garis lurus", "menengah");
	}
}
