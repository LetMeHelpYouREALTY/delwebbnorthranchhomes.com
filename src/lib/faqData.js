// FAQ Data for Del Webb North Ranch
// Structured for easy use in React components

export const faqData = [
  {
    category: "About the Community",
    questions: [
      {
        question: "What is Del Webb North Ranch?",
        answer: "Del Webb North Ranch is an active adult community for people ages 55 and older, developed by Del Webb (Pulte Homes). Located in North Las Vegas, NV 89086, it features 394 single-story homes on approximately 80 acres.",
      },
      {
        question: "Is Del Webb North Ranch a gated community?",
        answer: "Yes, Del Webb North Ranch is a gated community with virtual concierge service and roving security.",
      },
      {
        question: "How many homes are in Del Webb North Ranch?",
        answer: "The community includes approximately 394 homesites divided into three collections: Cottage Series (~132 homes), Classic Series (~132 homes), and Retreat Series (~130 homes).",
      },
      {
        question: "When was Del Webb North Ranch built?",
        answer: "Construction began in 2020, with the first homeowners moving in that year. The clubhouse amenity center opened on October 16, 2021, and the community was completed in 2024.",
      },
    ],
  },
  {
    category: "Age Requirements & Residency",
    questions: [
      {
        question: "What are the age requirements to live in Del Webb North Ranch?",
        answer: "At least one resident in each home must be 55 years of age or older. This complies with the Housing for Older Persons Act of 1995 (HOPA).",
      },
      {
        question: "Can I purchase a home for my parent?",
        answer: "Yes, you can purchase a home for your mother or father as long as at least one person residing in the home is 55 years of age or older.",
      },
      {
        question: "Can adult children live in Del Webb North Ranch?",
        answer: "Yes. Children aged 19 and older are permitted to be permanent residents, as long as at least one resident meets the 55+ age requirement.",
      },
      {
        question: "What is the guest policy for children and grandchildren?",
        answer: "Guests aged 18 and younger are welcome to visit or stay with residents for up to three months per calendar year. When using community amenities, guests 18 and under must be accompanied by a Del Webb North Ranch resident.",
      },
    ],
  },
  {
    category: "HOA & Fees",
    questions: [
      {
        question: "What are the monthly HOA fees?",
        answer: "The HOA assessment is approximately $215 per month, billed quarterly. This includes use and maintenance of the clubhouse, the gate with virtual concierge, and roving security. There are no SIDs (Special Improvement Districts) or LIDs (Local Improvement Districts).",
      },
      {
        question: "What outdoor maintenance is the homeowner responsible for?",
        answer: "Homeowners are responsible for exterior materials and landscaping around the perimeter of their home. A base front yard landscape plan is included with purchase; enhanced packages are available for additional cost. Rear yard gardens and raised garden beds are permitted.",
      },
      {
        question: "What is the property tax rate?",
        answer: "The effective property tax rate is approximately 1% of the assessed value, which is lower than many other states including California.",
      },
    ],
  },
  {
    category: "Amenities",
    questions: [
      {
        question: "What amenities are included at Del Webb North Ranch?",
        answer: "The 10,000 square foot clubhouse amenity center includes: Resort-style and lap pools with spa, fitness center, fitness-on-demand room for aerobics and classes, great room, billiards room, social rooms, locker rooms with showers, pickleball courts, bocce ball courts, community event lawn, outdoor fire pit, walking trails, and a dog park.",
      },
      {
        question: "Are there swimming restrictions for grandchildren?",
        answer: "Guests aged 18 and younger must always be accompanied by a Del Webb North Ranch resident when using amenities. The pools have designated time periods for children and grandchildren to swim.",
      },
      {
        question: "Is there a golf course in Del Webb North Ranch?",
        answer: "No, but the community is only 5 miles from Aliante Golf Club (18-hole championship course) and 12 miles from Las Vegas Golf Club.",
      },
      {
        question: "When did the clubhouse open?",
        answer: "The Clubhouse Amenity Center grand opening was October 16, 2021.",
      },
    ],
  },
  {
    category: "Pets & Lifestyle",
    questions: [
      {
        question: "Are pets allowed at Del Webb North Ranch?",
        answer: "Yes! Del Webb North Ranch welcomes all members of your family. The community complies with City of North Las Vegas rules and regulations but does not enforce additional pet restrictions.",
      },
      {
        question: "How are mailboxes handled?",
        answer: "Del Webb North Ranch features grouped mailbox banks. Each cluster includes approximately 16 units, each secured by its own lock and key, as dictated by USPS.",
      },
    ],
  },
  {
    category: "Location & Nearby",
    questions: [
      {
        question: "How far is Del Webb North Ranch from the Las Vegas Strip?",
        answer: "Approximately 15 miles from world-class Las Vegas Strip dining, shopping, and entertainment.",
      },
      {
        question: "How far is the airport?",
        answer: "Harry Reid International Airport (LAS, formerly McCarran) is approximately 17 miles away.",
      },
      {
        question: "What medical facilities are nearby?",
        answer: "VA Southern Nevada Hospital is just 2 miles away. Centennial Hills Hospital/Medical Center is 12 miles away. Kindred Hospital is 14 miles away.",
      },
      {
        question: "What parks and recreation are nearby?",
        answer: "Craig Ranch Regional Park (5 miles) features 170 acres with a skate park, dog parks, baseball fields, tennis courts, basketball courts, and community gardens. Floyd Lamb Park (14 miles) offers 680 acres with wildlife, lakes, and mountain views. Lake Mead is 34 miles away.",
      },
      {
        question: "What shopping is nearby?",
        answer: "Nearby grocery stores include Albertson's, Smith's Food and Drug, Smart & Final, Sprouts Farmers Market, Natural Grocers, Walmart Neighborhood Market, and more. Pharmacies including Walgreens, CVS, and Walmart are all within a few blocks.",
      },
    ],
  },
  {
    category: "Buying Process",
    questions: [
      {
        question: "How much is the earnest deposit?",
        answer: "Earnest deposits vary by collection but typically range from $7,500 to $15,000 to initially secure your homesite.",
      },
      {
        question: "Do I need a construction loan?",
        answer: "No. Del Webb funds the construction of your home. Beyond the initial deposit, homeowners finance through a traditional mortgage or pay cash at closing.",
      },
      {
        question: "What are homesite premiums?",
        answer: "Homesite premiums vary based on orientation, elevation, location on the street, proximity to amenities, and lot size. Premiums typically start at approximately $3,000.",
      },
      {
        question: "Can ADA modifications be made to floor plans?",
        answer: "Absolutely. Contact Dr. Jan Duffy to discuss specific accessibility needs.",
      },
      {
        question: "Will I need homeowner's insurance?",
        answer: "If you have a mortgage, homeowner's insurance is required. Even if paying cash, homeowner's insurance is highly recommended.",
      },
    ],
  },
];

// Helper function to get all questions flattened (useful for search/filtering)
export const getAllQuestions = () => {
  return faqData.flatMap((category) =>
    category.questions.map((q) => ({
      ...q,
      category: category.category,
    }))
  );
};

// Helper function to get questions by category
export const getQuestionsByCategory = (categoryName) => {
  const category = faqData.find((cat) => cat.category === categoryName);
  return category ? category.questions : [];
};

// Helper function to get all categories
export const getAllCategories = () => {
  return faqData.map((category) => category.category);
};
