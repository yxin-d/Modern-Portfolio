"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { socials, site } from "@/lib/data";

export function SocialLinks() {
  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div
        aria-hidden
        className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-lavender/30 blur-3xl"
      />
      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        Find me elsewhere
      </p>
      <ul className="mt-5 space-y-2">
        {socials.map((s, i) => (
          <motion.li
            key={s.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center justify-between rounded-xl border border-transparent px-3 py-3 transition-colors hover:border-border hover:bg-background/60"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-secondary transition-colors group-hover:bg-primary group-hover:text-primary-foreground dark:text-primary">
                  <s.icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-medium">{s.label}</span>
                  <span className="block text-xs text-muted-foreground">{s.handle}</span>
                </span>
              </span>
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 shrink-0" />
        {site.location}
      </div>
    </div>
  );
}
