"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Ride } from "@/types";

type DifficultyKey = Ride["difficulty"];

const difficultyConfig: Record<DifficultyKey, { label: string; badge: string }> = {
  beginner: {
    label: "Beginner",
    badge: "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 backdrop-blur-sm",
  },
  intermediate: {
    label: "Intermediate",
    badge: "text-amber-400 bg-amber-400/10 border border-amber-400/20 backdrop-blur-sm",
  },
  advanced: {
    label: "Advanced",
    badge: "text-[#FF6B00] bg-[#FF6B00]/10 border border-[#FF6B00]/20 backdrop-blur-sm",
  },
  expert: {
    label: "Expert",
    badge: "text-red-400 bg-red-400/10 border border-red-400/20 backdrop-blur-sm",
  },
};

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

interface RideCardProps {
  ride: Ride;
  index?: number;
}

export default function RideCard({ ride, index = 0 }: RideCardProps) {
  const shouldReduce = useReducedMotion();
  const config = difficultyConfig[ride.difficulty];

  return (
    <motion.article
      className="group bg-[#161616] rounded border border-white/5 overflow-hidden flex flex-col hover:border-white/10 transition-colors"
      initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={shouldReduce ? {} : { scale: 1.015 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0 bg-[#0B0B0B]">
        <Image
          src={ride.image}
          alt={ride.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/70 to-transparent" />
        {/* Difficulty badge */}
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${config.badge}`}>
          {config.label}
        </span>
        {/* Date */}
        <time
          dateTime={ride.date}
          className="absolute bottom-3 right-3 text-white/60 text-xs font-mono"
        >
          {formatDate(ride.date)}
        </time>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-heading text-lg font-bold text-white mb-2 leading-tight group-hover:text-white/90 transition-colors">
          {ride.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1 line-clamp-2">
          {ride.description}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-5 mb-5 text-sm">
          <span className="flex items-center gap-1.5 text-white/60">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 5v3.5l2 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {ride.distance} km
          </span>
          <span className="flex items-center gap-1.5 text-white/60">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 13L6 5l4 4 3-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {ride.elevation.toLocaleString()} m
          </span>
        </div>

        {/* CTA */}
        <Link
          href={`/rides/${ride.slug}`}
          className="inline-flex items-center gap-1.5 text-[#FF6B00] text-sm font-semibold hover:gap-3 transition-all"
        >
          View ride details
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}
