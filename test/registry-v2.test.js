import { test } from "node:test";
import assert from "node:assert/strict";
import { daftarCommandV2, statistikRegistry, infoCommand } from "../lib/command-registry.js";

test("registry v2 memiliki metadata lengkap", () => {
	const d = daftarCommandV2();
	assert.ok(d.length > 800);
	const contoh = d.find((e) => e.command === "rumus");
	assert.ok(contoh);
	assert.equal(contoh.kategori, "EDUKASI");
	assert.equal(typeof contoh.alias, "object");
	assert.equal(typeof contoh.biayaLimit, "number");
	assert.equal(typeof contoh.hidden, "boolean");
	assert.ok(["owner", "admin", "grup", "semua"].includes(contoh.role));
	assert.ok(contoh.contoh.startsWith("."));
});

test("alias case berurutan tercatat", () => {
	const off = infoCommand("off");
	assert.equal(off.command, "off");
	assert.ok(off.alias.includes("shutdown"));
});

test("info command mengutamakan nama persis", () => {
	assert.equal(infoCommand("rumus").kategori, "EDUKASI");
});

test("statistik registry konsisten", () => {
	const s = statistikRegistry();
	assert.equal(s.total, daftarCommandV2().length);
	assert.equal(s.terdaftar + s.tersembunyi, s.total);
	assert.ok(s.kategori >= 1);
});
