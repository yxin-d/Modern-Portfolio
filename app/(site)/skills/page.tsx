import type { Metadata } from "next";
import { TechIcon } from "@/components/dashboard/tech-icon";
import { PageHeader } from "@/components/page-header";
import { Marquee } from "@/components/marquee";
import { site, techMarquee } from "@/lib/data";
import { isCore, skillGroups } from "@/lib/dashboard";

export const metadata: Metadata = {
  title: `Skills — ${site.name}`,
  description: "Languages, frameworks, data and infrastructure tools.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tech stack"
        title={
          <>
            The toolbox <span className="text-gradient">behind the work.</span>
          </>
        }
        description="Split across development and infrastructure, because most real jobs are. Dot marks a core strength."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="font-display text-base font-semibold">{g.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((name) => (
                    <li key={name} className="flex items-center gap-3 text-sm">
                      <TechIcon name={name} core={isCore(name)} />
                      <span className="text-muted-foreground">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Marquee items={techMarquee} />
          </div>
        </div>
      </section>
    </>
  );
}
