import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');

// Clean dist directory
fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyRecursive(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

const items = ['index.html', 'assets', 'favicon.ico', 'favicon.svg', 'apple-touch-icon.png'];

for (const item of items) {
  const srcPath = path.join(__dirname, item);
  if (fs.existsSync(srcPath)) {
    copyRecursive(srcPath, path.join(distDir, item));
    console.log(`Copied ${item} to dist/`);
  }
}

console.log('Build completed successfully!');
