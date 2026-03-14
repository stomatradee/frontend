"use client";

import LoginPageComponent from "@/core/component/login-page-component";
import { useLoginPage } from "./hooks/use-login-collector";

export default function LoginCollectorView() {
    const {
        handleTermsClick,
        handlePrivacyClick,
        handleConnectWallet
    } = useLoginPage();

    return (
        <LoginPageComponent
            onConnectWalletClick={handleConnectWallet}
            onTermsClick={handleTermsClick}
            onPrivacyClick={handlePrivacyClick}
        />
    )
}