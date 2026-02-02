"use client";

import React, { useEffect, useState } from "react";
import { Github, Star, Users, Book, Circle, ArrowUpRight } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

interface Repo {
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
}

const theme = {
  dark: [
    "#3f3f46", // Level 0 (visible gray for empty days)
    "#6d28d9", // Level 1 (purple-700)
    "#8b5cf6", // Level 2 (violet-500)
    "#a78bfa", // Level 3 (violet-400)
    "#ddd6fe", // Level 4 (violet-200)
  ],
};

export default function GithubZone() {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    stars: 0,
  });
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

        setStats({
          repos: userData.public_repos,
          followers: userData.followers,
          stars: totalStars,
        });
        setTopRepos(sortedRepos);
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
    <div className="h-full flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-xl border border-white/10">
            <Github className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-none">GitHub</h3>
            <p className="text-xs text-muted-foreground mt-1">@MrSanito</p>
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
         <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground/70">Contribution Map</span>
         <div className="w-full overflow-x-auto no-scrollbar flex items-center justify-start md:justify-center p-4 rounded-2xl bg-black/40 border border-white/5">
            <div className="min-w-fit flex justify-center">
                <GitHubCalendar 
                    username="MrSanito" 
                    colorScheme="dark"
                    theme={theme}
                    blockSize={11}
                    blockMargin={4}
                    fontSize={12}
                    transformData={(data) => data.slice(-135)} 
                />
            </div>
         </div>
      </div>
    </div>
  );
}

function StatsBox({ label, value, icon }: { label: string, value: number, icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
       <div className="mb-1 opacity-80">{icon}</div>
       <span className="text-lg font-bold text-white">{value}</span>
       <span className="text-[9px] text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
  )
}
