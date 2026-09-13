"use client";

import { useEffect, useMemo } from "react";
import { imageConfig } from "@/core/config/images-config";
import { Icon } from "@iconify/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { LoadingScreen } from "./loading-component";

export interface LoginPageComponentProps {
  onConnectWalletClick: (address: string) => void;
  onTermsClick: () => void;
  onPrivacyClick: () => void;
  isLoading?: boolean;
  role?: "collector" | "investor";
}

export default function LoginPageComponent({
  onConnectWalletClick,
  onTermsClick,
  onPrivacyClick,
  isLoading = false,
  role,
}: LoginPageComponentProps) {
  const { isConnected, address } = useAccount();

  useEffect(() => {
    if (isConnected) {
      onConnectWalletClick(address ?? "");
    }
  }, [isConnected, address, onConnectWalletClick]);

  const pageMemo = useMemo(
    () => ({
      bgImageDesktop: imageConfig.background.desktop.bgLoginDesktop,
      bgImageMobile: imageConfig.background.mobile.bgMobile,
      authTitle: "Access Your Profile",
      authDesc:
        "Track your carbon credit, unlock Xp, and get reward with real opportunities.",
      connectWalletButtonText: "Connect Wallet",
      termsText: "Terms of Service",
      privacyText: "Privacy Policy",
    }),
    [],
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `url(${
          typeof window !== "undefined" && window.innerWidth >= 768
            ? pageMemo.bgImageDesktop
            : pageMemo.bgImageMobile
        })`,
      }}
    >
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center flex-grow py-6 sm:py-8 md:py-24">
          {/* Left Card Section */}
          <div className="flex-none md:flex-[0.4] w-full md:w-auto min-w-[unset] md:min-w-[450px] flex justify-center md:justify-start order-1 md:order-1">
            <div className="bg-background-secondary rounded-[20px] md:rounded-[30px] p-[10px] md:p-[13px] mx-auto md:mx-0 md:ml-[120px] max-w-[430px] w-full sm:w-[380px] md:w-[430px]">
              <div className="flex flex-col gap-5 md:gap-10">
                {/* Auth Component */}
                <div className="flex flex-col justify-center items-center p-[24px_20px] md:p-[34px] bg-background rounded-[16px] md:rounded-[30px]">
                  <h2 className="text-foreground font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
                    {pageMemo.authTitle}
                  </h2>
                  <div className="h-6 md:h-8" />
                  <p className="text-background-third text-center text-[11px] md:text-[12px] px-2 md:px-0">
                    {pageMemo.authDesc}
                  </p>
                  <div className="h-[28px] md:h-[46px]" />
                  <ConnectButton.Custom>
                    {({ openConnectModal }) => {
                      if (isLoading === true) {
                        return (
                          <div className="pt-5 pb-5">
                            <LoadingScreen />
                          </div>
                        );
                      } else {
                        return (
                          <button
                            onClick={openConnectModal}
                            className="w-full flex items-center justify-center gap-2 rounded-full border border-primary text-primary font-semibold text-[0.85rem] md:text-[0.95rem] py-2 md:py-[9px] hover:bg-primary hover:text-[#0A0A0A] transition-all duration-300"
                          >
                            {pageMemo.connectWalletButtonText}
                            <Icon icon="mdi:arrow-top-right" className="text-[14px] md:text-[16px]" />
                          </button>
                        );
                      }
                    }}
                  </ConnectButton.Custom>
                  <div className="h-[12px] md:h-[20px]" />
                </div>

                {/* Terms */}
                <p className="text-center text-[#737373] mt-4 text-[0.65rem] md:text-[0.7rem] px-2 md:px-0">
                  By continuing, you agree to opportunities <br />
                  <button
                    onClick={onTermsClick}
                    className="text-[#a3a3a3] font-semibold underline hover:text-white transition-colors"
                  >
                    {pageMemo.termsText}
                  </button>{" "}
                  and{" "}
                  <button
                    onClick={onPrivacyClick}
                    className="text-[#a3a3a3] font-semibold underline hover:text-white transition-colors"
                  >
                    {pageMemo.privacyText}
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Hero Section - Below card on mobile, right side on desktop */}
          <div className="hidden md:flex flex-[0.5] w-full md:w-auto min-w-[unset] md:min-w-[500px] flex-col justify-end order-2 mt-8 md:mt-auto self-stretch pb-6 md:pb-10">
            <div className="flex flex-col gap-4 md:gap-6 self-center md:self-start text-center md:text-left mt-auto md:pl-8 px-4 md:px-0">
              <h1 className="font-medium text-[32px] sm:text-[48px] md:text-[64px] leading-[1.1]">
                {role === "investor" ? (
                  <>
                    Where Investment <br /> Drives Agricultural Growth
                  </>
                ) : (
                  <>
                    Where Farmers <br /> Meet Identity
                  </>
                )}
              </h1>
              <p className="text-[#a3a3a3] max-w-full md:max-w-[500px] leading-[1.6] text-[0.875rem] md:text-[1rem]">
                {role === "investor"
                  ? "Every investment you make drives growth for farmers and sustainability for the planet. Your portfolio reflects real impact supporting agriculture while generating meaningful returns."
                  : "Every your contribution, growth, and carbon tells a story. Your profile directly reflects your reputation for supporting farmers into opportunities."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

