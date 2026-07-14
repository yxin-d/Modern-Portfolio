"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-night px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-lavender/40 blur-[100px]"
          />
          <div
            aria-hidden
            className="absolute bottom-[-4rem] right-[-2rem] h-56 w-56 rounded-full bg-turquoise/30 blur-[100px]"
          />

          {/* <p className="relative font-mono text-xs uppercase tracking-wider text-turquoise">
            Let&apos;s build something
          </p> */}
          <h2 className="relative mx-auto mt-4 max-w-xl text-balance font-display text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
            Have a role, a project, or a grand idea?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-pearl/60">
            <span className="text-turquoise">Let&apos;s build it together!</span> I reply within a day.
          </p>

          <div className="relative mt-8 flex justify-center">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
