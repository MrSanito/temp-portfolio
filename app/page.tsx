"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2, Terminal, User, Trophy, Star, GitFork, Clock, ArrowRight } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { cn } from "@/lib/utils";
import GreetingFlipper from "./components/GreetingFlipper";
import { getDailyQuote } from "@/lib/data";

// Inline ClockWidget for simplicity in this file
function ClockWidget() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3, delay: 0.25 }}
      className="md:w-80 shrink-0 bg-secondary/10 border border-white/5 hover:border-purple-500/20 rounded-3xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group transition-colors"
    >
       {/* Header */}
       <div className="flex items-center justify-between w-full border-b border-white/10 pb-4 mb-2">
           <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground group-hover:text-white transition-colors">
               <Clock className="w-3 h-3" /> IST (India)
           </div>
           <div className="flex items-center gap-1.5">
               <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               <span className="text-[10px] font-semibold uppercase tracking-wider text-green-400/80">Online</span>
           </div>
       </div>

       {/* Time */}
       <div className="text-5xl font-mono font-bold text-white tracking-widest text-center py-4">
           {time}
       </div>

       {/* Date Footer */}
       <div className="text-center border-t border-white/10 pt-4 mt-2">
           <p className="text-sm font-medium text-muted-foreground group-hover:text-purple-300 transition-colors">
               {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
           </p>
       </div>
    </motion.div>
  );
}

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
      <section id="home" className="min-h-[90vh] flex flex-col justify-center pt-32 pb-12 relative px-6 max-w-7xl mx-auto">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen" />

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
                              I am <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">Vishal</span>
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

                    {/* Symmetric CTA Grid */}
                    <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto md:mx-0">
                        <a
                            href="#about"
                            className="group flex items-center justify-center gap-2 bg-secondary/50 border border-white/5 hover:border-purple-500/30 text-secondary-foreground px-6 py-4 rounded-xl font-medium hover:bg-secondary/80 transition-all hover:scale-105 shadow-sm"
                        >
                            About Me <User className="w-4 h-4 group-hover:text-purple-400" />
                        </a>
                        <a
                            href="#achievements"
                            className="group flex items-center justify-center gap-2 bg-primary/10 border border-primary/20 text-primary-foreground px-6 py-4 rounded-xl font-medium hover:bg-primary/20 transition-all hover:scale-105 shadow-lg shadow-primary/5"
                        >
                            Achievements <Trophy className="w-4 h-4 group-hover:text-purple-400" />
                        </a>
                        <a
                            href="#projects"
                            className="group flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
                        >
                            Projects <Code2 className="w-4 h-4" />
                        </a>
                        <a
                            href="#socials"
                            className="group flex items-center justify-center gap-2 bg-secondary/50 border border-white/5 hover:border-purple-500/30 text-secondary-foreground px-6 py-4 rounded-xl font-medium hover:bg-secondary/80 transition-all hover:scale-105 shadow-sm"
                        >
                            Connect <ExternalLink className="w-4 h-4 group-hover:text-purple-400" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="relative group w-64 h-64 md:w-96 md:h-96 shrink-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl rotate-6 group-hover:rotate-3 transition-transform opacity-20 blur-2xl"></div>
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl bg-zinc-900">
                      {/* Using a Gojo Satoru style placeholder image */}
                      <img
                          src="https://wallpapers-clan.com/wp-content/uploads/2023/02/jujutsu-kaisen-gojo-satoru-pfp-1.jpg"
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
                    className="flex-1 bg-secondary/10 border border-white/5 hover:border-purple-500/20 rounded-3xl p-8 flex flex-col justify-center text-center md:text-left relative overflow-hidden group transition-colors"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Code2 className="w-16 h-16" />
                    </div>
                    <blockquote className="text-xl md:text-2xl font-serif italic text-muted-foreground/90 relative z-10 leading-relaxed">
                        &quot;{quote}&quot;
                    </blockquote>
                    <p className="text-xs text-purple-400 mt-4 uppercase tracking-widest opacity-70 relative z-10 font-bold">
                        — Quote of the Day —
                    </p>
                </motion.div>

                {/* Enhanced Clock Widget */}
                <ClockWidget />
            </div>
      </motion.div>
    </div>
  </section>

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
                
                <div>
                  <h3 className="text-xl font-bold mb-2">GitHub Activity</h3>
                  <p className="text-sm text-muted-foreground">Contributions over the last year</p>
                </div>

                <div className="mt-8 scale-90 origin-bottom-left -ml-4">
                  <GitHubCalendar 
                    username="MrSanito" 
                    colorScheme="dark"
                    fontSize={10}
                    blockSize={8}
                    blockMargin={4}
                  />
                </div>
                
                {profile && (
                   <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="text-center">
                         <div className="text-2xl font-bold text-white">{profile.public_repos}</div>
                         <div className="text-xs text-muted-foreground">Repos</div>
                      </div>
                      <div className="text-center">
                         <div className="text-2xl font-bold text-white">{profile.followers}</div>
                         <div className="text-xs text-muted-foreground">Followers</div>
                      </div>
                      <div className="text-center">
                         <div className="text-2xl font-bold text-white">2024</div>
                         <div className="text-xs text-muted-foreground">Joined</div>
                      </div>
                   </div>
                )}
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
