import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line about the dumbest thing my agent did today.
const LINE =
  "My agent spent forty minutes debugging a 'broken' API, then announced the fix: it had been calling localhost the whole time — and closed the ticket as resolved.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
