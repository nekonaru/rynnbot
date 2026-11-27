// Kategori progres pribadi: skor, level, dan pencapaian.

export const skorProgres = (u = {}) =>
	(u.skorBelajar || 0) + (u.soal?.benar || 0) + (u.koleksi || []).length;

export const hitungLevel = (u = {}) => ({
	skor: skorProgres(u),
	level: Math.floor(skorProgres(u) / 5) + 1,
});

export const formatAchievement = (u = {}, adaJuara = false) => {
	const daftar = [
		["Pemula", true],
		["Pemain Soal", (u.soal?.benar || 0) >= 1],
		["Penulis", (u.skorBelajar || 0) >= 5],
		["Kolektor", (u.koleksi || []).length >= 5],
		["Turnamen", adaJuara],
	];
	return `*Achievement*\n\n${daftar.map(([n, o]) => `${o ? "[v]" : "x"} ${n}`).join("\n")}`;
};

export const formatLevel = (u = {}) => {
	const { level, skor } = hitungLevel(u);
	return `*Level*\n\nLevel: *${level}*\nSkor: ${skor}\nNaik tiap 5 skor.`;
};

export const formatLevelboard = (users = {}) => {
	const entri = Object.entries(users)
		.map(([jid, u]) => ({ jid, ...hitungLevel(u) }))
		.sort((a, b) => b.skor - a.skor)
		.slice(0, 10);
	return `*Levelboard*\n\n${entri.map((e, i) => `${i + 1}. @${e.jid.split("@")[0]}: level ${e.level} (${e.skor} skor)`).join("\n")}`;
};
