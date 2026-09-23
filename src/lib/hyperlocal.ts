/**
 * Hyperlocal SEO config for Del Webb North Ranch (North Las Vegas 55+).
 * Use for metadata, titles, alt text, and persona-consistent copy.
 * See docs/optimization/hyperlocal-seo.md and hyperlocal-persona.md.
 */

import { GBP_BUSINESS_NAME } from "./site";

export const HYPERLOCAL = {
  /** Primary service area (city + state). */
  primaryArea: "North Las Vegas, NV",
  /** Community name. */
  communityName: "Del Webb North Ranch",
  /** Short label for 55+ audience. */
  audienceLabel: "55+ active adult",
  /** Agent name (NAP consistency). */
  agentName: "Dr. Jan Duffy",
  /** License (NAP). */
  agentLicense: "S.0197614.LLC",
  /** Brokerage. */
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",

  /** Primary keywords for titles and H1s (community + area + intent). */
  primaryKeywords: [
    "Del Webb North Ranch",
    "North Las Vegas 55+",
    "55+ homes for sale North Las Vegas",
    "active adult community North Las Vegas",
  ],

  /** Secondary keywords for meta description and body. */
  secondaryKeywords: [
    "single-story homes North Las Vegas",
    "gated 55+ community Nevada",
    "resort-style amenities North Las Vegas",
    "retirement homes North Las Vegas",
    "senior living North Las Vegas",
  ],

  /** Local entities to weave into content (neighborhoods, landmarks). */
  localEntities: [
    "North Las Vegas",
    "Aliante",
    "Centennial Hills",
    "Craig Ranch Regional Park",
    "VA Southern Nevada Hospital",
    "Harry Reid International Airport",
  ],
} as const;

/** Suffix for page titles – matches Google Business Profile business name. */
export const TITLE_SUFFIX = GBP_BUSINESS_NAME;

/** Prefix for image alt text (location + subject). */
export function altPrefix(subject: string): string {
  return `${subject} at ${HYPERLOCAL.communityName}, ${HYPERLOCAL.primaryArea}`;
}

/** Short meta description building block (community + area + CTA). */
export function metaDescriptionBlock(highlight: string): string {
  return `${highlight} in ${HYPERLOCAL.communityName}, ${HYPERLOCAL.primaryArea}. Contact ${HYPERLOCAL.agentName} for tours and listings.`;
}
