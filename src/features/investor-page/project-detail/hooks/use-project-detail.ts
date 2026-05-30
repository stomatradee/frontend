import { ProjectDetailRequest, ProjectDetailResponse } from "@/repository/project/model/get-project-detail-model";
import { getProjectDetails } from "@/repository/project/project-repository";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export default function UseProjectDetail() {
    const searchParams = useSearchParams();

    const projectId = searchParams.get("projectId");

    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState<ProjectDetailResponse | null>(null)

    const getProjectDetail = useCallback(async () => {
        console.log("projectId", projectId)

        try {
            setLoading(true)

            const param: ProjectDetailRequest = {
                projectId: projectId ?? "0x0",
            }

            const response = await getProjectDetails(param)

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
    }, [projectId])

    useEffect(() => {
        getProjectDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        isLoading,
        data,
    }
}