import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod/v3";
import { IDatePickerControl } from "@/core/types/common";
import { ProfileRequestModel } from "@/repository/profile/model/profile-request-model";
import { useAccount } from "wagmi";
import { GetCollectorProfileRepository } from "@/repository/profile/profile-repository";
import { toast } from "sonner";

export default function useAddProjectCollectorForm() {
    const RegisterCollectorSchema = z.object({
        contractAddress: z.string().min(1, "Contract Address is required"),
        role: z.string().min(1, "Role is required"),
        fullname: z.string().min(1, "Fullname is required"),
        phoneNumber: z.string().min(1, "Phone Number is required"),
        residenceId: z.string().min(1, "Residence ID is required"),
        companyName: z.string().min(1, "Company Name is required"),
        companyAddress: z.string().min(1, "Company Address is required"),
        assetName: z.string().min(1, "Asset Name is required"),
        assetImage: z.string().min(1, "Asset Image is required"),
        quantity: z.string().min(1, "Quantity is required"),
        assetCategory: z.string().min(1, "Asset Category is required"),
        deliveryDate: z.custom<IDatePickerControl>(),
        assetPrice: z.string().min(1, "Asset Price is required"),
        fundingPrice: z.string().min(1, "Funding Price is required"),
        returnRate: z.string().min(1, "Return Rate is required"),
        tokenCode: z.string().min(1, "Token Code is required"),
        investmentStatus: z.boolean().default(false),
        currentFundingPrice: z.string().default("0"),
    });

    const methods = useForm({
        resolver: zodResolver(RegisterCollectorSchema),
        defaultValues: {
            fullname: "",
            phoneNumber: "",
            residenceId: "",
            companyName: "",
            companyAddress: "",
            assetName: "",
            assetImage: "",
            quantity: "",
            assetCategory: "",
            deliveryDate: null,
            assetPrice: "",
            fundingPrice: "",
            returnRate: "",
            tokenCode: "",
            investmentStatus: false,
            currentFundingPrice: "0",
        },
    });

    const [isLoading, setLoading] = useState(false)
    const { address } = useAccount();

    const getUserProfile = useCallback(async () => {
        setLoading(true)

        try {
            const data: ProfileRequestModel = {
                contractAddress: address ?? "",
                role: "collector",
            };

            const result = await GetCollectorProfileRepository(data)

            if (result !== null) {
                result.contractAddress = address ?? ""
                methods.setValue("contractAddress", address ?? "")
                methods.setValue("role", result.role)
                methods.setValue("fullname", result.fullname)
                methods.setValue("phoneNumber", result.phoneNumber)
                methods.setValue("residenceId", result.residenceId)
                methods.setValue("companyName", result.companyName)
                methods.setValue("companyAddress", result.companyAddress)

            } else {
                toast.error("Data Not Found", {
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
        } catch (error) {
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

        setLoading(false)
    }, [address, methods])

    useEffect(() => {
        getUserProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return {
        methods,
        isLoading,
    }
}