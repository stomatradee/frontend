import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod/v3";
import { IDatePickerControl, TokenSymbol } from "@/core/types/common";
import { SubmitProjectPinataRequestModel } from "@/repository/project/model/submit-project-model";
import { submitProject } from "@/repository/project/project-repository";
import { toast } from "sonner";
import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { routes } from "@/core/config/routes";

export default function useAddProjectCollectorForm() {
    const RegisterCollectorSchema = z.object({
        assetName: z.string().min(1, "Asset Name is required"),
        imageCID: z.string().min(1, "Image CID is required"),
        category: z.string().min(1, "Category is required"),
        weight: z.string().min(1, "Weight is required"),
        deliveryDate: z.custom<IDatePickerControl>(),
        fundingDuration: z.string().min(1, "Funding Duration is required"),
        repaymentDuration: z.string().min(1, "Repayment Duration is required"),
        tokenContractAddress: z.string().min(1, "Token Contract Address is required"),
        assetPrice: z.string().min(1, "Asset Price is required"),
        fundingPrice: z.string().min(1, "Funding Price is required"),
    });

    const methods = useForm({
        resolver: zodResolver(RegisterCollectorSchema),
        defaultValues: {
            assetName: "",
            imageCID: "",
            category: "",
            weight: "",
            deliveryDate: "",
            fundingDuration: "",
            repaymentDuration: "",
            tokenContractAddress: "",
            assetPrice: "",
            fundingPrice: "",
        },
    });

    const [isLoading, setLoading] = useState(false);
    const { replaceRoute } = useNavigationUtils();

    const [assetName, setAssetName] = useState<string>("");
    const [fundingDuration, setFundingDuration] = useState<string>("");
    const [repaymentDuration, setRepaymentDuration] = useState<string>("");
    const [cidImage, setCidImage] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [assetPrice, setAssetPrice] = useState<string>("");
    const [fundingPrice, setFundingPrice] = useState<string>("");

    const handleAssetNameChange = (value: string) => {
        setAssetName(value);
        methods.setValue("assetName", value, { shouldValidate: true });
    };

    const handleCidImageChange = (cid: string) => {
        setCidImage(cid);
        methods.setValue("imageCID", cid, { shouldValidate: true });
    };

    const handleFundingDurationChange = (duration: string) => {
        setFundingDuration(duration);
        methods.setValue("fundingDuration", duration, { shouldValidate: true });
    };

    const handleRepaymentDurationChange = (duration: string) => {
        setRepaymentDuration(duration);
        methods.setValue("repaymentDuration", duration, { shouldValidate: true });
    };

    const handleCategoryChange = (category: string) => {
        console.log("category", category);
        methods.setValue("category", category, { shouldValidate: true });
    };

    const handleWeightChange = (weightParam: string) => {
        setWeight(weightParam);
        methods.setValue("weight", weightParam, { shouldValidate: true });
    };

    const handleDeliveryDateChange = (date: IDatePickerControl) => {
        methods.setValue("deliveryDate", date, { shouldValidate: true });
    };

    const handleAssetPriceChange = (price: string) => {
        setAssetPrice(price);
        methods.setValue("assetPrice", price, { shouldValidate: true });
    };

    const handleFundingPriceChange = (price: string) => {
        setFundingPrice(price);
        methods.setValue("fundingPrice", price, { shouldValidate: true });
    };

    const handleTokenCodeChange = (tokenCode: string) => {
        if (tokenCode === TokenSymbol.USDC) {
            methods.setValue("tokenContractAddress", process.env.NEXT_PUBLIC_MOCK_USDC_ADDRESS || "", { shouldValidate: true });
        } else if (tokenCode === TokenSymbol.USDT) {
            methods.setValue("tokenContractAddress", process.env.NEXT_PUBLIC_MOCK_USDT_ADDRESS || "", { shouldValidate: true });
        }
    };

    const onSubmit = async () => {
        console.log(methods.getValues());

        try {
            setLoading(true);
            const param: SubmitProjectPinataRequestModel = {
                assetName: methods.getValues("assetName"),
                imageCID: methods.getValues("imageCID"),
                category: methods.getValues("category"),
                weight: methods.getValues("weight"),
                deliveryDate: methods.getValues("deliveryDate")?.toString() || "",
                fundingDuration: String(Math.floor(Date.now() / 1000) + (Number(methods.getValues("fundingDuration")) * 24 * 60 * 60)),
                repaymentDuration: String(Math.floor(Date.now() / 1000) + (Number(methods.getValues("repaymentDuration")) * 24 * 60 * 60)),
                tokenContractAddress: methods.getValues("tokenContractAddress"),
                assetPrice: methods.getValues("assetPrice"),
                fundingPrice: methods.getValues("fundingPrice"),
            }

            console.log(param);

            await submitProject(param);

            toast.success(`Success minting asset to blockchain`, {
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

            setLoading(false);

            replaceRoute(routes.collector.dashboard);
        } catch (error) {
            setLoading(false);
            toast.error(`Get data failed: ${error}`, {
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

    };

    return {
        methods,
        isLoading,
        assetName,
        handleAssetNameChange,
        fundingDuration,
        handleFundingDurationChange,
        repaymentDuration,
        handleRepaymentDurationChange,
        cidImage,
        handleCidImageChange,
        weight,
        handleWeightChange,
        assetPrice,
        handleAssetPriceChange,
        fundingPrice,
        handleFundingPriceChange,
        handleCategoryChange,
        handleDeliveryDateChange,
        handleTokenCodeChange,
        onSubmit,
    }
}