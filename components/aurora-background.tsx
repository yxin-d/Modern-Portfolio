export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -top-32 -left-24 h-[26rem] w-[26rem] rounded-full opacity-50 blur-[90px] animate-blob dark:opacity-40"
        style={{ background: "var(--color-turquoise)" }}
      />
      <div
        className="absolute top-10 right-[-6rem] h-[22rem] w-[22rem] rounded-full opacity-40 blur-[90px] animate-blob dark:opacity-30"
        style={{ background: "var(--color-lavender)", animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-8rem] left-1/3 h-[24rem] w-[24rem] rounded-full opacity-40 blur-[100px] animate-blob dark:opacity-25"
        style={{ background: "var(--color-gold)", animationDelay: "-11s" }}
      />
      <div className="absolute inset-0 dot-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />
    </div>
  );
}
