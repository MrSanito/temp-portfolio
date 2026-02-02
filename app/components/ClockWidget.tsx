"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function ClockWidget() {
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
