import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/../components/ui/button";
import { Home, Search } from "lucide-react";
import { TITLE_SUFFIX } from "@/lib/hyperlocal";

export const metadata: Metadata = {
  title: `Page Not Found | ${TITLE_SUFFIX}`,
  description:
    "The page you're looking for doesn't exist. Return to Del Webb North Ranch homepage to explore our 55+ community homes in North Las Vegas.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto px-4 text-center py-16">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4 font-playfair">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild variant="default" size="lg">
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go to Homepage
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/homes-for-sale">
                  <Search className="w-5 h-5 mr-2" />
                  View Homes for Sale
                </Link>
              </Button>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                Popular Pages
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/buyers" className="text-primary hover:underline transition-colors">
                    For Buyers
                  </Link>
                </li>
                <li>
                  <Link href="/sellers" className="text-primary hover:underline transition-colors">
                    For Sellers
                  </Link>
                </li>
                <li>
                  <Link href="/homes-for-sale" className="text-primary hover:underline transition-colors">
                    Homes for Sale
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="text-primary hover:underline transition-colors">
                    Schedule a Tour
                  </Link>
                </li>
                <li>
                  <Link href="/home-value" className="text-primary hover:underline transition-colors">
                    Home Value
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-primary hover:underline transition-colors">
                    Community & Area
                  </Link>
                </li>
                <li>
                  <Link href="/floor-plans" className="text-primary hover:underline transition-colors">
                    Floor Plans
                  </Link>
                </li>
                <li>
                  <Link href="/amenities" className="text-primary hover:underline transition-colors">
                    Amenities
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-primary hover:underline transition-colors">
                    About Dr. Jan Duffy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-primary hover:underline transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
