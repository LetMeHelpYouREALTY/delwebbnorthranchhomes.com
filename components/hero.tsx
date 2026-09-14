import Link from "next/link";
import MediaImage from "./MediaImage";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import ScheduleTour from "./ScheduleTour";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <MediaImage
          mediaKey="home.hero"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          quality={72}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 font-playfair leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Del Webb North Ranch | 55+ Homes for Sale in North Las Vegas
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light italic mb-4 md:mb-6 text-white/95 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Your Next Chapter Starts Here
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-100 leading-relaxed px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Discover luxury single-story living in a vibrant 55+ community with
            mountain views, resort-style amenities, and neighbors who become
            friends.
          </p>
          <div className="mb-6 md:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Homes from $400K-$600K in North Las Vegas
            </p>
            <p className="text-sm sm:text-base mt-2 text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Del Webb at North Ranch · Del Webb North Las Vegas 55+ community
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-stretch sm:items-center px-4">
            <div className="w-full sm:w-auto sm:min-w-[200px]">
              <ScheduleTour
                variant="accent"
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg py-4 md:py-5 min-h-[48px]"
                text="Schedule a Tour"
              />
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto sm:min-w-[200px] min-h-[48px] text-base md:text-lg py-4 md:py-5"
            >
              <Link href="/homes-for-sale">View Available Homes</Link>
            </Button>
          </div>
          <p className="mt-5 text-base md:text-lg text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <a
              href={SITE_PHONE_TEL}
              className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-white underline-offset-4 hover:underline"
              aria-label={`Call Dr. Jan Duffy at ${SITE_PHONE_DISPLAY}`}
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call {SITE_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
