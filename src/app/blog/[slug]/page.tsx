import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/../components/Breadcrumbs";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";
import { Button } from "@/../components/ui/button";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_ORIGIN, GBP_BUSINESS_NAME } from "@/lib/site";
import { TITLE_SUFFIX } from "@/lib/hyperlocal";

const blogPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category: string;
    content: string;
  }
> = {
  "welcome-to-del-webb-north-ranch": {
    title: "Welcome to Del Webb North Ranch",
    excerpt:
      "Discover what makes Del Webb North Ranch the premier 55+ community in North Las Vegas.",
    date: "2024-01-15",
    image: "/images/blog/welcome.jpg",
    category: "Community",
    content: `
      <p>Del Webb North Ranch represents a new chapter in active adult living. Located in North Las Vegas, this gated 55+ community offers everything you've been looking for in your retirement years.</p>
      
      <h2>What Makes It Special</h2>
      <p>With 394 single-family residences, all single-story homes, Del Webb North Ranch is designed specifically for active adults. Every detail, from the floor plans to the amenities, is crafted with your lifestyle in mind.</p>
      
      <p>The community is fully built and operational, meaning you don't have to wait for amenities to be completed. The resort-style pool is open. The fitness center is ready. The pickleball courts are waiting for your next game.</p>
      
      <h2>A Community That Gets It</h2>
      <p>What sets Del Webb North Ranch apart isn't just the homes or amenities—it's the people. Everyone here chose this life on purpose. They're active, social, and ready to make the most of their retirement years.</p>
      
      <p>Whether you're joining a morning fitness class, attending a club meeting, or simply chatting with neighbors on a walk, you'll find that making connections comes naturally here.</p>
    `,
  },
  "why-single-story-living-matters": {
    title: "Why Single-Story Living Matters",
    excerpt:
      "All homes at Del Webb North Ranch are single-story, and there's a good reason.",
    date: "2024-01-10",
    image: "/images/blog/single-story.jpg",
    category: "Homes",
    content: `
      <p>When you're looking for your retirement home, single-story living isn't just a preference—it's a smart choice for your future.</p>
      
      <h2>Accessibility Now and Later</h2>
      <p>Single-story homes eliminate the need to navigate stairs daily. This becomes increasingly important as we age, but it's also convenient right now. No more carrying groceries up stairs or worrying about mobility issues down the road.</p>
      
      <h2>Easier Maintenance</h2>
      <p>Without stairs to clean or second-story windows to maintain, single-story homes are simply easier to take care of. You can spend less time on housework and more time enjoying your retirement.</p>
      
      <h2>Better Flow</h2>
      <p>Single-story designs often feature more open floor plans, creating a sense of spaciousness and better flow between living areas. This makes entertaining easier and daily living more comfortable.</p>
      
      <p>At Del Webb North Ranch, every single home is single-story. It's not an option—it's a standard, because we believe it's the right choice for active adult living.</p>
    `,
  },
  "nevada-tax-benefits-for-retirees": {
    title: "Nevada Tax Benefits for Retirees",
    excerpt:
      "Nevada's lack of state income tax is a major draw for retirees.",
    date: "2024-01-05",
    image: "/images/blog/taxes.jpg",
    category: "Lifestyle",
    content: `
      <p>One of the biggest advantages of moving to Nevada? No state income tax. For retirees, this can mean significant savings.</p>
      
      <h2>The Financial Impact</h2>
      <p>If you're coming from a state like California, which has one of the highest state income tax rates in the country, moving to Nevada can put thousands of dollars back in your pocket each year.</p>
      
      <p>That's money you can use for travel, hobbies, or simply enjoying your retirement more. It's not just about the savings—it's about having more freedom to do what you want.</p>
      
      <h2>Other Tax Benefits</h2>
      <p>Nevada also has relatively low property taxes, and there's no inheritance tax or estate tax. For retirees planning to pass wealth to their heirs, this is another significant advantage.</p>
      
      <h2>More of Your Money Stays Yours</h2>
      <p>At Del Webb North Ranch, with HOA fees of just $215 per month and no special improvement districts, your housing costs are predictable and reasonable. Combined with Nevada's tax benefits, your retirement dollars go further here.</p>
    `,
  },
  "community-clubs-and-activities": {
    title: "Community Clubs and Activities",
    excerpt:
      "Discover the wide variety of clubs and activities available at Del Webb North Ranch.",
    date: "2023-12-20",
    image: "/images/blog/clubs.jpg",
    category: "Lifestyle",
    content: `
      <p>One of the best parts of living in a 55+ community is the built-in social network. At Del Webb North Ranch, there are dozens of clubs and activities to choose from.</p>
      
      <h2>Something for Everyone</h2>
      <p>Whether you're interested in fitness, arts, games, or learning, there's likely a club for you. Popular options include pickleball leagues, book clubs, photography groups, cooking classes, and more.</p>
      
      <h2>Starting Your Own</h2>
      <p>Don't see what you're looking for? Many residents start their own clubs. The community is supportive of new groups and activities, making it easy to find others who share your interests.</p>
      
      <h2>Regular Events</h2>
      <p>Beyond clubs, the community hosts regular events like socials, holiday celebrations, and educational seminars. These events are great opportunities to meet neighbors and get involved.</p>
      
      <p>The key is that you're never forced to participate—but the opportunities are always there when you want them.</p>
    `,
  },
  "choosing-the-right-floor-plan": {
    title: "Choosing the Right Floor Plan",
    excerpt:
      "With 9 floor plans across three series, how do you choose?",
    date: "2023-12-15",
    image: "/images/blog/floor-plans.jpg",
    category: "Homes",
    content: `
      <p>Del Webb North Ranch offers 9 floor plans across three series. Here's how to think about choosing the right one for you.</p>
      
      <h2>Cottage Series (1,285-1,509 sq ft)</h2>
      <p>Perfect if you're downsizing and want efficient, easy-to-maintain living. These plans are cozy without feeling cramped, ideal for those who want to simplify.</p>
      
      <h2>Classic Series (1,451-1,770 sq ft)</h2>
      <p>Room to spread out with optional dens for hobbies or home offices. Great if you want space but don't need the largest option.</p>
      
      <h2>Retreat Series (1,716-2,015 sq ft)</h2>
      <p>Spacious living for those who love to entertain or want extra room for visiting family. If you want space and luxury, this is the series for you.</p>
      
      <h2>Consider Your Lifestyle</h2>
      <p>Think about how you'll use the space. Do you entertain often? Need a home office? Want room for guests? These questions will help guide your choice.</p>
      
      <p>Dr. Jan Duffy can help you understand the nuances of each floor plan and find the one that best fits your lifestyle.</p>
    `,
  },
  "first-year-living-experience": {
    title: "A First-Year Living Experience",
    excerpt:
      "Hear from residents about their first year at Del Webb North Ranch.",
    date: "2023-12-10",
    image: "/images/blog/first-year.jpg",
    category: "Community",
    content: `
      <p>We spoke with several residents about their first year at Del Webb North Ranch. Here's what they had to say.</p>
      
      <h2>Making Friends</h2>
      <p>"I made more friends in my first month here than I did in my last decade in my old neighborhood," one resident shared. "Everyone is so welcoming and open to meeting new people."</p>
      
      <h2>The Amenities</h2>
      <p>"The amenities are amazing, and they're actually being used," another resident noted. "The pool, fitness center, pickleball courts—everything is well-maintained and accessible."</p>
      
      <h2>The Lifestyle</h2>
      <p>"I love that I don't have to worry about yard work or maintenance," said a third resident. "I can focus on enjoying my retirement instead of maintaining a house."</p>
      
      <h2>No Regrets</h2>
      <p>When asked if they'd make the same choice again, every resident we spoke with said yes—and many wished they'd made the move sooner.</p>
    `,
  },
};

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
    description: `${post.excerpt} Read more about Del Webb North Ranch, a premier 55+ community in North Las Vegas.`,
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
              description: post.excerpt,
              datePublished: post.date,
              dateModified: post.date,
              image: `${SITE_ORIGIN}${post.image.startsWith("/") ? post.image : `/${post.image}`}`,
              author: {
                "@type": "Person",
                "@id": `${SITE_ORIGIN}/#person`,
                name: "Dr. Jan Duffy",
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
