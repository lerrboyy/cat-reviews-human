// Cat Reviews Its Human — one-star review entry for make.fun.
// The review is a single line, written in the voice of a house cat filing
// a formal complaint about the human it lives with. It opens with the star
// rating, lists three concrete grievances in flat review language, and
// closes with the classic review verdict.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// The entry: 173 characters, one line, plain ASCII.
const REVIEW =
  "One star. My human feeds me at random hours, sleeps on MY side of the bed, then wakes me up to ask if I'm okay. I scream at 3am for a reason. Would not recommend this human.";

// The bounty seals the gate: 1 to 200 characters, UTF-8, a single line,
// more than whitespace. Refuse to write anything that fails the gate.
const MAX_CHARS = 200;

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `Entry must be 1 to ${MAX_CHARS} characters, got ${text.length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
  // Confirm the text round-trips through UTF-8 unchanged.
  const encoded = new TextEncoder().encode(text);
  const decoded = new TextDecoder("utf-8", { fatal: true }).decode(encoded);
  if (decoded !== text) {
    throw new Error("Entry is not valid UTF-8 text.");
  }
}

function clearOutputDir(dir: string): void {
  // Clear only the CONTENTS of the output directory. The directory itself
  // is a grader mount point and must never be removed.
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

validateEntry(REVIEW);
clearOutputDir(OUTPUT_DIR);
writeFileSync(OUTPUT_FILE, REVIEW, "utf-8");

// Read the file back and confirm what landed on disk is exactly the
// validated entry — byte for byte, no trailing newline added by the write.
const written = readFileSync(OUTPUT_FILE, "utf-8");
if (written !== REVIEW) {
  throw new Error("Written entry does not match the validated entry.");
}

console.log(`Wrote ${OUTPUT_FILE} (${REVIEW.length} characters).`);
console.log(REVIEW);
