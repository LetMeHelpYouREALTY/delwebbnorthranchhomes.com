#!/usr/bin/env node
/**
 * Upload git-backed catalog images to Cloudflare hosted Images.
 *
 * Docs (2026):
 *   https://developers.cloudflare.com/images/storage/upload-images/methods/
 *   https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 *   https://developers.cloudflare.com/images/storage/upload-images/upload-url/
 *   https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 *   https://developers.cloudflare.com/images/optimization/hosted-images/enable-flexible-variants/
 *
 * Delivery (do not orange-cloud the Vercel www hostname):
 *   https://imagedelivery.net/<ACCOUNT_HASH>/<CUSTOM_ID>/public
 *
 * Git backup: files remain in public/images/.
 *
 * Required:
 *   CLOUDFLARE_API_TOKEN  Account.Cloudflare Images: Edit
 *
 * Optional:
 *   CLOUDFLARE_ACCOUNT_ID  (defaults to this project's Images account)
 *   NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH  (used to HEAD-check delivery URLs)
 *   CF_IMAGES_ENABLE_FLEXIBLE=1  PATCH images/v1/config flexible_variants
 *
 * Usage:
 *   npm run images:upload
 */
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const catalogPath = path.join(root, "src/lib/media-catalog.json");

const DEFAULT_ACCOUNT_ID = "2cc579c1ec9e426ed585e933ebf4753b";
const DEFAULT_ACCOUNT_HASH = "byE6BTe9lNqo21V57n4aPQ";
const API = "https://api.cloudflare.com/client/v4";

function alreadyExists(json) {
  return (
    Array.isArray(json?.errors) &&
    json.errors.some((err) =>
      String(err.message || err.code || "")
        .toLowerCase()
        .includes("already exists")
    )
  );
}

async function apiJson(url, token, init) {
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(init?.headers || {}),
    },
  });
  const json = await res.json().catch(() => ({}));
  return { res, json };
}

async function headOk(url) {
  const res = await fetch(url, { method: "HEAD", redirect: "manual" });
  return res.ok;
}

async function enableFlexibleVariants(accountId, token) {
  const { json } = await apiJson(`${API}/accounts/${accountId}/images/v1/config`, token, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ flexible_variants: true }),
  });
  if (!json.success) {
    console.warn("flexible variants:", json.errors || json);
    return false;
  }
  console.log("ok      flexible variants enabled");
  return true;
}

async function uploadOne({ accountId, token, id, filePath, key }) {
  const form = new FormData();
  form.set("id", id);
  form.set("requireSignedURLs", "false");
  form.set("metadata", JSON.stringify({ key, gitPath: filePath }));
  const buf = await readFile(filePath);
  form.set("file", new Blob([buf]), path.basename(filePath));

  const { json } = await apiJson(`${API}/accounts/${accountId}/images/v1`, token, {
    method: "POST",
    body: form,
  });

  if (json.success) return "uploaded";
  if (alreadyExists(json)) return "exists";
  throw new Error(JSON.stringify(json.errors || json));
}

async function main() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || DEFAULT_ACCOUNT_ID;
  const token = process.env.CLOUDFLARE_API_TOKEN;
  const hash = process.env.NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH || DEFAULT_ACCOUNT_HASH;

  if (!token) {
    console.error(
      [
        "Missing CLOUDFLARE_API_TOKEN.",
        "Create a token at https://dash.cloudflare.com/profile/api-tokens",
        "with Account → Cloudflare Images → Edit.",
        "Git backup images still work via /images/* until hosted Images is populated.",
        "Do not set NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH in Vercel until delivery URLs return 200.",
      ].join("\n")
    );
    process.exit(1);
  }

  const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
  const seen = new Set();
  const uploads = [];

  for (const [key, asset] of Object.entries(catalog)) {
    const id = asset.cfId;
    if (!id || seen.has(id)) continue;
    seen.add(id);
    const filePath = path.join(root, "public", asset.localPath.replace(/^\//, ""));
    if (!existsSync(filePath)) {
      console.error(`skip    ${id} missing ${filePath}`);
      process.exitCode = 1;
      continue;
    }
    uploads.push({ key, id, filePath });
  }

  console.log(`Uploading ${uploads.length} unique images to Cloudflare hosted Images…`);

  if (process.env.CF_IMAGES_ENABLE_FLEXIBLE === "1") {
    await enableFlexibleVariants(accountId, token);
  }

  let failed = 0;
  for (const item of uploads) {
    try {
      const status = await uploadOne({ accountId, token, ...item });
      const delivery = `https://imagedelivery.net/${hash}/${item.id}/public`;
      const live = await headOk(delivery);
      if (!live) {
        console.error(`fail    ${item.id} uploaded=${status} delivery 404 ${delivery}`);
        failed += 1;
        process.exitCode = 1;
        continue;
      }
      console.log(`${status.padEnd(8)} ${item.id}`);
    } catch (err) {
      console.error(`fail    ${item.id}`, err.message || err);
      failed += 1;
      process.exitCode = 1;
    }
  }

  console.log(
    failed
      ? `Done with ${failed} failure(s). Keep git /images/* as primary until all delivery URLs 200.`
      : `All ${uploads.length} images are live at https://imagedelivery.net/${hash}/<id>/public`
  );
  if (!failed) {
    console.log(
      "Next: set Vercel Production env NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH=" + hash
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
