"use client";

import { useCallback } from "react";


export function useLoginPage() {
    const handleConnectWallet = useCallback(() => {
        console.log("Continue with X clicked");
    }, []);

    const handleTermsClick = useCallback(() => {
        console.log("Terms clicked");
    }, []);

    const handlePrivacyClick = useCallback(() => {
        console.log("Privacy clicked");
    }, []);

    return {
        handleTermsClick,
        handleConnectWallet,
        handlePrivacyClick
    };
}