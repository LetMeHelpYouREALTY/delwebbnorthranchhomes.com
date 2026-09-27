/**
 * Generate BreadcrumbList structured data for SEO
 * Google Search Console 2025: Breadcrumbs still important for desktop SERPs and on-page UX
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Common breadcrumb paths for the site
 */
export const breadcrumbPaths = {
  homepage: [{ name: "Home", url: "https://www.delwebbnorthranchhomes.com" }],
  homesForSale: [
    { name: "Home", url: "https://www.delwebbnorthranchhomes.com" },
    { name: "Homes for Sale", url: "https://www.delwebbnorthranchhomes.com/homes-for-sale" },
  ],
  floorPlans: [
    { name: "Home", url: "https://www.delwebbnorthranchhomes.com" },
    { name: "Floor Plans", url: "https://www.delwebbnorthranchhomes.com/floor-plans" },
  ],
  floorPlanDetail: (planName: string, planSlug: string) => [
    { name: "Home", url: "https://www.delwebbnorthranchhomes.com" },
    { name: "Floor Plans", url: "https://www.delwebbnorthranchhomes.com/floor-plans" },
    { name: planName, url: `https://www.delwebbnorthranchhomes.com/floor-plans/${planSlug}` },
  ],
  amenities: [
    { name: "Home", url: "https://www.delwebbnorthranchhomes.com" },
    { name: "Amenities", url: "https://www.delwebbnorthranchhomes.com/amenities" },
  ],
  nearbyAmenities: [
    { name: "Home", url: "https://www.delwebbnorthranchhomes.com" },
    { name: "Nearby Amenities", url: "https://www.delwebbnorthranchhomes.com/nearby-amenities" },
  ],
  lifestyle: [
    { name: "Home", url: "https://www.delwebbnorthranchhomes.com" },
    { name: "Lifestyle", url: "https://www.delwebbnorthranchhomes.com/lifestyle" },
  ],
  about: [
    { name: "Home", url: "https://www.delwebbnorthranchhomes.com" },
    { name: "About", url: "https://www.delwebbnorthranchhomes.com/about" },
  ],
  blog: [
    { name: "Home", url: "https://www.delwebbnorthranchhomes.com" },
    { name: "Blog", url: "https://www.delwebbnorthranchhomes.com/blog" },
  ],
  blogPost: (postTitle: string, postSlug: string) => [
    { name: "Home", url: "https://www.delwebbnorthranchhomes.com" },
    { name: "Blog", url: "https://www.delwebbnorthranchhomes.com/blog" },
    { name: postTitle, url: `https://www.delwebbnorthranchhomes.com/blog/${postSlug}` },
  ],
  faq: [
    { name: "Home", url: "https://www.delwebbnorthranchhomes.com" },
    { name: "FAQ", url: "https://www.delwebbnorthranchhomes.com/faq" },
  ],
  contact: [
    { name: "Home", url: "https://www.delwebbnorthranchhomes.com" },
    { name: "Contact", url: "https://www.delwebbnorthranchhomes.com/contact" },
  ],
  testimonials: [
    { name: "Home", url: "https://www.delwebbnorthranchhomes.com" },
    { name: "Testimonials", url: "https://www.delwebbnorthranchhomes.com/testimonials" },
  ],
  privacy: [
    { name: "Home", url: "https://www.delwebbnorthranchhomes.com" },
    { name: "Privacy Policy", url: "https://www.delwebbnorthranchhomes.com/privacy" },
  ],
};
