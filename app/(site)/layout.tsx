import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// The classic multi-page site (/classic, /projects, /contact) keeps its
// navbar and footer; the dashboard at "/" is a full-screen layout of its own.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
