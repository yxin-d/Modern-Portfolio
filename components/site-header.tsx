import Link from "next/link";
import { FloatingNav } from "@/components/dashboard/floating-nav";
import { StatusDot } from "@/components/dashboard/panel";
import { ThemeToggle } from "@/components/theme-toggle";
import { owner } from "@/lib/dashboard";

/** Shared across every page: brand, floating nav, availability and theme toggle. */
export function SiteHeader() {
  return (
    <header className="pointer-events-none relative z-40 flex h-12 shrink-0 items-center justify-between gap-3 px-1">
      <Link
        href="/"
        className="glass pointer-events-auto flex items-center gap-2.5 rounded-full p-1 xl:pr-4"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
          {owner.initials}
        </span>
        <span className="hidden font-display text-sm font-semibold tracking-tight xl:block">
          {owner.name}
        </span>
      </Link>
      <FloatingNav />
      <div className="pointer-events-auto flex items-center gap-3">
        <span className="glass hidden items-center gap-2 rounded-full px-3 py-2 text-xs font-medium xl:inline-flex">
          <StatusDot />
          {owner.availability}
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
