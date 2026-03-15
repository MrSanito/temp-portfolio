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
  // Group contributions into weeks (columns)
  const weeks: any[][] = [];
  let currentWeek: any[] = [];

  // Pad the first week so it starts on Sunday
  const firstDay = new Date(data[0].date).getDay();
  for (let i = 0; i < firstDay; i++) {
    currentWeek.push(null);
  }

  data.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  const months: { label: string; weekIdx: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, weekIdx) => {
    const firstRealDay = week.find((d) => d !== null);
    if (firstRealDay) {
      const month = new Date(firstRealDay.date).getMonth();
      if (month !== lastMonth) {
        months.push({ label: new Date(firstRealDay.date).toLocaleString("default", { month: "short" }), weekIdx });
        lastMonth = month;
      }
    }
  });

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2">
      <div className="min-w-fit mx-auto flex flex-col items-start px-4">
        {/* Month labels */}
        <div className="flex mb-3 relative h-4 w-full" style={{ marginLeft: "32px" }}>
            {months.map((m, i) => {
                return (
                    <span
                        key={i}
                        className="text-[10px] uppercase tracking-wider text-muted-foreground/60 absolute whitespace-nowrap"
                        style={{ left: `${m.weekIdx * 14}px` }}
                    >
                        {m.label}
                    </span>
                );
            })}
        </div>

        <div className="flex gap-2 w-full justify-start items-start">
            {/* Day labels */}
            <div className="flex flex-col gap-[3px] w-6 justify-between py-0.5">
                {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                    <span key={i} className="text-[9px] text-muted-foreground/50 h-[11px] leading-[11px] font-medium">
                        {d}
                    </span>
                ))}
            </div>

            {/* Grid */}
            <div className="flex gap-[3px]">
                {weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                        {Array.from({ length: 7 }).map((_, di) => {
                            const day = week[di] || null;
                            if (!day) {
                                return <div key={di} className="w-[11px] h-[11px]" />;
                            }
                            return (
                                <div
                                    key={di}
                                    className={`w-[11px] h-[11px] rounded-[2px] ${LEVELS[day.level]} transition-all duration-300 hover:scale-150 hover:z-10 hover:ring-1 hover:ring-purple-400 cursor-pointer relative group/day`}
                                >
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-900 border border-white/10 rounded text-[9px] text-white opacity-0 group-hover/day:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity shadow-xl">
                                        <span className="font-bold text-purple-400">{day.count}</span> contributions on {day.date}
                                    </div>
                                </div>
                            );
                        })}
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

  useEffect(() => {
    async function fetchData() {
      try {
        const userRes = await fetch("https://api.github.com/users/MrSanito");
        const userData = await userRes.json();
        
        const reposRes = await fetch("https://api.github.com/users/MrSanito/repos?sort=updated&per_page=100");
        const reposData: Repo[] = await reposRes.json();
        
        const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
        
        // Pick top 2 starred repos
        const sortedRepos = reposData.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count).slice(0, 2);

        // Fetch Contributions
        const contribRes = await fetch("https://github-contributions-api.jogruber.de/v4/MrSanito?y=last");
        const contribData = await contribRes.json();

        setStats({
          repos: userData.public_repos,
          followers: userData.followers,
          stars: totalStars,
        });
        setTopRepos(sortedRepos);
        setContributions(contribData.contributions);
        setTotalContributions(contribData.total?.lastYear || 0);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch Github data", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="h-full w-full bg-zinc-900/50 rounded-3xl animate-pulse" />;

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="h-full flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-xl border border-white/10">
            <Github className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">GitHub Activity</h3>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest mt-0.5 opacity-60">@MrSanito • Contributions</p>
          </div>
        </div>
        <a 
          href="https://github.com/MrSanito"
          target="_blank" 
          rel="noreferrer"
          className="p-2 rounded-full hover:bg-white/5 transition-colors group"
        >
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
        </a>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        <StatsBox label="Repos" value={stats.repos} icon={<Book className="w-3.5 h-3.5 text-purple-400" />} />
        <StatsBox label="Stars" value={stats.stars} icon={<Star className="w-3.5 h-3.5 text-yellow-400" />} />
        <StatsBox label="Followers" value={stats.followers} icon={<Users className="w-3.5 h-3.5 text-blue-400" />} />
      </div>

      {/* Custom Contribution Map */}
      <div className="flex flex-col gap-2">
         <div className="flex justify-between items-end">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/70">Contribution Map</span>
            <span className="text-[10px] text-muted-foreground/50">{totalContributions} contributions this year</span>
         </div>
         <div className="w-full p-4 rounded-2xl bg-black/40 border border-white/5">
            {contributions.length > 0 ? (
                <ContributionGrid data={contributions} />
            ) : (
                <div className="h-24 flex items-center justify-center text-xs text-muted-foreground">
                    No data available
                </div>
            )}
         </div>
      </div>
    </motion.div>
  );
}

function StatsBox({ label, value, icon }: { label: string, value: number, icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 hover:translate-y-[-2px] transition-all duration-300 group">
       <div className="mb-2 opacity-70 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300">{icon}</div>
       <span className="text-xl font-bold text-white tracking-tighter">{value}</span>
       <span className="text-[9px] text-muted-foreground/60 uppercase tracking-widest font-semibold mt-0.5">{label}</span>
    </div>
  )
}
