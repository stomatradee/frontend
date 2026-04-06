"use client";

import { themeConfig } from "@/core/config/theme-config";
import { Box, Typography } from "@mui/material";
import EmptyAssetComponent from "./component/empty-asset-component";
import { LoadingScreen } from "@/core/component/loading-component";
import useMyProject from "./hooks/use-my-project";

export default function MyProjectCollectorView() {
  const theme = themeConfig;

  const { isLoading } = useMyProject();

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
      <EmptyAssetComponent />
    </Box>
  );
}
