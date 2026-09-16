"use client";

import DashboardNavbar from "@/core/component/dashboard/dashboard-navbar";
import DashboardSidebar from "@/core/component/dashboard/dashboard-sidebar";
import { ROLE } from "@/core/types/common";
import { useDashboardCollector } from "@/features/collector-page/dashboard/hooks/use-dashboard-collector";

export default function DashboardInvestorView({
  children,
}: {
  children: React.ReactNode;
}) {
  const { handleDisconnectWallet } = useDashboardCollector();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <DashboardSidebar role={ROLE.INVESTOR} />

      {/* Main Content Area */}
      <main className="flex-grow bg-background min-h-screen">
        {/* Navbar */}
        <DashboardNavbar handleDisconnect={handleDisconnectWallet} />

        {/* Page Content */}
        <div className="pt-[82px] px-8 pb-6 text-foreground">
          {children}
        </div>
      </main>
    </div>
  );
}

