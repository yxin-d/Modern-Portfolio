import Link from "next/link";
import { Lock, Ban } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { externalHref, repoState, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

type Props = { project: Pick<Project, "repoStatus" | "repoUrl">; variant?: "button" | "inline" };

/** Renders the repo as "View repo", "Private repo — walkthrough on request" or "Repo unavailable". */
export function RepoLink({ project, variant = "button" }: Props) {
  const state = repoState(project);
  if (!state) return null;
  const button = variant === "button";

  if (state === "public" && project.repoUrl) {
    return (
      <a
        href={externalHref(project.repoUrl)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          button
            ? buttonVariants({ variant: "outline" })
            : "relative z-10 inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground",
        )}
      >
        <GithubIcon className="h-4 w-4" /> View repo
      </a>
    );
  }

  if (state === "private") {
    return (
      <Link
        href="/contact"
        title="Ask me for a walkthrough"
        className={cn(
          button
            ? "inline-flex items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            : "relative z-10 inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground",
        )}
      >
        <Lock className="h-3.5 w-3.5" aria-hidden />
        {button ? "Private repo — walkthrough on request" : "Private repo"}
      </Link>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-muted-foreground/80",
        button && "rounded-full border border-dashed border-border px-4 py-2 text-sm",
      )}
    >
      <Ban className="h-3.5 w-3.5" aria-hidden /> Repo unavailable
    </span>
  );
}
