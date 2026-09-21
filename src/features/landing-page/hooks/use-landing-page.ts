"use client";

import { useCallback, useEffect, useState } from "react";
import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { routes } from "@/core/config/routes";
import { ProfileInvestorRequestModel } from "@/repository/investor-profile/profile/model/profile-investor-model";
import { GetInvestorProfileRepository } from "@/repository/investor-profile/profile/profile-investor-repository";

export function useLandingPage() {
    const [open, setOpen] = useState(false);
    const { replaceRoute } = useNavigationUtils();

    // --- Handler functions ---
    const handleNavItemClick = useCallback((href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const handleConnectWallet = useCallback(async (address: string) => {
        console.log(address);

        replaceRoute(routes.investor.dashboard);

        // setIsSplashScreen(true);

        // const data: ProfileInvestorRequestModel = {
        //     contractAddress: address as `0x${string}`,
        //     role: "investor",
        // };

        // const result = await GetInvestorProfileRepository(data);

        // console.log("result: ", result);

        // setIsSplashScreen(false)

        // if (result !== null) {
        //     replaceRoute(routes.investor.dashboard);
        // } else {
        //     replaceRoute(routes.investor.registerProfile);
        // }
    }, []);

    const handleCloseRoleDialog = useCallback(() => {
        setOpen(false);
    }, []);

    const handleLearnMore = useCallback(() => {
        const discoverSection = document.querySelector("#discover");
        if (discoverSection) {
            discoverSection.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return {
        open,
        handleNavItemClick,
        handleConnectWallet,
        handleCloseRoleDialog,
        handleLearnMore,
    };
}
