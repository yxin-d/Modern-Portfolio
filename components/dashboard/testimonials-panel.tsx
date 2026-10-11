"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/dashboard";
import { cn } from "@/lib/utils";
import { Panel, PanelHeader, SampleTag } from "./panel";

export function TestimonialsPanel({ className }: { className?: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const n = testimonials.length;

  useEffect(() => {
    if (paused || reduce || n < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 6000);
    return () => clearInterval(t);
  }, [paused, reduce, n]);

  const t = testimonials[i];
  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <Panel className={className} delay={0.25}>
      <div
        className="flex min-h-0 flex-1 flex-col"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <PanelHeader
          icon={Quote}
          title="Client feedback"
          action={
            <div className="flex items-center gap-0.5">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => go(-1)}
                className="cursor-pointer rounded-full p-1 text-muted-foreground hover:bg-primary/15 hover:text-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => go(1)}
                className="cursor-pointer rounded-full p-1 text-muted-foreground hover:bg-primary/15 hover:text-foreground"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          }
        />
        <div className="relative min-h-0 flex-1" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, x: reduce ? 0 : 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduce ? 0 : -16 }}
              transition={{ duration: 0.25 }}
              className="flex h-full flex-col justify-between gap-2"
            >
              <blockquote className="line-clamp-4 text-[13px] italic leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-2 text-xs">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 font-display text-[11px] font-bold">
                  {t.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-medium">{t.name}</span>
                  <span className="block truncate font-mono text-[10.5px] text-muted-foreground">
                    {t.role}
                  </span>
                </span>
                {t.placeholder && (
                  <span className="ml-auto">
                    <SampleTag />
                  </span>
                )}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-2 flex shrink-0 justify-center gap-1.5">
          {testimonials.map((_, d) => (
            <button
              key={d}
              type="button"
              aria-label={`Show feedback ${d + 1}`}
              onClick={() => setI(d)}
              className={cn(
                "h-1.5 cursor-pointer rounded-full transition-all",
                d === i ? "w-5 bg-primary" : "w-1.5 bg-muted",
              )}
            />
          ))}
        </div>
      </div>
    </Panel>
  );
}
