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
        id: "solobuild",
        title: "SoloBuild",
        description: "AI-powered workflow automation platform. Streamlining business processes with intelligent, scalable automation engines.",
        tech_stack: ["Next.js", "TypeScript", "AI", "PostgreSQL"],
        demo_link: "https://solobuild.vercel.app/",
        image_url: "/project-solobuild.png",
        status: "deployed"
    },
    {
        id: "flipconcept",
        title: "FlipConcept India",
        description: "India's Leading Waterproofing Experts. Delivering engineering-grade protection for industrial and residential structures.",
        tech_stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
        demo_link: "https://flipconceptindia.com/",
        image_url: "/project-flipconcept.png",
        status: "deployed"
    },
    {
        id: "quiz-master-turbo",
        title: "Quiz Master Turbo",
        description: "A real-time comprehensive quiz platform with live analytics, dashboard, and multiplayer support. Built for high scalability.",
        tech_stack: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
        github_link: "https://github.com/MrSanito/quizMasterTurbo",
        demo_link: "https://quiz-master-turbo-quiz-master.vercel.app/dashboard",
        image_url: "/project-quizmaster.png",
        status: "deployed"
    },
    {
        id: "tomato",
        title: "Tomato (Zomato Clone)",
        description: "Enterprise-grade food delivery system built with microservices. Highly scalable architecture with real-time tracking.",
        tech_stack: ["Microservices", "Kubernetes", "Docker", "RabbitMQ"],
        status: "built"
    },
    {
        id: "vte",
        title: "Vishal Tools Enterprise",
        description: "Precision Engineering Redefined. World-class industrial machinery and custom engineering solutions delivered globally.",
        tech_stack: ["Next.js", "React", "Tailwind CSS"],
        github_link: "https://github.com/MrSanito/vte",
        demo_link: "https://www.vishaltoolsententerprise.in/",
        image_url: "/project-vte.png",
        status: "deployed"
    },
    {
        id: "portfolio",
        title: "Personal Portfolio",
        description: "Modern, high-performance portfolio website built with Next.js 15, Framer Motion, and Tailwind CSS. Features dynamic interactive elements.",
        tech_stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        github_link: "https://github.com/MrSanito/temp-portfolio",
        demo_link: "https://zynito.in",
        image_url: "/project-portfolio.png",
        status: "deployed"
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
