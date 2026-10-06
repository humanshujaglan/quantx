import fs from "fs";

const files = [
  "components/Services.tsx",
  "components/Results.tsx",
  "components/Pricing.tsx",
  "components/Hero.tsx",
  "components/Footer.tsx",
  "components/Faq.tsx",
];

for (const f of files) {
  let s = fs.readFileSync(f, "utf-8");
  // Remove all style blocks with all-fonts-style
  s = s.replace(/<style\s+id="all-fonts-style-[^"]*">[\s\S]*?<\/style>/gi, "");
  // Remove all style blocks with aura-editor-visibility-style
  s = s.replace(/<style\s+id="aura-editor-visibility-style">[\s\S]*?<\/style>/gi, "");
  fs.writeFileSync(f, s, "utf-8");
  console.log("Cleaned:", f);
}
