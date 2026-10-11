"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import SpotlightCard from "@/components/SpotlightCard";

// Point the React Bits card at our theme tokens so it follows light/dark.
const SURFACE = {
  "--spotlight-card-surface": "var(--surface)",
  "--spotlight-card-border": "var(--line)",
  "--spotlight-card-shadow": "var(--shadow)",
} as CSSProperties;

type CardProps = {
  children: ReactNode;
  /** Grid placement, e.g. "col-span-12 lg:col-span-4" */
  className?: string;
  /** Extra classes for the inner card (padding, outline…) */
  innerClassName?: string;
  /** Entrance delay in seconds, for staggering */
  delay?: number;
};

export function Card({ children, className = "", innerClassName = "", delay = 0 }: CardProps) {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  return (
    <motion.div
      className={`group ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <SpotlightCard
        theme={dark ? "dark" : "light"}
        spotlightColor="#6EC5D2"
        intensity={dark ? 0.2 : 0.6}
        borderGlow={0.9}
        spotlightSize={260}
        className={`h-full rounded-2xl! p-5! ${innerClassName}`}
        style={SURFACE}
      >
        {children}
      </SpotlightCard>
    </motion.div>
  );
}