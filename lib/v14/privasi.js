// Privasi dan kendali data v14.

export function ringkasanData(u = {}) {
	return {
		riwayat: (u.riwayat || []).length,
		catatan: Object.keys(u.catatan || {}).length,
		koleksi: (u.koleksi || []).length,
		memoriAi: (u.aiRiwayat || []).length,
		target: Object.keys(u.target || {}).length,
	};
}

export function eksporData(u = {}) {
	return {
		bio: u.bio || "",
		riwayat: (u.riwayat || []).slice(-20),
		catatan: u.catatan || {},
		koleksi: u.koleksi || [],
		badge: u.badge || [],
		memoriAi: u.aiRiwayat || [],
	};
}

export function formatEkspor(data) {
	return `*Data Pribadi*\n\n- Bio: ${data.bio || "(kosong)"}\n- Riwayat: ${data.riwayat.length} entri\n- Catatan: ${Object.keys(data.catatan).length} entri\n- Koleksi: ${data.koleksi.length} entri\n- Lencana: ${data.badge.length} entri\n- Memori AI: ${data.memoriAi.length} entri`;
}

export function hapusDataPribadi(u) {
	for (const k of ["riwayat", "catatan", "koleksi", "badge", "aiRiwayat", "bio", "topik", "tugas", "target", "proyek"]) delete u[k];
	return true;
}

export function aturOpsi(u, kunci, aktif) {
	if (!u.opsiPrivasi) u.opsiPrivasi = {};
	u.opsiPrivasi[kunci] = Boolean(aktif);
	return u.opsiPrivasi;
}

export function batasData(ukuran) {
	return Math.max(0, Math.min(1000, Number(ukuran) || 50));
}
