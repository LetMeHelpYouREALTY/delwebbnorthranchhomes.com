/** Site origin (no trailing slash). Use for sitemap, robots, and path-based URLs. */
export const SITE_ORIGIN = "https://www.delwebbnorthranchhomes.com";

/** Canonical homepage URL (with trailing slash). Matches GSC preferred URL for ?card= alternates. */
export const CANONICAL_HOMEPAGE = `${SITE_ORIGIN}/`;

/** Google Business Profile – canonical business name (NAP). */
export const GBP_BUSINESS_NAME =
  "Del Webb North Ranch 55+ Real Estate | Homes by Dr. Jan Duffy";

/** GBP description – matches Google Business Profile exactly. */
export const GBP_DESCRIPTION =
  "Helping active adults 55+ buy and sell homes in Del Webb North Ranch, a gated 55+ community in North Las Vegas' 89086 zip code. Del Webb North Ranch offers single-story, low-maintenance homes with resort-style amenities, including a clubhouse, pool and spa, fitness center, pickleball courts, social clubs, and mountain views, all minutes from the VA hospital, beltway, shopping, dining, and healthcare. As a local real estate agent focused specifically on Del Webb North Ranch, we provide community tours, new-build and resale home showings, pricing and market analysis, new listing alerts, and full support from offer to closing for buyers and sellers in this active adult neighborhood.";

/** Shorter description for meta tags and visible UI where full GBP text is too long. */
export const GBP_SHORT_DESCRIPTION =
  "Helping active adults 55+ buy and sell homes in Del Webb North Ranch, a gated 55+ community in North Las Vegas, NV 89086. Community tours, showings, market analysis, and full buyer/seller support.";

/** GBP business email. */
export const SITE_EMAIL = "sales@delwebbnorthranchhomes.com";

/** Phone – E.164 for tel: links. Matches Google Business Profile (NAP). */
export const SITE_PHONE_TEL = "tel:+17025001064";

/** SMS – matches GBP texting number. */
export const SITE_PHONE_SMS = "sms:+17025001064";

/** Phone display – matches GBP exactly for visible NAP. */
export const SITE_PHONE_DISPLAY = "(702) 500-1064";

/** Phone for JSON-LD/schema.org (E.164 with dashes). */
export const SITE_PHONE_SCHEMA = "+1-702-500-1064";

/** GBP business location – matches Google Business Profile (NAP). */
export const GBP_ADDRESS = {
  streetAddress: "2290 Beauty Vista Avenue",
  addressLocality: "North Las Vegas",
  addressRegion: "NV",
  postalCode: "89086",
  addressCountry: "US",
} as const;

/** GBP service area. */
export const GBP_SERVICE_AREA = "North Las Vegas, NV, USA";

/** GBP opening date. */
export const GBP_FOUNDING_DATE = "2009-09-20";

/** GBP social profiles – matches listed profiles exactly. */
export const GBP_SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/del-webb-north-ranch-homes",
  "https://www.instagram.com/delwebbnorthranchhomes/",
  "https://www.facebook.com/DellWebbNorthRanch",
] as const;

/** GBP standard hours – Sun–Sat 8:00 AM–8:00 PM. */
export const GBP_STANDARD_HOURS = {
  dayOfWeek: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ] as const,
  opens: "08:00",
  closes: "20:00",
} as const;

/** GBP special closures – closed on listed dates. */
export const GBP_SPECIAL_CLOSURES = [
  { validFrom: "2026-07-03", validThrough: "2026-07-03", name: "4th of July (Observed)" },
  { validFrom: "2026-07-04", validThrough: "2026-07-04", name: "4th of July" },
] as const;

/** Visible business hours label for contact/footer. */
export const GBP_HOURS_DISPLAY = "Sunday–Saturday, 8:00 AM–8:00 PM";

/** Google Business Profile review link – use for “Leave a review on Google” CTAs. */
export const GOOGLE_REVIEW_LINK = "https://g.page/r/CTX_3qPVOeEqEBI/review";

/** Google Maps directions to Del Webb North Ranch (community) – for “Get directions” / plan your visit. */
export const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir//2290+Beauty+Vista+Avenue,+North+Las+Vegas,+NV+89086";

/** Google Maps place URL for schema hasMap and “View on Google Maps”. */
export const GOOGLE_MAPS_PLACE_URL =
  "https://www.google.com/maps/search/?api=1&query=2290+Beauty+Vista+Avenue,+North+Las+Vegas,+NV+89086";

/** Google Maps embed (no API key) – pin at the GBP business address. */
export const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=2290%20Beauty%20Vista%20Avenue%2C%20North%20Las%20Vegas%2C%20NV%2089086&z=16&output=embed";

/** Public Google reviews listing for the GBP. */
export const GOOGLE_REVIEWS_URL = "https://g.page/r/CTX_3qPVOeEqEBI";

/** schema.org PostalAddress object from GBP address. */
export function gbpPostalAddressSchema() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: GBP_ADDRESS.streetAddress,
    addressLocality: GBP_ADDRESS.addressLocality,
    addressRegion: GBP_ADDRESS.addressRegion,
    postalCode: GBP_ADDRESS.postalCode,
    addressCountry: GBP_ADDRESS.addressCountry,
  };
}

/** schema.org OpeningHoursSpecification array – standard hours plus GBP special closures. */
export function gbpOpeningHoursSpecification() {
  return [
    {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: [...GBP_STANDARD_HOURS.dayOfWeek],
      opens: GBP_STANDARD_HOURS.opens,
      closes: GBP_STANDARD_HOURS.closes,
    },
    ...GBP_SPECIAL_CLOSURES.map((closure) => ({
      "@type": "OpeningHoursSpecification" as const,
      validFrom: closure.validFrom,
      validThrough: closure.validThrough,
    })),
  ];
}

/** Formatted single-line address for visible NAP. */
export function gbpFormattedAddress(): string {
  return `${GBP_ADDRESS.streetAddress}, ${GBP_ADDRESS.addressLocality}, ${GBP_ADDRESS.addressRegion} ${GBP_ADDRESS.postalCode}`;
}
