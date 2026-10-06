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

  // Remove any <link ...fonts.googleapis.com...> tags
  content = content.replace(/<link[^>]*fonts\.googleapis\.com[^>]*>/gi, "");

  // Remove any <style id="all-fonts-[^"]*">...</style>
  content = content.replace(/<style id="all-fonts-[^"]*">[\s\S]*?<\/style>/gi, "");

  // Remove any empty `. {\s*font-family:[^}]+}` inside <style>
  content = content.replace(/\.\s*\{\s*font-family:\s*[^}]+\}/gi, "");

  // Remove trailing empty <style class="">\s*<\/style> or <style>\s*<\/style>
  content = content.replace(/<style[^>]*>\s*<\/style>/gi, "");

  // Remove any leftover font- classes like "font-instrument-serif", "font-sans", "font-mono", "font-quicksand", etc.
  content = content.replace(/\bfont-(sans|mono|serif|display|instrument-serif|quicksand|geist|roboto|montserrat|poppins|playfair|merriweather|bricolage|jakarta|manrope|space-grotesk|work-sans|pt-serif|geist-mono|space-mono|nunito|newsreader|google-sans-flex|oswald|dm-sans|cormorant)\b/gi, "");

  // Remove inline font-family styles
  content = content.replace(/font-family:\s*[^;"]+;?/gi, "");

  if (content !== orig) {
    fs.writeFileSync(fullPath, content, "utf-8");
    console.log(`Deep cleaned: ${relFile}`);
  }
}
