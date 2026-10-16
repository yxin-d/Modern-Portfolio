"use client";

import Script from "next/script";

/** Testimonial.to Wall of Love iframe, auto-resized to its content. */
export function TestimonialEmbed({ src }: { src: string }) {
  return (
    <>
      <iframe
        id="testimonialto-wall"
        title="Client testimonials"
        src={src}
        width="100%"
        scrolling="no"
        className="min-h-[24rem] w-full border-0"
      />
      <Script
        src="https://testimonial.to/js/iframeResizer.min.js"
        strategy="afterInteractive"
        onReady={() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).iFrameResize?.({ log: false, checkOrigin: false }, "#testimonialto-wall");
        }}
      />
    </>
  );
}
