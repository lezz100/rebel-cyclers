import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";
import { achievements } from "@/data/achievements";
import type { Achievement } from "@/types";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Verified club milestones, events, records, and awards — the Rebel Cyclers story told through the moments that mattered.",
  openGraph: {
    title: "Achievements | Rebel Cyclers",
    description:
      "Verified club milestones, events, records, and awards — the Rebel Cyclers story told through the moments that mattered.",
    url: "/achievements",
  },
  twitter: {
    title: "Achievements | Rebel Cyclers",
    description: "Verified club milestones, events, records, and awards from Rebel Cyclers.",
  },
};

type CategoryKey = Achievement["category"];

const categoryConfig: Record<CategoryKey, { label: string; badge: string; dot: string; description: string; icon: ReactNode }> = {
  milestone: {
    label: "Milestone",
    badge: "text-[#FF6B00] bg-[#FF6B00]/10 border border-[#FF6B00]/20",
    dot: "bg-[#FF6B00]",
    description: "Founding moments, membership goals, and key events in the club's history.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M6 4v16" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 4l14 5-14 5" fill="white" opacity="0.85" />
      </svg>
    ),
  },
  event: {
    label: "Event",
    badge: "text-indigo-400 bg-indigo-400/10 border border-indigo-400/20",
    dot: "bg-indigo-400",
    description: "Club rides, group events, and community gatherings we've organised or attended.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="7" width="20" height="17" rx="2" stroke="white" strokeWidth="1.8" />
        <path d="M4 13h20" stroke="white" strokeWidth="1.5" />
        <path d="M10 4v5M18 4v5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="9" y="17" width="4" height="3" rx="0.5" fill="white" opacity="0.7" />
      </svg>
    ),
  },
  record: {
    label: "Record",
    badge: "text-amber-400 bg-amber-400/10 border border-amber-400/20",
    dot: "bg-amber-400",
    description: "Club distance, elevation, and time records set on our routes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="15" r="9" stroke="white" strokeWidth="1.8" />
        <path d="M14 15V9" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 15l4-3" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 4h8M14 4v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  award: {
    label: "Award",
    badge: "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20",
    dot: "bg-emerald-400",
    description: "Recognition, podiums, and awards earned by club members and the club as a whole.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4l2.5 5 5.5.8-4 3.9.9 5.5L14 16.8l-4.9 2.4.9-5.5-4-3.9 5.5-.8z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M10 22h8M14 22v2" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
};

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));
}

function formatYear(iso: string): string {
  return new Date(iso).getFullYear().toString();
}

const verified = achievements.filter((a) => a.verified);
const categoryOrder: CategoryKey[] = ["milestone", "event", "record", "award"];

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Achievements"
        title="Club Milestones."
        subtitle="Verified club events, records, and milestones — only confirmed facts are listed here."
      />

      {/* Category overview */}
      <section className="py-20 sm:py-28 px-4 bg-[#161616]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-heading font-bold text-white uppercase text-center leading-[0.92] tracking-tight mb-14" style={{ fontSize: "clamp(1.9rem, 4.5vw, 4.2rem)" }}>
              How We Track<br />Our Journey
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categoryOrder.map((key, i) => {
              const cat = categoryConfig[key];
              return (
                <FadeIn key={key} delay={i * 0.1}>
                  <div className="bg-[#0B0B0B] border border-white/8 rounded-lg p-7 flex flex-col h-full hover:border-white/15 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${cat.badge}`}>{cat.label}</span>
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-lg shadow-[#FF6B00]/20">
                        {cat.icon}
                      </div>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{cat.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 px-4 bg-[#0B0B0B]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#161616] border border-white/10 rounded-full px-5 py-2 mb-12">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" aria-hidden="true" />
              <span className="text-white/70 text-xs font-bold tracking-widest uppercase">Timeline</span>
            </div>
          </FadeIn>

          {verified.length === 0 ? (
            <p className="text-white/30 text-sm font-mono text-center py-16">No verified achievements yet.</p>
          ) : (
            <ol className="relative">
              <div className="absolute left-[1.375rem] top-3 bottom-3 w-px bg-white/8" aria-hidden="true" />
              {verified.map((achievement, i) => {
                const cat = categoryConfig[achievement.category];
                return (
                  <FadeIn key={achievement.id} delay={Math.min(i * 0.08, 0.4)}>
                    <li className="relative flex gap-6 pb-12 last:pb-0">
                      <div className="relative z-10 flex-shrink-0 w-11 flex items-start justify-center pt-0.5">
                        <div className={`w-3 h-3 rounded-full ring-4 ring-[#0B0B0B] ${cat.dot}`} aria-hidden="true" />
                      </div>
                      <div className="flex-1 bg-[#161616] rounded border border-white/8 p-6 -mt-1 hover:border-white/15 transition-colors">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cat.badge}`}>{cat.label}</span>
                          <time dateTime={achievement.date} className="text-white/40 text-xs">{formatDate(achievement.date)}</time>
                        </div>
                        <h2 className="font-heading text-lg font-bold text-white mb-2">{achievement.title}</h2>
                        <p className="text-white/60 text-sm leading-relaxed">{achievement.description}</p>
                      </div>
                    </li>
                  </FadeIn>
                );
              })}
            </ol>
          )}

          {verified.length > 0 && (
            <p className="mt-12 text-white/20 text-xs font-mono text-center">
              Club founded {formatYear(verified[0].date)} — more milestones will be added as they are verified.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
