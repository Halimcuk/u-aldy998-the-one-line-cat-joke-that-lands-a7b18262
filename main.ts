// The One-Line Cat Joke That Lands — entry for
// u-aldy998-the-one-line-cat-joke-that-lands-a7b18262.
// Writes one fixed joke to entry.txt. No randomness, no network,
// no date/time, so every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 119 characters: the 3 a.m. zoomies, with the turn that
// the cat treats the human as the strange one for being awake.
const JOKE =
  "My cat woke me at 3 a.m. to sprint laps around the bed, then sat on my chest and stared like I was the one being weird.";

// Competition gate: entry.txt must be 1 to 200 characters.
const MAX_CHARS = 200;

if (JOKE.length === 0 || JOKE.length > MAX_CHARS) {
  throw new Error(
    `Joke is ${JOKE.length} characters, outside the 1-${MAX_CHARS} range`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
