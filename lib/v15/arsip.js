// Arsip dan pencarian pribadi v15.

export function cariLintas(u, kata, tiket = []) {
	const q = String(kata || "").toLowerCase();
	const hasil = [];
	for (const [judul, isi] of Object.entries(u.catatan || {})) {
		if (String(isi).toLowerCase().includes(q) || judul.toLowerCase().includes(q)) hasil.push(`catatan: ${judul}`);
	}
	for (const [nama, a] of Object.entries(u.aset || {})) {
		if (String(a.isi || "").toLowerCase().includes(q) || nama.includes(q)) hasil.push(`aset: ${nama}`);
	}
	for (const t of tiket || []) {
		if (String(t.judul || "").toLowerCase().includes(q)) hasil.push(`tiket: ${t.id}`);
	}
	return hasil.slice(0, 10);
}

export function arsipTanggal(u, tanggal) {
	const t = String(tanggal || "");
	return (u.riwayatTanggal?.[t] || []).slice(0, 10);
}

export function arsipRingkas(u, tiket = []) {
	return {
		catatan: Object.keys(u.catatan || {}).length,
		aset: Object.keys(u.aset || {}).length,
		tiket: (tiket || []).length,
		riwayat: (u.riwayat || []).length,
	};
}

export function cadanganBuat(u) {
	const data = JSON.stringify({ catatan: u.catatan || {}, aset: u.aset || {}, koleksi: u.koleksi || [] }).slice(0, 20000);
	return { id: Math.random().toString(36).slice(2, 7).toUpperCase(), ukuran: data.length, data, at: Date.now() };
}

export function cadanganPulihkan(u, id) {
	const c = (u.cadangan || []).find((x) => x.id === String(id || "").toUpperCase());
	if (!c) return false;
	try {
		const isi = JSON.parse(c.data);
		u.catatan = isi.catatan || {};
		u.aset = isi.aset || {};
		u.koleksi = isi.koleksi || [];
		return true;
	} catch {
		return false;
	}
}

export function cadanganList(list) {
	return (Array.isArray(list) ? list : []).slice(-10);
}
