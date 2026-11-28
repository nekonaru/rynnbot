// Audit kontrak state v17. Menemukan field yang ditulis tetapi tidak pernah dibaca.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function berkasJs(dir) {
	const hasil = [];
	for (const entri of fs.readdirSync(dir, { withFileTypes: true })) {
		const penuh = path.join(dir, entri.name);
		if (entri.isDirectory()) {
			if (!["node_modules", ".git", "database", "backup", "rynn-session"].includes(entri.name)) hasil.push(...berkasJs(penuh));
		} else if (entri.name.endsWith(".js")) hasil.push(penuh);
	}
	return hasil;
}

const sumber = berkasJs(root)
	.filter((f) => !f.includes("scripts" + path.sep))
	.map((f) => fs.readFileSync(f, "utf8"))
	.join("\n");

const ditulis = new Set();
for (const m of sumber.matchAll(/\b(?:db|u|global|user|globalObj)\.([A-Za-z_]\w*)\s*(?:\?\.)?\s*=(?!=)/g)) ditulis.add(m[1]);

const tidakDibaca = [...ditulis].filter((nama) => {
	const baca = new RegExp(`\\b(?:db|u|global|user|globalObj)\\?\\.${nama}\\b|\\b(?:db|u|global|user|globalObj)\\.${nama}\\b`);
	const jumlah = (sumber.match(baca) || []).length;
	const tulis = (sumber.match(new RegExp(`\\b(?:db|u|global|user|globalObj)\\.${nama}\\s*(?:\\?\\.)?\\s*=(?!=)`, "g")) || []).length;
	return jumlah <= tulis;
}).sort();

console.log(JSON.stringify({ fieldDitulis: ditulis.size, kemungkinanTulisSaja: tidakDibaca }, null, 2));
// Audit ini bersifat informasi. Tidak menggagalkan CI karena pola baca tidak selalu literal.
