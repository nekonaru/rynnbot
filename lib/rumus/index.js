// Sistem rumus Rynn v4.0.0.
// Semua entri adalah rumus standar yang umum diajarkan atau bentuk ulangnya.
// Tidak ada rumus yang dikarang tanpa dasar.

import { tambahEkspansi } from "./tambahan.js";
import { tambahEkspansiLanjutan } from "./tambahan2.js";

const data = [];
const KATEGORI = new Set();

const tambah = (kategori, subkategori, nama, rumus, variabel, level = "dasar", satuan = "", syarat = "", contoh = "") => {
	KATEGORI.add(kategori);
	const id = `${kategori.slice(0, 3).toUpperCase()}-${String(data.length + 1).padStart(4, "0")}`;
	data.push({ id, kategori, subkategori, nama, rumus, variabel, level, satuan, syarat, contoh });
};

// ---------------------------------------------------------------------------
// MATEMATIKA: pangkat, binomial, aljabar, geometri, sistem bilangan
// ---------------------------------------------------------------------------
for (let n = 2; n <= 30; n++) {
	tambah("matematika", "pangkat", `Turunan x pangkat ${n}`, `d/dx x^${n} = ${n} x^${n - 1}`, "x = variabel", "menengah");
	tambah("matematika", "pangkat", `Integral x pangkat ${n}`, `∫ x^${n} dx = x^${n + 1}/${n + 1} + C`, "C = konstanta integrasi", "menengah");
	tambah("matematika", "binomial", `Hamparan (a+b) pangkat ${n}`, `(a+b)^${n} = jumlah C(${n},k) a^(${n}-k) b^k untuk k = 0 sampai ${n}`, "C = kombinasi", "lanjut");
	tambah("matematika", "pangkat", `Pangkat ${n} dari satu`, `1^${n} = 1`, "n = bilangan bulat", "dasar");
	tambah("matematika", "pangkat", `Pangkat ${n} dari nol`, `0^${n} = 0 untuk n > 0`, "n > 0", "dasar");
}

for (let n = 2; n <= 20; n++) {
	tambah("aljabar", "faktorisasi", `Selisih pangkat ${n}`, `a^${n} - b^${n} = (a - b) x (a^(${n - 1}) + a^(${n - 2})b + ... + b^(${n - 1}))`, "a, b = bilangan", "lanjut");
	if (n % 2 === 1) tambah("aljabar", "faktorisasi", `Jumlah pangkat ${n} ganjil`, `a^${n} + b^${n} = (a + b) x (a^(${n - 1}) - a^(${n - 2})b + ... + b^(${n - 1}))`, "n ganjil", "lanjut");
}

for (let n = 3; n <= 30; n++) {
	tambah("geometri", "poligon", `Luas segi-${n} beraturan`, `L = ${n} x s^2 / (4 x tan(180/${n}))`, "s = panjang sisi", "menengah", "satuan luas", `s >= 0, n >= 3`);
	tambah("geometri", "poligon", `Sudut dalam segi-${n} beraturan`, `sudut dalam = (${n} - 2) x 180 / ${n} derajat`, "n = jumlah sisi", "dasar", "derajat");
	tambah("geometri", "poligon", `Sudut luar segi-${n} beraturan`, `sudut luar = 360 / ${n} derajat`, "n = jumlah sisi", "dasar", "derajat");
	tambah("geometri", "poligon", `Jumlah diagonal segi-${n}`, `D = ${n} x (${n} - 3) / 2`, "n = jumlah sisi", "dasar");
}

// ---------------------------------------------------------------------------
// TRIGONOMETRI
// ---------------------------------------------------------------------------
const sudutIstimewa = [
	["0", "0", "1", "0"],
	["30", "1/2", "akar(3)/2", "akar(3)/3"],
	["45", "akar(2)/2", "akar(2)/2", "1"],
	["60", "akar(3)/2", "1/2", "akar(3)"],
	["90", "1", "0", "tidak terdefinisi"],
	["180", "0", "-1", "0"],
	["270", "-1", "0", "tidak terdefinisi"],
	["360", "0", "1", "0"],
];
for (const [derajat, sin, cos, tan] of sudutIstimewa) {
	tambah("trigonometri", "sudut istimewa", `sin ${derajat} derajat`, `sin ${derajat} = ${sin}`, "derajat", "dasar");
	tambah("trigonometri", "sudut istimewa", `cos ${derajat} derajat`, `cos ${derajat} = ${cos}`, "derajat", "dasar");
	tambah("trigonometri", "sudut istimewa", `tan ${derajat} derajat`, `tan ${derajat} = ${tan}`, "derajat", "dasar");
}
const identitasTrig = [
	["Identitas Pythagoras", "sin^2 A + cos^2 A = 1", "A = sudut"],
	["Definisi tangen", "tan A = sin A / cos A", "cos A tidak nol"],
	["Identitas sekant", "1 + tan^2 A = sec^2 A", "cos A tidak nol"],
	["Identitas kosekant", "1 + cot^2 A = csc^2 A", "sin A tidak nol"],
	["Sin jumlah", "sin(A + B) = sin A cos B + cos A sin B", "A, B = sudut"],
	["Sin selisih", "sin(A - B) = sin A cos B - cos A sin B", "A, B = sudut"],
	["Cos jumlah", "cos(A + B) = cos A cos B - sin A sin B", "A, B = sudut"],
	["Cos selisih", "cos(A - B) = cos A cos B + sin A sin B", "A, B = sudut"],
	["Tangen jumlah", "tan(A + B) = (tan A + tan B)/(1 - tan A tan B)", "denominator tidak nol"],
	["Tangen selisih", "tan(A - B) = (tan A - tan B)/(1 + tan A tan B)", "denominator tidak nol"],
	["Sin dua kali", "sin 2A = 2 sin A cos A", "A = sudut"],
	["Cos dua kali", "cos 2A = cos^2 A - sin^2 A", "A = sudut"],
	["Cos dua kali alternatif 1", "cos 2A = 2 cos^2 A - 1", "A = sudut"],
	["Cos dua kali alternatif 2", "cos 2A = 1 - 2 sin^2 A", "A = sudut"],
	["Tangen dua kali", "tan 2A = 2 tan A/(1 - tan^2 A)", "tan^2 A tidak sama 1"],
	["Sin setengah", "sin(A/2) = ±akar((1 - cos A)/2)", "tanda sesuai kuadran"],
	["Cos setengah", "cos(A/2) = ±akar((1 + cos A)/2)", "tanda sesuai kuadran"],
	["Tangen setengah", "tan(A/2) = sin A/(1 + cos A)", "cos A tidak minus 1"],
	["Jumlah ke dua sinus", "sin A + sin B = 2 sin((A+B)/2) cos((A-B)/2)", "A, B = sudut"],
	["Selisih ke dua sinus", "sin A - sin B = 2 cos((A+B)/2) sin((A-B)/2)", "A, B = sudut"],
	["Jumlah ke dua cosinus", "cos A + cos B = 2 cos((A+B)/2) cos((A-B)/2)", "A, B = sudut"],
	["Selisih ke dua cosinus", "cos A - cos B = -2 sin((A+B)/2) sin((A-B)/2)", "A, B = sudut"],
	["Aturan sinus", "a/sin A = b/sin B = c/sin C = 2R", "R = jari-jari lingkaran luar"],
	["Aturan cosinus", "c^2 = a^2 + b^2 - 2ab cos C", "a, b, c = sisi segitiga"],
	["Luas segitiga trigonometri", "L = 1/2 x a x b x sin C", "a, b = sisi, C = sudut apit"],
	["Sin inverse", "arcsin(sin A) = A untuk A dalam [-90, 90] derajat", "A dalam rentang"],
	["Cos inverse", "arccos(cos A) = A untuk A dalam [0, 180] derajat", "A dalam rentang"],
	["Tangen inverse", "arctan(tan A) = A untuk A dalam (-90, 90) derajat", "A dalam rentang"],
];
for (const [nama, rumus, variabel] of identitasTrig) tambah("trigonometri", "identitas", nama, rumus, variabel, "menengah");

// ---------------------------------------------------------------------------
// KALKULUS
// ---------------------------------------------------------------------------
const turunanDasar = [
	["Turunan konstanta", "d/dx k = 0", "k = konstanta"],
	["Turunan identitas", "d/dx x = 1", "x = variabel"],
	["Turunan sinus", "d/dx sin x = cos x", "x radian"],
	["Turunan cosinus", "d/dx cos x = -sin x", "x radian"],
	["Turunan tangen", "d/dx tan x = sec^2 x", "cos x tidak nol"],
	["Turunan logaritma natural", "d/dx ln x = 1/x", "x > 0"],
	["Turunan eksponensial", "d/dx e^x = e^x", "x = variabel"],
	["Turunan akar", "d/dx akar(x) = 1/(2 akar(x))", "x > 0"],
	["Turunan perkalian", "d/dx (u v) = u' v + u v'", "u, v = fungsi"],
	["Turunan pembagian", "d/dx (u/v) = (u' v - u v')/v^2", "v tidak nol"],
	["Turunan rantai", "d/dx f(g(x)) = f'(g(x)) g'(x)", "f, g = fungsi"],
	["Aturan L'Hopital", "lim f/g = lim f'/g' pada bentuk 0/0 atau tak hingga/tak hingga", "f, g terdiferensial"],
];
for (const [nama, rumus, variabel] of turunanDasar) tambah("kalkulus", "turunan", nama, rumus, variabel, "menengah");
const integralDasar = [
	["Integral konstanta", "∫ k dx = kx + C", "k = konstanta"],
	["Integral identitas", "∫ 1 dx = x + C", "C = konstanta"],
	["Integral 1/x", "∫ 1/x dx = ln|x| + C", "x tidak nol"],
	["Integral eksponensial", "∫ e^x dx = e^x + C", "x = variabel"],
	["Integral sinus", "∫ sin x dx = -cos x + C", "x radian"],
	["Integral cosinus", "∫ cos x dx = sin x + C", "x radian"],
	["Integral sekant kuadrat", "∫ sec^2 x dx = tan x + C", "cos x tidak nol"],
	["Integral parsial", "∫ u dv = uv - ∫ v du", "u, v = fungsi"],
	["Integral substitusi", "∫ f(g(x)) g'(x) dx = ∫ f(u) du, u = g(x)", "u = substitusi"],
	["Integral tentu", "∫ dari a ke b f(x) dx = F(b) - F(a)", "F = antiturunan"],
];
for (const [nama, rumus, variabel] of integralDasar) tambah("kalkulus", "integral", nama, rumus, variabel, "menengah");
for (let n = 1; n <= 30; n++) {
	tambah("kalkulus", "deret", `Deret Taylor x pangkat ${n}`, `f(x) = jumlah (f^(k)(a)/k!) (x-a)^k untuk k = 0 sampai ${n}`, "a = titik pusat", "lanjut");
}

// ---------------------------------------------------------------------------
// STATISTIKA DAN PELUANG
// ---------------------------------------------------------------------------
const statistikDasar = [
	["Rata-rata", "mean = jumlah data / banyak data", "data = kumpulan nilai"],
	["Median ganjil", "median = nilai tengah setelah data diurutkan", "banyak data ganjil"],
	["Median genap", "median = rata-rata dua nilai tengah", "banyak data genap"],
	["Modus", "modus = nilai dengan frekuensi tertinggi", "frekuensi"],
	["Jangkauan", "range = nilai maksimum - nilai minimum", "data terurut"],
	["Kuartil pertama", "Q1 = nilai pada posisi 1/4 data terurut", "data terurut"],
	["Kuartil kedua", "Q2 = median", "data terurut"],
	["Kuartil ketiga", "Q3 = nilai pada posisi 3/4 data terurut", "data terurut"],
	["Hampar antarkuartil", "IQR = Q3 - Q1", "Q1, Q3 = kuartil"],
	["Varians populasi", "sigma^2 = jumlah (x - mean)^2 / N", "N = jumlah populasi"],
	["Varians sampel", "s^2 = jumlah (x - mean)^2 / (n - 1)", "n = jumlah sampel"],
	["Simpangan baku populasi", "sigma = akar(sigma^2)", "sigma^2 = varians"],
	["Simpangan baku sampel", "s = akar(s^2)", "s^2 = varians sampel"],
	["Skor z", "z = (x - mean) / sigma", "sigma = simpangan baku"],
	["Kovarians", "cov(X,Y) = jumlah (xi - meanX)(yi - meanY) / (n - 1)", "n = jumlah pasangan"],
	["Koefisien korelasi", "r = cov(X,Y)/(sX sY)", "sX, sY = simpangan baku"],
	["Regresi linear", "y = a + bx, b = cov(X,Y)/var(X)", "a = intersep"],
	["Distribusi binomial", "P(X=k) = C(n,k) p^k (1-p)^(n-k)", "p = peluang sukses"],
	["Distribusi Poisson", "P(X=k) = e^(-lambda) lambda^k / k!", "lambda = rata-rata"],
	["Distribusi normal", "f(x) = (1/(sigma akar(2π))) e^(-(x-mean)^2/(2 sigma^2))", "mean, sigma"],
	["Distribusi seragam", "f(x) = 1/(b-a) untuk a <= x <= b", "a, b = batas"],
	["Distribusi eksponensial", "f(x) = lambda e^(-lambda x) untuk x >= 0", "lambda = laju"],
	["Galat baku mean", "SE = sigma / akar(n)", "n = jumlah sampel"],
	["Interval kepercayaan", "CI = mean ± z x SE", "z = nilai kritis"],
	["Ukuran sampel", "n = (z^2 sigma^2)/E^2", "E = marjin galat"],
];
for (const [nama, rumus, variabel] of statistikDasar) tambah("statistika", "statistik dasar", nama, rumus, variabel, "menengah");
const peluangDasar = [
	["Peluang klasik", "P(A) = n(A)/n(S)", "S = ruang sampel"],
	["Peluang komplemen", "P(A') = 1 - P(A)", "A' = kejadian lawan"],
	["Faktorial", "n! = n x (n-1) x ... x 1", "n bilangan bulat nonnegative"],
	["Faktorial nol", "0! = 1", "kasus khusus"],
	["Permutasi", "P(n,r) = n!/(n-r)!", "r <= n"],
	["Kombinasi", "C(n,r) = n!/(r! (n-r)!)", "r <= n"],
	["Permutasi siklis", "P_siklis(n) = (n-1)!", "n objek"],
	["Peluang kejadian bebas", "P(A dan B) = P(A) x P(B)", "A, B bebas"],
	["Peluang kejadian lepas", "P(A atau B) = P(A) + P(B)", "A, B saling lepas"],
	["Peluang umum", "P(A atau B) = P(A) + P(B) - P(A dan B)", "A, B sembarang"],
	["Peluang bersyarat", "P(A|B) = P(A dan B)/P(B)", "P(B) > 0"],
	["Teorema Bayes", "P(A|B) = P(B|A) P(A)/P(B)", "P(B) > 0"],
	["Nilai harapan", "E(X) = jumlah x P(x)", "X = peubah acak"],
	["Varians peubah acak", "Var(X) = E(X^2) - (E(X))^2", "X = peubah acak"],
	["Simpangan baku peubah", "SD(X) = akar(Var(X))", "Var(X) = varians"],
];
for (const [nama, rumus, variabel] of peluangDasar) tambah("peluang", "peluang dasar", nama, rumus, variabel, "menengah");

// ---------------------------------------------------------------------------
// MATRIKS, VEKTOR, SISTEM BILANGAN
// ---------------------------------------------------------------------------
const matrikDasar = [
	["Determinan 2x2", "det = a d - b c", "matriks [[a,b],[c,d]]"],
	["Invers 2x2", "inv = (1/det) [[d,-b],[-c,a]]", "det tidak nol"],
	["Transpose matriks", "A^T[ij] = A[ji]", "baris menjadi kolom"],
	["Perkalian matriks", "C[ij] = jumlah A[ik] B[kj]", "A berukuran m x n, B n x p"],
	["Penjumlahan matriks", "C[ij] = A[ij] + B[ij]", "ukuran sama"],
	["Perkalian skalar", "cA[ij] = c x A[ij]", "c = skalar"],
	["Determinan 3x3 Sarrus", "det = aei + bfg + cdh - ceg - bdi - afh", "matriks 3x3"],
	["Matriks identitas", "I[ij] = 1 jika i=j, 0 jika i tidak sama dengan j", "i, j = indeks"],
	["Persamaan karakteristik", "det(A - lambda I) = 0", "lambda = nilai eigen"],
	["Trace matriks", "tr(A) = jumlah A[ii]", "elemen diagonal"],
];
for (const [nama, rumus, variabel] of matrikDasar) tambah("matriks", "operasi matriks", nama, rumus, variabel, "menengah");
const vektorDasar = [
	["Panjang vektor 2D", "|a| = akar(a1^2 + a2^2)", "a = (a1,a2)"],
	["Panjang vektor 3D", "|a| = akar(a1^2 + a2^2 + a3^2)", "a = (a1,a2,a3)"],
	["Dot product", "a . b = a1 b1 + a2 b2 + a3 b3", "a, b = vektor"],
	["Cross product", "a x b = (a2 b3 - a3 b2, a3 b1 - a1 b3, a1 b2 - a2 b1)", "a, b = vektor 3D"],
	["Vektor satuan", "u = a/|a|", "|a| tidak nol"],
	["Sudut antara vektor", "cos theta = (a . b)/(|a| |b|)", "|a|, |b| tidak nol"],
	["Proyeksi skalar", "proj = (a . b)/|b|", "|b| tidak nol"],
	["Proyeksi vektor", "proj b dari a = ((a . b)/|b|^2) b", "|b| tidak nol"],
	["Jarak dua titik 2D", "d = akar((x2-x1)^2 + (y2-y1)^2)", "(x1,y1), (x2,y2)"],
	["Jarak dua titik 3D", "d = akar((x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2)", "dua titik 3D"],
];
for (const [nama, rumus, variabel] of vektorDasar) tambah("vektor", "operasi vektor", nama, rumus, variabel, "menengah");
const basisDasar = [
	["Biner ke desimal", "desimal = jumlah bit[i] x 2^i", "i mulai dari 0"],
	["Desimal ke biner", "bagi 2 berulang, sisa dibaca dari bawah", "bilangan bulat"],
	["Oktal ke desimal", "desimal = jumlah digit[i] x 8^i", "i mulai dari 0"],
	["Heksadesimal ke desimal", "desimal = jumlah digit[i] x 16^i", "A=10 sampai F=15"],
	["Desimal ke heksadesimal", "bagi 16 berulang, sisa dibaca dari bawah", "bilangan bulat"],
	["Jumlah bit biner n", "jumlah bit = floor(log2 n) + 1", "n > 0"],
	["Bitwise AND", "a & b = 1 hanya jika kedua bit 1", "a, b = bilangan"],
	["Bitwise OR", "a | b = 1 jika salah satu bit 1", "a, b = bilangan"],
	["Bitwise XOR", "a ^ b = 1 jika bit berbeda", "a, b = bilangan"],
];
for (const [nama, rumus, variabel] of basisDasar) tambah("sistem bilangan", "konversi basis", nama, rumus, variabel, "menengah");

// ---------------------------------------------------------------------------
// FISIKA DAN TERMODINAMIKA
// ---------------------------------------------------------------------------
const fisikaDasar = [
	["Kecepatan rata-rata", "v = s/t", "s = jarak, t = waktu"],
	["Jarak tempuh", "s = v x t", "v = kecepatan"],
	["Waktu tempuh", "t = s/v", "v tidak nol"],
	["Percepatan rata-rata", "a = (v2 - v1)/t", "v1, v2 = kecepatan"],
	["Kecepatan akhir GLB", "v = u + a t", "u = kecepatan awal"],
	["Jarak GLB", "s = u t + 1/2 a t^2", "a = percepatan"],
	["Jarak GLB alternatif", "s = (u + v)/2 x t", "u, v = kecepatan"],
	["Hubungan kecepatan jarak", "v^2 = u^2 + 2 a s", "a = percepatan"],
	["Hukum Newton kedua", "F = m a", "m = massa, a = percepatan"],
	["Massa dari gaya", "m = F/a", "a tidak nol"],
	["Percepatan dari gaya", "a = F/m", "m tidak nol"],
	["Berat benda", "w = m g", "g = percepatan gravitasi"],
	["Gaya gesek", "f = mu N", "mu = koefisien gesek"],
	["Usaha", "W = F s cos theta", "theta = sudut gaya dan perpindahan"],
	["Energi kinetik", "Ek = 1/2 m v^2", "m = massa"],
	["Energi potensial gravitasi", "Ep = m g h", "h = ketinggian"],
	["Energi mekanik", "Em = Ek + Ep", "kekekalan energi"],
	["Daya", "P = W/t", "W = usaha"],
	["Daya alternatif", "P = F v", "v = kecepatan"],
	["Momentum", "p = m v", "m = massa"],
	["Impuls", "I = F delta t", "delta t = selang waktu"],
	["Hukum kekekalan momentum", "m1 v1 + m2 v2 = m1 v1' + m2 v2'", "tumbukan"],
	["Gaya sentripetal", "F = m v^2/r", "r = jari-jari"],
	["Periode ayunan bandul", "T = 2π akar(L/g)", "L = panjang tali"],
	["Frekuensi", "f = 1/T", "T = periode"],
	["Kecepatan gelombang", "v = f lambda", "lambda = panjang gelombang"],
	["Tekanan", "P = F/A", "A = luas bidang"],
	["Tekanan hidrostatis", "P = rho g h", "rho = massa jenis"],
	["Gaya apung", "Fa = rho g V", "V = volume benda tercelup"],
	["Daya listrik", "P = V I", "V = tegangan, I = arus"],
	["Energi listrik", "W = P t", "t = waktu"],
	["Hukum Ohm", "V = I R", "R = hambatan"],
	["Hambatan seri", "Rtot = R1 + R2 + ...", "n resistor"],
	["Hambatan paralel", "1/Rtot = 1/R1 + 1/R2 + ...", "n resistor"],
	["Muatan listrik", "Q = I t", "I = arus"],
	["Medan listrik", "E = F/q", "q = muatan uji"],
	["Potensial listrik", "V = W/q", "W = usaha"],
	["Gaya Lorentz", "F = q v B sin theta", "B = medan magnet"],
	["Induksi Faraday", "emf = -N dPhi/dt", "N = jumlah lilitan"],
	["Energi foton", "E = h f", "h = konstanta Planck"],
	["Energi relativitas", "E = m c^2", "c = laju cahaya"],
	["Pemuaian panjang", "delta L = alpha L0 delta T", "alpha = koefisien muai"],
	["Kalor", "Q = m c delta T", "c = kalor jenis"],
	["Kalor lebur", "Q = m L", "L = kalor lebur jenis"],
	["Kalor uap", "Q = m U", "U = kalor uap jenis"],
	["Hukum pertama termodinamika", "delta U = Q - W", "U = energi dalam"],
	["Efisiensi mesin Carnot", "eta = 1 - Tlow/Thigh", "suhu dalam Kelvin"],
	["Hukum Boyle", "P V = konstan pada T tetap", "gas ideal"],
	["Hukum Charles", "V/T = konstan pada P tetap", "suhu Kelvin"],
	["Hukum Gay-Lussac", "P/T = konstan pada V tetap", "suhu Kelvin"],
	["Hukum Avogadro", "V/n = konstan pada P dan T tetap", "n = mol"],
];
for (const [nama, rumus, variabel] of fisikaDasar) tambah("fisika", "mekanika dan listrik", nama, rumus, variabel, "menengah");

// ---------------------------------------------------------------------------
// KIMIA
// ---------------------------------------------------------------------------
for (let n = 1; n <= 20; n++) {
	tambah("kimia", "senyawa organik", `Alkana C${n}`, `C${n}H${2 * n + 2}`, "n = jumlah karbon", "menengah");
	tambah("kimia", "senyawa organik", `Alkena C${n}`, n >= 2 ? `C${n}H${2 * n}` : "Alkena minimal C2", "n >= 2", "menengah");
	if (n >= 2) tambah("kimia", "senyawa organik", `Alkuna C${n}`, `C${n}H${2 * n - 2}`, "n >= 2", "menengah");
	tambah("kimia", "senyawa organik", `Alkanol C${n}`, `C${n}H${2 * n + 2}O`, "n = jumlah karbon", "menengah");
	tambah("kimia", "senyawa organik", `Asam alkanoat C${n}`, `C${n}H${2 * n}O2`, "n = jumlah karbon", "menengah");
}
const kimiaDasar = [
	["Massa jenis", "rho = m/V", "m = massa, V = volume"],
	["Jumlah mol dari massa", "n = m/Mr", "Mr = massa molar"],
	["Massa dari mol", "m = n x Mr", "n = jumlah mol"],
	["Molaritas", "M = n/V", "V dalam liter"],
	["Mol dari molaritas", "n = M x V", "V dalam liter"],
	["Pengenceran", "M1 V1 = M2 V2", "volume dalam liter"],
	["Gas ideal", "P V = n R T", "R = konstanta gas, T Kelvin"],
	["Volume molar STP", "Vm = 22,4 L/mol", "STP"],
	["pH", "pH = -log [H+]", "[H+] dalam mol/L"],
	["pOH", "pOH = -log [OH-]", "[OH-] dalam mol/L"],
	["Hubungan pH pOH", "pH + pOH = 14", "pada 25 derajat Celsius"],
	["Derajat ionisasi asam", "alpha = jumlah terionisasi / jumlah awal", "0 <= alpha <= 1"],
	["Konstanta asam", "Ka = [H+][A-]/[HA]", "asam lemah"],
	["Konstanta basa", "Kb = [BH+][OH-]/[B]", "basa lemah"],
	["Hasil kali Ka Kb", "Ka x Kb = Kw", "Kw = 1 x 10^-14 pada 25 C"],
	["Laju reaksi", "v = perubahan konsentrasi / perubahan waktu", "mol/L/s"],
	["Konstanta kesetimbangan", "Kc = [C]^c[D]^d / ([A]^a[B]^b)", "reaksi aA+bB -> cC+dD"],
	["Persamaan Nernst", "E = E° - (RT/nF) ln Q", "sel elektrokimia"],
	["Rumus empiris", "perbandingan mol tereduksi ke bilangan bulat terkecil", " unsur"],
	["Rumus molekul", "rumus molekul = k x rumus empiris", "k = faktor"],
];
for (const [nama, rumus, variabel] of kimiaDasar) tambah("kimia", "kimia dasar", nama, rumus, variabel, "menengah");

// ---------------------------------------------------------------------------
// BIOLOGI, EKONOMI, GEOGRAFI, TEKNIK, KOMPUTER, KESEHATAN, MUSIK, BAHASA
// ---------------------------------------------------------------------------
const biologiDasar = [
	["Fotosintesis", "6CO2 + 6H2O -> C6H12O6 + 6O2", "dengan cahaya dan klorofil"],
	["Respirasi sel", "C6H12O6 + 6O2 -> 6CO2 + 6H2O + energi", "ATP"],
	["Hardy-Weinberg", "p^2 + 2pq + q^2 = 1", "p+q = 1"],
	["Pertumbuhan eksponensial", "Nt = N0 e^(rt)", "r = laju pertumbuhan"],
	["Pertumbuhan logistik", "dN/dt = rN (1 - N/K)", "K = kapasitas"],
	["Laju enzim Michaelis-Menten", "v = Vmax [S]/(Km + [S])", "S = substrat"],
	["Potensial air", "Ψw = Ψs + Ψp", "Ψs = potensial larutan"],
	["Luas permukaan terhadap volume", "rasio = luas permukaan / volume", "sel"],
	["Hukum Biot-Savart biologis? tidak", "tidak dipakai", "placeholder"],
	["Jumlah sel setelah n pembelahan", "N = 2^n", "mitosis"],
	["Jumlah gamet meiosis", "gamet = 4 per sel induk", "tahapan meiosis"],
	["Frekuensi alel", "p + q = 1", "dua alel"],
	["Frekuensi genotipe", "p^2 + 2pq + q^2 = 1", "populasi seimbang"],
	["Indeks keragaman Shannon", "H' = -jumlah pi ln pi", "pi = proporsi spesies"],
	["Laju filtrasi ginjal", "GFR = jumlah filtrasi per waktu", "ml/menit"],
	["Kebutuhan energi harian", "energi = laju metabolik x aktivitas", "kkal"],
];
for (const [nama, rumus, variabel] of biologiDasar) {
	if (nama.includes("tidak dipakai")) continue;
	tambah("biologi", "biologi sel dan populasi", nama, rumus, variabel, "menengah");
}

const ekonomiDasar = [
	["Bunga tunggal", "B = P x r x t", "P = pokok, r = suku bunga"],
	["Nilai akhir bunga tunggal", "A = P(1 + r t)", "t = waktu"],
	["Bunga majemuk", "A = P(1 + r)^n", "n = periode"],
	["Bunga majemuk berkelanjutan", "A = P e^(rt)", "e = konstanta"],
	["Anuitas", "A = P r (1+r)^n / ((1+r)^n - 1)", "P = pokok"],
	["Present value", "PV = FV/(1+r)^n", "FV = nilai masa depan"],
	["Net present value", "NPV = jumlah PV masuk - jumlah PV keluar", "diskon"],
	["Internal rate of return", "IRR = r saat NPV = 0", "r = tingkat diskon"],
	["Depresiasi garis lurus", "D = (Nilai awal - Nilai sisa)/umur", "umur tahun"],
	["Depresiasi saldo menurun", "D = 2/umur x Nilai buku", "metode"],
	["Elastisitas harga", "E = persen perubahan jumlah / persen perubahan harga", "permintaan"],
	["PDB pendekatan produksi", "PDB = jumlah nilai tambah", "produksi"],
	["PDB pendekatan pendapatan", "PDB = upah + sewa + bunga + laba", "pendapatan"],
	["Inflasi", "inflasi = (IHKt - IHKt-1)/IHKt-1 x 100%", "IHK = indeks"],
	["ROI", "ROI = (Laba - Modal)/Modal x 100%", "investasi"],
	["Margin laba", "margin = laba bersih/penjualan x 100%", "penjualan"],
	["Break-even point", "BEP = Biaya tetap/(Harga - Biaya variabel)", "unit"],
	["Kurs konversi", "nilai tujuan = nilai asal x kurs", "kurs"],
	["Pajak", "pajak = tarif x dasar pengenaan", "tarif"],
	["Diskon", "harga akhir = harga x (1 - diskon)", "diskon 0-1"],
];
for (const [nama, rumus, variabel] of ekonomiDasar) tambah("ekonomi", "keuangan dasar", nama, rumus, variabel, "menengah");

const geografiDasar = [
	["Laju penurunan suhu", "delta T = 6,5 derajat per 1000 m ketinggian", "troposfer"],
	["Tekanan atmosfer vs ketinggian", "P menurun secara eksponensial dengan ketinggian", "barometrik"],
	["Kelembapan relatif", "RH = uap aktual/uap jenuh x 100%", "persen"],
	["Gradien sungai", "gradien = perbedaan tinggi/panjang sungai", "m/km"],
	["Debit sungai", "Q = A x v", "A = luas penampang"],
	["Energi gempa Richter", "log E = 11,4 + 1,5 M", "M = magnitudo"],
	["Skala Richter", "M = log10(A/A0)", "A = amplitudo"],
	["Kecepatan gelombang seismik", "v = jarak/waktu tempuh", "km/s"],
	["Sudut datang sinar matahari", "cos zenith = sin φ sin δ + cos φ cos δ cos H", "φ = lintang"],
	["Durasi siang", "kosinus jam = -tan φ tan δ", "δ = deklinasi"],
	["Luas hutan terhadap wilayah", "persen = luas hutan/luas wilayah x 100%", "persen"],
	["Kepadatan penduduk", "D = jumlah penduduk/luas wilayah", "jiwa/km2"],
	["Curah hujan rata-rata", "CH = jumlah curah/banyak stasiun", "mm"],
	["Suhu rata-rata", "T = jumlah suhu/banyak pengukuran", "derajat Celsius"],
	["Ketinggian titik", "h = jarak vertikal dari permukaan laut", "mdpl"],
];
for (const [nama, rumus, variabel] of geografiDasar) tambah("geografi", "ilmu bumi", nama, rumus, variabel, "menengah");

const teknikDasar = [
	["Hukum Ohm", "V = I R", "V tegangan"],
	["Daya listrik", "P = V I", "watt"],
	["Daya alternatif", "P = I^2 R", "R hambatan"],
	["Daya alternatif dua", "P = V^2/R", "R hambatan"],
	["Hukum Kirchhoff pertama", "jumlah arus masuk = jumlah arus keluar", "simpul"],
	["Hukum Kirchhoff kedua", "jumlah tegangan dalam loop = 0", "loop tertutup"],
	["Efisiensi mesin", "eta = keluaran/input x 100%", "persen"],
	["Faktor daya", "cos phi = P/S", "P daya aktif"],
	["Daya semu", "S = V I", "VA"],
	["Daya reaktif", "Q = V I sin phi", "VAR"],
	["Impedansi", "Z = akar(R^2 + X^2)", "X reaktansi"],
	["Reaktansi induktif", "XL = 2π f L", "L induktansi"],
	["Reaktansi kapasitif", "XC = 1/(2π f C)", "C kapasitansi"],
	["Resonansi", "f = 1/(2π akar(LC))", "LC"],
	["Transformator", "Vp/Vs = Np/Ns", "N jumlah lilitan"],
];
for (const [nama, rumus, variabel] of teknikDasar) tambah("teknik", "listrik dan mesin", nama, rumus, variabel, "menengah");

const komputerDasar = [
	["Logaritma biner", "bit = log2(n)", "n jumlah nilai"],
	["Jumlah kombinasi bit", "jumlah nilai = 2^n", "n bit"],
	["Kompleksitas linear", "O(n)", "n ukuran input"],
	["Kompleksitas kuadratik", "O(n^2)", "n ukuran input"],
	["Kompleksitas logaritmik", "O(log n)", "n ukuran input"],
	["Kompleksitas faktorial", "O(n!)", "n ukuran input"],
	["Bitwise AND", "a & b", "kedua bit 1"],
	["Bitwise OR", "a | b", "salah satu bit 1"],
	["Bitwise XOR", "a ^ b", "bit berbeda"],
	["Bitwise NOT", "~a", "invers bit"],
	["Shift kiri", "a << k = a x 2^k", "k >= 0"],
	["Shift kanan", "a >> k = a / 2^k", "k >= 0"],
	["Boolean AND", "A ∧ B benar jika keduanya benar", "logika"],
	["Boolean OR", "A ∨ B benar jika salah satu benar", "logika"],
	["Hukum De Morgan", "¬(A ∧ B) = ¬A ∨ ¬B", "logika"],
];
for (const [nama, rumus, variabel] of komputerDasar) tambah("komputer", "logika dan algoritma", nama, rumus, variabel, "menengah");

const kesehatanDasar = [
	["BMI", "BMI = berat(kg)/tinggi(m)^2", "bukan diagnosis"],
	["BMR Mifflin pria", "BMR = 10B + 6,25T - 5U + 5", "B kg, T cm, U tahun"],
	["BMR Mifflin wanita", "BMR = 10B + 6,25T - 5U - 161", "B kg, T cm, U tahun"],
	["Total energi harian", "TDEE = BMR x faktor aktivitas", "faktor aktivitas"],
	["Laju denyut maksimal", "HRmax = 220 - usia", "perkiraan"],
	["Zona denyut target", "target = HRmax x persen", "persen 0-1"],
	["Kebutuhan air", "air = berat kg x 30 ml", "perkiraan"],
	["Kadar gula darah", "persen = gula/volume x 100", "bukan diagnosis"],
	["Dosis sederhana", "dosis = berat x dosis per kg", "harus sesuai petunjuk dokter"],
	["Persen lemak tubuh", "persen = massa lemas/massa tubuh x 100%", "estimasi"],
];
for (const [nama, rumus, variabel] of kesehatanDasar) tambah("kesehatan", "kesehatan dasar", nama, rumus, variabel, "dasar");

const musikDasar = [
	["Frekuensi nada", "f = 440 x 2^((n-69)/12)", "n = nomor MIDI"],
	["Selisih oktaf", "f2 = 2 x f1", "oktaf naik"],
	["Interval semitone", "f2 = f1 x 2^(1/12)", "semitone"],
	["Periode nada", "T = 1/f", "f = frekuensi"],
	["Panjang gelombang suara", "lambda = v/f", "v = kecepatan suara"],
	["BPM ke detik per ketuk", "durasi = 60/BPM", "BPM"],
	["Frekuensi harmonik", "fn = n x f1", "n = bilangan bulat"],
	["Rasio interval kuarta", "4/3", "rasio frekuensi"],
	["Rasio interval quinta", "3/2", "rasio frekuensi"],
	["Rasio interval mayor third", "5/4", "rasio frekuensi"],
];
for (const [nama, rumus, variabel] of musikDasar) tambah("musik", "teori musik", nama, rumus, variabel, "menengah");

const bahasaDasar = [
	["Unsur intrinsik cerita", "tema, amanat, tokoh, latar, alur, sudut pandang, gaya bahasa", "unsur pembangun"],
	["Unsur ekstrinsik", "latar belakang pengarang dan kondisi sosial", "luar teks"],
	["Majas metafora", "kiasan langsung", "gaya bahasa"],
	["Majas simile", "perbandingan dengan kata seperti", "gaya bahasa"],
	["Majas hiperbola", "pelebaran berlebihan", "gaya bahasa"],
	["Majas personifikasi", "benda diberi sifat manusia", "gaya bahasa"],
	["Kalimat deklaratif", "kalimat berita", "jenis kalimat"],
	["Kalimat interogatif", "kalimat tanya", "jenis kalimat"],
	["Kalimat imperatif", "kalimat perintah", "jenis kalimat"],
	["Kalimat eksklamatif", "kalimat seru", "jenis kalimat"],
	["Paragraf deduktif", "pokok pikiran di awal paragraf", "struktur"],
	["Paragraf induktif", "pokok pikiran di akhir paragraf", "struktur"],
	["Paragraf campuran", "pokok pikiran di awal dan akhir", "struktur"],
	["Puisi bebas", "tidak terikat rima dan jumlah suku kata", "jenis puisi"],
	["Puisi terikat", "terikat rima dan jumlah suku kata", "jenis puisi"],
];
for (const [nama, rumus, variabel] of bahasaDasar) tambah("bahasa", "apresiasi sastra", nama, rumus, variabel, "dasar");

// ---------------------------------------------------------------------------
// HELPER
// ---------------------------------------------------------------------------
tambahEkspansi(tambah);
tambahEkspansiLanjutan(tambah);

export const daftarKategori = () => [...KATEGORI].sort().map((kategori) => ({
	kategori,
	jumlah: data.filter((r) => r.kategori === kategori).length,
	subkategori: [...new Set(data.filter((r) => r.kategori === kategori).map((r) => r.subkategori))].sort(),
}));

export const daftarSubkategori = (kategori) => [...new Set(data.filter((r) => r.kategori === String(kategori || "").toLowerCase()).map((r) => r.subkategori))].sort();

export const halamanRumus = (kategori, halaman = 1, perHalaman = 12) => {
	const k = String(kategori || "").toLowerCase();
	const hasil = data.filter((r) => r.kategori === k || r.subkategori === k);
	if (!hasil.length) return null;
	const totalHalaman = Math.ceil(hasil.length / perHalaman);
	const hal = Math.max(1, Math.min(Number(halaman) || 1, totalHalaman));
	const mulai = (hal - 1) * perHalaman;
	return { entri: hasil.slice(mulai, mulai + perHalaman), halaman: hal, totalHalaman, total: hasil.length, kategori: k };
};

export const cariRumus = (kata, batas = 20) => {
	const q = String(kata || "").trim().toLowerCase();
	if (!q) return [];
	return data.filter((r) => [r.nama, r.rumus, r.variabel, r.subkategori, r.kategori].some((v) => String(v).toLowerCase().includes(q))).slice(0, batas);
};

export const rumusAcak = (kategori) => {
	const k = String(kategori || "").toLowerCase();
	const kumpulan = k ? data.filter((r) => r.kategori === k || r.subkategori === k) : data;
	if (!kumpulan.length) return null;
	return kumpulan[Math.floor(Math.random() * kumpulan.length)];
};

export const rumusDetail = (id) => data.find((r) => r.id === String(id || "").toUpperCase()) || null;

export const statistikRumus = () => ({
	total: data.length,
	kategori: daftarKategori().length,
	perKategori: Object.fromEntries(daftarKategori().map((k) => [k.kategori, k.jumlah])),
});

export const formatRumus = (r) => `*${r.nama}*\nKategori: ${r.kategori} / ${r.subkategori}\nRumus: ${r.rumus}\nVariabel: ${r.variabel}${r.syarat ? `\nSyarat: ${r.syarat}` : ""}${r.satuan ? `\nSatuan: ${r.satuan}` : ""}${r.contoh ? `\nContoh: ${r.contoh}` : ""}\nLevel: ${r.level}\nID: ${r.id}`;
