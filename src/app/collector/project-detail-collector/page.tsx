import ProjectDetailCollectorView from "@/features/collector-page/project/project-detail-collector-view";
import { Suspense } from "react";

export default function ProjectDetailCollectorPage() {
  return (
    <Suspense fallback={<></>}>
      <ProjectDetailCollectorView />
    </Suspense>
  );
}
