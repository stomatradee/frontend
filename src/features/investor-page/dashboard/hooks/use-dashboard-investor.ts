import { routes } from "@/core/config/routes";
import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { useCallback } from "react";

export function useDashboardInvestor() {
    const { replaceRoute } = useNavigationUtils();

    const handleDisconnectWallet = useCallback(() => {
        console.log("Continue with X clicked");

        replaceRoute(routes.landingPage)
    }, [replaceRoute]);


    return {
        handleDisconnectWallet
    };
}