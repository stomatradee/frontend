"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

interface CtaBannerProps {
    badgeText?: string;
    heading: string;
    description?: string;
    mobileBackgroundImage?: string;
    desktopBackgroundImage?: string;
    primaryButtonLabel?: string;
    secondaryButtonLabel?: string;
    handleConnectWallet?: () => void;
    handleWhatIsStomatrade?: () => void;
}

export default function CtaBanner({
    badgeText,
    heading,
    description,
    mobileBackgroundImage,
    desktopBackgroundImage,
    primaryButtonLabel,
    secondaryButtonLabel,
    handleConnectWallet,
    handleWhatIsStomatrade,
}: CtaBannerProps) {
    return (
        <div className="relative w-full overflow-hidden flex items-center justify-center py-24 lg:py-48 px-6 lg:px-32">
            {/* Background Image - Mobile */}
            {mobileBackgroundImage && (
                <div className="block md:hidden absolute inset-0 z-0">
                    <Image
                        src={mobileBackgroundImage}
                        alt=""
                        fill
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </div>
            )}

            {/* Background Image - Desktop */}
            {desktopBackgroundImage && (
                <div className="hidden md:block absolute inset-0 z-0">
                    <Image
                        src={desktopBackgroundImage}
                        alt=""
                        fill
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </div>
            )}

            {/* Content */}
            <div className="relative z-[2] flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">
                {/* Badge */}
                {badgeText && (
                    <span className="border border-primary text-primary font-semibold text-xs px-4 py-1.5 rounded-full">
                        {badgeText}
                    </span>
                )}

                {/* Heading */}
                <h2 className="text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem] font-bold leading-[1.15] text-white">
                    {heading}
                </h2>

                {/* Description */}
                {description && (
                    <p className="text-[0.875rem] sm:text-[1rem] text-white/60 font-light leading-relaxed max-w-2xl">
                        {description}
                    </p>
                )}

                {/* CTA Buttons */}
                {(primaryButtonLabel || secondaryButtonLabel) && (
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        {primaryButtonLabel && (
                            <button
                                onClick={handleConnectWallet}
                                className="bg-primary text-[#0A0A0A] font-bold text-sm px-8 py-3 rounded-lg hover:bg-[#4CFDB3] transition-colors"
                            >
                                {primaryButtonLabel}
                            </button>
                        )}

                        {secondaryButtonLabel && (
                            <button
                                onClick={handleWhatIsStomatrade}
                                className="flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm px-8 py-3 rounded-lg hover:border-white/60 hover:bg-white/5 transition-colors"
                            >
                                {secondaryButtonLabel}
                                <Icon icon="mdi:arrow-top-right" className="text-base" />
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

