// Tiket dukungan dan FAQ v14.

export function tiketBuat(db, sender, judul) {
	if (!db.tiket) db.tiket = {};
	const id = Math.random().toString(36).slice(2, 7).toUpperCase();
	db.tiket[id] = { id, dari: sender, judul: String(judul || "").slice(0, 120), status: "buka", balasan: [], at: Date.now() };
	db.tiketUrut = db.tiketUrut || [];
	db.tiketUrut.push(id);
	db.tiketUrut = db.tiketUrut.slice(-50);
	return db.tiket[id];
}

export function tiketAmbil(db, id) {
	return db.tiket?.[String(id || "").toUpperCase()] || null;
}

export function tiketBalas(tiket, teks) {
	if (!tiket) return null;
	tiket.balasan.push(String(teks || "").slice(0, 500));
	tiket.balasan = tiket.balasan.slice(-20);
	return tiket;
}

export function tiketTutup(tiket) {
	if (!tiket) return null;
	tiket.status = "tutup";
	return tiket;
}

export function tiketMilik(db, sender) {
	return Object.values(db.tiket || {}).filter((t) => t.dari === sender).slice(-10);
}

export function faqTambah(db, pertanyaan, jawaban) {
	if (!db.faq) db.faq = [];
	db.faq.push({ pertanyaan: String(pertanyaan || "").slice(0, 150), jawaban: String(jawaban || "").slice(0, 500) });
	db.faq = db.faq.slice(-30);
	return db.faq;
}

export function faqCari(db, kata) {
	const q = String(kata || "").toLowerCase();
	return (db.faq || []).filter((f) => f.pertanyaan.toLowerCase().includes(q) || f.jawaban.toLowerCase().includes(q)).slice(0, 5);
}
