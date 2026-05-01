import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Differentiation from "@/components/Differentiation";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CapabilityStrip from "@/components/CapabilityStrip";

export default function Home() {
  return (
    <main className="bg-[#0B0B0B] text-white overflow-x-hidden">
      <Hero />
      <CapabilityStrip />
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