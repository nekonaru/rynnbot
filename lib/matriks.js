// Operasi matriks 2x2 sederhana untuk perintah .matriks.
// Fungsi murni; input berupa empat bilangan baris demi baris: a b / c d.

const valid = (arr) => Array.isArray(arr) && arr.length === 4 && arr.every((n) => Number.isFinite(n));

export const det2 = (m) => (valid(m) ? m[0] * m[3] - m[1] * m[2] : null);

export const invers2 = (m) => {
	const d = det2(m);
	if (d === null || d === 0) return null;
	return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d];
};

export const kali2 = (a, b) => {
	if (!valid(a) || !valid(b)) return null;
	return [
		a[0] * b[0] + a[1] * b[2],
		a[0] * b[1] + a[1] * b[3],
		a[2] * b[0] + a[3] * b[2],
		a[2] * b[1] + a[3] * b[3],
	];
};

export const transpose2 = (m) => (valid(m) ? [m[0], m[2], m[1], m[3]] : null);
