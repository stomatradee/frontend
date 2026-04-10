"use client";

import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { routes } from "@/core/config/routes";
import { useCallback, useState } from "react";
import { RegisterStatusRequestModel } from "@/repository/collector-profile/register/model/register-status-model";
import { GetRegisterProfilStatus } from "@/repository/collector-profile/register/register-repository";

export function useLoginCollector() {
  const { replaceRoute } = useNavigationUtils();
  const [isLoading, setLoading] = useState(false);

  const handleConnectWallet = useCallback(
    async (address: string) => {
      setLoading(true);

      const data: RegisterStatusRequestModel = {
        contractAddress: address as `0x${string}`,
      };

      const result = await GetRegisterProfilStatus(data);

      console.log("result: ", result);

      if (result === true) {
        replaceRoute(routes.collector.dashboard);
      } else {
        replaceRoute(routes.collector.registerProfile);
      }

      setLoading(false);
    },
    [replaceRoute],
  );

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
