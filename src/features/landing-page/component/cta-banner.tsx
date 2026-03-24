"use client";

import Image from "next/image";
import { Box, Typography, Button, Stack, Chip } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

interface CtaBannerProps {
    badgeText?: string;
    heading: string;
    description?: string;
    mobileBackgroundImage?: string;
    desktopBackgroundImage?: string;
    primaryButtonLabel?: string;
    secondaryButtonLabel?: string;
}

import { useLandingPageActions } from "../context/landing-page-context";

export default function CtaBanner({
    badgeText,
    heading,
    description,
    mobileBackgroundImage,
    desktopBackgroundImage,
    primaryButtonLabel,
    secondaryButtonLabel,
}: CtaBannerProps) {
    const { handleConnectWallet, handleWhatIsStomatrade } = useLandingPageActions();
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                // aspectRatio: { xs: "auto", md: "2.75 / 1" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: { xs: 12, lg: 48 },
                px: { xs: 3, lg: 8 },
            }}
        >
            {/* Background Image - Mobile */}
            {mobileBackgroundImage && (
                <Box sx={{ display: { xs: "block", md: "none" }, position: "absolute", inset: 0, zIndex: 0 }}>
                    <Image
                        src={mobileBackgroundImage}
                        alt=""
                        fill
                        style={{ objectPosition: "center" }}
                        sizes="100vw"
                    />
                </Box>
            )}

            {/* Background Image - Desktop */}
            {desktopBackgroundImage && (
                <Box sx={{ display: { xs: "none", md: "block" }, position: "absolute", inset: 0, zIndex: 0 }}>
                    <Image
                        src={desktopBackgroundImage}
                        alt=""
                        fill
                        style={{ objectPosition: "center" }}
                        sizes="100vw"
                    />
                </Box>
            )}

            {/* Dark overlay */}
            {/* <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    backgroundColor: "rgba(10,10,10,0.6)",
                }}
            /> */}

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
                {(primaryButtonLabel || secondaryButtonLabel) && (
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        sx={{ pt: 1 }}
                    >
                        {primaryButtonLabel && (
                            <Button
                                variant="contained"
                                onClick={handleConnectWallet}
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
                                {primaryButtonLabel}
                            </Button>
                        )}

                        {secondaryButtonLabel && (
                            <Button
                                variant="outlined"
                                onClick={handleWhatIsStomatrade}
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
                                {secondaryButtonLabel}
                            </Button>
                        )}
                    </Stack>
                )}
            </Stack>
        </Box>
    );
}
