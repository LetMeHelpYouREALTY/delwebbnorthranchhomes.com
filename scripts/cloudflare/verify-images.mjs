#!/usr/bin/env node
/**
 * HEAD-check Cloudflare hosted Images delivery URLs for every catalog cfId.
 * Does not enable site delivery. Safe to run anytime.
 *
 * Usage:
 *   npm run images:verify
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const catalogPath = path.join(root, "src/lib/media-catalog.json");
const DEFAULT_ACCOUNT_HASH = "byE6BTe9lNqo21V57n4aPQ";

async function main() {
  const hash = process.env.NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH || DEFAULT_ACCOUNT_HASH;
  const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
  const seen = new Map();

  for (const [key, asset] of Object.entries(catalog)) {
    if (!asset.cfId || seen.has(asset.cfId)) continue;
    seen.set(asset.cfId, key);
  }

  let ok = 0;
  let missing = 0;
  for (const [id, key] of seen) {
    const url = `https://imagedelivery.net/${hash}/${id}/public`;
    const res = await fetch(url, { method: "HEAD", redirect: "manual" });
    const cf = res.headers.get("cf-images") || "";
    if (res.ok) {
      ok += 1;
      console.log(`ok      ${id}`);
    } else {
      missing += 1;
      console.log(`missing ${id}  HTTP ${res.status} ${cf}  (${key})`);
    }
  }

  console.log(`${ok}/${seen.size} hosted Images live. ${missing} missing.`);
  if (missing) {
    console.log(
      "Do not set NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH until this command reports 0 missing."
    );
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
