// Utility lokal untuk perintah konversi & angka (tanpa API).
// Semua fungsi murni dan berbahasa Indonesia.

const ONES = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
const TEENS = ["sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];

function kataTigaDigit(n) {
	let s = "";
	const ratus = Math.floor(n / 100);
	const sisa = n % 100;
	if (ratus) s += (ratus === 1 ? "seratus" : ONES[ratus] + " ratus");
	if (sisa >= 10 && sisa < 20) {
		s += (s ? " " : "") + TEENS[sisa - 10];
	} else {
		const puluh = Math.floor(sisa / 10);
		const satuan = sisa % 10;
		if (puluh) s += (s ? " " : "") + (puluh === 1 ? "sepuluh" : ONES[puluh] + " puluh");
		if (satuan) s += (s ? " " : "") + ONES[satuan];
	}
	return s;
}

export function cap(s) {
	return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

export function angkaKeKata(n) {
	if (!Number.isFinite(n) || n < 0) return "nol";
	n = Math.floor(n);
	if (n === 0) return "nol";
	const groups = [];
	let x = n;
	while (x > 0) { groups.push(x % 1000); x = Math.floor(x / 1000); }
	const suffixes = ["", "ribu", "juta", "miliar", "triliun"];
	const parts = [];
	for (let i = groups.length - 1; i >= 0; i--) {
		if (!groups[i]) continue;
		const kata = kataTigaDigit(groups[i]);
		if (i === 1 && groups[i] === 1) { parts.push("seribu"); continue; }
		parts.push(kata + (suffixes[i] ? " " + suffixes[i] : ""));
	}
	return parts.join(" ").trim();
}

export function toRoman(n) {
	if (!Number.isInteger(n) || n < 1 || n > 3999) return null;
	const map = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
	let out = "";
	for (const [v, s] of map) while (n >= v) { out += s; n -= v; }
	return out;
}

export function fromRoman(str) {
	if (!str || !/^[IVXLCDM]+$/i.test(str)) return null;
	const val = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
	const upper = str.toUpperCase();
	let total = 0;
	for (let i = 0; i < upper.length; i++) {
		const cur = val[upper[i]];
		const next = i + 1 < upper.length ? val[upper[i + 1]] : 0;
		if (cur < next) total -= cur; else total += cur;
	}
	return total >= 1 && total <= 3999 ? total : null;
}

export function rot13(s) {
	return s.replace(/[a-zA-Z]/g, (c) => {
		const base = c <= "Z" ? 65 : 97;
		return String.fromCharCode(base + ((c.charCodeAt(0) - base + 13) % 26));
	});
}

const MORSE = {
	A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....",
	I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.",
	Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
	Y: "-.--", Z: "--..",
	"0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
	"5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
	".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--", "/": "-..-.",
	"=": "-...-", " ": "/",
};
const MORSE_INV = Object.fromEntries(Object.entries(MORSE).map(([k, v]) => [v, k]));

export function morseEncode(s) {
	return s.toUpperCase().split("").map((c) => MORSE[c] || "").filter(Boolean).join(" ");
}
export function morseDecode(s) {
	return s.trim().split(" ").map((c) => (c === "/" ? " " : MORSE_INV[c]) || "?").join("").replace(/\s+/g, " ").trim();
}

export function binaryEncode(s) {
	return Array.from(Buffer.from(s, "utf8")).map((b) => b.toString(2).padStart(8, "0")).join(" ");
}

export function binaryDecode(s) {
	const bytes = s.trim().split(/\s+/);
	if (!bytes.length || bytes.some((b) => !/^[01]{8}$/.test(b))) return null;
	return Buffer.from(bytes.map((b) => parseInt(b, 2))).toString("utf8");
}

export function hexEncode(s) {
	return Buffer.from(s, "utf8").toString("hex").match(/.{1,2}/g).join(" ");
}
export function hexDecode(s) {
	const clean = s.replace(/\s+/g, "");
	if (!/^[0-9a-fA-F]*$/.test(clean) || clean.length % 2) return null;
	return Buffer.from(clean, "hex").toString("utf8");
}

export const ZODIAC = [
	{ nama: "Capricorn", mulai: [12, 22], sampai: [1, 19], elemen: "Tanah" },
	{ nama: "Aquarius", mulai: [1, 20], sampai: [2, 18], elemen: "Udara" },
	{ nama: "Pisces", mulai: [2, 19], sampai: [3, 20], elemen: "Air" },
	{ nama: "Aries", mulai: [3, 21], sampai: [4, 19], elemen: "Api" },
	{ nama: "Taurus", mulai: [4, 20], sampai: [5, 20], elemen: "Tanah" },
	{ nama: "Gemini", mulai: [5, 21], sampai: [6, 20], elemen: "Udara" },
	{ nama: "Cancer", mulai: [6, 21], sampai: [7, 22], elemen: "Air" },
	{ nama: "Leo", mulai: [7, 23], sampai: [8, 22], elemen: "Api" },
	{ nama: "Virgo", mulai: [8, 23], sampai: [9, 22], elemen: "Tanah" },
	{ nama: "Libra", mulai: [9, 23], sampai: [10, 22], elemen: "Udara" },
	{ nama: "Scorpio", mulai: [10, 23], sampai: [11, 21], elemen: "Air" },
	{ nama: "Sagittarius", mulai: [11, 22], sampai: [12, 21], elemen: "Api" },
];

export function zodiacFor(day, month) {
	for (const z of ZODIAC) {
		const [dm, dd] = z.mulai;
		const [am, ad] = z.sampai;
		if (dm === am) { if (month === dm && day >= dd && day <= ad) return z; }
		else if (month === dm ? day >= dd : month === am ? day <= ad : false) return z;
	}
	return null;
}

const UNIT = {
	// panjang (ke meter)
	mm: 0.001, cm: 0.01, m: 1, km: 1000, inci: 0.0254, in: 0.0254, ft: 0.3048, kaki: 0.3048, mil: 1609.34,
	// berat (ke gram)
	mg: 0.001, g: 1, kg: 1000, ons: 100, pon: 453.592, lb: 453.592, ton: 1e6,
	// luas (ke m2)
	m2: 1, km2: 1e6, ha: 10000, hektar: 10000, are: 100,
	// volume (ke liter)
	ml: 0.001, l: 1, liter: 1, m3: 1000, galon: 3.78541,
};
const GROUPS = [
	["mm", "cm", "m", "km", "inci", "in", "ft", "kaki", "mil"],
	["mg", "g", "kg", "ons", "pon", "lb", "ton"],
	["m2", "km2", "ha", "hektar", "are"],
	["ml", "l", "liter", "m3", "galon"],
];
const UNIT_ALIAS = { celcius: "c", celsius: "c", fahrenheit: "f", kelvin: "k", "c": "c", "f": "f", "k": "k" };

function groupOf(u) {
	return GROUPS.find((g) => g.includes(u)) || null;
}

export function convertUnit(value, fromRaw, toRaw) {
	const from = fromRaw.toLowerCase();
	const to = toRaw.toLowerCase();
	const suhuFrom = UNIT_ALIAS[from];
	const suhuTo = UNIT_ALIAS[to];
	if (suhuFrom && suhuTo) {
		const c = suhuFrom === "c" ? value : suhuFrom === "f" ? ((value - 32) * 5) / 9 : value - 273.15;
		const out = suhuTo === "c" ? c : suhuTo === "f" ? (c * 9) / 5 + 32 : c + 273.15;
		return { ok: true, hasil: out, satuan: suhuTo.toUpperCase() };
	}
	if (!(from in UNIT) || !(to in UNIT)) return { ok: false, alasan: "satuan tidak dikenal" };
	const g1 = groupOf(from);
	const g2 = groupOf(to);
	if (!g1 || g1 !== g2) return { ok: false, alasan: "satuan beda jenis" };
	return { ok: true, hasil: (value * UNIT[from]) / UNIT[to], satuan: to };
}
