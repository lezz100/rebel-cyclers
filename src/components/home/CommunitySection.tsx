"use client";

import { motion, useReducedMotion } from "motion/react";
import SectionHeader from "@/components/ui/SectionHeader";

const points = [
  {
    label: "Weekly Saturday rides",
    text: "A no-drop social ride every weekend. Show up, clip in — no commitment required.",
  },
  {
    label: "Graded for every level",
    text: "Every route is clearly rated. Know what you're in for before you roll out.",
  },
  {
    label: "Free to join",
    text: "No membership fee. Just reach out, come to a ride, and you're part of the crew.",
  },
];

export default function CommunitySection() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 px-4 bg-[#0B0B0B] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: -32 }}
            whileInView={shouldReduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionHeader
              eyebrow="The Community"
              title="Built for every cyclist."
              subtitle="Whether you've never clipped in before or you chase KOMs on weekends — you'll find your place here."
            />
          </motion.div>

          {/* Points column */}
          <div className="flex flex-col gap-5">
            {points.map((point, i) => (
              <motion.div
                key={point.label}
                className="flex gap-5 items-start"
                initial={shouldReduce ? {} : { opacity: 0, x: 24 }}
                whileInView={shouldReduce ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              >
                {/* Accent line */}
                <div className="flex-shrink-0 mt-1.5 w-5 h-px bg-[#FF6B00]" />
                <div>
                  <p className="text-white font-semibold text-sm mb-1">
                    {point.label}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
