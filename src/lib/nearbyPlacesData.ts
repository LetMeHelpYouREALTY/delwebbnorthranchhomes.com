/**
 * Curated, verifiable nearby places for static content, fallback map list, and ItemList schema.
 * Each entry includes sourceUrl from the business or agency's official site.
 */

import type { AmenityCategoryId } from "./communityMapConfig";
import { getDistances } from "./communityData";
import { HYPERLOCAL } from "./hyperlocal";

export type NearbyPlaceRecord = {
  name: string;
  category: AmenityCategoryId;
  address: string;
  sourceUrl: string;
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
    name: "North Las Vegas VA Medical Center (VA Southern Nevada Healthcare System)",
    category: "healthcare",
    address: "6900 North Pecos Road, North Las Vegas, NV 89086",
    sourceUrl:
      "https://www.va.gov/southern-nevada-health-care/locations/north-las-vegas-va-medical-center/",
    schemaType: "Hospital",
    note: "Primary VA hospital campus serving North Las Vegas and the valley.",
  },
  {
    name: "Centennial Hills Hospital Medical Center",
    category: "healthcare",
    address: "6900 North Durango Drive, Las Vegas, NV 89149",
    sourceUrl: "https://www.centennialhillshospital.com/about/contact-us",
    schemaType: "Hospital",
  },
  {
    name: "Aliante Golf Club",
    category: "golf",
    address: "3100 West Elkhorn, North Las Vegas, NV 89084",
    sourceUrl: "https://www.aliantegolf.com/book-tee-times/",
    schemaType: "GolfCourse",
  },
  {
    name: "Craig Ranch Regional Park",
    category: "parks",
    address: "628 West Craig Road, North Las Vegas, NV 89032",
    sourceUrl:
      "https://www.cityofnorthlasvegas.com/things-to-do/parks-and-recreation/parks/craig-ranch-regional-park",
    schemaType: "Park",
    note: "170-acre regional park with trails, sports fields, and amphitheater.",
  },
  {
    name: "Aliante Nature Discovery Park",
    category: "parks",
    address: "2627 Nature Park Drive, North Las Vegas, NV 89084",
    sourceUrl:
      "https://www.cityofnorthlasvegas.com/Home/Components/FacilityDirectory/FacilityDirectory/73/777",
    schemaType: "Park",
    note: "20-acre city park with lake, splash pad, and walking paths.",
  },
  {
    name: "Aliante Casino + Hotel + Spa",
    category: "community",
    address: "7300 North Aliante Parkway, North Las Vegas, NV 89084",
    sourceUrl: "https://aliante.boydgaming.com/",
    schemaType: "Place",
    note: "Dining, entertainment, and meeting space in the Aliante master-planned area.",
  },
  {
    name: "Smith's Food and Drug (Aliante Parkway)",
    category: "grocery",
    address: "6855 North Aliante Parkway, North Las Vegas, NV 89084",
    sourceUrl:
      "https://www.smithsfoodanddrug.com/stores/grocery/nv/north-las-vegas/6855-aliante-pkwy-no-las-vegas-nv/706/00338",
    schemaType: "GroceryStore",
  },
  {
    name: "Albertsons (Ann Road)",
    category: "grocery",
    address: "3010 West Ann Road, North Las Vegas, NV 89031",
    sourceUrl: "https://local.albertsons.com/nv/north-las-vegas/3010-w-ann-rd.html",
    schemaType: "GroceryStore",
  },
  {
    name: "Sprouts Farmers Market (Losee Road)",
    category: "grocery",
    address: "6506 North Losee Road, North Las Vegas, NV 89086",
    sourceUrl: "https://www.sprouts.com/store/nv/north-las-vegas/losee-rd/",
    schemaType: "GroceryStore",
  },
  {
    name: "CVS Pharmacy (Aliante Parkway)",
    category: "pharmacies",
    address: "7285 Aliante Parkway, North Las Vegas, NV 89084",
    sourceUrl:
      "https://www.cvs.com/store-locator/north-las-vegas-nv-pharmacies/7285-aliante-pkwy-north-las-vegas-nv-89084/storeid=7251",
    schemaType: "Pharmacy",
  },
  {
    name: "Walgreens (Aliante Parkway)",
    category: "pharmacies",
    address: "6435 Aliante Parkway, North Las Vegas, NV 89084",
    sourceUrl:
      "https://www.walgreens.com/locator/walgreens-6435+aliante+pkwy-north+las+vegas-nv-89084/id=2590",
    schemaType: "Pharmacy",
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
      "Smith's Food and Drug on North Aliante Parkway, Albertsons on West Ann Road, and Sprouts Farmers Market on North Losee Road are among the closest full-service grocery options to Del Webb North Ranch in North Las Vegas.",
  },
  {
    question: `How far is ${HYPERLOCAL.communityName} from the Las Vegas Strip?`,
    answer: `The Las Vegas Strip is approximately ${distances.lasVegasStrip.miles} miles from Del Webb North Ranch—about a 25–35 minute drive depending on traffic and your starting point in the community.`,
  },
  {
    question: `Are there hospitals near ${HYPERLOCAL.communityName}?`,
    answer:
      "Yes. The North Las Vegas VA Medical Center on North Pecos Road is the nearest major hospital campus; Centennial Hills Hospital Medical Center on North Durango Drive in northwest Las Vegas is also within a reasonable drive for specialty care.",
  },
  {
    question: `What parks are near ${HYPERLOCAL.communityName}?`,
    answer:
      "Craig Ranch Regional Park (170 acres) and Aliante Nature Discovery Park are both popular outdoor destinations north of the community, with trails, sports fields, and picnic areas.",
  },
  {
    question: `Is there golf near ${HYPERLOCAL.communityName}?`,
    answer:
      "Aliante Golf Club on West Elkhorn in North Las Vegas is the closest public 18-hole course serving the area—a short drive from the community.",
  },
  {
    question: `How far is ${HYPERLOCAL.communityName} from Harry Reid International Airport?`,
    answer: `Harry Reid International Airport is approximately ${distances.mcCarranAirport.miles} miles from Del Webb North Ranch—typically 25–40 minutes by car depending on time of day.`,
  },
  {
    question: `Where can I shop and dine near ${HYPERLOCAL.communityName}?`,
    answer:
      "The Aliante Parkway corridor includes Aliante Casino + Hotel + Spa, Smith's and other retailers, and multiple restaurants; Centennial Hills and northwest Las Vegas add additional retail a short drive away.",
  },
  {
    question: `Are pharmacies close to ${HYPERLOCAL.communityName}?`,
    answer:
      "CVS on Aliante Parkway and Walgreens on Aliante Parkway serve the North Las Vegas 89084–89086 area, a few miles from the Del Webb North Ranch entrance.",
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
      "Del Webb North Ranch sits in North Las Vegas zip code 89086 with the North Las Vegas VA Medical Center on North Pecos Road—the closest major hospital campus. Centennial Hills Hospital Medical Center on North Durango Drive in northwest Las Vegas provides additional emergency and specialty services.",
      "Many 55+ buyers choose North Ranch for single-story living while staying within a short drive of primary care, pharmacies, and hospital care across North Las Vegas and Centennial Hills.",
    ],
  },
  {
    id: "golf",
    heading: "Golf near Del Webb North Ranch",
    paragraphs: [
      "Aliante Golf Club on West Elkhorn is the primary public 18-hole course serving the North Las Vegas area. The community’s own resort-style amenities include pickleball and bocce; golf is a short drive away in Aliante.",
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
      "Smith's on North Aliante Parkway, Albertsons on West Ann Road, and Sprouts on North Losee Road are full-service options for weekly shopping. Pharmacies including CVS and Walgreens sit along Aliante Parkway.",
    ],
  },
  {
    id: "restaurants",
    heading: "Dining near North Ranch",
    paragraphs: [
      "Restaurants cluster along Aliante Parkway and inside Aliante Casino + Hotel + Spa, from casual chains to sit-down options. Many North Ranch residents combine a community clubhouse event with dinner in Aliante or Centennial Hills.",
    ],
  },
  {
    id: "shopping",
    heading: "Shopping and services",
    paragraphs: [
      "Retail and services line Aliante Parkway near Smith's, CVS, and the casino resort. Centennial Hills adds big-box and specialty retail northwest of the community.",
    ],
  },
];

function parsePostalCode(address: string): string | undefined {
  const match = address.match(/\bNV\s+(\d{5})(?:-\d{4})?\b/i);
  return match?.[1];
}

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
        url: place.sourceUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: place.address.split(",")[0]?.trim(),
          addressLocality: place.address.includes("North Las Vegas")
            ? "North Las Vegas"
            : place.address.includes("Las Vegas")
              ? "Las Vegas"
              : "North Las Vegas",
          addressRegion: "NV",
          postalCode: parsePostalCode(place.address),
          addressCountry: "US",
        },
      },
    })),
    url: `${origin}/nearby-amenities`,
  };
}
