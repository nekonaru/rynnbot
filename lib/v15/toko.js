// Toko dan lelang simulasi v15. Harga ditentukan pengguna, bukan data pasar.

export function tokoBuka(db, chat, nama) {
	if (!db.toko) db.toko = {};
	const kunci = String(nama || "").toLowerCase().slice(0, 30);
	if (!kunci || db.toko[kunci]) return null;
	db.toko[kunci] = { nama: String(nama).slice(0, 40), chat, barang: {}, riwayat: [] };
	return db.toko[kunci];
}

export function tokoTambah(toko, barang, harga) {
	const n = Number(harga);
	const kunci = String(barang || "").toLowerCase().slice(0, 40);
	if (!toko || !kunci || !Number.isInteger(n) || n < 1) return false;
	toko.barang[kunci] = { nama: String(barang).slice(0, 40), harga: n, stok: (toko.barang[kunci]?.stok || 0) + 1 };
	return true;
}

export function tokoBeli(toko, u, barang) {
	const b = toko?.barang?.[String(barang || "").toLowerCase()];
	if (!b || b.stok < 1 || (u.money || 0) < b.harga) return null;
	u.money -= b.harga;
	b.stok -= 1;
	toko.riwayat.push({ pembeli: u.money, barang: b.nama, harga: b.harga, at: Date.now() });
	toko.riwayat = toko.riwayat.slice(-20);
	return b;
}

export function lelangBuat(db, chat, barang) {
	if (!db.lelang) db.lelang = {};
	db.lelang[chat] = { barang: String(barang || "").slice(0, 60), tawaran: [], tutup: false, at: Date.now() };
	return db.lelang[chat];
}

export function lelangTawar(lelang, jid, nominal) {
	const n = Number(nominal);
	if (!lelang || lelang.tutup || !Number.isInteger(n) || n < 1) return false;
	lelang.tawaran.push({ jid, nominal: n, at: Date.now() });
	lelang.tawaran = lelang.tawaran.slice(-20);
	return true;
}

export function lelangTutup(lelang) {
	if (!lelang) return null;
	lelang.tutup = true;
	lelang.pemenang = lelang.tawaran.slice().sort((a, b) => b.nominal - a.nominal)[0] || null;
	return lelang.pemenang;
}
