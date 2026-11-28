// Pengawas, akses, dan pemulihan v25. Modul murni tanpa jaringan atau berkas.

import { health, metrik } from "../v12/owner.js";
import { daftarAkses } from "../v15/owner.js";
import { jadwalKerja } from "../v16/owner.js";
import { cekAkses } from "../access.js";

const BATAS_SEJARAH = 20;
const BATAS_TAMPIL = 10;
const BATAS_PERMINTAAN = 20;
const AWALAN_BUATAN = "v25_";

// Ambil bilangan bulat dari nilai apa pun. Null berarti nilai tidak valid.
function bulat(nilai) {
	if (nilai === null || nilai === undefined || nilai === "") return null;
	const n = Number(nilai);
	if (!Number.isFinite(n)) return null;
	return Math.round(n);
}

// Batasi bilangan bulat ke rentang tertentu, pakai bawaan bila tidak valid.
function rentang(nilai, minimum, maksimum, bawaan) {
	const n = bulat(nilai);
	if (n === null) return bawaan;
	return Math.min(maksimum, Math.max(minimum, n));
}

// Waktu entri backup untuk pengurutan. Entri tanpa waktu dianggap paling lama.
function waktuEntri(entri) {
	const n = bulat(entri?.at ?? entri?.waktu ?? entri?.terakhir);
	return n === null ? 0 : n;
}

export function ambang(db) {
	const a = db?.ambangV25;
	if (!a || typeof a !== "object") return { memori: 80, gagal: 5 };
	return {
		memori: rentang(a.memori, 1, 100, 80),
		gagal: rentang(a.gagal, 1, 100, 5),
	};
}

export function aturAmbang(db, kunci, nilai) {
	if (!db || typeof db !== "object") return null;
	const k = String(kunci || "").toLowerCase();
	if (k !== "memori" && k !== "gagal") return null;
	const n = Number(nilai);
	if (!Number.isInteger(n) || n < 1 || n > 100) return null;
	const hasil = ambang(db);
	hasil[k] = n;
	db.ambangV25 = hasil;
	return hasil;
}

export function skorKesehatan(db, globalObj) {
	const h = health(globalObj) || {};
	const batas = ambang(db);
	let skor = 100;
	const memori = bulat(h.memoriMB);
	if (memori !== null && memori > batas.memori) {
		skor -= Math.min(40, Math.ceil(((memori - batas.memori) / batas.memori) * 20));
	}
	const perintah = bulat(h.perintah);
	if (perintah === null || perintah < 1) skor -= 20;
	const uptime = bulat(h.uptime);
	if (uptime === null || uptime < 0) skor -= 10;
	if (metrik(db || {}).length === 0) skor -= 10;
	const gagal = bulat(db?.gagalV25);
	if (gagal !== null && gagal >= batas.gagal) skor -= Math.min(20, gagal);
	return Math.max(0, Math.min(100, skor));
}

export function rincianKesehatan(db, globalObj) {
	const h = health(globalObj) || {};
	const batas = ambang(db);
	const memori = bulat(h.memoriMB) ?? 0;
	const perintah = bulat(h.perintah) ?? 0;
	const uptime = bulat(h.uptime) ?? 0;
	const jumlahMetrik = metrik(db || {}).length;
	return [
		{ nama: "Memori", nilai: memori, status: memori > batas.memori ? "peringatan" : "aman" },
		{ nama: "Uptime", nilai: uptime, status: uptime < 0 ? "peringatan" : "aman" },
		{ nama: "Perintah", nilai: perintah, status: perintah < 1 ? "peringatan" : "aman" },
		{ nama: "Metrik", nilai: jumlahMetrik, status: jumlahMetrik < 1 ? "peringatan" : "aman" },
	];
}

export function sejarahKesehatan(db) {
	const sejarah = db?.sejarahSehatV25;
	return Array.isArray(sejarah) ? sejarah.slice(-10) : [];
}

export function catatKesehatan(db, skor) {
	const n = bulat(skor);
	if (!db || typeof db !== "object" || n === null || n < 0 || n > 100) return null;
	if (!Array.isArray(db.sejarahSehatV25)) db.sejarahSehatV25 = [];
	const entri = { skor: n, at: Date.now() };
	db.sejarahSehatV25.push(entri);
	db.sejarahSehatV25 = db.sejarahSehatV25.slice(-BATAS_SEJARAH);
	return entri;
}

export function auditAkses(db) {
	return daftarAkses(db || {}).slice(0, BATAS_TAMPIL);
}

export function ujiAkses(db, nama) {
	const perintah = String(nama || "").toLowerCase().replace(/^\./, "").slice(0, 40);
	if (!perintah) return null;
	const role = db?.access?.[perintah] || "free";
	if (typeof cekAkses !== "function") {
		return { perintah, role, ok: role === "free", keterangan: "Pemeriksaan akses tidak tersedia." };
	}
	// Salinan dipakai agar cooldown dan state asli tidak berubah saat pengujian.
	const salinan = { ...(db || {}), access: { [perintah]: role }, cooldowns: {}, set: {} };
	const hasil = cekAkses({ db: salinan, chat: "", sender: "", command: perintah });
	return { perintah, role, ok: Boolean(hasil?.ok), keterangan: hasil?.alasan || "" };
}

export function pulihkanAkses(db) {
	if (!db || typeof db !== "object") return false;
	const daftar = Array.isArray(db.aksesBuatanV25) ? db.aksesBuatanV25.slice(0, BATAS_SEJARAH) : [];
	if (db.access && typeof db.access === "object") {
		for (const kunci of daftar) delete db.access[String(kunci)];
		for (const kunci of Object.keys(db.access)) {
			if (kunci.startsWith(AWALAN_BUATAN)) delete db.access[kunci];
		}
	}
	db.aksesBuatanV25 = [];
	return true;
}

export function jadwalBackup(db) {
	const j = db?.jadwalBackupV25;
	if (!j || typeof j !== "object") return { interval: "harian", terakhir: null };
	return {
		interval: String(j.interval || "harian").slice(0, 20),
		terakhir: bulat(j.terakhir),
	};
}

export function ujiBackup(db) {
	const daftar = Array.isArray(db?.backup) ? db.backup : [];
	const sah = daftar
		.filter((e) => e && typeof e === "object" && (e.nama || e.berkas) && e.ada !== false)
		.slice(0, BATAS_TAMPIL);
	const terbaru = sah.slice().sort((a, b) => waktuEntri(b) - waktuEntri(a))[0] || null;
	return { jumlah: sah.length, terbaru };
}

export function pulihkanBackup(db, berkas) {
	const nama = String(berkas || "").trim().slice(0, 120);
	if (!db || typeof db !== "object" || !nama) return null;
	if (!Array.isArray(db.permintaanPulihkanV25)) db.permintaanPulihkanV25 = [];
	const entri = { berkas: nama, at: Date.now(), status: "menunggu" };
	db.permintaanPulihkanV25.push(entri);
	db.permintaanPulihkanV25 = db.permintaanPulihkanV25.slice(-BATAS_PERMINTAAN);
	return entri;
}

export function laporanPengawas(db, globalObj) {
	const jadwal = jadwalBackup(db);
	const otomasi = jadwalKerja(globalObj || {});
	return {
		skor: skorKesehatan(db, globalObj),
		akses: auditAkses(db).length,
		backup: ujiBackup(db),
		otomasi: {
			pengawas: Boolean(db?.pengawasAktif),
			sweeper: otomasi.sweeper,
			gc: otomasi.gc,
			panel: otomasi.panel,
			interval: jadwal.interval,
		},
	};
}

export function hentikanPengawas(db) {
	if (!db || typeof db !== "object") return false;
	db.pengawasAktif = false;
	return true;
}
