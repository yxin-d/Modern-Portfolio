"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Hexagon } from "lucide-react";
import type { Project } from "@/lib/data";
import { Badge } from "./ui/badge";
import { GithubIcon } from "./icons";

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
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary"
    >
      <div
        className="relative flex h-44 items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colorMap[from]}, ${colorMap[to]})`,
        }}
      >
        <Hexagon
          className="h-16 w-16 text-night/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
          strokeWidth={1.2}
        />
        <span className="absolute right-3 top-3 rounded-full bg-night/20 px-2.5 py-1 font-mono text-[11px] text-night/80 backdrop-blur-sm">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-secondary dark:text-primary">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 pt-2 text-sm font-medium">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="inline-flex items-center gap-1 text-secondary transition-colors hover:text-primary dark:text-primary"
            >
              Live site <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-3.5 w-3.5" /> Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
