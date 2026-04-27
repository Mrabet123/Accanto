import Header from "@/components/header";
import Hero from "@/components/hero";
import Credentials from "@/components/credentials";
import AudienceSection from "@/components/audience";
import CompetitiveAdvantage from "@/components/competitive-advantage";
import Testimonials from "@/components/testimonials";
import HowWorkCta from "@/components/how-work-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--sand)] text-[var(--ink)]">
      <Header />
      <Hero />
      <Credentials />
      <AudienceSection />
      <CompetitiveAdvantage />
      <Testimonials />
      <HowWorkCta />
      <Footer />
    </main>
  );
}