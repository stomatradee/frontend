"use client";

import { useProjectList } from "./hooks/use-project-list";
import EmptyAssetComponent from "@/core/component/empty-asset-component";
import ProjectCard from "@/core/component/project-card";
import { LoadingScreen } from "@/core/component/loading-component";
import { imageConfig } from "@/core/config/images-config";

export default function ProjectListView() {
  const { isLoading, data, handleNavigateToProjectDetail } = useProjectList();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="flex flex-col pt-[100px] px-5 pb-10 md:pt-5 mx-auto">
      <h1 className="text-foreground font-semibold text-[16px] sm:text-[18px] md:text-[25px]">
        All Project
      </h1>

      {!data?.projects?.length ? (
        <EmptyAssetComponent title="No Project Found" image={imageConfig.icon.confusedIconRich} />
      ) : (
        <div className="pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.projects.map((project) => (
              <div key={project.id}>
                <ProjectCard
                  assetName={project.metadata?.assetName}
                  createdAt={project.createdAt}
                  fundingProgress={project.fundingProgress}
                  imageCID={project.metadata?.imageCID}
                  maxFundingUSD={project.maxFundingUSD}
                  pricePerKg={project.pricePerKg}
                  returnRate={project.returnRate}
                  statusLabel={project.statusLabel}
                  totalFundedUSD={project.totalFundedUSD}
                  investorCount={project.investorCount}
                  id={project.id.toString()}
                  handleNavigateToProjectDetail={() => {
                    handleNavigateToProjectDetail(project.id.toString())
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

