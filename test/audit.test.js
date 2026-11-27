import { test } from "node:test";
import assert from "node:assert/strict";
import { tulisAudit, bacaAudit } from "../lib/audit.js";

test("audit menyimpan aksi owner tanpa nilai rahasia", () => {
  const db = { audit: [] };
  const panggil = () => tulisAudit(db, "owner@s.whatsapp.net", "akses .rumus premium");
  panggil();
  panggil();
  const list = bacaAudit(db, 1);
  assert.equal(list.length, 1);
  assert.match(list[0].aksi, /rumus/);
  assert.ok(!JSON.stringify(db.audit).includes("NAZE_API_KEY"));
});

test("audit dibatasi 100 entri", () => {
  const db = { audit: [] };
  for (let i = 0; i < 150; i++) tulisAudit(db, "o", `aksi ${i}`);
  assert.equal(db.audit.length, 100);
  assert.equal(bacaAudit(db, 200).length, 100);
});
