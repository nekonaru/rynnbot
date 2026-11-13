// MBTI personality test untuk perintah .mbti.
// 16 pertanyaan (4 per sumbu E/I, S/N, T/F, J/P), berbahasa Indonesia.
// Deskripsi 16 tipe ditulis singkat dan orisinal.

export const MBTI_PERTANYAAN = [
	{ sumbu: "EI", q: "Di acara kumpul besar, kamu cenderung?", a: ["Jadi pusat percakapan", "E"], b: ["Ngobrol sama beberapa orang dekat", "I"] },
	{ sumbu: "EI", q: "Setelah hari yang melelahkan, kamu mengisi ulang energi dengan?", a: ["Kumpul sama teman", "E"], b: ["Menyendiri/baca", "I"] },
	{ sumbu: "EI", q: "Dalam berbicara, kamu cenderung?", a: ["Bicara dulu baru pikir", "E"], b: ["Pikir dulu baru bicara", "I"] },
	{ sumbu: "EI", q: "Di dalam grup, kamu lebih sering?", a: ["Jadi yang memulai", "E"], b: ["Jadi pengamat", "I"] },
	{ sumbu: "SN", q: "Kamu lebih percaya?", a: ["Hal nyata dan praktis", "S"], b: ["Ide dan kemungkinan", "N"] },
	{ sumbu: "SN", q: "Memulai proyek baru, kamu fokus?", a: ["Detail dan langkah konkret", "S"], b: ["Gambaran besar dan visi", "N"] },
	{ sumbu: "SN", q: "Kamu lebih menikmati?", a: ["Data dan fakta", "S"], b: ["Teori dan konsep", "N"] },
	{ sumbu: "SN", q: "Saat belajar hal baru, kamu?", a: ["Praktik langsung", "S"], b: ["Pahami konsepnya dulu", "N"] },
	{ sumbu: "TF", q: "Teman minta saran, kamu?", a: ["Jujur dan logis", "T"], b: ["Empati dan dukung perasaannya", "F"] },
	{ sumbu: "TF", q: "Keputusan penting, kamu utamakan?", a: ["Logika dan konsistensi", "T"], b: ["Nilai dan harmoni", "F"] },
	{ sumbu: "TF", q: "Kritik yang kamu sukai?", a: ["Langsung dan jelas", "T"], b: ["Halus dan membangun", "F"] },
	{ sumbu: "TF", q: "Menghadapi konflik, kamu?", a: ["Menyelesaikan masalah inti", "T"], b: ["Menjaga hubungan dan perasaan", "F"] },
	{ sumbu: "JP", q: "Rencana kerja ideal menurutmu?", a: ["Terjadwal dengan deadline", "J"], b: ["Fleksibel dan spontan", "P"] },
	{ sumbu: "JP", q: "Kamu nyaman bekerja?", a: ["Selesai jauh sebelum deadline", "J"], b: ["Menyelesaikan mendekati deadline", "P"] },
	{ sumbu: "JP", q: "Meja/ruangan kerjamu biasanya?", a: ["Rapi dan teratur", "J"], b: ["Berantakan tapi fungsional", "P"] },
	{ sumbu: "JP", q: "Saat liburan, kamu?", a: ["Punya itinerary jelas", "J"], b: ["Jalan aja dulu, improvisasi", "P"] },
];

export const MBTI_TIPES = {
	"ISTJ": "*ISTJ - Si Administrator*\n\nTeliti, bertanggung jawab, dan menghormati aturan. Andalan tim dalam hal keteraturan.\nCocok: akuntansi, hukum, administrasi, teknik.",
	"ISFJ": "*ISFJ - Si Pelindung*\n\nHangat, setia, dan peduli pada orang lain. Menjaga tradisi dan kenyamanan bersama.\nCocok: keperawatan, pendidikan, layanan sosial, administrasi.",
	"INFJ": "*INFJ - Si Perencana*\n\nIdealis, bijaksana, dan punya visi jangka panjang. Suka membantu orang lain berkembang.\nCocok: penulis, konseling, psikologi, advokasi.",
	"INTJ": "*INTJ - Si Arsitek*\n\nAnalitis, mandiri, dan strategis. Melihat pola besar dan menyusun rencana matang.\nCocok: riset, strategi, teknologi, analisis.",
	"ISTP": "*ISTP - Si Pengrajin*\n\nTenang, praktis, dan lihai memecahkan masalah teknis. Belajar dengan praktik.\nCocok: teknisi, otomotif, olahraga, perbaikan.",
	"ISFP": "*ISFP - Si Seniman*\n\nLemah lembut, sensitif, dan menghargai keindahan. Mengekspresikan diri lewat karya.\nCocok: seni, desain, fotografi, kuliner.",
	"INFP": "*INFP - Si Mediator*\n\nPenuh empati, kreatif, dan setia pada nilai. Memperjuangkan hal yang bermakna.\nCocok: menulis, seni, komunitas, konseling.",
	"INTP": "*INTP - Si Pemikir*\n\nIngin tahu, logis, dan suka teori. Menyukai ide-ide orisinal.\nCocok: sains, riset, teknologi, matematika.",
	"ESTP": "*ESTP - Si Pemain*\n\nEnergik, berani, dan sigap di situasi nyata. Suka tantangan dan tindakan.\nCocok: bisnis, penjualan, olahraga, darurat.",
	"ESFP": "*ESFP - Si Penghibur*\n\nRiang, spontan, dan mudah bergaul. Membuat suasana hidup dan menyenangkan.\nCocok: seni pertunjukan, pariwisata, event, komunikasi.",
	"ENFP": "*ENFP - Si Juru Kampanye*\n\nAntusias, kreatif, dan hangat. Menginspirasi orang lain dengan ide-ide barunya.\nCocok: seni, komunikasi, marketing, komunitas.",
	"ENTP": "*ENTP - Si Pencetus*\n\nCerdas, cepat berpikir, dan suka debat ide. Mencari solusi inovatif.\nCocok: kewirausahaan, teknologi, strategi, media.",
	"ESTJ": "*ESTJ - Si Eksekutif*\n\nTegas, teratur, dan fokus pada hasil. Memimpin dengan struktur dan aturan.\nCocok: manajemen, militer, administrasi, bisnis.",
	"ESFJ": "*ESFJ - Si Konsul*\n\nHangat, suka membantu, dan fokus pada harmoni kelompok. Peduli pada perasaan semua orang.\nCocok: pendidikan, kesehatan, layanan, komunitas.",
	"ENFJ": "*ENFJ - Si Protagonis*\n\nKarismatik, empati, dan punya kemampuan memimpin orang lain. Menginspirasi dan membimbing.\nCocok: kepemimpinan, pendidikan, HR, pelatihan.",
	"ENTJ": "*ENTJ - Si Komandan*\n\nPercaya diri, strategis, dan berorientasi hasil. Memimpin dengan visi besar.\nCocok: eksekutif, kewirausahaan, konsultan, manajemen.",
};

export function hitungMBTI(jawaban) {
	const skor = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
	for (const s of jawaban) skor[s] = (skor[s] || 0) + 1;
	const tipe =
		(skor.E >= skor.I ? "E" : "I") +
		(skor.S >= skor.N ? "S" : "N") +
		(skor.T >= skor.F ? "T" : "F") +
		(skor.J >= skor.P ? "J" : "P");
	return tipe;
}
