// Token desain Rynn v12. Sumber warna dari assets/rynn-icon.svg.
// Dipakai bersama oleh balasan WhatsApp, CLI, dan panel lokal.

export const WARNA = {
	ungu: "#6D5AE6",
	unguGelap: "#3B2E8C",
	krem: "#FFF6E8",
	oranye: "#FF9E5E",
	teks: "#1B1530",
	latar: "#F7F5FF",
};

export const UKURAN = {
	grid: 8,
	radius: 12,
	pill: 999,
	maksPesan: 1200,
	perHalaman: 8,
};

export const BATAS = {
	halaman: 8,
	konfirmasiMs: 5 * 60 * 1000,
	typingMs: 350,
	progressTahap: 3,
};

export const IKON = {
	avatar: "assets/rynn-icon.svg",
	lockup: "assets/rynn-lockup.svg",
	thumbnail: "src/media/rynn.png",
};

export const kelasWarna = (nama) => WARNA[nama] || WARNA.teks;
