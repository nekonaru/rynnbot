// Produktivitas dan moderasi grup v12.

export function agendaMinggu(acara, sekarang = Date.now()) {
	const batas = sekarang + 7 * 86400000;
	return (Array.isArray(acara) ? acara : []).filter((a) => {
		const t = Date.parse(a.tanggal);
		return Number.isFinite(t) && t >= sekarang && t <= batas;
	});
}

export function rekapAbsen(absen, hari) {
	const kunci = Object.keys(absen || {}).filter((k) => k.includes(":" + hari));
	return kunci.reduce((n, k) => n + (absen[k]?.length || 0), 0);
}

export function hasilPoll(poll) {
	if (!poll || !Array.isArray(poll.pilihan)) return null;
	const hitung = new Map(poll.pilihan.map((p) => [p, 0]));
	for (const v of poll.vote || []) if (hitung.has(v)) hitung.set(v, hitung.get(v) + 1);
	return [...hitung.entries()].sort((a, b) => b[1] - a[1]);
}

export function ringkasRapat(rapat) {
	return (rapat?.notulen || []).slice(-3).map((n) => `- ${n}`);
}

export function tugasTambah(list, tugas) {
	const item = { id: Math.random().toString(36).slice(2, 7), tugas: String(tugas || "").slice(0, 120), selesai: false, at: Date.now() };
	list.push(item);
	return list.slice(-30);
}

export function tugasSelesai(list, id) {
	const item = list.find((t) => t.id === id);
	if (item) item.selesai = true;
	return list;
}

export function formatTugas(list) {
	return list.map((t) => `${t.selesai ? "[v]" : "[ ]"} ${t.id} - ${t.tugas}`).join("\n") || "(kosong)";
}

export function skorModerasi(grup) {
	const g = grup || {};
	return (g.warning || 0) + (g.laporan || 0) + (g.antilink ? 1 : 0) + (g.antispam ? 1 : 0);
}
