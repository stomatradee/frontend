import { config } from "@/app/providers";
import { writeContract } from "@wagmi/core";
import { parseGwei } from "viem";
import { INVESTMENT_CONTRACT_ADDRESS, INVESTMENT_ABI } from "./abi/investment-abi";
import { InvestRequestModel } from "./model/investment-request-model";

export async function startInvestProject(data: InvestRequestModel) {
    try {
        const result = await writeContract(config, {
            address: INVESTMENT_CONTRACT_ADDRESS,
            abi: INVESTMENT_ABI,
            functionName: "invest",
            args: [
                data.projectId,
                parseGwei(data.amount),
            ]
        })

        if (result !== null) {
            return result;
        } else {
            throw new Error("Failed to invest project");
        }
    } catch (error) {
        console.error("Error invest project: ", error);
        throw new Error(`Failed to invest project: ${error}`);
    }
}