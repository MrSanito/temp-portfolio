"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, User, Trophy, ExternalLink } from "lucide-react";
import GreetingFlipper from "./GreetingFlipper";
import ClockWidget from "./ClockWidget";
import ScrambleText from "./ui/ScrambleText";
import MagneticButton from "./ui/MagneticButton";
import TiltCard from "./ui/TiltCard";
import ScrollReveal from "./ui/ScrollReveal";

interface HeroSectionProps {
  quote: string;
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HeroSection({ quote }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center pt-32 pb-12 relative px-6 max-w-7xl mx-auto">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px]  rounded-full blur-[120px] mix-blend-screen animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]  rounded-full blur-[120px] mix-blend-screen" />

      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div 
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 space-y-8 text-center md:text-left w-full pt-2" 
              >
                  <div className="space-y-4">
                    <div className="flex items-center justify-center md:justify-start gap-2 h-12">
                        <GreetingFlipper />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter flex flex-col gap-2">
                        <span className="block">
                            I am <ScrambleText text="Vishal" className="text-purple-400/80 " />
                        </span>
                    </h1>
                    <div className="flex flex-col gap-1 items-center md:items-start text-muted-foreground">
                      <p className="text-xl md:text-2xl leading-relaxed">
                          Backend Engineer and AI/ML Engineer (learning)
                      </p>
                      <p className="text-sm font-code text-purple-400/80 tracking-wide">
                         aka sanito / zynito
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto md:mx-0">
                      <MagneticButton>
                        <a
                            href="#about"
                            className="group flex items-center justify-center gap-2 bg-secondary/50 border border-white/5 hover:border-purple-500/30 text-secondary-foreground px-6 py-4 rounded-xl font-medium hover:bg-secondary/80 transition-all shadow-sm w-full"
                        >
                            About Me <User className="w-4 h-4 group-hover:text-purple-400" />
                        </a>
                      </MagneticButton>
                      
                      <MagneticButton>
                        <a
                            href="#achievements"
                            className="group flex items-center justify-center gap-2 bg-primary/10 border border-primary/20 text-primary-foreground px-6 py-4 rounded-xl font-medium hover:bg-primary/20 transition-all shadow-lg shadow-primary/5 w-full"
                        >
                            Achievements <Trophy className="w-4 h-4 group-hover:text-purple-400" />
                        </a>
                      </MagneticButton>

                      <MagneticButton>
                        <a
                            href="#projects"
                            className="group flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 w-full"
                        >
                            Projects <Code2 className="w-4 h-4" />
                        </a>
                      </MagneticButton>

                      <MagneticButton>
                        <a
                            href="#socials"
                            className="group flex items-center justify-center gap-2 bg-secondary/50 border border-white/5 hover:border-purple-500/30 text-secondary-foreground px-6 py-4 rounded-xl font-medium hover:bg-secondary/80 transition-all shadow-sm w-full"
                        >
                            Connect <ExternalLink className="w-4 h-4 group-hover:text-purple-400" />
                        </a>
                      </MagneticButton>
                  </div>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="relative group w-64 h-64 md:w-96 md:h-96 shrink-0"
              >
                  <TiltCard className="w-full h-full">
                      <div className="absolute inset-0  rounded-3xl rotate-6 group-hover:rotate-3 transition-transform opacity-20 blur-2xl"></div>
                      <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl bg-zinc-900">
                        {/* Using a Gojo Satoru style placeholder image */}
                        <img
                            src="/gojo-v1.png"
                            alt="Profile"
                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Floating Ghibli-esque / Anime style badge */}
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3 shadow-xl"
                      >
                         <span className="text-2xl">🤞</span>
                         <div className="flex flex-col">
                           <span className="text-xs font-bold text-white uppercase tracking-wider">Sorcerer Grade</span>
                           <span className="text-xs text-purple-400">Special</span>
                         </div>
                      </motion.div>
                  </TiltCard>
              </motion.div>
          </div>

          {/* Quote & Clock Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-20">
              {/* Quote */}
              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex-1" // Removed styling from here, moving to TiltCard or inner
              >
                  <TiltCard className="h-full bg-secondary/10 border border-white/5 hover:border-purple-500/20 rounded-3xl p-8 flex flex-col justify-center text-center md:text-left relative overflow-hidden group transition-colors">
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                          <Code2 className="w-16 h-16" />
                      </div>
                      <blockquote className="text-xl md:text-2xl font-serif italic text-muted-foreground/90 relative z-10 leading-relaxed">
                          &quot;{quote}&quot;
                      </blockquote>
                      <p className="text-xs text-purple-400 mt-4 uppercase tracking-widest opacity-70 relative z-10 font-bold">
                          — Quote of the Day —
                      </p>
                  </TiltCard>
              </motion.div>

              {/* Enhanced Clock Widget */}
              <ClockWidget />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
