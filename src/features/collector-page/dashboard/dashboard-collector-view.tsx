"use client";

import { Box } from "@mui/material";
import { themeConfig } from "@/core/config/theme-config";
import CollectorSidebar from "./component/collector-sidebar";
import CollectorNavbar from "./component/collector-navbar";
import { useDashboardCollector } from "./hooks/use-dashboard-collector";

export default function DashboardCollectorView({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = themeConfig;

  const { handleDisconnectWallet } = useDashboardCollector();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <CollectorSidebar />

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
        <CollectorNavbar handleDisconnect={handleDisconnectWallet} />

        {/* Page Content */}
        <Box sx={{ pt: "82px", px: "32px", pb: 3, color: theme.colors.white }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
