import { imageConfig } from "@/core/config/images-config";

export const landingPageData = {
    navItems: [
        { label: "Discover", href: "#discover" },
        { label: "Features", href: "#features" },
        { label: "Ecosystem", href: "#ecosystem" },
        { label: "My Stom", href: "#my-stom" },
    ],
    statCards: [
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
    ],
    heroBannerData: {
        badgeText: "Join the Green Future Growth Program",
        heading: "Traceable Agriculture Supply Through Real-World Asset Tokenization",
        subheading: "RWA-Fi for a Faster Agriculture Economy",
        mobileBackgroundImage: imageConfig.background.mobile.bgBannerMobile,
        desktopBackgroundImage: imageConfig.background.desktop.bgBannerDesktop,
    },
    solvingProblemData: {
        header: {
            logoSrc: imageConfig.logo.stomatradeLogo,
            heading: "Let's make agriculture financing fast & transparent.",
            subheading: "Revolutionizing supply chain with RWA-Fi (Real World Asset Finance).",
        },
        bentoCards: [
            { id: "rwa-fi-ecosystem", title: "RWA-Fi Ecosystem", imageSrc: imageConfig.icon.rwaIcon, gridSize: { xs: 12, sm: 6, md: 3 } },
            { id: "cash-advance", title: "5-Days Cash Advance", imageSrc: imageConfig.icon.cashAdvanceIcon, gridSize: { xs: 12, sm: 6, md: 3 } },
            { id: "project-margin", title: "Up to 50% Project Margin", description: "High yield opportunities for investors backed by real inventory (coffee beans, etc).", imageSrc: imageConfig.icon.flowerIcon, gridSize: { xs: 12, sm: 12, md: 6 } },
            { id: "liquidity-gap", title: "Solving Liquidity Gap", description: "Providing capital to collectors & farmers who lack access to traditional bank loans.", imageSrc: imageConfig.icon.rwa2Icon, gridSize: { xs: 12, sm: 6, md: 3 } },
            { id: "real-asset", title: "Real Asset Backed", description: "Secured investments. Funding up to 75% of verified collateral value stored in warehouses.", imageSrc: imageConfig.icon.elementIcon, gridSize: { xs: 12, sm: 6, md: 2 } },
            { id: "traceability", title: "End-to-End Traceability", description: "Blockchain records ensure supply chain data is valid for global market certification.", imageSrc: imageConfig.icon.traceabilityIcon, gridSize: { xs: 12, sm: 6, md: 3 } },
            { id: "web3-tech", title: "Seamless Web3 Tech", imageSrc: imageConfig.icon.chainIcon, gridSize: { xs: 12, sm: 6, md: 4 } },
            { id: "efficiency", title: "Efficiency", description: "Integrated with IDRX stablecoin, Wallet Connect, and Account Abstraction for easy use.", imageSrc: imageConfig.icon.efficientcyIcon, gridSize: { xs: 12, sm: 6, md: 3 } },
            { id: "farmers-network", title: "Stomatrade Build Future With Verified Farmers Network", badgeText: "LIVE", imageSrc: imageConfig.icon.elementIcon, gridSize: { xs: 12, sm: 12, md: 5 } },
            { id: "opportunity", title: "$410M Opportunity", description: "Beachhead market targeting Indonesia's agriculture sector.", imageSrc: imageConfig.icon.mapIcon, gridSize: { xs: 12, sm: 6, md: 4 } },
        ],
    },
    growthData: {
        badgeText: "The Stomatrade Token",
        heading: "Growth with STOMATRADE",
        description: "By utilizing Real-World Asset Tokenization (RWA) and NFTs, we establish full traceability and verification, ensuring easier financial access and a sustainable supply chain for farmers, collectors, and buyers.",
        mobileBackgroundImage: imageConfig.background.mobile.bgMobile,
        desktopBackgroundImage: imageConfig.background.desktop.bgDesktop,
    },
    greenFutureData: {
        heading: "Green Future\nin Every Way",
        description: "Stomatrade is a pioneering RWA-Fi platform that secures transparent and equitable funding for agriculture SMEs.",
        backgroundImage: imageConfig.background.earthglobeBg,
    },
    footerData: {
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
            { title: "Discover", links: [{ label: "About us", href: "#" }, { label: "Features", href: "#" }, { label: "Community", href: "#" }, { label: "Ecosystem", href: "#" }] },
            { title: "Resources", links: [{ label: "Whitepaper", href: "#" }, { label: "Staking", href: "#" }, { label: "Token Stomata", href: "#" }, { label: "Partners", href: "#" }] },
            { title: "Our Communities", links: [{ label: "Become a Validator", href: "#" }, { label: "Event", href: "#" }, { label: "FAQ", href: "#" }] },
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
    },
    logoSrc: imageConfig.logo.stomatradeLogo,
};
