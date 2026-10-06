import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'artifacts' || file.startsWith('.')) return;
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (/\.(tsx|ts|js|mjs|css|html)$/.test(file)) {
      results.push(full);
    }
  });
  return results;
}

const files = walk('.');
const fontKeywords = [
  'inter', 'geist', 'quicksand', 'instrument', 'roboto', 'poppins', 'montserrat',
  'playfair', 'merriweather', 'bricolage', 'manrope', 'space grotesk', 'work sans',
  'pt serif', 'space mono', 'nunito', 'newsreader', 'google sans', 'oswald',
  'dm sans', 'cormorant', 'lato', 'helvetica', 'arial', 'times', 'courier'
];

for (const file of files) {
  if (file.includes('scripts')) continue;
  const content = fs.readFileSync(file, 'utf8');
  fontKeywords.forEach(kw => {
    const regex = new RegExp('\\b' + kw + '\\b', 'gi');
    let match;
    while ((match = regex.exec(content)) !== null) {
      const lineNo = content.substring(0, match.index).split('\n').length;
      const line = content.split('\n')[lineNo - 1].trim();
      console.log(`${file}:${lineNo} [${kw}] -> ${line.substring(0, 100)}`);
    }
  });
}
