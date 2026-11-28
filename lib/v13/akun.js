// Akun, identitas, XP, dan lencana v13.

export function xpDari(u = {}) {
	return (u.skorBelajar || 0) + (u.soal?.benar || 0) + (u.koleksi || []).length + (u.xpBonus || 0);
}

export function levelDari(xp) {
	return Math.floor(xp / 10) + 1;
}

export function progresLevel(xp) {
	const level = levelDari(xp);
	const sebelumnya = (level - 1) * 10;
	const berikutnya = level * 10;
	return { level, xp, sebelumnya, berikutnya, sisa: berikutnya - xp };
}

export function kartuProfil(u = {}, role = "free", badge = []) {
	const p = progresLevel(xpDari(u));
	return `*Kartu Profil*\n\n- Role: ${role}\n- Level: ${p.level}\n- XP: ${p.xp}/${p.berikutnya}\n- Sisa ke level next: ${p.sisa}\n- Koleksi: ${(u.koleksi || []).length}\n- Lencana: ${badge.length ? badge.join(", ") : "(belum ada)"}`;
}

export function beriBadge(u, nama) {
	const list = u.badge || [];
	const bersih = String(nama || "").slice(0, 40);
	if (!bersih || list.includes(bersih)) return null;
	list.push(bersih);
	u.badge = list.slice(-20);
	return u.badge;
}

export function hapusBadge(u, nama) {
	const list = u.badge || [];
	const i = list.indexOf(String(nama || ""));
	if (i === -1) return null;
	list.splice(i, 1);
	u.badge = list;
	return u.badge;
}
