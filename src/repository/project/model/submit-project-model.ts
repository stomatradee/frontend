export type SubmitProjectPinataRequestModel = {
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

export type SubmitProjectRequestModel = {
    acceptedToken: string;
    commodityType: string;
    volumeKg: bigint;
    collateralValue: bigint;
    fundingDuration: bigint;
    repaymentDuration: bigint;
    cid: string;
}