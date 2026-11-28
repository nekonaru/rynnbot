// Keputusan grup dan versi notulen v15.

export function keputusanBuat(db, chat, judul) {
	if (!db.keputusan) db.keputusan = {};
	if (!db.keputusan[chat]) db.keputusan[chat] = [];
	const item = { id: Math.random().toString(36).slice(2, 7).toUpperCase(), judul: String(judul || "").slice(0, 100), isi: "", versi: 1, arsip: false, at: Date.now() };
	db.keputusan[chat].push(item);
	db.keputusan[chat] = db.keputusan[chat].slice(-30);
	return item;
}

export function keputusanAmbil(db, chat, id) {
	return (db.keputusan?.[chat] || []).find((k) => k.id === String(id || "").toUpperCase()) || null;
}

export function keputusanUbah(k, isi) {
	if (!k) return null;
	k.isi = String(isi || "").slice(0, 500);
	k.versi += 1;
	return k;
}

export function keputusanArsip(k) {
	if (!k) return null;
	k.arsip = true;
	return k;
}

export function notulenBanding(db, chat, a, b) {
	const list = db.groups?.[chat]?.notulenVersi || [];
	const satu = list.find((x) => x.id === a);
	const dua = list.find((x) => x.id === b);
	if (!satu || !dua) return null;
	return { satu, dua };
}

export function simpanNotulenVersi(db, chat, teks) {
	if (!db.groups[chat]) db.groups[chat] = {};
	const list = db.groups[chat].notulenVersi || [];
	list.push({ id: Math.random().toString(36).slice(2, 7).toUpperCase(), teks: String(teks || "").slice(0, 500), at: Date.now() });
	db.groups[chat].notulenVersi = list.slice(-20);
	return db.groups[chat].notulenVersi;
}
