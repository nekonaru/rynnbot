// Owner dan diagnostik lanjutan v16. Tidak mengembalikan nilai secret.

export function aksesMatriks(db) {
	return Object.entries(db.access || {}).map(([kunci, role]) => ({ perintah: kunci, role }));
}

export function aturLimit(db, nilai) {
	const n = Number(nilai);
	if (!Number.isInteger(n) || n < 1 || n > 10000) return null;
	db.limitDefault = n;
	return n;
}

export function bersihkanState(globalObj, batasMs = 900000) {
	const sekarang = Date.now();
	let dihapus = 0;
	for (const nama of ["transferPending", "rateLimitState", "sudokuState", "game2048State", "riddleState"]) {
		const peta = globalObj[nama];
		if (!(peta instanceof Map) && (!peta || typeof peta !== "object")) continue;
		if (peta instanceof Map) {
			for (const [k, v] of peta) {
				if (!v || typeof v.at !== "number" || sekarang - v.at > batasMs) { peta.delete(k); dihapus++; }
			}
		} else {
			for (const [k, v] of Object.entries(peta)) {
				if (!v || typeof v.at !== "number" || sekarang - v.at > batasMs) { delete peta[k]; dihapus++; }
			}
		}
	}
	return dihapus;
}

export function memoriPeta() {
	const u = process.memoryUsage();
	return { heap: Math.round(u.heapUsed / 1048576), external: Math.round(u.external / 1048576), rss: Math.round(u.rss / 1048576) };
}

export function eventLog(db) {
	return (Array.isArray(db.eventLog) ? db.eventLog : []).slice(-15);
}

export function catatEvent(db, nama) {
	if (!db.eventLog) db.eventLog = [];
	db.eventLog.push({ nama: String(nama || "").slice(0, 60), at: Date.now() });
	db.eventLog = db.eventLog.slice(-50);
	return db.eventLog;
}

import { panelAktif } from "../../src/dashboard/panel.js";

export function jadwalKerja(globalObj) {
	return {
		sweeper: Boolean(globalObj._stateSweeper),
		gc: Boolean(globalObj._gcInterval),
		panel: panelAktif(),
	};
}
