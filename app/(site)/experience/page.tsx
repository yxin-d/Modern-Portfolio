import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SampleTag, Tag } from "@/components/dashboard/panel";
import { experience } from "@/lib/dashboard";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Experience — ${site.name}`,
  description: "Professional and internship experience.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve <span className="text-gradient">put the work in.</span>
          </>
        }
        description="IT support for client accounts and full-stack development from my internship."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ol className="space-y-8 border-l border-border pl-6">
            {experience.map((e) => (
              <li key={`${e.role}-${e.org}`} className="relative rounded-2xl border border-border bg-surface p-6">
                <span className="absolute -left-[33px] top-8 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-xl font-semibold">{e.org}</h2>
                  <Tag>{e.type}</Tag>
                  {e.placeholder && <SampleTag />}
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {e.role} · {e.period}
                </p>
                <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1">
                  {e.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
