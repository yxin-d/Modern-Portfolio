import { AppWindow, Cloud, Database, Wrench, type LucideIcon } from "lucide-react";
import { skillGroups, type SkillGroup } from "@/lib/data";
import { Card } from "./card";
import { CardHeader, Label } from "./ui";

const ICONS: Record<SkillGroup["icon"], LucideIcon> = {
  frontend: AppWindow,
  backend: Database,
  cms: Cloud,
  tools: Wrench,
};

export function SkillCards() {
  return (
    <>
      {skillGroups.map((group, i) => (
        <Card
          key={group.title}
          delay={i * 0.06}
          className="col-span-12 md:col-span-6 xl:col-span-3"
        >
          <CardHeader
            icon={ICONS[group.icon]}
            title={group.title}
            right={<span className="font-mono text-xs text-muted">{group.items.length}</span>}
          />
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item.name}
                className="inline-flex cursor-default items-center gap-1.5 rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 font-mono text-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand-ink"
              >
                {item.core && (
                  <span className="size-1.5 rounded-full bg-gold" title="Core strength" />
                )}
                {item.name}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </>
  );
}

export function SkillsLegend() {
  return (
    <div className="col-span-12 -mt-1 flex items-center gap-2 px-1">
      <span className="size-1.5 rounded-full bg-gold" aria-hidden />
      <Label>Core strengths</Label>
    </div>
  );
}