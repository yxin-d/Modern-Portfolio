import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { GitHubIcon } from "./brand-icons";
import { Card } from "./card";
import { Chip, SampleTag } from "./ui";

const STATUS_TONE: Record<Project["status"], "brand" | "gold" | "green" | "default"> = {
  Capstone: "gold",
  "Client work": "brand",
  Live: "green",
  "In progress": "default",
};

export function ProjectCards() {
  return (
    <>
      {projects.map((p, i) => (
        <Card
          key={p.title}
          delay={(i % 3) * 0.06}
          className="col-span-12 md:col-span-6 xl:col-span-4"
          innerClassName={
            p.placeholder ? "outline-1 outline-dashed outline-offset-[-6px] outline-brand/50" : ""
          }
        >
          <div className="flex h-full min-h-[190px] flex-col">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Chip tone={STATUS_TONE[p.status]}>{p.status}</Chip>
                {p.placeholder && <SampleTag />}
              </div>
              <span className="font-mono text-xs text-soft">{String(i + 1).padStart(2, "0")}</span>
            </div>

            <h3 className="mt-4 text-lg font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-soft">{p.blurb}</p>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <Chip key={s} mono>
                    {s}
                  </Chip>
                ))}
              </div>
              {(p.live || p.repo) && (
                <div className="flex items-center gap-3 text-sm">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-soft transition-colors hover:text-brand-ink"
                    >
                      <GitHubIcon className="size-4" /> Code
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-brand-ink transition-transform hover:translate-x-0.5"
                    >
                      Live <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}