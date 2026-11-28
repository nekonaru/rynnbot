// Menghasilkan docs/COMMANDS.md dari registry, bukan dari teks yang ditulis manual.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { daftarCommandV2, daftarKategoriCommand } from "../lib/command-registry.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const daftar = daftarCommandV2().filter((e) => !e.hidden);
const kategori = daftarKategoriCommand();

const baris = [
	"# Daftar Perintah Rynn",
	"",
	"Dokumen ini dihasilkan otomatis dari registry perintah. Jangan disunting manual.",
	"",
	`Total ${daftar.length} perintah dalam ${kategori.length} kategori.`,
	"",
];

for (const k of kategori) {
	baris.push(`## ${k.kategori}`, "");
	baris.push("| Perintah | Contoh | Role | Biaya limit |", "|---|---|---|---|");
	for (const e of daftar.filter((x) => x.kategori === k.kategori)) {
		baris.push(`| \`.${e.command}\` | \`${e.contoh}\` | ${e.role} | ${e.biayaLimit} |`);
	}
	baris.push("");
}

const tujuan = path.join(root, "docs", "COMMANDS.md");
fs.mkdirSync(path.dirname(tujuan), { recursive: true });
fs.writeFileSync(tujuan, baris.join("\n"));
console.log(`${daftar.length} perintah ditulis ke docs/COMMANDS.md`);
