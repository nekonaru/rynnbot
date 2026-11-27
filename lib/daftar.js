// Renderer daftar seragam untuk semua perintah data Rynn v6.
// Entri acak selalu muncul di atas, lalu daftar bernomor per halaman.

export const formatEntri = (entri) => {
	if (entri === null || entri === undefined) return "-";
	if (typeof entri === "string") return entri;
	if (typeof entri !== "object") return String(entri);
	const bagian = [];
	if (entri.nama) bagian.push(`*${entri.nama}*`);
	if (entri.provinsi || entri.daerah || entri.asal || entri.kategori) {
		bagian.push(`(${entri.provinsi || entri.daerah || entri.asal || entri.kategori})`);
	}
	const kepala = bagian.join(" ");
	const isi = entri.info || entri.rumus || entri.arti || entri.peran || entri.deskripsi || entri.makna || "";
	return isi ? `${kepala}\n   ${isi}` : kepala;
};

export const daftarHalaman = (data, halaman = 1, perHalaman = 12) => {
	if (!Array.isArray(data) || data.length === 0) return null;
	const totalHalaman = Math.max(1, Math.ceil(data.length / perHalaman));
	const hal = Math.max(1, Math.min(Number(halaman) || 1, totalHalaman));
	const mulai = (hal - 1) * perHalaman;
	return { halaman: hal, totalHalaman, entri: data.slice(mulai, mulai + perHalaman), mulai };
};

export const formatDaftar = ({ judul, data, halaman = 1, perHalaman = 12, format = formatEntri, contoh = [], denganAcak = true }) => {
	if (!Array.isArray(data) || !data.length) return `${judul}: tidak ada entri.`;
	const info = daftarHalaman(data, halaman, perHalaman);
	const acak = denganAcak ? data[Math.floor(Math.random() * data.length)] : null;
	const acakTeks = acak ? `Acak: ${format(acak)}\n\n` : "";
	const baris = info.entri.map((e, i) => `${info.mulai + i + 1}. ${format(e)}`).join("\n");
	const petunjuk = contoh.length ? `\n\n${contoh.join("\n")}` : "";
	const lanjut = info.halaman < info.totalHalaman ? `\nHalaman ${info.halaman}/${info.totalHalaman}.` : `Halaman ${info.halaman}/${info.totalHalaman}.`;
	return `*${judul} (${data.length})*\n\n${acakTeks}${baris}\n\n${lanjut}${petunjuk}`;
};

export const formatDetail = (judul, entri, format = formatEntri) => `*${judul}*\n\n${format(entri)}`;
