import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <CtaSection />
    </>
  );
}
