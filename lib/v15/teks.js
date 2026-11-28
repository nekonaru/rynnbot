// Utilitas teks lanjutan v15.

export function teksRapi(teks) {
	return String(teks || "").replace(/\s+/g, " ").replace(/\s*([,.;!?])\s*/g, "$1 ").trim();
}

export function teksBalik(teks) {
	return [...String(teks || "")].reverse().join("");
}

export function teksUlang(teks, n) {
	const k = Number(n);
	if (!Number.isInteger(k) || k < 1 || k > 20) return null;
	return String(teks || "").repeat(k).slice(0, 2000);
}

export function teksPotong(teks, n) {
	const k = Number(n);
	if (!Number.isInteger(k) || k < 1) return null;
	return String(teks || "").slice(0, k);
}

export function teksBersih(teks) {
	return String(teks || "").replace(/[\u0000-\u001f\u007f]/g, "").trim();
}

export function keHeksa(teks) {
	return Buffer.from(String(teks || ""), "utf8").toString("hex");
}

export function dariHeksa(heksa) {
	const h = String(heksa || "").replace(/[^0-9a-f]/gi, "");
	if (!h || h.length % 2 !== 0) return null;
	return Buffer.from(h, "hex").toString("utf8");
}

export function teksBanding(a, b) {
	const x = String(a || ""), y = String(b || "");
	return `- Panjang A: ${x.length}\n- Panjang B: ${y.length}\n- Sama: ${x === y ? "ya" : "tidak"}`;
}
