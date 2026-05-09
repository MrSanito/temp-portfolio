"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiTerminal, FiLock, FiDownload, FiZap, FiCode } from "react-icons/fi";
import { techStackData, toolkitData } from "@/lib/icons";
import MagneticButton from "./ui/MagneticButton";
import SpotlightCard from "./ui/SpotlightCard";

export default function AboutSection() {
    const bio = "I am a passionate Full Stack Developer with a deep interest in building scalable, efficient, and user-friendly applications. My journey involves constant learning and experimenting with new technologies to solve real-world problems. I thrive in collaborative environments and enjoy turning complex requirements into elegant solutions.";
    const currentSong = { title: "Coding Mode", artist: "LoFi" }; // Placeholder directly in visual component

    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
            >
                <div className="flex flex-col gap-4">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter flex items-center gap-3">
                      About <span className="text-purple-500">Me</span>
                  </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Bio & Terminal */}
                    <div className="lg:w-3/5 space-y-10">
                        <div className="prose sm:prose-lg prose-invert text-muted-foreground leading-relaxed">
                            <p>{bio}</p>
                        </div>

                        {/* Terminal Component (Visual Balance) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-xl font-mono text-sm group hover:border-purple-500/20 transition-colors"
                        >
                            <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="ml-2 text-xs text-muted-foreground font-medium">vishal@portfolio:~$</span>
                            </div>
                            <div className="p-6 space-y-3 text-muted-foreground/90">
                                <div>
                                    <span className="text-green-500/90 font-bold">➜</span> <span className="text-blue-500/90 font-bold">~</span> <span className="text-purple-400">neofetch</span>
                                </div>
                                <div className="grid grid-cols-[80px_1fr] gap-6 pt-2">
                                    <div className="text-purple-500 flex items-center justify-center text-5xl">
                                        <FiTerminal />
                                    </div>
                                    <div className="space-y-1.5 text-xs">
                                        <p><span className="font-bold text-purple-400">OS</span>: Linux (Arch btw)</p>
                                        <p><span className="font-bold text-purple-400">Host</span>: Vishal&apos;s Brain</p>
                                        <p><span className="font-bold text-purple-400">Uptime</span>: Since 2024</p>
                                        <p><span className="font-bold text-purple-400">Shell</span>: zsh + oh-my-zsh</p>
                                        <div className="flex gap-2">
                                           <span className="font-bold text-purple-400">Status</span>: 
                                           <span className="flex items-center gap-1.5 animate-pulse text-green-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-400" /> Compiling...
                                           </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <span className="text-green-500/90 font-bold">➜</span> <span className="text-blue-500/90 font-bold">~</span> <span className="inline-block w-2 h-4 bg-purple-500 align-middle ml-1 animate-pulse" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Open to Work Section - Redesigned */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                                <div className="space-y-4 flex-1">
                                    <div className="flex items-center gap-3">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                        </span>
                                        <h3 className="font-bold text-lg sm:text-xl flex items-center gap-2">
                                            Open for Roles:
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {["Backend Engineer", "Full Stack Developer", "Distributed Systems"].map((role) => (
                                            <span
                                                key={role}
                                                className="px-4 py-1.5 bg-white/5 text-purple-200 rounded-full text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors"
                                            >
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-3 w-full md:w-auto">
                                    <MagneticButton className="w-full md:w-auto">
                                        <Link
                                            href="/Vishal%20Resume%202026.pdf"
                                            download="Vishal_Resume_2026.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20 whitespace-nowrap"
                                        >
                                            <FiDownload /> Download Resume     
                                        </Link>
                                    </MagneticButton>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Tech Stack & Toolkit */}
                    <div className="lg:w-2/5 space-y-12">
                        {/* Tech Stack */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold flex items-center gap-3">
                                <FiCode className="text-purple-500" /> Tech Stack
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {techStackData.map((stack, idx) => (
                                    <motion.div
                                        key={stack.category}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                                        className="h-full"
                                    >
                                        <SpotlightCard className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 hover:border-purple-500/30 transition-all shadow-sm group h-full">
                                            <h4 className="text-xs font-bold text-purple-400 mb-4 uppercase tracking-wider">{stack.category}</h4>
                                            <div className="flex flex-wrap gap-4">
                                                {stack.items.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`text-2xl transition-all hover:scale-110 ${item.color}`}
                                                        title={item.name}
                                                    >
                                                        <item.icon />
                                                    </a>
                                                ))}
                                            </div>
                                        </SpotlightCard>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Toolkit */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold flex items-center gap-3">
                                <FiTerminal className="text-purple-500" /> Toolkit
                            </h3>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-center shadow-md relative overflow-hidden"
                            > 
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-50" />
                                <div className="flex gap-6 flex-wrap justify-center relative z-10">
                                    {toolkitData.map((tool, idx) => (
                                        <motion.a
                                            key={tool.name}
                                            href={tool.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: 0.2 + (idx * 0.05), duration: 0.3 }}
                                            className="group relative flex flex-col items-center gap-2"
                                        >
                                            <div className={`text-3xl transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 ${tool.color}`}>
                                                <tool.icon />
                                            </div>
                                            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all text-[10px] font-bold bg-white text-black px-2 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none z-20">
                                                {tool.name}
                                            </span>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Currently Locked On */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                                <FiLock className="text-purple-500" /> Locked On
                            </h3>
                            <div className="space-y-3">
                                {["Distributed Systems", "Backend Engineering", "Scalable Architectures"].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: 0.2 + (index * 0.05), duration: 0.3 }}
                                        className="backdrop-blur-md bg-purple-500/10 border border-purple-500/20 px-5 py-3 rounded-xl text-sm font-semibold shadow-sm flex items-center gap-3 text-purple-200"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
