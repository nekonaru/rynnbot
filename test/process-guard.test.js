import { test } from "node:test";
import assert from "node:assert/strict";
import { pasangGuardProses } from "../lib/process-guard.js";

test("guard proses terpasang dan bisa dipanggil tanpa efek samping", () => {
	const matikan = pasangGuardProses({ onShutdown: async () => {} });
	assert.equal(typeof matikan, "function");
	assert.ok(process.listenerCount("unhandledRejection") >= 1);
	assert.ok(process.listenerCount("uncaughtException") >= 1);
});
