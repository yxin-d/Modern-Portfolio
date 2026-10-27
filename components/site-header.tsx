import { FloatingNav } from "@/components/dashboard/floating-nav";
import { ThemeToggle } from "@/components/theme-toggle";

/** Shared across every page: floating nav and theme toggle. */
export function SiteHeader() {
  return (
    <header className="pointer-events-none relative z-40 flex h-12 shrink-0 items-center justify-end md:justify-center">
      <FloatingNav />
      <div className="pointer-events-auto flex items-center gap-3 md:absolute md:right-1">
        <ThemeToggle />
      </div>
    </header>
  );
}
