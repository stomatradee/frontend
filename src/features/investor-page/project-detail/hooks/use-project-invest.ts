import { TokenSymbol } from "@/core/types/common";
import { ProjectDetailRequest, ProjectDetailResponse } from "@/repository/project/model/get-project-detail-model";
import { getProjectDetails } from "@/repository/project/project-repository";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export default function UseProjectInvest() {
    const RegisterCollectorSchema = z.object({
        amountValue: z.string().min(1, "Amount is required"),
        tokenContractAddress: z.string().min(1, "Token Contract Address is required"),
    });

    const methods = useForm({
        resolver: zodResolver(RegisterCollectorSchema),
        defaultValues: {
            amountValue: "",
            tokenContractAddress: "",
        },
    });



    const searchParams = useSearchParams();

    const projectId = searchParams.get("projectId");

    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState<ProjectDetailResponse | null>(null)


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
            methods.setValue("tokenContractAddress", process.env.NEXT_PUBLIC_MOCK_USDC_ADDRESS || "", { shouldValidate: true });
        } else if (tokenCode === TokenSymbol.USDT) {
            methods.setValue("tokenContractAddress", process.env.NEXT_PUBLIC_MOCK_USDT_ADDRESS || "", { shouldValidate: true });
        }
    };
    return {
        isLoading,
        data,
        amountValue,
        methods,
        handleAmountValueChange,
        handleTokenCodeChange
    }
}