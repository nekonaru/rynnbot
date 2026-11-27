import { test } from "node:test";
import assert from "node:assert/strict";
import { FAKTA, PUISI, PANTUN } from "../lib/data-umum.js";
import { HANGMAN_KATA } from "../lib/data-game.js";
import { RESEP } from "../lib/data-indonesia.js";
import { SOAL } from "../lib/soal.js";
import { PERIBAHASA } from "../lib/data-peribahasa.js";
import { BAHASA } from "../lib/data-bahasa-daerah.js";
import { DANAU } from "../lib/data-danau.js";
import { GUNUNG } from "../lib/data-gunung.js";
import { PULAU } from "../lib/data-pulau.js";
import { SUNGAI } from "../lib/data-sungai.js";
import { HARI_BERSEJARAH } from "../lib/data-hari-bersejarah.js";
import { PROVINSI } from "../lib/provinsi.js";
import { NEGARA, UNSUR, PLANET } from "../lib/data-dunia.js";
import { FAUNA, FLORA } from "../lib/data-fauna-flora.js";

const unik = (a) => new Set(a.map((x) => JSON.stringify(x))).size === a.length;

test("array data tidak mengandung null/undefined dan duplikat", () => {
	for (const [nama, arr] of [
		["FAKTA", FAKTA], ["PUISI", PUISI], ["PANTUN", PANTUN],
		["HANGMAN_KATA", HANGMAN_KATA], ["PERIBAHASA", PERIBAHASA],
		["BAHASA", BAHASA], ["DANAU", DANAU], ["GUNUNG", GUNUNG],
		["PULAU", PULAU], ["SUNGAI", SUNGAI], ["HARI_BERSEJARAH", HARI_BERSEJARAH],
		["FAUNA", FAUNA], ["FLORA", FLORA],
	]) {
		assert.ok(arr.length > 0, `${nama} kosong`);
		assert.ok(arr.every((x) => x !== null && x !== undefined), `${nama} mengandung null/undefined`);
		assert.ok(unik(arr), `${nama} mengandung duplikat persis`);
	}
});

test("pantun memiliki empat baris", () => {
	assert.ok(PANTUN.every((p) => typeof p === "string" && p.split("\n").length === 4), "ada pantun bukan 4 baris");
});

test("soal valid dan unik", () => {
	let total = 0;
	for (const [kategori, arr] of Object.entries(SOAL)) {
		assert.ok(Array.isArray(arr) && arr.length > 0, `SOAL.${kategori} kosong`);
		for (const s of arr) {
			assert.ok(typeof s.q === "string" && s.q.length > 0, `${kategori}: soal kosong`);
			assert.equal(s.o.length, 4, `${kategori}: jumlah opsi bukan 4`);
			assert.ok(Number.isInteger(s.a) && s.a >= 0 && s.a <= 3, `${kategori}: indeks jawaban invalid`);
			assert.ok(typeof s.p === "string" && s.p.length > 0, `${kategori}: pembahasan kosong`);
			assert.ok(s.o[s.a] && s.o[s.a].trim().length > 0, `${kategori}: jawaban kosong`);
			total++;
		}
		const pertanyaan = arr.map((s) => s.q);
		assert.equal(new Set(pertanyaan).size, pertanyaan.length, `SOAL.${kategori}: pertanyaan duplikat`);
	}
	assert.ok(total >= 200, "total soal terlalu sedikit");
});

test("resep dan pepatah konsisten", () => {
	assert.ok(Object.keys(RESEP).length > 50, "resep terlalu sedikit");
	assert.ok(Object.values(RESEP).every((r) => typeof r === "string" && r.length > 20), "resep rusak");
	assert.ok(PERIBAHASA.every((p) => p.pepatah && p.makna), "peribahasa tidak lengkap");
	assert.ok(unik(PERIBAHASA.map((p) => p.pepatah)), "peribahasa duplikat");
});

test(" data provinsi, negara, unsur, dan planet lengkap", () => {
	assert.equal(Object.keys(PROVINSI).length, 38);
	assert.ok(Object.values(PROVINSI).every((p) => p.nama && p.ibukota && p.gubernur));
	assert.ok(Object.keys(NEGARA).length >= 187);
	assert.ok(Object.values(NEGARA).every((n) => n.ibukota && n.matauang && n.benua));
	assert.equal(Object.keys(UNSUR).length, 118);
	assert.ok(Object.keys(PLANET).length >= 31);
});
