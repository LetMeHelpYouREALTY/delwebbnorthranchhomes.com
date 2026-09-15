#!/usr/bin/env node
/**
 * Upload git-backed images to Cloudflare Images.
 *
 * Primary delivery: https://imagedelivery.net/<ACCOUNT_HASH>/<CUSTOM_ID>/public
 * Git backup: files remain in public/images/.
 *
 * Required env:
 *   CLOUDFLARE_ACCOUNT_ID
 *   CLOUDFLARE_API_TOKEN   (Account.Cloudflare Images: Edit)
 *   NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH (printed in Images dashboard; set in Vercel)
 *
 * Usage:
 *   node scripts/cloudflare/upload-images.mjs
 *
 * Do not orange-cloud the Vercel www hostname. Serve images from imagedelivery.net
 * (or a dedicated images subdomain) so SSL is not proxied through Cloudflare DNS.
 */
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const catalogPath = path.join(root, "src/lib/media-catalog.json");

async function main() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const token = process.env.CLOUDFLARE_API_TOKEN;
  if (!accountId || !token) {
    console.error(
      "Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN. Git backup images still work via /images/*."
    );
    process.exit(1);
  }

  const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
  const seen = new Set();
  const uploads = [];

  for (const [key, asset] of Object.entries(catalog)) {
    const id = asset.cfId;
    if (seen.has(id)) continue;
    seen.add(id);
    const filePath = path.join(root, "public", asset.localPath.replace(/^\//, ""));
    if (!existsSync(filePath)) {
      console.error(`Skip ${key}: missing ${filePath}`);
      continue;
    }
    uploads.push({ key, id, filePath });
  }

  console.log(`Uploading ${uploads.length} unique images to Cloudflare Images…`);

  for (const item of uploads) {
    const form = new FormData();
    form.set("id", item.id);
    const buf = await readFile(item.filePath);
    const filename = path.basename(item.filePath);
    form.set("file", new Blob([buf]), filename);
    form.set("metadata", JSON.stringify({ key: item.key, gitPath: item.filePath }));

    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      }
    );
    const json = await res.json();
    if (!json.success) {
      const already =
        Array.isArray(json.errors) &&
        json.errors.some((err) => String(err.message || "").toLowerCase().includes("already exists"));
      if (already) {
        console.log(`exists  ${item.id}`);
        continue;
      }
      console.error(`fail    ${item.id}`, json.errors || json);
      process.exitCode = 1;
      continue;
    }
    console.log(`ok      ${item.id}`);
  }

  if (process.env.NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH) {
    console.log(
      `Delivery: https://imagedelivery.net/${process.env.NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH}/<id>/public`
    );
  } else {
    console.log("Set NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH in Vercel to serve from Cloudflare Images.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
