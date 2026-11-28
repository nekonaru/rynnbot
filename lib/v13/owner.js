// Owner dan observability v13. Tidak pernah mengembalikan nilai secret.

export function relayStatus(aktif) {
	return { aktif: Boolean(aktif), keterangan: aktif ? "relay terhubung" : "relay tidak aktif" };
}

export function deployStatus(pkg) {
	return { versi: pkg.version || "0.0.0", nama: pkg.name || "rynnbot" };
}

export function verifikasiBackup(berkas, fs) {
	if (!Array.isArray(berkas)) return [];
	return berkas.slice(0, 20).map((n) => ({ nama: n, ada: fs.existsSync(n) }));
}

export function restoreDiff(berkas, db) {
	const jumlah = Object.keys(db?.users || {}).length;
	return { berkas: String(berkas || "").slice(0, 120), userSaatIni: jumlah, keterangan: "Pratinjau ringkas, isi berkas tidak dibuka." };
}

export function sesiList(berkas) {
	return (Array.isArray(berkas) ? berkas : []).slice(0, 20);
}

export function migrasiInfo(db) {
	const versi = Number(db.version) || 0;
	return { versiSebelum: versi, versiSesudah: versi + 1 };
}

export function databaseInfoPenuh(db, globalObj) {
	return {
		tipe: String(globalObj?.database?.path || "lokal").split(":")[0],
		user: Object.keys(db.users || {}).length,
		grup: Object.keys(db.set || {}).filter((x) => x.endsWith("@g.us")).length,
		perintah: Object.keys(globalObj?.db?.hit || {}).length,
	};
}

export function logEkspor(entri, batas = 15) {
	return (Array.isArray(entri) ? entri : []).slice(-batas).map((e) => `- ${e.waktu || ""} | ${e.aksi || e}`);
}

export function aturRateLimit(detik) {
	const n = Number(detik);
	return Number.isInteger(n) && n >= 0 ? n : null;
}

export function blokirDomain(list, domain) {
	const d = String(domain || "").toLowerCase().replace(/^https?:\/\//, "").split("/")[0];
	if (!d || list.includes(d)) return null;
	list.push(d);
	return list.slice(-30);
}

export function alasanMaintenance(teks) {
	return String(teks || "").slice(0, 200);
}

export function auditEkspor(entri) {
	return (Array.isArray(entri) ? entri : []).slice(-20).map((e) => ({ aksi: e.aksi, waktu: e.waktu }));
}
