import { ProfileInvestorRequestModel, ProfileInvestorResponseModel } from "@/repository/investor-profile/profile/model/profile-investor-model"
import { GetInvestorProfileRepository } from "@/repository/investor-profile/profile/profile-investor-repository"
import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner"
import { useAccount } from "wagmi"

export function useInvestorProfile() {
    const [isLoading, setLoading] = useState(false)
    const [isQrOpen, setIsQrOpen] = useState(false)
    const [userData, setUserData] = useState<ProfileInvestorResponseModel | null>(null)

    const { address } = useAccount();

    const getInvestorProfile = useCallback(async () => {
        setLoading(true)

        try {
            const data: ProfileInvestorRequestModel = {
                contractAddress: address ?? "0x0",
                role: "investor",
            };

            const result = await GetInvestorProfileRepository(data)

            if (result !== null) {
                result.contractAddress = address ?? ""
                setUserData(result)
            } else {
                toast.error("Data Not Found", {
                    position: 'top-center',
                    style: {
                        width: '600px',
                        left: '50%',
                        right: '50%',
                        transform: 'translate(-50%)',
                        display: 'flex',
                        alignItems: 'center',
                    },
                });
            }
        } catch (error) {
            toast.error(`Get data failed: ${error}`, {
                position: 'top-center',
                style: {
                    width: '600px',
                    left: '50%',
                    right: '50%',
                    transform: 'translate(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                },
            });
        }

        setLoading(false)
    }, [address])

    useEffect(() => {
        getInvestorProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const openQrCode = useCallback(() => {
        setIsQrOpen(true)
    }, [])

    const closeQrCode = useCallback(() => {
        setIsQrOpen(false)
    }, [])

    return {
        userData,
        isLoading,
        address,
        isQrOpen,
        openQrCode,
        closeQrCode,
    }
}