"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { site } from "@/lib/data";

const stats = [
  { label: "Years hands-on", value: "1", icon: Sparkles },
  { label: "Client environments managed", value: "2+", icon: GraduationCap },
  { label: "Based in", value: site.location, icon: MapPin },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-secondary dark:text-primary">
              01 — About
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Two disciplines,{" "}
              <span className="text-gradient">one skill set.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.about.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/30 blur-3xl"
              />
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Snapshot
              </p>
              <dl className="mt-6 space-y-6">
                {stats.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-secondary dark:text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <dt className="text-xs text-muted-foreground">{label}</dt>
                      <dd className="font-display text-lg font-semibold">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
