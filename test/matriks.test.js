import { test } from "node:test";
import assert from "node:assert/strict";
import { det2, invers2, kali2, transpose2 } from "../lib/matriks.js";

const dekat = (a, b) => Math.abs(a - b) < 1e-9;

test("determinan 2x2", () => {
	assert.equal(det2([2, 3, 1, 4]), 5);
	assert.equal(det2([1, 2, 2, 4]), 0);
	assert.equal(det2([1, 2, 3]), null);
});

test("invers 2x2", () => {
	const inv = invers2([2, 3, 1, 4]);
	assert.deepEqual(inv.map((x) => Number(x.toFixed(6))), [0.8, -0.6, -0.2, 0.4]);
	assert.equal(invers2([1, 2, 2, 4]), null);
});

test("perkalian 2x2", () => {
	assert.deepEqual(kali2([1, 2, 3, 4], [5, 6, 7, 8]), [19, 22, 43, 50]);
	assert.equal(kali2([1], [1, 2, 3, 4]), null);
});

test("transpose 2x2", () => {
	assert.deepEqual(transpose2([1, 2, 3, 4]), [1, 3, 2, 4]);
});
