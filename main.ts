import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v2 fortune: the cookie itself shares the trader's loss — the fortune
// inside was liquidated before the cookie was even opened. Short,
// oracular opening, punchline breaks it at the end.
const FORTUNE =
  "This cookie is empty, trader \u2014 your fortune was liquidated before you opened it.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE + "\n", "utf8");
