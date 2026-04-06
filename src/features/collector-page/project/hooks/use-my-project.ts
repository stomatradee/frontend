import { useCallback, useEffect, useState } from "react";

export default function useMyProject() {
    const [isLoading, setLoading] = useState(false)

    const getMyProject = useCallback(async () => {
        setLoading(true)

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setLoading(false)
    }, [])

    useEffect(() => {
        getMyProject()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        isLoading,
    }
}