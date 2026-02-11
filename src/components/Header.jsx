import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { personalDetails, socialMediaUrl, experienc, educations, projects } from "../Details.js";
import signature from "../assets/signature.png";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchInputRef = useRef(null);
    const searchContainerRef = useRef(null);
    const location = useLocation();

    // Build searchable index
    const searchItems = [
        { label: "Home", section: "home", keywords: "home intro hero about" },
        { label: "Education", section: "education", keywords: educations.map(e => `${e.school} ${e.program} ${e.period} ${e.location}`).join(" ") },
        { label: "Experience", section: "experience", keywords: experienc.map(e => `${e.company} ${e.title} ${e.period} ${e.location}`).join(" ") },
        { label: "Projects", section: "projects", keywords: projects.map(p => `${p.title} ${p.description} ${p.techStack.join(" ")}`).join(" ") },
        { label: "Tech Stack", section: "technologies", keywords: "technologies skills languages frameworks databases devops" },
        { label: "Contact", section: "contact", keywords: "email linkedin github contact" },
        ...educations.map(e => ({ label: e.school, section: "education", keywords: `${e.school} ${e.program} ${e.badge} ${e.period}` })),
        ...experienc.map(e => ({ label: `${e.title} @ ${e.company}`, section: "experience", keywords: `${e.company} ${e.title} ${e.period} ${e.location}` })),
        ...projects.map(p => ({ label: p.title, section: "projects", keywords: `${p.title} ${p.description} ${p.techStack.join(" ")} ${p.category}` })),
    ];

    const filteredResults = searchQuery.trim()
        ? searchItems.filter(item =>
            item.keywords.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 6)
        : [];

    // Keyboard shortcut: Cmd/Ctrl + K
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setSearchOpen(prev => !prev);
            }
            if (e.key === "Escape") {
                setSearchOpen(false);
                setSearchQuery("");
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (searchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchOpen]);

    // Click outside to close search
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
                setSearchOpen(false);
                setSearchQuery("");
            }
        };
        if (searchOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [searchOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            if (location.pathname === "/") {
                const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
                if (isAtBottom) {
                    setActiveSection("contact");
                    return;
                }
                const sections = ["contact", "technologies", "projects", "experience", "education", "home"];
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 100) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        const hash = location.hash;
        if (hash && location.pathname === "/") {
            const sectionId = hash.replace("#", "");
            let attempts = 0;
            const maxAttempts = 50;
            const scrollToSection = () => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(sectionId);
                } else if (attempts < maxAttempts) {
                    attempts++;
                    requestAnimationFrame(scrollToSection);
                }
            };
            requestAnimationFrame(scrollToSection);
        }
    }, [location]);

    const navItems = [
        { href: "/#education", label: "Education", section: "education" },
        { href: "/#experience", label: "Experience", section: "experience" },
        { href: "/#projects", label: "Projects", section: "projects" },
        { href: "/#technologies", label: "Tech Stack", section: "technologies" },
        { href: "/#contact", label: "Contact", section: "contact" },
    ];

    const handleNavClick = (e, href, section) => {
        if (section) {
            if (location.pathname === "/") {
                e.preventDefault();
                const element = document.getElementById(section);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", href);
                }
            }
        }
        setIsMobileMenuOpen(false);
    };

    const handleSearchSelect = (section) => {
        setSearchOpen(false);
        setSearchQuery("");
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", `/#${section}`);
        }
    };

    const isActive = (section) => {
        if (section === null) return location.pathname === "/resume";
        return location.pathname === "/" && activeSection === section;
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-scandi-bg/80 backdrop-blur-xl ${
                isScrolled ? 'shadow-sm' : ''
            } border-b border-scandi-border`}
        >
            <nav className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20">
                <div className="flex items-center justify-between h-[76px]">
                    {/* Logo */}
                    <div className="flex items-center gap-12">
                        <Link to="/" className="flex items-center group">
                            <img src={signature} alt={personalDetails.name} className="h-8 object-contain" />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href, item.section)}
                                    className={`text-sm font-medium transition-colors duration-200 relative ${
                                        isActive(item.section)
                                            ? 'text-scandi-charcoal after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-scandi-sage after:rounded-full'
                                            : 'text-scandi-text-secondary hover:text-scandi-charcoal'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        {/* Search */}
                        <div className="relative" ref={searchContainerRef}>
                            <button
                                onClick={() => setSearchOpen(true)}
                                className="hidden sm:flex items-center gap-3 h-10 px-4 rounded-full bg-scandi-card border border-scandi-border text-scandi-text-muted text-sm cursor-pointer hover:border-scandi-text-secondary/30 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span>Search</span>
                                <kbd className="hidden md:inline text-[10px] px-1.5 py-0.5 rounded bg-scandi-surface border border-scandi-border text-scandi-text-muted font-sans">
                                    Ctrl K
                                </kbd>
                            </button>

                            {/* Mobile search icon */}
                            <button
                                onClick={() => setSearchOpen(true)}
                                className="sm:hidden p-2 rounded-full text-scandi-text-secondary hover:bg-scandi-surface transition-colors"
                                aria-label="Search"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>

                            {/* Search Dropdown */}
                            {searchOpen && (
                                <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-scandi-card rounded-2xl border border-scandi-border shadow-xl overflow-hidden animate-slide-down z-50">
                                    <div className="flex items-center gap-3 px-4 py-3 border-b border-scandi-border">
                                        <svg className="w-4 h-4 text-scandi-text-muted flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        <input
                                            ref={searchInputRef}
                                            type="text"
                                            placeholder="Search sections, projects, skills..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="flex-1 bg-transparent text-sm text-scandi-charcoal placeholder:text-scandi-text-muted outline-none"
                                        />
                                        <button
                                            onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                                            className="text-xs text-scandi-text-muted hover:text-scandi-charcoal"
                                        >
                                            ESC
                                        </button>
                                    </div>
                                    <div className="max-h-64 overflow-y-auto">
                                        {searchQuery.trim() === "" ? (
                                            <div className="px-4 py-6 text-center text-sm text-scandi-text-muted">
                                                Type to search...
                                            </div>
                                        ) : filteredResults.length === 0 ? (
                                            <div className="px-4 py-6 text-center text-sm text-scandi-text-muted">
                                                No results found
                                            </div>
                                        ) : (
                                            filteredResults.map((item, idx) => (
                                                <button
                                                    key={`${item.section}-${idx}`}
                                                    onClick={() => handleSearchSelect(item.section)}
                                                    className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-scandi-surface transition-colors"
                                                >
                                                    <svg className="w-4 h-4 text-scandi-text-muted flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                    <div>
                                                        <div className="text-sm font-medium text-scandi-charcoal">{item.label}</div>
                                                        <div className="text-xs text-scandi-text-muted capitalize">{item.section}</div>
                                                    </div>
                                                </button>
                                            ))
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Resume Link */}
                        <Link
                            to="/resume"
                            className={`hidden sm:inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                                isActive(null)
                                    ? 'text-scandi-charcoal'
                                    : 'text-scandi-text-secondary hover:text-scandi-charcoal'
                            }`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Resume
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-scandi-text-secondary hover:bg-scandi-surface transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 animate-slide-down border-t border-scandi-border">
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href, item.section)}
                                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                        isActive(item.section)
                                            ? 'bg-scandi-surface text-scandi-charcoal'
                                            : 'text-scandi-text-secondary hover:bg-scandi-surface hover:text-scandi-charcoal'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
