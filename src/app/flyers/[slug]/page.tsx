import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/../components/Breadcrumbs";
import Link from "next/link";
import { FileText, Download, ArrowLeft } from "lucide-react";
import { Button } from "@/../components/ui/button";
import { getAllFlyers, getFlyerBySlug } from "@/lib/flyers";
import { SITE_ORIGIN } from "@/lib/site";
import { TITLE_SUFFIX } from "@/lib/hyperlocal";

export async function generateStaticParams() {
  const flyers = getAllFlyers();
  return flyers.map((flyer) => ({
    slug: flyer.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const flyer = getFlyerBySlug(slug);

  if (!flyer) {
    return {
      title: "Flyer Not Found | Del Webb North Ranch 55+ Real Estate",
    };
  }

  return {
    title: `${flyer.title} | ${TITLE_SUFFIX}`,
    description: flyer.description,
    alternates: {
      canonical: `${SITE_ORIGIN}/flyers/${slug}`,
    },
    openGraph: {
      title: `${flyer.title} | ${TITLE_SUFFIX}`,
      description: flyer.description,
      url: `${SITE_ORIGIN}/flyers/${slug}`,
      siteName: TITLE_SUFFIX,
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function FlyerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const flyer = getFlyerBySlug(slug);

  if (!flyer) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Flyers & Brochures", href: "/flyers" },
          { label: flyer.title, href: `/flyers/${slug}` },
        ]}
      />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 mx-auto">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full">
                  {flyer.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair">
                {flyer.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                {flyer.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-bg-light rounded-lg p-8 md:p-12 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                  About This Brochure
                </h2>
                <p className="text-lg text-text-dark leading-relaxed mb-6">
                  {flyer.content}
                </p>
                <div className="bg-white rounded-lg p-6 border-2 border-primary/20">
                  <h3 className="text-xl font-bold text-primary mb-4 font-playfair">
                    What's Included:
                  </h3>
                  <ul className="space-y-3 text-text-dark">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Complete floor plan details for all 9 models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Community amenities and features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Pricing and HOA information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Lifestyle and community details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>Contact information for Dr. Jan Duffy</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* PDF Viewer/Download */}
              <div className="bg-white rounded-lg shadow-three border border-gray-200 p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2 font-playfair">
                      Download or View PDF
                    </h3>
                    <p className="text-text-dark">
                      Click below to download or view the brochure in your browser.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={flyer.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                      Download PDF
                    </a>
                    <a
                      href={flyer.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                      View in Browser
                    </a>
                  </div>
                </div>
                <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src={`/images/floor-plans/North Ranch Digital Brochure.pdf#toolbar=1&navpanes=1&scrollbar=1`}
                    className="w-full h-[600px] md:h-[800px]"
                    title={`${flyer.title} PDF Viewer`}
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center justify-center gap-2"
                >
                  <Link href="/flyers">
                    <ArrowLeft className="w-4 h-4" />
                    Back to All Flyers
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="default"
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">Schedule a Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center font-playfair">
                Explore More
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/floor-plans"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                    Floor Plans
                  </h3>
                  <p className="text-text-dark text-sm">
                    Explore all 9 floor plans
                  </p>
                </Link>
                <Link
                  href="/amenities"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                    Amenities
                  </h3>
                  <p className="text-text-dark text-sm">
                    Resort-style community features
                  </p>
                </Link>
                <Link
                  href="/homes-for-sale"
                  className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow text-center"
                >
                  <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                    Homes for Sale
                  </h3>
                  <p className="text-text-dark text-sm">
                    View current listings
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
