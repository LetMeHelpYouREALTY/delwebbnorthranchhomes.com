import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, AlertCircle, FileText, Calendar } from "lucide-react";
import ScheduleTour from "@/../components/ScheduleTour";
import Breadcrumbs from "@/../components/Breadcrumbs";
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from "@/lib/site";
import { TITLE_SUFFIX } from "@/lib/hyperlocal";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";

export const metadata: Metadata = {
  title: `Accessibility Statement | ${TITLE_SUFFIX}`,
  description:
    "Del Webb North Ranch website is committed to accessibility. Learn about our WCAG 2.1 AA compliance, accessibility features, and how to report issues.",
  alternates: {
    canonical: `${SITE_ORIGIN}/accessibility`,
  },
  openGraph: {
    title: `Accessibility Statement | ${TITLE_SUFFIX}`,
    description:
      "Our commitment to website accessibility and WCAG 2.1 AA compliance for all visitors.",
    url: `${SITE_ORIGIN}/accessibility`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("legal.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Statement | Del Webb North Ranch",
    description: "WCAG AA accessibility for the Del Webb North Ranch 55+ website in North Las Vegas.",
    images: mediaTwitterImages("legal.hero"),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccessibilityPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Accessibility", href: "/accessibility" },
        ]}
      />
      <main className="min-h-screen bg-white">
        <PageHero
          mediaKey="legal.hero"
          title="Accessibility Statement | Del Webb North Ranch 55+ | North Las Vegas"
          subtitle="Our commitment to making the Del Webb North Ranch website accessible to every visitor."
        />

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              {/* Commitment */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  Our Commitment
                </h2>
                <p className="text-text-dark leading-relaxed mb-4">
                  Del Webb North Ranch and Dr. Jan Duffy are committed to ensuring digital
                  accessibility for people with disabilities. We are continually improving the
                  user experience for everyone and applying the relevant accessibility standards to
                  achieve these goals.
                </p>
                <p className="text-text-dark leading-relaxed">
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level
                  AA standards, which explain how to make web content more accessible for people
                  with disabilities.
                </p>
              </div>

              {/* Standards */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  Accessibility Standards
                </h2>
                <p className="text-text-dark leading-relaxed mb-6">
                  This website strives to meet WCAG 2.1 Level AA standards. Our accessibility
                  features include:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-dark">
                      <strong>Keyboard Navigation:</strong> All interactive elements can be
                      accessed using only a keyboard
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-dark">
                      <strong>Alt Text:</strong> All images include descriptive alternative text
                      for screen readers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-dark">
                      <strong>Color Contrast:</strong> Text meets WCAG AA contrast ratio
                      requirements (4.5:1 for normal text, 3:1 for large text)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-dark">
                      <strong>Semantic HTML:</strong> Proper heading hierarchy and semantic
                      markup for assistive technologies
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-dark">
                      <strong>Form Labels:</strong> All form fields have associated labels for
                      screen readers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-dark">
                      <strong>ARIA Labels:</strong> Interactive elements include appropriate ARIA
                      attributes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-dark">
                      <strong>Responsive Design:</strong> Website is fully accessible on mobile
                      devices and tablets
                    </span>
                  </li>
                </ul>
              </div>

              {/* Third-Party Content */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  Third-Party Content
                </h2>
                <p className="text-text-dark leading-relaxed mb-4">
                  Some content on this website is provided by third-party services, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-dark mb-4">
                  <li>RealScout listing widgets</li>
                  <li>Calendly scheduling tool</li>
                  <li>YouTube video embeds (when available)</li>
                </ul>
                <p className="text-text-dark leading-relaxed">
                  While we strive to ensure all third-party content is accessible, we cannot
                  guarantee the accessibility of external services. We work with our partners to
                  maintain accessibility standards.
                </p>
              </div>

              {/* Feedback */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  Feedback & Reporting Issues
                </h2>
                <p className="text-text-dark leading-relaxed mb-4">
                  We welcome your feedback on the accessibility of Del Webb North Ranch website. If
                  you encounter any accessibility barriers, please let us know:
                </p>
                <div className="bg-stone-50 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Schedule a Consultation</h3>
                      <ScheduleTour variant="outline" size="default" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">What to Include</h3>
                      <ul className="list-disc list-inside space-y-1 text-text-dark text-sm">
                        <li>The URL of the page with the issue</li>
                        <li>Description of the accessibility problem</li>
                        <li>Your contact information (optional)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-text-dark leading-relaxed">
                  We aim to respond to accessibility feedback within 5 business days.
                </p>
              </div>

              {/* Updates */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  Ongoing Improvements
                </h2>
                <p className="text-text-dark leading-relaxed mb-4">
                  We regularly review and update our website to improve accessibility. This
                  statement was last updated on January 19, 2026.
                </p>
                <p className="text-text-dark leading-relaxed">
                  We are committed to maintaining and improving accessibility as technology and
                  standards evolve.
                </p>
              </div>

              {/* Contact CTA */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">
                  Need Assistance?
                </h3>
                <p className="text-text-dark mb-4">
                  If you need assistance accessing information on this website, please contact Dr.
                  Jan Duffy:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={SITE_PHONE_TEL}
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Call {SITE_PHONE_DISPLAY}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Contact Form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LocalVisitSection heading="Visit Del Webb North Ranch" />
      </main>
    </>
  );
}
