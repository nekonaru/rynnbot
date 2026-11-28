// Reputasi dan daftar tepercaya v15.

export function reputasiBeri(db, dari, ke, jumlah, sekarang = Date.now()) {
	const n = Number(jumlah);
	if (!namaValid(ke) || !Number.isInteger(n) || n < -5 || n > 5 || n === 0) return null;
	if (!db.reputasi) db.reputasi = {};
	const kunci = `${dari}:${new Date(sekarang).toISOString().slice(0, 10)}`;
	if (!db.reputasiLog) db.reputasiLog = {};
	if (db.reputasiLog[kunci]) return null;
	db.reputasiLog[kunci] = { ke, jumlah: n, at: sekarang };
	db.reputasi[ke] = (db.reputasi[ke] || 0) + n;
	return db.reputasi[ke];
}

function namaValid(x) {
	return Boolean(x && String(x).length > 2);
}

export function papanReputasi(db) {
	return Object.entries(db.reputasi || {})
		.sort((a, b) => b[1] - a[1])
		.slice(0, 10);
}

export function tepercayaTambah(db, jid) {
	if (!db.tepercaya) db.tepercaya = [];
	if (!jid || db.tepercaya.includes(jid)) return null;
	db.tepercaya.push(jid);
	return db.tepercaya.slice(-30);
}

export function tepercayaHapus(db, jid) {
	const i = (db.tepercaya || []).indexOf(jid);
	if (i === -1) return false;
	db.tepercaya.splice(i, 1);
	return true;
}
