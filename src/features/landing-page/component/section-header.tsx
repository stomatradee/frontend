"use client";

import Image from "next/image";
import { Box, Typography, Stack } from "@mui/material";

interface SectionHeaderProps {
    logoSrc?: string;
    heading: string;
    subheading?: string;
}

export default function SectionHeader({
    logoSrc,
    heading,
    subheading,
}: SectionHeaderProps) {
    return (
        <Stack
            alignItems="center"
            spacing={2}
            sx={{ textAlign: "center", mb: 6 }}
        >
            {/* Logo */}
            {logoSrc && (
                <Box sx={{ mb: 1 }}>
                    <Image
                        src={logoSrc}
                        alt="Stomatrade Logo"
                        width={200}
                        height={50}
                        style={{ height: 48, width: "auto", objectFit: "contain" }}
                    />
                </Box>
            )}

            {/* Main Heading */}
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: "1.875rem", sm: "2.5rem", lg: "3rem" },
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: "white",
                    maxWidth: "48rem",
                }}
            >
                {heading}
            </Typography>

            {/* Subheading */}
            {subheading && (
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        color: "rgba(255,255,255,0.5)",
                        fontWeight: 300,
                        fontStyle: "italic",
                    }}
                >
                    {subheading}
                </Typography>
            )}
        </Stack>
    );
}
