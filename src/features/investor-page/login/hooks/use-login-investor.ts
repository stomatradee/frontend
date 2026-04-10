import { routes } from "@/core/config/routes";
import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
// import { RegisterStatusRequestModel } from "@/repository/collector-profile/register/model/register-status-model";
import { useCallback, useState } from "react";

export function useLoginInvestor() {
    const { replaceRoute } = useNavigationUtils();
    const [isLoading, setLoading] = useState(false);

    const handleConnectWallet = useCallback(
        async () => {
            setLoading(true);

            // const data: RegisterStatusRequestModel = {
            //     contractAddress: address as `0x${string}`,
            // };

            // const result = await GetRegisterProfilStatus(data);

            // console.log("result: ", result);

            // if (result === true) {
            replaceRoute(routes.investor.dashboard);
            // } else {
            //     replaceRoute(routes.collector.registerProfile);
            // }

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
