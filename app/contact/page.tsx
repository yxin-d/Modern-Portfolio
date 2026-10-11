import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/data-old";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: "Get in touch about full-stack development or IT support work.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s <span className="text-gradient">start a conversation.</span>
          </>
        }
        description={`Open to full-stack, IT support, or hybrid roles. Based in ${site.location}, happy to work remote.`}
      />
      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-8">
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
          <SocialLinks />
        </div>
      </section>
    </>
  );
}
