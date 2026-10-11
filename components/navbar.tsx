"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, TerminalSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, site } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- close mobile menu on route change
  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-sm">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-base font-semibold tracking-tight"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <TerminalSquare className="h-4 w-4" />
            </span>
            {site.name}
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active ? "text-secondary dark:text-primary" : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-primary/15"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
            >
              Let&apos;s talk
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="glass mt-2 overflow-hidden rounded-2xl md:hidden"
            >
              <div className="flex flex-col gap-1 p-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-medium",
                      pathname === link.href
                        ? "bg-primary/15 text-secondary dark:text-primary"
                        : "text-foreground/80"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
