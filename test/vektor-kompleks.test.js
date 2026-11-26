import { test } from "node:test";
import assert from "node:assert/strict";
import { dotVektor, crossVektor, panjangVektor, kompleksTambah, kompleksKurang, kompleksKali, kompleksBagi, kompleksKonjugat, kompleksModulus } from "../lib/vektor-kompleks.js";

const dekat = (a, b) => Math.abs(a - b) < 1e-9;

test("dot product", () => {
	assert.equal(dotVektor([1, 2, 3], [4, 5, 6]), 32);
	assert.equal(dotVektor([2, 3], [4, 5]), 23);
	assert.equal(dotVektor([1, 2], [1, 2, 3]), null);
});

test("cross product", () => {
	assert.deepEqual(crossVektor([1, 0, 0], [0, 1, 0]), [0, 0, 1]);
	assert.deepEqual(crossVektor([1, 2, 3], [4, 5, 6]), [-3, 6, -3]);
	assert.equal(crossVektor([1, 2], [3, 4]), null);
});

test("panjang vektor", () => {
	assert.equal(panjangVektor([3, 4]), 5);
	assert.ok(dekat(panjangVektor([1, 2, 2]), 3));
	assert.equal(panjangVektor([1]), null);
});

test("operasi kompleks", () => {
	assert.deepEqual(kompleksTambah([3, 4], [1, -2]), [4, 2]);
	assert.deepEqual(kompleksKurang([3, 4], [1, -2]), [2, 6]);
	assert.deepEqual(kompleksKali([1, 2], [3, 4]), [-5, 10]);
	assert.deepEqual(kompleksBagi([1, 0], [0, 1]), [0, -1]);
	assert.equal(kompleksBagi([1, 1], [0, 0]), null);
	assert.deepEqual(kompleksKonjugat([3, -4]), [3, 4]);
	assert.equal(kompleksModulus([3, 4]), 5);
});
