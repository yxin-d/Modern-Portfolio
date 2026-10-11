import { ArrowUpRight, Download, Mail, Send } from "lucide-react";
import Magnet from "@/components/Magnet";
import { links, profile } from "@/lib/data";
import { FacebookIcon, GitHubIcon, LinkedInIcon } from "./brand-icons";
import { Card } from "./card";
import { CardHeader, Label } from "./ui";

const TILES = [
  { label: "Email", value: links.email, href: `mailto:${links.email}`, Icon: Mail },
  { label: "GitHub", value: links.github.label, href: links.github.url, Icon: GitHubIcon },
  { label: "LinkedIn", value: links.linkedin.label, href: links.linkedin.url, Icon: LinkedInIcon },
  { label: "Facebook", value: links.facebook.label, href: links.facebook.url, Icon: FacebookIcon },
];

export function ContactTiles() {
  return (
    <Card className="col-span-12 lg:col-span-7">
      <CardHeader icon={Send} title="Get in touch" />
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {TILES.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group/tile flex items-center gap-3 rounded-xl border border-line bg-surface-2 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand/15 text-brand-ink">
              <Icon className="size-[18px]" />
            </span>
            <span className="min-w-0 flex-1">
              <Label>{label}</Label>
              <span className="block truncate text-sm font-medium">{value}</span>
            </span>
            <ArrowUpRight
              className="size-4 shrink-0 text-muted transition-transform duration-200 group-hover/tile:-translate-y-0.5 group-hover/tile:translate-x-0.5 group-hover/tile:text-brand-ink"
              aria-hidden
            />
          </a>
        ))}
      </div>
    </Card>
  );
}

export function ContactCta() {
  return (
    <Card className="col-span-12 lg:col-span-5" delay={0.08}>
      <div className="flex h-full flex-col">
        <Label>Next step</Label>
        <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight">
          Hiring for a web or software role? Let&apos;s talk.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {profile.availability} — {profile.targetRoles.join(", ")}.
        </p>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <Magnet padding={40} magnetStrength={5}>
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-[#1b1d3a] transition-shadow hover:shadow-[0_8px_24px_-8px_var(--brand)]"
            >
              <Mail className="size-4" aria-hidden />
              Email me
            </a>
          </Magnet>
          <Magnet padding={40} magnetStrength={5}>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface-2 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-brand"
            >
              <Download className="size-4" aria-hidden />
              Download CV
            </a>
          </Magnet>
        </div>
      </div>
    </Card>
  );
}