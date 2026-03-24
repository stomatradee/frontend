import {
  Box,
  Card,
  InputAdornment,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { themeConfig } from "@/core/config/theme-config";

export default function FinancialInformationComponent() {
  const theme = themeConfig;

  const token = [
    {
      value: "USDT",
      label: "USDT",
    },
    {
      value: "USDC",
      label: "USDC",
    },
  ];

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
      <Typography
        variant="h1"
        color={theme.colors.white}
        fontWeight={600}
        sx={{ fontSize: { xs: 16, sm: 18, md: 25 } }}
      >
        Financial Information
      </Typography>
      <Box height={10} />
      <Typography
        variant="body1"
        color={theme.colors.thirdBgColors}
        fontWeight={600}
        sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
      >
        Input information about the financial aspect of the asset
      </Typography>
      <Box height={30} />
      {/* Category Column */}
      <Box display="flex" flexDirection="column" flex={1}>
        <Typography
          variant="body1"
          color={theme.colors.white}
          fontWeight={600}
          sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
        >
          Choose Token
        </Typography>
        <Box height={20} />
        <TextField
          id="category"
          select
          defaultValue="USDT"
          variant="outlined"
          onChange={(e) => {}}
          fullWidth
          SelectProps={{
            MenuProps: {
              PaperProps: {
                sx: {
                  backgroundColor: theme.colors.secondaryBgColors,
                  borderRadius: "15px",
                },
              },
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: theme.colors.bgColors,
              borderRadius: "25px",
              "&:hover fieldset": {
                borderColor: theme.colors.primaryColors,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.colors.primaryColors,
              },
            },
            "& .MuiInputLabel-root": {
              color: "gray",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: theme.colors.white,
            },
            "& .MuiInputBase-input,  & input": {
              color: theme.colors.white,
            },
            "& .MuiSelect-icon": {
              color: theme.colors.white,
            },
          }}
        >
          {token.map((data) => (
            <MenuItem
              key={data.value}
              value={data.value}
              sx={{
                color: theme.colors.white,
                "&:hover": {
                  backgroundColor: theme.colors.thirdBgColors,
                },
                "&.Mui-selected": {
                  backgroundColor: theme.colors.primaryColors + "08",
                  color: theme.colors.primaryColors,
                  "&:hover": {
                    backgroundColor: theme.colors.primaryColors + "14",
                  },
                },
              }}
            >
              {data.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box height={50} />
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        margin="0 auto"
        gap={3}
        width="100%"
      >
        {/* Category Column */}
        <Box display="flex" flexDirection="column" flex={1}>
          <Typography
            variant="body1"
            color={theme.colors.white}
            fontWeight={600}
            sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
          >
            Asset Price
          </Typography>
          <Box height={20} />
          <TextField
            id="asset-price"
            type="number"
            placeholder="Input Asset Price"
            value={""}
            onChange={(e) => {}}
            variant="outlined"
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      "& .MuiTypography-root": { color: theme.colors.white },
                    }}
                  >
                    USDC
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: theme.colors.bgColors,
                borderRadius: "25px",
                "&:hover fieldset": {
                  borderColor: theme.colors.primaryColors,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.colors.primaryColors,
                },
              },
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: theme.colors.white,
              },
              "& .MuiInputBase-input::placeholder": {
                color: theme.colors.thirdBgColors,
              },
              "& .MuiInputBase-input": {
                color: theme.colors.white,
              },
            }}
          />
        </Box>

        {/* Quantity Column */}
        <Box display="flex" flexDirection="column" flex={1}>
          <Typography
            variant="body1"
            color={theme.colors.white}
            fontWeight={600}
            sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
          >
            Funding Price
          </Typography>
          <Box height={20} />
          <TextField
            id="funding-price"
            type="number"
            placeholder="Input Funding Price"
            value={""}
            onChange={(e) => {}}
            variant="outlined"
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      "& .MuiTypography-root": { color: theme.colors.white },
                    }}
                  >
                    USDC
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: theme.colors.bgColors,
                borderRadius: "25px",
                "&:hover fieldset": {
                  borderColor: theme.colors.primaryColors,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.colors.primaryColors,
                },
              },
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: theme.colors.white,
              },
              "& .MuiInputBase-input::placeholder": {
                color: theme.colors.thirdBgColors,
              },
              "& .MuiInputBase-input": {
                color: theme.colors.white,
              },
            }}
          />
        </Box>
      </Box>
      <Box height={50} />
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        margin="0 auto"
        gap={3}
        width="100%"
      >
        {/* Category Column */}
        <Box display="flex" flexDirection="column" flex={1}>
          <Typography
            variant="body1"
            color={theme.colors.white}
            fontWeight={600}
            sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
          >
            Return Rate (%)
          </Typography>
          <Box height={20} />
          <TextField
            id="return-rate"
            type="number"
            placeholder="Input Return Rate"
            value={""}
            onChange={(e) => {}}
            variant="outlined"
            fullWidth
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      "& .MuiTypography-root": { color: theme.colors.white },
                    }}
                  >
                    %
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: theme.colors.bgColors,
                borderRadius: "25px",
                "&:hover fieldset": {
                  borderColor: theme.colors.primaryColors,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.colors.primaryColors,
                },
              },
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: theme.colors.white,
              },
              "& .MuiInputBase-input::placeholder": {
                color: theme.colors.thirdBgColors,
              },
              "& .MuiInputBase-input": {
                color: theme.colors.white,
              },
            }}
          />
        </Box>

        {/* Quantity Column */}
        <Box display="flex" flexDirection="column" flex={1}>
          <Typography
            variant="body1"
            color={theme.colors.white}
            fontWeight={600}
            sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
          >
            Investment Status
          </Typography>
          <Box height={20} />
          <Switch
            defaultChecked
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: theme.colors.primaryColors,
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: theme.colors.primaryColors,
              },
              "& .MuiSwitch-switchBase": {
                color: theme.colors.white,
              },
              "& .MuiSwitch-track": {
                backgroundColor: theme.colors.thirdBgColors,
              },
            }}
          />
        </Box>
      </Box>
    </Card>
  );
}
