import Link from "next/link";
import { TerminalSquare } from "lucide-react";
import { site, socials, navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-night text-pearl">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 font-display text-base font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-turquoise text-night">
                <TerminalSquare className="h-4 w-4" />
              </span>
              {site.name}
            </Link>
            <p className="mt-3 text-sm text-pearl/60">{site.role}</p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-pearl/40">Pages</p>
              <ul className="mt-3 space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-pearl/70 transition-colors hover:text-turquoise">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-pearl/40">Elsewhere</p>
              <ul className="mt-3 space-y-2 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-pearl/70 transition-colors hover:text-turquoise"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-pearl/10 pt-6 text-xs text-pearl/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. Built with Next.js &amp; Tailwind CSS.</p>
          {/* <p className="font-mono">status: open to work</p> */}
        </div>
      </div>
    </footer>
  );
}
