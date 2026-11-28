// Konten kreatif v23. Ditulis sebagai karya bot, bukan klaim fakta.

const JENIS_SURAT = [
	"surat izin tidak masuk", "surat lamaran kerja", "surat undangan rapat", "surat pemberitahuan",
	"surat keterangan", "surat permohonan", "surat pengunduran diri", "surat terima kasih",
];
const KONTEKS = ["sekolah", "kantor", "grup", "organisasi", "keluarga", "usaha", "proyek", "acara"];
const NADA = ["formal", "santai", "singkat"];

export const TEMPLAT_SURAT = JENIS_SURAT.flatMap((jenis) =>
	KONTEKS.flatMap((konteks) =>
		NADA.map((nada) => ({
			nama: `${jenis} - ${konteks} - ${nada}`,
			isi: `Assalamualaikum dan salam sejahtera,\n\nDengan hormat,\nSaya menyampaikan ${jenis} untuk keperluan ${konteks} dengan gaya ${nada}.\n\nDemikian surat ini saya sampaikan. Terima kasih atas perhatiannya.\n\nHormat saya,\n[Nama]`,
		})),
	),
);

const BAHAN = ["beras", "jagung", "cabai", "tomat", "kentang", "wortel", "bawang", "bawang putih", "ayam", "telur", "ikan", "tahu", "tempe", "susu", "keju", "tepung", "gula", "garam", "minyak", "air"];
const CARA = ["direbus", "ditumis", "digoreng", "dipanggang", "dikukus", "diblender", "diaduk", "didiamkan"];

export const RESEP = BAHAN.flatMap((utama, i) =>
	CARA.slice(0, 5).map((cara, j) => ({
		nama: `${utama} ${cara}`,
		bahan: [utama, BAHAN[(i + 3) % BAHAN.length], BAHAN[(i + 7) % BAHAN.length], "garam", "minyak"],
		langkah: [
			`Siapkan ${utama} dan bahan pendampingnya.`,
			`Bersihkan bahan, lalu potong sesuai kebutuhan.`,
			`${utama.charAt(0).toUpperCase() + utama.slice(1)} ${cara} bersama bumbu.`,
			"Tes rasa, lalu sajikan selagi layak dikonsumsi.",
		],
	})),
);

export const PANTUN = [
	"Pagi hari menyapa sore, daun jatuh di halaman; langkah kecil terus dijalani, sampai tujuan perlahan.",
	"Di kebun tumbuh bunga mawar, di pasar berjualan pisang; ilmu kecil jadi bekal, untuk hari yang terang.",
	"Burung terbang di atas papan, ikan berenang di air; kerja baik tak pernah sia, hasilnya kelak terlihat.",
	"Menulis surat dengan pena, mengirim pesan lewat angin; sabar adalah kunci, saat jalan terasa sunyi.",
];

export const PUISI = [
	"Di antara langkah yang pelan, ada ruang untuk mulai lagi. Satu hari tak perlu sempurna, cukup jujur dan terus berjalan.",
	"Pagi memberi warna baru, sore menyimpan cerita. Kita hanya perlu menjaga api kecil agar tetap menyala.",
];

export const SUMBER = "Karya bot: templat dan resep disusun dari pola aman, bukan resep atau surat resmi";
