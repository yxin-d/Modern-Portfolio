"use client";

import * as React from "react";

export function TypingText({
  text,
  className,
  speed = 55,
  startDelay = 300,
}: {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}) {
  const [count, setCount] = React.useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- instantly show full text when motion is reduced
      setCount(text.length);
      return;
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay, prefersReducedMotion]);

  return (
    <span className={className}>
      <span aria-hidden>
        {text.slice(0, count)}
        <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] animate-blink bg-current align-middle" />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync initial value from browser media query
    setReduced(mq.matches);
    const listener = () => setReduced(mq.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);
  return reduced;
}
