import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ProjectGallery } from "@/components/project-gallery";
import { projects, site } from "@/lib/data";
import { cn } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.title} — ${site.name}`, description: p.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const hasLinks = p.liveUrl || p.demoUrl || p.repoUrl;
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

  return (
    <section className="pb-24 pt-8 sm:pt-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> All projects
        </Link>

        <p className="mt-6 font-mono text-xs uppercase tracking-wider text-secondary dark:text-primary">
          {p.category} · {p.year}
        </p>
        {p.context && <p className="mt-1 text-sm text-muted-foreground">{p.context}</p>}
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
          {p.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{p.summary}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {p.liveUrl && (
            <a href={p.liveUrl} {...ext} className={buttonVariants({ variant: "primary" })}>
              View live <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          )}
          {p.demoUrl && (
            <a href={p.demoUrl} {...ext} className={buttonVariants({ variant: p.liveUrl ? "secondary" : "primary" })}>
              <Play className="h-4 w-4" aria-hidden /> View demo
            </a>
          )}
          {p.repoUrl && (
            <a href={p.repoUrl} {...ext} className={buttonVariants({ variant: "outline" })}>
              <GithubIcon className="h-4 w-4" /> View source
            </a>
          )}
          {!hasLinks && (
            <p className="text-sm text-muted-foreground">
              No public link — ask me for a walkthrough.
            </p>
          )}
        </div>

        <div className="mt-10">
          <ProjectGallery title={p.title} images={p.images} gradient={p.gradient} />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_16rem]">
          <div>
            <h2 className="font-display text-xl font-semibold">About this project</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold">Built with</h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        </div>

        <Link
          href={`/projects/${next.slug}`}
          className={cn(
            "group mt-16 flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary",
          )}
        >
          <span>
            <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Next project
            </span>
            <span className="mt-1 block font-display text-lg font-semibold">{next.title}</span>
          </span>
          <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
