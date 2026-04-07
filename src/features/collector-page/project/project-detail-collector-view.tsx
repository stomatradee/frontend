"use client";

import { themeConfig } from "@/core/config/theme-config";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { LoadingScreen } from "@/core/component/loading-component";
import useProjectDetail from "./hooks/use-project-detail";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { imageConfig } from "@/core/config/images-config";

export default function ProjectDetailCollectorView() {
  const theme = themeConfig;
  const { data, isLoading } = useProjectDetail();

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <LoadingScreen />
      </Box>
    );
  }

  if (!data) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography color={theme.colors.white} fontSize={16}>
          Project not found
        </Typography>
      </Box>
    );
  }

  const { project, investments, collector } = data;

  const truncateAddress = (address: string) => {
    if (!address) return "-";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  // Shared card sx
  const cardSx = {
    backgroundColor: theme.colors.secondaryBgColors,
    border: `1px solid ${theme.colors.thirdBgColors}`,
    borderRadius: "12px",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: theme.colors.primaryColors,
      boxShadow: `0 8px 24px rgba(44, 255, 158, 0.15)`,
    },
  };

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: themeConfig.colors.bgColors,
          padding: "20px 30px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          src={imageConfig.logo.stomatradeLogo}
          alt="Stomatrade"
          width={200}
          height={60}
          style={{ width: "200px", height: "auto" }}
        />

        <Box display="flex" alignItems="center" gap="4px">
          <Image
            src={imageConfig.icon.profileIcon}
            alt="Profile Icon"
            width={40}
            height={40}
            style={{ borderRadius: "20%" }}
          />
          <Box width={10} />
          <Typography
            fontSize={16}
            fontWeight={700}
            color={theme.colors.white}
            sx={{ fontFamily: "monospace" }}
          >
            {truncateAddress(collector.address)}
          </Typography>
          <IconButton
            size="small"
            onClick={() => handleCopyAddress(collector.address)}
            sx={{
              color: theme.colors.thirdBgColors,
              padding: "2px",
              transition: "all 0.3s ease",
              "&:hover": { color: theme.colors.primaryColors },
            }}
          >
            <Icon icon="mdi:content-copy" width={16} />
          </IconButton>
        </Box>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        padding={{ xs: "100px 20px 40px", md: "10px" }}
        paddingTop={{ md: "121px" }}
        paddingBottom={{ md: "121px" }}
        margin="0 auto"
        maxWidth="900px"
        width="100%"
        gap="20px"
      >
        {/* Page Header */}
        {/* <Box textAlign="center" marginBottom="8px">
          <Typography
            variant="h1"
            color={theme.colors.white}
            fontWeight={600}
            sx={{ fontSize: { xs: 16, sm: 18, md: 25 } }}
          >
            Asset Details
          </Typography>
          <Typography
            color={theme.colors.thirdBgColors}
            fontSize={14}
            marginTop="4px"
          >
            Detailed view of asset ID {project.id}
          </Typography>
        </Box> */}

        {/* Image Card */}
        <Card sx={{ ...cardSx, overflow: "hidden" }}>
          <CardMedia
            sx={{ height: { xs: 250, sm: 350, md: 400 } }}
            image={`https://gateway.pinata.cloud/ipfs/${project.metadata.imageCID}`}
            title={project.metadata.assetName}
          />
        </Card>

        {/* Asset Title Card */}
        <Card sx={{ ...cardSx, padding: { xs: "16px 20px", sm: "20px 28px" } }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            gap="12px"
          >
            <Typography
              color={theme.colors.white}
              fontWeight={700}
              sx={{ fontSize: { xs: 18, sm: 22, md: 26 } }}
            >
              {project.metadata?.assetName ?? project.commodityType}
            </Typography>
            <Chip
              label={project.statusLabel.toUpperCase()}
              size="small"
              sx={{
                backgroundColor: theme.colors.fourGreenColors,
                color: theme.colors.primaryColors,
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.5px",
              }}
            />
          </Box>
        </Card>

        {/* Project Details + Funding Progress Row */}
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1.5fr 1fr" }}
          gap="20px"
        >
          {/* Project Details Card */}
          <Card sx={cardSx}>
            <CardContent sx={{ padding: "24px" }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                marginBottom="20px"
              >
                <Typography
                  color={theme.colors.white}
                  fontWeight={700}
                  fontSize={18}
                >
                  Project Details
                </Typography>
                <Chip
                  label={project.collateralVerified ? "Verified" : "Unverified"}
                  size="small"
                  sx={{
                    backgroundColor: project.collateralVerified
                      ? theme.colors.fourGreenColors
                      : theme.colors.thirdBgColors,
                    color: project.collateralVerified
                      ? theme.colors.primaryColors
                      : theme.colors.white,
                    fontWeight: 600,
                    fontSize: 11,
                  }}
                />
              </Box>

              <Box
                display="grid"
                gridTemplateColumns={{ xs: "1fr 1fr", sm: "1fr 1fr 1fr 1fr" }}
                gap="12px"
              >
                <InfoPill
                  label="Commodity Type"
                  value={project.commodityType}
                  theme={theme}
                  icon="mdi:leaf"
                />
                <InfoPill
                  label="Volume"
                  value={`${project.volumeKg} Kg`}
                  theme={theme}
                />
                <InfoPill
                  label="Collateral Value"
                  value={`$${project.collateralValueUSD.toFixed(2)}`}
                  theme={theme}
                />
                <InfoPill
                  label="Max Funding"
                  value={`$${project.maxFundingUSD.toFixed(2)}`}
                  theme={theme}
                />
              </Box>
            </CardContent>
          </Card>

          {/* Funding Progress Card */}
          <Card sx={cardSx}>
            <CardContent sx={{ padding: "24px" }}>
              <Typography
                color={theme.colors.white}
                fontWeight={700}
                fontSize={18}
                marginBottom="20px"
              >
                Funding Progress
              </Typography>

              {/* Progress Bar */}
              <Box marginBottom="20px">
                <Typography
                  fontSize={13}
                  fontWeight={600}
                  color={theme.colors.primaryColors}
                  marginBottom="8px"
                >
                  {project.fundingProgress}%
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={project.fundingProgress}
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
              </Box>

              {/* Funding Stats */}
              <Box display="flex" flexDirection="column" gap="10px">
                <Box display="flex" justifyContent="space-between">
                  <Typography fontSize={12} color={theme.colors.thirdBgColors}>
                    Total Funded
                  </Typography>
                  <Typography
                    fontSize={12}
                    fontWeight={600}
                    color={theme.colors.white}
                  >
                    ${project.totalFundedUSD.toLocaleString()}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography fontSize={12} color={theme.colors.thirdBgColors}>
                    Investor Count
                  </Typography>
                  <Typography
                    fontSize={12}
                    fontWeight={600}
                    color={theme.colors.white}
                  >
                    {project.investorCount}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Collector Information Card */}
        <Card sx={cardSx}>
          <CardContent sx={{ padding: "24px" }}>
            <Typography
              color={theme.colors.white}
              fontWeight={700}
              fontSize={18}
              marginBottom="20px"
            >
              Collector Information
            </Typography>

            <Box
              display="grid"
              gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr 1fr" }}
              gap="20px"
              alignItems="flex-start"
            >
              {/* Collector Address */}
              <Box>
                <Typography
                  fontSize={11}
                  color={theme.colors.thirdBgColors}
                  marginBottom="4px"
                >
                  Collector Address
                </Typography>
                <Box display="flex" alignItems="center" gap="4px">
                  <Typography
                    fontSize={16}
                    fontWeight={700}
                    color={theme.colors.white}
                    sx={{ fontFamily: "monospace" }}
                  >
                    {truncateAddress(collector.address)}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => handleCopyAddress(collector.address)}
                    sx={{
                      color: theme.colors.thirdBgColors,
                      padding: "2px",
                      transition: "all 0.3s ease",
                      "&:hover": { color: theme.colors.primaryColors },
                    }}
                  >
                    <Icon icon="mdi:content-copy" width={16} />
                  </IconButton>
                </Box>
              </Box>

              {/* Project Count */}
              <Box>
                <Typography
                  fontSize={11}
                  color={theme.colors.thirdBgColors}
                  marginBottom="4px"
                >
                  Project Count
                </Typography>
                <Typography
                  fontSize={16}
                  fontWeight={700}
                  color={theme.colors.white}
                >
                  {collector.projectCount}
                </Typography>
              </Box>

              {/* Verification Status */}
              <Box>
                <Typography
                  fontSize={11}
                  color={theme.colors.thirdBgColors}
                  marginBottom="4px"
                >
                  Verification Status
                </Typography>
                <Chip
                  icon={
                    <Icon
                      icon={
                        collector.isBlacklisted
                          ? "mdi:close-circle"
                          : "mdi:check-circle"
                      }
                      width={16}
                      color={
                        collector.isBlacklisted
                          ? "#FF4444"
                          : theme.colors.primaryColors
                      }
                    />
                  }
                  label={collector.isBlacklisted ? "Blacklisted" : "Verified"}
                  size="small"
                  sx={{
                    backgroundColor: collector.isBlacklisted
                      ? "#3D0000"
                      : theme.colors.fourGreenColors,
                    color: collector.isBlacklisted
                      ? "#FF4444"
                      : theme.colors.primaryColors,
                    fontWeight: 600,
                    fontSize: 12,
                    border: `1px solid ${
                      collector.isBlacklisted
                        ? "#FF4444"
                        : theme.colors.primaryColors
                    }`,
                  }}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Recent Investments Card */}
        <Card sx={cardSx}>
          <CardContent sx={{ padding: "24px" }}>
            <Typography
              color={theme.colors.white}
              fontWeight={700}
              fontSize={18}
              marginBottom="20px"
            >
              Recent Investments
            </Typography>

            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {["Investor", "Amount ($)", "Share (%)"].map((header) => (
                      <TableCell
                        key={header}
                        sx={{
                          color: theme.colors.white,
                          backgroundColor: theme.colors.bgColors,
                          borderColor: theme.colors.thirdBgColors,
                          fontSize: 12,
                          fontWeight: 600,
                          paddingY: "12px",
                        }}
                      >
                        {header}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {investments.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={3}
                        sx={{
                          color: theme.colors.thirdBgColors,
                          borderColor: theme.colors.thirdBgColors,
                          textAlign: "center",
                          paddingY: "24px",
                          fontSize: 14,
                        }}
                      >
                        No recent investments yet
                      </TableCell>
                    </TableRow>
                  ) : (
                    investments.map((inv, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          transition: "all 0.2s ease",
                          "&:hover": {
                            backgroundColor: `${theme.colors.thirdBgColors}22`,
                          },
                        }}
                      >
                        <TableCell
                          sx={{
                            color: theme.colors.primaryColors,
                            borderColor: theme.colors.thirdBgColors,
                            fontSize: 13,
                            fontFamily: "monospace",
                          }}
                        >
                          {truncateAddress(inv.investor)}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: theme.colors.white,
                            borderColor: theme.colors.thirdBgColors,
                            fontSize: 13,
                          }}
                        >
                          ${inv.amountUSD.toLocaleString()}
                        </TableCell>
                        <TableCell
                          sx={{
                            color: theme.colors.thirdColors,
                            borderColor: theme.colors.thirdBgColors,
                            fontSize: 13,
                            fontWeight: 600,
                          }}
                        >
                          {inv.sharePercent}%
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

/* Reusable Info Pill Component */
type InfoPillProps = {
  label: string;
  value: string;
  theme: typeof themeConfig;
  icon?: string;
};

function InfoPill({ label, value, theme, icon }: InfoPillProps) {
  return (
    <Box
      sx={{
        backgroundColor: theme.colors.bgColors,
        border: `1px solid ${theme.colors.thirdBgColors}`,
        borderRadius: "12px",
        padding: "12px 14px",
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: theme.colors.primaryColors,
        },
      }}
    >
      <Typography
        fontSize={10}
        color={theme.colors.thirdBgColors}
        marginBottom="6px"
      >
        {label}
      </Typography>
      <Box display="flex" alignItems="center" gap="6px">
        {icon && (
          <Icon icon={icon} width={16} color={theme.colors.primaryColors} />
        )}
        <Typography fontSize={14} fontWeight={700} color={theme.colors.white}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
}
