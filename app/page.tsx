"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import GithubZone from "./components/GithubZone";
import HeroSection from "./components/HeroSection";
import { getDailyQuote } from "@/lib/data";

// ClockWidget moved to components/ClockWidget.tsx

export default function Portfolio() {
  const [profile, setProfile] = useState<any>(null);
  const quote = getDailyQuote();
  
  useEffect(() => {
    // Fetch GitHub Profile Data
    fetch("https://api.github.com/users/MrSanito")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error(err));
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#030303] text-foreground overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/50 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-2xl flex items-center gap-2 tracking-tighter"
          >
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white">
               <Terminal className="w-5 h-5" />
            </div>
            <span>MrSanito</span>
          </motion.div>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
             <a href="#projects" className="hover:text-foreground transition-colors">Work</a>
             <a href="https://github.com/MrSanito" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection quote={quote} />

      {/* Infinite Marquee Skills */}
      <section className="py-20 border-y border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden">
         <div className="flex w-full">
            <motion.div 
               className="flex whitespace-nowrap gap-16 items-center"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
               {[
                 "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", 
                 "PostgreSQL", "Prisma", "Docker", "AWS", "GraphQL",
                 "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", 
                 "PostgreSQL", "Prisma", "Docker", "AWS", "GraphQL"
               ].map((skill, i) => (
                  <span key={i} className="text-4xl md:text-6xl font-bold text-white/5 uppercase tracking-tighter hover:text-white/20 transition-colors cursor-default">
                     {skill}
                  </span>
               ))}
            </motion.div>
         </div>
      </section>

      {/* Bento Grid Projects */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col gap-4"
           >
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Selected <span className="text-purple-500">Works</span></h2>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
             {/* Main Project - Large Card (Span 2 cols) */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="md:col-span-2 row-span-1 group relative rounded-3xl border border-white/10 bg-zinc-900/50 overflow-hidden hover:border-purple-500/50 transition-all duration-500"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="h-full flex flex-col justify-between p-8 md:p-12 relative z-10">
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                           <Trophy className="w-6 h-6" />
                         </div>
                         <h3 className="text-3xl font-bold">Quiz Master Turbo</h3>
                      </div>
                      <p className="text-muted-foreground text-lg max-w-md">
                        A real-time comprehensive quiz platform with live analytics and dashboard. Built for scalability.
                      </p>
                   </div>

                   <div className="space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {["Next.js", "TypeScript", "PostgreSQL", "Turborepo"].map(t => (
                           <span key={t} className="px-3 py-1 rounded-full bg-white/10 border border-white/5 text-xs font-medium">
                              {t}
                           </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <a 
                          href="https://quiz-master-turbo-quiz-master.vercel.app/dashboard"
                          target="_blank" 
                          className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
                        >
                           Live Demo
                        </a>
                        <a 
                          href="https://github.com/MrSanito/quizMasterTurbo"
                          target="_blank"
                          className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                        >
                           Source Code
                        </a>
                      </div>
                   </div>
                </div>

                {/* Decorative Image/Pattern */}
                <div className="absolute right-[-20%] bottom-[-20%] w-[300px] h-[300px] bg-purple-500/30 rounded-full blur-[80px] pointer-events-none" />
             </motion.div>

             {/* Github Stats Card */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="md:col-span-1 row-span-1 rounded-3xl border border-white/10 bg-zinc-900/50 p-8 flex flex-col justify-between hover:border-white/20 transition-colors relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-32 bg-green-500/10 rounded-full blur-[60px]" />
                <GithubZone />
             </motion.div>

             {/* Tech Stack Card - Bento item */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="md:col-span-3 row-span-1 md:h-[300px] rounded-3xl border border-white/10 bg-gradient-to-r from-zinc-900 via-zinc-900 to-black p-10 flex items-center justify-center relative overflow-hidden"
             >
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                   <div className="w-[150%] h-[150%] bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,#333_20px,#333_21px)] opacity-10"></div>
                </div>
                
                <div className="text-center z-10 max-w-2xl">
                   <h3 className="text-3xl font-bold mb-4">Ready to Collaborate?</h3>
                   <p className="text-muted-foreground mb-6 text-lg">
                      I'm currently open to new opportunities and interesting projects.
                      Whether you have a question or just want to say hi, I'll try my best to get back to you!
                   </p>
                   <a 
                     href="mailto:hello@mrsanito.com"
                     className="inline-flex px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors"
                   >
                      Say Hello
                   </a>
                </div>
             </motion.div>
           </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-muted-foreground/60 border-t border-white/5">
         <p>© {new Date().getFullYear()} MrSanito. Designed & Built in 2026.</p>
      </footer>
    </main>
  );
}
