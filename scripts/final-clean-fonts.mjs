import fs from "fs";
import path from "path";

const targetDir = "m:/QTX/Forex/components";

const files = fs.readdirSync(targetDir, { recursive: true });

for (const relFile of files) {
  const fullPath = path.join(targetDir, relFile.toString());
  if (!fs.statSync(fullPath).isFile() || (!fullPath.endsWith(".tsx") && !fullPath.endsWith(".ts"))) {
    continue;
  }

  let content = fs.readFileSync(fullPath, "utf-8");
  const orig = content;

  // 1. Remove all style tags with id starting with all-fonts
  content = content.replace(/<style\s+id="all-fonts-[^"]*"[^>]*>[\s\S]*?<\/style>/gi, "");

  // 2. Remove all link tags with id starting with all-fonts
  content = content.replace(/<link\s+id="all-fonts-[^"]*"[^>]*>/gi, "");

  // 3. Remove any remaining empty style blocks like `<style class="">\s*<\/style>`
  content = content.replace(/<style[^>]*>\s*<\/style>/gi, "");

  // 4. Remove empty class selectors like `. {\s*}` inside style tags
  content = content.replace(/\.\s*\{\s*\}/g, "");

  // 5. Remove any leftover font-family: '...'
  content = content.replace(/font-family:\s*[^;"]+;?/gi, "");

  // 6. Remove any remaining font-geist, font-roboto, font-mono, etc.
  content = content.replace(/\bfont-(sans|mono|serif|display|instrument-serif|quicksand|geist|roboto|montserrat|poppins|playfair|merriweather|bricolage|jakarta|manrope|space-grotesk|work-sans|pt-serif|geist-mono|space-mono|nunito|newsreader|google-sans-flex|oswald|dm-sans|cormorant)\b/gi, "");

  if (content !== orig) {
    fs.writeFileSync(fullPath, content, "utf-8");
    console.log(`Cleaned: ${relFile}`);
  }
}
