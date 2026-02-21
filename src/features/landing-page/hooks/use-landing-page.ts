"use client";

import { useCallback, useMemo } from "react";
import { imageConfig } from "@/core/images-config";

export function useLandingPage() {
    // --- Navigation data ---
    const navItems = useMemo(() => [
        { label: "Discover", href: "#discover" },
        { label: "Features", href: "#features" },
        { label: "Ecosystem", href: "#ecosystem" },
        { label: "My Stom", href: "#my-stom" },
    ], []);

    // --- Stat cards data ---
    const statCards = useMemo(() => [
        {
            title: "Initial Market Focus",
            value: "$410M",
            description: "Agriculture Sector",
            variant: "default" as const,
        },
        {
            title: "Farmer Network Target",
            value: "7,000+",
            description: "Farmers",
            variant: "default" as const,
        },
        {
            title: "AI-DID For Farmers",
            value: "",
            description: "",
            variant: "featured" as const,
            ctaLabel: "Sustainability",
            ctaImage: imageConfig.background.earthglobeBg,
        },
    ], []);

    // --- Hero banner data ---
    const heroBannerData = useMemo(() => ({
        badgeText: "Join the Green Future Growth Program",
        heading: "Traceable Agriculture Supply Through Real-World Asset Tokenization",
        subheading: "RWA-Fi for a Faster Agriculture Economy",
        backgroundImage: imageConfig.background.desktop.bgBannerDesktop,
    }), []);

    // --- Handler functions ---
    const handleNavItemClick = useCallback((href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const handleGetStom = useCallback(() => {
        // TODO: Implement Get STOM action (e.g., navigate to token page)
        console.log("Get STOM clicked");
    }, []);

    const handleLearnMore = useCallback(() => {
        const discoverSection = document.querySelector("#discover");
        if (discoverSection) {
            discoverSection.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const handleSustainabilityClick = useCallback(() => {
        // TODO: Implement Sustainability CTA action
        console.log("Sustainability clicked");
    }, []);

    return {
        // Data
        navItems,
        statCards,
        heroBannerData,
        logoSrc: imageConfig.logo.stomatradeLogo,

        // Handlers
        handleNavItemClick,
        handleGetStom,
        handleLearnMore,
        handleSustainabilityClick,
    };
}
