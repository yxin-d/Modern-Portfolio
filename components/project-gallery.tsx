"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Hexagon, ImageIcon, Maximize2, X } from "lucide-react";
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

/**
 * Screenshot viewer. Images are shown whole (never cropped); clicking one opens a
 * full-size viewer with the rest of the gallery as a thumbnail strip underneath.
 */
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
  const [open, setOpen] = useState(false);
  const n = images.length;
  const go = useCallback((d: number) => setI((v) => (v + d + n) % n), [n]);

  if (n === 0) {
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
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open ${title} screenshot ${i + 1} full size`}
        className="group relative block aspect-video w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-surface"
      >
        <Image
          key={images[i]}
          src={images[i]}
          alt={`${title} screenshot ${i + 1}`}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-contain"
          priority={i === 0}
        />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-night/70 px-2.5 py-1 font-mono text-[11px] text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="h-3 w-3" aria-hidden /> Full size
        </span>
      </button>

      {n > 1 && <Thumbs images={images} index={i} onPick={setI} className="h-16 w-28" />}

      {open && <Lightbox title={title} images={images} index={i} onIndex={setI} onGo={go} onClose={() => setOpen(false)} />}
    </div>
  );
}

function Thumbs({
  images,
  index,
  onPick,
  className,
}: {
  images: string[];
  index: number;
  onPick: (n: number) => void;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Keep the active thumbnail in view inside the strip only (never scroll the page).
  useEffect(() => {
    const strip = ref.current;
    const el = strip?.children[index] as HTMLElement | undefined;
    if (!strip || !el) return;
    strip.scrollTo({
      left: el.offsetLeft - (strip.clientWidth - el.clientWidth) / 2,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <div ref={ref} className="relative flex gap-2 overflow-x-auto pb-1">
      {images.map((src, n) => (
        <button
          key={src}
          type="button"
          onClick={() => onPick(n)}
          aria-label={`Show screenshot ${n + 1}`}
          aria-current={n === index}
          className={cn(
            "relative shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 bg-night/40 transition-colors",
            className,
            n === index ? "border-primary" : "border-transparent opacity-70 hover:opacity-100",
          )}
        >
          <Image src={src} alt="" fill sizes="112px" className="object-contain" />
        </button>
      ))}
    </div>
  );
}

function Lightbox({
  title,
  images,
  index,
  onIndex,
  onGo,
  onClose,
}: {
  title: string;
  images: string[];
  index: number;
  onIndex: (n: number) => void;
  onGo: (d: number) => void;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const n = images.length;

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onGo(1);
      else if (e.key === "ArrowLeft") onGo(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onGo]);

  const arrow =
    "absolute top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/60 p-2.5 text-white shadow-lg ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-black/80";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 text-white"
    >
      <div className="flex shrink-0 items-center justify-between gap-4 px-4 py-3">
        <p className="min-w-0 truncate font-mono text-xs text-white/70">
          {title} · {index + 1} / {n}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="cursor-pointer rounded-full bg-white/10 p-2 transition-colors hover:bg-white/25"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Click the dark area around the image to close, like most photo viewers. */}
      <div className="relative min-h-0 flex-1" onClick={onClose}>
        <Image
          key={images[index]}
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          fill
          unoptimized
          sizes="100vw"
          className="object-contain p-2 sm:p-6"
          onClick={(e) => e.stopPropagation()}
        />
        {n > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous screenshot"
              className={cn(arrow, "left-3")}
              onClick={(e) => {
                e.stopPropagation();
                onGo(-1);
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Next screenshot"
              className={cn(arrow, "right-3")}
              onClick={(e) => {
                e.stopPropagation();
                onGo(1);
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {n > 1 && (
        <div className="shrink-0 bg-black/60 px-4 py-3">
          <Thumbs images={images} index={index} onPick={onIndex} className="h-14 w-24" />
        </div>
      )}
    </div>,
    document.body,
  );
}
