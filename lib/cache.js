// Cache TTL sederhana dengan batas ukuran.

const penyimpanan = new Map();

export const denganCache = (kunci, ttlMs, pembuat) => {
	const sekarang = Date.now();
	const ada = penyimpanan.get(kunci);
	if (ada && sekarang - ada.at < ttlMs) return ada.nilai;
	const nilai = pembuat();
	penyimpanan.set(kunci, { nilai, at: sekarang });
	if (penyimpanan.size > 200) {
		for (const [k, v] of penyimpanan) {
			if (sekarang - v.at > ttlMs) penyimpanan.delete(k);
		}
		if (penyimpanan.size > 200) {
			const kunciLama = penyimpanan.keys().next().value;
			if (kunciLama) penyimpanan.delete(kunciLama);
		}
	}
	return nilai;
};

export const bersihkanCache = () => penyimpanan.clear();
