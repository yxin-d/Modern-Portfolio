import { ContactCta, ContactTiles } from "@/components/dashboard/contact";
import { CertificationsCard, EducationCard } from "@/components/dashboard/education";
import { ExperienceCard } from "@/components/dashboard/experience";
import {
  AvailabilityCard,
  KpiCards,
  ProfileCard,
  QuickStack,
} from "@/components/dashboard/overview";
import { ProjectCards } from "@/components/dashboard/projects";
import { Section } from "@/components/dashboard/section";
import { Shell } from "@/components/dashboard/shell";
import { SkillCards, SkillsLegend } from "@/components/dashboard/skills";
import { TestimonialsCard } from "@/components/dashboard/testimonials";

export default function Home() {
  return (
    <Shell>
      <Section id="overview" index="01" title="Overview">
        <ProfileCard />
        <AvailabilityCard />
        <KpiCards />
        <QuickStack />
      </Section>

      <Section
        id="projects"
        index="02"
        title="Projects"
        description="Capstone and client work, at a glance."
      >
        <ProjectCards />
      </Section>

      <Section
        id="skills"
        index="03"
        title="Skills"
        description="Grouped by what I use them for."
      >
        <SkillCards />
        <SkillsLegend />
      </Section>

      <Section
        id="experience"
        index="04"
        title="Experience"
        description="Where I've worked and what clients say."
      >
        <ExperienceCard />
        <TestimonialsCard />
      </Section>

      <Section id="education" index="05" title="Education">
        <EducationCard />
        <CertificationsCard />
      </Section>

      <Section id="contact" index="06" title="Contact">
        <ContactTiles />
        <ContactCta />
      </Section>
    </Shell>
  );
}