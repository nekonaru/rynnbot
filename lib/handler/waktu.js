// Kategori perhitungan waktu.

export function detailUmur(tanggal, sekarang = Date.now()) {
	const d = new Date(tanggal);
	if (isNaN(d.getTime()) || d.getTime() > sekarang) return null;
	let ms = sekarang - d.getTime();
	const tahun = Math.floor(ms / (365.25 * 86400000));
	ms -= tahun * 365.25 * 86400000;
	const bulan = Math.floor(ms / (30.44 * 86400000));
	ms -= bulan * 30.44 * 86400000;
	const minggu = Math.floor(ms / (7 * 86400000));
	ms -= minggu * 7 * 86400000;
	const hari = Math.floor(ms / 86400000);
	return { tahun, bulan, minggu, hari };
}

export function formatUmurDetail(hasil) {
	return `*Umur Detail*\n\nTahun: ${hasil.tahun}\nBulan: ${hasil.bulan}\nMinggu: ${hasil.minggu}\nHari: ${hasil.hari}`;
}
