import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CANONICAL_HOMEPAGE, SITE_ORIGIN, GOOGLE_MAPS_PLACE_URL, SITE_PHONE_SCHEMA, GBP_BUSINESS_NAME, GBP_DESCRIPTION, GBP_SHORT_DESCRIPTION, GBP_FOUNDING_DATE, GBP_SERVICE_AREA, GBP_SOCIAL_PROFILES, SITE_EMAIL, gbpPostalAddressSchema, gbpOpeningHoursSpecification } from "@/lib/site";
import { absoluteMediaUrl, mediaOpenGraph, mediaTwitterImages } from "@/lib/media";
import "./globals.css";
import CalendlyButton from "@/../components/CalendlyButton";
import CalendlyScript from "@/../components/CalendlyScript";
import CalendlyStyles from "@/../components/CalendlyStyles";
import SchemaMarkup from "@/../components/SchemaMarkup";
import Navbar from "@/../components/navbar";
import Footer from "@/../components/footer";
import GbpActionBar from "@/../components/GbpActionBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: GBP_BUSINESS_NAME,
    // Pages set full titles via TITLE_SUFFIX; avoid double-appending the site name.
    template: "%s",
  },
  description: GBP_SHORT_DESCRIPTION,
  keywords: [
    "Del Webb North Ranch",
    "Del Webb at North Ranch",
    "Del Webb North Las Vegas",
    "Del Webb Las Vegas",
    "Del Webb North Ranch homes for sale",
    "Del Webb 55+ communities",
    "Del Webb communities Las Vegas",
    "Del Webb Las Vegas Nevada",
    "55+ community",
    "North Las Vegas",
    "active adult community",
    "55+ active adult living",
    "single-story homes",
    "Dr. Jan Duffy",
    "REALTOR",
    "luxury homes",
    "resort-style amenities",
    "gated community",
    "North Las Vegas real estate",
    "55+ homes for sale",
  ],
  authors: [{ name: "Dr. Jan Duffy" }],
  creator: "Dr. Jan Duffy",
  publisher: "Berkshire Hathaway HomeServices Nevada Properties",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_ORIGIN,
    siteName: GBP_BUSINESS_NAME,
    title: GBP_BUSINESS_NAME,
    description:
      "Single-story homes from $400K-$600K in a gated 55+ community. Resort pool, pickleball, fitness center—all fully built.",
    images: [mediaOpenGraph("place.primary")],
  },
  twitter: {
    card: "summary_large_image",
    title: GBP_BUSINESS_NAME,
    description: GBP_SHORT_DESCRIPTION,
    images: mediaTwitterImages("place.primary"),
    creator: "@DrDuffy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: CANONICAL_HOMEPAGE,
  },
  verification: {
    // Paste your GSC meta tag content from Search Console > Settings > Verification
    // Example: google: "abc123xyz",
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // LocalBusiness Schema – matches Google Business Profile (NAP, hours, description, attributes)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_ORIGIN}/#localbusiness`,
    name: GBP_BUSINESS_NAME,
    alternateName: "Dr. Jan Duffy Real Estate",
    description: GBP_DESCRIPTION,
    image: [
      absoluteMediaUrl("place.primary"),
      absoluteMediaUrl("place.signClose"),
      absoluteMediaUrl("community.fullAerial"),
      absoluteMediaUrl("amenities.poolPalms"),
      absoluteMediaUrl("amenities.campusDusk"),
      absoluteMediaUrl("homes.haven6584"),
      absoluteMediaUrl("clubhouse.greatRoom"),
      absoluteMediaUrl("amenities.pickleballDusk"),
      absoluteMediaUrl("clubhouse.patioSunset"),
    ],
    url: SITE_ORIGIN,
    telephone: SITE_PHONE_SCHEMA,
    email: SITE_EMAIL,
    address: gbpPostalAddressSchema(),
    areaServed: {
      "@type": "Place",
      name: GBP_SERVICE_AREA,
      address: gbpPostalAddressSchema(),
    },
    openingHoursSpecification: gbpOpeningHoursSpecification(),
    foundingDate: GBP_FOUNDING_DATE,
    womanOwned: true,
    veteranOwned: true,
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Service options",
      value: "Onsite services available",
    },
    priceRange: "$$",
    paymentAccepted: "Cash, Check, Credit Card, Financing",
    currenciesAccepted: "USD",
    sameAs: [...GBP_SOCIAL_PROFILES],
    hasMap: GOOGLE_MAPS_PLACE_URL,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Free Community Tours & Personalized Home Showings",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Market Analysis & Pricing Guidance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Alerts on New Listings & Inventory Updates",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Expert Negotiation & Closing Support",
          },
        },
      ],
    },
    additionalType: [
      "https://schema.org/RealEstateAgent",
      "https://schema.org/RealEstateAgency",
      "https://schema.org/RealEstateConsultant",
    ],
    knowsAbout: [
      "Del Webb North Ranch",
      "55+ Active Adult Communities",
      "North Las Vegas Real Estate",
      "55+ Active Adult Housing",
      "Single-Story Homes",
      "Resort-Style Amenities",
      "Gated 55+ Communities",
      "Housing for Older Persons Act (HOPA)",
    ],
    founder: { "@id": `${SITE_ORIGIN}/#person` },
    employee: { "@id": `${SITE_ORIGIN}/#person` },
    parentOrganization: { "@id": `${SITE_ORIGIN}/#organization` },
    memberOf: {
      "@type": "Organization",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      credentialNumber: "S.0197614.LLC",
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
    },
  };

  // Place Schema for Local SEO (Community Location)
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Del Webb North Ranch",
    description: "55+ Active Adult Gated Community in North Las Vegas",
    address: gbpPostalAddressSchema(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.2856",
      longitude: "-115.0939",
    },
    url: SITE_ORIGIN,
    image: [
      absoluteMediaUrl("place.primary"),
      absoluteMediaUrl("place.signClose"),
      absoluteMediaUrl("community.fullAerial"),
      absoluteMediaUrl("amenities.poolPalms"),
      absoluteMediaUrl("amenities.campusDusk"),
      absoluteMediaUrl("homes.haven6584"),
      absoluteMediaUrl("clubhouse.patioSunset"),
      absoluteMediaUrl("amenities.pickleballDusk"),
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Resource hints first so the browser discovers them before other blocking resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://imagedelivery.net" />
        <link rel="preconnect" href="https://static.matterport.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://static.matterport.com" />
        <link rel="icon" href="/favicon.ico" />
        {/* Calendly CSS + script loaded once site-wide for inline, popup, and badge widgets */}
        <CalendlyStyles />
        <CalendlyScript />
        {/* Structured Data - Consolidated Schema Markup */}
        <SchemaMarkup />
        {/* Structured Data - LocalBusiness (Google Business Profile) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
        {/* Structured Data - Place (Local SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(placeSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* RealScout script is loaded by RealScoutListings when section is in viewport (keeps LCP/fonts off critical path) */}
        {/* RealScout Widget Styles - Global styles for all widgets */}
        <style dangerouslySetInnerHTML={{
          __html: `
            realscout-office-listings {
              --rs-listing-divider-color: #0e64c8;
              width: 100%;
            }
            realscout-home-value {
              --rs-hvw-background-color: #ffffff;
              --rs-hvw-title-color: #000000;
              --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
              --rs-hvw-primary-button-text-color: #ffffff;
              --rs-hvw-primary-button-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
              --rs-hvw-secondary-button-color: #ffffff;
              --rs-hvw-widget-width: auto;
            }
          `
        }} />
        {/* Calendly Floating Button - Custom styled button */}
        <CalendlyButton />
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" className="pt-16 md:pt-20">
          <GbpActionBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
