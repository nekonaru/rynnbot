import { test } from "node:test";
import assert from "node:assert/strict";
import {
	buatKejuaraan,
	catatHasil,
	klasemen,
	jadwalkan,
	formatRingkas,
	formatKlasemen,
	pertandinganTersedia,
} from "../lib/turnamen-mesin.js";

test("single elimination selesai sampai juara", () => {
	const s = buatKejuaraan({ nama: "S", mode: "single", peserta: ["A", "B", "C", "D"] });
	assert.equal(s.bracket.length, 2);
	assert.ok(catatHasil(s, { a: "A", b: "B", pemenang: "A" }).ok);
	assert.ok(catatHasil(s, { a: "C", b: "D", pemenang: "C" }).ok);
	assert.equal(pertandinganTersedia(s)[0].a, "A");
	const akhir = catatHasil(s, { a: "A", b: "C", pemenang: "A" });
	assert.equal(akhir.selesai, true);
	assert.equal(s.juara, "A");
});

test("single elimination menolak pemenang invalid", () => {
	const s = buatKejuaraan({ mode: "single", peserta: ["A", "B"] });
	assert.equal(catatHasil(s, { a: "A", b: "B", pemenang: "Z" }).ok, false);
	assert.equal(catatHasil(s, { a: "A", b: "Z", pemenang: "A" }).ok, false);
});

test("round robin menghitung klasemen dan juara", () => {
	const s = buatKejuaraan({ mode: "roundrobin", peserta: ["A", "B", "C"] });
	assert.equal(s.pertandingan.length, 3);
	for (const m of s.pertandingan) catatHasil(s, { a: m.a, b: m.b, pemenang: m.a, skorA: 2, skorB: 0 });
	assert.equal(s.selesai, true);
	assert.equal(s.juara, "A");
	const k = klasemen(s);
	assert.equal(k[0].poin, 6);
	assert.equal(k[0].skor, 4);
	assert.match(formatKlasemen(s), /A: 6 poin/);
});

test("round robin mendukung seri", () => {
	const s = buatKejuaraan({ mode: "roundrobin", peserta: ["A", "B"] });
	const r = catatHasil(s, { a: "A", b: "B", pemenang: "seri", skorA: 1, skorB: 1 });
	assert.equal(r.selesai, true);
	assert.equal(klasemen(s)[0].poin, 1);
});

test("double elimination memiliki upper, lower, dan final", () => {
	const s = buatKejuaraan({ mode: "double", peserta: ["A", "B", "C", "D"] });
	assert.equal(s.upper.length, 1);
	assert.ok(catatHasil(s, { a: "A", b: "B", pemenang: "A" }).ok);
	assert.ok(catatHasil(s, { a: "C", b: "D", pemenang: "C" }).ok);
	assert.ok(s.final.a);
	assert.ok(s.lower.length >= 1);
	assert.ok(pertandinganTersedia(s).length > 0);
});

test("seed dipakai sebagai urutan awal", () => {
	const s = buatKejuaraan({ mode: "single", peserta: ["A", "B", "C", "D"], seed: ["D", "C"] });
	assert.equal(s.bracket[0].pertandingan[0].a, "D");
	assert.equal(s.bracket[0].pertandingan[0].b, "C");
});

test("jadwal dan format ringkas", () => {
	const s = buatKejuaraan({ mode: "single", peserta: ["A", "B"] });
	assert.equal(jadwalkan(s, "A", "B", "19:00").length, 1);
	assert.match(formatRingkas(s), /Turnamen/);
	assert.match(formatRingkas(s), /single/);
});

test("turnamen invalid ditolak", () => {
	assert.equal(buatKejuaraan({ peserta: ["A"] }), null);
	const s = buatKejuaraan({ mode: "single", peserta: ["A", "B"] });
	assert.equal(catatHasil(s, { a: "A", b: "B", pemenang: "A" }).selesai, true);
	assert.equal(catatHasil(s, { a: "A", b: "B", pemenang: "A" }).ok, false);
});
