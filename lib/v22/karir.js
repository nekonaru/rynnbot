// Karier simulasi v22. Bidang dan jabatan bersifat contoh, bukan data nyata.

const BIDANG = ["teknologi", "pendidikan", "kesehatan", "dagang", "seni", "tani"];
const JABATAN = ["magang", "staf", "senior", "spesialis", "manajer", "direktur"];
const KEAHLIAN = ["komunikasi", "analisis", "desain", "manajemen", "teknis"];
const TUGAS = ["laporan", "presentasi", "riset", "perbaikan", "kolaborasi"];

export function daftarBidang() { return [...BIDANG]; }
export function daftarKeahlian() { return [...KEAHLIAN]; }
export function daftarTugas() { return [...TUGAS]; }

export function pilihBidang(u, bidang) {
	const b = String(bidang || "").toLowerCase();
	if (!BIDANG.includes(b) || u.karir) return null;
	u.karir = { bidang: b, jabatan: "magang", gaji: 20, kinerja: 0, keahlian: {}, tugas: [], riwayat: [], cuti: false };
	u.karir.riwayat.push({ jabatan: "magang", at: Date.now() });
	return u.karir;
}

export function ambilTugas(u) {
	const k = u.karir;
	if (!k || k.cuti || k.tugas.length >= 5) return null;
	const t = { id: Math.random().toString(36).slice(2, 7).toUpperCase(), nama: TUGAS[k.kinerja % TUGAS.length], selesai: false };
	k.tugas.push(t);
	return t;
}

export function kerjakan(u, id) {
	const k = u.karir, t = k?.tugas?.find((x) => x.id === String(id || "").toUpperCase() && !x.selesai);
	if (!t || k.cuti) return null;
	t.selesai = true;
	k.kinerja += 5;
	return k.kinerja;
}

export function lembur(u) {
	const k = u.karir;
	if (!k || k.cuti || k.kinerja < 5) return null;
	k.kinerja -= 5;
	return Math.floor(k.gaji / 2);
}

export function ambilGaji(u) {
	const k = u.karir;
	if (!k || k.cuti) return null;
	return k.gaji;
}

export function belajar(u, keahlian) {
	const k = u.karir, a = String(keahlian || "").toLowerCase();
	if (!k || !KEAHLIAN.includes(a)) return null;
	k.keahlian[a] = (k.keahlian[a] || 0) + 1;
	return k.keahlian[a];
}

export function sertifikat(u, keahlian) {
	const k = u.karir, a = String(keahlian || "").toLowerCase();
	if (!k || (k.keahlian[a] || 0) < 3) return null;
	k.keahlian[a + ":sertifikat"] = true;
	return a;
}

export function promosi(u) {
	const k = u.karir;
	if (!k || k.kinerja < 20) return null;
	const index = JABATAN.indexOf(k.jabatan);
	const berikut = JABATAN[Math.min(index + 1, JABATAN.length - 1)];
	if (berikut === k.jabatan) return null;
	k.jabatan = berikut;
	k.gaji += 10;
	k.kinerja -= 20;
	k.riwayat.push({ jabatan: berikut, at: Date.now() });
	return berikut;
}

export function pindahBidang(u, bidang) {
	const k = u.karir, b = String(bidang || "").toLowerCase();
	if (!k || !BIDANG.includes(b) || b === k.bidang) return null;
	k.bidang = b;
	k.kinerja = 0;
	k.riwayat.push({ jabatan: `${b} (pindah)`, at: Date.now() });
	return b;
}

export function statusKarir(k) {
	if (!k) return null;
	const keahlian = Object.entries(k.keahlian).filter(([n]) => !n.includes(":")).map(([n, v]) => `${n} ${v}`).join(", ") || "(belum ada)";
	return `- Bidang: ${k.bidang}\n- Jabatan: ${k.jabatan}\n- Gaji: ${k.gaji}\n- Kinerja: ${k.kinerja}\n- Keahlian: ${keahlian}\n- Tugas aktif: ${k.tugas.filter((t) => !t.selesai).length}\n- Cuti: ${k.cuti ? "ya" : "tidak"}`;
}

export function papanKarir(db) {
	return Object.entries(db.users || {})
		.map(([jid, u]) => ({ jid, kinerja: u.karir?.kinerja || 0, jabatan: u.karir?.jabatan || "-" }))
		.filter((x) => x.kinerja > 0)
		.sort((a, b) => b.kinerja - a.kinerja)
		.slice(0, 10);
}

export function cuti(u, aktif) {
	if (!u.karir) return false;
	u.karir.cuti = Boolean(aktif);
	return true;
}

export function pensiun(u) {
	if (!u.karir) return false;
	delete u.karir;
	return true;
}
