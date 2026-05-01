import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";
import Differentiation from "@/components/Differentiation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TrustStrip from "@/components/TrustStrip";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-page text-white">
      <Hero />
      <TrustStrip />
      <Services />
      <Process />
      <Differentiation />
      <CaseStudies />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
