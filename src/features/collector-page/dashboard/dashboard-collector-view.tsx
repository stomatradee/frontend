"use client";

import DashboardSidebar from "../../../core/component/dashboard/dashboard-sidebar";
import DashboardNavbar from "../../../core/component/dashboard/dashboard-navbar";
import { useDashboardCollector } from "./hooks/use-dashboard-collector";

export default function DashboardCollectorView({
  children,
}: {
  children: React.ReactNode;
}) {
  const { handleDisconnectWallet } = useDashboardCollector();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <main className="flex-grow bg-background min-h-screen">
        {/* Navbar */}
        <DashboardNavbar handleDisconnect={handleDisconnectWallet} />

        {/* Page Content */}
        <div className="pt-[82px] px-[32px] pb-6 text-white">
          {children}
        </div>
      </main>
    </div>
  );
}
