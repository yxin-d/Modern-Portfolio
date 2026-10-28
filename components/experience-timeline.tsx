"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Tag } from "@/components/dashboard/panel";
import { experience, periodStart } from "@/lib/data";
import { cn } from "@/lib/utils";

// Oldest first, so progress reads left to right.
const ITEMS = [...experience].sort((a, b) => periodStart(a.period) - periodStart(b.period));

/** Horizontal timeline. Details stay hidden until you hover (mouse) or tap/click a role. */
export function ExperienceTimeline() {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const [pinned, setPinned] = React.useState<number | null>(null);

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-border via-primary/60 to-primary md:block"
      />
      <ol
        className="grid gap-6 md:grid-cols-[repeat(var(--n),minmax(0,1fr))] md:items-start md:gap-8"
        style={{ "--n": ITEMS.length } as React.CSSProperties}
      >
        {ITEMS.map((e, i) => {
          const open = hovered === i || pinned === i;
          const current = /present/i.test(e.period);
          return (
            <li
              key={`${e.role}-${e.org}`}
              className="relative"
              onPointerEnter={(ev) => ev.pointerType === "mouse" && setHovered(i)}
              onPointerLeave={(ev) => ev.pointerType === "mouse" && setHovered(null)}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute left-6 top-0 hidden h-[15px] w-[15px] rounded-full border-2 border-primary bg-background md:block",
                  current && "bg-primary",
                )}
              />
              <div className="md:pt-8">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setPinned((v) => (v === i ? null : i))}
                  className={cn(
                    "w-full cursor-pointer rounded-2xl border bg-surface p-6 text-left transition-colors",
                    open ? "border-primary" : "border-border hover:border-primary",
                  )}
                >
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-xl font-semibold">{e.org}</span>
                    <Tag>{e.type}</Tag>
                  </span>
                  <span className="mt-1 block font-mono text-xs text-muted-foreground">
                    {e.role} · {e.location}
                  </span>
                  <span className="mt-1 flex items-center justify-between gap-3 font-mono text-xs text-secondary dark:text-primary">
                    {e.period}
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <span className="hidden sm:inline">{open ? "Hide details" : "Details"}</span>
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
                        aria-hidden
                      />
                    </span>
                  </span>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.span
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="block overflow-hidden"
                      >
                        <span className="mt-4 block border-t border-border pt-4">
                          <span className="block space-y-1.5 text-sm text-muted-foreground">
                            {e.highlights.map((h) => (
                              <span key={h} className="flex gap-2">
                                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                <span>{h}</span>
                              </span>
                            ))}
                          </span>
                          <span className="mt-4 flex flex-wrap gap-1">
                            {e.tech.map((t) => (
                              <Tag key={t}>{t}</Tag>
                            ))}
                          </span>
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
