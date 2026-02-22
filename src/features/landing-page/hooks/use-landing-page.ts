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

    // --- Solving problem section data ---
    const solvingProblemData = useMemo(() => ({
        header: {
            logoSrc: imageConfig.logo.stomatradeLogo,
            heading: "Let's make agriculture financing fast & transparent.",
            subheading: "Revolutionizing supply chain with RWA-Fi (Real World Asset Finance).",
        },
        bentoCards: [
            // Row 1
            {
                id: "rwa-fi-ecosystem",
                title: "RWA-Fi Ecosystem",
                imageSrc: imageConfig.icon.rwaIcon,
                gridSize: { xs: 12, sm: 6, md: 3 },
            },
            {
                id: "cash-advance",
                title: "5-Days Cash Advance",
                imageSrc: imageConfig.icon.cashAdvanceIcon,
                gridSize: { xs: 12, sm: 6, md: 3 },
            },
            {
                id: "project-margin",
                title: "Up to 50% Project Margin",
                description: "High yield opportunities for investors backed by real inventory (coffee beans, etc).",
                imageSrc: imageConfig.icon.flowerIcon,
                gridSize: { xs: 12, sm: 12, md: 6 },
            },
            // Row 2
            {
                id: "liquidity-gap",
                title: "Solving Liquidity Gap",
                description: "Providing capital to collectors & farmers who lack access to traditional bank loans.",
                imageSrc: imageConfig.icon.rwa2Icon,
                gridSize: { xs: 12, sm: 6, md: 3 },
            },
            {
                id: "real-asset",
                title: "Real Asset Backed",
                description: "Secured investments. Funding up to 75% of verified collateral value stored in warehouses.",
                imageSrc: imageConfig.icon.elementIcon,
                gridSize: { xs: 12, sm: 6, md: 2 },
            },
            {
                id: "traceability",
                title: "End-to-End Traceability",
                description: "Blockchain records ensure supply chain data is valid for global market certification.",
                imageSrc: imageConfig.icon.traceabilityIcon,
                gridSize: { xs: 12, sm: 6, md: 3 },
            },
            {
                id: "web3-tech",
                title: "Seamless Web3 Tech",
                imageSrc: imageConfig.icon.chainIcon,
                gridSize: { xs: 12, sm: 6, md: 4 },
            },
            // Row 3
            {
                id: "efficiency",
                title: "Efficiency",
                description: "Integrated with IDRX stablecoin, Wallet Connect, and Account Abstraction for easy use.",
                imageSrc: imageConfig.icon.efficientcyIcon,
                gridSize: { xs: 12, sm: 6, md: 3 },
            },
            {
                id: "farmers-network",
                title: "Stomatrade Build Future With Verified Farmers Network",
                badgeText: "LIVE",
                imageSrc: imageConfig.icon.elementIcon,
                gridSize: { xs: 12, sm: 12, md: 5 },
                // size: "large" as const,
            },
            {
                id: "opportunity",
                title: "$410M Opportunity",
                description: "Beachhead market targeting Indonesia's agriculture sector.",
                imageSrc: imageConfig.icon.mapIcon,
                gridSize: { xs: 12, sm: 6, md: 4 },
            },
        ],
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
        solvingProblemData,
        logoSrc: imageConfig.logo.stomatradeLogo,

        // Handlers
        handleNavItemClick,
        handleGetStom,
        handleLearnMore,
        handleSustainabilityClick,
    };
}
