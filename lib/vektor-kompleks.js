// Vektor 2D/3D dan bilangan kompleks. Fungsi murni tanpa efek samping.

const bil = (arr, panjang) => Array.isArray(arr) && arr.length === panjang && arr.every((n) => Number.isFinite(n));

export const dotVektor = (a, b) => {
	if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length || a.length < 2 || a.length > 3) return null;
	if (!a.every(Number.isFinite) || !b.every(Number.isFinite)) return null;
	return a.reduce((total, v, i) => total + v * b[i], 0);
};

export const crossVektor = (a, b) => {
	if (!bil(a, 3) || !bil(b, 3)) return null;
	return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
};

export const panjangVektor = (v) => {
	if (!Array.isArray(v) || (v.length !== 2 && v.length !== 3) || !v.every(Number.isFinite)) return null;
	return Math.sqrt(v.reduce((total, n) => total + n * n, 0));
};

const pasangan = (a, b) => (bil(a, 2) && bil(b, 2) ? { a, b } : null);

export const kompleksTambah = (a, b) => (pasangan(a, b) ? [a[0] + b[0], a[1] + b[1]] : null);
export const kompleksKurang = (a, b) => (pasangan(a, b) ? [a[0] - b[0], a[1] - b[1]] : null);
export const kompleksKali = (a, b) => (pasangan(a, b) ? [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]] : null);
export const kompleksBagi = (a, b) => {
	if (!pasangan(a, b)) return null;
	const den = b[0] * b[0] + b[1] * b[1];
	if (den === 0) return null;
	return [(a[0] * b[0] + a[1] * b[1]) / den, (a[1] * b[0] - a[0] * b[1]) / den];
};
export const kompleksKonjugat = (a) => (bil(a, 2) ? [a[0], -a[1]] : null);
export const kompleksModulus = (a) => panjangVektor(a);
