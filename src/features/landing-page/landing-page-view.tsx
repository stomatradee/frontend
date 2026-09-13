"use client";

import Navbar from "./component/navbar";
import HeroBanner from "./component/hero-banner";
import StatCard from "./component/stat-card";
import SectionHeader from "./component/section-header";
import BentoCard from "./component/bento-card";
import CtaBanner from "./component/cta-banner";
import Footer from "./component/footer";
import RoleDialog from "./component/role-dialog";

import { landingPageData } from "./constants/landing-page-data";
import { useLandingPage } from "./hooks/use-landing-page";
import SplashPageView from "./splash-page-view";

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

  const { 
    isSplashScreen,
    open,
    handleNavItemClick,
    handleConnectWallet,
    handleCloseRoleDialog,
    handleRoleSelected,
    handleLearnMore,
    handleSustainabilityClick,
    handleWhatIsStomatrade,
    handleSignUp,
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
                <div key={card.title} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
                  <StatCard
                    title={card.title}
                    value={card.value}
                    description={card.description}
                    variant={card.variant}
                    ctaLabel={card.ctaLabel}
                    ctaImage={card.ctaImage}
                    handleSustainabilityClick={handleSustainabilityClick}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solving Problem Section */}
        <section
          id="solving-problem"
          className="px-6 lg:px-32 py-32 lg:py-48"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <SectionHeader
              logoSrc={solvingProblemData.header.logoSrc}
              heading={solvingProblemData.header.heading}
              subheading={solvingProblemData.header.subheading}
            />

            {/* Bento Grid */}
            <div className="flex flex-wrap -mx-4">
              {solvingProblemData.bentoCards.map((card) => {
                // Approximate grid sizes based on typical 12-column grid
                let widthClass = "w-full";
                const gridSize = card.gridSize as any;
                const xs = gridSize?.xs;
                const sm = gridSize?.sm;
                const md = gridSize?.md;
                const lg = gridSize?.lg;
                
                if (lg === 4 || md === 4) widthClass = "w-full md:w-1/3";
                else if (lg === 8 || md === 8) widthClass = "w-full md:w-2/3";
                else if (lg === 6 || md === 6) widthClass = "w-full md:w-1/2";
                else if (sm === 6) widthClass = "w-full sm:w-1/2";

                return (
                  <div key={card.id} className={`${widthClass} px-4 mb-8`}>
                    <BentoCard
                      title={card.title}
                      description={card.description}
                      imageSrc={card.imageSrc}
                      badgeText={card.badgeText}
                      // size={card.size}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Growth with Stomatrade Section */}
        <section id="growth-with-stomatrade">
          <CtaBanner
            badgeText={growthData.badgeText}
            heading={growthData.heading}
            description={growthData.description}
            mobileBackgroundImage={growthData.mobileBackgroundImage}
            desktopBackgroundImage={growthData.desktopBackgroundImage}
            primaryButtonLabel="Connect Wallet"
            secondaryButtonLabel="What is Stomatrade"
            handleConnectWallet={handleConnectWallet}
            handleWhatIsStomatrade={handleWhatIsStomatrade}
          />
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
            handleSignUp={handleSignUp}
          />
        </section>

        <RoleDialog 
          open={open} 
          handleCloseRoleDialog={handleCloseRoleDialog}
          handleRoleSelected={handleRoleSelected}
        />
      </div>
  );
}

