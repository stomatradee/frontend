"use client";

import useProjectDetail from "./hooks/use-project-detail";

export default function ProjectDetailCollectorView() {
  const { data, isLoading } = useProjectDetail();

  if (isLoading) {
    return <></>;
  }

  return <></>;
}
