import { useState, useEffect } from "react";
import { personalDetails, socialMediaUrl } from "../Details.js";

export default function HeroSection() {
    const { name, img, about } = personalDetails;
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const roles = ["Full Stack Engineer", "AI Application Developer"];

    useEffect(() => {
        const currentRole = roles[currentIndex];
        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex <= currentRole.length) {
                setDisplayedText(currentRole.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % roles.length);
                }, 2000);
            }
        }, 100);
        return () => clearInterval(typingInterval);
    }, [currentIndex]);

    return (
        <section id="home" className="min-h-screen pt-[76px]">
            <div className="section-container py-20 flex items-center min-h-[calc(100vh-76px)]">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 w-full">
                    {/* Text Content */}
                    <div className="flex-1 space-y-6 animate-fade-in order-2 lg:order-1">
                        <p className="text-scandi-text-secondary text-lg sm:text-xl font-medium tracking-wide uppercase">
                            Hi, I'm
                        </p>

                        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-scandi-charcoal tracking-tight leading-[1.1]">
                            {name}
                        </h1>

                        <div className="h-9">
                            <p className="text-xl sm:text-2xl text-scandi-sage font-medium">
                                {displayedText}
                                <span className="animate-pulse-soft ml-0.5 text-scandi-sage/60">|</span>
                            </p>
                        </div>

                        <p className="text-scandi-text-body text-[15px] leading-[1.8] max-w-xl">
                            {about}
                        </p>

                        {/* Buttons */}
                        <div className="flex items-center gap-3 pt-3">
                            <a href="#contact" className="btn-primary">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Contact Me</span>
                            </a>
                            <a href="/resume" className="btn-outline">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>View Resume</span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href={socialMediaUrl.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-xl bg-scandi-surface flex items-center justify-center text-scandi-text-secondary hover:text-scandi-charcoal hover:bg-scandi-muted hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href={socialMediaUrl.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-xl bg-scandi-surface flex items-center justify-center text-scandi-text-secondary hover:text-scandi-charcoal hover:bg-scandi-muted hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                                aria-label="GitHub"
                            >
                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a
                                href={socialMediaUrl.email}
                                className="w-11 h-11 rounded-xl bg-scandi-surface flex items-center justify-center text-scandi-text-secondary hover:text-scandi-charcoal hover:bg-scandi-muted hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                                aria-label="Email"
                            >
                                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2 animate-slide-up">
                        <div className="relative">
                            <div className="w-[300px] h-[340px] sm:w-[360px] sm:h-[400px] rounded-[24px] overflow-hidden shadow-xl shadow-black/[0.08]">
                                <img
                                    src={img}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Available Badge */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-[-20px] sm:bottom-[40px] bg-scandi-card border border-scandi-border rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-lg shadow-black/[0.06] animate-float">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-scandi-sage/40"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-scandi-sage"></span>
                                </span>
                                <span className="text-scandi-charcoal text-xs font-medium whitespace-nowrap">Available for opportunities</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
