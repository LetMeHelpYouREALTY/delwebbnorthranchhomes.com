import Link from "next/link";
import { Phone, MapPinned, Star, Calendar } from "lucide-react";
import GoogleMapEmbed from "./GoogleMapEmbed";
import MediaImage from "./MediaImage";
import {
  SITE_PHONE_TEL,
  SITE_PHONE_DISPLAY,
  GOOGLE_MAPS_DIRECTIONS_URL,
  GOOGLE_REVIEW_LINK,
  GBP_HOURS_DISPLAY,
  GBP_BUSINESS_NAME,
  gbpFormattedAddress,
} from "@/lib/site";

type LocalVisitSectionProps = {
  heading?: string;
};

export default function LocalVisitSection({
  heading = "Visit Del Webb North Ranch in North Las Vegas",
}: LocalVisitSectionProps) {
  const address = gbpFormattedAddress();

  return (
    <section className="bg-white py-12 md:py-16" aria-labelledby="local-visit-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div>
            <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-lg shadow-three">
              <MediaImage
                mediaKey="place.primary"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={70}
              />
            </div>
            <h2
              id="local-visit-heading"
              className="mb-4 font-playfair text-2xl font-bold text-primary md:text-3xl"
            >
              {heading}
            </h2>
            <p className="mb-4 text-text-dark leading-relaxed">
              {GBP_BUSINESS_NAME} is based at {address}. Hours: {GBP_HOURS_DISPLAY}.
              Call {SITE_PHONE_DISPLAY} or schedule a private tour of this 55+ community.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={SITE_PHONE_TEL}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                aria-label={`Call ${SITE_PHONE_DISPLAY}`}
              >
                <Phone className="h-5 w-5" aria-hidden />
                Call {SITE_PHONE_DISPLAY}
              </a>
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-md border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="Get directions on Google Maps"
              >
                <MapPinned className="h-5 w-5" aria-hidden />
                Get directions
              </a>
              <a
                href={GOOGLE_REVIEW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-md border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="View Google reviews"
              >
                <Star className="h-5 w-5" aria-hidden />
                View Google reviews
              </a>
              <Link
                href="/schedule"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-md border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <Calendar className="h-5 w-5" aria-hidden />
                Schedule a tour
              </Link>
            </div>
          </div>
          <GoogleMapEmbed />
        </div>
      </div>
    </section>
  );
}
