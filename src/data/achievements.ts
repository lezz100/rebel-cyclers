import type { Achievement } from "@/types";

// Only verified club achievements are listed here.
// Do not add unconfirmed statistics, results, or milestones.
export const achievements: Achievement[] = [
  {
    id: "a1",
    title: "Club Founded",
    description: "Rebel Cyclers established as a community cycling club.",
    date: "2024-01-01",
    category: "milestone",
    verified: true,
  },
];
