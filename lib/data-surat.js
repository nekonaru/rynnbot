// Templat surat bahasa Indonesia sederhana untuk perintah .surat
// Isi bersifat contoh dan bisa disunting sendiri.

export const SURAT = [
	{
		nama: "Lamaran Kerja",
		kunci: "lamaran",
		isi: `Nama Anda
Alamat Anda
Nomor Telepon / Email

Kota, Tanggal

Kepada
Yth. Bapak/Ibu [Nama Penerima]
[Jabatan] di [Nama Perusahaan]

Dengan hormat,
Saya yang bertanda tangan di bawah ini:

Nama              : [Nama Anda]
Tempat/Tgl Lahir  : [Tempat, Tanggal Lahir]
Pendidikan        : [Pendidikan Terakhir]

Berdasarkan informasi yang saya peroleh, saya berminat untuk mengikuti seleksi [Posisi yang Dilamar] di [Nama Perusahaan]. Saya memiliki kemampuan [Keterampilan Utama] dan pengalaman [Pengalaman Singkat] yang relevan dengan posisi tersebut.

Bersama surat ini saya lampirkan riwayat hidup dan berkas pendukung lainnya. Saya berharap diberi kesempatan untuk mengikuti proses seleksi.

Demikian surat lamaran ini saya sampaikan. Atas perhatian dan waktunya, saya ucapkan terima kasih.

Hormat saya,

[Nama Anda]`,
	},
	{
		nama: "Izin Tidak Masuk Kerja",
		kunci: "izin",
		isi: `Kota, Tanggal

Kepada
Yth. Bapak/Ibu [Nama Atasan]
[Jabatan] di [Nama Perusahaan]

Dengan hormat,
Dengan surat ini saya mengajukan izin tidak masuk kerja pada tanggal [Tanggal] karena [Alasan Singkat]. Selama masa tersebut, pekerjaan saya akan dibantu oleh [Nama Rekan Kerja / "-"] agar tidak mengganggu kelancaran tim.

Saya akan segera menyusul setelah [Keterangan Tambahan]. Demikian surat izin ini saya buat, mohon maaf atas ketidaknyamanan yang ditimbulkan.

Atas perhatian dan pengertiannya, saya ucapkan terima kasih.

Hormat saya,
[Nama Anda]`,
	},
	{
		nama: "Undangan Rapat",
		kunci: "undangan",
		isi: `[Nama Instansi / Panitia]
[Alamat Instansi]

Kota, Tanggal

Nomor    : [Nomor Surat]
Lampiran : -
Perihal  : Undangan Rapat

Kepada
Yth. [Nama Penerima]
[Jabatan] di [Instansi]

Dengan hormat,
Kami mengundang Bapak/Ibu untuk menghadiri rapat yang akan diselenggarakan pada:

Hari/Tanggal : [Hari, Tanggal]
Pukul        : [Jam] WIB/WITA/WIT
Tempat       : [Tempat / Link Meeting]
Agenda       : [Agenda Rapat]

Mohon kehadiran tepat waktu. Apabila berhalangan, mohon kabari panitia melalui [Kontak Panitia].

Demikian undangan ini kami sampaikan. Atas perhatian dan kehadirannya, kami ucapkan terima kasih.

Hormat kami,
[Nama Panitia]
[Jabatan]`,
	},
	{
		nama: "Surat Kuasa",
		kunci: "kuasa",
		isi: `Kota, Tanggal

Saya yang bertanda tangan di bawah ini:

Nama    : [Nama Pemberi Kuasa]
Alamat  : [Alamat Pemberi Kuasa]

Dengan ini saya memberi kuasa kepada:

Nama    : [Nama Penerima Kuasa]
Alamat  : [Alamat Penerima Kuasa]

Untuk melakukan hal-hal sebagai berikut:
1. [Uraian Tugas 1]
2. [Uraian Tugas 2]

Surat kuasa ini berlaku sampai dengan tanggal [Tanggal Berakhir]. Saya menyatakan bahwa segala tindakan yang dilakukan penerima kuasa dalam batas tersebut menjadi tanggung jawab saya.

Demikian surat kuasa ini saya buat dengan sadar untuk dipergunakan sebagaimana mestinya.

Pemberi Kuasa,

[Nama dan Tanda Tangan]

Penerima Kuasa,

[Nama dan Tanda Tangan]`,
	},
	{
		nama: "Surat Resmi Singkat",
		kunci: "resmi",
		isi: `[KOP INSTANSI]
[Nama Instansi]
[Alamat / Kontak]

Kota, Tanggal

Nomor    : [Nomor Surat]
Lampiran : [Jumlah Lampiran / -]
Perihal  : [Perihal Surat]

Kepada
Yth. [Nama Penerima]
[Jabatan]
[Alamat Penerima]

Dengan hormat,
[Paragraf pembuka: maksud dan tujuan surat]

[Paragraf isi: penjelasan atau permohonan]

[Paragraf penutup: harapan dan ucapan terima kasih]

Demikian surat ini kami sampaikan untuk menjadi perhatian dan tindak lanjut.

Hormat kami,

[Nama Pejabat]
[Jabatan]`,
	},
];

export const cariSurat = (q) => {
	const key = String(q || "").trim().toLowerCase();
	if (!key) return null;
	return SURAT.find((s) => s.kunci === key) || SURAT.find((s) => s.nama.toLowerCase().includes(key)) || null;
};
