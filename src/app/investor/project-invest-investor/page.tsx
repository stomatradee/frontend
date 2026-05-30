import ProjectInvestView from "@/features/investor-page/project-detail/project-invest-view";
import { Suspense } from "react";

export default function ProjectInvestPage() {
    return (
        <Suspense fallback={<></>}>
            <ProjectInvestView />
        </Suspense>
    );
}