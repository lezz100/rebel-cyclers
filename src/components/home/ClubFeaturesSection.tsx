"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const features = [
  {
    title: "GROUP RIDES",
    description:
      "From easy social loops to epic escarpment challenges. Weekly rides for every level, every weekend — no one gets dropped.",
    href: "/rides",
    cta: "VIEW RIDES",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        {/* Cyclist + group dots */}
        <circle cx="14" cy="7" r="3" fill="white" />
        <path d="M9 14c0-2.8 2.2-5 5-5s5 2.2 5 5v4H9v-4z" fill="white" />
        <circle cx="6" cy="9" r="2.2" fill="white" opacity="0.6" />
        <path d="M3 16c0-1.7 1.3-3 3-3s3 1.3 3 3v2H3v-2z" fill="white" opacity="0.6" />
        <circle cx="22" cy="9" r="2.2" fill="white" opacity="0.6" />
        <path d="M19 16c0-1.7 1.3-3 3-3s3 1.3 3 3v2h-6v-2z" fill="white" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "TRAINING & EVENTS",
    description:
      "Structured sessions, fitness workshops, and competitive events throughout the year to sharpen your riding and push your limits.",
    href: "/achievements",
    cta: "SEE EVENTS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        {/* Route / trophy */}
        <path d="M5 22L10 14l5 4 5-8 3 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="14" r="1.5" fill="white" />
        <circle cx="15" cy="18" r="1.5" fill="white" />
        <circle cx="20" cy="10" r="1.5" fill="white" />
        <circle cx="23" cy="14" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    title: "BIKE SUPPORT",
    description:
      "Pre-ride mechanical checks, tyre-change clinics, and a community that always has your back on and off the road.",
    href: "/about",
    cta: "LEARN MORE",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        {/* Wheel + wrench */}
        <circle cx="14" cy="14" r="9" stroke="white" strokeWidth="1.8" />
        <circle cx="14" cy="14" r="3.5" stroke="white" strokeWidth="1.5" />
        <line x1="14" y1="5" x2="14" y2="10.5" stroke="white" strokeWidth="1.5" />
        <line x1="14" y1="17.5" x2="14" y2="23" stroke="white" strokeWidth="1.5" />
        <line x1="5" y1="14" x2="10.5" y2="14" stroke="white" strokeWidth="1.5" />
        <line x1="17.5" y1="14" x2="23" y2="14" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ClubFeaturesSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-20 sm:py-28 px-4 bg-[#161616]">
      <div className="max-w-7xl mx-auto">

        {/* Big heading */}
        <motion.h2
          className="font-heading font-bold text-white uppercase text-center leading-[0.92] tracking-tight mb-14 sm:mb-20"
          style={{ fontSize: "clamp(2rem, 5vw, 4.8rem)" }}
          initial={shouldReduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          Everything You Need To
          <br />
          Ride Better Together
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group bg-[#0B0B0B] border border-white/8 rounded-lg p-8 flex flex-col hover:border-white/15 transition-colors"
              initial={shouldReduce ? undefined : { opacity: 0, y: 28 }}
              whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              {/* Title + icon row */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="font-heading text-xl font-bold text-white leading-tight tracking-wide">
                  {feature.title}
                </h3>
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-lg shadow-[#FF6B00]/20">
                  {feature.icon}
                </div>
              </div>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed flex-1 mb-8">
                {feature.description}
              </p>

              {/* Pill CTA */}
              <Link
                href={feature.href}
                className="self-start inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold tracking-widest uppercase hover:bg-[#FF6B00] hover:text-white hover:border-[#FF6B00] transition-all"
              >
                {feature.cta}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
