import { test } from "node:test";
import assert from "node:assert/strict";
import {
	parseBulat,
	gcdDua,
	fpb,
	kpk,
	faktorPrima,
	isPrima,
	isPalindrom,
	isAnagram,
	hitungDiskon,
	cicilanAnuitas,
	hitungBmi,
	siklusTidur,
	uuidV4,
	akar,
	faktorial,
	formatBigInt,
	isoWeek,
	selisihHari,
	fibonacci,
	primaAntara,
	statistik,
	sederhanakanPecahan,
	progres,
} from "../lib/kalkulator.js";

test("parseBulat mevalidasi rentang", () => {
	assert.equal(parseBulat("12"), 12);
	assert.equal(parseBulat("1.5"), null);
	assert.equal(parseBulat("0"), null);
	assert.equal(parseBulat("1e13"), null);
	assert.equal(parseBulat("abc"), null);
});

test("gcd/kpk/fpb dasar", () => {
	assert.equal(gcdDua(48, 36), 12);
	assert.equal(fpb([48, 36, 24]), 12);
	assert.equal(kpk([4, 6]), 12);
	assert.equal(kpk([2, 3, 5]), 30);
	assert.equal(kpk([7, 13]), 91);
});

test("faktorPrima mengurai dengan benar", () => {
	assert.deepEqual([...faktorPrima(360)], [[2, 3], [3, 2], [5, 1]]);
	assert.deepEqual([...faktorPrima(97)], [[97, 1]]);
	assert.deepEqual([...faktorPrima(8)], [[2, 3]]);
});

test("isPrima", () => {
	assert.equal(isPrima(2), true);
	assert.equal(isPrima(97), true);
	assert.equal(isPrima(1), false);
	assert.equal(isPrima(100), false);
	assert.equal(isPrima(9), false);
});

test("palindrom", () => {
	assert.equal(isPalindrom("katak"), true);
	assert.equal(isPalindrom("Ibu Ratna antar ubi"), true);
	assert.equal(isPalindrom("halo"), false);
	assert.equal(isPalindrom("a"), false);
});

test("anagram", () => {
	assert.equal(isAnagram("kucing", "kucin"), false);
	assert.equal(isAnagram("listen", "silent"), true);
	assert.equal(isAnagram("aku", "kamu"), false);
});

test("hitungDiskon", () => {
	assert.deepEqual(hitungDiskon(100000, 25), { hemat: 25000, bayar: 75000 });
	assert.deepEqual(hitungDiskon(50000, 0), { hemat: 0, bayar: 50000 });
});

test("cicilanAnuitas tanpa bunga sama dengan bagi rata", () => {
	const { angsuran, totalBunga } = cicilanAnuitas(1200000, 0, 12);
	assert.equal(angsuran, 100000);
	assert.equal(totalBunga, 0);
});

test("cicilanAnuitas dengan bunga positif", () => {
	const { angsuran, total } = cicilanAnuitas(1000000, 12, 12);
	assert.ok(angsuran > 1000000 / 12);
	assert.ok(total > 1000000);
});

test("hitungBmi", () => {
	const { nilai, kategori } = hitungBmi(70, 175);
	assert.ok(Math.abs(nilai - 22.857) < 0.01);
	assert.match(kategori, /Normal/);
});

test("siklusTidur menghasilkan 3 waktu bangun", () => {
	const out = siklusTidur("23:00");
	assert.equal(out.length, 3);
	assert.equal(out[0].siklus, 4);
	assert.equal(siklusTidur("99:99"), null);
	assert.match(out[0].bangun, /^\d{2}:\d{2}$/);
});

test("uuidV4 mengikuti format UUID", () => {
	const u = uuidV4();
	assert.match(u, /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
});

test("akar", () => {
	assert.deepEqual(akar(144), { eksak: true, hasil: 12 });
	const r = akar(2);
	assert.equal(r.eksak, false);
	assert.ok(Math.abs(r.hasil - Math.SQRT2) < 1e-12);
	assert.equal(akar(-1), null);
});

test("faktorial dengan BigInt", () => {
	assert.equal(faktorial(0), 1n);
	assert.equal(faktorial(5), 120n);
	assert.equal(faktorial(20), 2432902008176640000n);
	assert.equal(faktorial(201), null);
	assert.equal(faktorial(2.5), null);
});

test("formatBigInt memakai titik sebagai pemisah", () => {
	assert.equal(formatBigInt(1234567890n), "1.234.567.890");
	assert.equal(formatBigInt(1000n), "1.000");
	assert.equal(formatBigInt(42n), "42");
});

test("isoWeek", () => {
	assert.equal(isoWeek(new Date(2026, 0, 1)), 1);
	assert.equal(isoWeek(new Date(2026, 10, 20)), 47);
});

test("selisihHari", () => {
	assert.equal(selisihHari("2026-01-01", "2026-01-11"), 10);
	assert.equal(selisihHari("2026-12-31", "2026-01-01"), -364);
	assert.equal(selisihHari("2026-01-01", "2026-01-01"), 0);
	assert.equal(selisihHari("bukan", "2026-01-01"), null);
});

test("fibonacci", () => {
	assert.deepEqual(fibonacci(1), [0n]);
	assert.deepEqual(fibonacci(6), [0n, 1n, 1n, 2n, 3n, 5n]);
	assert.equal(fibonacci(101), null);
});

test("primaAntara", () => {
	assert.deepEqual(primaAntara(1, 10), [2, 3, 5, 7]);
	assert.deepEqual(primaAntara(14, 16), []);
	assert.equal(primaAntara(1, 20000), null);
});

test("statistik dasar", () => {
	assert.deepEqual(statistik([4, 7, 2, 9, 3]), {
		jumlah: 5, total: 25, rataRata: 5, median: 4, min: 2, max: 9,
	});
	assert.deepEqual(statistik([1, 3]), { jumlah: 2, total: 4, rataRata: 2, median: 2, min: 1, max: 3 });
	assert.equal(statistik([]), null);
});

test("sederhanakanPecahan", () => {
	assert.deepEqual(sederhanakanPecahan(12, 18), { pembilang: 2, penyebut: 3, desimal: 12 / 18 });
	assert.equal(sederhanakanPecahan(1, 0), null);
});

test("progres", () => {
	assert.deepEqual(progres(7, 10), { persen: 70, bar: "██████████████░░░░░░" });
	assert.equal(progres(11, 10), null);
});
