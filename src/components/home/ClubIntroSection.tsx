"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

// Placeholder — replace each value with verified club figures once available.
// Format: "500+" | "120+" etc. Set to null to hide that stat until confirmed.
const stats: { value: string | null; label: string }[] = [
  { value: null, label: "Active Members" },
  { value: null, label: "Group Rides" },
  { value: null, label: "Events Hosted" },
];

const pillars = [
  {
    title: "Community First",
    description: "No one gets left behind — every level rides together.",
  },
  {
    title: "Kenya's Best Routes",
    description: "Rift Valley, Ngong Hills, Nairobi city loops and beyond.",
  },
  {
    title: "All Abilities",
    description: "Graded from beginner to expert. Start where you are.",
  },
];

export default function ClubIntroSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-20 sm:py-28 px-4 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">

        {/* ── Pill badge ── */}
        <motion.div
          className="flex justify-center mb-8"
          initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#161616] border border-white/10 rounded-full px-5 py-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] flex-shrink-0" aria-hidden="true" />
            <span className="text-white/70 text-xs font-bold tracking-widest uppercase">About Us</span>
          </div>
        </motion.div>

        {/* ── Big centered heading ── */}
        <motion.h2
          className="font-heading font-bold text-white text-center uppercase leading-[0.92] tracking-tight mb-14"
          style={{ fontSize: "clamp(1.9rem, 4.2vw, 4rem)" }}
          initial={shouldReduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Bringing Riders Together Through
          <br />
          Passion, Terrain &amp; Community.
        </motion.h2>

        {/* ── Split: visual left / text right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">

          {/* Visual panel */}
          <motion.div
            className="relative rounded overflow-hidden min-h-[320px] sm:min-h-[400px] bg-[#161616]"
            initial={shouldReduce ? undefined : { opacity: 0, x: -24 }}
            whileInView={shouldReduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1600403477955-2b8c2cfab221?w=900&q=80&auto=format&fit=crop"
              alt="Group of cyclists on a gravel road in Kenya"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            {/* Subtle overlay to blend with dark palette */}
            <div className="absolute inset-0 bg-[#0B0B0B]/35" />

            {/* Corner label */}
            <div className="absolute top-4 left-5 text-white/50 text-[10px] font-mono uppercase tracking-widest" aria-hidden="true">
              Nairobi, Kenya
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            className="flex flex-col justify-center"
            initial={shouldReduce ? undefined : { opacity: 0, x: 24 }}
            whileInView={shouldReduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            <div className="space-y-5 text-white/60 text-base leading-relaxed mb-8">
              <p>
                Rebel Cyclers is a Kenyan cycling club built for riders who
                believe every journey is better when shared. From casual
                Saturday social rides to demanding Rift Valley escarpments, we
                bring cyclists together to grow, challenge limits, and enjoy
                the road as one.
              </p>
              <p>
                We welcome riders of all levels and disciplines — road,
                gravel, and urban cycling — united by passion, honest effort,
                and a strong sense of community. No politics. No gatekeeping.
                Just the road ahead.
              </p>
            </div>

            <Link
              href="/about"
              className="self-start inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF6B00] text-white font-semibold rounded hover:bg-[#e55f00] transition-colors"
            >
              Learn More
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Stats row */}
            <div className="border-t border-white/8 mt-10 pt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={shouldReduce ? undefined : { opacity: 0, y: 12 }}
                  whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <p className={`font-heading font-bold leading-none mb-1.5 ${stat.value ? "text-white text-4xl sm:text-5xl" : "text-white/20 text-3xl"}`}>
                    {stat.value ?? "—"}
                  </p>
                  <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Three pillars strip ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded overflow-hidden border border-white/5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-[#161616] px-7 py-6"
              initial={shouldReduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-[#FF6B00] text-xs font-bold tracking-widest uppercase mb-3">
                0{i + 1}
              </div>
              <h3 className="font-heading text-base font-bold text-white mb-1.5">
                {p.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
