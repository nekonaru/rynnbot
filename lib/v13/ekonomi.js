// Ekonomi simulasi lanjutan v13. Bukan produk keuangan nyata.

export function rekeningBuat(u, nama) {
	const daftar = u.rekening || {};
	const kunci = String(nama || "").toLowerCase().slice(0, 30);
	if (!kunci || daftar[kunci] !== undefined) return null;
	daftar[kunci] = 0;
	u.rekening = daftar;
	return daftar;
}

export function rekeningPindah(u, nama, nominal) {
	const daftar = u.rekening || {};
	const kunci = String(nama || "").toLowerCase();
	const n = Number(nominal);
	if (!Number.isInteger(n) || n < 1 || daftar[kunci] === undefined || (u.money || 0) < n) return null;
	u.money -= n;
	daftar[kunci] += n;
	return daftar;
}

export function arisanBuat(db, chat, nama, nominal) {
	if (!db.arisan) db.arisan = {};
	const n = Number(nominal);
	if (!nama || !Number.isInteger(n) || n < 1) return null;
	const item = { id: Math.random().toString(36).slice(2, 7).toUpperCase(), nama: String(nama).slice(0, 60), nominal: n, bayar: {}, at: Date.now() };
	db.arisan[chat] = item;
	return item;
}

export function arisanBayar(arisan, jid) {
	if (!arisan) return null;
	arisan.bayar[jid] = (arisan.bayar[jid] || 0) + arisan.nominal;
	return arisan;
}

export function arisanRekap(arisan, anggota = []) {
	if (!arisan) return [];
	return anggota.map((jid) => ({ jid, bayar: arisan.bayar[jid] || 0 }));
}

export function skorKredit(u) {
	const utang = u.utang || 0;
	const tabungan = u.tabungan || 0;
	const riwayat = (u.uangLog || []).length;
	return Math.max(0, Math.min(100, 60 + Math.floor(tabungan / 10000) - Math.floor(utang / 1000) + Math.min(riwayat, 10)));
}

export function klaimAsuransi(dana, kerugian) {
	const n = Number(kerugian);
	if (!Number.isFinite(n) || n < 1) return null;
	const dibayar = Math.min(n, Number(dana) || 0);
	return { kerugian: n, dibayar, sisa: n - dibayar };
}

export function pajakSimulasi(nominal, persen = 10) {
	const n = Number(nominal);
	if (!Number.isFinite(n) || n < 0) return null;
	const pajak = Math.floor((n * persen) / 100);
	return { nominal: n, persen, pajak, total: n + pajak };
}

export function grafikKategori(pengeluaran) {
	const hitung = new Map();
	for (const item of pengeluaran || []) {
		const k = String(item.kategori || "lain").slice(0, 12);
		hitung.set(k, (hitung.get(k) || 0) + (item.nominal || 0));
	}
	const maks = Math.max(1, ...hitung.values());
	return [...hitung.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, 8)
		.map(([k, v]) => `${k.padEnd(12)} [${"#".repeat(Math.round((v / maks) * 10)).padEnd(10, "-")}] ${v.toLocaleString("id-ID")}`);
}
