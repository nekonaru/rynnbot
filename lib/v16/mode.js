// Mode bot dan penanda fitur v16.

const MODE = {
	normal: { nama: "Normal", animasi: true, typing: true, ringkas: false },
	ringkas: { nama: "Ringkas", animasi: false, typing: false, ringkas: true },
	tenang: { nama: "Tenang", animasi: false, typing: false, ringkas: false },
};

export function daftarMode() {
	return Object.keys(MODE);
}

export function pakaiMode(globalObj, nama) {
	const k = String(nama || "").toLowerCase();
	if (!MODE[k]) return null;
	globalObj.modeBotAktif = k;
	return MODE[k];
}

export function modeSekarang(globalObj) {
	return MODE[globalObj.modeBotAktif || "normal"];
}

export function flagFitur(db, nama) {
	if (!db.featureFlag) db.featureFlag = {};
	const k = String(nama || "").toLowerCase().slice(0, 40);
	if (!k) return null;
	db.featureFlag[k] = db.featureFlag[k] === true;
	return db.featureFlag;
}

export function aturFitur(db, nama, aktif) {
	const k = String(nama || "").toLowerCase();
	if (!db.featureFlag || !(k in db.featureFlag)) return false;
	db.featureFlag[k] = Boolean(aktif);
	return true;
}

export function aktifFitur(db, nama) {
	return db.featureFlag?.[String(nama || "").toLowerCase()] === true;
}
