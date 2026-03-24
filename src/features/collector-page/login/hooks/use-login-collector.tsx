"use client";

import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { routes } from "@/core/config/routes";
import { useCallback, useState } from "react";
import { GetCollectorProfileRepository } from "@/repository/profile/profile-repository";
import { ProfileRequestModel } from "@/repository/profile/model/profile-request-model";

export function useLoginPage() {
  const { pushRoute } = useNavigationUtils();
  const [isLoading, setLoading] = useState(false);

  const handleConnectWallet = useCallback(async (address: string) => {
    setLoading(true);

    const data: ProfileRequestModel = {
      contractAddress: address,
      role: "collector",
    };

    const result = await GetCollectorProfileRepository(data);

    console.log("result: ", result);

    if (result !== null) {
      pushRoute(routes.collector.dashboard);
    } else {
      pushRoute(routes.collector.registerProfile);
    }

    setLoading(false);
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
    handlePrivacyClick,
    isLoading,
  };
}
