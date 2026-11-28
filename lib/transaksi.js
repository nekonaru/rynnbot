// Transaksi uang, limit, dan poin v17. Satu jalur untuk semua perubahan saldo.

const BILANGAN = { money: "money", limit: "limit", poin: "poin", tabungan: "tabungan" };

function konsisten(field, nominal) {
	if (!BILANGAN[field]) return false;
	if (!Number.isInteger(nominal)) return false;
	return Number.isSafeInteger(nominal);
}

function catat(db, { field, dari, ke, nominal, sumber }) {
	if (!db.transaksiLog) db.transaksiLog = [];
	db.transaksiLog.push({
		id: Math.random().toString(36).slice(2, 8).toUpperCase(),
		field,
		dari: dari || null,
		ke: ke || null,
		nominal,
		sumber: String(sumber || "sistem").slice(0, 60),
		at: Date.now(),
	});
	db.transaksiLog = db.transaksiLog.slice(-200);
	return db.transaksiLog[db.transaksiLog.length - 1];
}

function pastikan(users, jid) {
	if (!users[jid] || typeof users[jid] !== "object") users[jid] = {};
	return users[jid];
}

export function ubahSaldo(db, jid, field, delta, sumber = "sistem") {
	const nominal = Number(delta);
	if (!Number.isInteger(nominal) || nominal === 0 || !konsisten(field, nominal)) return null;
	if (!db.users || typeof db.users !== "object") db.users = {};
	const u = pastikan(db.users, jid);
	const awal = Number(u[field]) || 0;
	const akhir = awal + nominal;
	if (!Number.isSafeInteger(akhir) || akhir < 0) return null;
	u[field] = akhir;
	catat(db, { field, ke: nominal > 0 ? jid : null, dari: nominal < 0 ? jid : null, nominal, sumber });
	return { awal, akhir, nominal };
}

export function pindahSaldo(db, dari, ke, field, nominal, sumber = "transfer") {
	const n = Number(nominal);
	if (!konsisten(field, n) || n < 1 || dari === ke) return null;
	const pengirim = db.users?.[dari];
	if (!pengirim || (Number(pengirim[field]) || 0) < n) return null;
	pastikan(db.users || {}, ke);
	const keluar = ubahSaldo(db, dari, field, -n, `${sumber}:keluar`);
	if (!keluar) return null;
	const masuk = ubahSaldo(db, ke, field, n, `${sumber}:masuk`);
	if (!masuk) {
		ubahSaldo(db, dari, field, n, `${sumber}:rollback`);
		return null;
	}
	return { dari, ke, field, nominal: n };
}

export function riwayatTransaksi(db, field, batas = 10) {
	return (db.transaksiLog || [])
		.filter((t) => !field || t.field === field)
		.slice(-batas)
		.reverse();
}

export function rekonsiliasi(db) {
	const hasil = [];
	for (const field of Object.values(BILANGAN)) {
		const saldo = Object.values(db.users || {}).reduce((n, u) => n + (Number(u[field]) || 0), 0);
		const mutasi = (db.transaksiLog || []).filter((t) => t.field === field).reduce((n, t) => n + t.nominal, 0);
		hasil.push({ field, saldo, mutasi, cocok: saldo === mutasi });
	}
	return hasil;
}
