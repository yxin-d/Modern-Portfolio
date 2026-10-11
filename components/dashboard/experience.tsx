import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { Card } from "./card";
import { CardHeader, Chip, SampleTag } from "./ui";

export function ExperienceCard() {
  return (
    <Card className="col-span-12 lg:col-span-8">
      <CardHeader icon={Briefcase} title="Work history" />
      <ol className="relative mt-5 space-y-7 border-l border-line pl-6">
        {experience.map((e) => (
          <li key={`${e.role}-${e.org}`} className="relative">
            <span className="absolute -left-[30px] top-1.5 size-2.5 rounded-full border-2 border-brand bg-surface" />
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold tracking-tight">{e.role}</h3>
              <Chip tone="brand">{e.type}</Chip>
              {e.placeholder && <SampleTag />}
            </div>
            <p className="mt-0.5 font-mono text-xs text-muted">
              {e.org} · {e.period}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {e.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {e.tech.map((t) => (
                <Chip key={t} mono>
                  {t}
                </Chip>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}