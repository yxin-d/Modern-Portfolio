import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[11px] uppercase tracking-[0.16em] text-soft ${className}`}>
      {children}
    </p>
  );
}

const TONES = {
  default: "border-line bg-surface-2 text-soft",
  brand: "border-brand/50 bg-brand/15 text-brand-ink",
  gold: "border-gold/60 bg-gold/20 text-gold-ink",
  green:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
} as const;

export function Chip({
  children,
  tone = "default",
  mono = false,
}: {
  children: ReactNode;
  tone?: keyof typeof TONES;
  mono?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium ${
        mono ? "font-mono" : ""
      } ${TONES[tone]}`}
    >
      {children}
    </span>
  );
}

export function SampleTag() {
  return (
    <span className="rounded border border-dashed border-gold/70 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-gold-ink">
      Sample
    </span>
  );
}

export function CardHeader({
  icon: Icon,
  title,
  right,
}: {
  icon: LucideIcon;
  title: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span className="grid size-8 place-items-center rounded-lg bg-brand/15 text-brand-ink transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
          <Icon className="size-4" aria-hidden />
        </span>
        <Label>{title}</Label>
      </div>
      {right}
    </div>
  );
}