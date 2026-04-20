import { imageConfig } from "@/core/config/images-config";
import { themeConfig } from "@/core/config/theme-config";
import { AppBar, Box } from "@mui/material";
import Image from "next/image";

export default function RegisterInvestorView() {
  const theme = themeConfig;

  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: theme.colors.bgColors,
          padding: "20px 30px",
        }}
      >
        <Image
          src={imageConfig.logo.stomatradeLogo}
          alt="Stomatrade"
          width={200}
          height={60}
          style={{ width: "200px", height: "auto" }}
        />
      </AppBar>
    </Box>
  );
}
