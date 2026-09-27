import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/../components/Breadcrumbs";
import AmenityMap from "@/../components/AmenityMap";
import { Button } from "@/../components/ui/button";
import {
  SITE_ORIGIN,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  gbpFormattedAddress,
} from "@/lib/site";
import { HYPERLOCAL, TITLE_SUFFIX, metaDescriptionBlock } from "@/lib/hyperlocal";
import { communityGeoSchema, communityPlaceSchemaExtras } from "@/lib/communityMapConfig";
import {
  nearbyAmenitiesFaq,
  nearbyCategoryCopy,
  buildNearbyPlacesItemListSchema,
  curatedNearbyPlaces,
} from "@/lib/nearbyPlacesData";
import { getDistances } from "@/lib/communityData";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";

const PAGE_PATH = "/nearby-amenities";
const PAGE_URL = `${SITE_ORIGIN}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: `Nearby Amenities in ${HYPERLOCAL.communityName}, North Las Vegas | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Interactive map and local guide to healthcare, golf, parks, grocery, shopping, and services near Del Webb North Ranch in North Las Vegas 89086"
  ),
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `Nearby Amenities in ${HYPERLOCAL.communityName}, North Las Vegas`,
    description:
      "Healthcare, golf, parks, grocery, and everyday services near Del Webb North Ranch—55+ living in North Las Vegas, NV 89086.",
    url: PAGE_URL,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("community.campusAerial")],
  },
  twitter: {
    card: "summary_large_image",
    title: `Nearby Amenities | ${HYPERLOCAL.communityName}`,
    description:
      "Hyperlocal map and guide to life near Del Webb North Ranch in North Las Vegas.",
    images: mediaTwitterImages("community.campusAerial"),
  },
};

export default function NearbyAmenitiesPage() {
  const distances = getDistances();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_ORIGIN },
    { name: "Nearby Amenities", url: PAGE_URL },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: nearbyAmenitiesFaq.map((item) => ({
      "@type": "Question" as const,
      name: item.question,
      acceptedAnswer: { "@type": "Answer" as const, text: item.answer },
    })),
  };

  const communityPlaceSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    ...communityPlaceSchemaExtras(),
    description:
      "55+ active adult gated community in North Las Vegas, NV 89086—center point for nearby amenity searches on this page.",
  };

  const agentAreaSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_ORIGIN}/#localbusiness`,
    name: HYPERLOCAL.agentName,
    areaServed: {
      "@type": "Place",
      name: HYPERLOCAL.communityName,
      geo: communityGeoSchema(),
      address: communityPlaceSchemaExtras().address,
    },
  };

  const itemListSchema = buildNearbyPlacesItemListSchema(SITE_ORIGIN);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Nearby Amenities", href: PAGE_PATH },
        ]}
      />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(communityPlaceSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(agentAreaSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
          }}
        />

        <section className="bg-primary text-white py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-4">
              Nearby Amenities in {HYPERLOCAL.communityName}, North Las Vegas
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Del Webb North Ranch sits at {gbpFormattedAddress()} in zip code
              89086. Use the interactive map to explore healthcare, golf, parks,
              grocery, pharmacies, and shopping around this 55+ active adult
              community—then read the local guide below for verified destinations
              and approximate drive times.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white" aria-labelledby="nearby-map-heading">
          <div className="container mx-auto px-4">
            <h2 id="nearby-map-heading" className="sr-only">
              Interactive nearby amenities map
            </h2>
            <AmenityMap showStaticList />
          </div>
        </section>

        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair text-center">
              Commute &amp; key destinations
            </h2>
            <ul className="space-y-3 text-text-dark">
              <li>
                <strong>Las Vegas Strip:</strong> approximately{" "}
                {distances.lasVegasStrip.miles} miles (
                {distances.lasVegasStrip.description}) — drive time varies with
                traffic; plan roughly 25–35 minutes.
              </li>
              <li>
                <strong>Harry Reid International Airport:</strong> approximately{" "}
                {distances.mcCarranAirport.miles} miles — typically 25–40 minutes
                by car.
              </li>
              <li>
                <strong>VA Southern Nevada Healthcare System:</strong> approximately{" "}
                {distances.vaHospital.miles} miles from the community.
              </li>
              <li>
                <strong>Centennial Hills Hospital:</strong> approximately{" "}
                {distances.centennialHospital.miles} miles.
              </li>
              <li>
                <strong>Craig Ranch Regional Park:</strong> approximately{" "}
                {distances.craigRanchPark.miles} miles.
              </li>
              <li>
                <strong>Aliante Golf Club:</strong> approximately{" "}
                {distances.alianteGolf.miles} miles.
              </li>
            </ul>
            <p className="mt-4 text-sm text-text-dark">
              Mileages match the community fact sheet on this site; drive times are
              approximate and depend on route and traffic.
            </p>
          </div>
        </section>

        {nearbyCategoryCopy.map((block) => (
          <section
            key={block.id}
            className="py-12 md:py-14 bg-white border-b border-gray-100"
          >
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                {block.heading}
              </h2>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-text-dark mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <ul className="mt-4 space-y-2">
                {curatedNearbyPlaces
                  .filter((p) => p.category === block.id)
                  .map((place) => (
                    <li key={place.name} className="text-text-dark">
                      <strong className="text-primary">{place.name}</strong> —{" "}
                      {place.address}
                    </li>
                  ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="py-12 md:py-16 bg-bg-light" aria-labelledby="nearby-faq-heading">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2
              id="nearby-faq-heading"
              className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair"
            >
              Nearby living questions
            </h2>
            <dl className="space-y-6">
              {nearbyAmenitiesFaq.map((item) => (
                <div
                  key={item.question}
                  className="border-b border-stone-200 pb-6 last:border-0 last:pb-0"
                >
                  <dt className="text-lg font-semibold text-primary mb-2 font-playfair">
                    {item.question}
                  </dt>
                  <dd className="text-text-dark">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
              Your hyperlocal {HYPERLOCAL.communityName} REALTOR®
            </h2>
            <p className="text-lg text-gray-100 mb-2">
              {HYPERLOCAL.agentName} specializes exclusively in this North Las Vegas
              55+ community—not builder sales. {HYPERLOCAL.brokerage}. Nevada license{" "}
              {HYPERLOCAL.agentLicense}.
            </p>
            <p className="text-lg text-gray-100 mb-6">
              Call{" "}
              <a
                href={SITE_PHONE_TEL}
                className="underline font-semibold text-white hover:text-gray-200"
              >
                {SITE_PHONE_DISPLAY}
              </a>{" "}
              or schedule a tour to see homes and the amenity campus in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="lg" className="min-h-[48px] bg-white text-primary hover:bg-gray-100">
                <Link href="/contact">Contact Dr. Jan Duffy</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-[48px] border-white text-white hover:bg-white/10"
              >
                <Link href="/schedule">Schedule a tour</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
