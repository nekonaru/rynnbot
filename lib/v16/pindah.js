// Portabilitas data v16. Paket disimpan lokal, bukan dikirim ke luar.

export function eksporPaket(u) {
	const isi = JSON.stringify({
		catatan: u.catatan || {},
		aset: u.aset || {},
		koleksi: u.koleksi || [],
		badge: u.badge || [],
	});
	const kode = Math.random().toString(36).slice(2, 10).toUpperCase();
	return { kode, ukuran: isi.length, data: isi.slice(0, 20000), at: Date.now() };
}

export function simpanPaket(u, paket) {
	u.paketData = u.paketData || [];
	u.paketData.push(paket);
	u.paketData = u.paketData.slice(-5);
	return u.paketData;
}

export function ambilPaket(u, kode) {
	return (u.paketData || []).find((p) => p.kode === String(kode || "").toUpperCase()) || null;
}

export function imporPaket(u, paket) {
	if (!paket) return false;
	try {
		const isi = JSON.parse(paket.data);
		u.catatan = { ...(u.catatan || {}), ...(isi.catatan || {}) };
		u.aset = { ...(u.aset || {}), ...(isi.aset || {}) };
		u.koleksi = [...new Set([...(u.koleksi || []), ...(isi.koleksi || [])])].slice(-50);
		u.badge = [...new Set([...(u.badge || []), ...(isi.badge || [])])].slice(-20);
		return true;
	} catch {
		return false;
	}
}

export function bandingPaket(u, paket) {
	if (!paket) return null;
	const isi = JSON.parse(paket.data);
	return {
		catatanLokal: Object.keys(u.catatan || {}).length,
		catatanPaket: Object.keys(isi.catatan || {}).length,
		asetLokal: Object.keys(u.aset || {}).length,
		asetPaket: Object.keys(isi.aset || {}).length,
	};
}

export function hapusPaket(u, kode) {
	const sebelum = (u.paketData || []).length;
	u.paketData = (u.paketData || []).filter((p) => p.kode !== String(kode || "").toUpperCase());
	return u.paketData.length < sebelum;
}
