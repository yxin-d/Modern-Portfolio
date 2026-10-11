"use client";

import Link from "next/link";
import { Briefcase, Cpu, FolderKanban, LayoutDashboard, Mail, PanelsTopLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { href: "/", label: "Overview", Icon: LayoutDashboard },
  { href: "/projects", label: "Projects", Icon: FolderKanban },
  { href: "/skills", label: "Skills", Icon: Cpu },
  { href: "/experience", label: "Experience", Icon: Briefcase },
  { href: "/contact", label: "Contact", Icon: Mail },
  { href: "/classic", label: "Classic", Icon: PanelsTopLeft },
];

/** Floating pill navigation; labels appear from the md breakpoint up. */
export function FloatingNav() {
  return (
    <nav
      aria-label="Primary"
      className="glass flex items-center gap-0.5 rounded-full p-1 shadow-lg"
    >
      {ITEMS.map(({ href, label, Icon }, i) => (
        <Link
          key={href}
          href={href}
          title={label}
          aria-label={label}
          aria-current={i === 0 ? "page" : undefined}
          className={cn(
            "flex h-9 items-center gap-1.5 rounded-full px-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/15 hover:text-foreground md:px-3.5",
            i === 0 && "bg-primary/20 text-foreground",
            label === "Classic" && "hidden sm:flex",
          )}
        >
          <Icon className="h-4 w-4" aria-hidden />
          <span className="hidden md:inline">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
