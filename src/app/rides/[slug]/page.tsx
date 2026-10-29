import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { rides, getRideBySlug } from "@/data/rides";
import type { Difficulty } from "@/types";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return rides.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ride = getRideBySlug(slug);
  if (!ride) return { title: "Ride Not Found" };
  return {
    title: ride.title,
    description: ride.description,
    openGraph: {
      title: `${ride.title} | Rebel Cyclers`,
      description: ride.description,
      url: `/rides/${slug}`,
    },
    twitter: {
      title: `${ride.title} | Rebel Cyclers`,
      description: ride.description,
    },
  };
}

const difficultyConfig: Record<Difficulty, { label: string; badge: string }> = {
  beginner: {
    label: "Beginner",
    badge: "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20",
  },
  intermediate: {
    label: "Intermediate",
    badge: "text-amber-400 bg-amber-400/10 border border-amber-400/20",
  },
  advanced: {
    label: "Advanced",
    badge: "text-[#FF6B00] bg-[#FF6B00]/10 border border-[#FF6B00]/20",
  },
  expert: {
    label: "Expert",
    badge: "text-red-400 bg-red-400/10 border border-red-400/20",
  },
};


function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

const bringItems = [
  "Helmet — required on all rides",
  "At least two full water bottles",
  "Appropriate cycling kit for the weather",
  "Charged phone with emergency contacts saved",
  "Small kit: tube, tyre levers, mini pump or CO₂",
];

export default async function RideDetailPage({ params }: Props) {
  const { slug } = await params;
  const ride = getRideBySlug(slug);
  if (!ride) notFound();

  const config = difficultyConfig[ride.difficulty];

  return (
    <>
      {/* Page header */}
      <div className="bg-[#0B0B0B] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
          <Link
            href="/rides"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Rides
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${config.badge}`}>
              {config.label}
            </span>
            <time dateTime={ride.date} className="text-white/40 text-sm">
              {formatDate(ride.date)}
            </time>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {ride.title}
          </h1>

          <p className="text-white/50 text-base flex items-center gap-2 pb-12">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {ride.location}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Hero image */}
            <div className="relative h-56 sm:h-72 rounded overflow-hidden bg-[#161616]">
              <Image
                src={ride.image}
                alt={ride.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/50 to-transparent" />
            </div>

            {/* Description */}
            <div>
              <h2 className="font-heading text-xl font-bold text-white mb-4">
                About this ride
              </h2>
              <p className="text-white/65 text-base leading-relaxed">
                {ride.description}
              </p>
            </div>

            {/* What to bring */}
            <div>
              <h2 className="font-heading text-xl font-bold text-white mb-4">
                What to bring
              </h2>
              <ul className="space-y-3">
                {bringItems.map((item) => (
                  <li key={item} className="flex gap-3 items-start text-white/65 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Stats card */}
            <div className="bg-[#161616] rounded border border-white/5 p-6 space-y-5">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">
                Ride stats
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-white/40 text-xs mb-1">Distance</p>
                  <p className="font-heading text-3xl font-bold text-white">
                    {ride.distance}{" "}
                    <span className="text-lg text-white/40 font-normal">km</span>
                  </p>
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-1">Elevation gain</p>
                  <p className="font-heading text-3xl font-bold text-white">
                    {ride.elevation.toLocaleString()}{" "}
                    <span className="text-lg text-white/40 font-normal">m</span>
                  </p>
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-1">Difficulty</p>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${config.badge}`}>
                    {config.label}
                  </span>
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-1">Date</p>
                  <time dateTime={ride.date} className="text-white text-sm">
                    {formatDate(ride.date)}
                  </time>
                </div>
              </div>
            </div>

            {/* Enquiry card */}
            <div className="bg-[#161616] rounded border border-white/5 p-6">
              <h3 className="font-heading text-base font-bold text-white mb-2">
                Interested in this ride?
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Get in touch with any questions about this route, what to bring,
                or how to join.
              </p>
              <Link
                href={`/contact?ride=${ride.slug}`}
                className="block w-full text-center px-5 py-3 bg-[#FF6B00] text-white font-semibold rounded hover:bg-[#e55f00] transition-colors text-sm"
              >
                Enquire About This Ride
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
