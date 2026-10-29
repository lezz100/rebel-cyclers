import type { GalleryImage } from "@/types";

// Placeholder images from picsum.photos — swap src values for real club photography.
export const galleryImages: GalleryImage[] = [
  // ── Rides ────────────────────────────────────────────────────────────────
  {
    id: "g-ride-1",
    src: "https://images.unsplash.com/photo-1510766461678-4a8420db04d2?w=1200&q=80&auto=format&fit=crop",
    alt: "Group of cyclists riding together on an open road",
    caption: "Saturday social ride — Nairobi outskirts",
    category: "rides",
    width: 1200,
    height: 800,
  },
  {
    id: "g-ride-2",
    src: "https://images.unsplash.com/photo-1662454456068-52d3282a5bfe?w=800&q=80&auto=format&fit=crop",
    alt: "Cyclists on a gravel road with rolling hills",
    caption: "Ngong Hills gravel loop",
    category: "rides",
    width: 800,
    height: 1100,
  },
  {
    id: "g-ride-3",
    src: "https://images.unsplash.com/photo-1753516231269-2a676b28f6fc?w=1400&q=80&auto=format&fit=crop",
    alt: "Cyclists on Rift Valley escarpment descent",
    caption: "Rift Valley Century — the big descent",
    category: "rides",
    width: 1400,
    height: 900,
  },
  {
    id: "g-ride-4",
    src: "https://images.unsplash.com/photo-1681295692638-97ace05f56b4?w=900&q=80&auto=format&fit=crop",
    alt: "Lone cyclist on a scenic road at sunrise",
    caption: "Early morning roll — Kiambu road",
    category: "rides",
    width: 900,
    height: 1200,
  },

  // ── Events ────────────────────────────────────────────────────────────────
  {
    id: "g-event-1",
    src: "https://picsum.photos/seed/rc-event-1/1200/800",
    alt: "Club event start line with cyclists gathered",
    caption: "Annual century ride — start line",
    category: "events",
    width: 1200,
    height: 800,
  },
  {
    id: "g-event-2",
    src: "https://picsum.photos/seed/rc-event-2/800/1100",
    alt: "Award ceremony at club annual event",
    caption: "Year-end celebration and awards",
    category: "events",
    width: 800,
    height: 1100,
  },
  {
    id: "g-event-3",
    src: "https://picsum.photos/seed/rc-event-3/1300/870",
    alt: "Group photo at major club event",
    caption: "Club Day 2025 — full crew",
    category: "events",
    width: 1300,
    height: 870,
  },

  // ── Training ─────────────────────────────────────────────────────────────
  {
    id: "g-train-1",
    src: "https://images.unsplash.com/photo-1600403477955-2b8c2cfab221?w=1200&q=80&auto=format&fit=crop",
    alt: "Cyclists in a pace line during training",
    caption: "Pace line session — Thika road",
    category: "training",
    width: 1200,
    height: 900,
  },
  {
    id: "g-train-2",
    src: "https://picsum.photos/seed/rc-train-2/800/1200",
    alt: "Cyclist climbing a steep training hill",
    caption: "Hill repeats — Ngong road",
    category: "training",
    width: 800,
    height: 1200,
  },
  {
    id: "g-train-3",
    src: "https://picsum.photos/seed/rc-train-3/1200/800",
    alt: "Coaching session with club riders",
    caption: "Technique clinic with the ride leaders",
    category: "training",
    width: 1200,
    height: 800,
  },

  // ── Community ─────────────────────────────────────────────────────────────
  {
    id: "g-comm-1",
    src: "https://picsum.photos/seed/rc-comm-1/1200/800",
    alt: "Cyclists laughing and chatting over coffee post-ride",
    caption: "Post-ride coffee — our favourite part",
    category: "community",
    width: 1200,
    height: 800,
  },
  {
    id: "g-comm-2",
    src: "https://picsum.photos/seed/rc-comm-2/900/1200",
    alt: "Club members at a community cycling meetup",
    caption: "Community meetup — Uhuru Park",
    category: "community",
    width: 900,
    height: 1200,
  },
  {
    id: "g-comm-3",
    src: "https://picsum.photos/seed/rc-comm-3/1400/800",
    alt: "Riders gathered for pre-ride briefing",
    caption: "Pre-ride briefing — safety first",
    category: "community",
    width: 1400,
    height: 800,
  },
];

export const galleryCategories = [
  { value: "all", label: "All" },
  { value: "rides", label: "Rides" },
  { value: "events", label: "Events" },
  { value: "training", label: "Training" },
  { value: "community", label: "Community" },
] as const;
