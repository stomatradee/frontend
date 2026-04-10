import DashboardInvestorView from "@/features/investor-page/dashboard/dashboard-investor-view";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardInvestorView>{children}</DashboardInvestorView>;
}
