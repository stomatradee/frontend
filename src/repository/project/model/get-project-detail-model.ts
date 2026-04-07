
// REQUEST DATA
export type ProjectDetailRequest = {
    projectId: string
}

// RESPONSE DATA
export enum ProjectStatus {
    PENDING = 0,
    ACTIVE = 1,
    COMPLETED = 2,
    FAILED = 3,
}

export type ProjectDetailResponse = {
    project: ProjectDataResponse;
    investments: InvestmentModel[];
    collector: CollectorSummaryResponse;
};

export type CollectorSummaryResponse = {
    address: string;
    role: string;
    projectCount: number;
    completedProjectCount: number;
    isBlacklisted: boolean;
    profileURI: string;
};

export type ProjectDataResponse = {
    id: string;
    collector: string;
    acceptedToken: string;
    commodityType: string;
    volumeKg: string;
    collateralValue: string;
    collateralValueUSD: number;
    maxFunding: string;
    maxFundingUSD: number;
    profitPerKgInvestor: string;
    profitPerKgInvestorUSD: number;
    profitPerKgPlatform: string;
    profitPerKgPlatformUSD: number;
    fundingDeadline: string;
    repaymentDeadline: string;
    metadataURI: string;
    status: ProjectStatus;
    statusLabel: string;
    totalFunded: string;
    totalFundedUSD: number;
    investorCount: number;
    buyerPaymentAmount: string;
    totalInvestorReturn: string;
    platformFee: string;
    collectorRemainder: string;
    collateralVerified: boolean;
    createdAt: number;
    fundedAt: number | null;
    settledAt: number | null;
    fundingProgress: number;
    pricePerKg: number;
    returnRate: number;
};

export type InvestmentModel = {
    investor: string;
    amount: string;
    amountUSD: number;
    claimed: boolean;
    claimedAmount: string;
    claimedAmountUSD: number;
    timestamp: number;
    sharePercent: number;
};