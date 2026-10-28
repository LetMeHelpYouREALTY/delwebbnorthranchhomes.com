// lib/fetchOldSiteData.js
// Utility to scrape and structure data from the old CribFlyer site

export const oldSiteData = {
  // Virtual Tour Video Embeds
  // NOTE: The old CribFlyer site uses Matterport tours, not YouTube videos.
  // If YouTube videos exist for these floor plans, replace the placeholder IDs below.
  // YouTube video ID format: Replace "VIDEO_ID" with the actual 11-character YouTube video ID
  // Example: "https://www.youtube.com/embed/dQw4w9WgXcQ" (where "dQw4w9WgXcQ" is the video ID)
  virtualTours: [
    {
      model: "Overlook",
      sqft: "1,390",
      beds: 2,
      baths: 2,
      series: "Cottage",
      // Replace with actual YouTube video ID when available
      // Format: "https://www.youtube.com/embed/VIDEO_ID"
      embedUrl: null, // YouTube video not yet available
    },
    {
      model: "Canyon",
      sqft: "1,285",
      beds: 2,
      baths: 2,
      series: "Cottage",
      embedUrl: "https://my.matterport.com/show/?m=fAcy3LBb71W&qs=1&ts=1",
    },
    {
      model: "Gateway",
      sqft: "1,451",
      beds: 2,
      baths: 2,
      series: "Classic",
      embedUrl: null, // YouTube video not yet available
    },
    {
      model: "Solitude",
      sqft: "1,657",
      beds: 2,
      baths: 2,
      series: "Classic",
      embedUrl: null, // YouTube video not yet available
    },
    {
      model: "Peak",
      sqft: "1,509",
      beds: "2-3",
      baths: 2,
      series: "Cottage",
      embedUrl: null, // YouTube video not yet available
    },
    {
      model: "Expedition",
      sqft: "1,770",
      beds: "2-3",
      baths: 2,
      series: "Classic",
      embedUrl: null, // YouTube video not yet available
    },
    {
      model: "Sanctuary",
      sqft: "1,716",
      beds: 2,
      baths: "2-2.5",
      series: "Retreat",
      embedUrl: null, // YouTube video not yet available
    },
    {
      model: "Haven",
      sqft: "1,859",
      beds: "2-3",
      baths: "2-2.5",
      series: "Retreat",
      embedUrl: null, // YouTube video not yet available
    },
    {
      model: "Preserve",
      sqft: "2,015",
      beds: "2-3",
      baths: "2-2.5",
      series: "Retreat",
      embedUrl: null, // YouTube video not yet available
    },
  ],

  // All testimonials from old site
  testimonials: [
    {
      name: "Stephanie O.",
      text: "Working with Dr. Jan Duffy to find our dream home in Del Webb North Ranch was an absolute pleasure! Her unwavering dedication to her clients truly sets her apart. She took the time to deeply understand our needs as retirees, ensuring every detail was considered, and went above and beyond to help us find the perfect property in this beautiful gated community. Her professionalism, expertise, and genuine care made the entire process smooth and stress-free. We couldn't be happier with our new home and highly recommend Dr. Jan Duffy to anyone looking for exceptional real estate guidance!",
    },
    {
      name: "Kelly P.",
      text: "Dr. Jan Duffy's expertise in the Del Webb North Ranch community is truly unparalleled. Thanks to her guidance, we found our dream retirement home with stunning mountain views. Her in-depth knowledge of the 55+ gated community, combined with her meticulous attention to detail, made the entire home-buying process seamless and enjoyable.",
    },
    {
      name: "Mike Sellers",
      text: "Dr. Jan Duffy exceeded all our expectations! Her deep knowledge of the North Las Vegas real estate market, especially in Del Webb North Ranch, made all the difference. From finding the perfect property to closing the deal, she was with us every step of the way, offering expert guidance and genuine care. We couldn't have asked for a better partner in this journey!",
    },
    {
      name: "Sally S.",
      text: "As newcomers to North Las Vegas, we had the privilege of working with Dr. Jan Duffy, whose expertise in the Del Webb North Ranch community was truly invaluable. Thanks to her insightful guidance, we found a stunning 2-bedroom home that perfectly complements our retirement lifestyle.",
    },
    {
      name: "Paul B.",
      text: "Dr. Duffy's extensive experience in the Las Vegas area, particularly in Del Webb North Ranch, truly shines through in her work. Her deep knowledge of the market and understanding of the unique challenges within the competitive 55+ community set her apart. She guided us through every step of the process with professionalism and ease, ensuring we felt confident in our decisions. Thanks to her expertise, we were able to secure a fantastic home that not only met but exceeded our expectations, complete with all the amenities we had hoped for. We couldn't be happier with the results and highly recommend her to anyone looking for their perfect home in this area!",
    },
  ],

  // Floor plans with full details
  floorPlans: {
    cottage: [
      {
        name: "Canyon",
        sqft: "1,285+",
        beds: 2,
        baths: 2,
        garage: "2-car",
        features: ["Single-story", "Open layout", "Covered patio"],
      },
      {
        name: "Overlook",
        sqft: "1,390+",
        beds: 2,
        baths: 2,
        garage: "2-car",
        features: ["Single-story", "Open layout", "Covered patio"],
      },
      {
        name: "Peak",
        sqft: "1,509+",
        beds: "2-3",
        baths: 2,
        garage: "2-car",
        features: ["Single-story", "Optional den", "Covered patio"],
      },
    ],
    classic: [
      {
        name: "Getaway",
        sqft: "1,451+",
        beds: 2,
        baths: 2,
        garage: "2-car",
        features: ["Single-story", "Open layout", "Covered patio"],
      },
      {
        name: "Solitude",
        sqft: "1,657+",
        beds: 2,
        baths: 2,
        garage: "2-car",
        features: ["Single-story", "Optional den", "Covered patio"],
      },
      {
        name: "Expedition",
        sqft: "1,770+",
        beds: "2-3",
        baths: 2,
        garage: "2-car",
        features: ["Single-story", "Optional den", "Covered patio"],
      },
    ],
    retreat: [
      {
        name: "Sanctuary",
        sqft: "1,716+",
        beds: 2,
        baths: "2-2.5",
        garage: "2-car",
        features: ["Single-story", "Optional den", "Extended patio"],
      },
      {
        name: "Haven",
        sqft: "1,859+",
        beds: "2-3",
        baths: "2-2.5",
        garage: "2-car",
        features: ["Single-story", "Flex space", "Extended patio"],
      },
      {
        name: "Preserve",
        sqft: "2,015+",
        beds: "2-3",
        baths: "2-2.5",
        garage: "2-car",
        features: ["Single-story", "Flex space", "Extended patio", "Largest floor plan"],
      },
    ],
  },

  // Amenities list
  amenities: {
    homeFeatures: [
      "Air Conditioning",
      "Covered Patio",
      "Stainless Appliances",
      "Walk-in Closets",
      "Dual Pane Windows",
      "Programmable Thermostats",
      "Tankless Water Heater",
      "Contemporary Design",
    ],
    communityFeatures: [
      "Gated Community",
      "Clubhouse with modern facilities",
      "Resort-style outdoor pool & spa",
      "Heated lap pool",
      "Fitness center with aerobics room",
      "Lighted pickleball courts",
      "Bocce courts",
      "Billiards room",
      "Scenic walking trails",
      "Outdoor firepit",
      "Event lawn",
      "Dog park",
      "Multi-purpose rooms",
      "Social clubs and classes",
    ],
  },

  // External links and integrations
  integrations: {
    calendly: "https://calendly.com/drjanduffy/in-person-real-estate-consultation",
    realscout: "https://drjanduffy.realscout.com/onboarding",
    youtube: "https://www.youtube.com/@DrDuffy", // Channel handle (user-friendly)
    youtubeChannelId: "UCIMieP7FSUSwN0vw8FVNprA", // Channel ID for API/embedding
    youtubeUserId: "IMieP7FSUSwN0vw8FVNprA", // User ID
    brochurePdf: "https://cribflyer-pdf.s3.us-west-1.amazonaws.com/59709/documents/67627.pdf",
  },

  // Community details
  communityInfo: {
    name: "Del Webb North Ranch",
    builder: "Pulte Homes",
    type: "55+ Active Adult Gated Community",
    address: "2290 Beauty Vista Avenue",
    city: "North Las Vegas",
    state: "NV",
    zip: "89086",
    priceRange: "$400,000 - $600,000",
    hoaFee: "$215/month",
    sidLid: "None",
    totalHomes: 394,
    constructionStart: 2020,
    constructionEnd: 2024,
    homeStyles: "Single-family residences",
    stories: "Single-story only",
    sqftRange: "1,285 - 2,015",
    bedRange: "2-3",
    bathRange: "2-2.5",
    garages: "2-car attached",
  },
};

// Helper functions to access the data
export function getVirtualTourByModel(model) {
  return oldSiteData.virtualTours.find((tour) => tour.model === model);
}

export function getAllTestimonials() {
  return oldSiteData.testimonials;
}

export function getFloorPlansBySeries(series) {
  return oldSiteData.floorPlans[series] || [];
}

export function getCommunityInfo() {
  return oldSiteData.communityInfo;
}
