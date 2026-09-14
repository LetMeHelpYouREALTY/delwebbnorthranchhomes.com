import { Home, CheckCircle, DollarSign, Users } from "lucide-react";
import ScrollAnimation from "../scroll-animation";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay?: number;
}

function ValueCard({ icon, title, text, delay = 0 }: ValueCardProps) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-two hover:shadow-three transition-shadow h-full flex flex-col">
        <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full mb-4 md:mb-6">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4 font-playfair">
          {title}
        </h3>
        <p className="text-base md:text-lg text-text-dark leading-relaxed flex-grow">
          {text}
        </p>
      </div>
    </ScrollAnimation>
  );
}

export default function ValuePropsSection() {
  const values = [
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Single-Story Living, Zero Compromise",
      text: "All nine floor plans are single-level with 2-3 bedrooms, open layouts, and attached 2-car garages. Homes range from 1,285 to 2,015 square feet.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "A Community That's Actually Complete",
      text: "Unlike newer developments still waiting on amenities, Del Webb North Ranch is fully built. The resort pool is open. The fitness center is ready. The pickleball courts are waiting.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Keep More of Your Money",
      text: "Nevada has no state income tax. HOA fees are $215/month with no special improvement districts. Your retirement dollars stretch further here.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Neighbors Who Get It",
      text: "Everyone here chose this life on purpose. They're active. They're social. You'll make more friends in your first month than you did in your last decade.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center font-playfair mb-4">
          Why Buyers Choose Del Webb North Ranch
        </h2>
        <p className="text-center text-base md:text-lg text-text-dark mb-10 md:mb-12 max-w-2xl mx-auto">
          Single-story homes, a finished 10,000 sq ft clubhouse, and 55+ living in North Las Vegas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              text={value.text}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
