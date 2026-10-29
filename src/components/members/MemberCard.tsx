"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Member } from "@/types";

interface MemberCardProps {
  member: Member;
  index?: number;
}

export default function MemberCard({ member, index = 0 }: MemberCardProps) {
  const shouldReduce = useReducedMotion();
  const [imgError, setImgError] = useState(false);
  const isPlaceholder = member.id.startsWith("placeholder");

  return (
    <motion.article
      className="group bg-[#161616] border border-white/8 rounded-lg overflow-hidden flex flex-col hover:border-white/15 transition-colors"
      initial={shouldReduce ? undefined : { opacity: 0, y: 28 }}
      whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      {/* Photo area */}
      <div className="relative h-64 bg-[#0B0B0B] flex-shrink-0 overflow-hidden">
        {!imgError ? (
          <>
            <Image
              src={member.image}
              alt={isPlaceholder ? `Placeholder photo for ${member.role}` : member.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/10 to-transparent" />
          </>
        ) : (
          /* Fallback avatar */
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0B]">
            <div className="w-24 h-24 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/25 flex items-center justify-center">
              <span className="text-[#FF6B00] text-4xl font-bold font-heading" aria-hidden="true">
                {member.name[0]}
              </span>
            </div>
          </div>
        )}

        {/* Role badge — bottom-left of photo */}
        <div className="absolute bottom-3 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B00] text-white text-[11px] font-bold tracking-widest uppercase shadow-lg">
            {member.role}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-lg font-bold text-white mb-3 leading-tight">
          {member.name}
        </h3>

        <p className={`text-sm leading-relaxed flex-1 ${isPlaceholder ? "text-white/30 italic" : "text-white/60"}`}>
          {member.bio}
        </p>

      </div>
    </motion.article>
  );
}
