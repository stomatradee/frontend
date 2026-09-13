import Image from "next/image";

interface BentoCardProps {
    title: string;
    description?: string;
    imageSrc?: string;
    badgeText?: string;
    highlightValue?: string;
    size?: "small" | "medium" | "large";
    onClick?: () => void;
}

export default function BentoCard({
    title,
    description,
    imageSrc,
    badgeText,
    highlightValue,
    size = "small",
    onClick,
}: BentoCardProps) {
    const isClickable = !!onClick;
    const minHeightClass = 
        size === "large" ? "min-h-[360px]" : 
        size === "medium" ? "min-h-[300px]" : 
        "min-h-[260px]";

    return (
        <div
            onClick={onClick}
            className={`relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-background-secondary p-6 ${minHeightClass} transition-all duration-300 ${isClickable ? 'cursor-pointer hover:border-white/15 hover:-translate-y-0.5' : 'cursor-default'}`}
        >
            {/* Background Image */}
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover object-center z-0"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            )}

            {/* Content */}
            <div className="relative z-[2] flex flex-col gap-2 mt-auto">
                {/* Badge */}
                {badgeText && (
                    <span className="w-fit bg-primary text-[#0A0A0A] font-bold text-[10px] tracking-wider mb-2 px-3 py-1 rounded-full">
                        {badgeText}
                    </span>
                )}

                {/* Highlight value */}
                {highlightValue && (
                    <h4 className="text-[1.5rem] sm:text-[2rem] font-bold text-primary">
                        {highlightValue}
                    </h4>
                )}

                {/* Title */}
                <h6 className="text-[1rem] sm:text-[1.125rem] font-bold text-white leading-tight">
                    {title}
                </h6>

                {/* Description */}
                {description && (
                    <p className="text-white/50 text-[0.75rem] leading-relaxed font-light">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}

