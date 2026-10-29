import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ClubIntroSection from "@/components/home/ClubIntroSection";
import ClubFeaturesSection from "@/components/home/ClubFeaturesSection";
import FeaturedRidesSection from "@/components/home/FeaturedRidesSection";
import CommunitySection from "@/components/home/CommunitySection";
import JoinSection from "@/components/home/JoinSection";

export const metadata: Metadata = {
  title: "Rebel Cyclers — Ride Together. Explore Further.",
  description:
    "A Kenyan cycling community for riders of every level — built on shared roads, honest effort, and the belief that every ride is better together.",
  openGraph: {
    title: "Rebel Cyclers — Ride Together. Explore Further.",
    description:
      "A Kenyan cycling community for riders of every level. Weekend rides, gravel routes, social rides across Nairobi and beyond.",
    url: "/",
  },
  twitter: {
    title: "Rebel Cyclers — Ride Together. Explore Further.",
    description:
      "A Kenyan cycling community for riders of every level. Weekend rides, gravel routes, social rides across Nairobi and beyond.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClubIntroSection />
      <ClubFeaturesSection />
      <FeaturedRidesSection />
      <CommunitySection />
      <JoinSection />
    </>
  );
}
