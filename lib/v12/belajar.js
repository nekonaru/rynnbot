// Belajar v12: kartu harian, kuis adaptif, peta materi, dan rangkuman catatan.

export function kartuHarian(kartu, sekarang = Date.now()) {
	if (!Array.isArray(kartu) || !kartu.length) return null;
	const indeks = Math.floor(sekarang / 86400000) % kartu.length;
	return kartu[indeks];
}

export function kuisAdaptif(soal, skor = 0) {
	if (!Array.isArray(soal) || !soal.length) return null;
	const indeks = Math.min(soal.length - 1, Math.floor(skor / 3));
	return soal[indeks];
}

export function petaMateri(soal) {
	return Object.entries(soal || {}).map(([kategori, daftar]) => ({
		kategori,
	jumlah: Array.isArray(daftar) ? daftar.length : 0,
	}));
}

export function formatPeta(entri) {
	return entri.map((e) => `- ${e.kategori}: ${e.jumlah} soal`).join("\n");
}

export function rangkumCatatan(catat, batas = 5) {
	const list = Array.isArray(catat)
		? catat
		: Object.entries(catat || {}).map(([judul, isi]) => `${judul}: ${isi}`);
	return list.slice(-batas).map((c) => typeof c === "string" ? c : (c.isi || "")).filter(Boolean);
}
