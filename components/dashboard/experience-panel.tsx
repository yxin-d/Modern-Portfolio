"use client";

import { Briefcase } from "lucide-react";
import { experience } from "@/lib/dashboard";
import { Panel, PanelHeader, SampleTag, Tag, ViewAll } from "./panel";

export function ExperiencePanel({
  className,
  onOpen,
}: {
  className?: string;
  onOpen: () => void;
}) {
  return (
    <Panel className={className} delay={0.15}>
      <PanelHeader icon={Briefcase} title="Experience" action={<ViewAll onClick={onOpen} />} />
      <ol className="relative min-h-0 flex-1 space-y-3 overflow-hidden border-l pl-4">
        {experience.map((e) => (
          <li key={`${e.role}-${e.org}`} className="relative">
            <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-surface" />
            <div className="flex flex-wrap items-center gap-1.5">
              <h3 className="font-display text-[13px] font-semibold leading-tight">{e.role}</h3>
              <Tag>{e.type}</Tag>
              {e.placeholder && <SampleTag />}
            </div>
            <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
              {e.org} · {e.period}
            </p>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {e.highlights[0]}
            </p>
          </li>
        ))}
      </ol>
    </Panel>
  );
}
