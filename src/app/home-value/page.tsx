import type { Metadata } from "next";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/../components/ui/button";
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";
import { sellerCtaCopy, sellerFaq, sellerValueProps } from "@/lib/hyperlocalSeller";
import RealScoutListings from "@/../components/RealScoutListings";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";

const sellerFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sellerFaq.map((q) => ({
    "@type": "Question" as const,
    name: q.question,
    acceptedAnswer: { "@type": "Answer" as const, text: q.answer },
  })),
};

export const metadata: Metadata = {
  title: `Free Home Value Estimate | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Get a free, instant home value estimate. Dr. Jan Duffy provides accurate valuations for Del Webb North Ranch and North Las Vegas area homes"
  ),
  alternates: {
    canonical: `${SITE_ORIGIN}/home-value`,
  },
  openGraph: {
    title: `Free Home Value Estimate | ${TITLE_SUFFIX}`,
    description:
      "Get a free, instant home value estimate for your property in Del Webb North Ranch and North Las Vegas.",
    url: `${SITE_ORIGIN}/home-value`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("homeValue.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: `Free Home Value Estimate | ${TITLE_SUFFIX}`,
    description: "Get a free, instant home value estimate for your property.",
    images: mediaTwitterImages("homeValue.hero"),
  },
};

export default function HomeValuePage() {
  // RealScout Home Value Widget HTML
  const widgetHtml = `<realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw" include-name include-phone></realscout-home-value>`;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Home Value", href: "/home-value" },
        ]}
      />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sellerFaqSchema) }}
        />
        <PageHero
          mediaKey="homeValue.hero"
          title={sellerCtaCopy.primary}
          subtitle={`${sellerCtaCopy.metaHighlight} Get an instant estimate for Del Webb North Ranch or North Las Vegas area homes.`}
        />

        {/* Office RealScout widget - below hero */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        {/* Home Value Widget Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-three border border-gray-200 p-6 md:p-8">
                {/* RealScout Home Value Widget - Using dangerouslySetInnerHTML per integration rules */}
                <div 
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: widgetHtml }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section (hyperlocal seller value props) */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Why Get a Home Value Estimate?
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto list-none">
                {sellerValueProps.map((prop, i) => (
                  <li key={i} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-two">
                    <span className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full flex-shrink-0 font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-text-dark">{prop}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                What's Next?
              </h2>
              <div className="bg-bg-light rounded-lg p-6 md:p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                      Get Your Estimate
                    </h3>
                    <p className="text-text-dark">
                      Use the tool above to get an instant estimate of your home's value.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                      Review Your Results
                    </h3>
                    <p className="text-text-dark">
                      Review your estimate and compare it with similar properties in your area.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                      Connect with Dr. Jan Duffy
                    </h3>
                    <p className="text-text-dark">
                      Schedule a consultation to discuss your home value, explore <Link href="/homes-for-sale" className="text-primary hover:underline underline">homes for sale</Link> in Del Webb North Ranch, or learn more about the <Link href="/floor-plans" className="text-primary hover:underline underline">floor plans</Link> available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seller questions (hyperlocal FAQ) */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Seller Questions: North Las Vegas Home Value
              </h2>
              <dl className="space-y-6">
                {sellerFaq.map((item, i) => (
                  <div key={i} className="border-b border-stone-200 pb-6 last:border-0 last:pb-0">
                    <dt className="text-lg font-semibold text-primary mb-2 font-playfair">{item.question}</dt>
                    <dd className="text-text-dark">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to Explore Del Webb North Ranch?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Once you know your home's value, let's discuss your options—or {sellerCtaCopy.secondary.toLowerCase()}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={SITE_PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Call {SITE_PHONE_DISPLAY}
                </a>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">{sellerCtaCopy.secondary}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                Explore More
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/homes-for-sale"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                    Homes for Sale
                  </h3>
                  <p className="text-text-dark text-sm">
                    View current listings in Del Webb North Ranch
                  </p>
                </Link>
                <Link
                  href="/floor-plans"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                    Floor Plans
                  </h3>
                  <p className="text-text-dark text-sm">
                    Explore all 9 floor plans available
                  </p>
                </Link>
                <Link
                  href="/amenities"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                    Amenities
                  </h3>
                  <p className="text-text-dark text-sm">
                    Resort-style community features
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <LocalVisitSection heading="Get a walkthrough valuation at Del Webb North Ranch" />
      </main>
    </>
  );
}
