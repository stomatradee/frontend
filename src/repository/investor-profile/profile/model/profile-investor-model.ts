export type ProfileInvestorRequestModel = {
    contractAddress: `0x${string}`,
    role: "collector" | "investor",
}

export type ProfileInvestorResponseModel = {
    contractAddress: string,
    role: "collector" | "investor",
    fullname: string,
    phoneNumber: string,
    residenceId: string,
}