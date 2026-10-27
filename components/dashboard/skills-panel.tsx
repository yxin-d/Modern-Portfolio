"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { Cpu } from "lucide-react";
import { isCore, skillGroups } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Panel, PanelHeader, ViewAll } from "./panel";
import { TechIcon } from "./tech-icon";

const ALL = [...new Set(skillGroups.flatMap((g) => g.items))];

/**
 * Shows as many tiles as fit the panel without clipping. When there are more
 * skills than space, the last visible slot becomes a "+N" tile linking to /skills.
 */
export function SkillsPanel({ className }: { className?: string }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(ALL.length);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const measure = () => {
      const limit = grid.clientHeight;
      const tiles = Array.from(grid.children) as HTMLElement[];
      // Tiles are laid out from the top, so count rows that fit entirely.
      let fit = 0;
      for (const t of tiles) {
        if (t.offsetTop - tiles[0].offsetTop + t.offsetHeight <= limit + 1) fit++;
        else break;
      }
      setVisible(fit >= ALL.length ? ALL.length : Math.max(fit - 1, 1));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
  }, []);

  const hidden = ALL.length - visible;

  return (
    <Panel className={className} delay={0.1}>
      <PanelHeader icon={Cpu} title="Tech stack" action={<ViewAll href="/skills" />} />
      <div
        ref={gridRef}
        className="grid min-h-0 flex-1 grid-cols-[repeat(auto-fill,minmax(2.75rem,1fr))] content-start gap-2 overflow-hidden short:grid-cols-[repeat(auto-fill,minmax(2.25rem,1fr))] short:gap-1.5 tiny:grid-cols-[repeat(auto-fill,minmax(1.9rem,1fr))] tiny:gap-1"
      >
        {ALL.map((name, n) => {
          if (hidden > 0 && n === visible - 1) {
            return (
              <Link
                key="more"
                href="/skills"
                title={`See all ${ALL.length} skills`}
                aria-label={`+${hidden + 1} more skills`}
                className="tile flex h-11 w-full items-center justify-center rounded-xl font-mono text-[11px] font-medium text-secondary short:h-8 tiny:h-7 short:rounded-lg dark:text-primary"
              >
                +{hidden + 1}
              </Link>
            );
          }
          return (
            <div key={name} className={cn(n >= visible && "invisible")} aria-hidden={n >= visible}>
              <TechIcon name={name} core={isCore(name)} large />
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
