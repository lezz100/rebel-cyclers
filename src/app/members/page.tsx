import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import MemberCard from "@/components/members/MemberCard";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Meet the Rebel Cyclers crew — riders of all levels from across Kenya who show up every weekend and make the club what it is.",
  openGraph: {
    title: "Members | Rebel Cyclers",
    description:
      "Meet the Rebel Cyclers crew — riders of all levels from across Kenya who show up every weekend and make the club what it is.",
    url: "/members",
  },
  twitter: {
    title: "Members | Rebel Cyclers",
    description: "Meet the Rebel Cyclers crew — riders of all levels from across Kenya.",
  },
};

const allPlaceholders = members.every((m) => m.id.startsWith("placeholder"));

export default function MembersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our members"
        title="Meet the Crew."
        subtitle="The riders who lead, organise, and show up every weekend. Real profiles will appear here once approved."
      />

      <section className="py-20 sm:py-28 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">

          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <h2
                className="font-heading font-bold text-white uppercase leading-[0.92] tracking-tight"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
              >
                The People Who
                <br />
                Make It Happen
              </h2>
              <Link
                href="/contact"
                className="self-start sm:self-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold tracking-widest uppercase hover:bg-[#FF6B00] hover:text-white hover:border-[#FF6B00] transition-all whitespace-nowrap"
              >
                Join the crew
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          {allPlaceholders && (
            <FadeIn delay={0.1}>
              <div className="bg-[#161616] border border-white/8 rounded-lg px-6 py-5 mb-10 flex gap-4 items-start max-w-2xl">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/25 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="6.5" stroke="#FF6B00" strokeWidth="1.3" />
                    <path d="M8 5.5v3.5M8 10.5v1" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold mb-1">Profiles pending</p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    These are placeholder profiles. Real member profiles require name, role, bio, and photo approval from each member. See{" "}
                    <code className="text-white/70 text-xs bg-white/5 px-1.5 py-0.5 rounded">src/data/members.ts</code>.
                  </p>
                </div>
              </div>
            </FadeIn>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {members.map((member, i) => (
              <MemberCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
