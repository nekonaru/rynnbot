// Papan peringkat multidimensi v16.

function papan(db, field, batas = 10) {
	return Object.entries(db.users || {})
		.map(([jid, u]) => ({ jid, nilai: Number(u[field] || 0) }))
		.filter((x) => x.nilai > 0)
		.sort((a, b) => b.nilai - a.nilai)
		.slice(0, batas);
}

export function papanUmum(db) {
	return Object.entries(db.users || {})
		.map(([jid, u]) => ({ jid, nilai: (u.poin || 0) + (u.skorBelajar || 0) + (u.xpBonus || 0) }))
		.filter((x) => x.nilai > 0)
		.sort((a, b) => b.nilai - a.nilai)
		.slice(0, 10);
}

export function papanPoin(db) { return papan(db, "poin"); }
export function papanKuis(db) { return papan(db, "skorBelajar"); }
export function papanGame(db, hit) {
	return Object.entries(hit || {})
		.filter(([k, v]) => /^(quiz|wordle|sudoku|game2048|turnamen)$/.test(k) && Number.isFinite(v))
		.sort((a, b) => b[1] - a[1])
		.slice(0, 10);
}

export function papanGrup(db, chat) {
	return (Array.isArray(db.set?.[chat]?.admin) ? db.set[chat].admin : [])
		.slice(0, 10)
		.map((jid) => ({ jid, nilai: 1 }));
}

export function papanKontribusi(db) {
	return Object.entries(db.users || {})
		.map(([jid, u]) => ({ jid, nilai: (u.riwayat || []).length }))
		.filter((x) => x.nilai > 0)
		.sort((a, b) => b.nilai - a.nilai)
		.slice(0, 10);
}

export function formatPapan(list) {
	return list.map((x, i) => `${i + 1}. @${String(x.jid || x[0]).split("@")[0]}: ${x.nilai ?? x[1]}`).join("\n");
}
