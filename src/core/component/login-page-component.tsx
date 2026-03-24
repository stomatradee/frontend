"use client";

import { useEffect, useMemo } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  Card,
  Link,
} from "@mui/material";
import { imageConfig } from "@/core/config/images-config";
import { themeConfig } from "../config/theme-config";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { LoadingScreen } from "./loading-component";

export interface LoginPageComponentProps {
  onConnectWalletClick: (address: string) => void;
  onTermsClick: () => void;
  onPrivacyClick: () => void;
  isLoading?: boolean;
}

export default function LoginPageComponent({
  onConnectWalletClick,
  onTermsClick,
  onPrivacyClick,
  isLoading = false,
}: LoginPageComponentProps) {
  const theme = themeConfig;

  const { isConnected, address } = useAccount();

  useEffect(() => {
    if (isConnected) {
      onConnectWalletClick(address ?? "");
    }
  }, [isConnected, address, onConnectWalletClick]);

  const pageMemo = useMemo(
    () => ({
      bgImageDesktop: imageConfig.background.desktop.bgLoginDesktop,
      bgImageMobile: imageConfig.background.mobile.bgMobile,
      authTitle: "Access Your Profile",
      authDesc:
        "Track your carbon credit, unlock Xp, and get reward with real opportunities.",
      connectWalletButtonText: "Connect Wallet",
      termsText: "Terms of Service",
      privacyText: "Privacy Policy",
    }),
    [],
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: {
          xs: `url(${pageMemo.bgImageMobile})`,
          md: `url(${pageMemo.bgImageDesktop})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems={{ xs: "center", md: "center" }}
          sx={{ flexGrow: 1, py: { xs: 3, sm: 4, md: 10 } }}
        >
          {/* Left Card Section */}
          <Box
            flex={{ xs: "none", md: 0.4 }}
            width={{ xs: "100%", md: "auto" }}
            minWidth={{ xs: "unset", md: "450px" }}
            display="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
            order={{ xs: 1, md: 1 }}
          >
            <Card
              sx={{
                bgcolor: theme.colors.secondaryBgColors,
                borderRadius: { xs: "20px", md: "30px" },
                padding: { xs: "10px", md: "13px" },
                mx: { xs: "auto", md: 0 },
                ml: { md: "120px" },
                maxWidth: "430px",
                width: { xs: "100%", sm: "380px", md: "430px" },
              }}
            >
              <Stack spacing={{ xs: 2.5, md: 4 }}>
                {/* Auth Component */}
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    padding: { xs: "24px 20px", md: "34px" },
                    backgroundColor: theme.colors.bgColors,
                    borderRadius: { xs: "16px", md: "30px" },
                  }}
                >
                  <Typography
                    variant="body1"
                    color={theme.colors.white}
                    fontWeight={600}
                    sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}
                  >
                    {pageMemo.authTitle}
                  </Typography>
                  <Box height={{ xs: 6, md: 8 }} />
                  <Typography
                    variant="body1"
                    color={theme.colors.thirdBgColors}
                    align="center"
                    sx={{
                      fontSize: { xs: 11, md: 12 },
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    {pageMemo.authDesc}
                  </Typography>
                  <Box height={{ xs: 28, md: 46 }} />
                  <ConnectButton.Custom>
                    {({ openConnectModal }) => {
                      if (isLoading === true) {
                        return (
                          <LoadingScreen
                            sx={{
                              paddingTop: "20px",
                              paddingBottom: "20px",
                            }}
                          />
                        );
                      } else {
                        return (
                          <Button
                            onClick={openConnectModal}
                            fullWidth
                            variant="outlined"
                            endIcon={
                              <NorthEastIcon
                                sx={{ fontSize: { xs: 14, md: 16 } }}
                              />
                            }
                            sx={{
                              borderRadius: "9999px",
                              borderColor: "var(--primary-colors)",
                              color: "var(--primary-colors)",
                              fontWeight: 600,
                              textTransform: "none",
                              fontSize: { xs: "0.85rem", md: "0.95rem" },
                              py: { xs: "8px", md: "9px" },
                              "&:hover": {
                                backgroundColor: "var(--primary-colors)",
                                borderColor: "var(--primary-colors)",
                                color: "#0A0A0A",
                              },
                              transition: "all 0.3s",
                            }}
                          >
                            {pageMemo.connectWalletButtonText}
                          </Button>
                        );
                      }
                    }}
                  </ConnectButton.Custom>
                  <Box height={{ xs: 12, md: 20 }} />
                </Box>

                {/* Terms */}
                <Typography
                  variant="caption"
                  textAlign="center"
                  color="#737373"
                  sx={{
                    mt: 2,
                    fontSize: { xs: "0.65rem", md: "0.7rem" },
                    px: { xs: 1, md: 0 },
                  }}
                >
                  By continuing, you agree to opportunities <br />
                  <Link
                    component="button"
                    variant="caption"
                    onClick={onTermsClick}
                    sx={{
                      color: "#a3a3a3",
                      fontWeight: 600,
                      textDecoration: "underline",
                    }}
                  >
                    {pageMemo.termsText}
                  </Link>{" "}
                  and{" "}
                  <Link
                    component="button"
                    variant="caption"
                    onClick={onPrivacyClick}
                    sx={{
                      color: "#a3a3a3",
                      fontWeight: 600,
                      textDecoration: "underline",
                    }}
                  >
                    {pageMemo.privacyText}
                  </Link>
                </Typography>
              </Stack>
            </Card>
          </Box>

          {/* Hero Section - Below card on mobile, right side on desktop */}
          <Box
            flex={{ xs: "none", md: 0.5 }}
            width={{ xs: "100%", md: "auto" }}
            minWidth={{ xs: "unset", md: "500px" }}
            display={{ xs: "none", md: "flex" }}
            flexDirection="column"
            justifyContent="flex-end"
            order={{ xs: 2, md: 2 }}
            sx={{
              mt: { xs: 4, md: "auto" },
              alignSelf: "stretch",
              pb: { xs: 3, md: 5 },
            }}
          >
            <Stack
              spacing={{ xs: 2, md: 3 }}
              sx={{
                alignSelf: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
                mt: "auto",
                pl: { md: 4 },
                px: { xs: 2, md: 0 },
              }}
            >
              <Typography
                variant="h2"
                fontWeight={500}
                sx={{
                  fontSize: { xs: 32, sm: 48, md: 64 },
                  lineHeight: 1.1,
                }}
              >
                Where Farmer <br /> Meet Identity
              </Typography>
              <Typography
                variant="body1"
                color="#a3a3a3"
                sx={{
                  maxWidth: { xs: "100%", md: "500px" },
                  lineHeight: 1.6,
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                Every your contribution, growth, and carbon tells a story. Your
                profile directly reflects your reputation for supporting farmers
                into opportunities.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
