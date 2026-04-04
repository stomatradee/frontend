import { readContract } from "@wagmi/core";
import { config } from "@/app/providers";
import { MOCK_USDT_ABI, MOCK_USDT_CONTRACT_ADDRESS } from "./abi/mock-usdt-abi";
import { MOCK_USDC_ABI, MOCK_USDC_CONTRACT_ADDRESS } from "./abi/mock-usdc-abi";

export async function getUSDTSymbol(): Promise<string> {
    try {
        const symbol = await readContract(config, {
            abi: MOCK_USDT_ABI,
            address: MOCK_USDT_CONTRACT_ADDRESS,
            functionName: "symbol",
        });

        if (symbol !== null) {
            return symbol as string;
        } else {
            throw new Error("Failed to get USDT symbol");
        }
    } catch (error) {
        console.error("Error getting USDT symbol:", error);
        throw new Error(`Failed to get USDT symbol: ${error}`);
    }
}

export async function getUSDCSymbol(): Promise<string> {
    try {
        const symbol = await readContract(config, {
            abi: MOCK_USDC_ABI,
            address: MOCK_USDC_CONTRACT_ADDRESS,
            functionName: "symbol",
        });

        if (symbol !== null) {
            return symbol as string;
        } else {
            throw new Error("Failed to get USDC symbol");
        }
    } catch (error) {
        console.error("Error getting USDC symbol:", error);
        throw new Error(`Failed to get USDC symbol: ${error}`);
    }
}