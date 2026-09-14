import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/../components/Breadcrumbs";
import ScrollAnimation from "@/../components/scroll-animation";
import { Calendar, ArrowRight } from "lucide-react";
import { SITE_ORIGIN } from "@/lib/site";
import { metaDescriptionBlock, TITLE_SUFFIX } from "@/lib/hyperlocal";
import { mediaOpenGraph, mediaTwitterImages } from "@/lib/media";
import RealScoutListings from "@/../components/RealScoutListings";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";

export const metadata: Metadata = {
  title: `Blog | ${TITLE_SUFFIX}`,
  description: metaDescriptionBlock(
    "Read the latest news, tips, and insights about Del Webb North Ranch 55+ community. Active adult living, events, and real estate tips"
  ),
  alternates: {
    canonical: `${SITE_ORIGIN}/blog`,
  },
  openGraph: {
    title: `Blog | ${TITLE_SUFFIX}`,
    description:
      "Community news, insights, and tips about Del Webb North Ranch 55+ community and active adult living.",
    url: `${SITE_ORIGIN}/blog`,
    siteName: TITLE_SUFFIX,
    locale: "en_US",
    type: "website",
    images: [mediaOpenGraph("blog.hero")],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${TITLE_SUFFIX}`,
    description: "Community news and insights about North Las Vegas premier 55+ community.",
    images: mediaTwitterImages("blog.hero"),
  },
};

// Sample blog posts - replace with actual content from CMS or API
const blogPosts = [
  {
    slug: "welcome-to-del-webb-north-ranch",
    title: "Welcome to Del Webb North Ranch",
    excerpt:
      "Discover what makes Del Webb North Ranch the premier 55+ community in North Las Vegas. From resort-style amenities to a vibrant social scene, learn why so many active adults choose to call this place home.",
    date: "2024-01-15",
    image: "/images/blog/blog-01.jpg",
    category: "Community",
  },
  {
    slug: "why-single-story-living-matters",
    title: "Why Single-Story Living Matters",
    excerpt:
      "All homes at Del Webb North Ranch are single-story, and there's a good reason. Learn why this design choice matters for active adults and how it enhances your quality of life now and in the future.",
    date: "2024-01-10",
    image: "/images/blog/blog-02.jpg",
    category: "Homes",
  },
  {
    slug: "nevada-tax-benefits-for-retirees",
    title: "Nevada Tax Benefits for Retirees",
    excerpt:
      "Nevada's lack of state income tax is a major draw for retirees. Discover how moving to Nevada can help your retirement dollars stretch further.",
    date: "2024-01-05",
    image: "/images/blog/blog-03.jpg",
    category: "Lifestyle",
  },
  {
    slug: "community-clubs-and-activities",
    title: "Community Clubs and Activities",
    excerpt:
      "From pickleball to book clubs, discover the wide variety of clubs and activities available at Del Webb North Ranch. There's something for everyone.",
    date: "2023-12-20",
    image: "/images/blog/post-01.jpg",
    category: "Lifestyle",
  },
  {
    slug: "choosing-the-right-floor-plan",
    title: "Choosing the Right Floor Plan",
    excerpt:
      "With 9 floor plans across three series, how do you choose? This guide helps you understand the differences and find the perfect fit for your lifestyle.",
    date: "2023-12-15",
    image: "/images/blog/post-02.jpg",
    category: "Homes",
  },
  {
    slug: "first-year-living-experience",
    title: "A First-Year Living Experience",
    excerpt:
      "Hear from residents about their first year at Del Webb North Ranch. Learn what surprised them, what they love, and what advice they have for newcomers.",
    date: "2023-12-10",
    image: "/images/blog/post-03.jpg",
    category: "Community",
  },
];

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

function BlogCard({
  post,
  index,
}: {
  post: (typeof blogPosts)[0];
  index: number;
}) {
  return (
    <ScrollAnimation delay={index * 50}>
      <article className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow overflow-hidden h-full flex flex-col">
        <Link href={`/blog/${post.slug}`}>
          <div className="relative h-48 bg-bg-light">
            <Image
              src={post.image}
              alt={`${post.title} | Del Webb North Ranch 55+ community blog, North Las Vegas`}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={blurDataURL}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded text-sm font-semibold">
              {post.category}
            </div>
          </div>
        </Link>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-xl font-bold text-primary mb-3 font-playfair hover:underline transition-colors">
              {post.title}
            </h3>
          </Link>
          <p className="text-text-dark leading-relaxed mb-4 flex-grow">
            {post.excerpt}
          </p>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </ScrollAnimation>
  );
}

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Del Webb North Ranch", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />
      <main>
        <PageHero
          mediaKey="blog.hero"
          title="Blog | Del Webb North Ranch 55+ Real Estate"
          subtitle="Stay informed about Del Webb North Ranch, 55+ living tips, and life in North Las Vegas."
        />

        {/* Office RealScout widget - directly below hero */}
        <RealScoutListings h2Text="Homes for Sale at Del Webb North Ranch | North Las Vegas 55+ Listings" />

        {/* Intro content - Del Webb North Ranch keyword variations */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                News, Tips, and Insights for Del Webb North Ranch
              </h2>
              <p className="text-text-dark mb-4 leading-relaxed">
                Our blog covers the North Ranch 55+ community, active adult living in North Las Vegas, and practical advice for buyers and sellers interested in Del Webb North Ranch. From single-story floor plans and resort-style amenities to clubs, events, and Nevada lifestyle benefits, you&apos;ll find stories and guides that help you explore this premier 55+ community.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Community life at North Ranch</h3>
              <p className="text-text-dark mb-4 leading-relaxed">
                Del Webb North Ranch isn&apos;t just a place to live—it&apos;s a vibrant neighborhood with a 10,000 sq ft clubhouse, pickleball courts, pools, and dozens of clubs and activities. We write about what makes the Del Webb North Ranch community special and how residents make the most of the North Ranch amenities and lifestyle.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Homes and real estate</h3>
              <p className="text-text-dark mb-4 leading-relaxed">
                Whether you&apos;re comparing Del Webb North Ranch floor plans, weighing resale vs. new construction, or curious about home values in the community, our articles offer clear, helpful information. We also keep you updated on market trends and tips for buying or selling in this 55+ active adult community in North Las Vegas.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Lifestyle and area</h3>
              <p className="text-text-dark mb-8 leading-relaxed">
                Nevada&apos;s tax benefits, healthcare options, outdoor recreation, and proximity to Las Vegas make North Ranch in North Las Vegas an attractive choice for many active adults. Our blog highlights lifestyle topics and area insights that matter to anyone considering Del Webb North Ranch as their next home.
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair">
                What You&apos;ll Find on the Del Webb North Ranch Blog
              </h2>
              <p className="text-text-dark mb-4 leading-relaxed">
                Our articles are written with North Ranch 55+ buyers and sellers in mind. We cover the Del Webb North Ranch community—from the clubhouse and North Ranch amenities to floor plans, resale market updates, and the active adult lifestyle that defines life at Del Webb North Ranch in North Las Vegas. Whether you&apos;re researching 55+ communities for the first time or you&apos;re ready to tour and buy, the blog is a resource for honest, practical information about this premier 55+ community.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">New posts regularly</h3>
              <p className="text-text-dark mb-4 leading-relaxed">
                We add new content on topics like single-story living at North Ranch, Nevada tax benefits for retirees, community clubs and events at the Del Webb North Ranch clubhouse, and how to choose the right floor plan for your lifestyle. Subscribe or check back often for the latest news and tips about Del Webb North Ranch real estate and life in the North Ranch 55+ community.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">From the community, for the community</h3>
              <p className="text-text-dark leading-relaxed">
                Many of our posts draw on real questions from buyers and sellers, so you&apos;ll find answers to common concerns about HOA fees, age requirements, resale value, and what it&apos;s really like to live at North Ranch in North Las Vegas. For the most current listings and personalized help, use the homes-for-sale widget above or schedule a tour with Dr. Jan Duffy, your Del Webb North Ranch specialist.
              </p>
            </div>
          </div>
        </section>

        {/* Topics we cover */}
        <section className="py-12 md:py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-playfair text-center">
                Topics We Cover at the Del Webb North Ranch Blog
              </h2>
              <p className="text-text-dark mb-6 leading-relaxed">
                Our blog covers the North Ranch 55+ community from every angle: Del Webb North Ranch floor plans and resale homes, the Del Webb North Ranch clubhouse and North Ranch amenities, Nevada tax benefits for 55+ buyers, and the active adult lifestyle in North Las Vegas. Whether you&apos;re comparing Del Webb North Ranch to other 55+ communities or you&apos;re ready to tour homes for sale at Del Webb North Ranch, you&apos;ll find practical articles that help you make informed decisions about North Ranch real estate and life at this premier 55+ community.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3 font-playfair">Community, homes, and lifestyle</h3>
              <p className="text-text-dark leading-relaxed">
                We write about single-story living at North Ranch, club and activity highlights at the Del Webb North Ranch clubhouse, and what to expect when buying or selling in the North Ranch 55+ community. New posts are added regularly—check back for the latest on Del Webb North Ranch in North Las Vegas, or browse current listings above and schedule a tour with Dr. Jan Duffy when you&apos;re ready to see North Ranch in person.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Explore more */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                Explore Del Webb North Ranch
              </h2>
              <p className="text-text-dark mb-6">
                <Link href="/buyers" className="text-primary hover:underline font-medium">For Buyers</Link>
                {" · "}
                <Link href="/sellers" className="text-primary hover:underline font-medium">For Sellers</Link>
                {" · "}
                <Link href="/community" className="text-primary hover:underline font-medium">Community & Area</Link>
                {" · "}
                <Link href="/homes-for-sale" className="text-primary hover:underline font-medium">Homes for Sale</Link>
                {" · "}
                <Link href="/schedule" className="text-primary hover:underline font-medium">Schedule a Tour</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-12 md:py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
                Stay Updated
              </h2>
              <p className="text-lg text-text-dark mb-6">
                Want to receive updates about new blog posts and community news?
                Contact Dr. Jan Duffy to be added to our newsletter.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors min-h-[48px]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        <LocalVisitSection heading="Visit Del Webb North Ranch in North Las Vegas" />
      </main>
    </>
  );
}
