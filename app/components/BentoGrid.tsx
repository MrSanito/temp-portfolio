"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import GithubZone from "./GithubZone";

export default function BentoGrid() {
  return (
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
                        rel="noreferrer"
                        className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
                      >
                         Live Demo
                      </a>
                      <a 
                        href="https://github.com/MrSanito/quizMasterTurbo"
                        target="_blank"
                        rel="noreferrer"
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
  );
}
