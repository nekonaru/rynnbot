#!/usr/bin/env node
// Check ringan tanpa dependency untuk CI dan pemakaian lokal:
// 1. Cek syntax setiap file .js dengan `node --check`.
// 2. Pindai file teks ter-track untuk pola API key bocor.
// Exit code 0 berarti bersih.

import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SKIP_DIRS = new Set(["node_modules", ".git", "database", "rynn-session", "backup", "backup_before_update"]);
const TEXT_EXT = new Set([".js", ".json", ".md", ".yml", ".yaml", ".nix", ".sh", ".ps1", ".cmd", ".example", ".txt", ".py"]);
const SECRET_PATTERNS = [/gsk_[A-Za-z0-9]{20,}/, /nz-[0-9a-f]{10,}/, /nsk_[0-9a-f]{16,}/];

let failures = 0;

function walk(dir) {
	const out = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		if (entry.isDirectory()) {
			if (SKIP_DIRS.has(entry.name)) continue;
			out.push(...walk(path.join(dir, entry.name)));
		} else {
			out.push(path.join(dir, entry.name));
		}
	}
	return out;
}

const files = walk(root);
console.log(`Memeriksa ${files.length} file...`);

for (const file of files) {
	const ext = path.extname(file).toLowerCase();

	if (ext === ".js") {
		const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
		if (result.status !== 0) {
			failures++;
			console.error(`[SINTAKS] ${path.relative(root, file)}\n${result.stderr}`);
		}
	}

	if (TEXT_EXT.has(ext)) {
		const content = fs.readFileSync(file, "utf8");
		for (const pattern of SECRET_PATTERNS) {
			if (pattern.test(content)) {
				failures++;
				console.error(`[SECRET] ${path.relative(root, file)} cocok dengan ${pattern}`);
			}
		}
	}
}

if (failures > 0) {
	console.error(`\n${failures} pemeriksaan gagal.`);
	process.exit(1);
}
console.log("Semua pemeriksaan lolos.");
