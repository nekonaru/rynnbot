// Moderasi grup v26. Modul murni tanpa jaringan atau berkas.
// Semua state ditulis ke db.moderasiV26[chat] dan dibatasi ukurannya.

import { formatPeraturan } from "../v13/grup.js";
import { aturanUji } from "../v15/aturan.js";

const BATAS_PERINGATAN = 20;
const BATAS_MUTE = 20;
const BATAS_LOG = 15;
const MUTE_MIN = 1;
const MUTE_MAX = 1440;

// Ruang tulis dibuat bila belum ada. Pemanggil sudah tervalidasi di sini.
function ruang(db, chat) {
	if (!db || typeof db !== "object") return null;
	const c = String(chat || "");
	if (!c) return null;
	if (!db.moderasiV26 || typeof db.moderasiV26 !== "object" || Array.isArray(db.moderasiV26)) db.moderasiV26 = {};
	const r = db.moderasiV26[c];
	if (!r || typeof r !== "object" || Array.isArray(r)) db.moderasiV26[c] = {};
	return db.moderasiV26[c];
}

// Ruang baca tidak membuat state baru, dipakai fungsi yang bersifat inspeksi.
function ruangBaca(db, chat) {
	if (!db || typeof db !== "object") return null;
	const r = db.moderasiV26?.[String(chat || "")];
	return r && typeof r === "object" && !Array.isArray(r) ? r : null;
}

function jidBersih(jid) {
	return String(jid || "").trim().slice(0, 80);
}

// Catatan kegiatan selalu dibatasi lima belas entri terakhir.
function catatLog(r, aksi, detail) {
	if (!Array.isArray(r.log)) r.log = [];
	r.log.push({ aksi: String(aksi).slice(0, 30), detail: String(detail).slice(0, 120), at: Date.now() });
	r.log = r.log.slice(-BATAS_LOG);
	return r.log[r.log.length - 1];
}

export function aturan(db, chat) {
	if (!db || typeof db !== "object") return "(belum ada peraturan)";
	return String(formatPeraturan(db, String(chat || "")));
}

export function peringatan(db, chat, jid, alasan) {
	const r = ruang(db, chat);
	const target = jidBersih(jid);
	if (!r || !target) return null;
	if (!Array.isArray(r.peringatan)) r.peringatan = [];
	const entri = {
		jid: target,
		alasan: String(alasan || "").trim().slice(0, 120) || "tanpa alasan",
		at: Date.now(),
	};
	r.peringatan.push(entri);
	r.peringatan = r.peringatan.slice(-BATAS_PERINGATAN);
	catatLog(r, "peringatan", `${target}: ${entri.alasan}`);
	return entri;
}

export function mute(db, chat, jid, menit) {
	const r = ruang(db, chat);
	const target = jidBersih(jid);
	const n = Number(menit);
	if (!r || !target || !Number.isSafeInteger(n) || n < MUTE_MIN || n > MUTE_MAX) return null;
	if (!r.mute || typeof r.mute !== "object" || Array.isArray(r.mute)) r.mute = {};
	const daftar = Object.keys(r.mute);
	if (!r.mute[target] && daftar.length >= BATAS_MUTE) {
		daftar.sort((a, b) => (Number(r.mute[a]?.at) || 0) - (Number(r.mute[b]?.at) || 0));
		delete r.mute[daftar[0]];
	}
	const sekarang = Date.now();
	const entri = { jid: target, menit: n, sampai: sekarang + n * 60000, at: sekarang };
	r.mute[target] = entri;
	if (db.groups?.[chat] && typeof db.groups[chat] === "object") db.groups[chat].mute = true;
	catatLog(r, "mute", `${target}: ${n} menit`);
	return entri;
}

export function unmute(db, chat, jid) {
	const r = ruangBaca(db, chat);
	const target = jidBersih(jid);
	if (!r || !target || !r.mute || typeof r.mute !== "object" || Array.isArray(r.mute) || !r.mute[target]) return false;
	delete r.mute[target];
	if (db.groups?.[chat] && typeof db.groups[chat] === "object" && !Object.keys(r.mute).length) db.groups[chat].mute = false;
	catatLog(r, "unmute", target);
	return true;
}

export function log(db, chat) {
	const r = ruangBaca(db, chat);
	if (!r || !Array.isArray(r.log)) return [];
	return r.log.slice(-BATAS_LOG);
}

export function statistik(db, chat) {
	const r = ruangBaca(db, chat);
	const jumlahPeringatan = Array.isArray(r?.peringatan) ? r.peringatan.length : 0;
	const jumlahMute = r?.mute && typeof r.mute === "object" && !Array.isArray(r.mute) ? Object.keys(r.mute).length : 0;
	return { peringatan: jumlahPeringatan, mute: jumlahMute, total: jumlahPeringatan + jumlahMute };
}

export function auto(db, chat, aktif) {
	const r = ruang(db, chat);
	if (!r) return false;
	r.auto = Boolean(aktif);
	if (db.groups?.[chat] && typeof db.groups[chat] === "object") db.groups[chat].autoModerasi = r.auto;
	catatLog(r, "auto", r.auto ? "aktif" : "mati");
	return r.auto;
}

// Pengujian hanya membaca aturan, jadi tidak menambah atau mengubah state.
export function uji(db, chat, teks) {
	if (!db || typeof db !== "object") return null;
	const hasil = aturanUji(db, String(chat || ""), teks);
	return hasil?.balasan ? String(hasil.balasan).slice(0, 500) : null;
}
