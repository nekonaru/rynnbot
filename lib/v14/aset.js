// Pustaka aset dan bank konten v14.

export function asetSimpan(u, nama, isi) {
	if (!u.aset) u.aset = {};
	const kunci = String(nama || "").toLowerCase().slice(0, 40);
	if (!kunci) return null;
	u.aset[kunci] = { nama: String(nama).slice(0, 40), isi: String(isi || "").slice(0, 2000), tag: [], at: Date.now() };
	return u.aset;
}

export function asetAmbil(u, nama) {
	return u.aset?.[String(nama || "").toLowerCase()] || null;
}

export function asetHapus(u, nama) {
	const kunci = String(nama || "").toLowerCase();
	if (!u.aset || !u.aset[kunci]) return false;
	delete u.aset[kunci];
	return true;
}

export function asetTag(u, nama, tag) {
	const a = asetAmbil(u, nama);
	if (!a) return null;
	const t = String(tag || "").slice(0, 20);
	if (!a.tag.includes(t)) a.tag.push(t);
	a.tag = a.tag.slice(-10);
	return a;
}

export function asetCari(u, tag) {
	const q = String(tag || "").toLowerCase();
	return Object.values(u.aset || {}).filter((a) => a.tag.some((t) => t.toLowerCase().includes(q))).slice(0, 10);
}

export function kontenSimpan(db, chat, nama, teks) {
	if (!db.konten) db.konten = {};
	if (!db.konten[chat]) db.konten[chat] = {};
	const kunci = String(nama || "").toLowerCase().slice(0, 40);
	if (!kunci) return null;
	db.konten[chat][kunci] = String(teks || "").slice(0, 2000);
	return db.konten[chat];
}

export function kontenAmbil(db, chat, nama) {
	return db.konten?.[chat]?.[String(nama || "").toLowerCase()] || null;
}
