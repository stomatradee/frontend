import { imageConfig } from "@/core/config/images-config";
import { themeConfig } from "@/core/config/theme-config";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface EmptyAssetComponentProps {
  title?: string;
}

export default function EmptyAssetComponent({
  title = "You dont have any asset yet",
}: EmptyAssetComponentProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      paddingTop="90px"
    >
      <Image
        src={imageConfig.icon.confusedIcon}
        alt="Profile Icon"
        width={150}
        height={150}
      />
      <Box height={30} />
      <Typography
        variant="body1"
        color={themeConfig.colors.white}
        fontWeight={600}
        sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
      >
        {title}
      </Typography>
      <Box height={30} />
    </Box>
  );
}
