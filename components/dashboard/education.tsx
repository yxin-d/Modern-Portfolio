import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/lib/data";
import { Card } from "./card";
import { CardHeader, Chip, Label } from "./ui";

export function EducationCard() {
  return (
    <Card className="col-span-12 md:col-span-6">
      <CardHeader icon={GraduationCap} title="Education" />
      <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight">{education.degree}</h3>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <Chip tone="brand">{education.school}</Chip>
        <span className="font-mono text-xs text-muted">{education.years}</span>
      </div>

      <div className="mt-5 rounded-xl border border-line bg-surface-2 p-4 transition-colors duration-200 hover:border-brand">
        <Label>Capstone</Label>
        <p className="mt-1.5 font-medium">{education.capstone.title}</p>
        <p className="mt-0.5 text-sm text-muted">{education.capstone.description}</p>
      </div>
    </Card>
  );
}

export function CertificationsCard() {
  return (
    <Card className="col-span-12 md:col-span-6" delay={0.08}>
      <CardHeader icon={Award} title="Certifications & training" />
      <ul className="mt-5 space-y-3">
        {certifications.map((c) => (
          <li
            key={c.title}
            className="flex items-center gap-3 rounded-xl border border-line bg-surface-2 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gold/20 text-gold-ink">
              <Award className="size-4" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium leading-snug">{c.title}</span>
              <span className="block font-mono text-xs text-muted">{c.issuer}</span>
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}