import type { Metadata } from "next";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/../components/ui/button";
import { Phone, Home, FileText, Calendar, Search, CheckCircle } from "lucide-react";
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from "@/lib/site";
import { altPrefix, metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { buyerCtaCopy, buyerFaq, buyerValueProps } from "@/lib/hyperlocalBuyer";
import { getCommunityInfo } from "@/lib/communityData";
import RealScoutListings from "@/../components/RealScoutListings";

const buyerFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: buyerFaq.map((q) => ({
    "@type": "Question" as const,
    name: q.question,
    acceptedAnswer: { "@type": "Answer" as const, text: q.answer },
  })),
};

export const metadata: Metadata = {
  title: `For Buyers | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Find your 55+ home in Del Webb North Ranch. Single-story homes, resort amenities, and a local expert for North Las Vegas buyers"
  ),
  alternates: { canonical: `${SITE_ORIGIN}/buyers` },
  openGraph: {
    title: `For Buyers | ${TITLE_SUFFIX}`,
    description: buyerCtaCopy.metaHighlight,
    url: `${SITE_ORIGIN}/buyers`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [
      { url: `${SITE_ORIGIN}/images/amenities/resort-pool.jpeg`, width: 1200, height: 630, alt: altPrefix("Resort pool") },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `For Buyers | ${TITLE_SUFFIX}`,
    description: buyerCtaCopy.metaHighlight,
  },
};

export default function BuyersPage() {
  const communityInfo = getCommunityInfo();

  return (
    <>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buyerFaqSchema) }}
        />
        <Breadcrumbs
          items={[
            { label: "Del Webb North Ranch", href: "/" },
            { label: "For Buyers", href: "/buyers" },
          ]}
        />
        {/* Hero - exactly one H1 */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                For Buyers: 55+ Homes at Del Webb North Ranch | North Las Vegas
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                {buyerCtaCopy.metaHighlight} Del Webb North Ranch offers single-story resale homes, a 10,000 sq ft clubhouse, and resort-style amenities—all in a gated 55+ community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild variant="accent" size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/schedule">{buyerCtaCopy.primary}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/homes-for-sale">{buyerCtaCopy.secondary}</Link>
                </Button>
                <a href={SITE_PHONE_TEL} className="flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  {SITE_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Office RealScout widget - below hero on every page */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        {/* Long-form content: Del Webb North Ranch keyword variations, H2/H3, 1500+ words total */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg max-w-none text-text-dark">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                Why Buyers Choose Del Webb North Ranch
              </h2>
              <p className="mb-6">
                Del Webb North Ranch is one of North Las Vegas&apos;s premier 55+ active adult communities. When you buy at North Ranch, you&apos;re not just purchasing a home—you&apos;re joining a built-out neighborhood with a 10,000 sq ft clubhouse, resort-style pool, pickleball courts, fitness center, and over twenty social clubs. The community is gated and designed for single-story living, so every resale home at Del Webb North Ranch is one level with no stairs to worry about now or later.
              </p>
              <p className="mb-6">
                North Las Vegas offers what many 55+ buyers want: no state income tax, strong healthcare access including VA Southern Nevada Hospital nearby, and outdoor recreation like Craig Ranch Regional Park and Lake Mead. Del Webb North Ranch sits in zip code 89086 with easy access to Aliante, Centennial Hills, and the Las Vegas Strip. The North Ranch community is fully built—unlike newer developments still waiting on amenities—so the clubhouse, pools, and courts are open and ready from day one.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                What You Get When You Buy at North Ranch
              </h3>
              <p className="mb-6">
                Every home in Del Webb North Ranch is single-story with two or three bedrooms, open layouts, and attached two-car garages. Floor plans span the Cottage, Classic, and Retreat series from about 1,285 to 2,015 square feet. Resale prices typically range from the low $400s to the low $600s. HOA fees are $215 per month (billed quarterly) with no special improvement districts, and Nevada&apos;s lack of state income tax means more of your retirement income stays in your pocket. The Del Webb North Ranch clubhouse hosts fitness classes, social events, and space for clubs—so you can stay as active and connected as you like.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                Working With a Del Webb North Ranch Expert
              </h3>
              <p className="mb-6">
                Buying in a 55+ community like Del Webb North Ranch involves age verification, HOA documents, and understanding resale rules. Dr. Jan Duffy specializes in this community and North Las Vegas 55+ real estate. She can walk you through current North Ranch listings, floor plans, and the buying process so you know what to expect. Whether you&apos;re relocating from out of state or downsizing locally, having an agent who knows Del Webb North Ranch inside and out makes a real difference. Schedule a tour to see available homes and the North Ranch amenities in person.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 font-playfair">
                North Ranch Lifestyle and Amenities
              </h2>
              <p className="mb-6">
                The Del Webb North Ranch lifestyle centers on the 10,000 sq ft clubhouse and the grounds around it. Residents use the resort-style pool, fitness center, and pickleball courts regularly. Social clubs cover everything from cards and book clubs to travel and gardening. Because North Ranch is 55+, your neighbors are in the same stage of life and many have chosen this community for the same reasons you&apos;re considering it: single-story living, low maintenance, and a built-in social scene. Del Webb North Ranch is built for people who want to live, not just exist—and that shows in how the community is used every day.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                Resale Homes at Del Webb North Ranch
              </h3>
                <p className="mb-6">
                All homes at Del Webb North Ranch are resale—the community was built out by Pulte/Del Webb and there are no builder lots left. That means you&apos;re buying from a homeowner, and the inventory you see is what&apos;s currently on the market. Listings at North Ranch turn over as residents relocate or downsize again, so new homes come on the market regularly. View the office listings above to see current homes for sale at Del Webb North Ranch, or schedule a tour with Dr. Jan Duffy to walk through available floor plans and the community in person. North Ranch real estate remains in demand among 55+ buyers, so when you find a home you like, having a local expert on your side helps you move quickly and confidently.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 font-playfair">
                Next Steps for Buying at Del Webb North Ranch
              </h2>
              <p className="mb-6">
                Start by browsing current homes for sale at Del Webb North Ranch in the listings section above. Then explore the nine single-story floor plans (Cottage, Classic, Retreat) to see which size and layout fit your needs. Schedule a private tour to walk the North Ranch community, see the clubhouse and amenities, and step inside available resale homes. Dr. Jan Duffy specializes in this 55+ community in North Las Vegas and can answer your questions about HOA, age verification, and the buying process. Del Webb North Ranch is a place to finally do everything you&apos;ve been putting off—so take the first step and get in touch today.
              </p>
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Why Buy at Del Webb North Ranch?
              </h2>
              <ul className="space-y-4">
                {buyerValueProps.map((prop, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-dark">{prop}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Quick stats */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Community at a Glance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <p className="text-2xl font-semibold text-primary mb-1">{communityInfo.priceRange}</p>
                  <p className="text-text-dark text-sm">Resale price range</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <p className="text-2xl font-semibold text-primary mb-1">{communityInfo.totalHomes}</p>
                  <p className="text-text-dark text-sm">Single-family homes</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <p className="text-2xl font-semibold text-primary mb-1">{communityInfo.hoaFee}</p>
                  <p className="text-text-dark text-sm">HOA (quarterly)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Your Next Steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link
                  href="/homes-for-sale"
                  className="flex flex-col items-center text-center p-6 bg-bg-light rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <Search className="w-10 h-10 text-primary mb-3 group-hover:underline transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">View Listings</h3>
                  <p className="text-text-dark text-sm">Browse current homes for sale in Del Webb North Ranch</p>
                </Link>
                <Link
                  href="/floor-plans"
                  className="flex flex-col items-center text-center p-6 bg-bg-light rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <FileText className="w-10 h-10 text-primary mb-3 group-hover:underline transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">Floor Plans</h3>
                  <p className="text-text-dark text-sm">Explore 9 single-story floor plans (Cottage, Classic, Retreat)</p>
                </Link>
                <Link
                  href="/schedule"
                  className="flex flex-col items-center text-center p-6 bg-bg-light rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <Calendar className="w-10 h-10 text-primary mb-3 group-hover:underline transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">Schedule a Tour</h3>
                  <p className="text-text-dark text-sm">Book a private tour of the community and available homes</p>
                </Link>
                <Link
                  href="/contact"
                  className="flex flex-col items-center text-center p-6 bg-bg-light rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <Home className="w-10 h-10 text-primary mb-3 group-hover:underline transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">Contact Dr. Jan Duffy</h3>
                  <p className="text-text-dark text-sm">Questions? Get in touch for a personalized conversation</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Buyer FAQ */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Buyer Questions: North Las Vegas 55+ Homes
              </h2>
              <dl className="space-y-6">
                {buyerFaq.map((item, i) => (
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
                Ready to Find Your 55+ Home?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                {buyerCtaCopy.primary} or call {SITE_PHONE_DISPLAY} to speak with Dr. Jan Duffy.
              </p>
              <Button asChild variant="accent" size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/schedule">{buyerCtaCopy.primary}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
