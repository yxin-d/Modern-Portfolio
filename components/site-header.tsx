import { FloatingNav } from "@/components/dashboard/floating-nav";
import { StatusDot } from "@/components/dashboard/panel";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/data";

/** Shared across every page: floating nav, availability and theme toggle. */
export function SiteHeader() {
  return (
    <header className="pointer-events-none relative z-40 flex h-12 shrink-0 items-center justify-end md:justify-center">
      <FloatingNav />
      <div className="pointer-events-auto flex items-center gap-3 md:absolute md:right-1">
        <span className="glass hidden items-center gap-2 rounded-full px-3 py-2 text-xs font-medium xl:inline-flex">
          <StatusDot />
          {site.availability}
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
