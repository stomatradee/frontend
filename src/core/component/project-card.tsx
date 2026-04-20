import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  LinearProgress,
  Typography,
} from "@mui/material";
import { themeConfig } from "../config/theme-config";

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
  const theme = themeConfig;

  return (
    <Card
      onClick={() => {
        handleNavigateToProjectDetail(id);
      }}
      key={id}
      sx={{
        width: "250px",
        backgroundColor: theme.colors.secondaryBgColors,
        border: `1px solid ${theme.colors.thirdBgColors}`,
        borderRadius: "12px",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: theme.colors.primaryColors,
          transform: "translateY(-4px)",
          boxShadow: `0 8px 24px rgba(44, 255, 158, 0.15)`,
          cursor: "pointer",
        },
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={`https://gateway.pinata.cloud/ipfs/${imageCID}`}
        title={assetName}
      />
      <CardContent sx={{ padding: "20px" }}>
        {/* Header: Commodity + Status */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="16px"
        >
          <Typography
            fontWeight={700}
            fontSize={18}
            color={theme.colors.white}
            sx={{ textTransform: "capitalize" }}
          >
            {assetName}
          </Typography>
          <Chip
            label={statusLabel}
            size="small"
            sx={{
              backgroundColor: theme.colors.fourGreenColors,
              color: theme.colors.primaryColors,
              fontWeight: 600,
              fontSize: 11,
            }}
          />
        </Box>

        {/* Funding Progress */}
        <Box marginBottom="16px">
          <Box display="flex" justifyContent="space-between" marginBottom="6px">
            <Typography fontSize={12} color={theme.colors.thirdBgColors}>
              Funding Progress
            </Typography>
            <Typography
              fontSize={12}
              fontWeight={600}
              color={theme.colors.primaryColors}
            >
              {fundingProgress}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={fundingProgress}
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: theme.colors.thirdBgColors,
              "& .MuiLinearProgress-bar": {
                borderRadius: 3,
                background: `linear-gradient(90deg, ${theme.colors.secondaryColors}, ${theme.colors.primaryColors})`,
              },
            }}
          />
          <Typography
            fontSize={11}
            color={theme.colors.thirdBgColors}
            marginTop="4px"
          >
            ${totalFundedUSD.toLocaleString()} / $
            {maxFundingUSD.toLocaleString()}
          </Typography>
        </Box>

        {/* Stats Grid */}
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap="12px">
          <Box>
            <Typography fontSize={11} color={theme.colors.thirdBgColors}>
              Price/Kg
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={600}
              color={theme.colors.white}
            >
              ${pricePerKg}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={11} color={theme.colors.thirdBgColors}>
              Return Rate
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={600}
              color={theme.colors.thirdColors}
            >
              {returnRate}%
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={11} color={theme.colors.thirdBgColors}>
              Investors
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={600}
              color={theme.colors.white}
            >
              {investorCount}
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={11} color={theme.colors.thirdBgColors}>
              Delivery Date
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={600}
              color={theme.colors.white}
            >
              {new Date(createdAt * 1000).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
