// Analitik dan pelaporan v14. Tidak mengarang data yang tidak tersedia.

export function laporanBulanan(hit, sekarang = Date.now()) {
	const entri = Object.entries(hit || {})
		.filter(([k, v]) => /^[a-z0-9_]+$/i.test(k) && Number.isFinite(v) && !/cmd/i.test(k))
		.sort((a, b) => b[1] - a[1])
		.slice(0, 10);
	return { bulan: new Date(sekarang).toISOString().slice(0, 7), total: entri.reduce((n, [, v]) => n + v, 0), entri };
}

export function trenPerintah(hit, lama) {
	const masuk = Object.entries(hit || {}).filter(([k, v]) => /^[a-z0-9_]+$/i.test(k) && Number.isFinite(v));
	const naik = masuk.filter(([k, v]) => v > (lama?.[k] || 0)).slice(0, 5);
	const turun = masuk.filter(([k, v]) => v < (lama?.[k] || 0)).slice(0, 5);
	return { naik, turun };
}

export function statistikAnggota(db, participants) {
	return participants.map((p) => {
		const jid = typeof p === "string" ? p : p.id;
		return { jid, aktif: Boolean(db.users?.[jid]) };
	});
}

export function statistikJam(hit) {
	return Object.entries(hit || {})
		.filter(([k]) => /^jam\d{2}$/.test(k))
		.sort((a, b) => a[0].localeCompare(b[0]));
}

export function ringkasanBot(db) {
	const hit = db?.hit || {};
	return {
		pengguna: Object.keys(db?.users || {}).length,
		grup: Object.keys(db?.set || {}).filter((x) => x.endsWith("@g.us")).length,
		perintah: Object.keys(hit).length,
		total: Number(hit.totalcmd) || 0,
	};
}

export function formatRingkasan(r) {
	return `- Pengguna: ${r.pengguna}\n- Grup: ${r.grup}\n- Perintah dikenal: ${r.perintah}\n- Total eksekusi: ${r.total}`;
}
