// Pengumuman dan kotak masuk v22.

const JENIS = ["info", "acara", "peringatan", "pemeliharaan"];
const TARGET = ["semua", "grup", "role"];

export function buat(db, judul) {
	if (!db.pengumuman) db.pengumuman = {};
	const id = Math.random().toString(36).slice(2, 7).toUpperCase();
	db.pengumuman[id] = { id, judul: String(judul || "").slice(0, 120), isi: "", jenis: "info", target: "semua", status: "draf", penting: false, at: Date.now() };
	return db.pengumuman[id];
}

export function ambil(db, id) { return db.pengumuman?.[String(id || "").toUpperCase()] || null; }

export function isi(db, id, teks) {
	const p = ambil(db, id);
	if (!p) return null;
	p.isi = String(teks || "").slice(0, 2000);
	return p;
}

export function aturJenis(db, id, jenis) {
	const p = ambil(db, id);
	if (!p || !JENIS.includes(String(jenis || "").toLowerCase())) return null;
	p.jenis = String(jenis).toLowerCase();
	return p;
}

export function aturTarget(db, id, target, nilai = "") {
	const p = ambil(db, id), t = String(target || "").toLowerCase();
	if (!p || !TARGET.includes(t)) return null;
	p.target = t;
	p.nilai = String(nilai || "").slice(0, 60);
	return p;
}

export function terbitkan(db, id, penerima) {
	const p = ambil(db, id);
	if (!p || p.status === "terbit") return null;
	p.status = "terbit";
	p.diterbitkan = Date.now();
	for (const jid of penerima || []) {
		if (!db.inbox) db.inbox = {};
		if (!db.inbox[jid]) db.inbox[jid] = [];
		db.inbox[jid].push({ id: p.id, judul: p.judul, isi: p.isi, dari: "bot", dibaca: false, at: Date.now() });
		db.inbox[jid] = db.inbox[jid].slice(-30);
	}
	return p;
}

export function daftarAktif(db) {
	return Object.values(db.pengumuman || {}).filter((p) => p.status === "terbit").slice(-10);
}

export function daftarDraf(db) {
	return Object.values(db.pengumuman || {}).filter((p) => p.status === "draf").slice(-10);
}

export function sematkan(db, id) {
	const p = ambil(db, id);
	if (!p) return null;
	p.penting = !p.penting;
	return p;
}

export function tutup(db, id) {
	const p = ambil(db, id);
	if (!p) return false;
	p.status = "tutup";
	return true;
}

export function inbox(db, jid) {
	return (db.inbox?.[jid] || []).slice().reverse();
}

export function bacaInbox(db, jid, id) {
	const pesan = (db.inbox?.[jid] || []).find((x) => x.id === String(id || "").toUpperCase());
	if (!pesan) return null;
	pesan.dibaca = true;
	return pesan;
}

export function hapusInbox(db, jid, id) {
	if (!db.inbox?.[jid]) return false;
	const sebelum = db.inbox[jid].length;
	db.inbox[jid] = db.inbox[jid].filter((x) => x.id !== String(id || "").toUpperCase());
	return db.inbox[jid].length < sebelum;
}

export function bersihInbox(db, jid) {
	if (!db.inbox?.[jid]) return false;
	delete db.inbox[jid];
	return true;
}

export function belumDibaca(db, jid) {
	return (db.inbox?.[jid] || []).filter((x) => !x.dibaca).length;
}

export function simpanTemplat(db, nama, teks) {
	if (!db.templatPengumuman) db.templatPengumuman = {};
	const k = String(nama || "").toLowerCase().slice(0, 40);
	if (!k) return null;
	db.templatPengumuman[k] = String(teks || "").slice(0, 2000);
	return db.templatPengumuman[k];
}

export function ambilTemplat(db, nama) {
	return db.templatPengumuman?.[String(nama || "").toLowerCase()] || null;
}

export function ringkasPengumuman(list) {
	return list.map((p) => `- ${p.id}: ${p.judul} (${p.status}, ${p.jenis})`).join("\n") || "(belum ada)";
}
