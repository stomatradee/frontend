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
          //   background: `linear-gradient(90deg, ${theme.colors.primaryColors} 50%, ${theme.colors.fourGreenColors} 100%)`,
          background: theme.colors.secondaryBgColors,
          borderRadius: "30px",
          border: "1px solid",
          borderColor: theme.colors.thirdBgColors,
          width: "100%",
          padding: { xs: "25px 20px", sm: "35px" },
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          margin="0 auto"
        >
          <Image
            src={imageConfig.icon.profileIcon}
            alt="Profile Icon"
            width={150}
            height={150}
            style={{ borderRadius: "50%" }}
          />

          <Box width={30} />

          <Box display="flex" flexDirection="column" flexGrow={1}>
            <Typography
              variant="body1"
              color={theme.colors.white}
              fontWeight={600}
              sx={{ fontSize: { xs: 16, sm: 18, md: 30 } }}
            >
              {userData?.fullname}
            </Typography>

            <Typography
              variant="body1"
              color={theme.colors.primaryColors}
              fontWeight={500}
              sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
            >
              {userData?.contractAddress}
            </Typography>
          </Box>

          <Box
            onClick={openQrCode}
            sx={{
              background: theme.colors.bgColors,
              borderRadius: "50%",
              padding: "20px",
              cursor: "pointer",
              transition: "all 0.2s",
              "&:active": {
                transform: "scale(0.95)",
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
