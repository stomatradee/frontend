export type OpenProjectResponseModel = {
    projects: ProjectDataResponse[];
}

export type ProjectDataResponse = {
    id: number;
    collector: string;
    commodityType: string;
    metadata: metadataResponse;
    status: number;
    statusLabel: string;
    fundingProgress: number;
    maxFundingUSD: number;
    totalFundedUSD: number;
    investorCount: number;
    pricePerKg: number;
    returnRate: number;
    createdAt: number;
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