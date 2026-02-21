import Image from "next/image";

interface ButtonConfig {
    label: string;
    onClick: () => void;
}

interface HeroBannerProps {
    badgeText: string;
    heading: string;
    subheading: string;
    backgroundImage: string;
    primaryButton: ButtonConfig;
    secondaryButton: ButtonConfig;
}

export default function HeroBanner({
    badgeText,
    heading,
    subheading,
    backgroundImage,
    primaryButton,
    secondaryButton,
}: HeroBannerProps) {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src={backgroundImage}
                alt="Banner Background"
                fill
                priority
                className="object-cover object-center z-0"
                sizes="100vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-4xl mx-auto gap-6">
                {/* Announcement Badge */}
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-2">
                    <span className="rounded-full bg-[var(--primary-colors)] px-2.5 py-0.5 text-[10px] font-bold uppercase text-[#0A0A0A] tracking-wider">
                        NOW
                    </span>
                    <span className="text-sm text-white/80 font-medium">
                        {badgeText}
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                    {heading}
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg text-white/50 max-w-xl font-light">
                    {subheading}
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center gap-4 mt-4">
                    <button
                        onClick={primaryButton.onClick}
                        className="group flex items-center gap-2 rounded-full border border-[var(--primary-colors)] bg-[var(--primary-colors)]/10 px-7 py-3 text-sm font-semibold text-[var(--primary-colors)] hover:bg-[var(--primary-colors)] hover:text-[#0A0A0A] transition-all duration-300 cursor-pointer"
                    >
                        {primaryButton.label}
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </button>
                    <button
                        onClick={secondaryButton.onClick}
                        className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                        {secondaryButton.label}
                    </button>
                </div>
            </div>
        </section>
    );
}
