"use client";

import Image from "next/image";
import { Box, Typography, Chip } from "@mui/material";

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
    const minHeight = size === "large" ? 360 : size === "medium" ? 300 : 260;

    return (
        <Box
            onClick={onClick}
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                overflow: "hidden",
                borderRadius: "1rem",
                border: "1px solid rgba(255,255,255,0.08)",
                backgroundColor: "var(--secondary-bg-colors)",
                p: 3,
                minHeight,
                cursor: isClickable ? "pointer" : "default",
                transition: "all 0.3s ease",
                "&:hover": isClickable
                    ? {
                          borderColor: "rgba(255,255,255,0.15)",
                          transform: "translateY(-2px)",
                      }
                    : {},
            }}
        >
            {/* Background Image */}
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        zIndex: 0,
                    }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            )}

            {/* Dark overlay for readability */}
            {/* {imageSrc && (
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        background: "linear-gradient(to top, rgba(10,10,10,0.85), rgba(10,10,10,0.2))",
                    }}
                />
            )} */}

            {/* Content */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    mt: "auto",
                }}
            >
                {/* Badge */}
                {badgeText && (
                    <Chip
                        label={badgeText}
                        size="small"
                        sx={{
                            width: "fit-content",
                            backgroundColor: "var(--primary-colors)",
                            color: "#0A0A0A",
                            fontWeight: 700,
                            fontSize: "10px",
                            height: "auto",
                            letterSpacing: "0.05em",
                            mb: 1,
                            "& .MuiChip-label": { px: 1.5, py: 0.5 },
                        }}
                    />
                )}

                {/* Highlight value */}
                {highlightValue && (
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: "1.5rem", sm: "2rem" },
                            fontWeight: 700,
                            color: "var(--primary-colors)",
                        }}
                    >
                        {highlightValue}
                    </Typography>
                )}

                {/* Title */}
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: "1rem", sm: "1.125rem" },
                        fontWeight: 700,
                        color: "white",
                        lineHeight: 1.3,
                    }}
                >
                    {title}
                </Typography>

                {/* Description */}
                {description && (
                    <Typography
                        variant="body2"
                        sx={{
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "0.75rem",
                            lineHeight: 1.5,
                            fontWeight: 300,
                        }}
                    >
                        {description}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}
