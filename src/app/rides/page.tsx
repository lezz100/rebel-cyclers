import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RidesGrid from "@/components/rides/RidesGrid";
import { rides } from "@/data/rides";

export const metadata: Metadata = {
  title: "Rides & Tours",
  description:
    "Upcoming Rebel Cyclers rides for all abilities — beginner social rides to expert distance challenges across Kenya.",
  openGraph: {
    title: "Rides & Tours | Rebel Cyclers",
    description:
      "Upcoming Rebel Cyclers rides for all abilities — beginner social rides to expert distance challenges across Kenya.",
    url: "/rides",
  },
  twitter: {
    title: "Rides & Tours | Rebel Cyclers",
    description: "Upcoming club rides for all abilities across Kenya.",
  },
};

export default function RidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Rides & Tours"
        title="Find your next ride."
        subtitle="Upcoming club rides for all abilities — filter by difficulty and see what's on."
      />
      <section className="py-16 sm:py-24 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <RidesGrid rides={rides} />
        </div>
      </section>
    </>
  );
}
