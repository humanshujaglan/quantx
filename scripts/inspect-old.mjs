import { execSync } from 'child_process';

const components = ['hero.html', 'service.html', 'results.html', 'footer.html', 'faq.html', 'trade.html'];
for (const c of components) {
  try {
    const content = execSync(`git show b68562f:components/${c}`, { encoding: 'utf8' });
    const fontMatches = content.match(/font-[a-zA-Z0-9-]+/g) || [];
    const styleMatches = content.match(/font-family:[^;\"}]+/g) || [];
    const unique = Array.from(new Set([...fontMatches, ...styleMatches])).slice(0, 10);
    console.log(c, unique);
  } catch (e) {
    console.error(c, e.message);
  }
}
