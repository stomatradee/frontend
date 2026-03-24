import { Box, Button, Card, Typography } from "@mui/material";
import { themeConfig } from "@/core/config/theme-config";
import { LoadingScreen } from "@/core/component/loading-component";

type SubmitButtonComponentProps = {
  title?: string;
  description?: string;
  onSubmit?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};

export default function SubmitButtonComponent({
  title,
  description,
  onSubmit,
  disabled,
  isLoading,
}: SubmitButtonComponentProps) {
  const theme = themeConfig;
  return (
    <Card
      sx={{
        bgcolor: theme.colors.secondaryBgColors,
        borderRadius: "30px",
        border: "1px solid",
        borderColor: theme.colors.thirdBgColors,
        width: "100%",
        maxWidth: "1000px",
        padding: { xs: "25px 20px", sm: "35px" },
      }}
    >
      {isLoading === true ? (
        <LoadingScreen
          primaryBgActive={true}
          sx={{
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        />
      ) : (
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          gap={{ xs: 3, sm: 0 }}
        >
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              flexGrow: 1,
              width: "100%",
            }}
          >
            <Typography
              variant="h3"
              color={theme.colors.white}
              fontWeight={600}
              sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}
            >
              {title ?? "Submit Your Profile?"}
            </Typography>
            <Box height={10} />
            <Typography
              variant="body1"
              color={theme.colors.thirdBgColors}
              fontWeight={600}
              sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
            >
              {description ?? "Press the right button to submit your profile"}
            </Typography>
          </Box>
          <Button
            onClick={onSubmit}
            variant="outlined"
            disabled={disabled ?? false}
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
            Submit
          </Button>
        </Box>
      )}
    </Card>
  );
}
