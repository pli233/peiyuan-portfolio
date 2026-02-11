import { useState } from "react";
import { socialMediaUrl } from "../Details";
import { RevealOnScroll } from "../hooks/useScrollReveal";

export default function ContactSection() {
    const [copied, setCopied] = useState(false);
    const emailAddr = socialMediaUrl.email.replace("mailto:", "");

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(emailAddr);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.prompt("Copy email:", emailAddr);
        }
    };

    return (
        <section id="contact" className="py-16 pb-24">
            <div className="section-container">
                <RevealOnScroll>
                    <div className="section-header text-center">
                        <h2>Get in Touch</h2>
                        <p>Feel free to reach out through any of these channels</p>
                    </div>
                </RevealOnScroll>

                <div className="grid md:grid-cols-3 gap-5">
                    {/* Email */}
                    <RevealOnScroll delay={0}>
                        <div className="scandi-card p-7 flex flex-col items-center text-center gap-4 h-full">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-scandi-sage/[0.08]">
                                <svg className="w-6 h-6 text-scandi-sage" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-base font-semibold text-scandi-charcoal">Email</h3>
                            <p className="text-scandi-text-secondary text-[13px]">{emailAddr}</p>
                            <button
                                onClick={copyEmail}
                                className="btn-primary text-xs mt-auto"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    {copied ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    )}
                                </svg>
                                <span>{copied ? "Copied!" : "Copy Address"}</span>
                            </button>
                        </div>
                    </RevealOnScroll>

                    {/* LinkedIn */}
                    <RevealOnScroll delay={120}>
                        <div className="scandi-card p-7 flex flex-col items-center text-center gap-4 h-full">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(59, 130, 246, 0.08)" }}>
                                <svg className="w-6 h-6 text-[#3B82F6]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </div>
                            <h3 className="text-base font-semibold text-scandi-charcoal">LinkedIn</h3>
                            <p className="text-scandi-text-secondary text-[13px]">Connect with me professionally</p>
                            <a
                                href={socialMediaUrl.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline text-xs mt-auto"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span>Visit Profile</span>
                            </a>
                        </div>
                    </RevealOnScroll>

                    {/* GitHub */}
                    <RevealOnScroll delay={240}>
                        <div className="scandi-card p-7 flex flex-col items-center text-center gap-4 h-full">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(26, 26, 46, 0.08)" }}>
                                <svg className="w-6 h-6 text-scandi-charcoal" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-base font-semibold text-scandi-charcoal">GitHub</h3>
                            <p className="text-scandi-text-secondary text-[13px]">Check out my open source work</p>
                            <a
                                href={socialMediaUrl.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline text-xs mt-auto"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span>Visit Profile</span>
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
