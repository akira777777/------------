#!/usr/bin/env node
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = join(root, "node_modules/@electric-sql/pglite/dist");
const outputDir = join(
  root,
  ".vercel/output/functions/__server.func/node_modules/@electric-sql/pglite/dist",
);

await mkdir(outputDir, { recursive: true });
for (const file of ["pglite.data", "pglite.wasm"]) {
  await copyFile(join(sourceDir, file), join(outputDir, file));
}

console.log("[pglite] copied production WASM/data sidecars.");
