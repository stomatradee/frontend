import DashboardCollectorView from "@/features/collector-page/dashboard/dashboard-collector-view";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardCollectorView>{children}</DashboardCollectorView>;
}
