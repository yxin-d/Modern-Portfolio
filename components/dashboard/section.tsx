import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, index, title, description, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="grid scroll-mt-20 grid-cols-12 gap-4"
    >
      <header className="col-span-12 flex items-end justify-between gap-4 pt-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-ink">
            {index} / {id}
          </p>
          <h2 id={`${id}-title`} className="mt-1 text-xl font-semibold tracking-tight">
            {title}
          </h2>
        </div>
        {description && (
          <p className="hidden max-w-sm text-right text-sm text-soft md:block">{description}</p>
        )}
      </header>
      {children}
    </section>
  );
}