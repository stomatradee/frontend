"use client";

import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

interface StatCardProps {
    title: string;
    value: string;
    description: string;
    variant?: "default" | "featured";
    ctaLabel?: string;
    ctaImage?: string;
}

import { useLandingPageActions } from "../context/landing-page-context";

export default function StatCard({
    title,
    value,
    description,
    variant = "default",
    ctaLabel,
    ctaImage,
}: StatCardProps) {
    const { handleSustainabilityClick } = useLandingPageActions();
    if (variant === "featured") {
        return (
            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    borderRadius: "1rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "linear-gradient(to bottom right, rgba(0,105,35,0.3), #0A0A0A)",
                    p: 3,
                    minHeight: 180,
                }}
            >
                {/* Background Image */}
                {ctaImage && (
                    <Image
                        src={ctaImage}
                        alt={title}
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "right bottom",
                            opacity: 0.5,
                            zIndex: 0,
                        }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                )}

                <Box sx={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", gap: 1.5 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: "1.125rem", sm: "1.25rem" },
                            fontWeight: 700,
                            color: "var(--primary-colors)",
                            lineHeight: 1.3,
                        }}
                    >
                        {title}
                    </Typography>

                    {ctaLabel && (
                        <Button
                            onClick={handleSustainabilityClick}
                            variant="outlined"
                            endIcon={<NorthEastIcon sx={{ fontSize: 12 }} />}
                            size="small"
                            sx={{
                                width: "fit-content",
                                borderRadius: "9999px",
                                borderColor: "rgba(255,255,255,0.2)",
                                backgroundColor: "rgba(255,255,255,0.05)",
                                color: "white",
                                fontWeight: 500,
                                fontSize: "0.75rem",
                                textTransform: "none",
                                px: 2,
                                py: 0.5,
                                "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                    borderColor: "rgba(255,255,255,0.3)",
                                },
                                transition: "all 0.3s",
                            }}
                        >
                            {ctaLabel}
                        </Button>
                    )}
                </Box>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 1,
                borderRadius: "1rem",
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "var(--secondary-bg-colors)",
                p: 3,
                minHeight: 180,
            }}
        >
            <Typography
                variant="overline"
                sx={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    fontWeight: 500,
                }}
            >
                {title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: "1.875rem", sm: "2.25rem" },
                        fontWeight: 700,
                        color: "var(--primary-colors)",
                    }}
                >
                    {value}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: "rgba(255,255,255,0.6)",
                        fontWeight: 300,
                    }}
                >
                    {description}
                </Typography>
            </Box>
        </Box>
    );
}
