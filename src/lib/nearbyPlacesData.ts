/**
 * Curated, verifiable nearby places for static content, fallback map list, and ItemList schema.
 * Addresses from public listings (hospitals, parks, golf) and site community copy.
 */

import type { AmenityCategoryId } from "./communityMapConfig";
import { getDistances } from "./communityData";
import { HYPERLOCAL } from "./hyperlocal";

export type NearbyPlaceRecord = {
  name: string;
  category: AmenityCategoryId;
  address: string;
  schemaType:
    | "Hospital"
    | "GolfCourse"
    | "Park"
    | "GroceryStore"
    | "Pharmacy"
    | "Restaurant"
    | "ShoppingCenter"
    | "Place";
  note?: string;
};

export const curatedNearbyPlaces: NearbyPlaceRecord[] = [
  {
    name: "VA Southern Nevada Healthcare System",
    category: "healthcare",
    address: "6900 North Pecos Road, North Las Vegas, NV 89086",
    schemaType: "Hospital",
    note: "Full-service VA hospital north of the Las Vegas Valley.",
  },
  {
    name: "Centennial Hills Hospital Medical Center",
    category: "healthcare",
    address: "6850 North Durango Drive, Las Vegas, NV 89149",
    schemaType: "Hospital",
  },
  {
    name: "Aliante Golf Club",
    category: "golf",
    address: "2400 West Aliante Parkway, North Las Vegas, NV 89084",
    schemaType: "GolfCourse",
  },
  {
    name: "Craig Ranch Regional Park",
    category: "parks",
    address: "505 C Avenue, North Las Vegas, NV 89030",
    schemaType: "Park",
    note: "170-acre regional park with trails, sports fields, and amphitheater.",
  },
  {
    name: "Aliante Nature Discovery Park",
    category: "parks",
    address: "2627 West Deer Springs Way, North Las Vegas, NV 89084",
    schemaType: "Park",
  },
  {
    name: "Aliante Casino + Hotel",
    category: "community",
    address: "7300 Aliante Parkway, North Las Vegas, NV 89084",
    schemaType: "Place",
    note: "Dining, entertainment, and meeting space in the Aliante master-planned area.",
  },
  {
    name: "Smith's Food and Drug (Aliante)",
    category: "grocery",
    address: "6850 North Aliante Parkway, North Las Vegas, NV 89084",
    schemaType: "GroceryStore",
  },
  {
    name: "Albertsons (Aliante)",
    category: "grocery",
    address: "6850 Aliante Parkway, North Las Vegas, NV 89084",
    schemaType: "GroceryStore",
  },
  {
    name: "Sprouts Farmers Market (Aliante)",
    category: "grocery",
    address: "6850 Aliante Parkway, North Las Vegas, NV 89084",
    schemaType: "GroceryStore",
  },
  {
    name: "CVS Pharmacy (Aliante)",
    category: "pharmacies",
    address: "6850 Aliante Parkway, North Las Vegas, NV 89084",
    schemaType: "Pharmacy",
  },
  {
    name: "Walgreens (Aliante Parkway)",
    category: "pharmacies",
    address: "2590 West Craig Road, North Las Vegas, NV 89031",
    schemaType: "Pharmacy",
  },
  {
    name: "Aliante Plaza",
    category: "shopping",
    address: "6850 Aliante Parkway, North Las Vegas, NV 89084",
    schemaType: "ShoppingCenter",
    note: "Retail, services, and restaurants along Aliante Parkway.",
  },
];

export function getCuratedPlacesByCategory(category: AmenityCategoryId): NearbyPlaceRecord[] {
  return curatedNearbyPlaces.filter((p) => p.category === category);
}

export type NearbyAmenitiesFaqItem = {
  question: string;
  answer: string;
};

const distances = getDistances();

export const nearbyAmenitiesFaq: NearbyAmenitiesFaqItem[] = [
  {
    question: `What grocery stores are near ${HYPERLOCAL.communityName}?`,
    answer:
      "Smith's Food and Drug, Albertsons, and Sprouts Farmers Market in the Aliante Parkway shopping area are the closest full-service grocery options to Del Webb North Ranch in North Las Vegas.",
  },
  {
    question: `How far is ${HYPERLOCAL.communityName} from the Las Vegas Strip?`,
    answer: `The Las Vegas Strip is approximately ${distances.lasVegasStrip.miles} miles from Del Webb North Ranch—about a 25–35 minute drive depending on traffic and your starting point in the community.`,
  },
  {
    question: `Are there hospitals near ${HYPERLOCAL.communityName}?`,
    answer:
      "Yes. VA Southern Nevada Healthcare System on North Pecos Road is the nearest major hospital campus; Centennial Hills Hospital Medical Center in northwest Las Vegas is also within a reasonable drive for specialty care.",
  },
  {
    question: `What parks are near ${HYPERLOCAL.communityName}?`,
    answer:
      "Craig Ranch Regional Park (170 acres) and Aliante Nature Discovery Park are both popular outdoor destinations north of the community, with trails, sports fields, and picnic areas.",
  },
  {
    question: `Is there golf near ${HYPERLOCAL.communityName}?`,
    answer:
      "Aliante Golf Club, an 18-hole championship course on Aliante Parkway, is the closest public golf option—about five miles from the community per local area guides on this site.",
  },
  {
    question: `How far is ${HYPERLOCAL.communityName} from Harry Reid International Airport?`,
    answer: `Harry Reid International Airport is approximately ${distances.mcCarranAirport.miles} miles from Del Webb North Ranch—typically 25–40 minutes by car depending on time of day.`,
  },
  {
    question: `Where can I shop and dine near ${HYPERLOCAL.communityName}?`,
    answer:
      "The Aliante Parkway corridor includes Aliante Plaza, the Aliante Casino + Hotel, and multiple restaurants and services; Centennial Hills and northwest Las Vegas add additional retail a short drive away.",
  },
  {
    question: `Are pharmacies close to ${HYPERLOCAL.communityName}?`,
    answer:
      "CVS and Walgreens locations along Aliante Parkway and Craig Road serve the North Las Vegas 89086 area, a few miles from the Del Webb North Ranch entrance.",
  },
];

export type NearbyCategoryCopy = {
  id: AmenityCategoryId;
  heading: string;
  paragraphs: string[];
};

export const nearbyCategoryCopy: NearbyCategoryCopy[] = [
  {
    id: "healthcare",
    heading: "Healthcare near Del Webb North Ranch",
    paragraphs: [
      "Del Webb North Ranch sits in North Las Vegas zip code 89086 with VA Southern Nevada Healthcare System on North Pecos Road—the closest major hospital campus. Centennial Hills Hospital Medical Center on Durango Drive in northwest Las Vegas provides additional emergency and specialty services.",
      "Many 55+ buyers choose North Ranch for single-story living while staying within a short drive of primary care, pharmacies, and hospital care across North Las Vegas and Centennial Hills.",
    ],
  },
  {
    id: "golf",
    heading: "Golf near Del Webb North Ranch",
    paragraphs: [
      "Aliante Golf Club on West Aliante Parkway is the primary public 18-hole course serving the North Las Vegas area. The community’s own resort-style amenities include pickleball and bocce; golf is a short drive away in Aliante.",
    ],
  },
  {
    id: "parks",
    heading: "Parks and outdoor recreation",
    paragraphs: [
      "Craig Ranch Regional Park spans 170 acres with trails, sports fields, and community events. Aliante Nature Discovery Park adds playgrounds and walking paths in the Aliante master-planned area.",
      "Within Del Webb North Ranch, residents use on-site walking trails, the event lawn, and the dog park without leaving the gated community.",
    ],
  },
  {
    id: "grocery",
    heading: "Grocery and everyday errands",
    paragraphs: [
      "The Aliante Parkway retail corridor includes Smith's, Albertsons, and Sprouts Farmers Market—full-service options for weekly shopping. Pharmacies including CVS and Walgreens sit in the same general area along Aliante Parkway and Craig Road.",
    ],
  },
  {
    id: "restaurants",
    heading: "Dining near North Ranch",
    paragraphs: [
      "Restaurants cluster along Aliante Parkway and inside Aliante Casino + Hotel, from casual chains to sit-down options. Many North Ranch residents combine a community clubhouse event with dinner in Aliante or Centennial Hills.",
    ],
  },
  {
    id: "shopping",
    heading: "Shopping and services",
    paragraphs: [
      "Aliante Plaza and surrounding strip centers on Aliante Parkway offer retail, banking, salons, and medical offices. Centennial Hills adds big-box and specialty retail northwest of the community.",
    ],
  },
];

export function buildNearbyPlacesItemListSchema(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Featured places near ${HYPERLOCAL.communityName}`,
    itemListElement: curatedNearbyPlaces.map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": place.schemaType,
        name: place.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: place.address.split(",")[0]?.trim(),
          addressLocality: place.address.includes("Las Vegas")
            ? place.address.match(/Las Vegas|North Las Vegas/)?.[0] ?? "North Las Vegas"
            : "North Las Vegas",
          addressRegion: "NV",
          addressCountry: "US",
        },
      },
    })),
    url: `${origin}/nearby-amenities`,
  };
}
