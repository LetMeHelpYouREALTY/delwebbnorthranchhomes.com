export type BlogPost = {
  title: string;
  excerpt: string;
  /** Answer-first summary shown above the article and read by answer engines. */
  summary: string;
  date: string;
  dateModified: string;
  image: string;
  category: string;
  content: string;
};

export const blogPosts: Record<string, BlogPost> = {
  "welcome-to-del-webb-north-ranch": {
    title: "Welcome to Del Webb North Ranch",
    excerpt:
      "Discover what makes Del Webb North Ranch the premier 55+ community in North Las Vegas.",
    date: "2024-01-15",
    dateModified: "2026-09-23",
    summary:
      "Del Webb North Ranch is a gated 55+ community in North Las Vegas, NV 89086, with 394 single-story homes on about 80 acres. The 10,000 sq ft clubhouse opened October 16, 2021, and construction wrapped in 2024. HOA dues run about $215 a month, with no SID or LID.",
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
    dateModified: "2026-09-23",
    summary:
      "Every home at Del Webb North Ranch is single-story. That means no stairs, simpler upkeep, and open layouts from 1,285 to 2,015 sq ft, each with 2–3 bedrooms and an attached 2-car garage.",
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
    dateModified: "2026-09-23",
    summary:
      "Nevada has no state income tax, no inheritance tax, and no estate tax. At Del Webb North Ranch, HOA dues are about $215 a month with no SID or LID, and property tax runs roughly 1% of assessed value. Confirm your own situation with a tax professional.",
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
    dateModified: "2026-09-23",
    summary:
      "Residents at Del Webb North Ranch run clubs and activities out of a 10,000 sq ft clubhouse with a fitness center, billiards and social rooms, lighted pickleball courts, bocce, pools, and an event lawn. Join an existing group or start your own.",
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
    dateModified: "2026-09-23",
    summary:
      "Del Webb North Ranch has nine single-story floor plans in three series: Cottage (Canyon, Overlook, Peak; 1,285–1,509 sq ft), Classic (Getaway, Solitude, Expedition; 1,451–1,770 sq ft), and Retreat (Sanctuary, Haven, Preserve; 1,716–2,015 sq ft). Choose by how you will use the space: guests, a home office, or entertaining.",
    image: "/images/blog/floor-plans.jpg",
    category: "Homes",
    content: `
      <p>Del Webb North Ranch offers 9 floor plans across three series. Here's how to think about choosing the right one for you.</p>
      
      <h2>Cottage Series (1,285-1,509 sq ft)</h2>
      <p>Plans: Canyon (1,285 sq ft), Overlook (1,390 sq ft), and Peak (1,509 sq ft, with an optional third bedroom). Perfect if you're downsizing and want efficient, easy-to-maintain living. These plans are cozy without feeling cramped, ideal for those who want to simplify.</p>
      
      <h2>Classic Series (1,451-1,770 sq ft)</h2>
      <p>Plans: Getaway (1,451 sq ft), Solitude (1,657 sq ft, with a den), and Expedition (1,770 sq ft, with a den or optional third bedroom). Room to spread out with optional dens for hobbies or home offices. Great if you want space but don't need the largest option.</p>
      
      <h2>Retreat Series (1,716-2,015 sq ft)</h2>
      <p>Plans: Sanctuary (1,716 sq ft), Haven (1,859 sq ft), and Preserve (2,015 sq ft), each with a den and options like a wet bar or third bedroom. Spacious living for those who love to entertain or want extra room for visiting family. If you want space and luxury, this is the series for you.</p>
      
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
    dateModified: "2026-09-23",
    summary:
      "Residents describe their first year at Del Webb North Ranch as social and low-maintenance: friendships through clubs and events, amenities they actually use, and less time on yard work. Every resident interviewed said they would make the move again.",
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

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogPosts);
}
