export interface Project {
    id: string;
    title: string;
    description: string;
    tech_stack: string[];
    github_link?: string;
    demo_link?: string;
    image_url?: string;
    status: "deployed" | "built" | "building";
}

export const projectsData: Project[] = [
    {
        id: "quiz-master-turbo",
        title: "Quiz Master Turbo",
        description: "A real-time comprehensive quiz platform with live analytics, dashboard, and multiplayer support. Built for high scalability and performance.",
        tech_stack: ["Next.js", "TypeScript", "PostgreSQL", "Turborepo", "WebSockets"],
        github_link: "https://github.com/MrSanito/quizMasterTurbo",
        demo_link: "https://quiz-master-turbo-quiz-master.vercel.app/dashboard",
        image_url: "/project-quizmaster.png",
        status: "deployed"
    },
    {
        id: "portfolio",
        title: "Personal Portfolio",
        description: "Modern, high-performance portfolio website built with Next.js 15, Framer Motion, and Tailwind CSS. Features dynamic content and interactive elements.",
        tech_stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        github_link: "https://github.com/MrSanito/temp-portfolio",
        demo_link: "https://zynito.in",
        image_url: "/project-portfolio.png",
        status: "deployed"
    },
    {
        id: "metaverse",
        title: "Metaverse Platform",
        description: "An immersive 3D virtual world platform enabling real-time interaction, customizable avatars, and virtual real estate management.",
        tech_stack: ["Three.js", "WebRTC", "Socket.io", "Node.js"],
        status: "building"
    }
];

export const getRandomExcuse = () => {
    const excuses = [
        "Waiting for the coffee to kick in...",
        "Compiling the next big thing...",
        "Fixing a bug that I created 5 minutes ago...",
        "Optimizing the unoptimizable...",
        "Refactoring the entire codebase again...",
        "Asking Stack Overflow for help...",
        "Debugging unrelated CSS issues...",
        "Waiting for npm install to finish...",
        "Trying to exit Vim...",
        "Blaming the compiler..."
    ];
    return excuses[Math.floor(Math.random() * excuses.length)];
};
