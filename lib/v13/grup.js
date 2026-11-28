// Grup dan administrasi v13.

export function daftarAdmin(db, chat, owner) {
	return [...new Set([...(global.owner || owner || []), ...(db.set?.[chat]?.admin || [])])];
}

export function tambahAdmin(db, chat, jid) {
	if (!db.set[chat]) db.set[chat] = {};
	const list = db.set[chat].admin || [];
	if (list.includes(jid)) return null;
	list.push(jid);
	db.set[chat].admin = list.slice(-20);
	return db.set[chat].admin;
}

export function aturPeraturan(db, chat, kategori, teks) {
	if (!db.groups[chat]) db.groups[chat] = {};
	const list = db.groups[chat].peraturanKategori || {};
	const k = String(kategori || "umum").toLowerCase().slice(0, 30);
	list[k] = String(teks || "").slice(0, 500);
	db.groups[chat].peraturanKategori = list;
	return list;
}

export function formatPeraturan(db, chat) {
	const list = db.groups?.[chat]?.peraturanKategori || {};
	return Object.entries(list).map(([k, v], i) => `${i + 1}. *${k}*: ${v}`).join("\n") || "(belum ada peraturan)";
}

export function tambahDomainAman(db, domain) {
	if (!db.domainAman) db.domainAman = [];
	const d = String(domain || "").toLowerCase().replace(/^https?:\/\//, "").split("/")[0];
	if (!d || db.domainAman.includes(d)) return null;
	db.domainAman.push(d);
	return db.domainAman.slice(-30);
}

export function statistikSpam(hit) {
	return Object.entries(hit || {})
		.filter(([k]) => /spam|antispam/i.test(k))
		.reduce((n, [, v]) => n + Number(v || 0), 0);
}

export function kartuGrup(chat, db, metadata) {
	const g = db.set?.[chat] || {};
	return `*Kartu Grup*\n\n- Anggota: ${metadata?.participants?.length || 0}\n- Role default: ${g.role || "free"}\n- Antilink: ${g.antilink ? "aktif" : "mati"}\n- Peraturan: ${Object.keys(db.groups?.[chat]?.peraturanKategori || {}).length} kategori`;
}

export function aktivitasGrup(hit) {
	return Object.entries(hit || {})
		.filter(([k, v]) => /^[a-z0-9_]+$/i.test(k) && Number.isFinite(v))
		.sort((a, b) => b[1] - a[1])
		.slice(0, 8);
}
