// Artikel dan seri editorial v16.

export function artikelBuat(u, judul) {
	if (!u.artikel) u.artikel = {};
	const id = Math.random().toString(36).slice(2, 7).toUpperCase();
	u.artikel[id] = { id, judul: String(judul || "").slice(0, 120), isi: "", bab: [], at: Date.now() };
	return u.artikel[id];
}

export function artikelAmbil(u, id) {
	return u.artikel?.[String(id || "").toUpperCase()] || null;
}

export function artikelIsi(artikel, isi) {
	if (!artikel) return null;
	artikel.isi = String(isi || "").slice(0, 3000);
	return artikel;
}

export function artikelHapus(u, id) {
	const kunci = String(id || "").toUpperCase();
	if (!u.artikel?.[kunci]) return false;
	delete u.artikel[kunci];
	return true;
}

export function artikelCari(u, kata) {
	const q = String(kata || "").toLowerCase();
	return Object.values(u.artikel || {}).filter((a) => a.judul.toLowerCase().includes(q) || a.isi.toLowerCase().includes(q)).slice(0, 10);
}

export function seriLanjut(artikel, bab) {
	if (!artikel) return null;
	artikel.bab.push(String(bab || "").slice(0, 1000));
	artikel.bab = artikel.bab.slice(-20);
	return artikel.bab.length;
}
