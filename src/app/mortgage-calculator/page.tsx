import type { Metadata } from "next";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import MortgageCalculator from "@/../components/MortgageCalculator";
import RealScoutListings from "@/../components/RealScoutListings";
import { Button } from "@/../components/ui/button";
import { SITE_ORIGIN } from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { Calculator } from "lucide-react";

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
  },
  twitter: {
    card: "summary",
    title: `Mortgage Calculator | ${TITLE_SUFFIX}`,
    description: "Estimate your monthly payment for a North Las Vegas 55+ home.",
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
        {/* Hero - exactly one H1 */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Calculator className="w-16 h-16 mx-auto mb-6 text-white" aria-hidden />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                Mortgage Calculator | Del Webb North Ranch & North Las Vegas
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Estimate your monthly payment for a home in Del Webb North Ranch. Includes principal, interest, taxes, insurance, and HOA.
              </p>
            </div>
          </div>
        </section>

        {/* Office RealScout widget - below hero */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        {/* Long-form: Del Webb North Ranch, H2/H3, 1500+ words */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg text-text-dark">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                Estimating Your Payment for a Del Webb North Ranch Home
              </h2>
              <p className="mb-6">
                Buying a home at Del Webb North Ranch means planning for principal, interest, property taxes, insurance, and HOA fees. North Ranch HOA is $215 per month (billed quarterly), and Nevada has no state income tax—so your overall housing and tax picture is different from many other states. Use the mortgage calculator below to estimate your monthly payment for a North Ranch home in the typical price range ($400K–$600K). The calculator includes options for down payment, interest rate, loan term, and North Las Vegas property taxes so you can see how a Del Webb North Ranch home fits your budget. When you&apos;re ready, view current homes for sale at Del Webb North Ranch in the listings above or schedule a tour with Dr. Jan Duffy.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                Why Use a Mortgage Calculator for North Ranch?
              </h3>
              <p className="mb-6">
                Del Webb North Ranch resale homes are priced in a range that many 55+ buyers find manageable—especially with a down payment and today&apos;s financing. Running the numbers before you tour helps you focus on North Ranch homes that fit your budget and avoid falling in love with a price point that doesn&apos;t work. The North Ranch community is in North Las Vegas zip code 89086, and property taxes and insurance vary—so the calculator lets you adjust those to get a realistic monthly payment for a Del Webb North Ranch home. This premier 55+ community in North Las Vegas is built for single-story living and active adult lifestyle; use the tool below to plan your move to North Ranch with confidence.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 font-playfair">
                Understanding North Ranch HOA in Your Budget
              </h2>
              <p className="mb-6">
                The Del Webb North Ranch HOA fee is $215 per month, billed quarterly. That fee covers common area maintenance, the 10,000 sq ft clubhouse, resort-style pool and spa, fitness center, pickleball and bocce courts, event lawn, security, and virtual concierge. When you use the mortgage calculator, remember to add this amount to your monthly housing cost—it&apos;s a fixed part of living at North Ranch and ensures the community and North Ranch amenities stay in top condition. Many 55+ buyers compare Del Webb North Ranch to other North Las Vegas communities; the HOA at North Ranch is competitive for the level of amenities you get at this premier 55+ community.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                What the North Ranch HOA Covers
              </h3>
              <p className="mb-6">
                Your HOA payment at Del Webb North Ranch goes toward landscaping in common areas, exterior maintenance of shared structures, pool and fitness center upkeep, clubhouse operations, and 24/7 gated security. There are no separate clubhouse membership fees—your North Ranch HOA fee is your all-in access to the Del Webb North Ranch clubhouse and North Ranch amenities. When budgeting for a North Ranch home, factor in HOA along with principal, interest, taxes, and insurance so your monthly number is accurate for life in this 55+ active adult community in North Las Vegas.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 font-playfair">
                Property Taxes and Insurance in North Las Vegas
              </h2>
              <p className="mb-6">
                North Ranch is in Clark County, Nevada (zip code 89086). Nevada property taxes are calculated on assessed value, and there are caps and exemptions that can affect your bill—including the senior exemption for homeowners 62 and older. Insurance for a Del Webb North Ranch home typically includes hazard and, if applicable, flood considerations based on the specific lot. The mortgage calculator above lets you enter your own estimates for taxes and insurance so you can model different scenarios for a North Ranch home. Dr. Jan Duffy can point you to local lenders and insurance agents familiar with North Las Vegas 55+ communities if you need help refining your numbers.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                Why Nevada Appeals to 55+ Buyers
              </h3>
              <p className="mb-6">
                Nevada has no state income tax, which can improve your overall cash flow in retirement. Combined with single-story living and resort-style amenities at Del Webb North Ranch, many 55+ buyers find that a North Ranch home fits both their lifestyle and their budget. Use the calculator to see how different down payments and loan terms change your payment, then explore current homes for sale at Del Webb North Ranch in the listings above. North Ranch real estate turns over regularly; when you&apos;re ready, schedule a tour to see the community and available North Ranch homes in person.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 font-playfair">
                Financing Tips for 55+ Buyers at Del Webb North Ranch
              </h2>
              <p className="mb-6">
                If you&apos;re 55+ and considering a move to North Ranch, you have several financing options. Conventional loans, FHA, VA (if eligible), and cash purchases are all common in the Del Webb North Ranch community. Down payment requirements and rates vary; the mortgage calculator helps you see how different down payments and interest rates affect your monthly payment for a North Ranch home. Many buyers use equity from a previous home to fund a down payment for their Del Webb North Ranch resale home—so even if you&apos;re not paying all cash, you can model a comfortable payment for this 55+ community in North Las Vegas.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                Getting Pre-Approved Before You Tour
              </h3>
              <p className="mb-6">
                Getting pre-approved before you tour Del Webb North Ranch gives you a clear budget and shows sellers you&apos;re serious. Use the calculator to estimate your payment, then talk to a lender to get pre-approved for a specific amount. When you schedule a tour with Dr. Jan Duffy, you&apos;ll be able to focus on North Ranch homes that fit your price range and make confident decisions about the Del Webb North Ranch floor plans and resale listings that work for you. North Ranch in North Las Vegas is a popular 55+ community—having your financing in order helps you move quickly when you find the right North Ranch home.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 font-playfair">
                Next Steps After Using the Del Webb North Ranch Mortgage Calculator
              </h2>
              <p className="mb-6">
                Once you&apos;ve estimated your payment for a Del Webb North Ranch home, browse current listings in the office widget above. North Ranch real estate includes single-story resale homes in the Cottage, Classic, and Retreat series. Schedule a tour to see the community, clubhouse, and available homes in person. Dr. Jan Duffy specializes in Del Webb North Ranch and North Las Vegas 55+ real estate—she can answer your questions about financing, HOA, and the buying process. North Ranch is a place to finally do everything you&apos;ve been putting off; take the first step by estimating your payment and then exploring homes for sale at Del Webb North Ranch.
              </p>
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
      </main>
    </>
  );
}
