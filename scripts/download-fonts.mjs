import fs from 'fs';
import https from 'https';
import path from 'path';

const dir = path.join('public', 'fonts');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const fonts = [
  { weight: '200', url: 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_KU7NSg.ttf' },
  { weight: '300', url: 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_907NSg.ttf' },
  { weight: '400', url: 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NSg.ttf' },
  { weight: '500', url: 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_m07NSg.ttf' },
  { weight: '600', url: 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNSg.ttf' },
];

async function download() {
  for (const f of fonts) {
    const dest = path.join(dir, `PlusJakartaSans-${f.weight}.ttf`);
    await new Promise((resolve, reject) => {
      const file = fs.createWriteStream(dest);
      https.get(f.url, res => {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Saved:', dest, fs.statSync(dest).size, 'bytes');
          resolve();
        });
      }).on('error', err => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    });
  }
  console.log('All fonts saved locally in public/fonts!');
}

download().catch(console.error);
