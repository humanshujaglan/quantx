import fs from "fs";
import path from "path";

const targetDir = "m:/QTX/Forex/components";

const fontClassRegex = /\bfont-(instrument-serif|quicksand|geist|roboto|montserrat|poppins|playfair|merriweather|bricolage|jakarta|manrope|space-grotesk|work-sans|pt-serif|geist-mono|space-mono|nunito|newsreader|google-sans-flex|oswald|dm-sans|cormorant|mono|serif|display)\b/g;

const allFontsLinkRegex = /<link id="all-fonts-link-[^"]+"[^>]*>/g;
const allFontsStyleRegex = /<style id="all-fonts-style-[^"]+">[\s\S]*?<\/style>/g;
const googleFontImportRegex = /@import url\(['"]https:\/\/fonts\.googleapis\.com\/css2\?family=(?!Plus\+Jakarta\+Sans)[^'"]+['"]\);?/g;

const files = fs.readdirSync(targetDir, { recursive: true });

for (const relFile of files) {
  const fullPath = path.join(targetDir, relFile.toString());
  if (!fs.statSync(fullPath).isFile() || (!fullPath.endsWith(".tsx") && !fullPath.endsWith(".ts"))) {
    continue;
  }

  let content = fs.readFileSync(fullPath, "utf-8");
  const orig = content;

  // 1. Remove all all-fonts link tags
  content = content.replace(allFontsLinkRegex, "");

  // 2. Remove all all-fonts style tags
  content = content.replace(allFontsStyleRegex, "");

  // 3. Remove other google font imports
  content = content.replace(googleFontImportRegex, "");

  // 4. Remove other font definitions inside <style>
  content = content.replace(/font-family:\s*['"]?(?:Inter|Quicksand|Instrument Serif|Geist|Roboto|Montserrat|Poppins|Playfair Display|Merriweather|Bricolage Grotesque|Manrope|Space Grotesk|Work Sans|PT Serif|Geist Mono|Space Mono|Nunito|Newsreader|Google Sans Flex|Oswald|DM Sans|Cormorant Garamond)[^;}]*;/gi, "font-family: 'Plus Jakarta Sans', sans-serif;");

  // 5. Clean inline styles with font-family
  content = content.replace(/font-family:\s*['"]?(?:Instrument Serif|Quicksand|Geist|Roboto|Montserrat|Poppins|Playfair Display|Merriweather|Bricolage Grotesque|Manrope|Space Grotesk|Work Sans|PT Serif|Geist Mono|Space Mono|Nunito|Newsreader|Google Sans Flex|Oswald|DM Sans|Cormorant Garamond)[^;"]*(?:!important)?;?/gi, "");

  // 6. Remove font classes
  content = content.replace(fontClassRegex, "");

  if (content !== orig) {
    fs.writeFileSync(fullPath, content, "utf-8");
    console.log(`Cleaned: ${relFile}`);
  }
}
