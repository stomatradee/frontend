"use client";

import { themeConfig } from "@/core/config/theme-config";
import { Box, Grid, Typography } from "@mui/material";
import { useProjectList } from "./hooks/use-project-list";
import EmptyAssetComponent from "@/core/component/empty-asset-component";
import ProjectCard from "@/core/component/project-card";
import { LoadingScreen } from "@/core/component/loading-component";

export default function ProjectListView() {
  const theme = themeConfig;

  const { isLoading, data } = useProjectList();

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
        All Asset
      </Typography>

      {data?.projects.length === 0 ? (
        <EmptyAssetComponent title="No Project Found" />
      ) : (
        <Box paddingTop="32px">
          <Grid container spacing={2}>
            {data?.projects.map((project) => (
              <ProjectCard
                key={project.id}
                assetName={project.metadata.assetName}
                createdAt={project.createdAt}
                fundingProgress={project.fundingProgress}
                imageCID={project.metadata.imageCID}
                maxFundingUSD={project.maxFundingUSD}
                pricePerKg={project.pricePerKg}
                returnRate={project.returnRate}
                statusLabel={project.statusLabel}
                totalFundedUSD={project.totalFundedUSD}
                investorCount={project.investorCount}
                id={project.id.toString()}
                handleNavigateToProjectDetail={() => {}}
              />
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
