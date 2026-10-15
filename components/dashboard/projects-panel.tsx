"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, FolderKanban } from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Panel, PanelHeader, Tag, ViewAll } from "./panel";

const DOT: Record<string, string> = {
  "Full-Stack": "bg-primary",
  "IT & Infrastructure": "bg-accent",
  Frontend: "bg-lavender",
};

const featured = projects;

export function ProjectsPanel({ className }: { className?: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const n = featured.length;

  useEffect(() => {
    if (paused || reduce || n < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 7000);
    return () => clearInterval(t);
  }, [paused, reduce, n]);

  const p = featured[i];
  const go = (d: number) => setI((v) => (v + d + n) % n);
  const arrow = "cursor-pointer rounded-full p-1 text-muted-foreground hover:bg-primary/15 hover:text-foreground";

  return (
    <Panel className={className} delay={0.05}>
      <div
        className="flex min-h-0 flex-1 flex-col"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <PanelHeader
          icon={FolderKanban}
          title="Projects"
          action={
            <div className="flex items-center gap-1">
              <button type="button" aria-label="Previous project" onClick={() => go(-1)} className={arrow}>
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button type="button" aria-label="Next project" onClick={() => go(1)} className={arrow}>
                <ChevronRight className="h-4 w-4" />
              </button>
              <ViewAll href="/projects" />
            </div>
          }
        />
        <div className="relative min-h-0 flex-1" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, x: reduce ? 0 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduce ? 0 : -20 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <Link
                href={`/projects/${p.slug}`}
                className="tile flex h-full w-full cursor-pointer flex-col rounded-xl p-4 text-left"
              >
              <span className="flex items-center justify-between gap-2 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className={cn("h-1.5 w-1.5 rounded-full", DOT[p.category] ?? "bg-muted")} />
                  {p.category}
                </span>
                <span className="font-mono">{p.year}</span>
              </span>
              <span className="mt-2 flex items-start justify-between gap-3">
                <span className="font-display text-lg font-semibold leading-snug">{p.title}</span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
              </span>
              <span className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
                {p.summary}
              </span>
              <span className="mt-auto flex flex-wrap gap-1 pt-3 [@media(max-height:820px)]:hidden">
                {p.tags.slice(0, 5).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-2 flex shrink-0 justify-center gap-1.5">
          {featured.map((f, d) => (
            <button
              key={f.slug}
              type="button"
              aria-label={`Show ${f.title}`}
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
