import { test } from "node:test";
import assert from "node:assert/strict";
import { muat, daftarModul } from "../lib/data-facade.js";

test("facade memuat modul sekali dan mengembalikan data", async () => {
	assert.ok(daftarModul().length >= 8);
	const modul = await muat("fakta");
	assert.ok(modul && Array.isArray(modul.FAKTA) && modul.FAKTA.length > 0);
	const lagi = await muat("fakta");
	assert.equal(modul, lagi, "modul harus di-cache");
	assert.equal(await muat("tidak-ada"), null);
});
