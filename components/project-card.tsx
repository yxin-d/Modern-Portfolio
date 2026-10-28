"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Hexagon } from "lucide-react";
import { externalHref, type Project } from "@/lib/data";
import { Badge } from "./ui/badge";
import { RepoLink } from "./repo-link";

const colorMap: Record<string, string> = {
  turquoise: "var(--color-turquoise)",
  gold: "var(--color-gold)",
  teal: "var(--color-teal)",
  coral: "var(--color-coral)",
  lime: "var(--color-lime)",
  lavender: "var(--color-lavender)",
  night: "var(--color-night)",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [from, to] = project.gradient;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary"
    >
      <div
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colorMap[from]}, ${colorMap[to]})`,
        }}
      >
        {project.images?.[0] ? (
          <Image
            src={project.images[0]}
            alt={`${project.title} cover`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Hexagon
            className="h-16 w-16 text-night/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
            strokeWidth={1.2}
          />
        )}
        <span className="absolute right-3 top-3 rounded-full bg-night/60 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur-sm">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-secondary dark:text-primary">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        {project.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}

        <div className="mt-6 flex items-center gap-4 pt-2 text-sm font-medium">
          {project.liveUrl && (
            <a
              href={externalHref(project.liveUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1 text-secondary transition-colors hover:text-primary dark:text-primary"
            >
              Live site <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          <RepoLink project={project} variant="inline" />
        </div>
      </div>
    </motion.article>
  );
}

/** List layout: one project per row, cover on the left. */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [from, to] = project.gradient;
  const cover = project.images?.[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index, 4) * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary sm:flex-row"
    >
      <div
        className="relative aspect-video w-full shrink-0 overflow-hidden sm:w-64 sm:self-center"
        style={{ background: `linear-gradient(135deg, ${colorMap[from]}, ${colorMap[to]})` }}
      >
        {cover ? (
          <Image
            src={cover}
            alt={`${project.title} cover`}
            fill
            sizes="(min-width: 640px) 256px, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <Hexagon className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-night/20" strokeWidth={1.2} />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-5">
        <p className="font-mono text-xs uppercase tracking-wider text-secondary dark:text-primary">
          {project.category} · {project.year}
        </p>
        <h3 className="font-display text-lg font-semibold leading-snug">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {project.title}
          </Link>
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
