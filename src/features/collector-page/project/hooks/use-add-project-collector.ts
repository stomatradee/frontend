import { routes } from "@/core/config/routes";
import { useNavigationUtils } from "@/core/hooks/use-navigation-utils";
import { useCallback } from "react";

export default function useAddProjectCollector() {
    const { pushRoute } = useNavigationUtils();

    const onAddProject = useCallback(() => {
        pushRoute(routes.collector.addProjectForm);
    }, [pushRoute])

    return {
        onAddProject
    }
}