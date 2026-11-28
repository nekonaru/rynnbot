// Siaran tertunda dan bank konten v14. Eksekusi mengikuti cron harian bot.

export function siaranJadwalkan(db, chat, teks) {
	if (!db.siaran) db.siaran = {};
	const id = Math.random().toString(36).slice(2, 7).toUpperCase();
	db.siaran[id] = { id, chat, teks: String(teks || "").slice(0, 2000), terkirim: false, at: Date.now() };
	db.siaranUrut = db.siaranUrut || [];
	db.siaranUrut.push(id);
	db.siaranUrut = db.siaranUrut.slice(-50);
	return db.siaran[id];
}

export function siaranAmbil(db, id) {
	return db.siaran?.[String(id || "").toUpperCase()] || null;
}

export function siaranTandaiKirim(siaran) {
	if (!siaran) return null;
	siaran.terkirim = true;
	siaran.dikirimPada = Date.now();
	return siaran;
}

export function siaranHapus(db, id) {
	const kunci = String(id || "").toUpperCase();
	if (!db.siaran || !db.siaran[kunci]) return false;
	delete db.siaran[kunci];
	return true;
}

export function siaranList(db, chat) {
	return Object.values(db.siaran || {}).filter((s) => s.chat === chat && !s.terkirim).slice(-10);
}

export function siaranRiwayat(db, chat) {
	return Object.values(db.siaran || {}).filter((s) => s.chat === chat && s.terkirim).slice(-10);
}
