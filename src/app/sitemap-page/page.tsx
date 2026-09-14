import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Home, Search, Building, MapPin, Users, BookOpen, HelpCircle, Phone, Calendar, MessageSquare, Shield } from "lucide-react";
import { SITE_ORIGIN } from "@/lib/site";
import { TITLE_SUFFIX } from "@/lib/hyperlocal";
import Breadcrumbs from "@/../components/Breadcrumbs";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";

export const metadata: Metadata = {
  title: `Sitemap | ${TITLE_SUFFIX}`,
  description:
    "Sitemap for Del Webb North Ranch, a 55+ community in North Las Vegas. Find homes for sale, floor plans, amenities, lifestyle, and tour pages.",
  alternates: {
    canonical: `${SITE_ORIGIN}/sitemap-page`,
  },
  openGraph: {
    title: `Sitemap | ${TITLE_SUFFIX}`,
    description: "Complete navigation guide to all pages on Del Webb North Ranch website.",
    url: `${SITE_ORIGIN}/sitemap-page`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("legal.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | Del Webb North Ranch",
    description: "Complete navigation guide to Del Webb North Ranch 55+ pages in North Las Vegas.",
    images: mediaTwitterImages("legal.hero"),
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sitePages = [
  {
    category: "Main Pages",
    icon: Home,
    pages: [
      { href: "/", label: "Home", description: "Discover Del Webb North Ranch 55+ community" },
      { href: "/buyers", label: "For Buyers", description: "55+ home buying in North Las Vegas—listings, floor plans, tours" },
      { href: "/sellers", label: "For Sellers", description: "Sell your North Las Vegas or Del Webb North Ranch home—home value, consultation" },
      { href: "/homes-for-sale", label: "Homes for Sale", description: "Browse current listings in Del Webb North Ranch" },
      { href: "/floor-plans", label: "Floor Plans", description: "Explore 9 single-story floor plans" },
      { href: "/amenities", label: "Amenities", description: "Resort-style amenities and community features" },
      { href: "/lifestyle", label: "Lifestyle", description: "Active adult living in North Las Vegas" },
      { href: "/community", label: "Community & Area", description: "North Las Vegas area, nearby neighborhoods, and 55+ living" },
      { href: "/why-choose-us", label: "Why Choose Us", description: "Why active adults choose Del Webb North Ranch—single-story living, amenities, no state income tax" },
      { href: "/virtual-tours", label: "Virtual Tours", description: "3D virtual tours of Del Webb North Ranch model homes" },
    ],
  },
  {
    category: "About & Information",
    icon: Users,
    pages: [
      { href: "/about", label: "About Dr. Jan Duffy", description: "Meet your REALTOR® and learn about expertise" },
      { href: "/testimonials", label: "Testimonials", description: "Client reviews and success stories" },
      { href: "/blog", label: "Blog", description: "Community news, insights, and tips" },
      { href: "/faq", label: "FAQ", description: "Frequently asked questions about Del Webb North Ranch" },
    ],
  },
  {
    category: "Contact & Services",
    icon: Phone,
    pages: [
      { href: "/contact", label: "Contact", description: "Get in touch with Dr. Jan Duffy" },
      { href: "/schedule", label: "Schedule a Tour", description: "Book a private community tour" },
      { href: "/home-value", label: "Home Value", description: "Free home value estimate for Del Webb North Ranch and North Las Vegas" },
      { href: "/mortgage-calculator", label: "Mortgage Calculator", description: "Estimate your monthly payment for a Del Webb North Ranch home" },
      { href: "/flyers", label: "Flyers & Brochures", description: "Community flyers and downloadable brochures" },
    ],
  },
  {
    category: "Legal & Policies",
    icon: Shield,
    pages: [
      { href: "/privacy", label: "Privacy Policy", description: "How we protect your information" },
      { href: "/terms", label: "Terms of Service", description: "Website usage terms and conditions" },
      { href: "/accessibility", label: "Accessibility Statement", description: "Our commitment to website accessibility" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Sitemap", href: "/sitemap-page" },
        ]}
      />
      <main className="min-h-screen bg-white">
        <PageHero
          mediaKey="legal.hero"
          title="Sitemap | Del Webb North Ranch 55+ | North Las Vegas"
          subtitle="Find every page on the Del Webb North Ranch website, from homes for sale to amenities and tours."
        />

        {/* Sitemap Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sitePages.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={category.category} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-primary font-playfair">
                          {category.category}
                        </h2>
                      </div>
                      <ul className="space-y-4">
                        {category.pages.map((page) => (
                          <li key={page.href}>
                            <Link
                              href={page.href}
                              className="block group hover:bg-stone-50 rounded-lg p-3 transition-colors"
                            >
                              <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1">
                                {page.label}
                              </div>
                              <div className="text-sm text-gray-600">{page.description}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* XML Sitemap Link */}
              <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                      XML Sitemap
                    </h3>
                    <p className="text-text-dark mb-4">
                      For search engines and developers, our XML sitemap is available at:
                    </p>
                    <a
                      href="/sitemap.xml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline transition-colors font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      {SITE_ORIGIN}/sitemap.xml
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 text-center">
                <p className="text-text-dark mb-4">Need help finding something?</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </Link>
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <HelpCircle className="w-4 h-4" />
                    View FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LocalVisitSection heading="Visit Del Webb North Ranch in North Las Vegas" />
      </main>
    </>
  );
}
