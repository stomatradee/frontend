import { LoadingScreen } from "@/core/component/loading-component";
import { imageConfig } from "@/core/config/images-config";
import { Box } from "@mui/material";
import Image from "next/image";
import { useMemo } from "react";

export default function SplashPageView() {
  const iconImg = useMemo(() => {
    return imageConfig.logo.stomatradeLogo;
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={iconImg} alt="Stomatrade" width={300} height={300} />
        <Box sx={{ height: 20 }} />
        <LoadingScreen
          primaryBgActive={true}
          sx={{
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        />
      </Box>
    </Box>
  );
}
