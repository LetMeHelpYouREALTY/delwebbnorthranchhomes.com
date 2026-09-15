import type { Metadata } from "next";
import Link from "next/link";
import ScheduleTour from "@/../components/ScheduleTour";
import Breadcrumbs from "@/../components/Breadcrumbs";
import { FileText, Calendar } from "lucide-react";
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from "@/lib/site";
import { TITLE_SUFFIX } from "@/lib/hyperlocal";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";

export const metadata: Metadata = {
  title: `Terms of Service | ${TITLE_SUFFIX}`,
  description:
    "Terms of service for Del Webb North Ranch website. Read our terms and conditions for using this real estate website and contacting Dr. Jan Duffy.",
  alternates: {
    canonical: `${SITE_ORIGIN}/terms`,
  },
  openGraph: {
    title: `Terms of Service | ${TITLE_SUFFIX}`,
    description: "Terms and conditions for using the Del Webb North Ranch website.",
    url: `${SITE_ORIGIN}/terms`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("legal.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Del Webb North Ranch",
    description: "Terms and conditions for using the Del Webb North Ranch 55+ website in North Las Vegas.",
    images: mediaTwitterImages("legal.hero"),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Terms of Service", href: "/terms" },
        ]}
      />
      <main className="min-h-screen bg-white">
        <PageHero
          mediaKey="legal.hero"
          title="Terms of Service | Del Webb North Ranch 55+ | North Las Vegas"
          subtitle="Terms and conditions for using the Del Webb North Ranch website. Last updated January 19, 2026."
        />
        <section className="bg-white py-4">
          <div className="container mx-auto px-4">
            <p className="mx-auto flex max-w-4xl items-center justify-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Last updated: January 19, 2026</span>
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-text-dark leading-relaxed mb-4">
                  Welcome to Del Webb North Ranch website (the "Website"). These Terms of Service
                  ("Terms") govern your access to and use of the Website operated by Dr. Jan Duffy,
                  REALTOR®, and Berkshire Hathaway HomeServices Nevada Properties.
                </p>
                <p className="text-text-dark leading-relaxed">
                  By accessing or using this Website, you agree to be bound by these Terms. If you
                  do not agree to these Terms, please do not use this Website.
                </p>
              </div>

              {/* Acceptance */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  1. Acceptance of Terms
                </h2>
                <p className="text-text-dark leading-relaxed">
                  By accessing, browsing, or using this Website, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and to comply with all
                  applicable laws and regulations. If you do not agree to these Terms, you are not
                  authorized to use this Website.
                </p>
              </div>

              {/* Use of Website */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  2. Use of Website
                </h2>
                <p className="text-text-dark leading-relaxed mb-4">
                  You may use this Website for lawful purposes only. You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-dark mb-4">
                  <li>Use the Website in any way that violates any applicable federal, state, or local law or regulation</li>
                  <li>Transmit any malicious code, viruses, or harmful data</li>
                  <li>Attempt to gain unauthorized access to any portion of the Website</li>
                  <li>Interfere with or disrupt the Website or servers connected to the Website</li>
                  <li>Use automated systems to access the Website without permission</li>
                  <li>Reproduce, duplicate, copy, or resell any part of the Website without written permission</li>
                </ul>
              </div>

              {/* Real Estate Information */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  3. Real Estate Information
                </h2>
                <p className="text-text-dark leading-relaxed mb-4">
                  All property information, including but not limited to prices, availability,
                  square footage, and features, is subject to change without notice. While we
                  strive for accuracy, we do not warrant that all information is current, complete,
                  or error-free.
                </p>
                <p className="text-text-dark leading-relaxed mb-4">
                  Property listings are provided for informational purposes only and do not
                  constitute an offer to sell. All real estate transactions are subject to
                  applicable laws and regulations, including fair housing laws.
                </p>
                <p className="text-text-dark leading-relaxed">
                  <strong>Equal Housing Opportunity:</strong> We are committed to equal housing
                  opportunity and comply with the Fair Housing Act. We do not discriminate on the
                  basis of race, color, religion, sex, handicap, familial status, national origin,
                  or any other protected class.
                </p>
              </div>

              {/* Third-Party Services */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  4. Third-Party Services
                </h2>
                <p className="text-text-dark leading-relaxed mb-4">
                  This Website may include links to third-party services, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-dark mb-4">
                  <li>RealScout for property listings</li>
                  <li>Calendly for scheduling appointments</li>
                  <li>Social media platforms</li>
                </ul>
                <p className="text-text-dark leading-relaxed">
                  We are not responsible for the content, privacy practices, or terms of service of
                  third-party websites. Your use of third-party services is subject to their
                  respective terms and conditions.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  5. Intellectual Property
                </h2>
                <p className="text-text-dark leading-relaxed mb-4">
                  All content on this Website, including text, graphics, logos, images, and software,
                  is the property of Del Webb North Ranch, Dr. Jan Duffy, or their respective
                  owners and is protected by copyright, trademark, and other intellectual property
                  laws.
                </p>
                <p className="text-text-dark leading-relaxed">
                  You may not reproduce, distribute, modify, or create derivative works from any
                  content on this Website without prior written permission.
                </p>
              </div>

              {/* Disclaimer */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  6. Disclaimer of Warranties
                </h2>
                <p className="text-text-dark leading-relaxed mb-4">
                  This Website is provided "as is" and "as available" without warranties of any
                  kind, either express or implied. We do not warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-dark mb-4">
                  <li>The Website will be uninterrupted or error-free</li>
                  <li>Defects will be corrected</li>
                  <li>The Website or server are free of viruses or other harmful components</li>
                  <li>Information on the Website is accurate, complete, or current</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  7. Limitation of Liability
                </h2>
                <p className="text-text-dark leading-relaxed">
                  To the fullest extent permitted by law, Del Webb North Ranch, Dr. Jan Duffy, and
                  Berkshire Hathaway HomeServices Nevada Properties shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages, or any loss of
                  profits or revenues, whether incurred directly or indirectly, or any loss of data,
                  use, goodwill, or other intangible losses resulting from your use of this
                  Website.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  8. Contact Information
                </h2>
                <p className="text-text-dark leading-relaxed mb-4">
                  If you have questions about these Terms, please contact:
                </p>
                <div className="bg-stone-50 rounded-lg p-6">
                  <p className="text-text-dark mb-2">
                    <strong>Dr. Jan Duffy, REALTOR®</strong>
                  </p>
                  <p className="text-text-dark mb-2">
                    Berkshire Hathaway HomeServices Nevada Properties
                  </p>
                  <p className="text-text-dark mb-2">2290 Beauty Vista Avenue</p>
                  <p className="text-text-dark mb-2">North Las Vegas, NV 89086</p>
                  <p className="text-text-dark mb-4">
                    Phone: <a href={SITE_PHONE_TEL} className="text-primary hover:underline">{SITE_PHONE_DISPLAY}</a>
                  </p>
                  <ScheduleTour variant="outline" size="default" />
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  9. Changes to Terms
                </h2>
                <p className="text-text-dark leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of
                  any material changes by updating the "Last updated" date at the top of this page.
                  Your continued use of the Website after such modifications constitutes your
                  acceptance of the updated Terms.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  10. Governing Law
                </h2>
                <p className="text-text-dark leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the
                  State of Nevada, without regard to its conflict of law provisions. Any disputes
                  arising from these Terms or your use of this Website shall be resolved in the
                  courts of Clark County, Nevada.
                </p>
              </div>

              {/* Related Links */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  Related Information
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Privacy Policy
                  </Link>
                  <Link
                    href="/accessibility"
                    className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Accessibility Statement
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
