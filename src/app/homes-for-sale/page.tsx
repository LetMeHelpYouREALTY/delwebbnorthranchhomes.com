import type { Metadata } from "next";
import Breadcrumbs from "@/../components/Breadcrumbs";
import { Phone } from "lucide-react";
import { Button } from "@/../components/ui/button";
import Link from "next/link";
import { getDelWebbListings } from "@/lib/listings";
import ListingsPageClient from "@/components/listings-page-client";
import MortgageCalculator from "@/../components/MortgageCalculator";
import RealScoutListings from "@/../components/RealScoutListings";
import { getCommunityInfo } from "@/lib/communityData";
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { mediaImageObject, mediaOpenGraph, mediaTwitterImages } from "@/lib/media";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";
import SectionPhoto from "@/../components/SectionPhoto";
import { buyerCtaCopy, buyerFaq, buyerValueProps } from "@/lib/hyperlocalBuyer";
// import HomesForSaleWidget from "@/../components/HomesForSaleWidget";

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
  title: `Homes for Sale | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Del Webb North Ranch homes for sale: browse current 55+ resale homes in North Las Vegas from $400K-$600K"
  ),
  alternates: {
    canonical: `${SITE_ORIGIN}/homes-for-sale`,
  },
  openGraph: {
    title: `Homes for Sale | ${TITLE_SUFFIX}`,
    description:
      "Del Webb North Ranch homes for sale: 55+ resale homes in North Las Vegas from $400K-$600K. Del Webb at North Ranch, Del Webb North Las Vegas.",
    url: `${SITE_ORIGIN}/homes-for-sale`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("homesForSale.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: `Homes for Sale | ${TITLE_SUFFIX}`,
    description: "Del Webb North Ranch homes for sale: 55+ resale homes in North Las Vegas from $400K-$600K.",
    images: mediaTwitterImages("homesForSale.hero"),
  },
};

export default async function HomesForSalePage() {
  const listings = await getDelWebbListings();
  const communityInfo = getCommunityInfo();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Homes for Sale", href: "/homes-for-sale" },
        ]}
      />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buyerFaqSchema).replace(/</g, '\\u003c') }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": `${SITE_ORIGIN}/homes-for-sale#webpage`,
              name: `Homes for Sale | ${TITLE_SUFFIX}`,
              description:
                "Del Webb North Ranch homes for sale: browse current 55+ resale homes in North Las Vegas from $400K-$600K.",
              url: `${SITE_ORIGIN}/homes-for-sale`,
              primaryImageOfPage: mediaImageObject("homesForSale.hero"),
              isPartOf: { "@type": "WebSite", "@id": `${SITE_ORIGIN}/#website`, url: SITE_ORIGIN },
            }).replace(/</g, "\\u003c"),
          }}
        />
        <PageHero
          mediaKey="homesForSale.hero"
          title="Homes for Sale in Del Webb North Ranch | North Las Vegas 55+ Community"
          subtitle={
            <>
              Browse current listings updated daily from the MLS. Explore <Link href="/floor-plans" className="text-white hover:text-gray-200 underline">9 floor plans</Link> available or learn about the <Link href="/amenities" className="text-white hover:text-gray-200 underline">resort-style amenities</Link> included with every home.
            </>
          }
        >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Link href="/schedule">{buyerCtaCopy.primary}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="#listings">View Listings</Link>
                </Button>
                <a
                  href={SITE_PHONE_TEL}
                  className="flex min-h-[44px] items-center gap-2 text-lg font-semibold text-white underline-offset-4 hover:underline"
                >
                  <Phone className="w-5 h-5" />
                  {SITE_PHONE_DISPLAY}
                </a>
              </div>
        </PageHero>

        {/* RealScout Listings - Main Lead Generator - Prominently placed after hero */}
        <RealScoutListings h2Text="View Current Homes for Sale in Del Webb North Ranch | North Las Vegas 55+ Community" />

        {/* CTA Cards Section */}
        <section className="py-12 md:py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="https://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow group"
                >
                  <h3 className="text-2xl font-bold text-primary mb-4 font-playfair group-hover:underline transition-colors">
                    Search All Homes
                  </h3>
                  <p className="text-text-dark mb-6">
                    Access the complete MLS database and search all available homes in Del Webb North Ranch.
                  </p>
                  <Button variant="accent" size="lg" className="w-full">
                    Start Your Search
                  </Button>
                </a>
                <a
                  href="https://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow group"
                >
                  <h3 className="text-2xl font-bold text-primary mb-4 font-playfair group-hover:underline transition-colors">
                    Get New Listing Alerts
                  </h3>
                  <p className="text-text-dark mb-6">
                    Be the first to know when new homes hit the market. Set up custom alerts for your perfect home.
                  </p>
                  <Button variant="accent" size="lg" className="w-full">
                    Set Up Alerts
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Dr. Jan Duffy Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Why Work With Dr. Jan Duffy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Local Expertise
                  </h3>
                  <p className="text-text-dark">
                    Deep knowledge of Del Webb North Ranch and the North Las Vegas real estate market.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Personalized Service
                  </h3>
                  <p className="text-text-dark">
                    Dedicated to understanding your unique needs and finding your perfect 55+ home.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Proven Results
                  </h3>
                  <p className="text-text-dark">
                    Successfully helping active adults find their dream homes in Del Webb North Ranch.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Full-Service Support
                  </h3>
                  <p className="text-text-dark">
                    From initial search through closing, we guide you every step of the way.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Market Insights
                  </h3>
                  <p className="text-text-dark">
                    Access to current market trends, pricing data, and neighborhood information.
                  </p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Responsive Communication
                  </h3>
                  <p className="text-text-dark">
                    Quick responses to your questions and regular updates on your home search.
                  </p>
                </div>
              </div>
              <div className="text-center bg-amber-50 p-8 rounded-lg border-2 border-amber-200">
                <p className="text-lg font-semibold text-primary mb-4">
                  Ready to find your perfect home?
                </p>
                <ul className="text-left text-text-dark mb-6 max-w-md mx-auto space-y-2 list-disc list-inside">
                  {buyerValueProps.map((prop, i) => (
                    <li key={i}>{prop}</li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={SITE_PHONE_TEL}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call {SITE_PHONE_DISPLAY}
                  </a>
                  <Button asChild variant="accent" size="lg">
                    <Link href="/schedule">{buyerCtaCopy.primary}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mortgage Calculator Section */}
        <MortgageCalculator />

        {/* Buyer questions (hyperlocal FAQ) */}
        <section className="py-12 md:py-16 bg-white">
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

        {/* Quick Info Section */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                Why Choose Del Webb North Ranch?
              </h2>
              <p className="text-center text-text-dark mb-6 max-w-2xl mx-auto">
                Discover the <Link href="/amenities" className="text-primary hover:underline underline">resort-style amenities</Link> and <Link href="/lifestyle" className="text-primary hover:underline underline">active adult lifestyle</Link> that make this community special.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Price Range
                  </h3>
                  <p className="text-2xl font-semibold text-primary mb-2">
                    {communityInfo.priceRange}
                  </p>
                  <p className="text-text-dark">
                    Competitive pricing for luxury 55+ living
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    Total Homes
                  </h3>
                  <p className="text-2xl font-semibold text-primary mb-2">{communityInfo.totalHomes}</p>
                  <p className="text-text-dark">
                    Single-family residences in a gated community
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    HOA Fee
                  </h3>
                  <p className="text-2xl font-semibold text-primary mb-2">
                    {communityInfo.hoaFee}
                  </p>
                  <p className="text-text-dark">{communityInfo.sidLid === 'None' ? 'No SIDs or LIDs' : communityInfo.sidLid}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LocalVisitSection heading="See current homes at Del Webb North Ranch in person" />
      </main>
    </>
  );
}
