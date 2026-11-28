// Ringkasan berbasis aturan lokal v26. Modul murni, tanpa efek samping saat import.
// Tidak memanggil API eksternal dan tidak menjalankan kode dari pengguna.

const BATAS_TRANSAKSI = 5;
const BATAS_RINCIAN = 5;
const BATAS_KODE = 5000;

const FITUR = {
	ai: "Pembantu percakapan dan ringkasan memakai aturan lokal.",
	ailaporandompet: "Ringkasan transaksi dompet memakai aturan lokal.",
	aipet: "Saran perawatan hewan peliharaan memakai aturan lokal.",
	belajar: "Skor belajar, kursus mini, dan kartu hafalan.",
	caridata: "Pencarian data dari indeks dataset lokal.",
	carilintas: "Pencarian lintas perintah, dataset, pengguna, dan grup.",
	cariperintah: "Pencarian perintah dari registry.",
	dompet: "Saldo dan mutasi money, limit, poin, serta tabungan.",
	game: "Skor game, papan peringkat, dan rekap turnamen.",
	grup: "Pengaturan, peraturan, dan peringatan grup.",
	karir: "Bidang, jabatan, kinerja, dan keahlian simulasi.",
	kebun: "Lahan, benih, perawatan, dan hasil panen.",
	kode: "Ulasan panjang, jumlah baris, dan jumlah kurung teks kode.",
	karya: "Karya studio konten dan artikel pengguna.",
	laporan: "Ringkasan aktivitas harian, mingguan, dan bulanan.",
	laporanharian: "Ringkasan transaksi, game, dan pesan hari ini.",
	laporanbulanan: "Ringkasan transaksi, poin, dan hari aktif bulan ini.",
	laporanmingguan: "Ringkasan transaksi, poin, dan hari aktif tujuh hari terakhir.",
	pencarian: "Pencarian perintah, dataset, pengguna, dan grup.",
	pet: "Perawatan hewan peliharaan virtual.",
	ringkasdompet: "Ringkasan transaksi dompet pengguna.",
	saranbelajar: "Saran belajar berdasarkan skor dan kursus.",
	sarankarir: "Saran karier berdasarkan kinerja dan keahlian.",
	sarankebun: "Saran kebun berdasarkan lahan, benih, dan gudang.",
	saranpet: "Saran hewan berdasarkan level dan kondisi tubuh.",
	ulaskarya: "Ringkasan karya studio dan artikel pengguna.",
	ulaskode: "Ulasan panjang, baris, dan kurung tanpa menjalankan kode.",
};

// Ambil teks pendek yang aman untuk ditampilkan.
function teks(nilai, maksimal = 100) {
	return String(nilai ?? "").trim().slice(0, maksimal);
}

// Angka bulat aman dan tidak negatif, atau nol bila tidak valid.
function angkaAman(nilai) {
	if (typeof nilai !== "number" && typeof nilai !== "string") return 0;
	const n = Number(nilai);
	return Number.isSafeInteger(n) && n >= 0 ? n : 0;
}

// Angka bulat aman yang boleh negatif, atau nol bila tidak valid.
function angkaBertanda(nilai) {
	if (typeof nilai !== "number" && typeof nilai !== "string") return 0;
	const n = Number(nilai);
	return Number.isSafeInteger(n) ? n : 0;
}

// Batasi nilai kondisi ke rentang 0 sampai 100.
function batasPersen(nilai) {
	return Math.min(100, angkaAman(nilai));
}

function formatAngka(nilai) {
	return angkaBertanda(nilai).toLocaleString("id-ID");
}

function ambilUser(db, jid) {
	const id = teks(jid, 120);
	if (!id || !db || typeof db !== "object") return null;
	const pengguna = db.users && typeof db.users === "object" && !Array.isArray(db.users) ? db.users : {};
	const u = pengguna[id];
	return u && typeof u === "object" && !Array.isArray(u) ? u : null;
}

// Transaksi milik user dibaca dari akhir log agar data terbaru yang tampil.
function transaksiUser(db, jid) {
	const id = teks(jid, 120);
	if (!id || !db || typeof db !== "object") return [];
	const log = Array.isArray(db.transaksiLog) ? db.transaksiLog.slice(-200) : [];
	return log
		.filter((t) => t && typeof t === "object" && (t.ke === id || t.dari === id))
		.slice(-BATAS_TRANSAKSI)
		.reverse();
}

export function ringkasDompet(db, jid) {
	const id = teks(jid, 120);
	const u = ambilUser(db, id);
	const saldo = angkaAman(u?.money);
	const baris = transaksiUser(db, id).map((t) => {
		const field = teks(t.field, 20) || "saldo";
		const nominal = angkaBertanda(t.nominal);
		const sumber = teks(t.sumber, 30) || "sistem";
		const tanda = nominal < 0 ? "-" : "+";
		return `- ${field}: ${tanda}${formatAngka(Math.abs(nominal))} (${sumber})`;
	});
	return `*Ringkasan Dompet*\n- Saldo money: ${formatAngka(saldo)}\n${baris.join("\n") || "- Belum ada transaksi"}`;
}

export function saranPet(u) {
	const p = u && typeof u === "object" ? u.pet : null;
	if (!p || typeof p !== "object" || Array.isArray(p)) return "Hewan peliharaan belum ada.";
	const level = angkaAman(p.level);
	const kenyang = batasPersen(p.kenyang);
	const senang = batasPersen(p.senang);
	const energi = batasPersen(p.energi);
	const kesehatan = batasPersen(p.kesehatan);
	const saran = [];
	if (kenyang < 30) saran.push("Berikan makan agar kenyang naik.");
	else if (kenyang < 60) saran.push("Kenyang masih sedang, beri makan ringan.");
	if (senang < 40) saran.push("Ajak bermain untuk menaikkan suasana hati.");
	if (energi < 30) saran.push("Istirahatkan hewan sebelum berlatih.");
	if (kesehatan < 50) saran.push("Rawat kesehatan memakai obat atau mandi.");
	if (!saran.length) saran.push("Semua kondisi baik, lanjutkan latihan dan perawatan.");
	return `*Saran Hewan*\n- Level: ${level}\n- Kenyang: ${kenyang}\n- Senang: ${senang}\n- Energi: ${energi}\n- Kesehatan: ${kesehatan}\n${saran.slice(0, 4).map((x) => `- ${x}`).join("\n")}`;
}

export function saranKebun(u) {
	const k = u && typeof u === "object" ? u.kebun : null;
	if (!k || typeof k !== "object" || Array.isArray(k)) return "Kebun belum ada.";
	const lahan = Array.isArray(k.lahan) ? k.lahan.slice(0, 20) : [];
	const kosong = lahan.filter((x) => !x || (typeof x === "object" && !x.benih)).length;
	const siap = lahan.filter((x) => x && typeof x === "object" && x.siap === true).length;
	const kering = lahan.filter((x) => x && typeof x === "object" && !x.siap && angkaAman(x.air) < 1).length;
	const gudang = k.gudang && typeof k.gudang === "object" && !Array.isArray(k.gudang) ? Object.keys(k.gudang).length : 0;
	const benih = k.benih && typeof k.benih === "object" && !Array.isArray(k.benih)
		? Object.values(k.benih).filter((n) => angkaAman(n) > 0).length
		: 0;
	const saran = [];
	if (siap > 0) saran.push(`Panen ${siap} lahan yang sudah siap.`);
	if (benih > 0 && kosong > 0) saran.push(`Tanam benih di ${kosong} lahan kosong.`);
	else if (benih === 0 && kosong > 0) saran.push("Beli benih untuk mengisi lahan kosong.");
	if (kering > 0) saran.push(`Siram ${kering} tanaman yang kekurangan air.`);
	if (!saran.length) saran.push("Kebun dalam kondisi baik, lanjutkan perawatan.");
	return `*Saran Kebun*\n- Lahan: ${lahan.length}\n- Kosong: ${kosong}\n- Siap panen: ${siap}\n- Gudang: ${gudang} jenis\n- Benih: ${benih} jenis\n${saran.slice(0, 4).map((x) => `- ${x}`).join("\n")}`;
}

export function saranKarir(u) {
	const k = u && typeof u === "object" ? u.karir : null;
	if (!k || typeof k !== "object" || Array.isArray(k)) return "Karier belum dimulai.";
	const bidang = teks(k.bidang, 30) || "umum";
	const jabatan = teks(k.jabatan, 30) || "magang";
	const kinerja = angkaAman(k.kinerja);
	const keahlian = k.keahlian && typeof k.keahlian === "object" && !Array.isArray(k.keahlian)
		? Object.entries(k.keahlian).filter(([nama, nilai]) => !nama.includes(":") && angkaAman(nilai) > 0)
		: [];
	const tugas = Array.isArray(k.tugas) ? k.tugas.filter((t) => t && !t.selesai).length : 0;
	const saran = [];
	if (kinerja >= 20) saran.push("Kinerja cukup, ajukan promosi.");
	else saran.push(`Kumpulkan ${20 - kinerja} kinerja lagi untuk promosi.`);
	if (!keahlian.length) saran.push("Pelajari keahlian baru untuk menaikkan nilai.");
	if (tugas === 0) saran.push("Ambil tugas agar kinerja terus bertambah.");
	if (k.cuti) saran.push("Sedang cuti, kembali bekerja bila sudah siap.");
	return `*Saran Karier*\n- Bidang: ${bidang}\n- Jabatan: ${jabatan}\n- Kinerja: ${kinerja}\n- Keahlian: ${keahlian.length} jenis\n- Tugas aktif: ${tugas}\n${saran.slice(0, 4).map((x) => `- ${x}`).join("\n")}`;
}

export function saranBelajar(u) {
	if (!u || typeof u !== "object" || Array.isArray(u)) return "Belum ada data belajar.";
	const skor = angkaAman(u.skorBelajar);
	const kursus = u.kursus;
	const daftar = Array.isArray(kursus)
		? kursus.filter(Boolean).slice(0, 20)
		: kursus && typeof kursus === "object" && !Array.isArray(kursus)
			? Object.values(kursus).filter(Boolean).slice(0, 20)
			: [];
	const aktif = teks(u.kursusAktif?.nama, 60);
	const selesai = Array.isArray(u.kursusSelesai) ? u.kursusSelesai.length : 0;
	const jumlah = daftar.length || selesai;
	const saran = [];
	if (aktif) saran.push(`Lanjutkan kursus ${aktif}.`);
	else if (jumlah > 0) saran.push("Mulai kursus baru untuk menambah pengetahuan.");
	else saran.push("Belum ada kursus, cari materi lalu mulai kursus pertamamu.");
	if (skor < 5) saran.push(`Jawab ${5 - skor} soal lagi untuk menaikkan skor belajar.`);
	else saran.push("Skor belajar sudah baik, coba materi yang lebih sulit.");
	return `*Saran Belajar*\n- Skor belajar: ${skor}\n- Kursus: ${jumlah}\n- Selesai: ${selesai}\n${saran.slice(0, 3).map((x) => `- ${x}`).join("\n")}`;
}

// Terima berbagai bentuk skor: larik objek, peta, atau angka tunggal.
function pasanganSkor(nilai) {
	if (Array.isArray(nilai)) {
		return nilai.slice(0, 20).map((x) => ({
			nama: teks(x?.nama ?? x?.game ?? x?.namaGame, 30),
			jumlah: angkaAman(x?.jumlah ?? x?.skor ?? x?.nilai),
		})).filter((x) => x.nama && x.jumlah > 0);
	}
	if (nilai && typeof nilai === "object" && !Array.isArray(nilai)) {
		return Object.entries(nilai).slice(0, 20).map(([nama, jumlah]) => ({
			nama: teks(nama, 30),
			jumlah: angkaAman(jumlah),
		})).filter((x) => x.nama && x.jumlah > 0);
	}
	if (typeof nilai === "number" || typeof nilai === "string") {
		const jumlah = angkaAman(nilai);
		return jumlah > 0 ? [{ nama: "total", jumlah }] : [];
	}
	return [];
}

export function ulasGame(u) {
	if (!u || typeof u !== "object" || Array.isArray(u)) return "- Belum ada skor game";
	const skor = pasanganSkor(u.skorGameTerpadu).concat(pasanganSkor(u.skorGame));
	const peta = new Map();
	for (const entri of skor) peta.set(entri.nama, (peta.get(entri.nama) || 0) + entri.jumlah);
	const baris = [...peta.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, BATAS_RINCIAN)
		.map(([nama, jumlah]) => `- ${nama}: ${formatAngka(jumlah)}`);
	return `*Skor Game*\n${baris.join("\n") || "- Belum ada skor game"}`;
}

export function ringkasGrup(db, chat) {
	const id = teks(chat, 120);
	const g = db && typeof db === "object" && db.groups && typeof db.groups === "object" ? db.groups[id] : null;
	if (!g || typeof g !== "object" || Array.isArray(g)) return "Grup tidak ditemukan.";
	const peraturan = teks(g.peraturan, 60) || "belum diatur";
	const warn = g.warn && typeof g.warn === "object" && !Array.isArray(g.warn) ? Object.keys(g.warn).length : 0;
	const autoReply = Array.isArray(g.autoReply) ? g.autoReply.slice(0, 20).length : 0;
	return `*Ringkasan Grup*\n- Mute: ${g.mute ? "aktif" : "mati"}\n- Antilink: ${g.antilink ? "aktif" : "mati"}\n- Antitoxic: ${g.antitoxic ? "aktif" : "mati"}\n- Peringatan: ${warn}\n- Balasan otomatis: ${autoReply}\n- Peraturan: ${peraturan}`;
}

export function ulasKarya(u) {
	if (!u || typeof u !== "object" || Array.isArray(u)) return "Belum ada karya.";
	const studio = u.studioV25 && typeof u.studioV25 === "object" && !Array.isArray(u.studioV25)
		? Object.values(u.studioV25).filter((x) => x && typeof x === "object").slice(0, 10)
		: [];
	const artikel = u.artikel && typeof u.artikel === "object" && !Array.isArray(u.artikel)
		? Object.values(u.artikel).filter((x) => x && typeof x === "object").slice(0, 10)
		: [];
	if (!studio.length && !artikel.length) return "Belum ada karya.";
	const terbit = studio.filter((x) => x.status === "terbit").length;
	const draft = studio.filter((x) => x.status === "draft").length;
	const judul = artikel.slice(0, 3).map((a) => `- Artikel: ${teks(a.judul, 50) || "tanpa judul"}`);
	return `*Ringkasan Karya*\n- Total: ${studio.length + artikel.length}\n- Studio: ${studio.length}\n- Terbit: ${terbit}\n- Draft: ${draft}\n- Artikel: ${artikel.length}\n${judul.join("\n")}`;
}

// Hanya menghitung ciri teks. Kode tidak pernah dieksekusi.
export function ulasKode(teksKode) {
	const sumber = String(teksKode ?? "").slice(0, BATAS_KODE);
	const baris = sumber ? sumber.split(/\r?\n/).length : 0;
	const buka = (sumber.match(/[(\[{]/g) || []).length;
	const tutup = (sumber.match(/[)\]}]/g) || []).length;
	const kurung = Math.min(buka + tutup, BATAS_KODE);
	const seimbang = buka === tutup ? "seimbang" : "tidak seimbang";
	return `*Ulasan Kode*\n- Panjang: ${sumber.length} karakter\n- Baris: ${Math.min(baris, BATAS_KODE)}\n- Kurung: ${kurung} (${seimbang})`;
}

export function ringkasFitur(nama) {
	const kunci = teks(nama, 40).toLowerCase();
	return FITUR[kunci] || "Fitur tidak dikenal.";
}
