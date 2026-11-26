import { test } from "node:test";
import assert from "node:assert/strict";
import { keBasis, dariBasis, konversiBasis } from "../lib/basis.js";

test("keBasis", () => {
	assert.equal(keBasis(10, 2), "1010");
	assert.equal(keBasis(255, 16), "FF");
	assert.equal(keBasis(0, 8), "0");
	assert.equal(keBasis(35, 36), "Z");
	assert.equal(keBasis(10, 1), null);
});

test("dariBasis", () => {
	assert.equal(dariBasis("1010", 2), 10);
	assert.equal(dariBasis("ff", 16), 255);
	assert.equal(dariBasis("0000", 10), 0);
	assert.equal(dariBasis("2", 2), null);
	assert.equal(dariBasis("Z", 35), null);
	assert.equal(dariBasis("1".repeat(20), 2), null);
});

test("konversiBasis", () => {
	assert.equal(konversiBasis("1010", 2, 16), "A");
	assert.equal(konversiBasis("FF", 16, 2), "11111111");
	assert.equal(konversiBasis("2", 2, 10), null);
});
