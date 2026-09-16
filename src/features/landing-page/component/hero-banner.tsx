"use client";

import Image from "next/image";
import { Badge } from "@/core/component/shadcn-ui/badge";
import ButtonConnectWalletComponent from "@/core/component/button-connect-wallet-component";

interface HeroBannerProps {
    badgeText: string;
    heading: string;
    subheading: string;
    mobileBackgroundImage: string;
    desktopBackgroundImage: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    handleConnectWallet: (address: string) => void;
    handleLearnMore: () => void;
}

export default function HeroBanner({
    badgeText,
    heading,
    subheading,
    mobileBackgroundImage,
    desktopBackgroundImage,
    handleConnectWallet,
}: HeroBannerProps) {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image - Mobile */}
            <div className="block md:hidden absolute inset-0 z-0">
                <Image
                    src={mobileBackgroundImage}
                    alt="Banner Background"
                    fill
                    priority
                    style={{ objectPosition: "center", objectFit: "cover" }}
                    sizes="100vw"
                />
            </div>

            {/* Background Image - Desktop */}
            <div className="hidden md:block absolute inset-0 z-0">
                <Image
                    src={desktopBackgroundImage}
                    alt="Banner Background"
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="100vw"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0a0a0a66] via-transparent to-[#0A0A0A]" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 pt-48 pb-32 max-w-4xl mx-auto flex flex-col items-center gap-6">
                {/* Announcement Badge */}
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-2.5 py-1">
                    <Badge variant="default" className="text-[10px] tracking-wider px-2 py-0.5">
                        NOW
                    </Badge>
                    <span className="text-white/80 font-medium text-sm">
                        {badgeText}
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-[2.25rem] sm:text-[3rem] lg:text-[3.75rem] font-bold leading-[1.1] tracking-tight text-white">
                    {heading}
                </h1>

                {/* Subheading */}
                <p className="text-[1rem] sm:text-[1.125rem] text-white/50 max-w-2xl font-light">
                    {subheading}
                </p>

                {/* CTA Buttons */}
                <div className="w-[180px] md:w-[220px]">
                    <ButtonConnectWalletComponent onConnectWalletClick={handleConnectWallet} />
                </div>
            </div>
        </section>
    );
}

