import { routes } from "@/core/config/routes";
import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { getCollectorProjectRequestModel, getCollectorProjectResponseModel } from "@/repository/project/model/get-collector-project-model";
import { getCollectorProject } from "@/repository/project/project-repository";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { useAccount } from "wagmi";

export default function useMyProject() {
    const [isLoading, setLoading] = useState(false)
    const { address } = useAccount();
    const { pushRoute } = useNavigationUtils();

    const [data, setData] = useState<getCollectorProjectResponseModel | null>(null)

    const getMyProject = useCallback(async () => {
        try {
            setLoading(true)

            const param: getCollectorProjectRequestModel = {
                address: address ?? "0x0",
            }

            const response = await getCollectorProject(param)

            setData(response)

            setLoading(false)
        } catch (error) {
            setLoading(false)
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
    }, [])

    useEffect(() => {
        getMyProject()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleNavigateToProjectDetail = useCallback((projectId: string) => {
        pushRoute(routes.collector.projectDetail, projectId);
    }, [pushRoute])

    return {
        isLoading,
        data,
        handleNavigateToProjectDetail,
    }
}