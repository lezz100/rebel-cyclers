import type { Ride } from "@/types";

export const rides: Ride[] = [
  {
    slug: "rift-valley-century",
    title: "Rift Valley Century",
    distance: 160,
    elevation: 2400,
    difficulty: "advanced",
    date: "2026-11-15",
    location: "Naivasha, Kenya",
    description:
      "A demanding loop through the Great Rift Valley escarpment. Sweeping descents reward every hard-earned climb on this flagship club ride.",
    image: "https://images.unsplash.com/photo-1753516231269-2a676b28f6fc?w=800&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "ngong-hills-gravel",
    title: "Ngong Hills Gravel",
    distance: 75,
    elevation: 1200,
    difficulty: "intermediate",
    date: "2026-11-01",
    location: "Ngong, Kenya",
    description:
      "Mixed-surface adventure across the rolling Ngong Hills with panoramic views of the Rift Valley and Nairobi.",
    image: "https://images.unsplash.com/photo-1662454456068-52d3282a5bfe?w=800&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "saturday-social-ride",
    title: "Saturday Social Ride",
    distance: 40,
    elevation: 400,
    difficulty: "beginner",
    date: "2026-10-26",
    location: "Nairobi, Kenya",
    description:
      "Our welcoming weekly ride for all levels. No one gets left behind — great coffee at the turnaround.",
    image: "https://images.unsplash.com/photo-1681295692638-97ace05f56b4?w=800&q=80&auto=format&fit=crop",
    featured: true,
  },
];

export function getRideBySlug(slug: string): Ride | undefined {
  return rides.find((r) => r.slug === slug);
}
