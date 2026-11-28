// Target dan proyek v13.

export function targetBuat(u, nama, angka) {
	const n = Number(angka);
	if (!nama || !Number.isFinite(n) || n < 1) return null;
	if (!u.target) u.target = {};
	const kunci = String(nama).toLowerCase().slice(0, 40);
	u.target[kunci] = { nama: String(nama).slice(0, 40), target: n, progres: 0 };
	return u.target;
}

export function targetTambah(u, nama, angka) {
	const kunci = String(nama || "").toLowerCase();
	const n = Number(angka);
	const t = u.target?.[kunci];
	if (!t || !Number.isFinite(n) || n < 1) return null;
	t.progres += n;
	return t;
}

export function formatTarget(target) {
	return Object.values(target || {}).map((t) => {
		const porsi = Math.max(0, Math.min(1, t.progres / t.target));
		const penuh = Math.round(porsi * 10);
		return `${t.nama}: [${"#".repeat(penuh)}${"-".repeat(10 - penuh)}] ${t.progres}/${t.target}`;
	}).join("\n") || "(belum ada target)";
}

export function proyekBuat(u, nama) {
	if (!u.proyek) u.proyek = { nama: "", tugas: [] };
	u.proyek.nama = String(nama || "Proyek").slice(0, 60);
	return u.proyek;
}

export function proyekTambah(u, tugas) {
	if (!u.proyek) u.proyek = { nama: "Proyek", tugas: [] };
	u.proyek.tugas.push({ id: Math.random().toString(36).slice(2, 7), tugas: String(tugas || "").slice(0, 120), status: "todo" });
	u.proyek.tugas = u.proyek.tugas.slice(-30);
	return u.proyek;
}

export function proyekStatus(u, id, status) {
	const t = u.proyek?.tugas?.find((x) => x.id === id);
	if (!t || !["todo", "doing", "done"].includes(status)) return null;
	t.status = status;
	return t;
}

export function formatPapan(proyek) {
	if (!proyek) return "(belum ada proyek)";
	return ["todo", "doing", "done"].map((s) => {
		const list = (proyek.tugas || []).filter((t) => t.status === s);
		return `*${s.toUpperCase()}*\n${list.map((t) => `- ${t.id} ${t.tugas}`).join("\n") || "- (kosong)"}`;
	}).join("\n\n");
}

export function cariCatatan(catatan, q) {
	const k = String(q || "").toLowerCase();
	return Object.entries(catatan || {})
		.filter(([judul, isi]) => judul.toLowerCase().includes(k) || String(isi).toLowerCase().includes(k))
		.slice(0, 10);
}

export function beriTagCatatan(catatan, judul, tag) {
	const k = String(judul || "").toLowerCase();
	if (!catatan || catatan[k] === undefined || !tag) return null;
	catatan[k] = `${catatan[k]}\n#${String(tag).slice(0, 20)}`;
	return catatan[k];
}
