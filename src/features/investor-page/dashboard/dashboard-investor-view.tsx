"use client";

import DashboardNavbar from "@/core/component/dashboard/dashboard-navbar";
import DashboardSidebar from "@/core/component/dashboard/dashboard-sidebar";
import { themeConfig } from "@/core/config/theme-config";
import { ROLE } from "@/core/types/common";
import { useDashboardCollector } from "@/features/collector-page/dashboard/hooks/use-dashboard-collector";
import { Box } from "@mui/material";

export default function DashboardInvestorView({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = themeConfig;

  const { handleDisconnectWallet } = useDashboardCollector();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <DashboardSidebar role={ROLE.INVESTOR} />

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
        <DashboardNavbar handleDisconnect={handleDisconnectWallet} />

        {/* Page Content */}
        <Box sx={{ pt: "82px", px: "32px", pb: 3, color: theme.colors.white }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
