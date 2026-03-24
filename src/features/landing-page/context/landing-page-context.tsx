"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { routes } from "@/core/config/routes";

interface LandingPageContextType {
    open: boolean;
    handleCloseRoleDialog: () => void;
    handleRoleSelected: (role: "collector" | "investor") => void;
    handleConnectWallet: () => void;
    handleLearnMore: () => void;
    handleSustainabilityClick: () => void;
    handleWhatIsStomatrade: () => void;
    handleLearnAboutStomatrade: () => void;
    handleSignUp: (email: string) => void;
    handleNavItemClick: (href: string) => void;
}

const LandingPageContext = createContext<LandingPageContextType | null>(null);

export function LandingPageProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    const { pushRoute } = useNavigationUtils();

    const handleNavItemClick = useCallback((href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const handleConnectWallet = useCallback(() => {
        setOpen(true);
    }, []);

    const handleCloseRoleDialog = useCallback(() => {
        setOpen(false);
    }, []);

    const handleRoleSelected = useCallback((role: "collector" | "investor") => {
        setOpen(false);
        if (role === "collector") {
            pushRoute(routes.collector.login);
        } else {
            // pushRoute(routes.investor.login);
        }
    }, [pushRoute]);

    const handleLearnMore = useCallback(() => {
        const discoverSection = document.querySelector("#discover");
        if (discoverSection) {
            discoverSection.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const handleSustainabilityClick = useCallback(() => {
        console.log("Sustainability clicked");
    }, []);

    const handleWhatIsStomatrade = useCallback(() => {
        console.log("What is Stomatrade clicked");
    }, []);

    const handleLearnAboutStomatrade = useCallback(() => {
        console.log("Learn about Stomatrade clicked");
    }, []);

    const handleSignUp = useCallback((email: string) => {
        console.log("Sign up with email:", email);
    }, []);

    return (
        <LandingPageContext.Provider value={{
            open,
            handleCloseRoleDialog,
            handleRoleSelected,
            handleConnectWallet,
            handleLearnMore,
            handleSustainabilityClick,
            handleWhatIsStomatrade,
            handleLearnAboutStomatrade,
            handleSignUp,
            handleNavItemClick,
        }}>
            {children}
        </LandingPageContext.Provider>
    );
}

export function useLandingPageActions() {
    const context = useContext(LandingPageContext);
    if (!context) {
        throw new Error("useLandingPageActions must be used within a LandingPageProvider");
    }
    return context;
}
