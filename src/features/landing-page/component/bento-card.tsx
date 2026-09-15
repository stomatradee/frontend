import Image from "next/image";
import { Card, CardContent } from "@/core/component/shadcn-ui/card";
import { Badge } from "@/core/component/shadcn-ui/badge";

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
        <Card
            onClick={onClick}
            className={`relative flex flex-col justify-end overflow-hidden ${minHeightClass} transition-all duration-300 border-border/50 bg-card ${isClickable ? 'cursor-pointer hover:border-border hover:-translate-y-0.5' : 'cursor-default'}`}
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
            <CardContent className="relative z-[2] flex flex-col gap-2 mt-auto p-6">
                {/* Badge */}
                {badgeText && (
                    <Badge variant="default" className="w-fit mb-2 text-[10px] tracking-wider px-3 py-0.5">
                        {badgeText}
                    </Badge>
                )}

                {/* Highlight value */}
                {highlightValue && (
                    <h4 className="text-[1.5rem] sm:text-[2rem] font-bold text-primary">
                        {highlightValue}
                    </h4>
                )}

                {/* Title */}
                <h6 className="text-[1rem] sm:text-[1.125rem] font-bold text-foreground leading-tight">
                    {title}
                </h6>

                {/* Description */}
                {description && (
                    <p className="text-muted-foreground text-[0.75rem] leading-relaxed font-light">
                        {description}
                    </p>
                )}
            </CardContent>
        </Card>
    );
}

