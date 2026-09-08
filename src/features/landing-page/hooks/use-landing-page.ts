"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { imageConfig } from "@/core/config/images-config";
import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { routes } from "@/core/config/routes";

export function useLandingPage() {



    const [open, setOpen] = useState(false);
    const { pushRoute } = useNavigationUtils();
    const [isSplashScreen, setIsSplashScreen] = useState<boolean>(true);

    // --- Handler functions ---
    const handleNavItemClick = useCallback((href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const handleConnectWallet = useCallback(() => {
        // setOpen(true);
        pushRoute(routes.investor.login)
    }, []);

    const handleCloseRoleDialog = useCallback(() => {
        setOpen(false);
    }, []);

    const handleRoleSelected = useCallback((role: "collector" | "investor") => {
        setOpen(false);

        // if (role == "collector") {
        //     pushRoute(routes.collector.login)
        // } else {
        //     pushRoute(routes.investor.login)
        // }

    }, [pushRoute]);

    const handleLearnMore = useCallback(() => {
        const discoverSection = document.querySelector("#discover");
        if (discoverSection) {
            discoverSection.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const handleSustainabilityClick = useCallback(() => {
        // TODO: Implement Sustainability CTA action
        console.log("Sustainability clicked");
    }, []);

    const handleWhatIsStomatrade = useCallback(() => {
        // TODO: Navigate to about/whitepaper page
        console.log("What is Stomatrade clicked");
    }, []);

    const handleLearnAboutStomatrade = useCallback(() => {
        // TODO: Navigate to about page
        console.log("Learn about Stomatrade clicked");
    }, []);

    const handleSignUp = useCallback((email: string) => {
        // TODO: Implement newsletter sign-up
        console.log("Sign up with email:", email);
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSplashScreen(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return {
        // Data
        isSplashScreen,
        open,
        // Handlers
        handleNavItemClick,
        handleConnectWallet,
        handleCloseRoleDialog,
        handleRoleSelected,
        handleLearnMore,
        handleSustainabilityClick,
        handleWhatIsStomatrade,
        handleLearnAboutStomatrade,
        handleSignUp,
    };
}
