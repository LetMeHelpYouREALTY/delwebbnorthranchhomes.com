import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/../components/Breadcrumbs";
import { getVirtualTourBySlug, getVirtualToursWithEmbed } from "@/lib/old-site-data";
import { SITE_ORIGIN } from "@/lib/site";
import { TITLE_SUFFIX } from "@/lib/hyperlocal";

export async function generateStaticParams() {
  return getVirtualToursWithEmbed().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getVirtualTourBySlug(slug);
  if (!tour) {
    return { title: "Virtual Tour Not Found | Del Webb North Ranch" };
  }
  const title = `${tour.model} Virtual Tour | Del Webb North Ranch Model Home`;
  const description = `Watch the ${tour.model} ${tour.series} Series virtual tour. ${tour.sqft} sq ft, ${tour.beds} bed, ${tour.baths} bath model home at Del Webb North Ranch 55+ community in North Las Vegas.`;
  const url = `${SITE_ORIGIN}/virtual-tours/${slug}`;
  return {
    title: `${tour.model} Virtual Tour | ${TITLE_SUFFIX}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: TITLE_SUFFIX,
      locale: "en_US",
      type: "video.other",
    },
    twitter: {
      card: "player",
      title,
      description,
    },
  };
}

function VideoObjectSchema({
  tour,
  slug,
}: {
  tour: NonNullable<ReturnType<typeof getVirtualTourBySlug>>;
  slug: string;
}) {
  const watchUrl = `${SITE_ORIGIN}/virtual-tours/${slug}`;
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: `${tour.model} Virtual Tour | Del Webb North Ranch Model Home`,
    description: `${tour.model} ${tour.series} Series ${tour.sqft} sq ft model home virtual tour at Del Webb North Ranch 55+ community in North Las Vegas.`,
    thumbnailUrl: `${SITE_ORIGIN}/images/hero/hero-bg.jpg`,
    uploadDate: "2024-01-01",
    contentUrl: tour.embedUrl,
    embedUrl: tour.embedUrl,
    url: watchUrl,
    publisher: {
      "@type": "Organization",
      name: "Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/images/about/dr-jan-duffy.jpg`,
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(videoSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function VirtualTourWatchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getVirtualTourBySlug(slug);
  if (!tour) notFound();

  return (
    <>
      <VideoObjectSchema tour={tour} slug={slug} />
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Virtual Tours", href: "/virtual-tours" },
          { label: `${tour.model} Tour`, href: `/virtual-tours/${slug}` },
        ]}
      />
      <main>
        {/* Watch page: video is primary content */}
        <section className="bg-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-playfair text-center">
                {tour.model} Virtual Tour | Del Webb North Ranch Model Home
              </h1>
              <p className="text-center text-text-dark mb-6">
                {tour.series} Series · {tour.sqft} sq ft · {tour.beds} bed, {tour.baths} bath · North Las Vegas 55+ community
              </p>
              <div className="bg-bg-light rounded-lg overflow-hidden shadow-three">
                <div className="aspect-video">
                  <iframe
                    src={tour.embedUrl}
                    title={`${tour.model} Virtual Tour - Del Webb North Ranch`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="mt-6 prose prose-lg max-w-none text-text-dark">
                <p>
                  Take a 3D virtual tour of the {tour.model} model home at Del Webb North Ranch, a premier 55+ active adult community in North Las Vegas. This {tour.series} Series home offers {tour.sqft} sq ft of single-story living. When you&apos;re ready, schedule an in-person tour with Dr. Jan Duffy or browse current homes for sale in the community.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/virtual-tours"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  All Virtual Tours
                </Link>
                <Link
                  href="/schedule"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Schedule a Tour
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
