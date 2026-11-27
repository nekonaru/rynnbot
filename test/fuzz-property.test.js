import { test } from "node:test";
import assert from "node:assert/strict";
import { fpb, kpk, gcdDua } from "../lib/kalkulator.js";
import { bagiKelompok, bagiTim } from "../lib/pembagian.js";
import { buatBracket, catatMenang } from "../lib/turnamen.js";
import { parseBulat } from "../lib/kalkulator.js";

test("property: fpb x kpk = a x b untuk bilangan positif", () => {
	for (let a = 1; a <= 30; a++) {
		for (let b = 1; b <= 30; b++) {
			assert.equal(fpb([a, b]) * kpk([a, b]), a * b, `${a},${b}`);
		}
	}
});

test("property: gcd dan pembagian stabil", () => {
	for (let n = 1; n <= 100; n++) {
		assert.equal(gcdDua(n, n), n);
		assert.equal(gcdDua(n, 1), 1);
		assert.equal(gcdDua(n * 7, n * 11), n);
	}
});

test("fuzz parser bilangan: input aneh ditolak atau dibatasi", () => {
	const aneh = ["", "abc", "1e309", "-1", "1.5", "NaN", "Infinity", "0", "  12  ", "00012", "999999999999999999999"];
	for (const v of aneh) {
		const hasil = parseBulat(v);
		assert.ok(hasil === null || Number.isSafeInteger(hasil), `input ${v}`);
	}
});

test("fuzz pembagian: tidak pernah negatif atau melebihi jumlah", () => {
	for (let n = 1; n <= 50; n++) {
		for (let k = 1; k <= n; k++) {
			const h = bagiKelompok(n, k);
			assert.equal(h.distribusi.reduce((a, b) => a + b, 0), n);
			assert.ok(h.distribusi.every((x) => x >= 1));
		}
		if (n >= 2) {
			const t = bagiTim(n, 2);
			assert.ok(t.jumlahTim * 2 + t.sisa === n);
		}
	}
});

test("fuzz bracket: jumlah pertandingan selalu cukup", () => {
	for (let n = 2; n <= 12; n++) {
		const peserta = Array.from({ length: n }, (_, i) => `P${i + 1}`);
		const b = buatBracket(peserta);
		const total = b.babak.reduce((s, x) => s + x.pertandingan.length, 0);
		assert.ok(total >= n - 1, `peserta ${n}`);
	}
	const b = buatBracket(["A", "B", "C"]);
	assert.equal(catatMenang(b, 1, 0, "A").ok, true);
});
