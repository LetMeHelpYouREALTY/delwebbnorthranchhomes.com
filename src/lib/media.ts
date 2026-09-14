import catalog from "./media-catalog.json";
import { SITE_ORIGIN } from "./site";

export const MEDIA = catalog;

export type MediaKey = keyof typeof MEDIA;

export type MediaAsset = (typeof MEDIA)[MediaKey];

const DEFAULT_VARIANT = "public";

export function isCloudflareImagesEnabled(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH);
}

/** Git-backed local path, or Cloudflare Images when the account hash is set. */
export function mediaSrc(key: MediaKey, variant = DEFAULT_VARIANT): string {
  const asset = MEDIA[key];
  const hash = process.env.NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH;
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
  return MEDIA[key].alt;
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
