// Kalkulasi utilitas murni untuk perintah: kpk, fpb, faktor, prima,
// palindrom, anagram, diskon, cicilan, bmi, jamtidur.
// Semua fungsi deterministik (kecuali password) dan tidak punya dependensi.

import crypto from "crypto";

const MAKS_BULAT = 1e12;

// Parse angka bulat 1..MAKS_BULAT. Kembalikan Number atau null kalau tidak valid.
export const parseBulat = (v) => {
	const n = Number(v);
	if (!Number.isFinite(n) || !Number.isInteger(n) || n < 1 || n > MAKS_BULAT) return null;
	return n;
};

export const gcdDua = (a, b) => {
	let x = Math.abs(a);
	let y = Math.abs(b);
	while (y !== 0) {
		const t = x % y;
		x = y;
		y = t;
	}
	return x;
};

export const fpb = (list) => list.reduce((acc, cur) => gcdDua(acc, cur));

export const kpk = (list) => {
	let acc = list[0];
	for (let i = 1; i < list.length; i++) {
		const g = gcdDua(acc, list[i]);
		const next = (acc / g) * list[i];
		if (!Number.isFinite(next) || next > Number.MAX_SAFE_INTEGER) return null;
		acc = next;
	}
	return acc;
};

// Faktorisasi prima untuk n <= MAKS_BULAT (sqrt <= 1e6, aman).
export const faktorPrima = (n) => {
	const hasil = new Map();
	let sisa = n;
	while (sisa % 2 === 0) {
		hasil.set(2, (hasil.get(2) || 0) + 1);
		sisa /= 2;
	}
	for (let p = 3; p * p <= sisa; p += 2) {
		while (sisa % p === 0) {
			hasil.set(p, (hasil.get(p) || 0) + 1);
			sisa /= p;
		}
	}
	if (sisa > 1) hasil.set(sisa, (hasil.get(sisa) || 0) + 1);
	return hasil;
};

export const isPrima = (n) => {
	if (!Number.isInteger(n) || n < 2) return false;
	if (n % 2 === 0) return n === 2;
	for (let p = 3; p * p <= n; p += 2) {
		if (n % p === 0) return false;
	}
	return true;
};

// Pembagi terkecil > 1, dipakai pesan "bukan prima karena ...".
export const pembagiTerkecil = (n) => {
	if (n % 2 === 0) return 2;
	for (let p = 3; p * p <= n; p += 2) {
		if (n % p === 0) return p;
	}
	return null;
};

const bersihkanTeks = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, "");

export const isPalindrom = (s) => {
	const t = bersihkanTeks(s);
	if (t.length < 2) return false;
	return t === [...t].reverse().join("");
};

export const isAnagram = (a, b) => {
	const x = bersihkanTeks(a);
	const y = bersihkanTeks(b);
	if (x.length < 2 || x.length !== y.length) return false;
	const sx = [...x].sort().join("");
	const sy = [...y].sort().join("");
	return sx === sy;
};

export const formatRupiah = (n) => "Rp " + Math.round(n).toLocaleString("id-ID");

export const hitungDiskon = (harga, persen) => {
	const hemat = (harga * persen) / 100;
	return { hemat, bayar: harga - hemat };
};

// Cicilan anuitas: angsuran sama setiap bulan, bunga menurun.
export const cicilanAnuitas = (pokok, bungaTahunan, bulan) => {
	const r = bungaTahunan / 100 / 12;
	const n = bulan;
	const angsuran = r === 0 ? pokok / n : (pokok * r) / (1 - Math.pow(1 + r, -n));
	const total = angsuran * n;
	return { angsuran, total, totalBunga: total - pokok };
};

// BMI standar WHO (tidak spesifik populasi Asia).
export const hitungBmi = (beratKg, tinggiCm) => {
	const tb = tinggiCm / 100;
	const nilai = beratKg / (tb * tb);
	let kategori = "Normal";
	if (nilai < 18.5) kategori = "Kurus (< 18,5)";
	else if (nilai < 25) kategori = "Normal (18,5 - 24,9)";
	else if (nilai < 30) kategori = "Kelebihan berat badan / pre-obesitas (25 - 29,9)";
	else kategori = "Obesitas (>= 30)";
	return { nilai, kategori };
};

// Posisi tidur: berangkat jam HH:MM, siklus 4/5/6 x 90 menit,
// asumsi butuh ±15 menit untuk tertidur.
export const siklusTidur = (hhmm) => {
	const m = /^([01]?\d|2[0-4])[:.]([0-5]\d)$/.exec(String(hhmm).trim());
	if (!m) return null;
	let jam = Number(m[1]);
	const menit = Number(m[2]);
	if (jam === 24 && menit !== 0) return null;
	if (jam === 24) jam = 0;
	const hasiltiduran = jam * 60 + menit + 15; // menit setelah tengah malam
	return [4, 5, 6].map((siklus) => {
		const total = hasiltiduran + siklus * 90;
		const h = Math.floor(total / 60) % 24;
		const min = total % 60;
		const bangun = String(h).padStart(2, "0") + ":" + String(min).padStart(2, "0");
		const durasiJam = Math.floor((siklus * 90) / 60);
		const durasiMenit = (siklus * 90) % 60;
		return { siklus, bangun, durasi: `${durasiJam} jam${durasiMenit ? " " + durasiMenit + " menit" : ""}` };
	});
};

export const uuidV4 = () => crypto.randomUUID();

// Akar kuadrat. Mengembalikan { eksak: boolean, hasil: number }.
export const akar = (n) => {
	if (!Number.isFinite(n) || n < 0 || n > Number.MAX_SAFE_INTEGER) return null;
	const r = Math.sqrt(n);
	return { eksak: Number.isInteger(r), hasil: r };
};

// Faktorial dengan BigInt, dibatasi 200 supaya balasan tetap wajar.
export const faktorial = (n) => {
	if (!Number.isInteger(n) || n < 0 || n > 200) return null;
	let hasil = 1n;
	for (let i = 2n; i <= BigInt(n); i++) hasil *= i;
	return hasil;
};

export const formatBigInt = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// Nomor minggu dalam tahun berjalan (ISO 8601).
export const isoWeek = (date) => {
	const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
	const dayNum = d.getUTCDay() || 7;
	d.setUTCDate(d.getUTCDate() + 4 - dayNum);
	const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
	return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};

// Selisih hari kalender antara dua tanggal (YYYY-MM-DD atau Date).
export const selisihHari = (a, b) => {
	const da = new Date(a);
	const db = new Date(b);
	if (isNaN(da.getTime()) || isNaN(db.getTime())) return null;
	const ua = Date.UTC(da.getFullYear(), da.getMonth(), da.getDate());
	const ub = Date.UTC(db.getFullYear(), db.getMonth(), db.getDate());
	return (ub - ua) / 86400000;
};

// Deret Fibonacci pertama dengan BigInt (n = 1 sampai 100).
export const fibonacci = (n) => {
	if (!Number.isInteger(n) || n < 1 || n > 100) return null;
	const hasil = [0n, 1n];
	for (let i = 2; i < n; i++) hasil.push(hasil[i - 1] + hasil[i - 2]);
	return hasil.slice(0, n);
};

// Bilangan prima dalam rentang tertutup [a, b], dibatasi 10.000 bilangan.
export const primaAntara = (a, b) => {
	if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < a || b > 1e12) return null;
	if (b - a > 10000) return null;
	const hasil = [];
	for (let n = a; n <= b; n++) if (isPrima(n)) hasil.push(n);
	return hasil;
};
