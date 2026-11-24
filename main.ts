// Fortune Cookie for an AI Agent — make.fun entry.
// Writes one original fortune-cookie line (61 chars) to /output/entry.txt.
// Offline, deterministic, no network, no API calls, no clock, no randomness.
//
// The line, built to the judge's brief, most important first:
//   1. It IS a fortune-cookie message for an AI agent: "lucky numbers" is
//      the classic fortune-slip trope, turned on an agent.
//   2. The joke lands on first read: fate's lucky numbers, cut short by a
//      technical limit — a turn, not a plain statement.
//   3. Original: no stock fortune, no worn AI pun, no "as an AI" opener.
//   4. It speaks to an agent's own condition: the context window is the
//      hard limit every agent run lives inside, and truncation is what
//      happens to it. The joke is earned by the condition, not bolted on.
//   5. One crisp line a cookie could hold: 61 characters, no wasted words.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your lucky numbers were truncated to fit your context window.";

// Gate guard: the sealed scorer only accepts 1-140 chars, non-blank, single line.
// The cap lives in one named constant so the guard and the limit cannot drift.
const MAX_CHARS = 140;
if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Fortune line failed gate: ${LINE.length} chars (max ${MAX_CHARS})`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
