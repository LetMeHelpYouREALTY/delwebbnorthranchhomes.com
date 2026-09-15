import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/../components/ui/button";
import { Home, Phone, Search, FileText } from "lucide-react";
import { SITE_ORIGIN, SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from "@/lib/site";
import { TITLE_SUFFIX } from "@/lib/hyperlocal";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";

export const metadata: Metadata = {
  title: `Something Went Wrong | ${TITLE_SUFFIX}`,
  description:
    "This Del Webb North Ranch page could not load. Call Dr. Jan Duffy or return home to browse 55+ homes in North Las Vegas.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_ORIGIN}/error` },
  openGraph: {
    title: `Something Went Wrong | ${TITLE_SUFFIX}`,
    description:
      "This Del Webb North Ranch page could not load. Call Dr. Jan Duffy about 55+ homes in North Las Vegas.",
    url: `${SITE_ORIGIN}/error`,
    images: [mediaOpenGraph("place.primary")],
  },
  twitter: {
    card: "summary_large_image",
    images: mediaTwitterImages("place.primary"),
  },
};

export default function ErrorPage() {
  return (
    <main>
      <PageHero
        mediaKey="place.primary"
        title="Something went wrong | Del Webb North Ranch 55+ | North Las Vegas"
        subtitle={`We couldn't load this page. Call Dr. Jan Duffy at ${SITE_PHONE_DISPLAY} or use the links below.`}
      />
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-8 text-lg text-gray-600">
            We couldn&apos;t load this page. Use the links below, or call Dr. Jan Duffy at{" "}
            {SITE_PHONE_DISPLAY} about Del Webb North Ranch 55+ homes in North Las Vegas.
          </p>
          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="default" size="lg" className="min-h-[48px]">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Homepage
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-[48px]">
              <a href={SITE_PHONE_TEL} aria-label={`Call ${SITE_PHONE_DISPLAY}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call {SITE_PHONE_DISPLAY}
              </a>
            </Button>
          </div>
          <div className="rounded-lg bg-stone-50 p-6 text-left">
            <h2 className="mb-4 font-playfair text-xl font-bold text-gray-900">Quick links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/buyers" className="flex min-h-[44px] items-center gap-2 text-primary hover:underline">
                  <FileText className="h-4 w-4" /> For Buyers
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="flex min-h-[44px] items-center gap-2 text-primary hover:underline">
                  <FileText className="h-4 w-4" /> For Sellers
                </Link>
              </li>
              <li>
                <Link href="/homes-for-sale" className="flex min-h-[44px] items-center gap-2 text-primary hover:underline">
                  <Search className="h-4 w-4" /> Homes for Sale
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
      <LocalVisitSection heading="Call or visit Del Webb North Ranch" />
    </main>
  );
}
