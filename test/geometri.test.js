import { test } from "node:test";
import assert from "node:assert/strict";
import { luasBangun, volumeBangun, akarKuadrat } from "../lib/geometri.js";

const dekat = (a, b) => Math.abs(a - b) < 1e-9;

test("luasBangun", () => {
	assert.ok(dekat(luasBangun("persegi", 5).hasil, 25));
	assert.ok(dekat(luasBangun("persegi panjang", 4, 3).hasil, 12));
	assert.ok(dekat(luasBangun("segitiga", 6, 4).hasil, 12));
	assert.ok(dekat(luasBangun("trapesium", 3, 5, 4).hasil, 16));
	assert.ok(dekat(luasBangun("layang-layang", 6, 8).hasil, 24));
	assert.equal(luasBangun("persegi", -1), null);
	assert.equal(luasBangun("aneh", 1, 2), null);
});

test("volumeBangun", () => {
	assert.ok(dekat(volumeBangun("kubus", 3).hasil, 27));
	assert.ok(dekat(volumeBangun("balok", 2, 3, 4).hasil, 24));
	assert.ok(dekat(volumeBangun("tabung", 1, 10).hasil, 10 * Math.PI));
	assert.ok(dekat(volumeBangun("bola", 3).hasil, (4 * Math.PI * 27) / 3));
	assert.ok(dekat(volumeBangun("limas", 9, 6).hasil, 18));
	assert.equal(volumeBangun("kerucut", -1, 2), null);
});

test("akarKuadrat", () => {
	const dua = akarKuadrat(1, -5, 6);
	assert.equal(dua.tipe, "dua");
	assert.ok(dekat(dua.akar[0], 3) || dekat(dua.akar[1], 3));
	assert.ok(dekat(dua.akar[0], 2) || dekat(dua.akar[1], 2));
	const satu = akarKuadrat(1, 2, 1);
	assert.equal(satu.tipe, "satu");
	assert.equal(satu.akar[0], -1);
	const kompleks = akarKuadrat(1, 0, 1);
	assert.equal(kompleks.tipe, "kompleks");
	assert.equal(kompleks.real, 0);
	assert.equal(kompleks.imajiner, 1);
	assert.equal(akarKuadrat(0, 1, 1), null);
});
