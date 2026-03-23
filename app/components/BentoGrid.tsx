"use client";

import { projectsData, getRandomExcuse, Project } from "@/lib/projects";
import { motion } from "framer-motion";
import { FiCode, FiGithub, FiExternalLink } from "react-icons/fi";
import { useState, useEffect } from "react";
import Image from "next/image";
import GithubZone from "./GithubZone";
import SpotlightCard from "./ui/SpotlightCard";

const statusColors = {
    deployed: "bg-green-500 shadow-[0_0_10px_#22c55e]",
    built: "bg-yellow-500 shadow-[0_0_10px_#eab308]",
    building: "bg-red-500 shadow-[0_0_10px_#ef4444]"
};

const statusLabels = {
    deployed: "Deployed",
    built: "Built (Not Deployed)",
    building: "Building"
};

export default function BentoGrid() {
    const projects = projectsData;
    const [excuse, setExcuse] = useState("");

    useEffect(() => {
        setExcuse(getRandomExcuse());
    }, []);

    return (
        <section id="projects" className="py-24 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Selected <span className="text-purple-500">Works</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A showcase of my technical journey. From full-stack applications to experimental ideas.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full" // Ensure motion div takes height for grid
                        >
                            <SpotlightCard className="group bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                                {/* Project Image Container */}
                                <div className="relative aspect-video w-full bg-[#050505] overflow-hidden group-hover:bg-zinc-950 transition-colors flex items-center justify-center p-6">
                                    <div className={`absolute top-4 left-4 z-20 ${statusColors[project.status].split(" ")[0]} w-1.5 h-1.5 rounded-full animate-pulse`} />
                                    <span className="absolute top-3 left-7 z-20 text-[9px] font-black uppercase tracking-[0.15em] text-white/50 bg-white/5 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/5">
                                        {statusLabels[project.status]}
                                    </span>
    
                                    {project.image_url ? (
                                        <Image
                                            src={project.image_url}
                                            alt={`${project.title} - ${project.description.slice(0, 50)}...`}
                                            fill
                                            className="object-contain transition-all duration-700 group-hover:scale-[1.03] group-hover:-translate-y-1"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center flex-col p-6">
                                            <div className="absolute inset-0 bg-grid-white/[0.01]" />
                                            <FiCode className="w-10 h-10 text-white/5 mx-auto mb-2 group-hover:text-purple-500/30 transition-colors transform group-hover:scale-110 duration-500" />
                                            <span className="text-white/10 font-mono text-[9px] tracking-widest uppercase">No Preview</span>
                                        </div>
                                    )}
                                </div>
    
                                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl font-black group-hover:text-purple-400 transition-colors tracking-tight">
                                                {project.title}
                                            </h3>
                                        </div>
    
                                        <p className="text-[13px] text-muted-foreground/70 leading-relaxed line-clamp-2 font-medium">
                                            {project.description}
                                        </p>
    
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech_stack.map((tech) => (
                                                <span 
                                                    key={tech} 
                                                    className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] font-bold text-purple-300/50 uppercase tracking-wider"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
    
                                    <div className="flex gap-4 pt-4 mt-auto border-t border-white/5">
                                        {project.github_link ? (
                                            <a
                                                href={project.github_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-purple-400 transition-colors"
                                            >
                                                <FiGithub className="w-3.5 h-3.5" /> Source
                                            </a>
                                        ) : (
                                            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/10 cursor-not-allowed">
                                                <FiGithub className="w-3.5 h-3.5" /> Locked
                                            </span>
                                        )}
    
                                        {project.demo_link ? (
                                            <a
                                                href={project.demo_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-purple-400 transition-colors"
                                            >
                                                <FiExternalLink className="w-3.5 h-3.5" /> Demo
                                            </a>
                                        ) : (
                                            <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/10 cursor-not-allowed">
                                                <FiExternalLink className="w-3.5 h-3.5" /> Pending
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}

                    {/* Coming Soon Card */} 
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group bg-zinc-950/20 border border-white/5 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4 hover:bg-zinc-900/40 transition-all duration-500 min-h-[400px]"
                    >
                         <div className="relative">
                             <div className="text-5xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-12">🏗️</div>
                             <div className="absolute -inset-4 bg-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                         </div>
                         <div className="space-y-2 relative z-10">
                             <h3 className="text-sm font-black uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">Lab in Session</h3>
                             <p className="text-[11px] text-muted-foreground/30 max-w-[180px] mx-auto italic leading-relaxed font-medium">
                                &quot;{excuse}&quot;
                             </p>
                         </div>
                    </motion.div>
                    
                    {/* Github Stats Card */}
                     <motion.div
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.1 }}
                       className="md:col-span-2 lg:col-span-3 rounded-3xl border border-white/10 bg-zinc-900/50 p-4 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-colors relative overflow-hidden"
                     >
                        <div className="absolute top-0 right-0 p-32 bg-green-500/10 rounded-full blur-[60px]" />
                        <GithubZone />
                     </motion.div>
                </div>
            </div>
        </section>
    );
}
