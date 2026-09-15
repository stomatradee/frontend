"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/core/component/shadcn-ui/button";
import { Badge } from "@/core/component/shadcn-ui/badge";

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
        <div className="relative w-full overflow-hidden flex items-center justify-center aspect-[4/3] md:aspect-[21/9] min-h-[400px] p-6 lg:px-32">
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
                    <Badge variant="outline" className="border-primary text-primary font-semibold text-xs px-4 py-1">
                        {badgeText}
                    </Badge>
                )}

                {/* Heading */}
                <h2 className="text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem] font-bold leading-[1.15] text-foreground">
                    {heading}
                </h2>

                {/* Description */}
                {description && (
                    <p className="text-[0.875rem] sm:text-[1rem] text-muted-foreground font-light leading-relaxed max-w-2xl">
                        {description}
                    </p>
                )}

                {/* CTA Buttons */}
                {(primaryButtonLabel || secondaryButtonLabel) && (
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        {primaryButtonLabel && (
                            <Button
                                onClick={handleConnectWallet}
                                variant="default"
                                size="lg"
                                className="font-bold px-8"
                            >
                                {primaryButtonLabel}
                            </Button>
                        )}

                        {secondaryButtonLabel && (
                            <Button
                                onClick={handleWhatIsStomatrade}
                                variant="outline"
                                size="lg"
                                className="font-semibold px-8 flex gap-2"
                            >
                                {secondaryButtonLabel}
                                <Icon icon="mdi:arrow-top-right" className="text-base" />
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

