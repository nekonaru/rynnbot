// Media tambahan v15. Spesifikasi dibuat lokal tanpa dependence baru.

export function paketBuat(u, nama) {
	if (!u.paketStiker) u.paketStiker = {};
	const kunci = String(nama || "").toLowerCase().slice(0, 30);
	if (!kunci || u.paketStiker[kunci]) return null;
	u.paketStiker[kunci] = { nama: String(nama).slice(0, 30), stiker: [] };
	return u.paketStiker;
}

export function paketTambah(u, nama, stiker) {
	const p = u.paketStiker?.[String(nama || "").toLowerCase()];
	if (!p) return null;
	p.stiker.push(String(stiker || "").slice(0, 200));
	p.stiker = p.stiker.slice(-30);
	return p;
}

export function paketHapus(u, nama) {
	const kunci = String(nama || "").toLowerCase();
	if (!u.paketStiker?.[kunci]) return false;
	delete u.paketStiker[kunci];
	return true;
}

export function wallpaperTeks(teks) {
	return `*WALLPAPER RYNN*\n\n${String(teks || "Rynn").slice(0, 120)}\n\n_Dibuat lokal, tanpa data pihak ketiga._`;
}

export function kartuPos(nama, pesan) {
	return `*KARTU POS*\n\nUntuk: ${String(nama || "Sahabat").slice(0, 40)}\n\n${String(pesan || "").slice(0, 300)}\n\nRynn`;
}
