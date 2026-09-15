import type { Metadata } from "next";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import MortgageCalculator from "@/../components/MortgageCalculator";
import RealScoutListings from "@/../components/RealScoutListings";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";
import SectionPhoto from "@/../components/SectionPhoto";
import { Button } from "@/../components/ui/button";
import { SITE_ORIGIN } from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";

export const metadata: Metadata = {
  title: `Mortgage Calculator | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Estimate your monthly payment for a home in Del Webb North Ranch. Free mortgage calculator with HOA, taxes, and North Las Vegas rates"
  ),
  alternates: { canonical: `${SITE_ORIGIN}/mortgage-calculator` },
  openGraph: {
    title: `Mortgage Calculator | ${TITLE_SUFFIX}`,
    description: "Estimate your monthly payment for a Del Webb North Ranch home. Includes HOA, taxes, and insurance.",
    url: `${SITE_ORIGIN}/mortgage-calculator`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("mortgage.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: `Mortgage Calculator | ${TITLE_SUFFIX}`,
    description: "Estimate your monthly payment for a North Las Vegas 55+ home.",
    images: mediaTwitterImages("mortgage.hero"),
  },
};

export default function MortgageCalculatorPage() {
  return (
    <>
      <main>
        <Breadcrumbs
          items={[
            { label: "Del Webb North Ranch", href: "/" },
            { label: "Mortgage Calculator", href: "/mortgage-calculator" },
          ]}
        />
        <PageHero
          mediaKey="mortgage.hero"
          title="Mortgage Calculator | Del Webb North Ranch & North Las Vegas"
          subtitle="Estimate your monthly payment for a home in Del Webb North Ranch. Includes principal, interest, taxes, insurance, and HOA."
        />

        {/* Office RealScout widget - below hero */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        {/* Long-form: Del Webb North Ranch, H2/H3, 1500+ words */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl text-text-dark">
              <SectionPhoto mediaKey="homes.haven6584" heading="Estimating Your Payment for a Del Webb North Ranch Home">
                <p>
                  Buying a home at Del Webb North Ranch means planning for principal, interest, property taxes, insurance, and HOA fees. North Ranch HOA is $215 per month (billed quarterly), and Nevada has no state income tax—so your overall housing and tax picture is different from many other states. Use the mortgage calculator below to estimate your monthly payment for a North Ranch home in the typical price range ($400K–$600K). The calculator includes options for down payment, interest rate, loan term, and North Las Vegas property taxes so you can see how a Del Webb North Ranch home fits your budget. When you&apos;re ready, view current homes for sale at Del Webb North Ranch in the listings above or schedule a tour with Dr. Jan Duffy.
                </p>
              </SectionPhoto>
              <SectionPhoto mediaKey="amenities.campusDusk" heading="Understanding North Ranch HOA in Your Budget" reverse>
                <p>
                  The Del Webb North Ranch HOA fee is $215 per month, billed quarterly. That fee covers common area maintenance, the 10,000 sq ft clubhouse, resort-style pool and spa, fitness center, pickleball and bocce courts, event lawn, security, and virtual concierge. When you use the mortgage calculator, remember to add this amount to your monthly housing cost—it&apos;s a fixed part of living at North Ranch and ensures the community and North Ranch amenities stay in top condition. Many 55+ buyers compare Del Webb North Ranch to other North Las Vegas communities; the HOA at North Ranch is competitive for the level of amenities you get at this premier 55+ community.
                </p>
              </SectionPhoto>
              <SectionPhoto mediaKey="place.signClose" heading="Why Nevada Appeals to 55+ Buyers" headingLevel="h3">
                <p>
                  Nevada has no state income tax, which can improve your overall cash flow in retirement. Combined with single-story living and resort-style amenities at Del Webb North Ranch, many 55+ buyers find that a North Ranch home fits both their lifestyle and their budget. Use the calculator to see how different down payments and loan terms change your payment, then explore current homes for sale at Del Webb North Ranch in the listings above. North Ranch real estate turns over regularly; when you&apos;re ready, schedule a tour to see the community and available North Ranch homes in person.
                </p>
              </SectionPhoto>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white" aria-labelledby="calculator-heading">
          <div className="container mx-auto px-4">
            <h2 id="calculator-heading" className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair text-center">
              Use the Del Webb North Ranch Mortgage Calculator
            </h2>
          </div>
        </section>
        <MortgageCalculator />
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-text-dark mb-6">
                Ready to find your home? Browse current listings or schedule a tour.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="min-h-[48px]">
                  <Link href="/homes-for-sale">View Homes for Sale</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-[48px]">
                  <Link href="/schedule">Schedule a Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <LocalVisitSection heading="Talk through payments at Del Webb North Ranch" />
      </main>
    </>
  );
}
