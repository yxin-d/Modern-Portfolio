"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Option<T extends string> = { value: T; label: string };

/** Pill switch with a sliding thumb, styled like the theme switcher. */
export function ModeSwitch<T extends string>({
  value,
  onChange,
  options,
  label,
  size = "md",
}: {
  value: T;
  onChange: (v: T) => void;
  options: Option<T>[];
  label: string;
  size?: "sm" | "md";
}) {
  const id = useId();
  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn(
        "relative inline-flex items-center rounded-full border border-border bg-muted/60 p-1",
        size === "sm" ? "h-8" : "h-10",
      )}
    >
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o.value)}
            className={cn(
              "relative z-10 h-full cursor-pointer rounded-full font-medium transition-colors",
              size === "sm" ? "px-3 text-xs" : "px-5 text-sm",
              active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {active && (
              <motion.span
                layoutId={`mode-thumb-${id}`}
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
                className="absolute inset-0 -z-10 rounded-full bg-surface shadow-sm"
              />
            )}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
