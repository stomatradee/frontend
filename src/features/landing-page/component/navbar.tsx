"use client";

import Image from "next/image";
import { AppBar, Toolbar, Box, Button, Stack } from "@mui/material";

interface NavItem {
    label: string;
    href: string;
}

interface NavbarProps {
    logoSrc: string;
    navItems: NavItem[];
    ctaLabel: string;
    onCtaClick: () => void;
    onNavItemClick: (href: string) => void;
}

export default function Navbar({
    logoSrc,
    navItems,
    ctaLabel,
    onCtaClick,
    onNavItemClick,
}: NavbarProps) {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: "rgba(10, 10, 10, 0.7)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    px: { xs: 3, lg: 8 },
                    py: 1,
                }}
            >
                {/* Logo */}
                <Box
                    onClick={() => onNavItemClick("/")}
                    sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                >
                    <Image
                        src={logoSrc}
                        alt="Stomatrade Logo"
                        width={160}
                        height={40}
                        priority
                        style={{ height: 32, width: "auto", objectFit: "contain" }}
                    />
                </Box>

                {/* Navigation Links */}
                <Stack
                    direction="row"
                    spacing={4}
                    sx={{ display: { xs: "none", md: "flex" } }}
                >
                    {navItems.map((item) => (
                        <Button
                            key={item.href}
                            onClick={() => onNavItemClick(item.href)}
                            sx={{
                                color: "rgba(255, 255, 255, 0.7)",
                                fontSize: "0.875rem",
                                fontWeight: 500,
                                textTransform: "none",
                                "&:hover": {
                                    color: "var(--primary-colors)",
                                    backgroundColor: "transparent",
                                },
                                transition: "color 0.3s",
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Stack>

                {/* CTA Button */}
                <Button
                    onClick={onCtaClick}
                    variant="outlined"
                    sx={{
                        borderRadius: "9999px",
                        borderColor: "var(--primary-colors)",
                        color: "var(--primary-colors)",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        textTransform: "none",
                        px: 3,
                        py: 0.75,
                        "&:hover": {
                            backgroundColor: "var(--primary-colors)",
                            borderColor: "var(--primary-colors)",
                            color: "#0A0A0A",
                        },
                        transition: "all 0.3s",
                    }}
                >
                    {ctaLabel}
                </Button>
            </Toolbar>
        </AppBar>
    );
}
