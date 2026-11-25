// Pola bilangan dalam Bahasa Indonesia: bilangan bulat 0-999999999999
// dan pecahan desimal. Murni lokal, tanpa API.

const SATU = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
const PULUH = ["", "", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"];

const diBawahSeribu = (n) => {
	const bagian = [];
	if (n >= 100) {
		if (n < 200) {
			bagian.push("seratus");
			n -= 100;
		} else {
			bagian.push(SATU[Math.floor(n / 100)] + " ratus");
			n %= 100;
		}
	}	if (n >= 20) {
		bagian.push(PULUH[Math.floor(n / 10)]);
		n %= 10;
	}
	if (n > 0) {
		if (bagian.length > 0) bagian.push("");
		bagian.push(SATU[n]);
	}
	return bagian.join(" ").trim();
};

export const kataBilangan = (nilai) => {
	const n = Number(nilai);
	if (!Number.isFinite(n) || n < 0 || n > 999999999999) return null;
	const bulat = Math.floor(n);
	if (bulat === 0) return "nol";
	const satuan = ["", "ribu", "juta", "miliar"];
	const bagian = [];
	let sisa = bulat;
	let idx = 0;
	while (sisa > 0) {
		const potong = sisa % 1000;
		if (potong > 0) {
			let teks = potong === 1 && idx > 0 ? "satu" : diBawahSeribu(potong);
			if (idx === 1 && potong === 1) teks = "seribu";
			bagian.unshift((teks + (satuan[idx] ? (teks === "seribu" ? "" : " " + satuan[idx]) : "")).trim());
		}
		sisa = Math.floor(sisa / 1000);
		idx++;
	}
	return bagian.join(" ").replace(/\s+/g, " ").trim();
};

export const ucapanWaktu = (jam = new Date().getHours()) => {
	if (!Number.isInteger(jam) || jam < 0 || jam > 23) return null;
	if (jam < 11) return "Selamat pagi";
	if (jam < 15) return "Selamat siang";
	if (jam < 18) return "Selamat sore";
	return "Selamat malam";
};

export const hurufKe = (n) => {
	if (!Number.isInteger(n) || n < 1 || n > 26) return null;
	return String.fromCharCode(64 + n);
};

export const angkaKeHuruf = (s) => {
	const teks = String(s || "").trim().toLowerCase();
	if (!/^[a-z]$/.test(teks)) return null;
	return teks.charCodeAt(0) - 96;
};
