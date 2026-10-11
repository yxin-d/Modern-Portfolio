"use client";

import type { PointerEvent, ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** A glass card with a soft cursor-following glow and a gentle hover lift. */
export function Panel({
  id,
  className,
  children,
  delay = 0,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
}) {
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.section
      id={id}
      onPointerMove={onMove}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={cn(
        "panel glass group flex min-h-0 flex-col overflow-hidden rounded-2xl p-4 shadow-sm",
        className,
      )}
    >
      {children}
    </motion.section>
  );
}

export function PanelHeader({
  icon: Icon,
  title,
  action,
}: {
  icon: LucideIcon;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-3 flex shrink-0 items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-secondary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 dark:text-primary">
          <Icon className="h-3.5 w-3.5" aria-hidden />
        </span>
        <h2 className="font-display text-[15px] font-semibold tracking-tight">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export function ViewAll({ onClick, label = "View all" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex cursor-pointer items-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-secondary transition-colors hover:bg-primary/15 dark:text-primary"
    >
      {label}
      <ArrowUpRight className="h-3 w-3" aria-hidden />
    </button>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md bg-muted/60 px-1.5 py-1 font-mono text-[10.5px] leading-none text-foreground/80",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SampleTag() {
  return (
    <span className="rounded border border-dashed border-accent px-1.5 py-0.5 font-mono text-[9.5px] uppercase leading-none tracking-wider text-foreground/70">
      Sample
    </span>
  );
}

export function StatusDot() {
  return (
    <span className="relative flex h-2.5 w-2.5 shrink-0">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
    </span>
  );
}
