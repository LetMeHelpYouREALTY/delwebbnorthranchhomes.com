import { communityInfo } from './communityData';

/**
 * Plan names, square footage, series, and options come from the Del Webb North Ranch builder brochure
 * (public/images/floor-plans/North Ranch Digital Brochure.pdf). Bed/bath ranges match the prior
 * community site. Per-plan pricing is not published, so pages use the community price range.
 */
export type FloorPlan = {
  slug: string;
  name: string;
  series: 'Cottage' | 'Classic' | 'Retreat';
  /** Builder plan number from the brochure. */
  planNumber: string;
  sqft: string;
  sqftNumber: number;
  beds: string;
  baths: string;
  garage: number;
  description: string;
  features: string[];
  imageUrl?: string;
  /** True when imageUrl is an illustrative rendering rather than a photo of this exact plan. */
  imageIsRendering?: boolean;
};

export const floorPlans: FloorPlan[] = [
  // Cottage Series
  {
    slug: 'canyon',
    name: 'Canyon',
    series: 'Cottage',
    planNumber: '3012',
    sqft: '1,285',
    sqftNumber: 1285,
    beds: '2',
    baths: '2',
    garage: 2,
    description:
      'The most efficient plan at North Ranch: two bedrooms, an open café and gathering area, and easy upkeep.',
    features: [
      'Owner’s suite with optional tray ceiling',
      'Optional flex room or den',
      'Optional low-threshold owner’s shower with seat',
      'Optional extension at rear of house',
    ],
    imageUrl: '/images/homes/canyon.jpg',
    imageIsRendering: true,
  },
  {
    slug: 'overlook',
    name: 'Overlook',
    series: 'Cottage',
    planNumber: '3013',
    sqft: '1,390',
    sqftNumber: 1390,
    beds: '2',
    baths: '2',
    garage: 2,
    description:
      'A two-bedroom Cottage plan with a flex room that can stay open living space or become storage.',
    features: [
      'Flex room (optional storage configuration)',
      'Café dining open to the gathering room',
      'Owner’s suite with optional tray ceiling',
      'Optional low-threshold owner’s shower with seat',
    ],
    imageUrl: '/images/homes/overlook.jpg',
    imageIsRendering: true,
  },
  {
    slug: 'peak',
    name: 'Peak',
    series: 'Cottage',
    planNumber: '3015',
    sqft: '1,509',
    sqftNumber: 1509,
    beds: '2–3',
    baths: '2',
    garage: 2,
    description:
      'The largest Cottage plan, with a flex room that can convert to a third bedroom.',
    features: [
      'Optional Bedroom 3 in place of the flex room',
      'Optional second covered patio',
      'Owner’s suite with optional tray ceiling',
      'Optional extension at rear of house',
    ],
    imageUrl: '/images/homes/peak.jpg',
    imageIsRendering: true,
  },
  // Classic Series
  {
    slug: 'getaway',
    name: 'Getaway',
    series: 'Classic',
    planNumber: '3514',
    sqft: '1,451',
    sqftNumber: 1451,
    beds: '2',
    baths: '2',
    garage: 2,
    description:
      'The entry Classic plan, built around an open gathering room and a covered patio.',
    features: [
      'Gathering room with optional tray ceiling',
      'Optional second covered patio',
      'Owner’s bath options: walk-in shower or separate shower and tub',
      'Optional center sliding glass door to the patio',
    ],
    imageUrl: '/images/homes/getaway.jpg',
    imageIsRendering: true,
  },
  {
    slug: 'solitude',
    name: 'Solitude',
    series: 'Classic',
    planNumber: '3516',
    sqft: '1,657',
    sqftNumber: 1657,
    beds: '2',
    baths: '2',
    garage: 2,
    description:
      'A two-bedroom Classic plan with a den for a home office, hobby room, or guest space.',
    features: [
      'Den',
      'Gathering room and café dining',
      'Optional second covered patio',
      'Owner’s bath options: walk-in shower or separate shower and tub',
    ],
    imageUrl: '/images/homes/solitude.jpg',
    imageIsRendering: true,
  },
  {
    slug: 'expedition',
    name: 'Expedition',
    series: 'Classic',
    planNumber: '3517',
    sqft: '1,770',
    sqftNumber: 1770,
    beds: '2–3',
    baths: '2',
    garage: 2,
    description:
      'The largest Classic plan, with a den and an option for a third bedroom.',
    features: [
      'Den or optional Bedroom 3',
      'Owner’s bath options: walk-in shower or separate shower and tub',
      'Optional tray ceilings',
      'Optional extension at rear of house',
    ],
    imageUrl: '/images/homes/expedition.jpg',
    imageIsRendering: true,
  },
  // Retreat Series
  {
    slug: 'sanctuary',
    name: 'Sanctuary',
    series: 'Retreat',
    planNumber: '4217',
    sqft: '1,716',
    sqftNumber: 1716,
    beds: '2',
    baths: '2–2.5',
    garage: 2,
    description:
      'The entry Retreat plan, with a den and entertaining options like a wet bar.',
    features: [
      'Den',
      'Optional wet bar or A/V built-in storage',
      'Optional corner or center sliding glass door',
      'Owner’s bath options: walk-in shower or separate shower and tub',
    ],
    imageUrl: '/images/homes/sanctuary.jpg',
    imageIsRendering: true,
  },
  {
    slug: 'haven',
    name: 'Haven',
    series: 'Retreat',
    planNumber: '4218',
    sqft: '1,859',
    sqftNumber: 1859,
    beds: '2–3',
    baths: '2–2.5',
    garage: 2,
    description:
      'A Retreat plan with a den or optional third bedroom and an optional second laundry.',
    features: [
      'Den or optional Bedroom 3',
      'Optional second laundry',
      'Gathering room and café with optional tray ceiling',
      'Owner’s bath options: walk-in shower or separate shower and tub',
    ],
    imageUrl: '/images/homes/haven-6584.jpg',
  },
  {
    slug: 'preserve',
    name: 'Preserve',
    series: 'Retreat',
    planNumber: '4219',
    sqft: '2,015',
    sqftNumber: 2015,
    beds: '2–3',
    baths: '2–2.5',
    garage: 2,
    description:
      'The largest plan at North Ranch, with a den, optional third bedroom, and room to host.',
    features: [
      'Largest floor plan at Del Webb North Ranch',
      'Den or optional Bedroom 3',
      'Optional wet bar and second laundry',
      'Owner’s bath options: walk-in shower or separate shower and tub',
    ],
    imageUrl: '/images/homes/preserve.jpg',
    imageIsRendering: true,
  },
];

/** Old URLs from an earlier, incorrect plan list → the brochure plan with the same series and size. */
export const LEGACY_FLOOR_PLAN_REDIRECTS: Record<string, string> = {
  explore: 'getaway',
  journey: 'solitude',
  pursuit: 'expedition',
  stellar: 'sanctuary',
  mystique: 'haven',
  reverence: 'preserve',
};

export const COMMUNITY_PRICE_RANGE = communityInfo.priceRange;

function bedsPhrase(plan: FloorPlan): string {
  return `${plan.beds} bedroom${plan.beds === '1' ? '' : 's'}`;
}

function bathsPhrase(plan: FloorPlan): string {
  return `${plan.baths} bathroom${plan.baths === '1' ? '' : 's'}`;
}

/** Min/max from labels like "2" or "2–3" for schema QuantitativeValue. */
export function rangeBounds(label: string): { min: number; max: number } {
  const [min, max] = label.split(/[–-]/).map(Number);
  return { min, max: max ?? min };
}

/** One-sentence, answer-first description of a plan for AI answers and featured snippets. */
export function planAnswer(plan: FloorPlan): string {
  return `The ${plan.name} (plan ${plan.planNumber}) is a ${plan.sqft} sq ft single-story ${plan.series} Series floor plan at Del Webb North Ranch in North Las Vegas, NV 89086, with ${bedsPhrase(plan)}, ${bathsPhrase(plan)}, and a ${plan.garage}-car garage.`;
}

/** Plan-specific questions answered from brochure and site data; rendered visibly and as FAQPage schema. */
export function planFaq(plan: FloorPlan): Array<{ question: string; answer: string }> {
  const siblings = floorPlans
    .filter((p) => p.series === plan.series && p.slug !== plan.slug)
    .map((p) => `${p.name} (${p.sqft} sq ft)`);
  return [
    {
      question: `How big is the ${plan.name} floor plan at Del Webb North Ranch?`,
      answer: `The ${plan.name} is ${plan.sqft} sq ft, single-story, with ${bedsPhrase(plan)}, ${bathsPhrase(plan)}, and a ${plan.garage}-car garage.`,
    },
    {
      question: `How much does a ${plan.name} home cost at Del Webb North Ranch?`,
      answer: `Del Webb North Ranch homes generally trade in the ${COMMUNITY_PRICE_RANGE} range. A ${plan.name} resale price depends on the homesite, options, and current market conditions. Call Dr. Jan Duffy at (702) 500-1064 for current ${plan.name} listings and recent sales.`,
    },
    {
      question: `Which series is the ${plan.name} in?`,
      answer: siblings.length
        ? `The ${plan.name} is in the ${plan.series} Series, alongside the ${siblings.join(' and ')}.`
        : `The ${plan.name} is in the ${plan.series} Series.`,
    },
    {
      question: `Who can buy a ${plan.name} home at Del Webb North Ranch?`,
      answer: `Del Webb North Ranch is a 55+ community: at least one resident in each home must be 55 or older under the Housing for Older Persons Act (HOPA). HOA dues are about $215 per month, billed quarterly, with no SID or LID.`,
    },
  ];
}

export function getFloorPlanBySlug(slug: string): FloorPlan | undefined {
  return floorPlans.find((plan) => plan.slug === slug);
}

export function getAllFloorPlanSlugs(): string[] {
  return floorPlans.map((plan) => plan.slug);
}
