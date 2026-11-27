const token = new URLSearchParams(location.search).get("token") || "";

function isiStatus(d) {
	const box = document.getElementById("status");
	box.innerHTML = `
		<h2>Status</h2>
		<p><strong>${d.status}</strong> - uptime ${d.uptime} detik</p>
		<p>Memori: ${d.memoriMB} MB</p>
		<p>Pengguna: ${d.user} | Grup: ${d.grup}</p>
		<div class="bar"><span style="width:${Math.min(100, d.memoriMB)}%"></span></div>
	`;
}

function isiPerintah(entri) {
	const ul = document.getElementById("perintah");
	ul.innerHTML = entri.length
		? entri.map(([nama, hit]) => `<li>.${nama}: ${hit}x</li>`).join("")
		: "<li>Belum ada data</li>";
}

async function muat() {
	try {
		const r = await fetch(`/api/health?token=${encodeURIComponent(token)}`, { cache: "no-store" });
		if (!r.ok) throw new Error("token tidak valid");
		const d = await r.json();
		isiStatus(d);
		isiPerintah(d.perintah);
	} catch (e) {
		document.getElementById("status").innerHTML = `<h2>Status</h2><p>Gagal memuat: ${e.message}</p>`;
	}
}

muat();
setInterval(muat, 15000);
