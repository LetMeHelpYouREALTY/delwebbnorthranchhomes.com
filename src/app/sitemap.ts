import { MetadataRoute } from "next";
import { CANONICAL_HOMEPAGE, SITE_ORIGIN } from "@/lib/site";
import { getVirtualToursWithEmbed } from "@/lib/old-site-data";
import { floorPlans } from "@/lib/floor-plans";
import { getAllFlyers } from "@/lib/flyers";
import { blogPosts } from "@/lib/blog-posts";
import { absoluteMediaUrl, type MediaKey } from "@/lib/media";

/** Hero/primary images per path for Google image sitemap extensions. */
const PAGE_IMAGES: Record<string, MediaKey[]> = {
  "/": ["home.hero", "community.fullAerial", "homes.haven6584"],
  "/homes-for-sale": ["homesForSale.hero"],
  "/buyers": ["buyers.hero"],
  "/sellers": ["sellers.hero"],
  "/home-value": ["homeValue.hero"],
  "/schedule": ["schedule.hero"],
  "/community": ["community.hero", "community.campusAerial"],
  "/floor-plans": ["floorPlans.hero", "homes.canyon", "homes.getaway", "homes.haven6584"],
  "/amenities": ["amenities.hero", "amenities.pickleball", "amenities.fitness", "amenities.clubhouse"],
  "/about": ["about.hero"],
  "/contact": ["contact.hero"],
  "/lifestyle": ["lifestyle.hero", "lifestyle.events"],
  "/faq": ["faq.hero"],
  "/blog": ["blog.hero"],
  "/testimonials": ["testimonials.hero"],
  "/virtual-tours": ["virtualTours.hero"],
  "/mortgage-calculator": ["mortgage.hero"],
  "/why-choose-us": ["whyChooseUs.hero"],
  "/flyers": ["flyers.hero"],
};

function withImages(entry: MetadataRoute.Sitemap[number]): MetadataRoute.Sitemap[number] {
  const path = entry.url === CANONICAL_HOMEPAGE ? "/" : entry.url.replace(SITE_ORIGIN, "");
  const keys = PAGE_IMAGES[path];
  if (!keys || entry.images) return entry;
  return { ...entry, images: keys.map((k) => absoluteMediaUrl(k)) };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const virtualTourWatchPages = getVirtualToursWithEmbed().map((t) => ({
    url: `${SITE_ORIGIN}/virtual-tours/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const floorPlanPages = floorPlans.map((plan) => ({
    url: `${SITE_ORIGIN}/floor-plans/${plan.slug}`,
    images: plan.imageUrl ? [`${SITE_ORIGIN}${plan.imageUrl}`] : undefined,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const flyerPages = getAllFlyers().map((f) => ({
    url: `${SITE_ORIGIN}/flyers/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const blogPostPages = Object.entries(blogPosts).map(([slug, post]) => ({
    url: `${SITE_ORIGIN}/blog/${slug}`,
    lastModified: new Date(post.dateModified),
    images: [`${SITE_ORIGIN}${post.image}`],
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const entries: MetadataRoute.Sitemap = [
    // Homepage - Priority 1.0, Daily (trailing slash matches canonical)
    {
      url: CANONICAL_HOMEPAGE,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Main Pages - Priority 0.9, Daily
    {
      url: `${SITE_ORIGIN}/homes-for-sale`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_ORIGIN}/buyers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_ORIGIN}/sellers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_ORIGIN}/home-value`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_ORIGIN}/schedule`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_ORIGIN}/community`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_ORIGIN}/floor-plans`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...floorPlanPages,
    // Secondary Pages - Priority 0.8
    {
      url: `${SITE_ORIGIN}/amenities`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_ORIGIN}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_ORIGIN}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Tertiary Pages - Priority 0.7
    {
      url: `${SITE_ORIGIN}/lifestyle`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_ORIGIN}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_ORIGIN}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    ...blogPostPages,
    // Lower Priority Pages
    {
      url: `${SITE_ORIGIN}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_ORIGIN}/virtual-tours`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...virtualTourWatchPages,
    {
      url: `${SITE_ORIGIN}/mortgage-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_ORIGIN}/why-choose-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_ORIGIN}/flyers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...flyerPages,
    {
      url: `${SITE_ORIGIN}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_ORIGIN}/accessibility`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_ORIGIN}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_ORIGIN}/sitemap-page`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  return entries.map(withImages);
}
