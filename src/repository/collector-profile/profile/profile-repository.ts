import { ProfileRequestModel, ProfileResponseModel } from "./model/profile-model";
import { readContract } from "@wagmi/core";
import { ACCESS_REGISTRY_ABI, ACCESS_REGISTRY_CONTRACT_ADDRESS } from "@/repository/collector-profile/abi/access-registry-abi";
import { config } from "@/app/providers";

export async function GetCollectorProfileRepository(data: ProfileRequestModel): Promise<ProfileResponseModel | null> {
    try {

        const temp = await readContract(config, {
            address: ACCESS_REGISTRY_CONTRACT_ADDRESS,
            abi: ACCESS_REGISTRY_ABI,
            functionName: "getCollectorProfile",
            args: [data.contractAddress],
        })

        const response = await fetch(temp.profileURI);
        const result = await response.json();

        if (result !== null) {
            return result as ProfileResponseModel;
        } else {
            throw new Error("Failed to get profile");
        }
    } catch (error) {
        console.error("Error fetching profile:", error);
        throw new Error(`Failed : ${error}`);
    }
}

