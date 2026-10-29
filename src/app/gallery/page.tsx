import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Rebel Cyclers rides, events, and adventures across Kenya — from Nairobi tarmac to Rift Valley gravel.",
  openGraph: {
    title: "Gallery | Rebel Cyclers",
    description:
      "Photos from Rebel Cyclers rides, events, and adventures across Kenya — from Nairobi tarmac to Rift Valley gravel.",
    url: "/gallery",
  },
  twitter: {
    title: "Gallery | Rebel Cyclers",
    description: "Photos from Rebel Cyclers rides and adventures across Kenya.",
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments From The Road."
        subtitle="Rides, events, training sessions, and community life — the club through a lens."
      />

      <section className="py-20 sm:py-28 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
