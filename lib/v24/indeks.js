// Registry otomasi v24. Satu tempat untuk validasi, mode kering, audit, dan batas.

import * as penjadwal from "./penjadwal.js";
import * as event from "./event.js";
import * as aturan from "./aturan.js";
import * as workflow from "./workflow.js";
import * as templat from "./templat.js";
import * as orkestrasi from "./orkestrasi.js";

const BATAS = { tugas: 30, eventPerJenis: 30, aturan: 30, workflow: 30, templat: 30, audit: 100 };

export function ringkasan(db) {
	return {
		tugas: penjadwal.daftarTugas(db).length,
		event: Object.values(db?.eventOtomasi || {}).reduce((n, l) => n + l.length, 0),
		aturan: aturan.daftar(db).length,
		workflow: workflow.daftar(db).length,
		templat: templat.daftarTemplat(db).length,
	};
}

export function validasi(db) {
	const aturanValid = aturan.daftar(db).map((a) => ({ nama: a.nama, ...aturan.validasi(db, a.nama) }));
	const workflowValid = workflow.daftar(db).map((w) => ({ nama: w.nama, langkah: workflow.status(db, w.nama)?.langkah || 0 }));
	return {
		aturan: aturanValid,
		workflow: workflowValid,
		masalah: [
			...aturanValid.filter((a) => !a.lengkap).map((a) => "aturan " + a.nama + ": " + a.alasan),
			...workflowValid.filter((w) => !w.langkah).map((w) => "workflow " + w.nama + ": langkah kosong"),
		],
	};
}

export function kering(db) {
	const eventKering = event.daftarEvent().flatMap((e) => event.jalankan(db, e, true));
	const workflowKering = workflow.daftar(db).flatMap((w) => workflow.jalankan(db, w.nama, true) || []);
	return { event: eventKering, workflow: workflowKering, jumlah: eventKering.length + workflowKering.length };
}

export function batas() { return { ...BATAS }; }

export function izin() {
	return [...new Set([...event.daftarAksi(), ...aturan.daftarAksi(), ...workflow.daftarAksi()])];
}

export function catatAudit(db, aksi, detail = "") {
	if (!db.otomasiAudit) db.otomasiAudit = [];
	db.otomasiAudit.push({ aksi: String(aksi).slice(0, 60), detail: String(detail).slice(0, 120), at: Date.now() });
	db.otomasiAudit = db.otomasiAudit.slice(-BATAS.audit);
	return db.otomasiAudit[db.otomasiAudit.length - 1];
}

export function audit(db) {
	return (db.otomasiAudit || []).slice(-20).reverse();
}

export function hentikanSemua(db) {
	for (const t of penjadwal.daftarTugas(db)) penjadwal.jedaTugas(db, t.nama, true);
	for (const list of Object.values(db.eventOtomasi || {})) for (const e of list) e.aktif = false;
	for (const a of aturan.daftar(db)) aturan.setAktif(db, a.nama, false);
	for (const w of workflow.daftar(db)) workflow.setAktif(db, w.nama, false);
	catatAudit(db, "hentikan-semua");
	return ringkasan(db);
}

export { penjadwal, event, aturan, workflow, templat, orkestrasi };
