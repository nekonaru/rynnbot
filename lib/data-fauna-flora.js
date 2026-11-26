// Fauna dan flora Indonesia untuk perintah .hewan dan .tumbuhan.
// Hanya spesies dan fakta yang umum diketahui; tanpa klaim jumlah populasi terkini.

export const FAUNA = [
	{ nama: "Komodo", asal: "Pulau Komodo, Rinca, dan sekitarnya (NTT)", info: "Reptil terbesar di dunia yang masih hidup." },
	{ nama: "Orangutan", asal: "Sumatera dan Kalimantan", info: "Primata besar yang sebagian besar hidup di pohon." },
	{ nama: "Gajah Sumatera", asal: "Sumatera", info: "Subspesies gajah Asia yang berukuran lebih kecil dari gajah Afrika." },
	{ nama: "Harimau Sumatera", asal: "Sumatera", info: "Harimau yang masih hidup di Indonesia." },
	{ nama: "Badak Jawa", asal: "Ujung Kulon, Jawa Barat", info: "Salah satu badak paling langka di dunia." },
	{ nama: "Cendrawasih", asal: "Papua", info: "Burung dengan bulu hias yang biasanya lebih cerah pada jantan." },
	{ nama: "Kasuari", asal: "Papua", info: "Burung besar yang tidak bisa terbang." },
	{ nama: "Ikan Arwana", asal: "Kalimantan dan Sumatera", info: "Ikan hias air tawar yang terkenal di seluruh dunia." },
	{ nama: "Duyung", asal: "Perairan pesisir Indonesia", info: "Mamalia laut yang memakan rumput laut." },
	{ nama: "Anoa", asal: "Sulawesi", info: "Sapi kecil endemik Sulawesi yang hidup di hutan." },
	{ nama: "Babirusa", asal: "Sulawesi", info: "Babi liar dengan taring yang melengkung ke atas." },
	{ nama: "Tarsius", asal: "Sulawesi", info: "Primata kecil dengan mata besar dan aktivitas malam hari." },
	{ nama: "Penyu Hijau", asal: "Pantai-pantai Indonesia", info: "Penyu yang bertelur di pasir pantai." },
	{ nama: "Elang Jawa", asal: "Jawa Barat", info: "Burung pemangsa endemik Pulau Jawa." },
	{ nama: "Loris", asal: "Jawa dan Sumatera", info: "Primata kecil yang bergerak lambat dan aktif di malam hari." },
	{ nama: "Ikan Todak", asal: "Perairan Indonesia", info: "Ikan laut dengan moncong panjang menyerupai pedang." },
];

export const FLORA = [
	{ nama: "Rafflesia arnoldii", asal: "Sumatera", info: "Bunga terbesar di dunia; tumbuh sebagai parasit pada tanaman lain." },
	{ nama: "Bunga Bangkai", asal: "Sumatera", info: "Bunga raksasa (Amorphophallus titanum) yang baunya menyerupai bangkai saat mekar." },
	{ nama: "Anggrek Bulan", asal: "Indonesia", info: "Anggrek hias terkenal dengan bunga berwarna putih." },
	{ nama: "Kantong Semar", asal: "Sumatera dan Kalimantan", info: "Tanaman karnivora yang daunnya membentuk kantong penyerang serangga." },
	{ nama: "Jati", asal: "Jawa", info: "Pohon penghasil kayu keras yang banyak dipakai untuk furnitur." },
	{ nama: "Meranti", asal: "Sumatera dan Kalimantan", info: "Pohon hutan penghasil kayu meranti." },
	{ nama: "Rotan", asal: "Hutan Indonesia", info: "Tanaman merambat yang batangnya dipakai untuk anyaman dan furnitur." },
	{ nama: "Bambu", asal: "Seluruh Indonesia", info: "Tanaman berbatang ruas yang tumbuh cepat dan banyak digunakan." },
	{ nama: "Padi", asal: "Seluruh Indonesia", info: "Tanaman pangan utama penghasil beras." },
	{ nama: "Kopi Gayo", asal: "Dataran Tinggi Gayo, Aceh", info: "Kopi Arabika yang terkenal secara internasional." },
	{ nama: "Teh", asal: "Jawa Barat dan dataran tinggi lainnya", info: "Tanaman perkebunan yang daunnya diolah menjadi minuman teh." },
	{ nama: "Cengkeh", asal: "Maluku", info: "Rempah-rempah yang bunganya dipakai sebagai bumbu." },
	{ nama: "Pala", asal: "Kepulauan Banda, Maluku", info: "Rempah-rempah dari biji buah pala." },
	{ nama: "Lada", asal: "Maluku dan Bangka", info: "Rempah-rempah yang bijinya dipakai sebagai bumbu pedas." },
	{ nama: "Vanili", asal: "Bali dan Nusa Tenggara", info: "Rempah-rempah dari buah anggrek vanili." },
	{ nama: "Melati", asal: "Seluruh Indonesia", info: "Bunga kecil beraroma harum yang sering dipakai dalam upacara." },
];

export const cariFauna = (q) => FAUNA.find((x) => x.nama.toLowerCase() === q) || FAUNA.find((x) => x.nama.toLowerCase().includes(q)) || null;
export const cariFlora = (q) => FLORA.find((x) => x.nama.toLowerCase() === q) || FLORA.find((x) => x.nama.toLowerCase().includes(q)) || null;

import { FAUNA_FINAL, FLORA_FINAL } from "./data-final.js";
for (const f of FAUNA_FINAL) if (!FAUNA.some((x) => x.nama === f.nama)) FAUNA.push(f);
for (const f of FLORA_FINAL) if (!FLORA.some((x) => x.nama === f.nama)) FLORA.push(f);
