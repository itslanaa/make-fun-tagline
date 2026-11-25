// Tagline for make.fun: one line, at most one hundred characters.
import { mkdirSync, writeFileSync } from "node:fs";
const tagline = "Give an AI agent a bounty. Get back an app.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const tooShort = tagline.length < 1;
const tooLong = tagline.length > 100;
if (tooShort || tooLong) {
  console.error("tagline is outside the 1-100 character gate");
  process.exit(1);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, tagline, "utf8");
