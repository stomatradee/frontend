export type RegisterRequestModel = {
    contractAddress: string,
    role: "collector" | "investor",
    fullname: string,
    phoneNumber: string,
    residenceId: string,
    companyName: string,
    companyAddress: string,
}