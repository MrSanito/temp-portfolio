"use client";

import { getDailyQuote } from "@/lib/data";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsMarquee from "./components/SkillsMarquee";
import AboutSection from "./components/AboutSection";
import BentoGrid from "./components/BentoGrid";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ui/ScrollReveal";

export default function Portfolio() {
  const quote = getDailyQuote();

  return (
    <main className="min-h-screen bg-[#030303] text-foreground overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <Navbar />
      <HeroSection quote={quote} />
      
      <ScrollReveal delay={0.2}>
        <SkillsMarquee />
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <BentoGrid />
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
