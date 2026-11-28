// Proyek bersama grup v15.

export function proyekBuat(db, chat, nama, jid) {
	if (!db.proyekGrup) db.proyekGrup = {};
	const kunci = `${chat}:${String(nama || "").toLowerCase().slice(0, 30)}`;
	if (!nama || db.proyekGrup[kunci]) return null;
	db.proyekGrup[kunci] = { nama: String(nama).slice(0, 40), chat, anggota: [jid], tugas: [], arsip: false };
	return db.proyekGrup[kunci];
}

export function proyekTugas(p, teks) {
	if (!p || p.arsip) return null;
	const t = { id: Math.random().toString(36).slice(2, 7).toUpperCase(), tugas: String(teks || "").slice(0, 120), status: "todo", dari: null };
	p.tugas.push(t);
	p.tugas = p.tugas.slice(-30);
	return t;
}

export function proyekAmbil(p, id, jid) {
	const t = p?.tugas?.find((x) => x.id === String(id || "").toUpperCase());
	if (!t || t.status !== "todo") return null;
	t.status = "doing";
	t.dari = jid;
	return t;
}

export function proyekSelesai(p, id) {
	const t = p?.tugas?.find((x) => x.id === String(id || "").toUpperCase());
	if (!t || t.status === "done") return null;
	t.status = "done";
	return t;
}

export function proyekPapan(p) {
	if (!p) return [];
	return ["todo", "doing", "done"].map((s) => ({ status: s, tugas: p.tugas.filter((t) => t.status === s) }));
}

export function proyekArsip(p) {
	if (!p) return false;
	p.arsip = true;
	return true;
}
