// Kontrol akses perintah. State disimpan di db agar ikut tersimpan otomatis.

const terakhir = new Map();

const peran = (command, db) => (db && db.access && db.access[command]) || "free";
const urutan = { free: 0, premium: 1, vip: 2, admin: 3, owner: 4 };

export function cekAkses({ db, chat, sender, command, isCreator, isAdmin, isPremium, isVip }) {
	if (isCreator) return { ok: true };
	const peranDibutuhkan = peran(command, db);
	const peranUser = isCreator ? "owner" : isAdmin ? "admin" : isVip ? "vip" : isPremium ? "premium" : "free";
	if ((urutan[peranDibutuhkan] || 0) > (urutan[peranUser] || 0)) {
		return { ok: false, alasan: `Perintah .${command} khusus ${peranDibutuhkan}.` };
	}
	const setChat = (db && db.set && db.set[chat]) || {};
	const dimatikan = Array.isArray(setChat.disabled) ? setChat.disabled : [];
	if (dimatikan.includes(command)) {
		if (!isAdmin) return { ok: false, alasan: `Perintah .${command} sedang dimatikan di grup ini.` };
	}
	const detik = (db && db.cooldowns && Number(db.cooldowns[command])) || 0;
	if (detik > 0) {
		const kunci = `${chat}:${sender}:${command}`;
		const waktu = Date.now();
		const sebelum = terakhir.get(kunci) || 0;
		if (waktu - sebelum < detik * 1000) {
			const sisa = Math.ceil((detik * 1000 - (waktu - sebelum)) / 1000);
			return { ok: false, alasan: `Tunggu ${sisa} detik sebelum memakai .${command} lagi.` };
		}
		terakhir.set(kunci, waktu);
		if (terakhir.size > 5000) {
			for (const [k, v] of terakhir) if (Date.now() - v > 86400000) terakhir.delete(k);
		}
	}
	return { ok: true };
}

export function aturAkses(db, command, role) {
	if (!db.access) db.access = {};
	if (!["free", "premium", "vip", "admin", "owner"].includes(role)) return false;
	db.access[command] = role;
	return true;
}

export function matikanPerintah(db, chat, command) {
	if (!db.set) db.set = {};
	if (!db.set[chat]) db.set[chat] = {};
	const daftar = Array.isArray(db.set[chat].disabled) ? db.set[chat].disabled : [];
	if (!daftar.includes(command)) daftar.push(command);
	db.set[chat].disabled = daftar;
}

export function hidupkanPerintah(db, chat, command) {
	if (!db.set || !db.set[chat] || !Array.isArray(db.set[chat].disabled)) return false;
	db.set[chat].disabled = db.set[chat].disabled.filter((c) => c !== command);
	return true;
}

export function aturCooldown(db, command, detik) {
	if (!db.cooldowns) db.cooldowns = {};
	if (!Number.isInteger(detik) || detik < 0 || detik > 3600) return false;
	db.cooldowns[command] = detik;
	return true;
}
