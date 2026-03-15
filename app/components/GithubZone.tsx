"use client";

import React, { useEffect, useState } from "react";
import { Github, Star, Users, Book, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const LEVELS = [
  "bg-zinc-800",                // 0
  "bg-purple-900/50",           // 1
  "bg-purple-700/60",           // 2
  "bg-purple-500/80",           // 3
  "bg-purple-300",              // 4
];

interface Repo {
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
}

function ContributionGrid({ data }: { data: any[] }) {
  // Group contributions by month for labels
  const months: { label: string; weekIdx: number }[] = [];
  let lastMonth = -1;
  const daysInYear = data.length;
  const numWeeks = Math.ceil(daysInYear / 7);

  data.forEach((day, i) => {
    const date = new Date(day.date);
    const month = date.getMonth();
    if (month !== lastMonth) {
      months.push({ 
        label: date.toLocaleString("default", { month: "short" }), 
        weekIdx: Math.floor(i / 7) 
      });
      lastMonth = month;
    }
  });

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative inline-block w-full max-w-fit">
        {/* Month labels */}
        <div className="flex mb-2 relative h-3 w-full text-[9px] uppercase tracking-tighter text-muted-foreground/40 font-bold" style={{ marginLeft: "28px" }}>
          {months.map((m, i) => (
            <span
              key={i}
              className="absolute whitespace-nowrap"
              style={{ left: `${m.weekIdx * 14}px` }}
            >
              {m.label}
            </span>
          ))}
        </div>

        <div className="flex gap-2 items-start justify-center">
          {/* Day labels */}
          <div className="grid grid-rows-7 gap-[3px] py-px">
            {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
              <span key={i} className="text-[8px] text-muted-foreground/40 font-bold h-[11px] flex items-center justify-end pr-1 -translate-y-px">
                {d}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div 
            className="grid grid-flow-col grid-rows-7 gap-[3px]"
            style={{ 
                gridTemplateColumns: `repeat(${numWeeks}, 11px)`,
                gridAutoColumns: "11px"
            }}
          >
            {data.map((day, i) => (
              <div
                key={i}
                className={`w-[11px] h-[11px] rounded-[2px] ${LEVELS[day.level]} transition-all duration-300 hover:scale-150 hover:z-50 hover:ring-1 hover:ring-purple-400 cursor-pointer relative group/day shrink-0`}
              >
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900 border border-white/10 rounded text-[9px] text-white opacity-0 group-hover/day:opacity-100 pointer-events-none whitespace-nowrap z-100 transition-opacity shadow-2xl backdrop-blur-md">
                  <span className="font-bold text-purple-400">{day.count}</span> contributions on {day.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GithubZone() {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    stars: 0,
  });
  const [contributions, setContributions] = useState<any[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [topRepos, setTopRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        const userRes = await fetch("https://api.github.com/users/MrSanito");
        if (!userRes.ok) throw new Error("GitHub User API failed");
        const userData = await userRes.json();
        
        const reposRes = await fetch("https://api.github.com/users/MrSanito/repos?sort=updated&per_page=100");
        if (!reposRes.ok) throw new Error("GitHub Repos API failed");
        const reposData = await reposRes.json();
        
        if (!Array.isArray(reposData)) throw new Error("Invalid repos data");

        const totalStars = reposData.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0);
        const sortedRepos = [...reposData].sort((a: any, b: any) => (b.stargazers_count || 0) - (a.stargazers_count || 0)).slice(0, 2);

        const contribRes = await fetch("https://github-contributions-api.jogruber.de/v4/MrSanito?y=last");
        if (!contribRes.ok) throw new Error("GitHub Contributions API failed");
        const contribData = await contribRes.json();

        setStats({
          repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          stars: totalStars,
        });
        setTopRepos(sortedRepos);
        setContributions(contribData.contributions || []);
        setTotalContributions(contribData.total?.lastYear || 0);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch Github data", error);
        setError("API BUSY");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return (
    <div className="h-full w-full flex flex-col gap-6 animate-pulse opacity-50">
      <div className="h-12 bg-white/5 rounded-2xl" />
      <div className="grid grid-cols-3 gap-3 h-20">
        <div className="bg-white/5 rounded-2xl" />
        <div className="bg-white/5 rounded-2xl" />
        <div className="bg-white/5 rounded-2xl" />
      </div>
      <div className="flex-1 bg-white/5 rounded-2xl" />
    </div>
  );

  if (error) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-4 border border-red-500/10 rounded-2xl bg-red-500/2">
        <div className="p-3 bg-red-500/10 rounded-2xl border border-red-500/20">
          <Github className="w-8 h-8 text-red-400 opacity-50" />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-white tracking-tight">GitHub Statistics Paused</h3>
          <p className="text-xs text-muted-foreground max-w-[200px] leading-relaxed opacity-70">
            API rate limits reached. Data will resume shortly.
          </p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="text-[10px] uppercase tracking-widest font-bold text-red-400/80 hover:text-red-300 transition-colors bg-red-500/5 px-4 py-1.5 rounded-full border border-red-500/10"
        >
          Try Refresh
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="h-full flex flex-col gap-8 py-2"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 shadow-sm group-hover:border-purple-500/20 transition-colors">
            <Github className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight leading-none">GitHub Activity</h3>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1.5 opacity-40">@MrSanito • Visualizing Progress</p>
          </div>
        </div>
        <a 
          href="https://github.com/MrSanito"
          target="_blank" 
          rel="noreferrer"
          className="p-2.5 rounded-full hover:bg-white/5 transition-all group/link border border-transparent hover:border-white/5"
        >
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
        </a>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        <StatsBox label="Repos" value={stats.repos} icon={<Book className="w-4 h-4 text-purple-400" />} />
        <StatsBox label="Stars" value={stats.stars} icon={<Star className="w-4 h-4 text-yellow-400" />} />
        <StatsBox label="Followers" value={stats.followers} icon={<Users className="w-4 h-4 text-blue-400" />} />
      </div>

      {/* Custom Contribution Map */}
      <div className="flex flex-col gap-3 flex-1 justify-end">
         <div className="flex justify-between items-center px-1">
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/20">Commit Pulse</span>
            <span className="text-[10px] font-bold text-muted-foreground/30">{totalContributions} contributions • 2024 - Present</span>
         </div>
         <div className="w-full p-6 sm:p-8 rounded-3xl bg-black/20 border border-white/3 overflow-x-auto no-scrollbar">
            {contributions.length > 0 ? (
                <ContributionGrid data={contributions} />
            ) : (
                <div className="h-32 flex items-center justify-center text-[10px] uppercase font-bold tracking-widest text-muted-foreground/20 italic">
                    Grid visualization unavailable
                </div>
            )}
         </div>
      </div>
    </motion.div>
  );
}

function StatsBox({ label, value, icon }: { label: string, value: number, icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/3 border border-white/5 hover:bg-white/5 hover:border-white/10 hover:translate-y-[-4px] transition-all duration-500 group relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
       <div className="mb-3 opacity-60 group-hover:opacity-100 transition-all transform group-hover:scale-125 duration-500">{icon}</div>
       <span className="text-2xl font-black text-white tracking-tighter tabular-nums">{value}</span>
       <span className="text-[9px] text-muted-foreground/40 uppercase tracking-[0.2em] font-black mt-1 group-hover:text-purple-400/60 transition-colors">{label}</span>
    </div>
  )
}
