"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const badges = [
  { label: "COMMUNITY", delay: 0.5 },
  { label: "GRAVEL", delay: 0.62 },
  { label: "ENDURANCE", delay: 0.74 },
  { label: "EXPLORE KENYA", delay: 0.86 },
];

// Staggered badge positions within the right panel
const badgePositions = [
  "top-[16%] left-[12%]",
  "top-[34%] left-[38%]",
  "top-[54%] left-[8%]",
  "top-[70%] left-[30%]",
];

export default function HeroSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative bg-[#0B0B0B] overflow-hidden min-h-screen flex flex-col lg:flex-row">

      {/* ─── LEFT PANEL — text ─── */}
      <div className="relative z-10 flex flex-col justify-center lg:w-[56%] px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 pb-14 lg:py-0">

        {/* Eyebrow */}
        <motion.p
          className="text-[#FF6B00] text-xs font-semibold tracking-[0.22em] uppercase mb-6"
          initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0 }}
        >
          Rebel Cyclers — Kenya
        </motion.p>

        {/* Headline — fills the panel */}
        <motion.h1
          className="font-heading font-bold text-white leading-[0.88] tracking-tight mb-8"
          style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
          initial={shouldReduce ? undefined : { opacity: 0, y: 24 }}
          animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ride
          <br />
          Together.
          <br />
          <span className="text-[#FF6B00]">Explore</span>
          <br />
          Further.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-white/55 text-base sm:text-lg max-w-sm leading-relaxed mb-10"
          initial={shouldReduce ? undefined : { opacity: 0, y: 20 }}
          animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
        >
          A cycling community for all levels — united by Kenya's roads, the
          climb, and the stories we collect along the way.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
        >
          <Link
            href="/rides"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#FF6B00] text-white font-semibold rounded hover:bg-[#e55f00] transition-colors"
          >
            View Upcoming Rides
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white font-semibold rounded hover:border-white/50 hover:bg-white/5 transition-colors"
          >
            About the Club
          </Link>
        </motion.div>

        {/* Scroll hint — desktop only */}
        <motion.div
          className="hidden lg:flex items-center gap-3 mt-16"
          aria-hidden="true"
          initial={shouldReduce ? undefined : { opacity: 0 }}
          animate={shouldReduce ? undefined : { opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <div className="w-8 h-px bg-white/20" />
          <span className="text-white/25 text-[10px] font-mono uppercase tracking-widest">
            scroll to explore
          </span>
        </motion.div>
      </div>

      {/* ─── RIGHT PANEL — visual ─── */}
      <motion.div
        className="relative lg:w-[44%] min-h-[65vw] sm:min-h-[55vw] lg:min-h-screen overflow-hidden"
        initial={shouldReduce ? undefined : { opacity: 0 }}
        animate={shouldReduce ? undefined : { opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        {/* Photo */}
        <Image
          src="https://images.unsplash.com/photo-1510766461678-4a8420db04d2?w=1200&q=80&auto=format&fit=crop"
          alt="Group of cyclists riding together on an open road"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 44vw"
          className="object-cover object-center"
        />

        {/* Dark gradient overlay — keeps text readable on left, dims right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 via-transparent to-transparent" />

        {/* Thin left border */}
        <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent" />

        {/* Floating badge pills */}
        {badges.map((badge, i) => (
          <motion.div
            key={badge.label}
            className={`absolute ${badgePositions[i]} flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#0B0B0B] rounded-full px-4 py-2 shadow-xl shadow-black/40`}
            initial={shouldReduce ? undefined : { opacity: 0, scale: 0.85, y: 8 }}
            animate={shouldReduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, delay: badge.delay }}
          >
            <span
              className="w-2 h-2 rounded-full bg-[#FF6B00] flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-[11px] font-bold tracking-widest">
              {badge.label}
            </span>
          </motion.div>
        ))}

        {/* Corner label */}
        <div className="absolute bottom-6 right-5 text-white/40 text-[10px] font-mono uppercase tracking-widest" aria-hidden="true">
          Nairobi, Kenya
        </div>
      </motion.div>
    </section>
  );
}
