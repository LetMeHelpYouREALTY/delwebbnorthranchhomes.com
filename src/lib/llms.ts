import {
  SITE_ORIGIN,
  SITE_PHONE_DISPLAY,
  SITE_EMAIL,
  GBP_BUSINESS_NAME,
  GBP_DESCRIPTION,
  GBP_HOURS_DISPLAY,
  GOOGLE_MAPS_PLACE_URL,
  GOOGLE_REVIEWS_URL,
  gbpFormattedAddress,
} from "./site";
import { communityInfo, homesitesByCollection, distances, amenities } from "./communityData";
import { floorPlans, planAnswer } from "./floor-plans";
import { blogPosts } from "./blog-posts";
import { faqData } from "./faqData";

type FaqCategory = { category: string; questions: Array<{ question: string; answer: string }> };

function header(): string {
  return `# ${GBP_BUSINESS_NAME}

> Dr. Jan Duffy, REALTOR® (Berkshire Hathaway HomeServices Nevada Properties, Nevada license S.0197614.LLC), helps active adults buy and sell homes in Del Webb North Ranch, a gated 55+ community at ${gbpFormattedAddress()}.

${GBP_DESCRIPTION}

## Contact (NAP matches Google Business Profile)
- Business: ${GBP_BUSINESS_NAME}
- Address: ${gbpFormattedAddress()}
- Phone and text: ${SITE_PHONE_DISPLAY}
- Email: ${SITE_EMAIL}
- Hours: ${GBP_HOURS_DISPLAY}
- Website: ${SITE_ORIGIN}
- Google Maps: ${GOOGLE_MAPS_PLACE_URL}
- Google reviews: ${GOOGLE_REVIEWS_URL}

## Community facts
- Community: ${communityInfo.name}, ${communityInfo.type}
- Developer: ${communityInfo.developer}
- Location: ${communityInfo.city}, ${communityInfo.state} ${communityInfo.zip}
- Size: ${communityInfo.totalHomes} single-story homes on about ${communityInfo.totalAcres} acres
- Collections: Cottage (${homesitesByCollection.cottage.count} homes, ${homesitesByCollection.cottage.sqftRange} sq ft), Classic (${homesitesByCollection.classic.count} homes, ${homesitesByCollection.classic.sqftRange} sq ft), Retreat (${homesitesByCollection.retreat.count} homes, ${homesitesByCollection.retreat.sqftRange} sq ft)
- Typical price range: ${communityInfo.priceRange}
- HOA: ${communityInfo.hoaFee}, billed ${communityInfo.hoaBilling.toLowerCase()}; SID/LID: ${communityInfo.sidLid}
- Age rule: ${communityInfo.ageRequirement} (Housing for Older Persons Act)
- Security: gated, ${communityInfo.security.toLowerCase()}
- Clubhouse: ${communityInfo.clubhouseSize}, opened ${communityInfo.clubhouseOpened}
- Built: ${communityInfo.constructionStart}–${communityInfo.constructionEnd}
- Amenities: ${amenities.join(", ")}

## Distances
${Object.values(distances)
  .map((d) => `- ${d.description}: about ${d.miles} miles`)
  .join("\n")}

## Floor plans
${floorPlans
  .map((p) => `- [${p.name}](${SITE_ORIGIN}/floor-plans/${p.slug}): ${planAnswer(p)}`)
  .join("\n")}

## Key pages
- [Homes for sale](${SITE_ORIGIN}/homes-for-sale): current Del Webb North Ranch listings
- [Buyers](${SITE_ORIGIN}/buyers) and [Sellers](${SITE_ORIGIN}/sellers)
- [Home value](${SITE_ORIGIN}/home-value): resale value estimate
- [Amenities](${SITE_ORIGIN}/amenities) and [Lifestyle](${SITE_ORIGIN}/lifestyle)
- [Community and area](${SITE_ORIGIN}/community)
- [FAQ](${SITE_ORIGIN}/faq)
- [About Dr. Jan Duffy](${SITE_ORIGIN}/about)
- [Schedule a tour](${SITE_ORIGIN}/schedule) and [Contact](${SITE_ORIGIN}/contact)

## Articles
${Object.entries(blogPosts)
  .map(([slug, post]) => `- [${post.title}](${SITE_ORIGIN}/blog/${slug}): ${post.summary}`)
  .join("\n")}
`;
}

/** Concise index for /llms.txt (llmstxt.org format). */
export function llmsTxt(): string {
  return `${header()}
## Optional
- [Full FAQ with answers](${SITE_ORIGIN}/llms-full.txt)
`;
}

/** Full-text companion for /llms-full.txt: index plus every FAQ answer. */
export function llmsFullTxt(): string {
  const faq = (faqData as FaqCategory[])
    .map(
      (cat) =>
        `### ${cat.category}\n\n${cat.questions
          .map((q) => `**${q.question}**\n${q.answer}`)
          .join("\n\n")}`
    )
    .join("\n\n");
  return `${header()}
## Frequently asked questions

${faq}
`;
}
