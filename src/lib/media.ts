import catalog from "./media-catalog.json";
import { SITE_ORIGIN } from "./site";

export const MEDIA = catalog;

export type MediaKey = keyof typeof MEDIA;

export type MediaAsset = (typeof MEDIA)[MediaKey];

/** Named variant created by default on Cloudflare hosted Images. */
const DEFAULT_VARIANT = "public";

/**
 * Public Images account hash from the Cloudflare dashboard (Developer Resources).
 * Safe to embed in URLs. Never enable delivery until `npm run images:verify` is green —
 * missing hosted IDs return HTTP 404 with `cf-images: err=9404` and would break
 * MediaImage, Open Graph, and JSON-LD image URLs.
 *
 * Keep the Vercel www hostname DNS-only (gray cloud). Serve hosted Images from
 * imagedelivery.net instead of proxying www through Cloudflare.
 */
export const CF_IMAGES_ACCOUNT_HASH = "byE6BTe9lNqo21V57n4aPQ";

function deliveryHash(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH;
  if (!raw) return undefined;
  if (raw === "1" || raw === "true") return CF_IMAGES_ACCOUNT_HASH;
  return raw;
}

export function isCloudflareImagesEnabled(): boolean {
  return Boolean(deliveryHash());
}

/**
 * Git-backed `/images/*` path, or Cloudflare hosted Images when
 * NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH is set in the environment.
 *
 * @see https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 */
export function mediaSrc(key: MediaKey, variant = DEFAULT_VARIANT): string {
  const asset = MEDIA[key];
  const fallback = MEDIA["place.primary"].localPath;
  if (!asset?.localPath) {
    return fallback;
  }
  const hash = deliveryHash();
  if (hash) {
    return `https://imagedelivery.net/${hash}/${asset.cfId}/${variant}`;
  }
  return asset.localPath;
}

export function absoluteMediaUrl(key: MediaKey): string {
  const src = mediaSrc(key);
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  return `${SITE_ORIGIN}${src}`;
}

export function mediaAlt(key: MediaKey): string {
  return MEDIA[key]?.alt ?? MEDIA["place.primary"].alt;
}

export function mediaOpenGraph(key: MediaKey) {
  return {
    url: absoluteMediaUrl(key),
    width: 1200,
    height: 630,
    alt: MEDIA[key].alt,
  };
}

export function mediaTwitterImages(key: MediaKey): string[] {
  return [absoluteMediaUrl(key)];
}

export function mediaImageObject(key: MediaKey) {
  return {
    "@type": "ImageObject" as const,
    url: absoluteMediaUrl(key),
    width: 1200,
    height: 630,
    caption: MEDIA[key].alt,
  };
}

const BLUR_JPEG =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export const MEDIA_BLUR_DATA_URL = BLUR_JPEG;
