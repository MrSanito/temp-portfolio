"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, Zap } from "lucide-react";
import { experienceData } from "@/lib/experience";
import SpotlightCard from "./ui/SpotlightCard";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-2 text-purple-400 text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            Work <span className="text-purple-500">Experience</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            Engineering high-throughput real-time voice infrastructure, enterprise backends, and low-latency telephony pipelines.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <SpotlightCard className="group bg-zinc-900/40 border border-white/10 border-l-4 border-l-purple-500 rounded-3xl p-6 sm:p-8 hover:border-purple-500/40 hover:border-l-purple-400 hover:shadow-2xl hover:shadow-purple-950/20 transition-all duration-300 space-y-8">
                {/* Header: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 mt-0.5">
                      <Briefcase className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <span className="text-purple-400 font-semibold text-lg sm:text-xl tracking-tight">
                          @ {exp.company}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-muted-foreground/80 shrink-0" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 self-start sm:self-center pl-12 sm:pl-0">
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Current Role
                      </span>
                    )}
                  </div>
                </div>

                {/* Quantified Proof Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {exp.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/20 transition-all flex flex-col justify-between space-y-2"
                    >
                      <div className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center justify-between">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-200">
                          {metric.value}
                        </span>
                        <Zap className="w-3.5 h-3.5 text-purple-400 opacity-60 shrink-0" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white/90">
                          {metric.label}
                        </div>
                        {metric.subtext && (
                          <div className="text-[11px] text-muted-foreground/70 font-mono mt-0.5">
                            {metric.subtext}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quantified Bullets Description */}
                <div className="space-y-3.5 pt-1">
                  {exp.description.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                      <span className="flex-1">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Core Technologies & Infrastructure */}
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="text-xs font-mono uppercase text-muted-foreground/60 tracking-wider font-bold">
                    Core Technologies & Infrastructure
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-medium text-purple-200/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
