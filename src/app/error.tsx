"use client";

import Link from "next/link";
import { Button } from "@/../components/ui/button";
import { Home, RefreshCw, Phone } from "lucide-react";
import { SITE_PHONE_TEL, SITE_PHONE_DISPLAY } from "@/lib/site";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-4 font-playfair text-3xl font-bold text-primary md:text-4xl">
            Something went wrong
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            We couldn&apos;t load this page. Try again, or call Dr. Jan Duffy at{" "}
            {SITE_PHONE_DISPLAY} about Del Webb North Ranch homes in North Las Vegas.
          </p>
          <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button onClick={reset} variant="default" size="lg" className="min-h-[48px]">
              <RefreshCw className="mr-2 h-5 w-5" />
              Try again
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-[48px]">
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
          {error?.digest ? (
            <p className="text-xs text-gray-400">Reference: {error.digest}</p>
          ) : null}
        </div>
      </div>
    </main>
  );
}
