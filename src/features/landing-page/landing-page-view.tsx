"use client";

import { Box, Grid } from "@mui/material";
import { useLandingPage } from "./hooks/use-landing-page";
import Navbar from "./component/navbar";
import HeroBanner from "./component/hero-banner";
import StatCard from "./component/stat-card";

export default function LandingPageView() {
    const {
        navItems,
        statCards,
        heroBannerData,
        logoSrc,
        handleNavItemClick,
        handleGetStom,
        handleLearnMore,
        handleSustainabilityClick,
    } = useLandingPage();

    return (
        <Box sx={{ position: "relative", minHeight: "100vh", backgroundColor: "var(--bg-colors)" }}>
            {/* Banner Section */}
            <Box component="section" id="banner">
                {/* Navbar */}
                <Navbar
                    logoSrc={logoSrc}
                    navItems={navItems}
                    ctaLabel="Get STOM"
                    onCtaClick={handleGetStom}
                    onNavItemClick={handleNavItemClick}
                />

                {/* Hero Banner */}
                <HeroBanner
                    badgeText={heroBannerData.badgeText}
                    heading={heroBannerData.heading}
                    subheading={heroBannerData.subheading}
                    backgroundImage={heroBannerData.backgroundImage}
                    primaryButton={{
                        label: "Learn More",
                        onClick: handleLearnMore,
                    }}
                    secondaryButton={{
                        label: "Get STOM",
                        onClick: handleGetStom,
                    }}
                />

                {/* Stats */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 10,
                        mt: -8,
                        px: { xs: 3, lg: 8 },
                        pb: 8,
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        sx={{ maxWidth: "72rem", mx: "auto" }}
                    >
                        {statCards.map((card) => (
                            <Grid key={card.title} size={{ xs: 12, sm: 6, lg: 4 }}>
                                <StatCard
                                    title={card.title}
                                    value={card.value}
                                    description={card.description}
                                    variant={card.variant}
                                    ctaLabel={card.ctaLabel}
                                    ctaImage={card.ctaImage}
                                    onCtaClick={
                                        card.variant === "featured"
                                            ? handleSustainabilityClick
                                            : undefined
                                    }
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}
