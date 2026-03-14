"use client";

import { Box, Typography } from "@mui/material";
import { themeConfig } from "@/core/theme-config";
import CollectorSidebar, {
  SIDEBAR_WIDTH,
} from "./component/collector-sidebar";
import CollectorNavbar from "./component/collector-navbar";
import { useDashboardCollector } from "./hooks/use-dashboard-collector";

export default function DashboardCollectorView() {
  const theme = themeConfig;

  const { handleDisconnectWallet } = useDashboardCollector();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <CollectorSidebar activeSegment="my-project" />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: theme.colors.bgColors,
          minHeight: "100vh",
        }}
      >
        {/* Navbar */}
        <CollectorNavbar handleDisconnect={handleDisconnectWallet}/>

        {/* Page Content */}
        <Box sx={{ pt: "82px", px: "32px", pb: 3 }}>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{ color: theme.colors.white }}
          >
            My Project
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}