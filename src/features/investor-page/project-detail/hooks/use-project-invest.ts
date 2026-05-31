import { routes } from "@/core/config/routes";
import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { TokenSymbol } from "@/core/types/common";
import { startInvestProject } from "@/repository/investment/investment-repository";
import { InvestRequestModel } from "@/repository/investment/model/investment-request-model";
import { ProjectDetailRequest, ProjectDetailResponse } from "@/repository/project/model/get-project-detail-model";
import { getProjectDetails } from "@/repository/project/project-repository";
import { MOCK_USDC_CONTRACT_ADDRESS } from "@/repository/token/abi/mock-usdc-abi";
import { MOCK_USDT_CONTRACT_ADDRESS } from "@/repository/token/abi/mock-usdt-abi";
import { ApproveRequestModel } from "@/repository/token/model/approve-model";
import { approveUSDCToken, approveUSDTToken } from "@/repository/token/token-repository";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useConnection } from "wagmi";
import z from "zod";

export default function UseProjectInvest() {
    const RegisterCollectorSchema = z.object({
        amountValue: z.string().min(1, "Amount is required"),
        tokenContractAddress: z.string().min(1, "Token Contract Address is required"),
        tokenSymbol: z.string().min(1, "Token ID is required"),
    });

    const methods = useForm({
        resolver: zodResolver(RegisterCollectorSchema),
        defaultValues: {
            amountValue: "",
            tokenContractAddress: "",
            tokenSymbol: ""
        },
    });

    const { address } = useConnection();

    const searchParams = useSearchParams();

    const projectId = searchParams.get("projectId");

    const [isLoading, setLoading] = useState(false)
    const [isPayLoading, setIsPayLoading] = useState(false)
    const [data, setData] = useState<ProjectDetailResponse | null>(null)

    const { replaceRoute } = useNavigationUtils();


    const [amountValue, setAmountValue] = useState<string>("")

    const getProjectDetail = useCallback(async () => {
        console.log("projectId", projectId)

        try {
            setLoading(true)

            const param: ProjectDetailRequest = {
                projectId: projectId ?? "0x0",
            }

            const response = await getProjectDetails(param)

            setData(response)

            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.error(`Get data failed: ${error}`, {
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
    }, [projectId])

    useEffect(() => {
        getProjectDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleAmountValueChange = (amountValue: string) => {
        setAmountValue(amountValue);
        methods.setValue("amountValue", amountValue, { shouldValidate: true });
    };

    const handleTokenCodeChange = (tokenCode: string) => {
        if (tokenCode === TokenSymbol.USDC) {
            methods.setValue("tokenContractAddress", MOCK_USDC_CONTRACT_ADDRESS || "", { shouldValidate: true });
        } else if (tokenCode === TokenSymbol.USDT) {
            methods.setValue("tokenContractAddress", MOCK_USDT_CONTRACT_ADDRESS || "", { shouldValidate: true });
        }

        methods.setValue("tokenSymbol", tokenCode, { shouldValidate: true });
    };

    const onInvest = async () => {
        console.log(methods.getValues());

        try {
            setIsPayLoading(true);

            const param: InvestRequestModel = {
                projectId: projectId ?? "0x0",
                amount: amountValue,
            }

            const paramApprove: ApproveRequestModel = {
                amount: amountValue,
            }

            const tokenSymbol = methods.getValues("tokenSymbol")

            if (tokenSymbol === TokenSymbol.USDC) {
                await approveUSDCToken(paramApprove)
            } else if (tokenSymbol === TokenSymbol.USDT) {
                await approveUSDTToken(paramApprove)
            }

            await startInvestProject(param)

            toast.success(`Success Invest to project ${data?.project.metadata?.assetName}`, {
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

            setIsPayLoading(false);
            replaceRoute(routes.investor.myPortofolio);

        } catch (error) {
            setIsPayLoading(false);
            toast.error(`Invest project failed: ${error}`, {
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
    }

    return {
        isLoading,
        isPayLoading,
        data,
        amountValue,
        methods,
        address,
        handleAmountValueChange,
        handleTokenCodeChange,
        onInvest,
    }
}