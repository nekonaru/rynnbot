import { test } from "node:test";
import assert from "node:assert/strict";
import { formatTanggal, formatWaktu, bilah, potongTeks, hitungKata } from "../lib/teks.js";

test("formatTanggal", () => {
	assert.match(formatTanggal("2026-11-26T10:00:00Z", { denganHari: false }), /26 November 2026/);
	assert.match(formatTanggal("2026-11-26T10:00:00Z", { denganHari: true }), /Kamis/);
	assert.equal(formatTanggal("bukan-tanggal"), null);
	assert.equal(formatTanggal("2026-11-26T10:00:00Z", { zona: "Zona/Invalid" }), null);
});

test("formatWaktu", () => {
	assert.match(formatWaktu("2026-11-26T10:00:00Z", "UTC"), /10:00:00|10\.00\.00/);
	assert.equal(formatWaktu("bukan"), null);
});

test("bilah", () => {
	assert.equal(bilah(5, 10, 10), "█████░░░░░");
	assert.equal(bilah(0, 10, 4), "░░░░");
	assert.equal(bilah(10, 10, 4), "████");
	assert.equal(bilah(11, 10), null);
});

test("potongTeks", () => {
	assert.equal(potongTeks("abcdefghij", 5), "ab...");
	assert.equal(potongTeks("abc", 5), "abc");
});

test("hitungKata", () => {
	assert.deepEqual(hitungKata("Halo dunia. Ini tes!"),
		{ kata: 4, karakter: 20, karakterTanpaSpasi: 17, kalimat: 2 });
	assert.deepEqual(hitungKata("   "), { kata: 0, karakter: 0, karakterTanpaSpasi: 0, kalimat: 0 });
});
