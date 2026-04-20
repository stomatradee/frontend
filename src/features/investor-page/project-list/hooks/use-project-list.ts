import { OpenProjectResponseModel } from "@/repository/project/model/open-project-model";
import { getOpenProject } from "@/repository/project/project-repository";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export function useProjectList() {
    const [isLoading, setLoading] = useState(false)

    const [data, setData] = useState<OpenProjectResponseModel | null>(null)

    const getProject = useCallback(async () => {
        try {
            setLoading(true)

            const response = await getOpenProject()

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
        getProject()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        isLoading,
        data,
    }
}