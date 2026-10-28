# Del Webb North Ranch - Real Estate Website

A modern, responsive Next.js website for Dr. Jan Duffy, REALTOR® specializing in Del Webb North Ranch, a premier 55+ active adult community in North Las Vegas, Nevada.

## 🏡 About

This website showcases Del Webb North Ranch, featuring:
- **394 single-family residences** in a gated 55+ community
- **9 floor plans** across 3 series (Cottage, Classic, Retreat)
- **Price range:** $400K - $600K
- **HOA:** $215/month (No SIDs or LIDs)
- **All homes:** Single-story, 2-3 bed, 2-2.5 bath, 2-car garage

## ✨ Features

- **Responsive Design:** Mobile-first approach, works on all devices (320px - 1920px+)
- **Scroll Animations:** Smooth fade-in animations as sections enter viewport
- **Contact Form:** Validated contact form with react-hook-form and Zod
- **Image Optimization:** Next.js Image component with blur placeholders
- **SEO Optimized:** Complete metadata, OpenGraph tags, and semantic HTML
- **Accessibility:** WCAG AA compliant with proper ARIA labels and focus states

## 📄 Pages

- **Homepage** (`/`) - Complete landing page with all sections
- **Homes for Sale** (`/homes-for-sale`) - RealScout embed for browsing listings
- **Floor Plans** (`/floor-plans`) - All 9 floor plans with Matterport tour placeholders
- **Amenities** (`/amenities`) - Detailed amenities gallery and information
- **About** (`/about`) - Dr. Jan Duffy's bio and credentials
- **Contact** (`/contact`) - Contact form and information

## 🛠️ Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Lucide React** (Icons)
- **react-hook-form** + **Zod** (Form validation)
- **next/image** (Image optimization)

## 🎨 Design System

### Colors
- **Primary:** Navy Blue (#1e3a5f)
- **Accent:** Warm Gold (#c9a227)
- **Success/CTA:** Teal (#0d9488)
- **Background:** White (#ffffff) and Light Gray (#f8f9fa)

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)
- **Minimum body text:** 16px for readability

## 📝 TODO Items

### High Priority
- [ ] Add RealScout embed code to `/homes-for-sale` page
- [ ] Add Matterport tour embeds to `/floor-plans` page
- [ ] Add actual images:
  - Hero background image
  - Dr. Jan Duffy headshot
  - Floor plan images for each series
  - Amenity photos
- [ ] Connect contact form to backend API
- [ ] Add OpenGraph and Twitter images to metadata

### Medium Priority
- [ ] Add Equal Housing Opportunity logo to footer
- [ ] Create privacy policy page
- [ ] Add sitemap.xml
- [ ] Add robots.txt

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📧 Contact

**Dr. Jan Duffy, REALTOR®**
- **Phone:** (725) 720-2805 *(NAP: update `SITE_PHONE_TEL` / `SITE_PHONE_DISPLAY` in `src/lib/site.ts`)*
- **Email:** sales@delwebbnorthranchhomes.com
- **License:** S.0197614.LLC
- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties

**Community Address:**
2290 Beauty Vista St, North Las Vegas, NV 89086

## 📄 License

This project is proprietary and confidential.
