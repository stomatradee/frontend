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
    <div
      onClick={() => {
        handleNavigateToProjectDetail(id);
      }}
      key={id}
      className="w-[250px] bg-background-secondary border border-background-third rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(44,255,158,0.15)] cursor-pointer overflow-hidden"
    >
      <div 
        className="h-[140px] bg-background-third w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        title={assetName || "Project Image"}
      />
      
      <div className="p-5">
        {/* Header: Commodity + Status */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-[18px] text-foreground capitalize">
            {assetName ?? "-"}
          </h2>
          <span className="inline-flex items-center px-2 py-1 bg-primary-dark text-primary font-semibold text-[11px] rounded-full">
            {statusLabel}
          </span>
        </div>

        {/* Funding Progress */}
        <div className="mb-4">
          <div className="flex justify-between mb-1.5">
            <p className="text-[12px] text-[#8e8e8e]">
              Funding Progress
            </p>
            <p className="text-[12px] font-semibold text-primary">
              {fundingProgress ?? "0"}%
            </p>
          </div>
          <div className="h-1.5 rounded-full bg-background-third w-full overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-primary-secondary to-primary"
              style={{ width: `${fundingProgress ?? 0}%` }}
            />
          </div>
          <p className="text-[11px] text-[#8e8e8e] mt-1">
            ${totalFundedUSD?.toLocaleString() ?? "0"} / ${maxFundingUSD?.toLocaleString() ?? "0"}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[11px] text-[#8e8e8e]">
              Price/Kg
            </p>
            <p className="text-[14px] font-semibold text-foreground">
              ${pricePerKg ?? "0"}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-[#8e8e8e]">
              Return Rate
            </p>
            <p className="text-[14px] font-semibold text-primary-third">
              {returnRate ?? "0"}%
            </p>
          </div>
          <div>
            <p className="text-[11px] text-[#8e8e8e]">
              Investors
            </p>
            <p className="text-[14px] font-semibold text-foreground">
              {investorCount ?? "0"}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-[#8e8e8e]">
              Delivery Date
            </p>
            <p className="text-[14px] font-semibold text-foreground">
              {new Date(createdAt * 1000).toLocaleDateString() ?? "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

