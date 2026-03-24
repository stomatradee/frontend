"use client"

import { ProfileRequestModel, ProfileResponseModel } from "@/repository/profile/model/profile-request-model";
import { GetCollectorProfileRepository } from "@/repository/profile/profile-repository";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { useAccount, useEnsAvatar, useEnsName } from "wagmi";

export default function useUserProfile() {
    const [isLoading, setLoading] = useState(false)
    const [isQrOpen, setIsQrOpen] = useState(false)
    const [userData, setUserData] = useState<ProfileResponseModel | null>(null)

    const { address } = useAccount();
    const { data: ensName } = useEnsName({ address });
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

    const getUserProfile = useCallback(async () => {
        setLoading(true)

        try {
            const data: ProfileRequestModel = {
                contractAddress: address ?? "",
                role: "collector",
            };

            const result = await GetCollectorProfileRepository(data)

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
        getUserProfile()
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
        ensAvatar,
        isQrOpen,
        openQrCode,
        closeQrCode,
    }
}