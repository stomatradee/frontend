import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { routes } from "@/core/config/routes";
import { useCallback, useState } from "react";
import { RegisterRequestModel } from "@/repository/register/model/register-request-model";
import { RegisterCollectorRepository } from "@/repository/register/register-repository";
import { toast } from 'sonner';
import { useAccount } from "wagmi";

export default function useRegisterCollector() {
    const { replaceRoute } = useNavigationUtils();
    const { address } = useAccount();

    const [isLoading, setLoading] = useState(false);

    const handleSubmit = useCallback(async (data: RegisterRequestModel) => {
        setLoading(true);

        data.contractAddress = address ?? "";
        const result = await RegisterCollectorRepository(data);

        if (result) {
            replaceRoute(routes.collector.dashboard)
        } else {
            toast.error("Submit failed", {
                position: 'top-center',
                style: {
                    width: '600px',
                    left: '50%',
                    right: '50%',
                    transform: 'translate(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                },
            });
        }

        setLoading(false);
    }, [address, replaceRoute]);

    return {
        handleSubmit,
        isLoading
    }
}