"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",           // English
  "Hola",            // Spanish
  "Bonjour",         // French
  "Guten Tag",       // German
  "Namaste",         // Hindi
  "Konnichiwa",      // Japanese
  "Zdravstvuyte",    // Russian
  "Ciao",            // Italian
  "Olá",             // Portuguese
  "Anyoung haseyo",  // Korean
];

export default function GreetingFlipper() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2500); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 md:h-12 overflow-hidden flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-muted-foreground font-medium text-xl md:text-3xl"
        >
          {greetings[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
