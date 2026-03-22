import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod/v3";

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
        assetLocation: z.string().min(1, "Asset Location is required"),
        deliveryDate: z.string().min(1, "Delivery Date is required"),
        price: z.string().min(1, "Price is required"),
        openFundingPrice: z.string().min(1, "Open Funding Price is required"),
        returnRate: z.string().min(1, "Return Rate is required"),
        investmentStatus: z.boolean().default(false),

    });

    const methods = useForm({
        resolver: zodResolver(RegisterCollectorSchema),
        defaultValues: {
            fullname: "",
            phoneNumber: "",
            residenceId: "",
            companyName: "",
            companyAddress: "",
        },
    });

    const [assetName, setAssetName] = useState<string>("");


    return {
        methods,
        assetName,
        setAssetName
    }
}