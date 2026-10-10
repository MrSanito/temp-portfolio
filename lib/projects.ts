export interface Project {
    id: string;
    title: string;
    description: string;
    tech_stack: string[];
    github_link?: string;
    demo_link?: string;
    image_url?: string;
    status: "deployed" | "built" | "building";
    category: "personal" | "freelance";
}

export const projectsData: Project[] = [
    {
        id: "quiz-master-turbo",
        title: "Quiz Master Turbo",
        description: "A real-time comprehensive quiz platform with live analytics, dashboard, and multiplayer support. Built for high scalability.",
        tech_stack: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
        github_link: "https://github.com/MrSanito/quizMasterTurbo",
        demo_link: "https://quizmaster.zynito.in",
        image_url: "/quizmaster.png",
        status: "deployed",
        category: "personal"
    },
    {
        id: "hirevotech",
        title: "HireVoTech",
        description: "Technical recruitment and career advisory platform connecting top software engineering talent with high-growth technology enterprises.",
        tech_stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        demo_link: "https://hirevotech.com/",
        image_url: "/hirevotech.png",
        status: "deployed",
        category: "freelance"
    },
    {
        id: "solobuild",
        title: "SoloBuild",
        description: "AI-powered workflow automation platform. Streamlining business processes with intelligent, scalable automation engines.",
        tech_stack: ["Next.js", "TypeScript", "AI", "PostgreSQL"],
        demo_link: "https://solobuild.vercel.app/",
        image_url: "/solobuild-v2.png",
        status: "deployed",
        category: "freelance"
    },
    {
        id: "flipconcept",
        title: "FlipConcept India",
        description: "India's Leading Waterproofing Experts. Delivering engineering-grade protection for industrial and residential structures.",
        tech_stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
        demo_link: "https://flipconceptindia.com/",
        image_url: "/flipconceptindia-v2.png",
        status: "deployed",
        category: "freelance"
    },
    {
        id: "vte",
        title: "Vishal Tools Enterprise",
        description: "Precision Engineering Redefined. World-class industrial machinery and custom engineering solutions delivered globally.",
        tech_stack: ["Next.js", "React", "Tailwind CSS"],
        github_link: "https://github.com/MrSanito/vte",
        demo_link: "https://www.vishaltoolsententerprise.in/",
        image_url: "/project-vte.png",
        status: "deployed",
        category: "freelance"
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
