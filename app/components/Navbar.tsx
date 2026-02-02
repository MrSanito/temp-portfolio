"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Navbar() {
  return (
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
  );
}
