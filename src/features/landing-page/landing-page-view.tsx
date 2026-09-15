"use client";

import Navbar from "./component/navbar";
import HeroBanner from "./component/hero-banner";
import StatCard from "./component/stat-card";
import SectionHeader from "./component/section-header";
import BentoCard from "./component/bento-card";
import Footer from "./component/footer";

import { landingPageData } from "./constants/landing-page-data";
import { useLandingPage } from "./hooks/use-landing-page";
import SplashPageView from "./splash-page-view";

export default function LandingPageView() {
  const {
    navItems,
    statCards,
    heroBannerData,
    solvingProblemData,
    footerData,
    logoSrc,
  } = landingPageData;

  const {
    isSplashScreen,
    handleNavItemClick,
    handleConnectWallet,
    handleLearnMore,
  } = useLandingPage();

  if (isSplashScreen) {
    return <SplashPageView />;
  }

  return (
    <div className="relative min-h-screen bg-background">
      {/* Banner Section */}
      <section id="banner">
        {/* Navbar */}
        <Navbar
          logoSrc={logoSrc}
          navItems={navItems}
          ctaLabel="Connect Wallet"
          handleConnectWallet={handleConnectWallet}
          handleNavItemClick={handleNavItemClick}
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
          handleConnectWallet={handleConnectWallet}
          handleLearnMore={handleLearnMore}
        />

        {/* Stats */}
        <div className="relative z-10 -mt-32 px-6 lg:px-32 pb-32">
          <div className="flex flex-wrap -mx-4 max-w-7xl mx-auto">
            {statCards.map((card) => (
              <div key={card.title} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                <StatCard
                  title={card.title}
                  value={card.value}
                  description={card.description}
                  variant={card.variant}
                  ctaLabel={card.ctaLabel}
                  ctaImage={card.ctaImage}
                  handleSustainabilityClick={() => { }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solving Problem Section */}
      <section
        id="solving-problem"
        className="px-6 lg:px-32 pb-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <SectionHeader
            logoSrc={solvingProblemData.header.logoSrc}
            heading={solvingProblemData.header.heading}
            subheading={solvingProblemData.header.subheading}
          />

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {solvingProblemData.bentoCards.map((card) => (
              <BentoCard
                key={card.id}
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                badgeText={card.badgeText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section id="footer">
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
          handleConnectWallet={handleConnectWallet}
        />
      </section>
    </div>
  );
}

