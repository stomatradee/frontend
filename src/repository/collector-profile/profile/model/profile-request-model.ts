export type ProfileRequestModel = {
    contractAddress: `0x${string}`,
    role: "collector" | "investor",
}

export type ProfileResponseModel = {
    contractAddress: string,
    role: "collector" | "investor",
    fullname: string,
    phoneNumber: string,
    residenceId: string,
    companyName: string,
    companyAddress: string,
}