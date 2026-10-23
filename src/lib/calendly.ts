/** Default Calendly event: an in-person showing. */
export const CALENDLY_URL = "https://calendly.com/drjanduffy/showing";

/** Seller pages book the listing consultation instead. */
const CALENDLY_SELLER_URL = "https://calendly.com/drjanduffy/listing-consultation";
const SELLER_PATHS = ["/sellers", "/home-value"];

/**
 * Resolves the Calendly URL for the current page: swaps the default event for
 * the seller event on seller pages and adds UTM tags. utm_source is the bare
 * domain so the Calendly → FUB Worker can map the booking to this site.
 */
export function resolveCalendlyUrl(url: string, medium: string): string {
  const pathname = typeof window === "undefined" ? "/" : window.location.pathname;
  const isSellerPage = SELLER_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  const u = new URL(url === CALENDLY_URL && isSellerPage ? CALENDLY_SELLER_URL : url);
  u.searchParams.set("hide_gdpr_banner", "1");
  u.searchParams.set("utm_source", "delwebbnorthranchhomes.com");
  u.searchParams.set("utm_medium", medium);
  u.searchParams.set("utm_campaign", pathname === "/" ? "home" : pathname.slice(1));
  return u.toString();
}

export const CALENDLY_WIDGET_CSS =
  "https://assets.calendly.com/assets/external/widget.css";

export const CALENDLY_WIDGET_JS =
  "https://assets.calendly.com/assets/external/widget.js";

export const CALENDLY_BADGE = {
  text: "Schedule time with me",
  color: "#0069ff",
  textColor: "#ffffff",
  branding: false,
} as const;

export const CALENDLY_READY_EVENT = "calendly-ready";

/** Open the Calendly popup scheduler (link widget pattern). */
export function openCalendlyPopup(url: string = CALENDLY_URL): void {
  if (typeof window === "undefined") {
    return;
  }

  const tagged = resolveCalendlyUrl(url, "popup");
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: tagged });
    return;
  }

  window.open(tagged, "_blank", "noopener,noreferrer");
}

/** Wait until the global Calendly script has loaded. */
export function whenCalendlyReady(callback: () => void): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  if (window.Calendly) {
    callback();
    return () => undefined;
  }

  window.addEventListener(CALENDLY_READY_EVENT, callback, { once: true });
  return () => window.removeEventListener(CALENDLY_READY_EVENT, callback);
}
