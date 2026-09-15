import Link from "next/link";
import { Button } from "@/../components/ui/button";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";

export default function NotFound() {
  return (
    <main>
      <PageHero
        mediaKey="homes.haven6584"
        title="Floor plan not found | Del Webb North Ranch 55+"
        subtitle="That floor plan page does not exist. View all Cottage, Classic, and Retreat series homes in North Las Vegas."
      />
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild variant="default" className="min-h-[48px]">
            <Link href="/floor-plans">View All Floor Plans</Link>
          </Button>
          <Button asChild variant="outline" className="min-h-[48px]">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
      <LocalVisitSection heading="See floor plans in person at Del Webb North Ranch" />
    </main>
  );
}
