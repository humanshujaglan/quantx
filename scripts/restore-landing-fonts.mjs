import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// 1. Restore Services.tsx from components/service.html
try {
  const serviceHtml = execSync('git show b68562f:components/service.html', { encoding: 'utf8' });
  const tsx = `import React from "react";

const htmlContent = ${JSON.stringify(serviceHtml)};

export default function Services() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
`;
  fs.writeFileSync('components/Services.tsx', tsx, 'utf8');
  console.log('Restored Services.tsx from original service.html');
} catch (e) {
  console.error('Error restoring Services.tsx:', e.message);
}

// 2. Restore Results.tsx from components/results.html
try {
  const resultsHtml = execSync('git show b68562f:components/results.html', { encoding: 'utf8' });
  const tsx = `import React from "react";

const htmlContent = ${JSON.stringify(resultsHtml)};

export default function Results() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
`;
  fs.writeFileSync('components/Results.tsx', tsx, 'utf8');
  console.log('Restored Results.tsx from original results.html');
} catch (e) {
  console.error('Error restoring Results.tsx:', e.message);
}

// 3. Restore Footer.tsx from components/footer.html
try {
  const footerHtml = execSync('git show b68562f:components/footer.html', { encoding: 'utf8' });
  const tsx = `import React from "react";

const htmlContent = ${JSON.stringify(footerHtml)};

export default function Footer() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
`;
  fs.writeFileSync('components/Footer.tsx', tsx, 'utf8');
  console.log('Restored Footer.tsx from original footer.html');
} catch (e) {
  console.error('Error restoring Footer.tsx:', e.message);
}

// 4. Restore TradeWall.tsx from components/trade.html
try {
  const tradeHtml = execSync('git show b68562f:components/trade.html', { encoding: 'utf8' });
  const tsx = `import React from "react";

const htmlContent = ${JSON.stringify(tradeHtml)};

export default function TradeWall() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
`;
  fs.writeFileSync('components/TradeWall.tsx', tsx, 'utf8');
  console.log('Restored TradeWall.tsx from original trade.html');
} catch (e) {
  console.error('Error restoring TradeWall.tsx:', e.message);
}

// 5. Restore Faq.tsx from faq.html
try {
  const faqHtml = execSync('git show b68562f:faq.html', { encoding: 'utf8' });
  const tsx = `import React from "react";

const htmlContent = ${JSON.stringify(faqHtml)};

export default function Faq() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
`;
  fs.writeFileSync('components/Faq.tsx', tsx, 'utf8');
  console.log('Restored Faq.tsx from original faq.html');
} catch (e) {
  console.error('Error restoring Faq.tsx:', e.message);
}

// 6. In Hero.tsx, restore the font classes (font-instrument-serif etc.) while keeping the updated copy & gold bot gif
try {
  let hero = fs.readFileSync('components/Hero.tsx', 'utf8');
  // Re-add font-instrument-serif to the italic subtitle
  hero = hero.replace(
    /class=\\"bg-clip-text text-5xl md:text-7xl font-normal italic text-transparent/g,
    'class=\\"bg-clip-text text-5xl md:text-7xl font-normal italic font-instrument-serif text-transparent'
  );
  // Re-add font tags from original hero if needed
  const heroOrig = execSync('git show b68562f:components/hero.html', { encoding: 'utf8' });
  const fontTagsMatch = heroOrig.match(/<html><head>([\s\S]*?)<\/head>/);
  if (fontTagsMatch) {
    const headTags = fontTagsMatch[1];
    if (!hero.includes('all-fonts-link-font-geist')) {
      hero = hero.replace('const htmlContent = "', 'const htmlContent = "' + headTags.replace(/"/g, '\\"').replace(/\r/g, '\\r').replace(/\n/g, '\\n'));
    }
  }
  fs.writeFileSync('components/Hero.tsx', hero, 'utf8');
  console.log('Restored original typography in Hero.tsx');
} catch (e) {
  console.error('Error updating Hero.tsx:', e.message);
}
