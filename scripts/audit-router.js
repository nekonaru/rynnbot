// Audit router v17. Gagal bila ada case duplikat, menu tanpa case, atau impor mati.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sumber = fs.readFileSync(path.join(root, "handler.js"), "utf8");

const semua = [...sumber.matchAll(/^\t\t\tcase\s+["']([a-z0-9_]+)["']:/gm)].map((m) => m[1]);
const duplikat = [...new Set(semua.filter((n, i) => semua.indexOf(n) !== i))];
const cases = new Set(semua);
const menu = new Set([...sumber.matchAll(/│\$\{setv\}\s+\$\{prefix\}([A-Za-z0-9_]+)/g)].map((m) => m[1].toLowerCase()));
const tanpaCase = [...menu].filter((c) => !cases.has(c));

const hasil = {
	case: cases.size,
	menu: menu.size,
	duplikat,
	tanpaCase,
};

console.log("Audit router utama (case pada indentasi tiga tab, bukan switch bersarang)");
console.log(JSON.stringify(hasil, null, 2));
if (duplikat.length || tanpaCase.length) process.exit(1);
