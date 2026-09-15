"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/core/component/shadcn-ui/button";
import { Badge } from "@/core/component/shadcn-ui/badge";

interface HeroBannerProps {
    badgeText: string;
    heading: string;
    subheading: string;
    mobileBackgroundImage: string;
    desktopBackgroundImage: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    handleConnectWallet: () => void;
    handleLearnMore: () => void;
}

export default function HeroBanner({
    badgeText,
    heading,
    subheading,
    mobileBackgroundImage,
    desktopBackgroundImage,
    primaryButtonLabel,
    secondaryButtonLabel,
    handleConnectWallet,
    handleLearnMore,
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
                <div className="flex flex-row gap-4 mt-2">
                    <Button
                        onClick={handleConnectWallet}
                        variant="default"
                        size="lg"
                        className="bg-[rgba(44,255,158,0.1)] text-primary border border-primary hover:bg-primary hover:text-[#0A0A0A] font-semibold px-6 flex gap-2 rounded-full"
                    >
                        {primaryButtonLabel}
                        <Icon icon="mdi:arrow-top-right" className="text-base" />
                    </Button>
                    <Button
                        onClick={handleLearnMore}
                        variant="outline"
                        size="lg"
                        className="rounded-full bg-white/5 border-white/20 text-white font-semibold px-6 hover:bg-white/10 hover:border-white/30"
                    >
                        {secondaryButtonLabel}
                    </Button>
                </div>
            </div>
        </section>
    );
}

