"use client";

import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { routes } from "@/core/routes";
import { useCallback } from "react";


export function useLoginPage() {
    const { pushRoute } = useNavigationUtils();

    const handleConnectWallet = useCallback(() => {
        console.log("Continue with X clicked");

        pushRoute(routes.collector.dashboard)
    }, [pushRoute]);

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