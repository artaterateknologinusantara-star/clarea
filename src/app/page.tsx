import Collaboration from "@/components/Collaboration";
import ContactCTA from "@/components/ContactCTA";
import DevConfigNotice from "@/components/DevConfigNotice";
import FAQ from "@/components/FAQ";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyClarea from "@/components/WhyClarea";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory">
        Lompat ke konten
      </a>
      <DevConfigNotice />
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Portfolio />
        <WhyClarea />
        <Process />
        <Collaboration />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
