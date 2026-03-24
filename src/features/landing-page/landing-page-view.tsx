import { Box, Grid } from "@mui/material";
import Navbar from "./component/navbar";
import HeroBanner from "./component/hero-banner";
import StatCard from "./component/stat-card";
import SectionHeader from "./component/section-header";
import BentoCard from "./component/bento-card";
import CtaBanner from "./component/cta-banner";
import Footer from "./component/footer";
import RoleDialog from "./component/role-dialog";

import { LandingPageProvider } from "./context/landing-page-context";
import { landingPageData } from "./constants/landing-page-data";

export default function LandingPageView() {
    const {
        navItems,
        statCards,
        heroBannerData,
        solvingProblemData,
        growthData,
        footerData,
        logoSrc,
    } = landingPageData;

    return (
        <LandingPageProvider>
            <Box sx={{ position: "relative", minHeight: "100vh", backgroundColor: "var(--bg-colors)" }}>
                {/* Banner Section */}
                <Box component="section" id="banner">
                    {/* Navbar */}
                    <Navbar
                        logoSrc={logoSrc}
                        navItems={navItems}
                        ctaLabel="Connect Wallet"
                    />

                    {/* Hero Banner */}
                    <HeroBanner
                        badgeText={heroBannerData.badgeText}
                        heading={heroBannerData.heading}
                        subheading={heroBannerData.subheading}
                        mobileBackgroundImage={heroBannerData.mobileBackgroundImage}
                        desktopBackgroundImage={heroBannerData.desktopBackgroundImage}
                        primaryButtonLabel="Connect Wallet"
                        secondaryButtonLabel="Learn More"
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
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>

                {/* Solving Problem Section */}
                <Box
                    component="section"
                    id="solving-problem"
                    sx={{
                        px: { xs: 3, lg: 8 },
                        py: { xs: 8, lg: 12 },
                    }}
                >
                    <Box sx={{ maxWidth: "72rem", mx: "auto" }}>
                        {/* Section Header */}
                        <SectionHeader
                            logoSrc={solvingProblemData.header.logoSrc}
                            heading={solvingProblemData.header.heading}
                            subheading={solvingProblemData.header.subheading}
                        />

                        {/* Bento Grid */}
                        <Grid container spacing={2}>
                            {solvingProblemData.bentoCards.map((card) => (
                                <Grid key={card.id} size={card.gridSize}>
                                    <BentoCard
                                        title={card.title}
                                        description={card.description}
                                        imageSrc={card.imageSrc}
                                        badgeText={card.badgeText}
                                        // size={card.size}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>

                {/* Growth with Stomatrade Section */}
                <Box component="section" id="growth-with-stomatrade">
                    <CtaBanner
                        badgeText={growthData.badgeText}
                        heading={growthData.heading}
                        description={growthData.description}
                        mobileBackgroundImage={growthData.mobileBackgroundImage}
                        desktopBackgroundImage={growthData.desktopBackgroundImage}
                        primaryButtonLabel="Connect Wallet"
                        secondaryButtonLabel="What is Stomatrade"
                    />
                </Box>

                {/* Footer Section */}
                <Box component="section" id="footer">
                    <Footer
                        newsletterHeading={footerData.newsletter.heading}
                        newsletterPrivacyText={footerData.newsletter.privacyText}
                        newsletterBgImage={footerData.newsletter.bgImage}
                        logoSrc={logoSrc}
                        brandDescription={footerData.brand.description}
                        socialLinks={footerData.socialLinks}
                        linkColumns={footerData.linkColumns}
                        contactItems={footerData.contactItems}
                        copyrightText={footerData.copyrightText}
                        legalLinks={footerData.legalLinks}
                    />
                </Box>

                <RoleDialog />
            </Box>
        </LandingPageProvider>
    );
}
