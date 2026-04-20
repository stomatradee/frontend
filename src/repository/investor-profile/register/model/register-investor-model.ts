export type RegisterInvestorRequestModel = {
    contractAddress: string,
    role: "collector" | "investor",
    fullname: string,
    phoneNumber: string,
    residenceId: string,
}