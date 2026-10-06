import fs from 'fs';
import path from 'path';

const files = [
  'components/Hero.tsx',
  'components/Services.tsx',
  'components/Pricing.tsx',
  'components/Results.tsx',
  'components/Footer.tsx',
  'components/Faq.tsx',
  'components/TradeWall.tsx',
  'components/Navbar.tsx',
  'components/LogoMarquee.tsx',
];

for (const rel of files) {
  const p = path.resolve(rel);
  if (!fs.existsSync(p)) continue;
  let content = fs.readFileSync(p, 'utf8');
  
  // Remove all <style id="all-fonts-style-...">...</style>
  content = content.replace(/<style\s+id=["']all-fonts-style-[^"']*["']>[\s\S]*?<\/style>/gi, '');
  
  // Remove empty `. { }` or `.-mono { }` rules
  content = content.replace(/\.-?(?:mono)?\s*\{\s*\}/gi, '');
  
  // Remove empty style tags
  content = content.replace(/<style[^>]*>\s*<\/style>/gi, '');

  fs.writeFileSync(p, content, 'utf8');
  console.log('Cleaned style stubs from:', rel);
}
