// Deret dan aljabar linear untuk perintah .deret, .linear, dan .persen.
// Fungsi murni, tanpa jaringan, tanpa efek samping.

export const deretAritmetika = (a, d, n) => {
	if (![a, d].every(Number.isFinite) || !Number.isInteger(n) || n < 1 || n > 1000) return null;
	const sukuKe = a + (n - 1) * d;
	const jumlah = (n * (2 * a + (n - 1) * d)) / 2;
	if (![sukuKe, jumlah].every(Number.isFinite)) return null;
	return { sukuKe, jumlah };
};

export const deretGeometri = (a, r, n) => {
	if (![a, r].every(Number.isFinite) || !Number.isInteger(n) || n < 1 || n > 1000) return null;
	const sukuKe = a * Math.pow(r, n - 1);
	const jumlah = r === 1 ? a * n : (a * (Math.pow(r, n) - 1)) / (r - 1);
	if (![sukuKe, jumlah].every(Number.isFinite)) return null;
	return { sukuKe, jumlah };
};

export const linearSatu = (a, b, c) => {
	if (![a, b, c].every(Number.isFinite)) return null;
	if (a === 0) return { tipe: b === c ? "identitas" : "inkonsisten", x: null };
	return { tipe: "tunggal", x: (c - b) / a };
};

export const persenDari = (bagian, total) => {
	if (!Number.isFinite(bagian) || !Number.isFinite(total) || total === 0) return null;
	return (bagian / total) * 100;
};

export const persenPerubahan = (dari, ke) => {
	if (!Number.isFinite(dari) || !Number.isFinite(ke) || dari === 0) return null;
	return ((ke - dari) / dari) * 100;
};
