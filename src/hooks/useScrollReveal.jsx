import { useEffect, useRef, useState } from "react";

export function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? "0px 0px -40px 0px" }
        );

        const el = ref.current;
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, []);

    return { ref, isVisible };
}

export function RevealOnScroll({ children, className = "", delay = 0, direction = "up" }) {
    const { ref, isVisible } = useScrollReveal();

    const directionStyles = {
        up: "translate-y-8",
        down: "-translate-y-8",
        left: "translate-x-8",
        right: "-translate-x-8",
        none: "",
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${
                isVisible
                    ? "opacity-100 translate-y-0 translate-x-0"
                    : `opacity-0 ${directionStyles[direction]}`
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
