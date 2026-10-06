import fs from 'fs';
import path from 'path';

const DEX_URL = 'https://dexscreener.com/bsc/0xaac8a6396ee80afdb973fd29899a2faae831a29b';
const CONTRACT_URL = 'https://bscscan.com/token/0x60bAF3f1082004601eA9518588D073e4bC29CB31';
const LAUNCHPAD_URL = '/launchpad';

// 1. Hero.tsx
{
  const filePath = 'components/Hero.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    /<button class="shiny-cta focus:outline-none">\s*<span class="">Launch Terminal<\/span>\s*<\/button>/,
    `<a href="${LAUNCHPAD_URL}" class="shiny-cta focus:outline-none inline-flex items-center justify-center"><span class="">Launch Terminal</span></a>`
  );
  content = content.replace(
    /<button class="jelly-btn gap-2 text-lg\s+gap-x-2 gap-y-2" style="width: 230px; height: 60px;">\s*Explore \$QTX([\s\S]*?)<\/button>/,
    `<a href="${DEX_URL}" target="_blank" rel="noopener noreferrer" class="jelly-btn gap-2 text-lg gap-x-2 gap-y-2 inline-flex items-center justify-center" style="width: 230px; height: 60px;">Explore $QTX$1</a>`
  );
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Hero.tsx updated');
}

// 2. Help.tsx
{
  const filePath = 'components/Help.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    /<button class="px-8 py-3 bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto">\s*Explore Engine\s*<\/button>/,
    `<a href="${LAUNCHPAD_URL}" class="px-8 py-3 bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto inline-flex items-center justify-center">Explore Engine</a>`
  );
  content = content.replace(
    /<button class="px-8 py-3 border border-emerald-400\/30 hover:border-emerald-400 text-emerald-400 font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto">\s*View Docs\s*<\/button>/,
    `<a href="${CONTRACT_URL}" target="_blank" rel="noopener noreferrer" class="px-8 py-3 border border-emerald-400/30 hover:border-emerald-400 text-emerald-400 font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto inline-flex items-center justify-center">View Contract</a>`
  );
  content = content.replace(
    /<button class="px-8 py-3 bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto">\s*Terminal Access\s*<\/button>/,
    `<a href="${LAUNCHPAD_URL}" class="px-8 py-3 bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto inline-flex items-center justify-center">Terminal Access</a>`
  );
  content = content.replace(
    /<button class="px-8 py-3 border border-emerald-400\/30 hover:border-emerald-400 text-emerald-400 font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto">\s*Whitepaper\s*<\/button>/,
    `<a href="${DEX_URL}" target="_blank" rel="noopener noreferrer" class="px-8 py-3 border border-emerald-400/30 hover:border-emerald-400 text-emerald-400 font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto inline-flex items-center justify-center">Live Chart</a>`
  );
  content = content.replace(
    /<button class="px-8 py-3 bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto">\s*Connect Wallet\s*<\/button>/,
    `<a href="${LAUNCHPAD_URL}" class="px-8 py-3 bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto inline-flex items-center justify-center">Connect Wallet</a>`
  );
  content = content.replace(
    /<button class="px-8 py-3 border border-emerald-400\/30 hover:border-emerald-400 text-emerald-400 font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto">\s*Read Audit\s*<\/button>/,
    `<a href="${CONTRACT_URL}" target="_blank" rel="noopener noreferrer" class="px-8 py-3 border border-emerald-400/30 hover:border-emerald-400 text-emerald-400 font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto inline-flex items-center justify-center">Read Audit</a>`
  );
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Help.tsx updated');
}

// 3. TradeWall.tsx
{
  const filePath = 'components/TradeWall.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    /<button class="shiny-cta" style="--gradient-shine: #818cf8;">\s*<span>Subscribe<\/span>\s*<\/button>/,
    `<a href="${LAUNCHPAD_URL}" class="shiny-cta inline-flex items-center justify-center" style="--gradient-shine: #818cf8;"><span>Launch dApp</span></a>`
  );
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('TradeWall.tsx updated');
}

// 4. Results.tsx
{
  const filePath = 'components/Results.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    /<a href="#" class="btn-wrapper"([^>]*)>([\s\S]*?)<\/a>/,
    `<a href="${DEX_URL}" target="_blank" rel="noopener noreferrer" class="btn-wrapper"$1>$2</a>`
  );
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Results.tsx updated');
}

// 5. Faq.tsx
{
  const filePath = 'components/Faq.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    /<button class="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm text-white border border-blue-500\/30 hover:border-blue-500\/50 transition-all duration-300 font-sans font-light" style="background: rgba\(59, 130, 246, 0.15\);">\s*Contact Support\s*<\/button>/,
    `<a href="${CONTRACT_URL}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm text-white border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 font-sans font-light" style="background: rgba(59, 130, 246, 0.15);">Verified Contract</a>`
  );
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Faq.tsx updated');
}

// 6. Pricing.tsx
{
  const filePath = 'components/Pricing.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    /<div className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-xs text-black bg-emerald-400\/95 shadow-\[0_0_20px_rgba\(16,185,129,0.3\)\] tracking-wide font-light">\s*Audited & Live\s*<\/div>/,
    `<a href="${CONTRACT_URL}" target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-xs text-black bg-emerald-400/95 hover:bg-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] tracking-wide font-light transition-all">Audited & Live</a>`
  );
  content = content.replace(
    /<div className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-xs text-slate-300 bg-white\/10 tracking-wide font-light">\s*In Development\s*<\/div>/,
    `<Link href="${LAUNCHPAD_URL}" className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-xs text-slate-300 bg-white/10 hover:bg-white/15 tracking-wide font-light transition-all">In Development</Link>`
  );
  content = content.replace(
    /<div className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-xs text-slate-400 bg-white\/5 tracking-wide font-light">\s*Research Phase\s*<\/div>/,
    `<a href="${DEX_URL}" target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-xs text-slate-400 bg-white/5 hover:bg-white/10 tracking-wide font-light transition-all">Research Phase</a>`
  );
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Pricing.tsx updated');
}

console.log('All CTAs successfully wired!');
