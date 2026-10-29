"use client";

import { motion, useReducedMotion, type TargetAndTransition } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

const initial: Record<Direction, TargetAndTransition> = {
  up:    { opacity: 0, y: 28 },
  left:  { opacity: 0, x: -28 },
  right: { opacity: 0, x: 28 },
  none:  { opacity: 0 },
};

const visible: TargetAndTransition = { opacity: 1, y: 0, x: 0 };

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduce ? undefined : initial[direction]}
      whileInView={shouldReduce ? undefined : visible}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
