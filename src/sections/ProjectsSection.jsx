import { projects } from "../Details";
import { RevealOnScroll } from "../hooks/useScrollReveal";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-16">
            <div className="section-container">
                <RevealOnScroll>
                    <div className="section-header">
                        <h2>Projects</h2>
                        <p>Featured work and side projects</p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project, i) => (
                        <RevealOnScroll key={project.title} delay={i * 120}>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="scandi-card overflow-hidden group flex flex-col cursor-pointer h-full"
                            >
                                {/* Image */}
                                {project.image && (
                                    <div className="h-[180px] overflow-hidden bg-scandi-surface relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                        />
                                        {/* Hover overlay with arrow */}
                                        <div className="absolute inset-0 bg-scandi-charcoal/0 group-hover:bg-scandi-charcoal/10 transition-colors duration-300 flex items-center justify-center">
                                            <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                                                <svg className="w-4 h-4 text-scandi-charcoal" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Body */}
                                <div className="p-5 flex flex-col flex-1">
                                    {/* Tag */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="scandi-pill">{project.category}</span>
                                        {project.status && (
                                            <span className="scandi-pill flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                {project.status}
                                            </span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base font-semibold text-scandi-charcoal mb-2 group-hover:text-scandi-sage transition-colors duration-200">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-scandi-text-body text-[13px] leading-relaxed mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mt-auto flex flex-wrap gap-1.5">
                                        {project.techStack.map((tech) => (
                                            <span key={tech} className="scandi-pill">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
