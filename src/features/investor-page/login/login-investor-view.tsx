"use client";

import LoginPageComponent from "@/core/component/login-page-component";
import { useLoginInvestor } from "./hooks/use-login-investor";

export default function LoginInvestorView() {
  const {
    handleTermsClick,
    handlePrivacyClick,
    handleConnectWallet,
    isLoading,
  } = useLoginInvestor();

  return (
    <LoginPageComponent
      onConnectWalletClick={handleConnectWallet}
      onTermsClick={handleTermsClick}
      onPrivacyClick={handlePrivacyClick}
      isLoading={isLoading}
      role="investor"
    />
  );
}
