"use client";

import { useCallback, useMemo, useState } from "react";
import { imageConfig } from "@/core/config/images-config";
import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { routes } from "@/core/config/routes";

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
            ctaImage: imageConfig.background.globeBg,
        },
    ], []);

    // --- Hero banner data ---
    const heroBannerData = useMemo(() => ({
        badgeText: "Join the Green Future Growth Program",
        heading: "Traceable Agriculture Supply Through Real-World Asset Tokenization",
        subheading: "RWA-Fi for a Faster Agriculture Economy",
        mobileBackgroundImage: imageConfig.background.mobile.bgBannerMobile,
        desktopBackgroundImage: imageConfig.background.desktop.bgBannerDesktop,
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

    // --- Growth with Stomatrade section data ---
    const growthData = useMemo(() => ({
        badgeText: "The Stomatrade Token",
        heading: "Growth with STOMATRADE",
        description: "By utilizing Real-World Asset Tokenization (RWA) and NFTs, we establish full traceability and verification, ensuring easier financial access and a sustainable supply chain for farmers, collectors, and buyers.",
        mobileBackgroundImage: imageConfig.background.mobile.bgMobile,
        desktopBackgroundImage: imageConfig.background.desktop.bgDesktop,
    }), []);

    // --- Green Future section data ---
    const greenFutureData = useMemo(() => ({
        heading: "Green Future\nin Every Way",
        description: "Stomatrade is a pioneering RWA-Fi platform that secures transparent and equitable funding for agriculture SMEs.",
        backgroundImage: imageConfig.background.earthglobeBg,
    }), []);

    // --- Footer section data ---
    const footerData = useMemo(() => ({
        newsletter: {
            heading: "Let's connect and create a positive impact together.",
            privacyText: "At Stomatrade, we are deeply committed to protecting your privacy. Your personal information will never be shared without your consent. For more information, check out our Privacy Policy.",
            bgImage: imageConfig.background.desktop.footerBgDesktop,
        },
        brand: {
            description: "Our holistic approach integrates technology, sustainability, and community to create a future where agriculture works hand-in-hand with nature.",
        },
        socialLinks: [
            { icon: "discord", href: "#", label: "Discord" },
            { icon: "instagram", href: "#", label: "Instagram" },
            { icon: "telegram", href: "#", label: "Telegram" },
            { icon: "x", href: "#", label: "X" },
            { icon: "linkedin", href: "#", label: "LinkedIn" },
        ],
        linkColumns: [
            {
                title: "Discover",
                links: [
                    { label: "About us", href: "#" },
                    { label: "Features", href: "#" },
                    { label: "Community", href: "#" },
                    { label: "Ecosystem", href: "#" },
                ],
            },
            {
                title: "Resources",
                links: [
                    { label: "Whitepaper", href: "#" },
                    { label: "Staking", href: "#" },
                    { label: "Token Stomata", href: "#" },
                    { label: "Partners", href: "#" },
                ],
            },
            {
                title: "Our Communities",
                links: [
                    { label: "Become a Validator", href: "#" },
                    { label: "Event", href: "#" },
                    { label: "FAQ", href: "#" },
                ],
            },
        ],
        contactItems: [
            { icon: "phone", label: "+123 456 7890", href: "tel:+1234567890" },
            { icon: "email", label: "stomatrade@gmail.com", href: "mailto:stomatrade@gmail.com" },
        ],
        copyrightText: "© 2025 Stomatrade. All rights reserved.",
        legalLinks: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Use", href: "#" },
            { label: "Legal", href: "#" },
            { label: "Site Map", href: "#" },
        ],
    }), []);


    const [open, setOpen] = useState(false);
    const { pushRoute } = useNavigationUtils();

    // --- Handler functions ---
    const handleNavItemClick = useCallback((href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const handleConnectWallet = useCallback(() => {
        setOpen(true);
        console.log("Connect Wallet clicked");
    }, []);

    const handleCloseRoleDialog = useCallback(() => {
        setOpen(false);
    }, []);

    const handleRoleSelected = useCallback((role: "collector" | "investor") => {
        console.log("Selected role:", role);
        setOpen(false);

        if (role == "collector") {
            pushRoute(routes.collector.login)
        } else {
            // pushRoute(routes.investor.login)
        }
        // TODO: Implement wallet connection or redirection based on role
    }, [pushRoute]);

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

    const handleWhatIsStomatrade = useCallback(() => {
        // TODO: Navigate to about/whitepaper page
        console.log("What is Stomatrade clicked");
    }, []);

    const handleLearnAboutStomatrade = useCallback(() => {
        // TODO: Navigate to about page
        console.log("Learn about Stomatrade clicked");
    }, []);

    const handleSignUp = useCallback((email: string) => {
        // TODO: Implement newsletter sign-up
        console.log("Sign up with email:", email);
    }, []);

    return {
        // Data
        navItems,
        statCards,
        heroBannerData,
        solvingProblemData,
        growthData,
        greenFutureData,
        footerData,
        logoSrc: imageConfig.logo.stomatradeLogo,
        open,

        // Handlers
        handleNavItemClick,
        handleConnectWallet,
        handleCloseRoleDialog,
        handleRoleSelected,
        handleLearnMore,
        handleSustainabilityClick,
        handleWhatIsStomatrade,
        handleLearnAboutStomatrade,
        handleSignUp,
    };
}
