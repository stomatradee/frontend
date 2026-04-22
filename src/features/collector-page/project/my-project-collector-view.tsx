"use client";

import { themeConfig } from "@/core/config/theme-config";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import EmptyAssetComponent from "../../../core/component/empty-asset-component";
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

      {data?.projects.length === 0 ? (
        <EmptyAssetComponent />
      ) : (
        <Box paddingTop="32px">
          <Grid container spacing={2}>
            {data?.projects.map((project) => (
              <Card
                onClick={() => {
                  handleNavigateToProjectDetail(project.id);
                }}
                key={project.id}
                sx={{
                  width: "250px",
                  backgroundColor: theme.colors.secondaryBgColors,
                  border: `1px solid ${theme.colors.thirdBgColors}`,
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: theme.colors.primaryColors,
                    transform: "translateY(-4px)",
                    boxShadow: `0 8px 24px rgba(44, 255, 158, 0.15)`,
                    cursor: "pointer",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={`https://gateway.pinata.cloud/ipfs/${project.metadata.imageCID}`}
                  title={project.metadata.assetName}
                />
                <CardContent sx={{ padding: "20px" }}>
                  {/* Header: Commodity + Status */}
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom="16px"
                  >
                    <Typography
                      fontWeight={700}
                      fontSize={18}
                      color={theme.colors.white}
                      sx={{ textTransform: "capitalize" }}
                    >
                      {project.metadata.assetName}
                    </Typography>
                    <Chip
                      label={project.statusLabel}
                      size="small"
                      sx={{
                        backgroundColor: theme.colors.fourGreenColors,
                        color: theme.colors.primaryColors,
                        fontWeight: 600,
                        fontSize: 11,
                      }}
                    />
                  </Box>

                  {/* Funding Progress */}
                  <Box marginBottom="16px">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      marginBottom="6px"
                    >
                      <Typography
                        fontSize={12}
                        color={theme.colors.thirdBgColors}
                      >
                        Funding Progress
                      </Typography>
                      <Typography
                        fontSize={12}
                        fontWeight={600}
                        color={theme.colors.primaryColors}
                      >
                        {project.fundingProgress}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={project.fundingProgress}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: theme.colors.thirdBgColors,
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 3,
                          background: `linear-gradient(90deg, ${theme.colors.secondaryColors}, ${theme.colors.primaryColors})`,
                        },
                      }}
                    />
                    <Typography
                      fontSize={11}
                      color={theme.colors.thirdBgColors}
                      marginTop="4px"
                    >
                      ${project.totalFundedUSD.toLocaleString()} / $
                      {project.maxFundingUSD.toLocaleString()}
                    </Typography>
                  </Box>

                  {/* Stats Grid */}
                  <Box display="grid" gridTemplateColumns="1fr 1fr" gap="12px">
                    <Box>
                      <Typography
                        fontSize={11}
                        color={theme.colors.thirdBgColors}
                      >
                        Price/Kg
                      </Typography>
                      <Typography
                        fontSize={14}
                        fontWeight={600}
                        color={theme.colors.white}
                      >
                        ${project.pricePerKg}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        fontSize={11}
                        color={theme.colors.thirdBgColors}
                      >
                        Return Rate
                      </Typography>
                      <Typography
                        fontSize={14}
                        fontWeight={600}
                        color={theme.colors.thirdColors}
                      >
                        {project.returnRate}%
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        fontSize={11}
                        color={theme.colors.thirdBgColors}
                      >
                        Investors
                      </Typography>
                      <Typography
                        fontSize={14}
                        fontWeight={600}
                        color={theme.colors.white}
                      >
                        {project.investorCount}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        fontSize={11}
                        color={theme.colors.thirdBgColors}
                      >
                        Delivery Date
                      </Typography>
                      <Typography
                        fontSize={14}
                        fontWeight={600}
                        color={theme.colors.white}
                      >
                        {new Date(
                          project.createdAt * 1000,
                        ).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
