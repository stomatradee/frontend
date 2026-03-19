import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { routes } from "@/core/config/routes";
import { useCallback } from "react";

export function useDashboardCollector() {
    const { replaceRoute } = useNavigationUtils();

    const handleDisconnectWallet = useCallback(() => {
        console.log("Continue with X clicked");

        replaceRoute(routes.landingPage)
    }, [replaceRoute]);


    return {
        handleDisconnectWallet
    };
}