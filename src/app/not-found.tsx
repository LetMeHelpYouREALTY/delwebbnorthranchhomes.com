import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/../components/ui/button";
import { Home, Search } from "lucide-react";
import { TITLE_SUFFIX } from "@/lib/hyperlocal";
import { SITE_ORIGIN } from "@/lib/site";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";

export const metadata: Metadata = {
  title: `Page Not Found | ${TITLE_SUFFIX}`,
  description:
    "The page you're looking for doesn't exist. Return to Del Webb North Ranch homepage to explore 55+ community homes in North Las Vegas.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: `Page Not Found | ${TITLE_SUFFIX}`,
    description:
      "This Del Webb North Ranch page was not found. Browse 55+ homes in North Las Vegas or call Dr. Jan Duffy.",
    url: `${SITE_ORIGIN}/404`,
    images: [mediaOpenGraph("place.primary")],
  },
  twitter: {
    card: "summary_large_image",
    images: mediaTwitterImages("place.primary"),
  },
};

export default function NotFound() {
  return (
    <main>
      <PageHero
        mediaKey="place.primary"
        title="Page not found | Del Webb North Ranch 55+ | North Las Vegas"
        subtitle="This page does not exist. Browse homes for sale, schedule a tour, or call Dr. Jan Duffy."
      />
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="default" size="lg" className="min-h-[48px]">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-[48px]">
              <Link href="/homes-for-sale">
                <Search className="mr-2 h-5 w-5" />
                View Homes for Sale
              </Link>
            </Button>
          </div>

          <div className="rounded-lg bg-stone-50 p-6 text-left">
            <h2 className="mb-4 font-playfair text-xl font-bold text-gray-900">Popular Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/buyers" className="flex min-h-[44px] items-center text-primary hover:underline">
                  For Buyers
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="flex min-h-[44px] items-center text-primary hover:underline">
                  For Sellers
                </Link>
              </li>
              <li>
                <Link href="/homes-for-sale" className="flex min-h-[44px] items-center text-primary hover:underline">
                  Homes for Sale
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="flex min-h-[44px] items-center text-primary hover:underline">
                  Schedule a Tour
                </Link>
              </li>
              <li>
                <Link href="/community" className="flex min-h-[44px] items-center text-primary hover:underline">
                  Community & Area
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex min-h-[44px] items-center text-primary hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LocalVisitSection heading="Visit Del Webb North Ranch in North Las Vegas" />
    </main>
  );
}
