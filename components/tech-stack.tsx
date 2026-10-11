"use client";

import { motion } from "framer-motion";
import { techStack, techMarquee } from "@/lib/data-old";
import { Marquee } from "./marquee";

export function TechStack() {
  return (
    <section id="tech-stack" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-secondary dark:text-primary">
              02 — Tech stack
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The toolbox behind the work.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Split across development and infrastructure, because most real jobs are.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map(({ title, icon: Icon, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-secondary transition-colors group-hover:bg-primary group-hover:text-primary-foreground dark:text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{title}</h3>
              <ul className="mt-3 space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Marquee items={techMarquee} />
        </div>
      </div>
    </section>
  );
}
