export type getCollectorProjectRequestModel = {
    address: `0x${string}`
}

export type getCollectorProjectResponseModel = {
    collector: collectorDataResponse;
    projects: collectorProjectResponse[];
}

export type collectorDataResponse = {
    address: string;
    role: string;
    profileURI: string;
    projectCount: number;
    completedProjectCount: number;
    isBlacklisted: boolean;
    totalProjectsValue: string;
    totalProjectsValueUSD: number;
    averageFundingProgress: number;
}

export type collectorProjectResponse = {
    id: string;
    commodityType: string;
    status: number;
    statusLabel: string;
    metadata: metadataResponse;
    investorCount: number;
    createdAt: number;
    fundingProgress: number;
    maxFundingUSD: number;
    totalFundedUSD: number;
    pricePerKg: number;
    returnRate: number;
}

export type metadataResponse = {
    assetName: string;
    imageCID: string;
    category: string;
    weight: string;
    deliveryDate: string;
    fundingDuration: string;
    repaymentDuration: string;
    tokenContractAddress: string;
    assetPrice: string;
    fundingPrice: string;
}

