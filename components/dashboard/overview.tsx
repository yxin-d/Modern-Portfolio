import { Clock, Download, FolderKanban, Layers, Mail, MapPin, Target, Users } from "lucide-react";
import BlurText from "@/components/BlurText";
import CountUp from "@/components/CountUp";
import DecryptedText from "@/components/DecryptedText";
import Magnet from "@/components/Magnet";
import { links, profile, stats } from "@/lib/data";
import { FacebookIcon, GitHubIcon, LinkedInIcon } from "./brand-icons";
import { Card } from "./card";
import { Chip, Label } from "./ui";

const SOCIALS = [
  { label: "GitHub", href: links.github.url, Icon: GitHubIcon },
  { label: "LinkedIn", href: links.linkedin.url, Icon: LinkedInIcon },
  { label: "Facebook", href: links.facebook.url, Icon: FacebookIcon },
];

function StatusDot() {
  return (
    <span className="relative flex size-2.5 shrink-0">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
      <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
    </span>
  );
}

export function ProfileCard() {
  return (
    <Card className="col-span-12 lg:col-span-8" innerClassName="p-6! sm:p-7!">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="grid size-20 shrink-0 place-items-center rounded-2xl border border-line bg-surface-2 font-mono text-2xl font-semibold text-brand-ink transition-transform duration-300 group-hover:rotate-3">
          {profile.initials}
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs text-brand-ink">
            $ whoami
            <span className="ml-1 inline-block h-3.5 w-[7px] translate-y-0.5 animate-blink bg-brand" />
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{profile.name}</h1>
          <div className="mt-1.5 font-mono text-sm">
            <DecryptedText
              text={profile.headline}
              animateOn="view"
              sequential
              speed={45}
              maxIterations={12}
              className="text-ink"
              encryptedClassName="text-brand-ink"
            />
          </div>
          <BlurText
                      text={profile.pitch}
                      delay={50}
                      animateBy="words"
                      direction="top"
                      className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted" animationFrom={undefined} animationTo={undefined} onAnimationComplete={undefined}          />

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="size-4" aria-hidden />
              {profile.location}
            </span>
            <span className="hidden h-4 w-px bg-line sm:block" aria-hidden />
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid size-9 place-items-center rounded-lg border border-line bg-surface-2 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand-ink"
                >
                  <Icon className="size-4" />
                </a>
              ))}
              <a
                href={`mailto:${links.email}`}
                aria-label="Email"
                title="Email"
                className="grid size-9 place-items-center rounded-lg border border-line bg-surface-2 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand-ink"
              >
                <Mail className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function AvailabilityCard() {
  return (
    <Card className="col-span-12 lg:col-span-4" delay={0.08}>
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2.5">
          <StatusDot />
          <p className="text-sm font-semibold">{profile.availability}</p>
        </div>

        <div className="mt-5">
          <Label className="flex items-center gap-1.5">
            <Target className="size-3.5" aria-hidden /> Targeting
          </Label>
          <ul className="mt-2.5 space-y-2">
            {profile.targetRoles.map((role) => (
              <li key={role} className="flex items-start gap-2 text-sm">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                {role}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-6">
          <Magnet padding={50} magnetStrength={5} wrapperClassName="w-full" innerClassName="w-full">
            <a
              href={profile.cvUrl}
              download
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-[#1b1d3a] transition-shadow hover:shadow-[0_8px_24px_-8px_var(--brand)]"
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

const KPIS = [
  {
    label: "Projects built",
    value: stats.projects,
    suffix: "",
    hint: "Capstone, client and web builds",
    Icon: FolderKanban,
  },
  {
    label: "Experience",
    value: stats.experienceMonths,
    suffix: " mo",
    hint: "Professional, IT support & web",
    Icon: Clock,
  },
  {
    label: "Clients supported",
    value: stats.clients,
    suffix: "",
    hint: "Managed IT & website work",
    Icon: Users,
  },
  {
    label: "Technologies",
    value: stats.technologies,
    suffix: "",
    hint: "Web, CMS and admin tooling",
    Icon: Layers,
  },
];

export function KpiCards() {
  return (
    <>
      {KPIS.map(({ label, value, suffix, hint, Icon }, i) => (
        <Card key={label} className="col-span-6 lg:col-span-3" delay={0.12 + i * 0.06}>
          <div className="flex items-start justify-between gap-2">
            <Label>{label}</Label>
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand-ink transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <Icon className="size-[18px]" aria-hidden />
            </span>
          </div>
          <p className="mt-3 flex items-baseline gap-1 text-4xl font-semibold tabular-nums tracking-tight">
            <CountUp to={value} duration={1.6} delay={i * 0.08} onStart={undefined} onEnd={undefined} />
            {suffix && <span className="text-lg font-medium text-muted">{suffix}</span>}
          </p>
          <p className="mt-1.5 text-xs text-muted">{hint}</p>
        </Card>
      ))}
    </>
  );
}

export function QuickStack() {
  // Small “at a glance” strip used under the KPIs.
  return (
    <Card className="col-span-12" delay={0.2} innerClassName="py-4!">
      <div className="flex flex-wrap items-center gap-2">
        <Label className="mr-2">Core stack</Label>
        <Chip tone="brand" mono>
          Laravel
        </Chip>
        <Chip tone="brand" mono>
          Next.js
        </Chip>
        <Chip mono>Angular</Chip>
        <Chip mono>TypeScript</Chip>
        <Chip mono>Tailwind CSS</Chip>
        <Chip mono>WordPress</Chip>
        <Chip mono>Google Workspace</Chip>
        <Chip mono>Cloudflare DNS</Chip>
      </div>
    </Card>
  );
}