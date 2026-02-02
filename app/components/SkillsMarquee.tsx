"use client";

import { motion } from "framer-motion";

export default function SkillsMarquee() {
  return (
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
  );
}
