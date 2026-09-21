"use client";

import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { useCallback, useEffect } from "react";
import { routes } from "@/core/config/routes";

import { useConnection } from "wagmi";

export function useSplashScreen() {
    const { replaceRoute } = useNavigationUtils();
    const { isConnected } = useConnection();


    const getConnectStatus = useCallback(async () => {
        if (isConnected) {
            replaceRoute(routes.investor.dashboard);
        } else {
            replaceRoute(routes.landingPage);
        }
    }, [isConnected, replaceRoute]);

    useEffect(() => {
        const timer = setTimeout(() => {
            getConnectStatus();
        }, 2000);
        return () => clearTimeout(timer);
    }, [getConnectStatus]);
}
