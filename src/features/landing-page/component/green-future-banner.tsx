import Image from "next/image";
import { Icon } from "@iconify/react";

interface GreenFutureBannerProps {
    heading: string;
    description?: string;
    backgroundImage?: string;
    ctaButton?: {
        label: string;
        onClick: () => void;
    };
}

export default function GreenFutureBanner({
    heading,
    description,
    backgroundImage,
    ctaButton,
}: GreenFutureBannerProps) {
    return (
        <div className="relative w-full overflow-hidden py-24 lg:py-36 px-6 lg:px-32">
            {/* Background Image */}
            {backgroundImage && (
                <Image
                    src={backgroundImage}
                    alt=""
                    fill
                    className="object-cover object-center z-0"
                    sizes="100vw"
                />
            )}

            {/* Dark overlay */}
            <div className="absolute inset-0 z-[1] bg-black/50" />

            {/* Content */}
            <div className="relative z-[2] flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">
                {/* Heading */}
                <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-bold italic leading-[1.15] text-white">
                    {heading}
                </h2>

                {/* Description */}
                {description && (
                    <p className="text-[0.875rem] sm:text-[1rem] text-white/60 font-light leading-relaxed max-w-2xl">
                        {description}
                    </p>
                )}

                {/* CTA Button */}
                {ctaButton && (
                    <button
                        onClick={ctaButton.onClick}
                        className="flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm px-8 py-3 rounded-lg hover:border-white/60 hover:bg-white/5 transition-colors"
                    >
                        {ctaButton.label}
                        <Icon icon="mdi:arrow-top-right" className="text-base" />
                    </button>
                )}
            </div>
        </div>
    );
}

