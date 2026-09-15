"use client";

import Image from "next/image";
import { Button } from "@/core/component/shadcn-ui/button";
import ButtonConnectWalletComponent from "@/core/component/button-connect-wallet-component";

interface NavItem {
    label: string;
    href: string;
}

interface NavbarProps {
    logoSrc: string;
    navItems: NavItem[];
    ctaLabel: string;
    handleConnectWallet: (address: string) => void;
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
                <div className="hidden md:flex flex-row gap-2">
                    {navItems.map((item) => (
                        <Button
                            key={item.href}
                            onClick={() => handleNavItemClick(item.href)}
                            variant="ghost"
                            className="text-white/70 font-medium hover:text-primary hover:bg-transparent"
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="w-[150px] md:w-[180px]">
                    <ButtonConnectWalletComponent onConnectWalletClick={handleConnectWallet} />
                </div>
            </div>
        </header>
    );
}

