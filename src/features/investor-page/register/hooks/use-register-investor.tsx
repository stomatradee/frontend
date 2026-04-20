import { useCallback, useState } from "react";
import { RegisterInvestorRequestModel } from "@/repository/investor-profile/register/model/register-investor-model";
import { RegisterInvestorRepository } from "@/repository/investor-profile/register/register-investor-repository";
import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { routes } from "@/core/config/routes";
import { toast } from "sonner";
import { useAccount } from "wagmi";

export default function useRegisterInvestor() {
  const { replaceRoute } = useNavigationUtils();
  const { address } = useAccount();

  const [isLoading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: RegisterInvestorRequestModel) => {
      setLoading(true);

      data.contractAddress = address ?? "";
      const result = await RegisterInvestorRepository(data);

      if (result) {
        replaceRoute(routes.investor.dashboard);
      } else {
        toast.error("Submit failed", {
          position: "top-center",
          style: {
            width: "600px",
            left: "50%",
            right: "50%",
            transform: "translate(-50%)",
            display: "flex",
            alignItems: "center",
          },
        });
      }

      setLoading(false);
    },
    [address, replaceRoute],
  );

  return {
    handleSubmit,
    isLoading,
  };
}
