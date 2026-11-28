// Renderer balasan terpadu Rynn v12.
// Semua perintah baru memakai satu bentuk: header, isi, footer, aksi.

import { BATAS, UKURAN } from "./design-token.js";

export function potongBalasan(isi, batas = UKURAN.maksPesan) {
	const teks = String(isi || "");
	if (teks.length <= batas) return [teks];
	const hasil = [];
	let sisa = teks;
	let nomor = 1;
	while (sisa.length > 0) {
		const potongan = sisa.slice(0, batas - 24);
		hasil.push(`${potongan}\n\n(${nomor}/${Math.ceil(teks.length / (batas - 24))})`);
		sisa = sisa.slice(batas - 24);
		nomor++;
	}
	return hasil;
}

export function bangunRespons({ judul = "", isi = "", catatan = "", aksi = [], footer = "" } = {}) {
	const ringkas = global?.modeBotAktif === "ringkas";
	if (ringkas) return [judul, isi, catatan, aksi.join("\n"), footer].filter(Boolean).join("\n\n");
	const bagian = [];
	if (judul) bagian.push(`*${judul}*`);
	if (isi) bagian.push(String(isi));
	if (catatan) bagian.push(`_${catatan}_`);
	if (aksi.length) bagian.push(aksi.map((a) => `- ${a}`).join("\n"));
	if (footer) bagian.push(footer);
	return bagian.join("\n\n");
}

export function formatHalaman(entri, halaman, totalHalaman, { judul = "Daftar", format } = {}) {
	const awal = (halaman - 1) * BATAS.halaman + 1;
	const baris = entri.map((e, i) => format ? format(e, awal + i) : `${awal + i}. ${e}`).join("\n");
	return bangunRespons({
		judul: `${judul} (${halaman}/${totalHalaman})`,
		isi: baris || "(kosong). Ketik .contoh <perintah> untuk mulai.",
		footer: halaman < totalHalaman ? `Lanjut: ${BATAS.halaman} entri berikutnya` : "Akhir daftar",
	});
}

export function formatKosong(petunjuk = "Ketik .contoh <perintah> untuk mulai.") {
	return bangunRespons({ judul: "Belum ada data", isi: `(kosong). ${petunjuk}` });
}

export function formatKonfirmasi({ judul = "Konfirmasi", detail = "", token = "", batas = BATAS.konfirmasiMs } = {}) {
	const menit = Math.round(batas / 60000);
	return bangunRespons({
		judul,
		isi: detail,
		catatan: `Ketik confirm ${token} dalam ${menit} menit.`,
	});
}

export function formatError(alasan, perbaikan) {
	return bangunRespons({ judul: "Gagal", isi: alasan, catatan: perbaikan });
}

export function kirimRespons(m, opsi) {
	const teks = bangunRespons(opsi);
	return m.reply(teks);
}
