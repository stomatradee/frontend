import { routes } from "@/core/config/routes";
import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { ProfileInvestorRequestModel } from "@/repository/investor-profile/profile/model/profile-investor-model";
import { ProfileInvestorRepository } from "@/repository/investor-profile/profile/profile-investor-repository";
// import { RegisterStatusRequestModel } from "@/repository/collector-profile/register/model/register-status-model";
import { useCallback, useState } from "react";

export function useLoginInvestor() {
    const { replaceRoute } = useNavigationUtils();
    const [isLoading, setLoading] = useState(false);

    const handleConnectWallet = useCallback(
        async (address: string) => {
            setLoading(true);

            const data: ProfileInvestorRequestModel = {
                contractAddress: address as `0x${string}`,
                role: "investor",
            };

            const result = await ProfileInvestorRepository(data);

            console.log("result: ", result);

            if (result !== null) {
                replaceRoute(routes.investor.dashboard);
            } else {
                replaceRoute(routes.investor.registerProfile);
            }



            // const data: RegisterStatusRequestModel = {
            //     contractAddress: address as `0x${string}`,
            // };

            // const result = await GetRegisterProfilStatus(data);

            // console.log("result: ", result);

            // if (result === true) {
            // replaceRoute(routes.investor.dashboard);
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
