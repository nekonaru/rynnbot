// Penjaga proses Rynn v11. Mencegah mati mendadak akibat promise tak tertangani
// dan menutup resource saat bot dihentikan.

export function pasangGuardProses({ onShutdown } = {}) {
	let sedangMatikan = false;

	const matikan = async (sinyal) => {
		if (sedangMatikan) return;
		sedangMatikan = true;
		console.log(`[SHUTDOWN] Menerima ${sinyal}, menutup resource...`);
		try {
			await onShutdown?.();
		} catch (e) {
			console.error("[SHUTDOWN] Gagal membersihkan:", e?.message || e);
		}
		process.exit(0);
	};

	process.once("SIGINT", () => matikan("SIGINT"));
	process.once("SIGTERM", () => matikan("SIGTERM"));
	process.on("unhandledRejection", (alasan) => {
		console.error("[UNHANDLED REJECTION]", alasan?.stack || alasan);
	});
	process.on("uncaughtException", (e) => {
		console.error("[UNCAUGHT EXCEPTION]", e?.stack || e);
	});
	return matikan;
}
