import Link from "next/link";

export default function VirtualTourNotFound() {
  return (
    <>
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-playfair">
            Virtual tour not found
          </h1>
          <p className="text-text-dark mb-6">
            This virtual tour page doesn&apos;t exist or the tour isn&apos;t available yet.
          </p>
          <Link
            href="/virtual-tours"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            View all virtual tours
          </Link>
        </div>
      </main>
    </>
  );
}
