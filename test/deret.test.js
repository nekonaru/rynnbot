import { test } from "node:test";
import assert from "node:assert/strict";
import { deretAritmetika, deretGeometri, linearSatu, persenDari, persenPerubahan } from "../lib/deret.js";

test("deret aritmetika", () => {
	assert.deepEqual(deretAritmetika(2, 3, 5), { sukuKe: 14, jumlah: 40 });
	assert.deepEqual(deretAritmetika(5, 0, 4), { sukuKe: 5, jumlah: 20 });
	assert.equal(deretAritmetika(1, 1, 0), null);
});

test("deret geometri", () => {
	assert.deepEqual(deretGeometri(2, 3, 4), { sukuKe: 54, jumlah: 80 });
	assert.deepEqual(deretGeometri(5, 1, 3), { sukuKe: 5, jumlah: 15 });
	assert.equal(deretGeometri(1, 2, 1001), null);
});

test("linearSatu", () => {
	assert.deepEqual(linearSatu(2, 3, 11), { tipe: "tunggal", x: 4 });
	assert.deepEqual(linearSatu(0, 5, 5), { tipe: "identitas", x: null });
	assert.deepEqual(linearSatu(0, 5, 6), { tipe: "inkonsisten", x: null });
});

test("persen", () => {
	assert.equal(persenDari(25, 200), 12.5);
	assert.equal(persenDari(1, 0), null);
	assert.equal(persenPerubahan(100, 125), 25);
	assert.equal(persenPerubahan(80, 60), -25);
	assert.equal(persenPerubahan(0, 10), null);
});
