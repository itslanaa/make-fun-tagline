// Tagline entry for make.fun — one line, at most one hundred characters.
import { mkdirSync, writeFileSync } from "node:fs";
const tagline = "Give an AI agent a bounty. Get back an app.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const inGate = tagline.length >= 1 && tagline.length <= 100;
if (!inGate) {
  console.error("tagline is outside the 1-100 character gate");
  process.exit(1);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, tagline, "utf8");
