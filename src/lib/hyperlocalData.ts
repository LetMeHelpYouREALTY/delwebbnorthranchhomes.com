/**
 * Hyperlocal data for content, internal linking, and schema.
 * Complements communityData.ts with area-focused and persona content.
 * See docs/optimization/hyperlocal-seo.md.
 */

export type NearbyArea = {
  name: string;
  slug: string;
  description: string;
  /** For internal links: /blog, /amenities, etc. */
  relatedPath?: string;
};

/** Nearby areas for "Living near..." and internal link anchor text. */
export const nearbyAreas: NearbyArea[] = [
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    description: "City of North Las Vegas; Del Webb North Ranch is in 89086.",
    relatedPath: "/about",
  },
  {
    name: "Aliante",
    slug: "aliante",
    description: "Aliante area; near Aliante Golf Club and shopping.",
    relatedPath: "/nearby-amenities",
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    description: "Centennial Hills; Centennial Hills Hospital and library nearby.",
    relatedPath: "/nearby-amenities",
  },
  {
    name: "Craig Ranch",
    slug: "craig-ranch",
    description: "Craig Ranch Regional Park (170 acres) nearby.",
    relatedPath: "/nearby-amenities",
  },
];

/** Local search phrases (suggested for headings and FAQ). */
export const localSearchPhrases = [
  "55+ homes for sale in North Las Vegas",
  "active adult communities North Las Vegas",
  "single-story homes Del Webb North Ranch",
  "retirement communities North Las Vegas NV",
  "gated 55+ community North Las Vegas",
  "resort-style 55+ community Nevada",
  "North Las Vegas 55+ real estate",
];

/** Hyperlocal FAQ-style Q&A for schema or "Local questions" sections. */
export const hyperlocalFaq = [
  {
    question: "Is Del Webb North Ranch in North Las Vegas?",
    answer:
      "Yes. Del Webb North Ranch is a 55+ active adult gated community in North Las Vegas, NV 89086, with single-story homes, resort-style amenities, and no state income tax.",
  },
  {
    question: "What 55+ communities are in North Las Vegas?",
    answer:
      "Del Webb North Ranch is a premier 55+ active adult community in North Las Vegas, featuring single-story homes from the Cottage, Classic, and Retreat series, a 10,000 sq ft clubhouse, pickleball, pools, and fitness facilities.",
  },
  {
    question: "Why choose North Las Vegas for 55+ living?",
    answer:
      "North Las Vegas offers no state income tax, strong healthcare (VA hospital nearby), outdoor recreation (Craig Ranch Park, Lake Mead), and a 55+ community like Del Webb North Ranch with resort-style amenities and single-story living.",
  },
];

export function getNearbyAreas(): NearbyArea[] {
  return nearbyAreas;
}

export function getLocalSearchPhrases(): string[] {
  return localSearchPhrases;
}

export function getHyperlocalFaq(): { question: string; answer: string }[] {
  return hyperlocalFaq;
}
