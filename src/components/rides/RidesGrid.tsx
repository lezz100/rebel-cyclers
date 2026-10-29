"use client";

import { useState } from "react";
import type { Difficulty } from "@/types";
import type { Ride } from "@/types";
import RideCard from "@/components/rides/RideCard";

type Filter = Difficulty | "all";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All Rides" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "expert", label: "Expert" },
];

interface RidesGridProps {
  rides: Ride[];
}

export default function RidesGrid({ rides }: RidesGridProps) {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? rides : rides.filter((r) => r.difficulty === active);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter rides by difficulty">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActive(f.value)}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              active === f.value
                ? "bg-[#FF6B00] text-white"
                : "bg-[#161616] text-white/60 border border-white/10 hover:text-white hover:border-white/25"
            }`}
            aria-pressed={active === f.value}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ride, i) => (
            <RideCard key={ride.slug} ride={ride} index={i} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-white/30 text-sm font-mono">
            No {active} rides currently scheduled.
          </p>
          <button
            type="button"
            onClick={() => setActive("all")}
            className="mt-4 text-[#FF6B00] text-sm font-semibold hover:underline"
          >
            View all rides
          </button>
        </div>
      )}
    </div>
  );
}
