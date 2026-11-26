// Perbaikan dan peragaan hasil diagnosa runtime.
// Fungsi murni: tidak membaca .env, tidak mencetak nilai kunci.

export const formatUptime = (ms) => {
	if (!Number.isFinite(ms) || ms < 0) return "-";
	const detik = Math.floor(ms / 1000);
	const hari = Math.floor(detik / 86400);
	const jam = Math.floor((detik % 86400) / 3600);
	const menit = Math.floor((detik % 3600) / 60);
	const sisa = detik % 60;
	const bagian = [];
	if (hari) bagian.push(`${hari} hari`);
	if (jam) bagian.push(`${jam} jam`);
	if (menit) bagian.push(`${menit} menit`);
	bagian.push(`${sisa} detik`);
	return bagian.join(" ");
};

export const statusApiKey = (terisi) => (terisi ? "terisi" : "kosong (fitur berbasis API tidak aktif)");

export const laporanDiagnosa = (info) => {
	const baris = [
		`Node.js: ${info.nodeVersion || "-"} (minimal 20)`,
		`Platform: ${info.platform || "-"}`,
		`Uptime: ${formatUptime(info.uptimeMs)}`,
		`ffmpeg: ${info.ffmpeg ? "terpasang" : "tidak ditemukan (perintah media tidak aktif)"}`,
		`NAZE_API_KEY: ${statusApiKey(info.naze)}`,
		`NEOSANTARA_API_KEY: ${statusApiKey(info.neosantara)}`,
		`Database: ${info.dbTipe || "lokal"}`,
		`Mode bot: ${info.mode || "-"}`,
		`Prefix: ${Array.isArray(info.prefix) && info.prefix.length ? info.prefix.join(" ") : "-"}`,
		`Zona waktu: ${info.zona || "-"}`,
	];
	if (info.totalData !== undefined) baris.push(`Entri data: ${Number(info.totalData).toLocaleString("id-ID")}`);
	return baris;
};
