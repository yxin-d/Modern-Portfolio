"use client";

import { useState } from "react";
import Image from "next/image";
import { Hexagon, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const COLORS: Record<string, string> = {
  turquoise: "var(--color-turquoise)",
  gold: "var(--color-gold)",
  teal: "var(--color-teal)",
  coral: "var(--color-coral)",
  lime: "var(--color-lime)",
  lavender: "var(--color-lavender)",
  night: "var(--color-night)",
};

/** Screenshot viewer. With no images yet it renders a tidy placeholder frame. */
export function ProjectGallery({
  title,
  images = [],
  gradient,
}: {
  title: string;
  images?: string[];
  gradient: [string, string];
}) {
  const [i, setI] = useState(0);

  if (images.length === 0) {
    return (
      <div
        className="relative flex aspect-video w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-border"
        style={{ background: `linear-gradient(135deg, ${COLORS[gradient[0]]}, ${COLORS[gradient[1]]})` }}
      >
        <Hexagon className="h-20 w-20 text-night/20" strokeWidth={1.2} aria-hidden />
        <p className="inline-flex items-center gap-1.5 rounded-full bg-night/20 px-3 py-1 font-mono text-xs text-night/80 backdrop-blur-sm">
          <ImageIcon className="h-3.5 w-3.5" aria-hidden /> Screenshots coming soon
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface">
        <Image
          key={images[i]}
          src={images[i]}
          alt={`${title} screenshot ${i + 1}`}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
          priority={i === 0}
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((src, n) => (
            <button
              key={src}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Show screenshot ${n + 1}`}
              className={cn(
                "relative h-16 w-28 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-colors",
                n === i ? "border-primary" : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              <Image src={src} alt="" fill sizes="112px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
