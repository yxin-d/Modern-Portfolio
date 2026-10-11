import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import { profile } from "@/lib/data";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.headline}`,
  description: profile.pitch,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(GeistSans.variable, GeistMono.variable, "font-sans")}
    >
      <body className="bg-canvas font-sans text-ink antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}