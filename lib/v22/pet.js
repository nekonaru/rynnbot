// Hewan peliharaan virtual v22. Semua data simulasi, bukan fakta biologis.

const JENIS = ["kucing", "anjing", "kelinci", "burung", "ikan", "hamster"];
const MAKANAN = { rumput: 5, wortel: 8, ikan: 10, daging: 15 };
const MAINAN = ["bola", "tali", "mainan kayu"];
const OBAT = { vitamin: 10, salep: 15 };

const batas = (n, min = 0, max = 100) => Math.max(min, Math.min(max, n));

export function daftarJenis() { return [...JENIS]; }
export function daftarMakanan() { return Object.entries(MAKANAN).map(([nama, harga]) => ({ nama, harga })); }
export function daftarMainan() { return [...MAINAN]; }
export function daftarObat() { return Object.entries(OBAT).map(([nama, harga]) => ({ nama, harga })); }

export function adopsi(u, jenis) {
	const j = String(jenis || "").toLowerCase();
	if (!JENIS.includes(j) || u.pet) return null;
	u.pet = {
		jenis: j, nama: j, kenyang: 60, senang: 60, energi: 60, kesehatan: 80,
		level: 1, xp: 0, bakat: [], barang: {}, evolusi: 0, aksi: 0,
	};
	return u.pet;
}

export function gantiNama(u, nama) {
	if (!u.pet || !nama) return null;
	u.pet.nama = String(nama).slice(0, 40);
	return u.pet;
}

function tambahXp(pet, jumlah) {
	pet.xp += jumlah;
	pet.aksi += 1;
	while (pet.xp >= pet.level * 20) {
		pet.xp -= pet.level * 20;
		pet.level += 1;
	}
	return pet;
}

export function beriMakan(u, jenis) {
	const p = u.pet, h = MAKANAN[String(jenis || "").toLowerCase()];
	if (!p || !h || (p.barang[jenis] || 0) < 1) return null;
	p.barang[jenis] -= 1;
	p.kenyang = batas(p.kenyang + h);
	return tambahXp(p, 2);
}

export function minum(u) {
	if (!u.pet) return null;
	u.pet.kenyang = batas(u.pet.kenyang + 5);
	return tambahXp(u.pet, 1);
}

export function main(u) {
	if (!u.pet || u.pet.energi < 5) return null;
	u.pet.energi = batas(u.pet.energi - 5);
	u.pet.senang = batas(u.pet.senang + 10);
	return tambahXp(u.pet, 3);
}

export function latih(u) {
	if (!u.pet || u.pet.energi < 10 || u.pet.kenyang < 10) return null;
	u.pet.energi = batas(u.pet.energi - 10);
	u.pet.kenyang = batas(u.pet.kenyang - 5);
	const bakat = ["lincah", "kuat", "cerdas", "setia"];
	const pilih = bakat[u.pet.level % bakat.length];
	if (!u.pet.bakat.includes(pilih)) u.pet.bakat.push(pilih);
	return tambahXp(u.pet, 6);
}

export function istirahat(u) {
	if (!u.pet) return null;
	u.pet.energi = batas(u.pet.energi + 20);
	u.pet.kesehatan = batas(u.pet.kesehatan + 5);
	return u.pet;
}

export function mandi(u) {
	if (!u.pet) return null;
	u.pet.kesehatan = batas(u.pet.kesehatan + 8);
	u.pet.senang = batas(u.pet.senang + 3);
	return tambahXp(u.pet, 1);
}

export function obat(u, jenis) {
	const p = u.pet, h = OBAT[String(jenis || "").toLowerCase()];
	if (!p || !h || (p.barang[jenis] || 0) < 1) return null;
	p.barang[jenis] -= 1;
	p.kesehatan = batas(p.kesehatan + h);
	return p;
}

export function beliBarang(u, jenis) {
	const nama = String(jenis || "").toLowerCase();
	const harga = MAKANAN[nama] ?? (MAINAN.includes(nama) ? 5 : OBAT[nama]);
	if (!harga || (u.money || 0) < harga) return null;
	u.money -= harga;
	u.pet = u.pet || {};
	u.pet.barang = u.pet.barang || {};
	u.pet.barang[nama] = (u.pet.barang[nama] || 0) + 1;
	return harga;
}

export function evolusi(u) {
	const p = u.pet;
	if (!p || p.level < 5 || p.evolusi >= 2) return null;
	p.evolusi += 1;
	p.kesehatan = batas(p.kesehatan + 10);
	return p;
}

export function statusPet(p) {
	if (!p) return null;
	return `- Nama: ${p.nama}\n- Jenis: ${p.jenis}\n- Level: ${p.level} (${p.xp}/${p.level * 20})\n- Kenyang: ${p.kenyang}\n- Senang: ${p.senang}\n- Energi: ${p.energi}\n- Kesehatan: ${p.kesehatan}\n- Bakat: ${p.bakat.join(", ") || "(belum ada)"}\n- Aksi: ${p.aksi}`;
}

export function papanPet(db) {
	return Object.entries(db.users || {})
		.map(([jid, u]) => ({ jid, level: u.pet?.level || 0, aksi: u.pet?.aksi || 0 }))
		.filter((x) => x.level > 0)
		.sort((a, b) => b.level - a.level || b.aksi - a.aksi)
		.slice(0, 10);
}

export function lepasPet(u) {
	if (!u.pet) return false;
	delete u.pet;
	return true;
}
