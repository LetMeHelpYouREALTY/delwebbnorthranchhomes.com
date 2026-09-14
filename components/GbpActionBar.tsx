import { Phone, MessageSquare, MapPinned, Star, Clock } from "lucide-react";
import {
  SITE_PHONE_TEL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_SMS,
  GOOGLE_MAPS_DIRECTIONS_URL,
  GOOGLE_REVIEW_LINK,
  GBP_HOURS_DISPLAY,
  GBP_BUSINESS_NAME,
  gbpFormattedAddress,
} from "@/lib/site";

const actionClass =
  "inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 hover:underline";

/**
 * Visible NAP + Call / Text / Directions / Reviews / Hours.
 * Rendered site-wide so every page matches Google Business Profile details.
 */
export default function GbpActionBar() {
  const address = gbpFormattedAddress();

  return (
    <div className="border-b border-gray-200 bg-bg-light">
      <div className="container mx-auto px-4 py-3">
        <p className="mb-2 text-center text-xs text-text-dark md:text-sm">
          <span className="font-semibold text-primary">{GBP_BUSINESS_NAME}</span>
          {" · "}
          <span>{address}</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          <a href={SITE_PHONE_TEL} className={actionClass} aria-label={`Call ${SITE_PHONE_DISPLAY}`}>
            <Phone className="h-4 w-4 shrink-0" aria-hidden />
            Call {SITE_PHONE_DISPLAY}
          </a>
          <a href={SITE_PHONE_SMS} className={actionClass} aria-label={`Text ${SITE_PHONE_DISPLAY}`}>
            <MessageSquare className="h-4 w-4 shrink-0" aria-hidden />
            Text
          </a>
          <a
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={actionClass}
            aria-label="Get directions to Del Webb North Ranch on Google Maps"
          >
            <MapPinned className="h-4 w-4 shrink-0" aria-hidden />
            Directions
          </a>
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={actionClass}
            aria-label="View Google reviews and leave a review"
          >
            <Star className="h-4 w-4 shrink-0" aria-hidden />
            Google Reviews
          </a>
          <span className="inline-flex min-h-[44px] items-center gap-2 px-3 py-2 text-sm text-text-dark">
            <Clock className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            {GBP_HOURS_DISPLAY}
          </span>
        </div>
      </div>
    </div>
  );
}
