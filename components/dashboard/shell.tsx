"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import {
  Briefcase,
  Cpu,
  Download,
  FolderKanban,
  GraduationCap,
  LayoutDashboard,
  Mail,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  X,
} from "lucide-react";
import { profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

const NAV = [
  { id: "overview", label: "Overview", Icon: LayoutDashboard },
  { id: "projects", label: "Projects", Icon: FolderKanban },
  { id: "skills", label: "Skills", Icon: Cpu },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "contact", label: "Contact", Icon: Mail },
] as const;

function StatusDot() {
  return (
    <span className="relative flex size-2.5 shrink-0">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
      <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
    </span>
  );
}

function SidebarBody({
  active,
  collapsed,
  prefix,
  onNavigate,
  onToggle,
}: {
  active: string;
  collapsed: boolean;
  prefix: string;
  onNavigate?: () => void;
  onToggle?: () => void;
}) {
  return (
    <>
      <div className={`flex h-14 items-center gap-3 border-b border-line ${collapsed ? "justify-center" : "px-5"}`}>
        <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-surface-2 font-mono text-xs font-semibold text-brand-ink">
          {profile.initials}
        </span>
        {!collapsed && (
          <span className="min-w-0 truncate text-sm font-semibold tracking-tight">
            {profile.name}
          </span>
        )}
      </div>

      <nav aria-label="Sections" className="flex flex-1 flex-col gap-1 p-3">
        {!collapsed && (
          <p className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-soft">
            Navigate
          </p>
        )}
        {NAV.map(({ id, label, Icon }) => {
          const on = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={onNavigate}
              title={collapsed ? label : undefined}
              aria-current={on ? "location" : undefined}
              className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                collapsed ? "justify-center" : ""
              } ${on ? "bg-brand/15 text-ink" : "text-soft hover:bg-surface-2 hover:text-ink"}`}
            >
              {on && (
                <motion.span
                  layoutId={`${prefix}-nav-active`}
                  className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-brand"
                />
              )}
              <Icon
                className="size-[18px] shrink-0 transition-transform duration-200 group-hover:scale-110"
                aria-hidden
              />
              {!collapsed && <span>{label}</span>}
            </a>
          );
        })}
      </nav>

      <div className="space-y-3 border-t border-line p-3">
        {!collapsed && (
          <div className="rounded-xl border border-line bg-surface-2 p-3">
            <div className="flex items-center gap-2 text-xs font-medium">
              <StatusDot />
              {profile.availability}
            </div>
            <p className="mt-1.5 font-mono text-[11px] text-soft">{profile.location}</p>
          </div>
        )}
        {onToggle && (
          <button
            type="button"
            onClick={onToggle}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-soft transition-colors hover:bg-surface-2 hover:text-ink ${
              collapsed ? "justify-center" : ""
            }`}
          >
            {collapsed ? (
              <PanelLeftOpen className="size-[18px]" aria-hidden />
            ) : (
              <>
                <PanelLeftClose className="size-[18px]" aria-hidden />
                <span>Collapse</span>
              </>
            )}
          </button>
        )}
      </div>
    </>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [active, setActive] = useState<string>(NAV[0].id);

  // Scrollspy: the active section is the last one whose top has crossed ~35% of the viewport.
  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current: string = NAV[0].id;
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      setActive(atBottom ? NAV[NAV.length - 1].id : current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!drawer) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawer(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawer]);

  const activeLabel = NAV.find((n) => n.id === active)?.label ?? "Overview";

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-brand px-3 py-2 text-sm font-medium text-[#1b1d3a] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      {/* Desktop sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 hidden flex-col border-r border-line bg-surface transition-[width] duration-300 lg:flex ${
          collapsed ? "w-[76px]" : "w-64"
        }`}
      >
        <SidebarBody
          active={active}
          collapsed={collapsed}
          prefix="desktop"
          onToggle={() => setCollapsed((c) => !c)}
        />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawer && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawer(false)}
            />
            <motion.aside
              key="drawer"
              className="fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-line bg-surface lg:hidden"
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
            >
              <button
                type="button"
                onClick={() => setDrawer(false)}
                aria-label="Close navigation"
                className="absolute right-3 top-3 grid size-8 place-items-center rounded-lg text-soft hover:bg-surface-2 hover:text-ink"
              >
                <X className="size-4" aria-hidden />
              </button>
              <SidebarBody
                active={active}
                collapsed={false}
                prefix="mobile"
                onNavigate={() => setDrawer(false)}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className={`transition-[padding] duration-300 ${collapsed ? "lg:pl-[76px]" : "lg:pl-64"}`}>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-line bg-canvas/80 px-4 backdrop-blur sm:px-6">
          <button
            type="button"
            onClick={() => setDrawer(true)}
            aria-label="Open navigation"
            className="grid size-9 place-items-center rounded-lg border border-line bg-surface text-soft hover:text-ink lg:hidden"
          >
            <Menu className="size-4" aria-hidden />
          </button>

          <p className="min-w-0 truncate font-mono text-xs text-soft">
            <span className="text-brand-ink">~/rezin-dotimas</span>
            <span aria-hidden> / </span>
            {activeLabel.toLowerCase()}
          </p>

          <div className="ml-auto flex items-center gap-2">
            <span className="hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium sm:inline-flex">
              <StatusDot />
              {profile.availability}
            </span>
            <ThemeToggle />
            <a
              href={profile.cvUrl}
              download
              className="hidden items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-canvas transition-opacity hover:opacity-85 md:inline-flex"
            >
              <Download className="size-3.5" aria-hidden />
              CV
            </a>
          </div>
        </header>

        <main id="main" className="bg-grid">
          <div className="mx-auto w-full max-w-[1280px] space-y-10 px-4 py-6 sm:px-6">
            {children}
          </div>
        </main>

        <footer className="border-t border-line px-4 py-5 sm:px-6">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-soft">
            <span>© 2026 {profile.name}</span>
            <span>Built with Next.js · Tailwind · React Bits</span>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}