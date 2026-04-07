import { pinata } from "@/core/utils/config";
import { SubmitProjectPinataRequestModel, SubmitProjectRequestModel } from "./model/submit-project-model";
import { writeContract } from "@wagmi/core";
import { PROJECT_NFT_ABI, PROJECT_NFT_CONTRACT_ADDRESS } from "./abi/project-abi";
import { config } from "@/app/providers";
import apiConfig from "@/core/config/api-config/api-config";
import { ENDPOINTS } from "@/core/config/api-config/endpoints";
import { HTTP_METHOD } from "@/core/config/api-config/http-method";
import { getCollectorProjectRequestModel, getCollectorProjectResponseModel } from "./model/get-collector-project-model";
import { ProjectDetailRequest, ProjectDetailResponse } from "./model/get-project-detail-model";

async function submitProjectPinata(data: SubmitProjectPinataRequestModel) {
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

export async function submitProject(data: SubmitProjectPinataRequestModel) {
    try {
        const pinataResponse = await submitProjectPinata(data);

        const paramRequest: SubmitProjectRequestModel = {
            acceptedToken: data.tokenContractAddress,
            commodityType: data.category,
            volumeKg: BigInt(data.weight),
            collateralValue: BigInt(data.assetPrice),
            fundingDuration: BigInt(data.fundingDuration),
            repaymentDuration: BigInt(data.repaymentDuration),
            cid: pinataResponse.cid,
        }

        console.log("submit blockchain data: ", paramRequest);

        const result = await writeContract(config, {
            address: PROJECT_NFT_CONTRACT_ADDRESS,
            abi: PROJECT_NFT_ABI,
            functionName: "mintProject",
            args: [
                paramRequest.acceptedToken,
                paramRequest.commodityType,
                paramRequest.volumeKg,
                paramRequest.collateralValue,
                paramRequest.fundingDuration,
                paramRequest.repaymentDuration,
                paramRequest.cid
            ],
            maxFeePerGas: BigInt(30_000_000),
            maxPriorityFeePerGas: BigInt(2_000_000)
        })

        if (result !== null) {
            return result;
        } else {
            throw new Error("Failed to submit project");
        }
    } catch (error) {
        console.error("Error submitting project: ", error);
        throw new Error(`Failed to submit project: ${error}`);
    }
}

export async function getCollectorProject(data: getCollectorProjectRequestModel) {
    try {
        const response = await apiConfig({
            endpoint: `${ENDPOINTS.collectorAllData}/${data.address}`,
            method: HTTP_METHOD.GET,
        });

        if (response.status !== 200) {
            throw new Error(`Failed to fetch collector project: ${response.statusText}`);
        } else {
            const data = await response.json();

            const result: getCollectorProjectResponseModel = {
                collector: data.collector,
                projects: data.projects,
            }

            return result;
        }
    } catch (error) {
        console.error("Error fetching collector project: ", error);
        throw new Error(`Failed to fetch collector project: ${error}`);
    }
}

export async function getProjectDetails(param: ProjectDetailRequest) {
    console.log("project detail param: ", param);
    try {
        const response = await apiConfig({
            endpoint: `${ENDPOINTS.projectDetail}/${param.projectId}`,
            method: HTTP_METHOD.GET,
        });

        if (response.status !== 200) {
            throw new Error(`Failed to fetch project detail: ${response.statusText}`);
        } else {
            const data = await response.json();

            const result: ProjectDetailResponse = {
                project: data.project,
                investments: data.investments,
                collector: data.collector,
            }

            console.log("project detail data: ", result);

            return result;
        }
    } catch (error) {
        console.error("Error fetching collector project: ", error);

        throw new Error(`Failed to fetch collector project: ${error}`);
    }
}