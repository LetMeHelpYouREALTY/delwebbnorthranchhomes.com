import type { Metadata } from "next";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/../components/ui/button";
import { Phone, TrendingUp, FileText, Calendar, Home, CheckCircle } from "lucide-react";
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";
import { sellerCtaCopy, sellerFaq, sellerValueProps } from "@/lib/hyperlocalSeller";
import RealScoutListings from "@/../components/RealScoutListings";
import PageHero from "@/../components/PageHero";

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
  title: `For Sellers | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Sell your Del Webb North Ranch or North Las Vegas home. Free home value estimate and expert 55+ resale guidance"
  ),
  alternates: { canonical: `${SITE_ORIGIN}/sellers` },
  openGraph: {
    title: `For Sellers | ${TITLE_SUFFIX}`,
    description: sellerCtaCopy.metaHighlight,
    url: `${SITE_ORIGIN}/sellers`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("sellers.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: `For Sellers | ${TITLE_SUFFIX}`,
    description: sellerCtaCopy.metaHighlight,
    images: mediaTwitterImages("sellers.hero"),
  },
};

export default function SellersPage() {
  return (
    <>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sellerFaqSchema) }}
        />
        <Breadcrumbs
          items={[
            { label: "Del Webb North Ranch", href: "/" },
            { label: "For Sellers", href: "/sellers" },
          ]}
        />
        <PageHero
          mediaKey="sellers.hero"
          title="For Sellers: Sell Your Del Webb North Ranch or North Las Vegas Home"
          subtitle={`${sellerCtaCopy.metaHighlight} Get a free home value estimate and expert guidance for 55+ resale in North Las Vegas.`}
        >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild variant="accent" size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/home-value">{sellerCtaCopy.primary}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact">{sellerCtaCopy.secondary}</Link>
                </Button>
                <a href={SITE_PHONE_TEL} className="flex min-h-[44px] items-center gap-2 text-lg font-semibold text-white underline-offset-4 hover:underline">
                  <Phone className="w-5 h-5" />
                  {SITE_PHONE_DISPLAY}
                </a>
              </div>
        </PageHero>

        {/* Office RealScout widget - below hero */}
        <RealScoutListings h2Text="Current Homes for Sale at Del Webb North Ranch | North Las Vegas Listings" />

        {/* Long-form: Del Webb North Ranch keyword variations, H2/H3, 1500+ words */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg max-w-none text-text-dark">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                Selling Your Home at Del Webb North Ranch
              </h2>
              <p className="mb-6">
                Selling a home at Del Webb North Ranch or elsewhere in North Las Vegas is a significant decision. Whether you&apos;re relocating, downsizing again, or moving closer to family, getting an accurate home value and working with an agent who knows this 55+ community in North Las Vegas can make the process smoother. Del Webb North Ranch resale homes are in demand among active adult buyers, and North Ranch real estate benefits from the community&apos;s built-out amenities, single-story floor plans, and North Las Vegas&apos;s no state income tax. When you list your North Ranch home, you&apos;re marketing not just a house but a lifestyle—and that&apos;s where a Del Webb North Ranch specialist like Dr. Jan Duffy adds real value.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                Why North Ranch Sellers Choose a Local Expert
              </h3>
              <p className="mb-6">
                The Del Webb North Ranch community has specific resale requirements: HOA documents, age verification for buyers, and disclosure rules. A local agent who knows North Ranch inside and out can price your home correctly, stage and market it to 55+ buyers, and handle the paperwork so nothing holds up closing. Dr. Jan Duffy specializes in Del Webb North Ranch and North Las Vegas 55+ real estate. She can provide a detailed home value estimate, recommend listing strategy, and connect you with qualified buyers looking for single-story living at North Ranch. The community&apos;s clubhouse, pool, and pickleball courts are strong selling points—and your listing should highlight how your home fits into the Del Webb North Ranch lifestyle.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 font-playfair">
                Home Value and Listing at Del Webb North Ranch
              </h2>
              <p className="mb-6">
                Resale values at Del Webb North Ranch depend on your floor plan (Cottage, Classic, or Retreat), condition, and current North Las Vegas market conditions. Getting a free, instant home value estimate is a good first step—use the tool on this site or schedule a consultation for a detailed valuation. Once you know your home&apos;s likely range, you can decide on listing price, timing, and any updates or staging that might help. North Ranch single-story homes typically appeal to 55+ buyers from in and out of state, so marketing often includes professional photos, virtual tours, and clear descriptions of the Del Webb North Ranch amenities and location. View the office listings above to see how your home compares to current North Ranch listings and what buyers are seeing when they search for Del Webb North Ranch real estate.
              </p>
              <h3 className="text-xl font-bold text-primary mt-10 mb-4 font-playfair">
                The Selling Process for North Ranch Homes
              </h3>
              <p className="mb-6">
                Selling your Del Webb North Ranch home follows the same general steps as any North Las Vegas resale: list, market, show, negotiate, and close. Your agent will coordinate with the HOA for required documents and ensure buyers meet the community&apos;s 55+ age requirement. Because this premier 55+ community is fully built and well maintained, North Ranch homes often sell within a reasonable timeframe when priced correctly. Dr. Jan Duffy can walk you through the timeline, recommend any prep work, and keep you updated from listing to closing. Whether you&apos;re selling to move to another 55+ community or to be closer to family, the goal is a smooth sale—and working with a Del Webb North Ranch expert helps you get there.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 font-playfair">
                Next Steps for Del Webb North Ranch Sellers
              </h2>
              <p className="mb-6">
                Start with a free home value estimate for your Del Webb North Ranch or North Las Vegas property. Then schedule a seller consultation to discuss pricing, marketing, and timeline. You can also browse current homes for sale at North Ranch above to see how your home fits into the market. Dr. Jan Duffy is ready to help you sell your North Ranch home with confidence—get in touch today.
              </p>
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Why List With Dr. Jan Duffy?
              </h2>
              <ul className="space-y-4">
                {sellerValueProps.map((prop, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-dark">{prop}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center font-playfair">
                Your Next Steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  href="/home-value"
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-two hover:shadow-three transition-shadow group"
                >
                  <TrendingUp className="w-10 h-10 text-primary mb-3 group-hover:underline transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">Get Your Home Value</h3>
                  <p className="text-text-dark text-sm">Free, instant estimate for your Del Webb North Ranch or North Las Vegas property</p>
                </Link>
                <Link
                  href="/contact"
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-two hover:shadow-three transition-shadow group"
                >
                  <Calendar className="w-10 h-10 text-primary mb-3 group-hover:underline transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">Schedule a Consultation</h3>
                  <p className="text-text-dark text-sm">Discuss pricing, marketing, and timeline with a local 55+ resale expert</p>
                </Link>
                <Link
                  href="/homes-for-sale"
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-two hover:shadow-three transition-shadow group"
                >
                  <Home className="w-10 h-10 text-primary mb-3 group-hover:underline transition-colors" />
                  <h3 className="font-semibold text-primary mb-2">See Current Listings</h3>
                  <p className="text-text-dark text-sm">Compare your home to active listings in Del Webb North Ranch</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seller FAQ */}
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

        {/* CTA */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to Sell Your North Las Vegas Home?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                {sellerCtaCopy.primary} or call {SITE_PHONE_DISPLAY} to speak with Dr. Jan Duffy.
              </p>
              <Button asChild variant="accent" size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/home-value">{sellerCtaCopy.primary}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
