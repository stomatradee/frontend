import { Card, CardContent } from "@/core/component/shadcn-ui/card";
import { Badge } from "@/core/component/shadcn-ui/badge";

interface ProjectCardProps {
  id: string;
  imageCID: string;
  assetName: string;
  statusLabel: string;
  fundingProgress: number;
  totalFundedUSD: number;
  maxFundingUSD: number;
  pricePerKg: number;
  returnRate: number;
  investorCount: number;
  createdAt: number;
  handleNavigateToProjectDetail: (id: string) => void;
}

export default function ProjectCard({
  id,
  imageCID,
  assetName,
  statusLabel,
  fundingProgress,
  totalFundedUSD,
  maxFundingUSD,
  pricePerKg,
  returnRate,
  investorCount,
  createdAt,
  handleNavigateToProjectDetail,
}: ProjectCardProps) {
  const imageUrl = imageCID ? `https://gateway.pinata.cloud/ipfs/${imageCID}` : "https://placehold.co/400x140?text=No+Image";

  return (
    <Card
      onClick={() => handleNavigateToProjectDetail(id)}
      className="w-[250px] overflow-hidden cursor-pointer bg-background-secondary border-background-third transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(44,255,158,0.15)] group"
    >
      <div 
        className="h-[140px] w-full bg-muted bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        title={assetName || "Project Image"}
      />
      
      <CardContent className="p-5 pt-5 flex flex-col gap-0">
        {/* Header: Commodity + Status */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg text-foreground capitalize">
            {assetName ?? "-"}
          </h2>
          <Badge className="bg-primary-dark text-primary hover:bg-primary-dark font-semibold text-[11px] h-auto px-2 py-0.5 rounded-full border-none">
            {statusLabel}
          </Badge>
        </div>

        {/* Funding Progress */}
        <div className="mb-4">
          <div className="flex justify-between mb-1.5">
            <p className="text-[12px] text-muted-foreground font-medium">
              Funding Progress
            </p>
            <p className="text-[12px] font-semibold text-primary">
              {fundingProgress ?? "0"}%
            </p>
          </div>
          <div className="h-1.5 rounded-full bg-muted w-full overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-primary-secondary to-primary"
              style={{ width: `${fundingProgress ?? 0}%` }}
            />
          </div>
          <p className="text-[11px] text-muted-foreground mt-1.5">
            ${totalFundedUSD?.toLocaleString() ?? "0"} / ${maxFundingUSD?.toLocaleString() ?? "0"}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-2">
          <div>
            <p className="text-[11px] text-muted-foreground">
              Price/Kg
            </p>
            <p className="text-sm font-semibold text-foreground">
              ${pricePerKg ?? "0"}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground">
              Return Rate
            </p>
            <p className="text-sm font-semibold text-primary-third">
              {returnRate ?? "0"}%
            </p>
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground">
              Investors
            </p>
            <p className="text-sm font-semibold text-foreground">
              {investorCount ?? "0"}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground">
              Delivery Date
            </p>
            <p className="text-sm font-semibold text-foreground">
              {new Date(createdAt * 1000).toLocaleDateString() ?? "-"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

