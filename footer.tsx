import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import CalendlyNapLink from "@/../components/CalendlyNapLink";
import { SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Site Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              Del Webb North Ranch
            </h3>
            <p className="text-gray-300 mb-4">
              Your premier 55+ active adult community in North Las Vegas.
            </p>
            {/* TODO: Add Equal Housing Opportunity logo */}
            <div className="mt-4 text-sm text-gray-400">
              Equal Housing Opportunity
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/homes-for-sale"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Homes for Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/floor-plans"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Floor Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE_PHONE_TEL}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {SITE_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <CalendlyNapLink className="text-gray-300 hover:text-white" />
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>
                    2290 Beauty Vista Avenue
                    <br />
                    North Las Vegas, NV 89086
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <strong>License:</strong> S.0197614.LLC
              </li>
              <li>
                <strong>Brokerage:</strong> Berkshire Hathaway HomeServices
                Nevada Properties
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Del Webb North Ranch. All rights
            reserved.
          </p>
          <p className="mt-2">
            Dr. Jan Duffy, REALTOR® | Berkshire Hathaway HomeServices Nevada
            Properties
          </p>
        </div>
      </div>
    </footer>
  );
}
