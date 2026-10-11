"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Card } from "./card";
import { CardHeader, SampleTag } from "./ui";

const INTERVAL_MS = 6000;

export function TestimonialsCard() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const count = testimonials.length;

  // One testimonial at a time, auto-advancing unless hovered/focused or reduced motion.
  useEffect(() => {
    if (paused || reduce || count < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, reduce, count]);

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);
  const t = testimonials[index];

  return (
    <Card className="col-span-12 lg:col-span-4" delay={0.08}>
      <div
        className="flex h-full flex-col"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        role="group"
        aria-roledescription="carousel"
        aria-label="Client feedback"
      >
        <CardHeader
          icon={MessageSquareQuote}
          title="Client feedback"
          right={
            <span className="font-mono text-xs text-soft">
              {index + 1}/{count}
            </span>
          }
        />

        <div className="relative mt-5 min-h-[170px] flex-1" aria-live={paused ? "polite" : "off"}>
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex h-full flex-col"
            >
              <blockquote className="text-[15px] leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-5">
                <span className="grid size-9 place-items-center rounded-full bg-brand/20 font-mono text-xs font-semibold text-brand-ink">
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    {t.name}
                    {t.placeholder && <SampleTag />}
                  </span>
                  <span className="block truncate text-xs text-soft">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-brand" : "w-1.5 bg-line hover:bg-soft"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid size-8 place-items-center rounded-lg border border-line text-soft transition-colors hover:border-brand hover:text-brand-ink"
            >
              <ChevronLeft className="size-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid size-8 place-items-center rounded-lg border border-line text-soft transition-colors hover:border-brand hover:text-brand-ink"
            >
              <ChevronRight className="size-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}