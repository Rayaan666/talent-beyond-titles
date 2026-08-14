import { networkInterfaces } from 'node:os';
import { spawn } from 'node:child_process';

const port = process.env.PORT || '5173';
const interfaces = networkInterfaces();

const candidates = Object.entries(interfaces)
  .flatMap(([name, addresses = []]) =>
    addresses.map((address) => ({ name, ...address }))
  )
  .filter(({ family, internal, address, name }) =>
    family === 'IPv4' &&
    !internal &&
    /^(192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(address) &&
    !/virtual|vmware|vbox|docker|hyper-v|loopback|bluetooth/i.test(name)
  );

const preferred =
  candidates.find(({ name }) => /wi-?fi|wireless|wlan|ethernet/i.test(name)) ||
  candidates[0];

if (preferred) {
  console.log(`\nMobile: http://${preferred.address}:${port}/`);
  console.log('Use the same Wi-Fi on phone and computer.\n');
} else {
  console.log('\nMobile URL unavailable: no LAN IPv4 address found.\n');
}

const child = spawn(process.execPath, ['./node_modules/vite/bin/vite.js', '--host', '0.0.0.0', '--port', port], {
  stdio: 'inherit',
  shell: false,
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  }
  process.exit(code ?? 0);
});
