"use client";

import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import { themeConfig } from "@/core/config/theme-config";
import useUserProfile from "./hook/use-user-profile";
import { LoadingScreen } from "@/core/component/loading-component";
import { imageConfig } from "@/core/config/images-config";
import { Icon } from "@iconify/react";
import QrDialog from "./component/qr-dialog";

export default function UserProfileCollectorView() {
  const theme = themeConfig;

  const { userData, isLoading, address, isQrOpen, openQrCode, closeQrCode } =
    useUserProfile();

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

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      padding={{ xs: "100px 20px 40px", md: "20px" }}
      //   width="100%"
      //   maxWidth="1200px"
      margin="0 auto"
    >
      <Typography
        variant="h1"
        color={theme.colors.white}
        fontWeight={600}
        sx={{ fontSize: { xs: 16, sm: 18, md: 25 } }}
      >
        Your Profile
      </Typography>

      <Box height={30} />

      <Card
        sx={{
          background: theme.colors.secondaryBgColors,
          borderRadius: "20px",
          border: `1px solid ${theme.colors.thirdBgColors}`,
          // borderTop: `2px solid transparent`,
          // borderImage: `linear-gradient(90deg, ${theme.colors.secondaryColors}, ${theme.colors.primaryColors}) 1`,
          borderImageSlice: 1,
          width: "100%",
          padding: { xs: "25px 20px", sm: "35px" },
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: theme.colors.primaryColors,
            transform: "translateY(-4px)",
            boxShadow: `0 8px 24px rgba(44, 255, 158, 0.15)`,
          },
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems="center"
          gap={{ xs: "16px", sm: "30px" }}
          margin="0 auto"
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: "20%",
              overflow: "hidden",
              border: `2px solid ${theme.colors.thirdBgColors}`,
              flexShrink: 0,
              width: { xs: 100, sm: 150 },
              height: { xs: 100, sm: 150 },
            }}
          >
            <Image
              src={imageConfig.icon.profileIcon}
              alt="Profile Icon"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            flexGrow={1}
            alignItems={{ xs: "center", sm: "flex-start" }}
          >
            <Typography
              variant="body1"
              color={theme.colors.white}
              fontWeight={700}
              sx={{ fontSize: { xs: 18, sm: 22, md: 30 } }}
            >
              {userData?.fullname}
            </Typography>

            <Typography
              variant="body1"
              color={theme.colors.primaryColors}
              fontWeight={500}
              sx={{
                fontSize: { xs: 11, sm: 13, md: 15 },
                fontFamily: "monospace",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: { xs: "200px", sm: "300px", md: "100%" },
                whiteSpace: "nowrap",
              }}
            >
              {userData?.contractAddress}
            </Typography>
          </Box>

          <Box
            onClick={openQrCode}
            sx={{
              background: theme.colors.bgColors,
              border: `1px solid ${theme.colors.thirdBgColors}`,
              borderRadius: "50%",
              padding: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              flexShrink: 0,
              "&:hover": {
                borderColor: theme.colors.primaryColors,
                boxShadow: `0 0 16px rgba(44, 255, 158, 0.2)`,
              },
              "&:active": {
                transform: "scale(0.93)",
              },
            }}
          >
            <Icon
              icon="ic:baseline-qrcode"
              width={24}
              color={theme.colors.white}
            />
          </Box>
        </Box>
      </Card>

      <QrDialog
        walletAddress={address ?? ""}
        open={isQrOpen}
        onClose={closeQrCode}
      />
    </Box>
  );
}
