// Owner dan sistem v14. Tidak mengembalikan nilai secret.

export function bootInfo() {
	return { mulai: new Date(Date.now() - process.uptime() * 1000).toISOString(), uptime: Math.floor(process.uptime()), node: process.version };
}

export function stateInfo(peta) {
	const jumlah = peta instanceof Map ? peta.size : Object.keys(peta || {}).length;
	return { jumlah, batas: 5000 };
}

export function formatBoot(i) {
	return `*Boot*\n\nMulai: ${i.mulai}\nUptime: ${i.uptime} detik\nNode: ${i.node}`;
}

export function backupInkremental(db, sekarang = Date.now()) {
	const user = Object.entries(db.users || {}).filter(([, u]) => (u.terakhirUbah || 0) > sekarang - 86400000);
	return { user: user.length, keterangan: "Hanya entri yang berubah dalam 24 jam." };
}

export function dbEkspor(db) {
	return { user: Object.keys(db.users || {}).length, grup: Object.keys(db.set || {}).length, versi: Number(db.version) || 0 };
}

export function dbImprInfo(berkas, db) {
	return { berkas: String(berkas || "").slice(0, 120), userSaatIni: Object.keys(db.users || {}).length, keterangan: "Pratinjau, isi berkas tidak dibuka." };
}

export function logLevel(level) {
	const daftar = ["silent", "error", "warn", "info", "debug"];
	return daftar.includes(String(level || "").toLowerCase()) ? String(level).toLowerCase() : null;
}

export function ketersediaan(globalObj) {
	return {
		dashboard: Boolean(globalObj.dashboardAktif),
		relay: process.env.DASHBOARD_ENABLED === "true",
		database: String(globalObj.database?.path || "lokal").split(":")[0],
	};
}
