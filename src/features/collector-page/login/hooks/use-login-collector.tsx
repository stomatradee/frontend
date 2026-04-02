"use client";

import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { routes } from "@/core/config/routes";
import { useCallback, useState } from "react";
import { RegisterStatusRequestModel } from "@/repository/register/model/register-status-model";
import { GetRegisterProfilStatus } from "@/repository/register/register-repository";

export function useLoginPage() {
  const { pushRoute } = useNavigationUtils();
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
        pushRoute(routes.collector.dashboard);
      } else {
        pushRoute(routes.collector.registerProfile);
      }

      setLoading(false);
    },
    [pushRoute],
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
