import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/core/component/shadcn-ui/button";

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
                    <Button
                        onClick={ctaButton.onClick}
                        variant="outline"
                        size="lg"
                        className="font-semibold px-8 flex gap-2"
                    >
                        {ctaButton.label}
                        <Icon icon="mdi:arrow-top-right" className="text-base" />
                    </Button>
                )}
            </div>
        </div>
    );
}

