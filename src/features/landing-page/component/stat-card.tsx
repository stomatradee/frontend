"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { Card, CardContent } from "@/core/component/shadcn-ui/card";
import { Button } from "@/core/component/shadcn-ui/button";

interface StatCardProps {
    title: string;
    value: string;
    description: string;
    variant?: "default" | "featured";
    ctaLabel?: string;
    ctaImage?: string;
    handleSustainabilityClick?: () => void;
}

export default function StatCard({
    title,
    value,
    description,
    variant = "default",
    ctaLabel,
    ctaImage,
    handleSustainabilityClick,
}: StatCardProps) {
    if (variant === "featured") {
        return (
            <Card className="relative flex flex-col justify-between overflow-hidden border-border/50 bg-gradient-to-br from-[#0069234D] to-[#0A0A0A] min-h-[180px]">
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

                <CardContent className="relative z-10 flex flex-col gap-3.5 p-6 h-full justify-end">
                    <h6 className="text-[1.125rem] sm:text-[1.25rem] font-bold text-primary leading-tight">
                        {title}
                    </h6>

                    {ctaLabel && (
                        <Button
                            onClick={handleSustainabilityClick}
                            variant="outline"
                            size="sm"
                            className="w-fit flex items-center gap-1 rounded-full border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/30"
                        >
                            {ctaLabel}
                            <Icon icon="mdi:arrow-top-right" className="text-[12px]" />
                        </Button>
                    )}
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="flex flex-col justify-center gap-2.5 border-border/50 bg-card p-6 min-h-[180px]">
            <span className="text-muted-foreground text-xs tracking-widest font-medium uppercase">
                {title}
            </span>
            <div className="flex items-baseline gap-2">
                <h3 className="text-[1.875rem] sm:text-[2.25rem] font-bold text-primary">
                    {value}
                </h3>
                <span className="text-muted-foreground font-light text-sm">
                    {description}
                </span>
            </div>
        </Card>
    );
}

