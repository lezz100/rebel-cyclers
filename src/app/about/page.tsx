import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Rebel Cyclers — a Kenyan cycling community founded on shared roads, honest effort, and the belief that cycling belongs to everyone.",
  openGraph: {
    title: "About | Rebel Cyclers",
    description:
      "Learn about Rebel Cyclers — a Kenyan cycling community founded on shared roads, honest effort, and the belief that cycling belongs to everyone.",
    url: "/about",
  },
  twitter: {
    title: "About | Rebel Cyclers",
    description: "Learn about Rebel Cyclers — a Kenyan cycling community founded on shared roads and honest effort.",
  },
};

const values = [
  {
    title: "Community First",
    description: "We ride together, not against each other. Every weekend is a chance to show up, connect, and move as one crew.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="8" r="4" fill="white" />
        <path d="M8 22c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="5.5" cy="10" r="2.8" fill="white" opacity="0.55" />
        <path d="M1 22c0-2.8 2-5 4.5-5" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.55" />
        <circle cx="22.5" cy="10" r="2.8" fill="white" opacity="0.55" />
        <path d="M27 22c0-2.8-2-5-4.5-5" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.55" />
      </svg>
    ),
  },
  {
    title: "Explore With Intention",
    description: "Our routes are chosen for the experience — the view from the escarpment, the gravel track no one else takes, the coffee at the turnaround.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="white" strokeWidth="1.8" />
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 14l-4-4 5-3z" fill="white" />
        <path d="M14 14l4 4-5 3z" fill="white" opacity="0.45" />
      </svg>
    ),
  },
  {
    title: "Progress At Your Pace",
    description: "From your first 20 km to a 200 km epic — every step of that journey matters and belongs here.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M3 22L8 14l5 5 5-8 7 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="14" r="1.8" fill="white" />
        <circle cx="13" cy="19" r="1.8" fill="white" />
        <circle cx="18" cy="11" r="1.8" fill="white" />
        <path d="M23 6l2.5-2.5M23 6h3M23 6v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const whatToExpect = [
  {
    label: "Graded rides",
    text: "Every ride is rated beginner, intermediate, advanced, or expert. Choose what suits you today.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="18" width="4" height="6" rx="1" fill="white" opacity="0.4" />
        <rect x="10" y="13" width="4" height="11" rx="1" fill="white" opacity="0.65" />
        <rect x="16" y="8" width="4" height="16" rx="1" fill="white" opacity="0.85" />
        <rect x="22" y="3" width="4" height="21" rx="1" fill="white" />
      </svg>
    ),
  },
  {
    label: "Led and guided",
    text: "A ride leader sets the pace and no one is dropped. Experienced riders mentor newer ones.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="8" r="4" fill="white" />
        <path d="M8 22c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M20 4l5 3-5 3V4z" fill="white" opacity="0.7" />
        <path d="M20 7h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
  {
    label: "What to bring",
    text: "Helmet (required), at least two water bottles, a charged phone, and appropriate cycling kit.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="5" y="10" width="18" height="14" rx="2" stroke="white" strokeWidth="1.8" />
        <path d="M10 10V8a4 4 0 018 0v2" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 16h10M9 20h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Meeting points",
    text: "Each ride listing includes a meeting location and start time. Arrive 10 minutes early.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3C10.1 3 7 6.1 7 10c0 5.3 7 15 7 15s7-9.7 7-15c0-3.9-3.1-7-7-7z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="14" cy="10" r="2.5" fill="white" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the club"
        title="Ride. Explore. Belong."
        subtitle="Rebel Cyclers is a Kenyan cycling community for riders of every level — built on shared roads, honest effort, and the belief that every ride is better together."
      />

      {/* Mission */}
      <section className="py-24 sm:py-32 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <FadeIn direction="left">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#161616] border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" aria-hidden="true" />
                <span className="text-white/60 text-xs font-bold tracking-widest uppercase">The club</span>
              </div>
              <h2 className="font-heading font-bold text-white leading-[0.92] tracking-tight mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>
                A community built on shared roads.
              </h2>
              <div className="space-y-4 text-white/60 text-base leading-relaxed">
                <p>Rebel Cyclers was founded in Kenya by riders who wanted something simple: a crew to ride with, routes worth the effort, and a community that takes care of its own.</p>
                <p>Whether you're clipping in for the first time or chasing a personal best on the Rift Valley escarpment, you'll find a place here.</p>
                <p>Our rides span the full ability range, from beginner-friendly Saturday social rides around Nairobi to demanding multi-hundred kilometre routes through East Africa's most spectacular terrain.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="bg-[#161616] rounded border border-white/5 p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B00]/6 rounded-full blur-3xl pointer-events-none" />
              <div className="inline-flex items-center gap-2 bg-[#0B0B0B] border border-white/8 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" aria-hidden="true" />
                <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Our mission</span>
              </div>
              <blockquote className="font-heading font-bold text-white leading-tight" style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)" }}>
                &ldquo;Make cycling accessible and meaningful for everyone — from first-timers to fast riders.&rdquo;
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 px-4 bg-[#161616]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-heading font-bold text-white uppercase text-center leading-[0.92] tracking-tight mb-14" style={{ fontSize: "clamp(1.9rem, 4.5vw, 4.2rem)" }}>
              What We Stand For
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="bg-[#0B0B0B] border border-white/8 rounded-lg p-8 flex flex-col h-full hover:border-white/15 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="text-[#FF6B00] text-xs font-bold tracking-widest uppercase">0{i + 1}</span>
                      <h3 className="font-heading text-xl font-bold text-white leading-tight tracking-wide mt-1">{v.title}</h3>
                    </div>
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-lg shadow-[#FF6B00]/20">
                      {v.icon}
                    </div>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 sm:py-28 px-4 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-[#161616] border border-white/10 rounded-full px-5 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00]" aria-hidden="true" />
                <span className="text-white/70 text-xs font-bold tracking-widest uppercase">New riders</span>
              </div>
              <h2 className="font-heading font-bold text-white uppercase leading-[0.92] tracking-tight" style={{ fontSize: "clamp(1.9rem, 4.5vw, 4.2rem)" }}>
                What To Expect<br />On Your First Ride
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whatToExpect.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div className="bg-[#161616] border border-white/8 rounded-lg p-8 flex flex-col h-full hover:border-white/15 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <h3 className="font-heading text-xl font-bold text-white leading-tight tracking-wide">{item.label}</h3>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-lg shadow-[#FF6B00]/20">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-[#161616] text-center">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-heading font-bold text-white uppercase leading-[0.92] tracking-tight mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}>
              Ready To <span className="text-[#FF6B00]">Ride?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Browse our upcoming rides or get in touch and we'll find the right one for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rides" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FF6B00] text-white font-semibold rounded hover:bg-[#e55f00] transition-colors">
                View Upcoming Rides
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded hover:border-white/50 hover:bg-white/5 transition-colors">
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
