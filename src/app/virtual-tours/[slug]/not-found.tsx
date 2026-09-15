import Link from "next/link";
import PageHero from "@/../components/PageHero";
import LocalVisitSection from "@/../components/LocalVisitSection";

export default function VirtualTourNotFound() {
  return (
    <main>
      <PageHero
        mediaKey="homes.haven6584"
        title="Virtual tour not found | Del Webb North Ranch 55+"
        subtitle="This virtual tour is not available. Browse all model home tours or schedule an in-person visit in North Las Vegas."
      />
      <div className="container mx-auto flex min-h-[40vh] items-center justify-center px-4 py-12">
        <div className="max-w-md text-center">
          <Link
            href="/virtual-tours"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90"
          >
            View all virtual tours
          </Link>
        </div>
      </div>
      <LocalVisitSection heading="Tour this community in person at Del Webb North Ranch" />
    </main>
  );
}
