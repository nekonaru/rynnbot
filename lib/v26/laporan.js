// Laporan aktivitas v26. Modul murni, tanpa efek samping saat import.
// Semua angka divalidasi dan state dibatasi ukurannya.

const PERIODE = ["harian", "mingguan", "bulanan"];
const FIELD = ["money", "limit", "poin", "tabungan", "skorBelajar"];
const BATAS_JADWAL = 50;
const BATAS_LOG = 200;
const HARI = 86400000;
const GAME = ["quiz", "soal", "hangman", "slot", "turnamen", "wordle", "sudoku", "game2048", "tebaktokoh", "kartutaruhan", "catur", "tebak"];

function teks(nilai, maksimal = 120) {
	return String(nilai ?? "").trim().slice(0, maksimal);
}

// Angka bulat aman dan tidak negatif, atau nol bila tidak valid.
function angkaAman(nilai) {
	if (typeof nilai !== "number" && typeof nilai !== "string") return 0;
	const n = Number(nilai);
	return Number.isSafeInteger(n) && n >= 0 ? n : 0;
}

// Angka bulat aman yang boleh negatif, atau nol bila tidak valid.
function angkaBertanda(nilai) {
	if (typeof nilai !== "number" && typeof nilai !== "string") return 0;
	const n = Number(nilai);
	return Number.isSafeInteger(n) ? n : 0;
}

// Cap waktu hanya diterima bila bulat, positif, dan masih masuk akal.
function waktuAman(nilai) {
	if (typeof nilai !== "number" && typeof nilai !== "string") return 0;
	const n = Number(nilai);
	return Number.isSafeInteger(n) && n > 0 && n < 4102444800000 ? n : 0;
}

function formatAngka(nilai) {
	return angkaBertanda(nilai).toLocaleString("id-ID");
}

function tanggal(waktu) {
	const d = new Date(waktu);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Rentang memakai waktu setempat sehingga batas hari sesuai pengguna.
function rentang(periode, sekarang) {
	const t = waktuAman(sekarang) || Date.now();
	const d = new Date(t);
	const tahun = d.getFullYear();
	const bulan = d.getMonth();
	let awal;
	let akhir;
	let label;
	if (periode === "mingguan") {
		akhir = new Date(tahun, bulan, d.getDate() + 1).getTime();
		awal = akhir - 7 * HARI;
		label = `${tanggal(awal)} sampai ${tanggal(akhir - HARI)}`;
	} else if (periode === "bulanan") {
		awal = new Date(tahun, bulan, 1).getTime();
		akhir = new Date(tahun, bulan + 1, 1).getTime();
		label = `${tahun}-${String(bulan + 1).padStart(2, "0")}`;
	} else {
		awal = new Date(tahun, bulan, d.getDate()).getTime();
		akhir = new Date(tahun, bulan, d.getDate() + 1).getTime();
		label = tanggal(t);
	}
	return { periode: label, awal: waktuAman(awal), akhir: waktuAman(akhir) };
}

function ambilUser(db, jid) {
	const id = teks(jid);
	if (!id || !db || typeof db !== "object") return null;
	const pengguna = db.users && typeof db.users === "object" && !Array.isArray(db.users) ? db.users : {};
	const u = pengguna[id];
	return u && typeof u === "object" && !Array.isArray(u) ? u : null;
}

// Log transaksi tidak menyimpan jid terpisah, jadi pemilik dikenali dari dari dan ke.
function transaksi(db, jid, awal, akhir) {
	const id = teks(jid);
	if (!id || !db || typeof db !== "object") return [];
	const log = Array.isArray(db.transaksiLog) ? db.transaksiLog.slice(-BATAS_LOG) : [];
	return log.filter((t) => {
		if (!t || typeof t !== "object" || Array.isArray(t)) return false;
		if (t.ke !== id && t.dari !== id) return false;
		const tanda = waktuAman(t.at);
		return tanda >= awal && tanda < akhir;
	});
}

// Entri log terstruktur disimpan sebagai teks JSON, bukan objek mentah.
function entriLog(db, jid, awal, akhir) {
	const id = teks(jid);
	if (!id || !db || typeof db !== "object") return [];
	const log = Array.isArray(db.logTerstruktur) ? db.logTerstruktur.slice(-BATAS_LOG) : [];
	const hasil = [];
	for (const baris of log) {
		let entri = baris;
		if (typeof baris === "string") {
			try {
				entri = JSON.parse(baris);
			} catch {
				continue;
			}
		}
		if (!entri || typeof entri !== "object" || Array.isArray(entri)) continue;
		if (teks(entri.pengirim) !== id) continue;
		const tanda = waktuAman(entri.waktu ?? entri.at);
		if (tanda < awal || tanda >= akhir) continue;
		hasil.push(entri);
	}
	return hasil;
}

function hitungPoin(daftarTransaksi) {
	return daftarTransaksi
		.filter((t) => t.field === "poin")
		.reduce((n, t) => n + angkaBertanda(t.nominal), 0);
}

function hitungAktif(entri) {
	const hari = new Set(entri.map((e) => tanggal(waktuAman(e.waktu ?? e.at))));
	return Math.min(hari.size, 7);
}

function hitungGame(db, u, jid, awal, akhir) {
	const dariLog = entriLog(db, jid, awal, akhir).filter((e) => {
		const perintah = teks(e.perintah, 40).toLowerCase();
		return GAME.some((nama) => perintah.includes(nama));
	}).length;
	let dariSkor = 0;
	for (const sumber of [u?.skorGame, u?.skorGameTerpadu]) {
		const larik = Array.isArray(sumber) ? sumber.slice(0, 20) : [];
		for (const entri of larik) {
			const tanda = waktuAman(entri?.at ?? entri?.waktu ?? u?.at);
			if (tanda >= awal && tanda < akhir) dariSkor += 1;
		}
	}
	return Math.min(dariLog + dariSkor, BATAS_LOG);
}

function laporanPeriode(db, jid, periode) {
	const id = teks(jid);
	if (!PERIODE.includes(periode)) return null;
	const { periode: label, awal, akhir } = rentang(periode, Date.now());
	const u = ambilUser(db, id);
	const t = transaksi(db, id, awal, akhir);
	const pesan = entriLog(db, id, awal, akhir);
	if (periode === "harian") {
		return {
			periode: label,
			transaksi: Math.min(t.length, BATAS_LOG),
			game: hitungGame(db, u, id, awal, akhir),
			pesan: Math.min(pesan.length, BATAS_LOG),
		};
	}
	return {
		periode: label,
		transaksi: Math.min(t.length, BATAS_LOG),
		poin: angkaAman(hitungPoin(t)),
		aktif: hitungAktif(pesan),
	};
}

export function harian(db, jid) {
	return laporanPeriode(db, jid, "harian");
}

export function mingguan(db, jid) {
	return laporanPeriode(db, jid, "mingguan");
}

export function bulanan(db, jid) {
	return laporanPeriode(db, jid, "bulanan");
}

// Pertumbuhan dihitung dari mutasi bulan berjalan, bukan dari data yang tidak ada.
export function pertumbuhan(db, jid) {
	const id = teks(jid);
	const u = ambilUser(db, id) || {};
	const { awal, akhir } = rentang("bulanan", Date.now());
	const mutasi = transaksi(db, id, awal, akhir);
	return FIELD.slice(0, 5).map((field) => {
		const sekarang = angkaAman(u[field]);
		const delta = angkaBertanda(mutasi.filter((t) => t.field === field).reduce((n, t) => n + angkaBertanda(t.nominal), 0));
		const sebelumnya = Math.max(0, sekarang - delta);
		return { field, sekarang, sebelumnya, selisih: angkaBertanda(sekarang - sebelumnya) };
	});
}

export function perbandingan(db, jid, a, b) {
	const hasilA = laporanPeriode(db, jid, String(a || "").toLowerCase());
	const hasilB = laporanPeriode(db, jid, String(b || "").toLowerCase());
	const selisih = {};
	for (const kunci of ["transaksi", "poin", "aktif", "game", "pesan"]) {
		selisih[kunci] = angkaBertanda((hasilB?.[kunci] || 0) - (hasilA?.[kunci] || 0));
	}
	return { a: hasilA, b: hasilB, selisih };
}

export function ekspor(db, jid) {
	const id = teks(jid);
	const h = harian(db, id);
	const m = mingguan(db, id);
	const b = bulanan(db, id);
	const t = pertumbuhan(db, id);
	const jadwal = db?.laporanJadwalV26 && typeof db.laporanJadwalV26 === "object" ? db.laporanJadwalV26[id] : null;
	const baris = [
		"*Laporan Rynn v26*",
		`- Pengguna: ${id || "-"}`,
		`- Jadwal: ${teks(jadwal?.interval, 20) || "tidak ada"}`,
		"",
		"*Harian*",
		`- Periode: ${h.periode}`,
		`- Transaksi: ${h.transaksi}`,
		`- Game: ${h.game}`,
		`- Pesan: ${h.pesan}`,
		"",
		"*Mingguan*",
		`- Periode: ${m.periode}`,
		`- Transaksi: ${m.transaksi}`,
		`- Poin: ${formatAngka(m.poin)}`,
		`- Hari aktif: ${m.aktif}`,
		"",
		"*Bulanan*",
		`- Periode: ${b.periode}`,
		`- Transaksi: ${b.transaksi}`,
		`- Poin: ${formatAngka(b.poin)}`,
		`- Hari aktif: ${b.aktif}`,
		"",
		"*Pertumbuhan*",
	];
	for (const entri of t) {
		baris.push(`- ${entri.field}: ${formatAngka(entri.sekarang)} (sebelumnya ${formatAngka(entri.sebelumnya)}, selisih ${formatAngka(entri.selisih)})`);
	}
	return baris.join("\n").slice(0, 4000);
}

export function jadwalkan(db, jid, interval) {
	const id = teks(jid);
	const pilihan = teks(interval, 20).toLowerCase();
	if (!id || !db || typeof db !== "object" || !PERIODE.includes(pilihan)) return null;
	if (!db.laporanJadwalV26 || typeof db.laporanJadwalV26 !== "object" || Array.isArray(db.laporanJadwalV26)) {
		db.laporanJadwalV26 = {};
	}
	const peta = db.laporanJadwalV26;
	if (!Object.hasOwn(peta, id) && Object.keys(peta).length >= BATAS_JADWAL) return null;
	const entri = { jid: id, interval: pilihan, at: Date.now() };
	peta[id] = entri;
	return { ...entri };
}

export function berhenti(db, jid) {
	const peta = db && typeof db === "object" ? db.laporanJadwalV26 : null;
	const id = teks(jid);
	if (!peta || typeof peta !== "object" || Array.isArray(peta) || !id || !Object.hasOwn(peta, id)) return false;
	delete peta[id];
	return true;
}
