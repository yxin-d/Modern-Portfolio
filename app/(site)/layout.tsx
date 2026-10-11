import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";

// Inner pages share the same floating header as the dashboard.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pointer-events-none sticky top-0 z-40 p-3">
        <SiteHeader />
      </div>
      <main>{children}</main>
      <div className="pb-20 md:pb-0">
        <Footer />
      </div>
    </>
  );
}
