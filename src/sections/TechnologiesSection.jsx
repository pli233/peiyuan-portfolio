import { RevealOnScroll } from "../hooks/useScrollReveal";

const stacks = [
    {
        title: "Languages",
        count: "10 skills",
        iconColor: "#3B82F6",
        iconBg: "#3B82F615",
        items: ["Python", "Java", "C", "SQL", "R", "HTML", "CSS", "JavaScript", "TypeScript", "GO"],
    },
    {
        title: "AI / ML",
        count: "7 skills",
        iconColor: "#8B5CF6",
        iconBg: "#8B5CF615",
        items: ["TensorFlow", "PyTorch", "LangChain", "LangGraph", "RAG", "MCP", "Lightly"],
    },
    {
        title: "Frameworks",
        count: "6 skills",
        iconColor: "#06B6D4",
        iconBg: "#06B6D415",
        items: ["React", "Next.js", "Spring Boot", "Django", "GTEST", "MOCKCPP"],
    },
    {
        title: "UI / UX",
        count: "4 skills",
        iconColor: "#EC4899",
        iconBg: "#EC489915",
        items: ["Figma", "Tailwind CSS", "Material UI", "Radix UI"],
    },
    {
        title: "Databases",
        count: "4 skills",
        iconColor: "#22C55E",
        iconBg: "#22C55E15",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
        title: "DevOps & Tools",
        count: "9 skills",
        iconColor: "#F97316",
        iconBg: "#F9731615",
        items: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "GCP", "Jira", "Confluence", "Agile/Scrum"],
    },
];

const icons = {
    "Languages": (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    ),
    "AI / ML": (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    ),
    "Frameworks": (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
    ),
    "UI / UX": (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
    ),
    "Databases": (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
    ),
    "DevOps & Tools": (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
};

export default function TechnologiesSection() {
    return (
        <section id="technologies" className="py-16">
            <div className="section-container">
                <RevealOnScroll>
                    <div className="section-header">
                        <h2>Technologies</h2>
                        <p>Tools and technologies I work with</p>
                    </div>
                </RevealOnScroll>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {stacks.map((stack, i) => (
                        <RevealOnScroll key={stack.title} delay={i * 80}>
                            <div className="scandi-card p-6 h-full">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                                        style={{ backgroundColor: stack.iconBg, color: stack.iconColor }}
                                    >
                                        {icons[stack.title]}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-scandi-charcoal">{stack.title}</h3>
                                        <span className="text-xs text-scandi-text-muted">{stack.count}</span>
                                    </div>
                                </div>

                                {/* Pills */}
                                <div className="flex flex-wrap gap-1.5">
                                    {stack.items.map((item) => (
                                        <span key={item} className="scandi-pill hover:bg-scandi-muted cursor-default">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
