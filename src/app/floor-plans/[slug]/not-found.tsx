import Link from 'next/link';
import { Button } from '@/../components/ui/button';

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-playfair">
            Floor Plan Not Found
          </h1>
          <p className="text-lg text-text-dark mb-8">
            The floor plan you're looking for doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default">
              <Link href="/floor-plans">View All Floor Plans</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
