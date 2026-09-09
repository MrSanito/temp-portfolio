"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitMerge, GitPullRequest, Github, ExternalLink, Sparkles, FolderGit2, CheckCircle2 } from "lucide-react";
import { repoContributionsData } from "@/lib/contributions";
import SpotlightCard from "./ui/SpotlightCard";

export default function OpenSourceSection() {
  return (
    <section id="open-source" className="py-24 px-4 sm:px-6 relative">
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
            <span>Open Source Ecosystem</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            Open Source <span className="text-purple-500">Contributions</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            Real-world merged pull requests and production-grade features built for public developer ecosystems and open-source tooling.
          </p>

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
              <span>4 Merged PRs</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-200">
              <GitMerge className="w-3.5 h-3.5 text-purple-400" />
              <span>Production Integrations</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-200">
              <Github className="w-3.5 h-3.5 text-muted-foreground" />
              <span>TypeScript & Python</span>
            </div>
          </div>
        </motion.div>

        {/* Grouped Repositories with Border-Left Timeline */}
        <div className="space-y-10">
          {repoContributionsData.map((repoGroup, groupIdx) => (
            <motion.div
              key={repoGroup.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.12 }}
            >
              <SpotlightCard className="group bg-zinc-900/40 border border-white/10 border-l-4 border-l-purple-500 rounded-3xl p-6 sm:p-8 hover:border-purple-500/30 hover:border-l-purple-400 hover:shadow-2xl hover:shadow-purple-950/20 transition-all duration-300 space-y-8">
                {/* Repository Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 mt-0.5">
                      <FolderGit2 className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <a
                        href={repoGroup.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl sm:text-2xl font-bold text-white hover:text-purple-400 transition-colors tracking-tight inline-flex items-center gap-2 group/link"
                      >
                        <span>{repoGroup.repo}</span>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                      </a>
                      <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                        {repoGroup.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 self-start sm:self-center pl-12 sm:pl-0">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20">
                      {repoGroup.pullRequests.length} {repoGroup.pullRequests.length === 1 ? "Contribution" : "Contributions"}
                    </span>
                  </div>
                </div>

                {/* Left Border Timeline of Pull Requests */}
                <div className="relative ml-2 sm:ml-4 border-l-2 border-purple-500/30 space-y-6">
                  {repoGroup.pullRequests.map((pr) => {
                    const isMerged = pr.status === "merged";

                    return (
                      <div key={pr.id} className="relative pl-6 sm:pl-8 group/item">
                        {/* Center Node Dot Exactly on the border-l-2 Line */}
                        <div
                          className={`absolute -left-[7px] top-6 w-3.5 h-3.5 rounded-full border-2 bg-zinc-950 transition-all ${
                            isMerged
                              ? "border-purple-400 group-hover/item:border-purple-300 group-hover/item:bg-purple-500/30 group-hover/item:scale-125 shadow-[0_0_8px_#a855f7]"
                              : "border-amber-400 group-hover/item:border-amber-300 group-hover/item:bg-amber-500/30 group-hover/item:scale-125 shadow-[0_0_8px_#f59e0b]"
                          }`}
                        />

                        {/* Clickable Full-Row PR Card */}
                        <a
                          href={pr.prUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 sm:p-5 rounded-2xl border border-white/5 bg-white/[0.015] hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-200 space-y-3 cursor-pointer"
                        >
                          {/* PR Title & Status Badge */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <h3 className="text-sm sm:text-base font-bold text-white group-hover/item:text-purple-300 transition-colors tracking-tight">
                              <span>{pr.title}</span>
                            </h3>

                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border shrink-0 self-start sm:self-center ${
                                isMerged
                                  ? "bg-purple-500/10 text-purple-300 border-purple-500/25"
                                  : "bg-amber-500/10 text-amber-300 border-amber-500/25"
                              }`}
                            >
                              {isMerged ? (
                                <>
                                  <GitMerge className="w-3 h-3 text-purple-400" />
                                  <span>Merged</span>
                                </>
                              ) : (
                                <>
                                  <GitPullRequest className="w-3 h-3 text-amber-400" />
                                  <span>In Review</span>
                                </>
                              )}
                            </span>
                          </div>

                          {/* PR Description */}
                          <p className="text-xs sm:text-sm text-muted-foreground/85 leading-relaxed font-normal">
                            {pr.description}
                          </p>

                          {/* Tech Stack Pills & Direct PR Link */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-white/5">
                            <div className="flex flex-wrap gap-1.5">
                              {pr.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] font-bold text-purple-300/60 uppercase tracking-wider"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover/item:text-purple-300 transition-colors shrink-0">
                              <span>PR #{pr.prNumber} • View on GitHub</span>
                              <ExternalLink className="w-3 h-3 transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                            </span>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
