// Koperasi simulasi v16. Dana bersifat lokal dan tidak nyata.

export function koperasiBuat(db, chat, nama) {
	if (!db.koperasi) db.koperasi = {};
	const kunci = `${chat}:${String(nama || "").toLowerCase().slice(0, 30)}`;
	if (!nama || db.koperasi[kunci]) return null;
	db.koperasi[kunci] = { nama: String(nama).slice(0, 40), chat, anggota: [], simpanan: {}, pinjaman: {} };
	const list = Object.values(db.koperasi).filter((k) => k.chat === chat);
	if (list.length > 10) for (const k of list.slice(0, list.length - 10)) delete db.koperasi[`${chat}:${k.nama.toLowerCase().slice(0, 30)}`];
	return db.koperasi[kunci];
}

export function koperasiGabung(koperasi, jid) {
	if (!koperasi || koperasi.anggota.includes(jid)) return null;
	koperasi.anggota.push(jid);
	return koperasi.anggota;
}

export function koperasiSetor(koperasi, jid, nominal) {
	const n = Number(nominal);
	if (!koperasi || !Number.isInteger(n) || n < 1 || !koperasi.anggota.includes(jid)) return false;
	koperasi.simpanan[jid] = (koperasi.simpanan[jid] || 0) + n;
	return true;
}

export function koperasiPinjam(koperasi, jid, nominal) {
	const n = Number(nominal);
	if (!koperasi || !Number.isInteger(n) || n < 1) return false;
	const batas = (koperasi.simpanan[jid] || 0) * 2;
	if (batas < 1 || (koperasi.pinjaman[jid] || 0) + n > batas) return false;
	koperasi.pinjaman[jid] = (koperasi.pinjaman[jid] || 0) + n;
	return true;
}

export function koperasiRekap(koperasi) {
	if (!koperasi) return [];
	return koperasi.anggota.map((jid) => ({
		jid,
		simpanan: koperasi.simpanan[jid] || 0,
		pinjaman: koperasi.pinjaman[jid] || 0,
	}));
}

export function koperasiTutup(koperasi) {
	if (!koperasi) return false;
	koperasi.tutup = true;
	return true;
}
