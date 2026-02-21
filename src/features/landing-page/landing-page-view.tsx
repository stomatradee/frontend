"use client";

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
        <div className="relative min-h-screen bg-[var(--bg-colors)]">
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

            {/* Stats Section */}
            <section className="relative z-10 -mt-16 px-6 lg:px-16 pb-16">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {statCards.map((card) => (
                        <StatCard
                            key={card.title}
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
                    ))}
                </div>
            </section>
        </div>
    );
}
