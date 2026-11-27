// Rumus geometri dasar untuk perintah .luas dan .volume.
// Semua fungsi murni; satuan mengikuti satuan input yang dipakai pengguna.

const PI = Math.PI;

const valid = (...nilai) => nilai.every((n) => Number.isFinite(n) && n >= 0);

export const luasBangun = (jenis, a, b, c) => {
	const j = String(jenis || "").toLowerCase();
	switch (j) {
		case "persegi": return valid(a) ? { hasil: a * a, rumus: "sisi x sisi", label: `sisi ${a}` } : null;
		case "persegi panjang":
		case "persegipanjang": return valid(a, b) ? { hasil: a * b, rumus: "panjang x lebar", label: `${a} x ${b}` } : null;
		case "segitiga": return valid(a, b) ? { hasil: (a * b) / 2, rumus: "1/2 x alas x tinggi", label: `alas ${a}, tinggi ${b}` } : null;
		case "lingkaran": return valid(a) ? { hasil: PI * a * a, rumus: "π x jari-jari^2", label: `jari-jari ${a}` } : null;
		case "jajargenjang": return valid(a, b) ? { hasil: a * b, rumus: "alas x tinggi", label: `alas ${a}, tinggi ${b}` } : null;
		case "trapesium": return valid(a, b, c) ? { hasil: ((a + b) * c) / 2, rumus: "1/2 x (atas + bawah) x tinggi", label: `atas ${a}, bawah ${b}, tinggi ${c}` } : null;
		case "layang-layang":
		case "belah ketupat":
		case "belahketupat": return valid(a, b) ? { hasil: (a * b) / 2, rumus: "1/2 x d1 x d2", label: `diagonal ${a} dan ${b}` } : null;
		default: return null;
	}
};

export const volumeBangun = (jenis, a, b, c) => {
	const j = String(jenis || "").toLowerCase();
	switch (j) {
		case "kubus": return valid(a) ? { hasil: a ** 3, rumus: "sisi^3", label: `sisi ${a}` } : null;
		case "balok": return valid(a, b, c) ? { hasil: a * b * c, rumus: "panjang x lebar x tinggi", label: `${a} x ${b} x ${c}` } : null;
		case "prisma": return valid(a, b) ? { hasil: a * b, rumus: "luas alas x tinggi", label: `luas alas ${a}, tinggi ${b}` } : null;
		case "silinder":
		case "tabung": return valid(a, b) ? { hasil: PI * a * a * b, rumus: "π x jari-jari^2 x tinggi", label: `jari-jari ${a}, tinggi ${b}` } : null;
		case "kerucut": return valid(a, b) ? { hasil: (PI * a * a * b) / 3, rumus: "1/3 x π x jari-jari^2 x tinggi", label: `jari-jari ${a}, tinggi ${b}` } : null;
		case "bola": return valid(a) ? { hasil: (4 * PI * a ** 3) / 3, rumus: "4/3 x π x jari-jari^3", label: `jari-jari ${a}` } : null;
		case "limas": return valid(a, b) ? { hasil: (a * b) / 3, rumus: "1/3 x luas alas x tinggi", label: `luas alas ${a}, tinggi ${b}` } : null;
		default: return null;
	}
};

// Akar persamaan kuadrat ax^2 + bx + c = 0.
export const akarKuadrat = (a, b, c) => {
	if (![a, b, c].every(Number.isFinite) || a === 0) return null;
	const norm = (x) => (Object.is(x, -0) ? 0 : x);
	const D = b * b - 4 * a * c;
	if (D > 0) {
		const akar1 = (-b + Math.sqrt(D)) / (2 * a);
		const akar2 = (-b - Math.sqrt(D)) / (2 * a);
		return { tipe: "dua", diskriminan: D, akar: [norm(akar1), norm(akar2)] };
	}
	if (D === 0) return { tipe: "satu", diskriminan: 0, akar: [norm(-b / (2 * a))] };
	return { tipe: "kompleks", diskriminan: D, real: norm(-b / (2 * a)), imajiner: norm(Math.abs(Math.sqrt(-D) / (2 * a))) };
};
