#!/usr/bin/env node
// Lightweight, dependency-free checks for CI and local use:
// 1. Syntax-check every .js file with `node --check`.
// 2. Scan tracked text files for leaked API key patterns.
// Exit code 0 means clean.

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
console.log(`Checking ${files.length} files...`);

for (const file of files) {
	const ext = path.extname(file).toLowerCase();

	if (ext === ".js") {
		const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
		if (result.status !== 0) {
			failures++;
			console.error(`[SYNTAX] ${path.relative(root, file)}\n${result.stderr}`);
		}
	}

	if (TEXT_EXT.has(ext)) {
		const content = fs.readFileSync(file, "utf8");
		for (const pattern of SECRET_PATTERNS) {
			if (pattern.test(content)) {
				failures++;
				console.error(`[SECRET] ${path.relative(root, file)} matches ${pattern}`);
			}
		}
	}
}

if (failures > 0) {
	console.error(`\n${failures} check(s) failed.`);
	process.exit(1);
}
console.log("All checks passed.");
