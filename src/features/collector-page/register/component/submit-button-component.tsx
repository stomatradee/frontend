import { Box, Button, Card, Typography } from "@mui/material";
import { themeConfig } from "@/core/theme-config";

type SubmitButtonComponentProps = {
  onSubmit: () => void;
};

export default function SubmitButtonComponent({
  onSubmit,
}: SubmitButtonComponentProps) {
  const theme = themeConfig;
  return (
    <Card
      sx={{
        bgcolor: theme.colors.secondaryBgColors,
        borderRadius: "30px",
        border: "1px solid",
        borderColor: theme.colors.thirdBgColors,
        minWidth: { xs: "90vw", sm: "1000px" },
        padding: "35px",
      }}
    >
      <Box display="flex" flexDirection="row">
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography
            variant="h3"
            color={theme.colors.white}
            fontWeight={600}
            sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}
          >
            Submit Your Profile?
          </Typography>
          <Box height={10} />
          <Typography
            variant="body1"
            color={theme.colors.thirdBgColors}
            fontWeight={600}
            sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
          >
            Press the right button to submit your profile
          </Typography>
        </Box>
        <Button
          onClick={onSubmit}
          variant="outlined"
          sx={{
            width: "200px",
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
          Submit
        </Button>
      </Box>
    </Card>
  );
}
