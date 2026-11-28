// Profil pengguna v26. Modul murni, tanpa jaringan, berkas, atau efek samping saat import.

const BATAS_JID = 120;
const BATAS_NAMA = 40;
const BATAS_RIWAYAT = 10;
const BATAS_CADANGAN = 5;
const BATAS_LISTA = 50;
const BATAS_KUNCI = 50;
const BATAS_KEDALAMAN = 4;
const MODE = ["normal", "ringkas", "rapi"];
const BAHASA = ["id", "en"];
const KUNCI_PENGATURAN = ["notifikasi", "ringkas"];
const FIELD_CADANGAN = ["pet", "kebun", "karir", "belajar", "game", "pengaturanV26", "modeV26", "bahasaV26"];

function objekValid(nilai) {
	return Boolean(nilai) && typeof nilai === "object" && !Array.isArray(nilai);
}

function bulatValid(nilai) {
	if (nilai === null || nilai === undefined || nilai === "") return null;
	const n = Number(nilai);
	return Number.isSafeInteger(n) ? n : null;
}

function angka(nilai) {
	const n = bulatValid(nilai);
	return n === null || n < 0 ? 0 : n;
}

function teks(nilai, batas) {
	return String(nilai ?? "").trim().slice(0, batas);
}

// Salinan tanpa referensi bersama. Fungsi dan nilai tak dikenal dibuang.
function salinanAman(nilai, kedalaman = 0, dilihat = new WeakSet()) {
	if (nilai === null || typeof nilai !== "object") {
		if (typeof nilai === "number") return Number.isFinite(nilai) ? nilai : 0;
		if (typeof nilai === "string" || typeof nilai === "boolean") return nilai;
		return null;
	}
	if (kedalaman >= BATAS_KEDALAMAN || dilihat.has(nilai)) return null;
	dilihat.add(nilai);
	if (Array.isArray(nilai)) {
		return nilai.slice(0, BATAS_LISTA).map((item) => salinanAman(item, kedalaman + 1, dilihat));
	}
	const hasil = {};
	for (const [kunci, item] of Object.entries(nilai).slice(0, BATAS_KUNCI)) {
		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(kunci)) continue;
		hasil[kunci] = salinanAman(item, kedalaman + 1, dilihat);
	}
	return hasil;
}

// Kode pendek dari isi salinan. Tidak memakai state modul agar import tetap murni.
function kodeCadangan(data) {
	const ringkas = FIELD_CADANGAN.map((field) => `${field}:${JSON.stringify(data[field])}`).join("|");
	let h = 0;
	for (let i = 0; i < ringkas.length; i++) h = (h * 31 + ringkas.charCodeAt(i)) | 0;
	return `v26-${Date.now().toString(36)}-${(h >>> 0).toString(36)}`.slice(0, 32);
}

function adaIsi(nilai) {
	return objekValid(nilai) && Object.keys(nilai).length > 0;
}

export function pencapaian(u) {
	const sumber = objekValid(u) ? u : {};
	const pet = objekValid(sumber.pet) && angka(sumber.pet.level) > 0;
	const kebun = objekValid(sumber.kebun) && (angka(sumber.kebun.aksi) > 0 || Array.isArray(sumber.kebun.lahan));
	const karir = objekValid(sumber.karir) && teks(sumber.karir.jabatan, 30).length > 0;
	const belajar = typeof sumber.belajar === "number" ? angka(sumber.belajar) > 0 : adaIsi(sumber.belajar);
	const game = typeof sumber.game === "number" ? angka(sumber.game) > 0 : objekValid(sumber.game) && (angka(sumber.game.menang) > 0 || angka(sumber.game.total) > 0 || angka(sumber.game.skor) > 0);
	return [
		{ nama: "Pet dibesarkan", tercapai: pet },
		{ nama: "Kebun dirawat", tercapai: kebun },
		{ nama: "Karir dimulai", tercapai: karir },
		{ nama: "Belajar rutin", tercapai: belajar },
		{ nama: "Petualang game", tercapai: game },
	];
}

export function lengkap(u, db, jid) {
	const id = teks(jid, BATAS_JID);
	let sumber = objekValid(u) ? u : null;
	if (!sumber && objekValid(db?.users)) sumber = objekValid(db.users[id]) ? db.users[id] : null;
	if (!sumber) sumber = {};
	return {
		jid: id || teks(sumber.jid, BATAS_JID),
		money: angka(sumber.money),
		limit: angka(sumber.limit),
		poin: angka(sumber.poin),
		tabungan: angka(sumber.tabungan),
		pet: objekValid(sumber.pet) ? salinanAman(sumber.pet) : {},
		kebun: objekValid(sumber.kebun) ? salinanAman(sumber.kebun) : {},
		karir: objekValid(sumber.karir) ? salinanAman(sumber.karir) : {},
		pencapaian: pencapaian(sumber),
	};
}

// Riwayat dikembalikan sebagai array bila sumbernya valid, jika tidak objek kosong.
export function riwayat(u) {
	const sumber = objekValid(u) ? u.riwayatAktivitasV26 : null;
	if (!Array.isArray(sumber)) return {};
	return sumber.slice(-BATAS_RIWAYAT).filter((entri) => objekValid(entri)).map((entri) => salinanAman(entri));
}

export function pengaturan(u) {
	const bawaan = { notifikasi: true, ringkas: false };
	const simpan = objekValid(u) ? u.pengaturanV26 : null;
	if (!objekValid(simpan)) return bawaan;
	return {
		notifikasi: typeof simpan.notifikasi === "boolean" ? simpan.notifikasi : bawaan.notifikasi,
		ringkas: typeof simpan.ringkas === "boolean" ? simpan.ringkas : bawaan.ringkas,
	};
}

export function aturPengaturan(u, kunci, nilai) {
	if (!objekValid(u)) return null;
	const k = teks(kunci, 20).toLowerCase();
	if (!KUNCI_PENGATURAN.includes(k) || typeof nilai !== "boolean") return null;
	const hasil = pengaturan(u);
	hasil[k] = nilai;
	u.pengaturanV26 = hasil;
	return { ...hasil };
}

export function mode(u, nama) {
	if (!objekValid(u)) return null;
	const n = teks(nama, 20).toLowerCase();
	if (!MODE.includes(n)) return null;
	u.modeV26 = n;
	return n;
}

export function bahasa(u, nama) {
	if (!objekValid(u)) return null;
	const n = teks(nama, 10).toLowerCase();
	if (!BAHASA.includes(n)) return null;
	u.bahasaV26 = n;
	return n;
}

export function cadangan(u) {
	if (!objekValid(u)) return null;
	const data = {};
	for (const field of FIELD_CADANGAN) data[field] = salinanAman(u[field]);
	const entri = { kode: kodeCadangan(data), ...data };
	if (!Array.isArray(u.cadanganV26)) u.cadanganV26 = [];
	u.cadanganV26.push(salinanAman(entri));
	u.cadanganV26 = u.cadanganV26.slice(-BATAS_CADANGAN);
	return entri;
}

// Hanya field yang tercantum dalam daftar cadangan yang ditimpa.
export function pulihkan(u, kode) {
	if (!objekValid(u)) return false;
	const k = teks(kode, 32);
	if (!k || !Array.isArray(u.cadanganV26)) return false;
	const entri = u.cadanganV26.find((item) => objekValid(item) && item.kode === k);
	if (!entri) return false;
	for (const field of FIELD_CADANGAN) {
		if (!Object.prototype.hasOwnProperty.call(entri, field)) continue;
		u[field] = salinanAman(entri[field]);
	}
	return true;
}
