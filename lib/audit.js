export function tulisAudit(db, sender, aksi) {
  if (!db || typeof db !== "object") return;
  if (!Array.isArray(db.audit)) db.audit = [];
  db.audit.push({ waktu: new Date().toISOString(), sender: String(sender || "").split("@")[0], aksi: String(aksi).slice(0, 160) });
  if (db.audit.length > 100) db.audit = db.audit.slice(-100);
}

export function bacaAudit(db, jumlah = 20) {
  if (!db || !Array.isArray(db.audit)) return [];
  const n = Math.max(1, Math.min(Number(jumlah) || 20, 100));
  return db.audit.slice(-n).reverse();
}
