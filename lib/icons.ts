import {
    SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiHtml5, SiCss3, SiJavascript,
    SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiMysql, SiPrisma,
    SiDocker, SiAmazon, SiGithubactions,
    SiGit, SiGithub, SiPostman, SiNotion
} from "react-icons/si";
import { FiCode } from "react-icons/fi";

export const techStackData = [
  {
      category: "Frontend",
      items: [
          { name: "HTML5", icon: SiHtml5, color: "hover:text-orange-500", url: "#" },
          { name: "CSS3", icon: SiCss3, color: "hover:text-blue-500", url: "#" },
          { name: "JavaScript", icon: SiJavascript, color: "hover:text-yellow-400", url: "#" },
          { name: "TypeScript", icon: SiTypescript, color: "hover:text-blue-500", url: "https://www.typescriptlang.org/" },
          { name: "React", icon: SiReact, color: "hover:text-blue-400", url: "https://react.dev/" },
          { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white", url: "https://nextjs.org/" },
          { name: "Tailwind", icon: SiTailwindcss, color: "hover:text-cyan-400", url: "https://tailwindcss.com/" },
      ]
  },
  {
      category: "Backend",
      items: [
          { name: "Node.js", icon: SiNodedotjs, color: "hover:text-green-500", url: "https://nodejs.org/" },
          { name: "Express", icon: SiExpress, color: "hover:text-white", url: "https://expressjs.com/" },
          { name: "MongoDB", icon: SiMongodb, color: "hover:text-green-500", url: "https://www.mongodb.com/" },
          { name: "MySQL", icon: SiMysql, color: "hover:text-blue-300", url: "https://www.mysql.com/" },
          { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-blue-400", url: "https://www.postgresql.org/" },
          { name: "Prisma", icon: SiPrisma, color: "hover:text-white", url: "https://www.prisma.io/" },
      ]
  },
  {
      category: "DevOps",
      items: [
          { name: "Docker", icon: SiDocker, color: "hover:text-blue-500", url: "https://www.docker.com/" },
          { name: "AWS", icon: SiAmazon, color: "hover:text-yellow-500", url: "https://aws.amazon.com/" },
          { name: "CI/CD", icon: SiGithubactions, color: "hover:text-blue-400", url: "#" },
      ]
  }
];

export const toolkitData = [
    { name: "VS Code", icon: FiCode, color: "text-blue-500", url: "https://code.visualstudio.com/" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500", url: "https://www.postman.com/" },
    { name: "Git", icon: SiGit, color: "text-red-500", url: "https://git-scm.com/" },
    { name: "GitHub", icon: SiGithub, color: "text-white", url: "https://github.com/" },
    { name: "Notion", icon: SiNotion, color: "text-white", url: "https://www.notion.so/" },
];
