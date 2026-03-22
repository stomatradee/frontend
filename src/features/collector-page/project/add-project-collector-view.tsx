"use client";

import { imageConfig } from "@/core/config/images-config";
import { themeConfig } from "@/core/config/theme-config";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import useAddProjectCollector from "./hooks/use-add-project-collector";

export default function AddProjectCollectorView() {
  const theme = themeConfig;

  const { onAddProject } = useAddProjectCollector();

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={{ xs: "100px 20px 40px", md: "20px" }}
      margin="0 auto"
    >
      <Typography
        variant="h1"
        color={theme.colors.white}
        fontWeight={600}
        sx={{ fontSize: { xs: 16, sm: 18, md: 25 } }}
      >
        Tokenize New Asset
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingTop="90px"
      >
        <Image
          src={imageConfig.icon.profileIcon}
          alt="Profile Icon"
          width={150}
          height={150}
          style={{ borderRadius: "50%" }}
        />
        <Box height={30} />
        <Typography
          variant="body1"
          color={theme.colors.white}
          fontWeight={600}
          sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
        >
          Upload your asset and tokenize on Stomatrade Platform
        </Typography>
        <Box height={30} />
        <Button
          onClick={onAddProject}
          variant="outlined"
          sx={{
            width: { xs: "100%", sm: "200px" },
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
            "&.Mui-disabled": {
              color: theme.colors.thirdBgColors,
              borderColor: theme.colors.thirdBgColors,
            },
            transition: "all 0.3s",
          }}
        >
          Upload Asset
        </Button>
      </Box>
    </Box>
  );
}
