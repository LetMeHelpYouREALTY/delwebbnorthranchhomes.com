"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import CalendlyInline from "../CalendlyInline";
import { oldSiteData } from "@/lib/fetchOldSiteData";
import { SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from "@/lib/site";
import ScrollAnimation from "../scroll-animation";

export default function FinalCTASection() {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - CTA Text */}
            <ScrollAnimation>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-playfair text-primary">
                  Ready to See It For Yourself?
                </h2>
                <p className="text-base md:text-lg text-text-dark leading-relaxed mb-6">
                  Schedule a private tour with Dr. Jan Duffy. Walk the community.
                  Tour the amenities. Step inside the homes. No pressure, no
                  obligation—just the information you need to decide if this is
                  your next chapter.
                </p>
                <p className="text-sm md:text-base text-text-dark mb-4">
                  <Link href="/buyers" className="text-primary hover:underline font-medium">For Buyers</Link>
                  {" · "}
                  <Link href="/sellers" className="text-primary hover:underline font-medium">For Sellers</Link>
                  {" · "}
                  <Link href="/home-value" className="text-primary hover:underline font-medium">Home Value</Link>
                  {" · "}
                  <Link href="/schedule" className="text-primary hover:underline font-medium">Schedule a Tour</Link>
                </p>
                <div className="mb-6">
                  <a
                    href={SITE_PHONE_TEL}
                    className="inline-flex items-center gap-2 text-lg md:text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    {SITE_PHONE_DISPLAY}
                  </a>
                </div>
                <p className="text-sm md:text-base text-text-dark">
                  Or book a time below.
                </p>
              </div>
            </ScrollAnimation>

            {/* Right Column - Calendly widget */}
            <ScrollAnimation delay={100}>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                  Schedule a Tour
                </h2>
                <p className="text-text-dark mb-6">
                  Book a time that works for you. Dr. Jan Duffy will confirm and send details.
                </p>
                <div className="bg-white rounded-lg shadow-three p-4 md:p-6">
                  <CalendlyInline
                    url={oldSiteData.integrations.calendly}
                    height="700px"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
