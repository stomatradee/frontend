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
    metadataURI: string;
    investorCount: number;
    createdAt: number;
    fundingProgress: number;
    maxFundingUSD: number;
    totalFundedUSD: number;
    pricePerKg: number;
    returnRate: number;
}

