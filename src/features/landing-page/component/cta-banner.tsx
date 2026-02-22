"use client";

import Image from "next/image";
import { Box, Typography, Button, Stack, Chip } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

interface CtaBannerProps {
    badgeText?: string;
    heading: string;
    description?: string;
    backgroundImage?: string;
    primaryButton?: {
        label: string;
        onClick: () => void;
    };
    secondaryButton?: {
        label: string;
        onClick: () => void;
    };
}

export default function CtaBanner({
    badgeText,
    heading,
    description,
    backgroundImage,
    primaryButton,
    secondaryButton,
}: CtaBannerProps) {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                py: { xs: 10, lg: 14 },
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
                    priority={false}
                />
            )}

            {/* Dark overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    backgroundColor: "rgba(10,10,10,0.6)",
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
                {/* Badge */}
                {badgeText && (
                    <Chip
                        label={badgeText}
                        variant="outlined"
                        size="small"
                        sx={{
                            borderColor: "var(--primary-colors)",
                            color: "var(--primary-colors)",
                            fontWeight: 600,
                            fontSize: "0.75rem",
                            height: "auto",
                            "& .MuiChip-label": { px: 2, py: 0.75 },
                        }}
                    />
                )}

                {/* Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "1.75rem", sm: "2.25rem", lg: "3rem" },
                        fontWeight: 700,
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

                {/* CTA Buttons */}
                {(primaryButton || secondaryButton) && (
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        sx={{ pt: 1 }}
                    >
                        {primaryButton && (
                            <Button
                                variant="contained"
                                onClick={primaryButton.onClick}
                                sx={{
                                    backgroundColor: "var(--primary-colors)",
                                    color: "#0A0A0A",
                                    fontWeight: 700,
                                    fontSize: "0.875rem",
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: "0.5rem",
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "var(--third-colors)",
                                    },
                                }}
                            >
                                {primaryButton.label}
                            </Button>
                        )}

                        {secondaryButton && (
                            <Button
                                variant="outlined"
                                onClick={secondaryButton.onClick}
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
                                {secondaryButton.label}
                            </Button>
                        )}
                    </Stack>
                )}
            </Stack>
        </Box>
    );
}
