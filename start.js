import path from 'path';
import chalk from 'chalk';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { watchFile, unwatchFile } from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let isRunning = true;
let p = null; // hoisted agar bisa diakses signal handler

function start() {
	let args = ['--expose-gc', path.join(__dirname, 'index.js'), ...process.argv.slice(2)]
	p = spawn(process.argv[0], args, {
		stdio: ['inherit', 'inherit', 'inherit', 'ipc']
	}).on('message', data => {
		if (data === 'reset') {
			console.log(chalk.yellow.bold('[BOT] Restarting...'))
			p.kill();
			setTimeout(() => {
				start()
			}, 3000);
		} else if (data === 'uptime') {
			p.send(process.uptime())
		} else if (data === 'exit') {
			process.exit(0)
		}
	}).on('exit', code => {
		if (!isRunning) {
			console.log(chalk.green.bold('[BOT] Process exited cleanly. Goodbye!'))
			process.exit(0)
		} else if (code !== 0) {
			console.error(chalk.red.bold(`[BOT] Exited with code: ${code}`));
			setTimeout(() => {
				start()
			}, 3000);
		} else {
			console.log(chalk.green.bold('[BOT] Process exited cleanly. Goodbye!'))
			process.exit(0)
		}
	})
}
start()

// Forward sinyal ke child process agar cleanup() di index.js sempat jalan.
// SIGTERM dikirim oleh docker stop / Railway / Heroku saat redeploy — wajib di-handle.
const forward = (sig) => {
	isRunning = false;
	console.log(chalk.yellow(`[BOT] Received ${sig}. Forwarding to child and waiting for graceful shutdown...`));
	if (p) p.kill(sig);
};
process.on('SIGINT',  () => forward('SIGINT'));
process.on('SIGTERM', () => forward('SIGTERM'));