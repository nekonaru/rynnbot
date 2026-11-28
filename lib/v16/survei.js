// Survei lanjutan v16.

export function surveiBuat(db, chat, judul) {
	if (!db.survei) db.survei = {};
	const id = Math.random().toString(36).slice(2, 7).toUpperCase();
	db.survei[id] = { id, chat, judul: String(judul || "").slice(0, 120), opsi: [], jawaban: {}, tutup: false, at: Date.now() };
	return db.survei[id];
}

export function surveiAmbil(db, id) {
	return db.survei?.[String(id || "").toUpperCase()] || null;
}

export function surveiOpsi(survei, opsi) {
	if (!survei || survei.tutup) return null;
	const o = String(opsi || "").slice(0, 60);
	if (!o || survei.opsi.includes(o)) return null;
	survei.opsi.push(o);
	return survei.opsi.slice(-12);
}

export function surveiJawab(survei, jid, opsi) {
	if (!survei || survei.tutup || !survei.opsi.includes(opsi)) return false;
	survei.jawaban[jid] = opsi;
	return true;
}

export function surveiHasil(survei) {
	if (!survei) return [];
	const hitung = new Map(survei.opsi.map((o) => [o, 0]));
	for (const v of Object.values(survei.jawaban)) if (hitung.has(v)) hitung.set(v, hitung.get(v) + 1);
	return [...hitung.entries()].sort((a, b) => b[1] - a[1]);
}

export function surveiTutup(survei) {
	if (!survei) return false;
	survei.tutup = true;
	return true;
}
