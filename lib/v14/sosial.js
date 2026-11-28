// Sosial lanjutan v14. Cerita bersama memakai batas entri.

export function apresiasiTambah(db, chat, dari, target, teks) {
	if (!db.apresiasi) db.apresiasi = {};
	if (!db.apresiasi[chat]) db.apresiasi[chat] = [];
	db.apresiasi[chat].push({ dari, target, teks: String(teks || "").slice(0, 200), at: Date.now() });
	db.apresiasi[chat] = db.apresiasi[chat].slice(-30);
	return db.apresiasi[chat];
}

export function apresiasiPapan(db, chat) {
	return (db.apresiasi?.[chat] || []).slice(-8);
}

export function salamPersonal(target) {
	return `Halo @${String(target || "").replace(/^@/, "").split("@")[0]}, semangat hari ini.`;
}

export function ceritaLanjut(db, chat, kalimat) {
	if (!db.cerita) db.cerita = {};
	if (!db.cerita[chat]) db.cerita[chat] = [];
	const teks = String(kalimat || "").slice(0, 200);
	if (!teks) return null;
	db.cerita[chat].push(teks);
	db.cerita[chat] = db.cerita[chat].slice(-20);
	return db.cerita[chat];
}

export function ceritaBaca(db, chat) {
	return db.cerita?.[chat] || [];
}

export function ceritaReset(db, chat) {
	if (!db.cerita) db.cerita = {};
	db.cerita[chat] = [];
	return true;
}

export function rekomendasiPerintah(daftar, riwayat) {
	const terakhir = (riwayat || []).slice(-5);
	return daftar.filter((e) => !terakhir.includes(e.command)).slice(0, 8);
}
