import Link from "next/link";
import {
  Phone,
  MapPin,
  Youtube,
  Calendar,
  FileText,
  Instagram,
  Linkedin,
  Facebook,
  Star,
  MapPinned,
  MessageSquare,
  Clock,
} from "lucide-react";
import CalendlyNapLink from "@/../components/CalendlyNapLink";
import { oldSiteData } from "@/lib/fetchOldSiteData";
import {
  GOOGLE_REVIEW_LINK,
  GOOGLE_MAPS_DIRECTIONS_URL,
  SITE_PHONE_TEL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_SMS,
  GBP_BUSINESS_NAME,
  GBP_SHORT_DESCRIPTION,
  GBP_ADDRESS,
  GBP_SOCIAL_PROFILES,
  GBP_HOURS_DISPLAY,
} from "@/lib/site";

/** NAP – matches Google Business Profile exactly for local SEO */
const NAP = {
  name: GBP_BUSINESS_NAME,
  phone: SITE_PHONE_DISPLAY,
  tel: SITE_PHONE_TEL,
  sms: SITE_PHONE_SMS,
  street: GBP_ADDRESS.streetAddress,
  city: GBP_ADDRESS.addressLocality,
  state: GBP_ADDRESS.addressRegion,
  zip: GBP_ADDRESS.postalCode,
  hours: GBP_HOURS_DISPLAY,
} as const;

const SOCIAL_LABELS: Record<string, string> = {
  "https://www.facebook.com/DellWebbNorthRanch": "Facebook",
  "https://www.instagram.com/delwebbnorthranchhomes/": "Instagram",
  "https://www.linkedin.com/company/del-webb-north-ranch-homes": "LinkedIn",
};

/** Top 6 related Nevada communities – streamlined for engagement */
const OTHER_COMMUNITIES = [
  { label: "Hey Berkshire Homes", href: "https://heyberkshirehomes.com" },
  { label: "Search for Homes Vegas", href: "https://searchforhomesvegas.com" },
  { label: "Heartland Las Vegas", href: "https://heartlandlasvegas.com" },
  { label: "Green Valley Ranch Insider", href: "https://greenvalleyranchinsider.com" },
  { label: "Craig Ranch Homes", href: "https://craigranchhomes.com" },
  { label: "Silverstone Ranch Homes", href: "https://silverstoneranchhomes.com" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white" role="contentinfo" aria-label="Site footer">
      {/* CTA strip – drives engagement above the fold of footer */}
      <section
        className="border-b border-gray-700/50 bg-gray-900/50 py-6 md:py-8"
        aria-labelledby="footer-cta-heading"
      >
        <div className="container mx-auto px-4">
          <h2 id="footer-cta-heading" className="sr-only">
            Next steps at Del Webb North Ranch
          </h2>
          <p className="text-center text-lg font-medium text-white mb-6">
            Ready to find your home at Del Webb North Ranch?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <Calendar className="h-5 w-5" aria-hidden />
              Schedule a Tour
            </Link>
            <Link
              href="/home-value"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Get Your Home Value
            </Link>
            <a
              href={NAP.tel}
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label={`Call Del Webb North Ranch: ${NAP.phone}`}
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call {NAP.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand + NAP – primary for GBP/local SEO */}
          <div className="lg:col-span-4">
            <h3 className="text-xl md:text-2xl font-bold font-playfair text-white mb-3 leading-snug">
              {NAP.name}
            </h3>
            <p className="text-gray-300 mb-6 max-w-sm">
              {GBP_SHORT_DESCRIPTION}
            </p>
            <address className="not-italic text-gray-300 space-y-3">
              <a
                href={NAP.tel}
                className="flex items-center gap-2 hover:text-white transition-colors min-h-[44px]"
                aria-label={`Call ${NAP.phone}`}
              >
                <Phone className="h-4 w-4 flex-shrink-0" aria-hidden />
                {NAP.phone}
              </a>
              <a
                href={NAP.sms}
                className="flex items-center gap-2 hover:text-white transition-colors min-h-[44px]"
                aria-label={`Text ${NAP.phone}`}
              >
                <MessageSquare className="h-4 w-4 flex-shrink-0" aria-hidden />
                Text {NAP.phone}
              </a>
              <CalendlyNapLink className="text-gray-300 hover:text-white" />
              <span className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden />
                <span>
                  {NAP.street}
                  <br />
                  {NAP.city}, {NAP.state} {NAP.zip}
                </span>
              </span>
              <span className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden />
                <span>{NAP.hours}</span>
              </span>
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium min-h-[44px]"
                aria-label="Get directions to Del Webb North Ranch on Google Maps"
              >
                <MapPinned className="h-4 w-4" aria-hidden />
                Get directions
              </a>
            </address>
            <p className="mt-4 text-sm text-gray-400">Equal Housing Opportunity</p>
          </div>

          {/* Explore North Ranch – keyword-rich group */}
          <nav className="lg:col-span-2" aria-label="Explore Del Webb North Ranch">
            <h4 className="text-lg font-semibold text-white mb-4">
              Explore North Ranch
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/floor-plans", label: "Floor Plans" },
                { href: "/amenities", label: "Amenities" },
                { href: "/community", label: "Community & Area" },
                { href: "/lifestyle", label: "Lifestyle" },
                { href: "/virtual-tours", label: "Virtual Tours" },
                { href: "/why-choose-us", label: "Why Choose Us" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white transition-colors min-h-[44px] inline-flex items-center"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Buy & Sell – conversion-focused */}
          <nav className="lg:col-span-2" aria-label="Buy and sell at Del Webb North Ranch">
            <h4 className="text-lg font-semibold text-white mb-4">
              Buy & Sell at North Ranch
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/homes-for-sale", label: "Homes for Sale" },
                { href: "/buyers", label: "For Buyers" },
                { href: "/sellers", label: "For Sellers" },
                { href: "/home-value", label: "Home Value" },
                { href: "/mortgage-calculator", label: "Mortgage Calculator" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white transition-colors min-h-[44px] inline-flex items-center"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources + engagement */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={oldSiteData.integrations.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors min-h-[44px]"
                >
                  <Calendar className="h-4 w-4" aria-hidden />
                  Schedule Appointment
                </a>
              </li>
              <li>
                <a
                  href={oldSiteData.integrations.realscout}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors min-h-[44px]"
                >
                  <span className="w-4 h-4" aria-hidden>🏠</span>
                  Browse Homes
                </a>
              </li>
              <li>
                <a
                  href={oldSiteData.integrations.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors min-h-[44px]"
                >
                  <Youtube className="h-4 w-4" aria-hidden />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={oldSiteData.integrations.brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors min-h-[44px]"
                >
                  <FileText className="h-4 w-4" aria-hidden />
                  Download Brochure
                </a>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors min-h-[44px] inline-flex items-center">
                  Testimonials
                </Link>
              </li>
              <li>
                <a
                  href={GOOGLE_REVIEW_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors min-h-[44px]"
                  aria-label="Leave a review on Google"
                >
                  <Star className="h-4 w-4" aria-hidden />
                  Leave a Google review
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <ul className="space-y-2">
              {GBP_SOCIAL_PROFILES.map((href) => {
                const label = SOCIAL_LABELS[href] ?? "Social";
                const Icon =
                  label === "Facebook" ? Facebook :
                  label === "Instagram" ? Instagram :
                  Linkedin;
                return (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors min-h-[44px]"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                      {label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href={oldSiteData.integrations.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors min-h-[44px]"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" aria-hidden />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* More Nevada Communities – streamlined */}
        <nav
          className="mt-10 pt-8 border-t border-gray-700"
          aria-label="More Nevada communities"
        >
          <h4 className="text-lg font-semibold text-white mb-4">More Nevada Communities</h4>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {OTHER_COMMUNITIES.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Info + legal */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-gray-700 pt-8">
          <div className="text-sm text-gray-400">
            <p><strong className="text-gray-300">License:</strong> S.0197614.LLC</p>
            <p><strong className="text-gray-300">Brokerage:</strong> Berkshire Hathaway HomeServices Nevada Properties</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm" aria-label="Legal and site information">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">About</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">Blog</Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">FAQ</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">Contact</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">Privacy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">Terms</Link>
            <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">Accessibility</Link>
            <Link href="/sitemap-page" className="text-gray-400 hover:text-white transition-colors min-h-[44px] inline-flex items-center">Sitemap</Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} {GBP_BUSINESS_NAME}. All rights reserved.</p>
          <p className="mt-1">Berkshire Hathaway HomeServices Nevada Properties | S.0197614.LLC</p>
        </div>
      </div>
    </footer>
  );
}
