"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { site } from "@/lib/data";
import { AuroraBackground } from "./aurora-background";
import { TypingText } from "./typing-text";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <AuroraBackground />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-secondary dark:text-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
          </span>
          available for full-stack &amp; IT support roles
        </motion.div> */}

        <h1 className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Hi, I&apos;m{" "}
          <span className="text-gradient">{site.name}</span>
        </h1>

        <div className="mt-5 font-mono text-sm text-muted-foreground sm:text-base">
          <span className="text-secondary dark:text-primary">~/portfolio</span> $ whoami
          <br />
          <TypingText text={site.role} className="text-foreground" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/projects" className={buttonVariants({ size: "lg" })}>
            View my work
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={site.resumeUrl}
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            <FileDown className="h-4 w-4" />
            Download resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
