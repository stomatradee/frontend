import { RegisterRequestModel } from "./model/register-model";
import { pinata } from "@/core/utils/config";

import { writeContract, readContract } from "@wagmi/core";
import { config } from "@/app/providers";
import { ACCESS_REGISTRY_ABI, ACCESS_REGISTRY_CONTRACT_ADDRESS } from "@/core/config/abi/access-registry-abi";
import { RegisterStatusRequestModel } from "./model/register-status-model";

async function uploadDataToPinata(data: RegisterRequestModel) {
    try {
        const res = await fetch("/api/pinata-url");
        const { url } = await res.json();

        const result = await pinata.upload.public.json(data).url(url);

        return result;
    } catch (error) {
        console.error("Error uploading data to Pinata: ", error);

        throw error
    }
}

export async function RegisterCollectorRepository(data: RegisterRequestModel) {
    try {
        const result = await uploadDataToPinata(data);

        return await writeContract(config, {
            address: ACCESS_REGISTRY_CONTRACT_ADDRESS,
            abi: ACCESS_REGISTRY_ABI,
            functionName: "registerCollector",
            args: [result?.cid],
            maxFeePerGas: BigInt(30_000_000),
            maxPriorityFeePerGas: BigInt(2_000_000)
        })
    } catch (e) {
        console.error("Error register user: ", e);

        throw e;
    }
}

export async function GetRegisterProfilStatus(data: RegisterStatusRequestModel) {

    try {
        const result = await readContract(config, {
            address: ACCESS_REGISTRY_CONTRACT_ADDRESS,
            abi: ACCESS_REGISTRY_ABI,
            functionName: "isRegisteredCollector",
            args: [data.contractAddress]
        })

        return result as boolean;
    } catch (error) {
        console.error("Error getting register status: ", error);
        throw error
    }
}