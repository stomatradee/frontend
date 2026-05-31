import { readContract, writeContract } from "@wagmi/core";
import { config } from "@/app/providers";
import { MOCK_USDT_ABI, MOCK_USDT_CONTRACT_ADDRESS } from "./abi/mock-usdt-abi";
import { MOCK_USDC_ABI, MOCK_USDC_CONTRACT_ADDRESS } from "./abi/mock-usdc-abi";
import { parseGwei } from "viem";
import { INVESTMENT_CONTRACT_ADDRESS } from "../investment/abi/investment-abi";
import { ApproveRequestModel } from "./model/approve-model";

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

export async function approveUSDCToken(param: ApproveRequestModel) {
    try {
        const result = await writeContract(config, {
            abi: MOCK_USDC_ABI,
            address: MOCK_USDC_CONTRACT_ADDRESS,
            functionName: "approve",
            args: [
                INVESTMENT_CONTRACT_ADDRESS,
                parseGwei(param.amount),
            ]
        })

        if (result !== null) {
            return result;
        } else {
            throw new Error("Failed to approve USDC token");
        }
    } catch (error) {
        console.error("Error approving USDC token:", error);
        throw new Error(`Failed to approve USDC token: ${error}`);
    }
}

export async function approveUSDTToken(param: ApproveRequestModel) {
    try {
        const result = await writeContract(config, {
            abi: MOCK_USDT_ABI,
            address: MOCK_USDT_CONTRACT_ADDRESS,
            functionName: "approve",
            args: [
                INVESTMENT_CONTRACT_ADDRESS,
                parseGwei(param.amount),
            ]
        })

        if (result !== null) {
            return result;
        } else {
            throw new Error("Failed to approve USDC token");
        }
    } catch (error) {
        console.error("Error approving USDC token:", error);
        throw new Error(`Failed to approve USDC token: ${error}`);
    }
}