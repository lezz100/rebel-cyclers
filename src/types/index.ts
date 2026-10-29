export type Difficulty = "beginner" | "intermediate" | "advanced" | "expert";

export interface Ride {
  slug: string;
  title: string;
  distance: number; // km
  elevation: number; // m
  difficulty: Difficulty;
  date: string; // ISO date string
  location: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  featured?: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: "rides" | "events" | "training" | "community";
  width: number;
  height: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "event" | "record" | "milestone" | "award";
  verified: boolean;
}
