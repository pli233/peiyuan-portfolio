export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-scandi-border bg-scandi-bg/80 backdrop-blur-sm">
            <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20 py-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-scandi-text-secondary">
                    <span>&copy; {year} Peiyuan Li. All rights reserved.</span>
                    <div className="flex items-center gap-1.5">
                        <span>Built with</span>
                        <span className="font-medium text-scandi-charcoal">React</span>
                        <span className="text-scandi-text-muted">+</span>
                        <span className="font-medium text-scandi-charcoal">Tailwind</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
