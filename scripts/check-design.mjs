// Checks every built page against the design rules that a machine can check
// (README, Design; docs/brief.md, Design direction):
//
// 1. A photo shows at most once on a page. The same photo twice (a card and a
//    banner, two cards) looks like a mistake and wastes the page's weight.
// 2. Every photo on a page has its credit on that page, as the Creative
//    Commons licences ask (src/components/PhotoCredits.astro).
// 3. No placeholder text reaches a page: the template's "sample text", lorem
//    ipsum, TBD or TODO.
//
// Photo.astro marks each image with data-photo="<id>" and PhotoCredits each
// credit with data-credit="<id>". Run by `pnpm test` after the build.
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist", import.meta.url));

/** The problems of one page's HTML, as sentences. */
export function photoProblems(html) {
  const photos = [...html.matchAll(/\sdata-photo="([^"]+)"/g)].map((match) => match[1]);
  // A credit line names one or more photo ids, separated by spaces.
  const credits = new Set([...html.matchAll(/\sdata-credit="([^"]+)"/g)].flatMap((match) => match[1].split(" ")));
  const problems = [];
  const seen = new Set();
  for (const id of photos) {
    if (seen.has(id)) problems.push(`photo "${id}" shows more than once`);
    seen.add(id);
  }
  for (const id of seen) if (!credits.has(id)) problems.push(`photo "${id}" has no credit on the page`);
  return [...new Set(problems)];
}

const PLACEHOLDERS = [/sample text/i, /vzorčno besedilo/i, /lorem ipsum/i, /\bTBD\b/, /\bTODO\b/, /replace this (file|text)/i];

/** Placeholder text in a page's visible text (scripts, styles and tags left out). */
export function placeholderProblems(html) {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  return PLACEHOLDERS.filter((pattern) => pattern.test(text)).map((pattern) => `placeholder text (${pattern.source})`);
}

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith(".html")) yield path;
  }
}

async function main() {
  let failures = 0;
  let pages = 0;
  for await (const file of htmlFiles(dist)) {
    pages++;
    const html = await readFile(file, "utf8");
    for (const problem of [...photoProblems(html), ...placeholderProblems(html)]) {
      console.error(`✗ ${relative(dist, file)}: ${problem}`);
      failures++;
    }
  }
  if (failures) {
    console.error(`Design check failed: ${failures} problem(s). Use another photo from src/lib/photos.ts, add the credit, or write the real text.`);
    process.exit(1);
  }
  console.log(`Design check: ${pages} pages, no photo twice on a page, every photo credited, no placeholder text.`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) await main();
