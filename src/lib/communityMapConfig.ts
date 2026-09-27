/**
 * Map center and amenity categories for Del Webb North Ranch hyperlocal map.
 * Coordinates: OpenStreetMap Nominatim for 2290 Beauty Vista Avenue / Del Webb at North Ranch, North Las Vegas NV 89086 (Sep 2026).
 */

import { GBP_ADDRESS, gbpFormattedAddress } from "./site";
import { HYPERLOCAL } from "./hyperlocal";

export const COMMUNITY_MAP_CENTER = {
  lat: 36.2792284,
  lng: -115.119457,
} as const;

export const COMMUNITY_MAP_LABEL = HYPERLOCAL.communityName;

export const COMMUNITY_MAP_ADDRESS = gbpFormattedAddress();

/** Keyless embed when Maps JS API is unavailable. */
export const COMMUNITY_MAP_EMBED_URL = `https://www.google.com/maps?q=${COMMUNITY_MAP_CENTER.lat},${COMMUNITY_MAP_CENTER.lng}&z=14&output=embed`;

export type AmenityCategoryId =
  | "healthcare"
  | "golf"
  | "parks"
  | "community"
  | "grocery"
  | "restaurants"
  | "cafes"
  | "pharmacies"
  | "shopping"
  | "parking"
  | "fitness"
  | "schools";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) includedPrimaryTypes — first type used for search. */
  placeTypes: string[];
  /** Legacy PlacesService type (fallback). */
  legacyType?: string;
  deemphasized?: boolean;
};

/** 55+ community: healthcare, recreation, and daily errands first; schools de-emphasized. */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: "healthcare",
    label: "Healthcare",
    placeTypes: ["hospital", "doctor"],
    legacyType: "hospital",
  },
  {
    id: "golf",
    label: "Golf",
    placeTypes: ["golf_course"],
    legacyType: "golf_course",
  },
  {
    id: "parks",
    label: "Parks",
    placeTypes: ["park"],
    legacyType: "park",
  },
  {
    id: "community",
    label: "Recreation",
    placeTypes: ["community_center", "sports_complex"],
    legacyType: "gym",
  },
  {
    id: "grocery",
    label: "Grocery",
    placeTypes: ["grocery_store", "supermarket"],
    legacyType: "grocery_or_supermarket",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    placeTypes: ["restaurant"],
    legacyType: "restaurant",
  },
  {
    id: "cafes",
    label: "Cafes",
    placeTypes: ["cafe", "coffee_shop"],
    legacyType: "cafe",
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    placeTypes: ["pharmacy", "drugstore"],
    legacyType: "pharmacy",
  },
  {
    id: "shopping",
    label: "Shopping",
    placeTypes: ["shopping_mall", "department_store"],
    legacyType: "shopping_mall",
  },
  {
    id: "parking",
    label: "Parking",
    placeTypes: ["parking"],
    legacyType: "parking",
  },
  {
    id: "fitness",
    label: "Fitness",
    placeTypes: ["gym", "fitness_center"],
    legacyType: "gym",
  },
  {
    id: "schools",
    label: "Schools",
    placeTypes: ["school", "primary_school", "secondary_school"],
    legacyType: "school",
    deemphasized: true,
  },
];

export const DEFAULT_AMENITY_CATEGORY: AmenityCategoryId = "healthcare";

export const MAP_SEARCH_RADIUS_METERS = 8000;

export function getGoogleMapsApiKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return key?.trim() ? key.trim() : undefined;
}

export function getGoogleMapsMapId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;
  return id?.trim() ? id.trim() : undefined;
}

/** schema.org GeoCoordinates for the community Place. */
export function communityGeoSchema() {
  return {
    "@type": "GeoCoordinates" as const,
    latitude: COMMUNITY_MAP_CENTER.lat,
    longitude: COMMUNITY_MAP_CENTER.lng,
  };
}

export function communityPlaceSchemaExtras() {
  return {
    name: COMMUNITY_MAP_LABEL,
    address: {
      "@type": "PostalAddress" as const,
      streetAddress: GBP_ADDRESS.streetAddress,
      addressLocality: GBP_ADDRESS.addressLocality,
      addressRegion: GBP_ADDRESS.addressRegion,
      postalCode: GBP_ADDRESS.postalCode,
      addressCountry: GBP_ADDRESS.addressCountry,
    },
    geo: communityGeoSchema(),
  };
}
