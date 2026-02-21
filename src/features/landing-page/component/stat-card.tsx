import Image from "next/image";

interface StatCardProps {
    title: string;
    value: string;
    description: string;
    variant?: "default" | "featured";
    ctaLabel?: string;
    ctaImage?: string;
    onCtaClick?: () => void;
}

export default function StatCard({
    title,
    value,
    description,
    variant = "default",
    ctaLabel,
    ctaImage,
    onCtaClick,
}: StatCardProps) {
    if (variant === "featured") {
        return (
            <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--four-green-colors)]/30 to-[#0A0A0A] p-6 min-h-[180px]">
                {/* Background Image */}
                {ctaImage && (
                    <Image
                        src={ctaImage}
                        alt={title}
                        fill
                        className="object-cover object-right-bottom opacity-50 z-0"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                )}

                <div className="relative z-10 flex flex-col gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--primary-colors)] leading-snug">
                        {title}
                    </h3>

                    {ctaLabel && (
                        <button
                            onClick={onCtaClick}
                            className="group flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                        >
                            {ctaLabel}
                            <svg
                                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center gap-2 rounded-2xl border border-white/10 bg-[var(--secondary-bg-colors)] p-6 min-h-[180px]">
            <span className="text-xs text-white/40 uppercase tracking-wider font-medium">
                {title}
            </span>
            <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-[var(--primary-colors)]">
                    {value}
                </span>
                <span className="text-sm text-white/60 font-light">
                    {description}
                </span>
            </div>
        </div>
    );
}
