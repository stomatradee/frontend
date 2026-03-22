import { themeConfig } from "@/core/config/theme-config";
import { Box, Typography } from "@mui/material";

export default function MyProjectCollectorView() {
  const theme = themeConfig;

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
        My Asset
      </Typography>
    </Box>
  );
}
