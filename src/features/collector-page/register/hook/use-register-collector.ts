import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { routes } from "@/core/config/routes";
import { useCallback } from "react";

export default function useRegisterCollector() {
    const { replaceRoute } = useNavigationUtils();

    const handleSubmit = useCallback(() => {
        console.log("Submit");
        replaceRoute(routes.collector.dashboard)
    }, [replaceRoute]);

    return {
        handleSubmit
    }
}