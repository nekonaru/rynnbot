// Owner dan observability v12. Tidak pernah mengembalikan nilai secret.

import { statistikRegistry } from "../command-registry.js";

export function health(globalObj) {
	const uptime = Math.floor(process.uptime());
	return {
		status: "aktif",
		uptime,
		memoriMB: Math.round(process.memoryUsage().heapUsed / 1048576),
		node: process.version,
		perintah: statistikRegistry().total,
	};
}

export function formatHealth(h) {
	return `*Health Bot*\n\nStatus: ${h.status}\nUptime: ${h.uptime} detik\nMemori: ${h.memoriMB} MB\nNode: ${h.node}\nPerintah: ${h.perintah}`;
}

export function metrik(db) {
	const hit = globalObjHit(db);
	return Object.entries(hit)
		.filter(([k, v]) => /^[a-z0-9_]+$/i.test(k) && Number.isFinite(v))
		.sort((a, b) => b[1] - a[1])
		.slice(0, 10);
}

function globalObjHit(db) {
	return db?.hit || global.db?.hit || {};
}

export function logRingkas(entri, batas = 15) {
	return entri.slice(-batas).map((e) => `- ${e.waktu || ""} | ${e.aksi || e}`).join("\n") || "(kosong)";
}

export function modeHemat(aktif) {
	return { aktif, pesan: aktif ? "Mode hemat aktif. Animasi dan typing dimatikan." : "Mode hemat nonaktif." };
}

export function cacheInfo(peta) {
	return peta instanceof Map ? peta.size : 0;
}
