import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import RideCard from "@/components/rides/RideCard";
import { rides } from "@/data/rides";

export default function FeaturedRidesSection() {
  const featured = rides.filter((r) => r.featured).slice(0, 3);

  return (
    <section className="py-24 sm:py-32 px-4 bg-[#161616]">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Upcoming Rides"
            title="Find your next ride."
            subtitle="From welcoming social loops to demanding mountain routes."
          />
          <Link
            href="/rides"
            className="inline-flex items-center gap-1.5 text-[#FF6B00] text-sm font-semibold hover:gap-3 transition-all whitespace-nowrap self-start sm:self-auto"
          >
            View all rides
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((ride, i) => (
            <RideCard key={ride.slug} ride={ride} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
