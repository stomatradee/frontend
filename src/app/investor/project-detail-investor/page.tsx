import ProjectDetailView from "@/features/investor-page/project-detail/project-detail-view";
import { Suspense } from "react";

export default function ProjectDetailInvestorPage() {
    return (
        <Suspense fallback={<></>}>
            <ProjectDetailView />
        </Suspense>
    );
}