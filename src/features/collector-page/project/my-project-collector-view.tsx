"use client";

import { themeConfig } from "@/core/config/theme-config";
import { Box, Grid, Typography } from "@mui/material";
import EmptyAssetComponent from "../../../core/component/empty-asset-component";
import ProjectCard from "@/core/component/project-card";
import { LoadingScreen } from "@/core/component/loading-component";
import useMyProject from "./hooks/use-my-project";

export default function MyProjectCollectorView() {
  const theme = themeConfig;

  const { isLoading, data, handleNavigateToProjectDetail } = useMyProject();

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <LoadingScreen />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={{ xs: "100px 20px 40px", md: "20px" }}
      margin="0 auto"
    >
      <Typography
        variant="h1"
        color={theme.colors.white}
        fontWeight={600}
        sx={{ fontSize: { xs: 16, sm: 18, md: 25 } }}
      >
        My Asset
      </Typography>

      {!data?.projects?.length ? (
        <EmptyAssetComponent />
      ) : (
        <Box paddingTop="32px">
          <Grid container spacing={2}>
            {data.projects.map((project) => (
              <Grid key={project.id}>
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
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
