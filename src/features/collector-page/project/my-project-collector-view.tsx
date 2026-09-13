"use client";

import EmptyAssetComponent from "../../../core/component/empty-asset-component";
import ProjectCard from "@/core/component/project-card";
import { LoadingScreen } from "@/core/component/loading-component";
import useMyProject from "./hooks/use-my-project";

export default function MyProjectCollectorView() {
  const { isLoading, data, handleNavigateToProjectDetail } = useMyProject();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="flex flex-col pt-[100px] px-5 pb-10 md:p-5 mx-auto">
      <h1 className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[25px]">
        My Asset
      </h1>

      {!data?.projects?.length ? (
        <EmptyAssetComponent />
      ) : (
        <div className="pt-8">
          <div className="flex flex-wrap gap-4">
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
                    handleNavigateToProjectDetail(project.id);
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
