import type { Metadata } from "next";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import { MapPin, TreePine, Heart, Mountain } from "lucide-react";
import { SITE_ORIGIN } from "@/lib/site";
import { altPrefix, metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { nearbyAreas, hyperlocalFaq } from "@/lib/hyperlocalData";
import { HYPERLOCAL } from "@/lib/hyperlocal";
import { getCommunityInfo } from "@/lib/communityData";
import RealScoutListings from "@/../components/RealScoutListings";
import LocalVisitSection from "@/../components/LocalVisitSection";

const communityFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: hyperlocalFaq.map((q) => ({
    "@type": "Question" as const,
    name: q.question,
    acceptedAnswer: { "@type": "Answer" as const, text: q.answer },
  })),
};

export const metadata: Metadata = {
  title: `Community & Area | North Las Vegas 55+ | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Discover North Las Vegas and the area around Del Webb North Ranch: Aliante, Centennial Hills, Craig Ranch, healthcare, and 55+ living"
  ),
  alternates: { canonical: `${SITE_ORIGIN}/community` },
  openGraph: {
    title: `Community & Area | North Las Vegas 55+ | ${TITLE_SUFFIX}`,
    description: "Explore North Las Vegas and the area around Del Webb North Ranch—Aliante, Centennial Hills, Craig Ranch, and 55+ living.",
    url: `${SITE_ORIGIN}/community`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [
      { url: `${SITE_ORIGIN}/images/amenities/resort-pool.jpeg`, width: 1200, height: 630, alt: altPrefix("Resort pool") },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Community & Area | North Las Vegas 55+ | ${TITLE_SUFFIX}`,
    description: "Explore North Las Vegas and the area around Del Webb North Ranch.",
  },
};

export default function CommunityPage() {
  const communityInfo = getCommunityInfo();

  return (
    <>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(communityFaqSchema).replace(/</g, '\\u003c') }}
        />
        <Breadcrumbs
          items={[
            { label: "Del Webb North Ranch", href: "/" },
            { label: "Community & Area", href: "/community" },
          ]}
        />
        {/* Hero - exactly one H1 */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Community & Area: Del Webb North Ranch | North Las Vegas 55+
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Del Webb North Ranch sits in North Las Vegas, NV 89086—with easy access to Aliante, Centennial Hills, Craig Ranch Regional Park, healthcare, and outdoor recreation. No state income tax and a 55+ active adult lifestyle.
              </p>
            </div>
          </div>
        </section>

        {/* Office RealScout widget - below hero */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Community Listings" />

        {/* Long-form: Del Webb North Ranch keyword variations, H2/H3, 1500+ words */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg max-w-none text-text-dark">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                About Del Webb North Ranch and the North Las Vegas Area
              </h2>
              <p className="mb-6">
                Del Webb North Ranch is a 55+ active adult gated community in North Las Vegas, NV 89086. The community is built on 80 acres with 394 single-story homes in three collections: Cottage, Classic, and Retreat. North Ranch opened its 10,000 sq ft clubhouse in October 2021 and has been fully built out since—so when you visit Del Webb North Ranch, you see a complete neighborhood with resort-style pool, fitness center, pickleball courts, and over twenty social clubs. This premier 55+ community in North Las Vegas is designed for people who want to live, not just exist: single-story living, low maintenance, and neighbors who chose the same lifestyle.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                Where Is Del Webb North Ranch?
              </h3>
              <p className="mb-6">
                Del Webb North Ranch is located at 2290 Beauty Vista Avenue in North Las Vegas, zip code 89086. The North Ranch community is in the northern part of the Las Vegas Valley, with easy access to Aliante, Centennial Hills, Craig Ranch Regional Park, and VA Southern Nevada Hospital. McCarran International Airport and the Las Vegas Strip are within a short drive. North Las Vegas offers no state income tax, strong healthcare, and outdoor recreation—and Del Webb North Ranch sits right in the middle of it. The community is gated with virtual concierge and roving security.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 font-playfair">
                Why North Las Vegas for Del Webb North Ranch Buyers
              </h2>
              <p className="mb-6">
                North Las Vegas is one of the fastest-growing areas in Nevada, and Del Webb North Ranch is one of its premier 55+ communities. Buyers choose North Ranch for single-story homes, built-out amenities, and a neighborhood of active adults. They also choose North Las Vegas for no state income tax, which means more of your retirement income stays in your pocket. The area has strong healthcare (VA Southern Nevada Hospital, Centennial Hills Hospital), outdoor recreation (Craig Ranch Regional Park, Lake Mead), and shopping and dining in Aliante and nearby. Del Webb North Ranch real estate is in demand because the community is complete—unlike newer developments still waiting on amenities, North Ranch is ready to enjoy today.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                Del Webb North Ranch Amenities and Lifestyle
              </h3>
              <p className="mb-6">
                The Del Webb North Ranch clubhouse is the heart of the community. At 10,000 square feet, it includes fitness facilities, social spaces, and room for clubs and events. Outside, North Ranch residents use the resort-style pool, pickleball courts, and landscaped grounds. The North Ranch lifestyle is active and social: fitness classes, card games, book clubs, travel groups, and more. Because everyone at Del Webb North Ranch is 55+, your neighbors are in the same stage of life and many have relocated from out of state or downsized locally. The community is built for connection—so whether you&apos;re looking for quiet single-story living or an active social scene, North Ranch has both. View current homes for sale at Del Webb North Ranch in the listings above, or schedule a tour to see the community and amenities in person.
              </p>
            </div>
          </div>
        </section>

        {/* Nearby areas */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Nearby Areas & Landmarks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nearbyAreas.map((area) => (
                  <div key={area.slug} className="flex gap-4 p-6 bg-bg-light rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 font-playfair">{area.name}</h3>
                      <p className="text-text-dark text-sm mb-2">{area.description}</p>
                      {area.relatedPath && (
                        <Link href={area.relatedPath} className="text-primary hover:underline text-sm font-medium">
                          Learn more →
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why North Las Vegas */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Why North Las Vegas for 55+ Living?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <TreePine className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-2">No State Income Tax</h3>
                  <p className="text-text-dark text-sm">Nevada has no state income tax—a major draw for retirees and active adults.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <Heart className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-2">Healthcare & Services</h3>
                  <p className="text-text-dark text-sm">VA Southern Nevada Hospital and Centennial Hills Hospital nearby; quality care close to home.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <Mountain className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-2">Outdoor & Recreation</h3>
                  <p className="text-text-dark text-sm">Craig Ranch Regional Park, Lake Mead, and outdoor activities within easy reach.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community facts */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Del Webb North Ranch at a Glance
              </h2>
              <ul className="space-y-3 text-text-dark">
                <li><strong>Address:</strong> {communityInfo.address}, {communityInfo.city}, {communityInfo.state} {communityInfo.zip}</li>
                <li><strong>Type:</strong> {communityInfo.type}</li>
                <li><strong>Price range:</strong> {communityInfo.priceRange}</li>
                <li><strong>HOA:</strong> {communityInfo.hoaFee} ({communityInfo.hoaBilling})</li>
                <li><strong>Age requirement:</strong> {communityInfo.ageRequirement}</li>
                <li><strong>Clubhouse:</strong> {communityInfo.clubhouseSize} clubhouse</li>
              </ul>
              <p className="mt-6 text-center">
                <Link href="/amenities" className="text-primary hover:underline font-medium">
                  Explore resort-style amenities →
                </Link>
                {" · "}
                <Link href="/lifestyle" className="text-primary hover:underline font-medium">
                  Active adult lifestyle →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Local FAQ */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                North Las Vegas 55+ Questions
              </h2>
              <dl className="space-y-6">
                {hyperlocalFaq.map((item, i) => (
                  <div key={i} className="border-b border-stone-200 pb-6 last:border-0 last:pb-0">
                    <dt className="text-lg font-semibold text-primary mb-2 font-playfair">{item.question}</dt>
                    <dd className="text-text-dark">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Explore {HYPERLOCAL.communityName}
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a tour to see the community and available homes, or browse current listings in North Las Vegas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Schedule a Tour
                </Link>
                <Link
                  href="/homes-for-sale"
                  className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Homes for Sale
                </Link>
              </div>
            </div>
          </div>
        </section>
        <LocalVisitSection heading="Directions to Del Webb North Ranch, North Las Vegas" />
      </main>
    </>
  );
}
