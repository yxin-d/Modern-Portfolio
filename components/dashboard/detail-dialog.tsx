"use client";

import { useEffect, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ExternalLink, X } from "lucide-react";
import { experience, projects, skillGroups } from "@/lib/dashboard";
import { cn } from "@/lib/utils";
import { SkillChip } from "./skills-panel";
import { SampleTag, Tag } from "./panel";

export type Detail =
  | null
  | { kind: "projects"; slug?: string }
  | { kind: "skills" }
  | { kind: "experience" };

const TITLES = { projects: "All projects", skills: "Tech stack", experience: "Experience" } as const;

function Body({ detail }: { detail: NonNullable<Detail> }) {
  useEffect(() => {
    if (detail.kind === "projects" && detail.slug) {
      document.getElementById(`proj-${detail.slug}`)?.scrollIntoView({ block: "start" });
    }
  }, [detail]);

  if (detail.kind === "skills") {
    return (
      <dl className="space-y-5">
        {skillGroups.map((g) => (
          <div key={g.title}>
            <dt className="mb-2 font-display text-sm font-semibold">{g.title}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <SkillChip key={s} name={s} />
              ))}
            </dd>
          </div>
        ))}
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Core strength
        </p>
      </dl>
    );
  }

  if (detail.kind === "experience") {
    return (
      <ol className="space-y-6 border-l pl-5">
        {experience.map((e) => (
          <li key={`${e.role}-${e.org}`} className="relative">
            <span className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-surface" />
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-base font-semibold">{e.role}</h3>
              <Tag>{e.type}</Tag>
              {e.placeholder && <SampleTag />}
            </div>
            <p className="mt-0.5 font-mono text-xs text-muted-foreground">
              {e.org} · {e.period}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
              {e.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-2 flex flex-wrap gap-1">
              {e.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div className="space-y-4">
      {projects.map((p) => (
        <article
          key={p.slug}
          id={`proj-${p.slug}`}
          className={cn(
            "scroll-mt-2 rounded-xl border p-4",
            p.placeholder && "border-dashed opacity-70",
          )}
        >
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-base font-semibold">{p.title}</h3>
            {p.placeholder ? (
              <SampleTag />
            ) : (
              <span className="font-mono text-xs text-muted-foreground">
                {p.category} · {p.year}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {p.description || p.summary}
          </p>
          {p.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          )}
          {(p.liveUrl || p.repoUrl) && (
            <div className="mt-3 flex gap-4 text-xs font-medium">
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-secondary hover:underline dark:text-primary">
                  Live <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {p.repoUrl && (
                <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-secondary hover:underline dark:text-primary">
                  Code <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

export function DetailDialog({ detail, onClose }: { detail: Detail; onClose: () => void }): ReactNode {
  useEffect(() => {
    if (!detail) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [detail, onClose]);

  return (
    <AnimatePresence>
      {detail && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/50 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={TITLES[detail.kind]}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[85dvh] w-full max-w-2xl flex-col rounded-2xl border bg-surface shadow-2xl"
          >
            <div className="flex items-center justify-between border-b px-5 py-3">
              <h2 className="font-display text-lg font-semibold">{TITLES[detail.kind]}</h2>
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                autoFocus
                className="cursor-pointer rounded-full p-1.5 text-muted-foreground hover:bg-primary/15 hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="overflow-y-auto p-5">
              <Body detail={detail} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
