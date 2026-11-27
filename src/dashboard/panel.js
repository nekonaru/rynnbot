// Panel lokal Rynn v12. Memakai modul http bawaan Node, tanpa dependency baru.
// Token hanya dipakai untuk sesi ini dan tidak dikirim ke situs lain.

import http from "http";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let server = null;
let tokenAktif = null;
let portAktif = null;

const TIPE = {
	".html": "text/html; charset=utf-8",
	".css": "text/css; charset=utf-8",
	".js": "text/javascript; charset=utf-8",
	".svg": "image/svg+xml",
};

function dataRingkas(db) {
	const hit = db?.hit || {};
	const entri = Object.entries(hit)
		.filter(([k, v]) => /^[a-z0-9_]+$/i.test(k) && Number.isFinite(v))
		.sort((a, b) => b[1] - a[1])
		.slice(0, 10);
	return {
		status: "aktif",
		uptime: Math.floor(process.uptime()),
		memoriMB: Math.round(process.memoryUsage().heapUsed / 1048576),
		user: Object.keys(db?.users || {}).length,
		grup: Object.keys(db?.set || {}).filter((x) => x.endsWith("@g.us")).length,
		perintah: entri,
	};
}

export function bukaPanel({ port = 7788, db = {} } = {}) {
	if (server) return { token: tokenAktif, port: portAktif, sudah: true };
	tokenAktif = crypto.randomBytes(12).toString("hex");

	server = http.createServer((req, res) => {
		const url = new URL(req.url, `http://localhost:${portAktif}`);
		res.setHeader("Referrer-Policy", "no-referrer");
		if (url.pathname === "/api/health") {
			if (url.searchParams.get("token") !== tokenAktif) {
				res.writeHead(401, { "content-type": "application/json" });
				return res.end('{"error":"token tidak valid"}');
			}
			res.writeHead(200, { "content-type": "application/json", "cache-control": "no-store" });
			return res.end(JSON.stringify(dataRingkas(db)));
		}
		const nama = url.pathname === "/" ? "index.html" : path.basename(url.pathname);
		const berkas = path.join(__dirname, nama);
		if (!fs.existsSync(berkas) || !TIPE[path.extname(berkas)]) {
			res.writeHead(404);
			return res.end("Tidak ditemukan");
		}
		res.writeHead(200, { "content-type": TIPE[path.extname(berkas)] });
		fs.createReadStream(berkas).pipe(res);
	});

	portAktif = port;
	server.listen(port, "127.0.0.1");
	server.unref?.();
	return { token: tokenAktif, port: portAktif, sudah: false };
}

export function tutupPanel() {
	if (!server) return false;
	server.closeAllConnections?.();
	server.close(() => {
		server = null;
		tokenAktif = null;
		portAktif = null;
	});
	return true;
}

export function panelAktif() {
	return Boolean(server);
}
