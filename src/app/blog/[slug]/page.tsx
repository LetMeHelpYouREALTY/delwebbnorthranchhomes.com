import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/../components/Breadcrumbs";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";
import { Button } from "@/../components/ui/button";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_ORIGIN, GBP_BUSINESS_NAME, gbpPostalAddressSchema } from "@/lib/site";
import { TITLE_SUFFIX } from "@/lib/hyperlocal";
import { blogPosts } from "@/lib/blog-posts";

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Blog Post Not Found | Del Webb North Ranch",
    };
  }

  const url = `${SITE_ORIGIN}/blog/${slug}`;

  return {
    title: `${post.title} | ${TITLE_SUFFIX}`,
    description: `${post.excerpt} Dr. Jan Duffy on Del Webb North Ranch, a 55+ community in North Las Vegas.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | ${TITLE_SUFFIX}`,
      description: post.excerpt,
      url: url,
      siteName: TITLE_SUFFIX,
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      authors: ["Dr. Jan Duffy"],
      images: [
        {
          url: `${SITE_ORIGIN}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${TITLE_SUFFIX}`,
      description: post.excerpt,
      images: [`${SITE_ORIGIN}${post.image}`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const postKeys = Object.keys(blogPosts);
  const currentIndex = postKeys.indexOf(slug);
  const prevPost = currentIndex > 0 ? blogPosts[postKeys[currentIndex - 1]] : null;
  const nextPost =
    currentIndex < postKeys.length - 1
      ? blogPosts[postKeys[currentIndex + 1]]
      : null;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${slug}` },
        ]}
      />
      <main>
        {/* BlogPosting schema for E-E-A-T and rich results (2026 realtor SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.summary,
              abstract: post.summary,
              articleSection: post.category,
              inLanguage: "en-US",
              datePublished: post.date,
              dateModified: post.dateModified,
              image: `${SITE_ORIGIN}${post.image.startsWith("/") ? post.image : `/${post.image}`}`,
              about: {
                "@type": "Place",
                name: "Del Webb North Ranch",
                address: gbpPostalAddressSchema(),
              },
              isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["#article-summary"],
              },
              author: {
                "@type": "Person",
                "@id": `${SITE_ORIGIN}/#person`,
                name: "Dr. Jan Duffy",
                url: `${SITE_ORIGIN}/about`,
                jobTitle: "REALTOR®",
              },
              publisher: {
                "@type": "Organization",
                name: GBP_BUSINESS_NAME,
                logo: {
                  "@type": "ImageObject",
                  url: `${SITE_ORIGIN}/images/logo/logo.svg`,
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${SITE_ORIGIN}/blog/${slug}`,
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
        <PageHero
          imageSrc={post.image}
          imageAlt={`${post.title} at Del Webb North Ranch, North Las Vegas 55+ community`}
          title={post.title}
          subtitle={
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/blog"
                className="inline-flex min-h-[44px] items-center gap-2 text-gray-100 underline-offset-4 hover:underline"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Blog
              </Link>
              <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">{post.category}</span>
              <span className="flex items-center gap-2 text-gray-100">
                <Calendar className="w-5 h-5" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
            </div>
          }
        />

        {/* Featured Image */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-three bg-bg-light">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <aside
                aria-labelledby="article-summary-heading"
                className="mb-8 rounded-lg border-l-4 border-primary bg-bg-light p-6"
              >
                <h2
                  id="article-summary-heading"
                  className="mb-2 text-lg font-bold text-primary font-playfair"
                >
                  Quick answer
                </h2>
                <p id="article-summary" className="text-base md:text-lg text-text-dark leading-relaxed">
                  {post.summary}
                </p>
              </aside>
              <p className="mb-8 text-sm text-text-dark">
                By{" "}
                <Link href="/about" className="font-semibold text-primary underline-offset-4 hover:underline">
                  Dr. Jan Duffy, REALTOR®
                </Link>
                , Berkshire Hathaway HomeServices Nevada Properties (S.0197614.LLC). Updated{" "}
                <time dateTime={post.dateModified}>
                  {new Date(`${post.dateModified}T12:00:00`).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                .
              </p>
              <div
                className="prose prose-lg max-w-none text-text-dark"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>

        {/* Navigation */}
        {(prevPost || nextPost) && (
          <section className="py-12 bg-bg-light">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {prevPost && (
                    <Link
                      href={`/blog/${postKeys[currentIndex - 1]}`}
                      className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow"
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <ArrowLeft className="w-4 h-4" />
                        Previous Post
                      </div>
                      <h3 className="font-bold text-primary font-playfair">
                        {prevPost.title}
                      </h3>
                    </Link>
                  )}
                  {nextPost && (
                    <Link
                      href={`/blog/${postKeys[currentIndex + 1]}`}
                      className="bg-white p-6 rounded-lg shadow-two hover:shadow-three transition-shadow md:text-right"
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 md:justify-end">
                        Next Post
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-primary font-playfair">
                        {nextPost.title}
                      </h3>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Ready to Experience Del Webb North Ranch?
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a tour with Dr. Jan Duffy to see the community for
                yourself.
              </p>
              <Button
                asChild
                variant="accent"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Link href="/contact">Schedule Your Tour</Link>
              </Button>
            </div>
          </div>
        </section>
        <LocalVisitSection heading="Visit Del Webb North Ranch in North Las Vegas" />
      </main>
    </>
  );
}
