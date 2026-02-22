"use client";

import Image from "next/image";
import { Box, Typography, Button, Stack } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

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
        <Box
            sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                py: { xs: 12, lg: 18 },
                px: { xs: 3, lg: 8 },
            }}
        >
            {/* Background Image */}
            {backgroundImage && (
                <Image
                    src={backgroundImage}
                    alt=""
                    fill
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        zIndex: 0,
                    }}
                    sizes="100vw"
                />
            )}

            {/* Dark overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    backgroundColor: "rgba(10,10,10,0.5)",
                }}
            />

            {/* Content */}
            <Stack
                alignItems="center"
                spacing={3}
                sx={{
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                    maxWidth: "48rem",
                    mx: "auto",
                }}
            >
                {/* Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "2rem", sm: "2.5rem", lg: "3.25rem" },
                        fontWeight: 700,
                        fontStyle: "italic",
                        lineHeight: 1.15,
                        color: "white",
                    }}
                >
                    {heading}
                </Typography>

                {/* Description */}
                {description && (
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                            color: "rgba(255,255,255,0.6)",
                            fontWeight: 300,
                            lineHeight: 1.7,
                            maxWidth: "40rem",
                        }}
                    >
                        {description}
                    </Typography>
                )}

                {/* CTA Button */}
                {ctaButton && (
                    <Button
                        variant="outlined"
                        onClick={ctaButton.onClick}
                        endIcon={<NorthEastIcon sx={{ fontSize: 16 }} />}
                        sx={{
                            borderColor: "rgba(255,255,255,0.3)",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            px: 4,
                            py: 1.5,
                            borderRadius: "0.5rem",
                            textTransform: "none",
                            "&:hover": {
                                borderColor: "rgba(255,255,255,0.6)",
                                backgroundColor: "rgba(255,255,255,0.05)",
                            },
                        }}
                    >
                        {ctaButton.label}
                    </Button>
                )}
            </Stack>
        </Box>
    );
}
