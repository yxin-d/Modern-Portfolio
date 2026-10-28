import type { Metadata } from "next";
import { TechIcon } from "@/components/dashboard/tech-icon";
import { PageHeader } from "@/components/page-header";
import { Marquee } from "@/components/marquee";
import { isCore, site, skillGroups, techMarquee } from "@/lib/data";

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
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col gap-4">
            {skillGroups.map((g, n) => (
              <section
                key={g.title}
                aria-labelledby={`skills-${n}`}
                className="grid gap-5 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary md:grid-cols-[13rem_1fr] md:gap-8"
              >
                <div>
                  <p className="font-mono text-xs text-muted-foreground">{String(n + 1).padStart(2, "0")}</p>
                  <h2 id={`skills-${n}`} className="mt-1 font-display text-lg font-semibold">
                    {g.title}
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">{g.items.length} skills</p>
                </div>
                <ul className="flex flex-wrap content-start gap-2">
                  {g.items.map((name) => (
                    <li
                      key={name}
                      className="flex items-center gap-2.5 rounded-xl border border-border bg-background/40 py-1.5 pl-1.5 pr-3.5 text-sm text-muted-foreground"
                    >
                      <TechIcon name={name} core={isCore(name)} />
                      {name}
                    </li>
                  ))}
                </ul>
              </section>
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
