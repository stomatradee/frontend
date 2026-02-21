import Image from "next/image";

interface NavItem {
    label: string;
    href: string;
}

interface NavbarProps {
    logoSrc: string;
    navItems: NavItem[];
    ctaLabel: string;
    onCtaClick: () => void;
    onNavItemClick: (href: string) => void;
}

export default function Navbar({
    logoSrc,
    navItems,
    ctaLabel,
    onCtaClick,
    onNavItemClick,
}: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 lg:px-16 backdrop-blur-md bg-[#0A0A0A]/70 border-b border-white/5">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavItemClick("/")}>
                <Image
                    src={logoSrc}
                    alt="Stomatrade Logo"
                    width={160}
                    height={40}
                    priority
                    className="h-8 w-auto object-contain"
                />
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <button
                            onClick={() => onNavItemClick(item.href)}
                            className="text-sm text-white/70 hover:text-[var(--primary-colors)] transition-colors duration-300 cursor-pointer font-medium"
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <button
                onClick={onCtaClick}
                className="rounded-full border border-[var(--primary-colors)] bg-transparent px-6 py-2 text-sm font-semibold text-[var(--primary-colors)] hover:bg-[var(--primary-colors)] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer"
            >
                {ctaLabel}
            </button>
        </nav>
    );
}
