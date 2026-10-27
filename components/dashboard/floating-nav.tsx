"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, Cpu, FolderKanban, LayoutDashboard, Mail, MessageSquareQuote } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { href: "/", label: "Overview", Icon: LayoutDashboard },
  { href: "/projects", label: "Projects", Icon: FolderKanban },
  { href: "/skills", label: "Skills", Icon: Cpu },
  { href: "/experience", label: "Experience", Icon: Briefcase },
  { href: "/testimonials", label: "Testimonials", Icon: MessageSquareQuote },
  { href: "/contact", label: "Contact", Icon: Mail },
];

/** Floating pill on desktop; a sticky bottom tab bar on phones. */
export function FloatingNav() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav
      aria-label="Primary"
      className="pointer-events-auto fixed inset-x-3 border bg-surface/95 backdrop-blur-xl bottom-3 z-50 flex items-center justify-around rounded-2xl p-1.5 shadow-lg md:static md:inset-auto md:justify-start md:gap-0.5 md:rounded-full md:p-1"
    >
      {ITEMS.map(({ href, label, Icon }) => {
        const active = isActive(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex flex-1 flex-col items-center gap-0.5 rounded-xl py-1.5 text-[9.5px] font-medium sm:text-[10px] text-muted-foreground transition-colors hover:bg-primary/15 hover:text-foreground md:h-9 md:flex-none md:flex-row md:gap-1.5 md:rounded-full md:px-3.5 md:py-0 md:text-xs",
              active && "bg-primary/20 text-foreground",
            )}
          >
            <Icon className="h-4 w-4" aria-hidden />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
