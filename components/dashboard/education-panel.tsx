"use client";

import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/lib/dashboard";
import { Panel, PanelHeader, Tag } from "./panel";

export function EducationPanel({ className }: { className?: string }) {
  return (
    <Panel className={className} delay={0.2}>
      <PanelHeader icon={GraduationCap} title="Education" />
      <div className="min-h-0 flex-1 space-y-3 overflow-hidden">
        <div>
          <p className="font-display text-[13px] font-semibold leading-snug">{education.degree}</p>
          <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
            {education.school} · {education.years}
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            <Tag>Capstone: {education.capstone}</Tag>
            <Tag className="bg-accent/25 text-foreground">{education.award}</Tag>
          </div>
        </div>
        <ul className="space-y-1.5 border-t pt-3">
          {certifications.map((c) => (
            <li key={c.title} className="flex items-start gap-2">
              <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
              <span className="min-w-0 text-xs leading-snug">
                {c.title}
                <span className="block font-mono text-[10.5px] text-muted-foreground">
                  {c.issuer}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}
