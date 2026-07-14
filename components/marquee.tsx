import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const loop = [...items, ...items];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div className="group flex w-max">
        <ul className="flex animate-marquee items-center gap-3 pr-3 group-hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <li
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-sm text-foreground/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
