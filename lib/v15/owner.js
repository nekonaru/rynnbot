// Owner lanjutan v15. Tidak mengembalikan nilai secret.

export function penggunaAktif(db, n = 10) {
	return Object.entries(db.users || {})
		.map(([jid, u]) => ({ jid, skor: (u.poin || 0) + (u.skorBelajar || 0) }))
		.filter((x) => x.skor > 0)
		.sort((a, b) => b.skor - a.skor)
		.slice(0, Math.min(n, 30));
}

export function grupAktif(db, n = 10) {
	return Object.entries(db.set || {})
		.filter(([jid]) => jid.endsWith("@g.us"))
		.map(([jid]) => ({ jid, skor: (db.hit?.[jid] || 0) }))
		.sort((a, b) => b.skor - a.skor)
		.slice(0, Math.min(n, 30));
}

export function daftarCooldown(db) {
	return Object.entries(db.cooldowns || {}).filter(([, v]) => Number(v) > 0);
}

export function daftarAkses(db) {
	return Object.entries(db.access || {});
}

export function rollbackInfo(tag, db) {
	return { tag: String(tag || "").slice(0, 40), user: Object.keys(db.users || {}).length, keterangan: "Pratinjau, belum ada perubahan." };
}

export function alasanBlacklist(db, id, alasan) {
	if (!db.blacklistAlasan) db.blacklistAlasan = {};
	db.blacklistAlasan[String(id || "")] = String(alasan || "").slice(0, 200);
	return db.blacklistAlasan;
}
