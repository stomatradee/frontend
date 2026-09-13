"use client";

import Image from "next/image";

interface NavItem {
    label: string;
    href: string;
}

interface NavbarProps {
    logoSrc: string;
    navItems: NavItem[];
    ctaLabel: string;
    handleConnectWallet: () => void;
    handleNavItemClick: (href: string) => void;
}

export default function Navbar({
    logoSrc,
    navItems,
    ctaLabel,
    handleConnectWallet,
    handleNavItemClick,
}: NavbarProps) {
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0aB3] backdrop-blur-md border-b border-white/5"
        >
            <div className="flex justify-between items-center px-6 lg:px-32 py-2 min-h-[64px]">
                {/* Logo */}
                <div
                    onClick={() => handleNavItemClick("/")}
                    className="cursor-pointer flex items-center"
                >
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
                <div className="hidden md:flex flex-row gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => handleNavItemClick(item.href)}
                            className="text-white/70 text-sm font-medium hover:text-primary hover:bg-transparent transition-colors duration-300"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* CTA Button */}
                <button
                    onClick={handleConnectWallet}
                    className="rounded-full border border-primary text-primary font-semibold text-sm px-6 py-2 hover:bg-primary hover:text-background transition-all duration-300"
                >
                    {ctaLabel}
                </button>
            </div>
        </header>
    );
}

