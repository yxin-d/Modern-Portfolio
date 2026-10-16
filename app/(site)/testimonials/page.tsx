import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { SampleTag } from "@/components/dashboard/panel";
import { PageHeader } from "@/components/page-header";
import { site, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: `Testimonials — ${site.name}`,
  description: "What clients say about working with me.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Client feedback"
        title={
          <>
            Kind words from <span className="text-gradient">people I&apos;ve worked with.</span>
          </>
        }
        description="Collected directly from clients, shown with their permission."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li
                key={`${t.name}-${t.quote.slice(0, 24)}`}
                className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary"
              >
                <Quote className="h-5 w-5 text-secondary dark:text-primary" aria-hidden />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <footer className="mt-5 flex items-center gap-3 border-t pt-4 text-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20 font-display text-sm font-bold">
                    {t.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-medium">{t.name}</span>
                    <span className="block truncate font-mono text-xs text-muted-foreground">
                      {t.role}
                    </span>
                  </span>
                  {t.placeholder && (
                    <span className="ml-auto">
                      <SampleTag />
                    </span>
                  )}
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
