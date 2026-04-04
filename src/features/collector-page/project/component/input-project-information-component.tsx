"use client";

import { themeConfig } from "@/core/config/theme-config";
import {
  Box,
  Card,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { IDatePickerControl } from "@/core/types/common";
import { useEffect } from "react";

type InputProjectInformationComponentProps = {
  title?: string;
  description?: string;
  label?: string;
  placeholder?: string;
  quantityValue?: string;
  fundingDurationValue?: string;
  repaymentDurationValue?: string;
  onCategoryChange: (value: string) => void;
  onQuantityChange: (value: string) => void;
  onDeliveryDateChange: (date: IDatePickerControl) => void;
  onFundingDurationChange: (value: string) => void;
  onRepaymentDurationChange: (value: string) => void;
};

export default function InputProjectInformationComponent({
  title,
  description,
  label,
  quantityValue,
  fundingDurationValue,
  repaymentDurationValue,
  onCategoryChange,
  onQuantityChange,
  onDeliveryDateChange,
  onFundingDurationChange,
  onRepaymentDurationChange,
}: InputProjectInformationComponentProps) {
  const theme = themeConfig;

  const category = [
    {
      value: "coffee",
      label: "Coffee",
    },
    {
      value: "cocoa",
      label: "Cocoa",
    },
    {
      value: "palm-oil",
      label: "Palm Oil",
    },
    {
      value: "rubber",
      label: "Rubber",
    },
  ];

  useEffect(() => {
    onCategoryChange(category[0].value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {title ?? "Title"}
      </Typography>
      <Box height={10} />
      <Typography
        variant="body1"
        color={theme.colors.thirdBgColors}
        fontWeight={600}
        sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
      >
        {description ?? "Description"}
      </Typography>
      <Box height={30} />
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
            Category
          </Typography>
          <Box height={20} />
          <TextField
            id="category"
            select
            defaultValue="coffee"
            variant="outlined"
            onChange={(e) => onCategoryChange(e.target.value)}
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
            {category.map((data) => (
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

        {/* Weight Column */}
        <Box display="flex" flexDirection="column" flex={1}>
          <Typography
            variant="body1"
            color={theme.colors.white}
            fontWeight={600}
            sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
          >
            Weight
          </Typography>
          <Box height={20} />
          <TextField
            id={label}
            type="number"
            label="Weight"
            placeholder="Input Weight"
            value={quantityValue ?? ""}
            onChange={(e) => onQuantityChange(e.target.value)}
            variant="outlined"
            fullWidth
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      "& .MuiTypography-root": {
                        color: theme.colors.white,
                      },
                    }}
                  >
                    Kg
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
      <Typography
        variant="body1"
        color={theme.colors.white}
        fontWeight={600}
        sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
      >
        Delivery Date
      </Typography>
      <Box height={20} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Select Date"
          onChange={(date) => onDeliveryDateChange(date)}
          slotProps={{
            textField: {
              fullWidth: true,
              variant: "outlined",
              sx: {
                backgroundColor: theme.colors.bgColors,
                borderRadius: "25px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "25px",
                  backgroundColor: theme.colors.bgColors,

                  "& fieldset": {
                    borderColor: theme.colors.thirdBgColors,
                    borderRadius: "25px",
                  },
                  "&:hover fieldset": {
                    borderColor: theme.colors.primaryColors,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: `${theme.colors.primaryColors} !important`,
                  },
                },

                "& .MuiInputLabel-root": {
                  color: "gray",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: theme.colors.white,
                },

                "& .MuiInputBase-input": {
                  color: theme.colors.white,
                  WebkitTextFillColor: theme.colors.white,
                },

                "& .MuiSvgIcon-root": {
                  color: theme.colors.white,
                },
              },
            },
            popper: {
              sx: {
                "& .MuiPaper-root": {
                  backgroundColor: theme.colors.secondaryBgColors,
                  borderRadius: "15px",
                  border: `1px solid ${theme.colors.thirdBgColors}`,
                  color: theme.colors.white,
                },
              },
            },
            desktopPaper: {
              sx: {
                backgroundColor: theme.colors.secondaryBgColors,
                borderRadius: "15px",
                border: `1px solid ${theme.colors.thirdBgColors}`,
              },
            },
            layout: {
              sx: {
                backgroundColor: theme.colors.secondaryBgColors,
                color: theme.colors.white,
                "& .MuiDayCalendar-weekDayLabel": {
                  color: theme.colors.thirdBgColors,
                },
                "& .MuiPickersCalendarHeader-label": {
                  color: theme.colors.white,
                },
                "& .MuiPickersCalendarHeader-switchViewButton": {
                  color: theme.colors.white,
                },
                "& .MuiPickersArrowSwitcher-button": {
                  color: theme.colors.white,
                },
                "& .MuiPickersYear-yearButton": {
                  color: theme.colors.white,
                  "&.Mui-selected": {
                    backgroundColor: theme.colors.primaryColors,
                    color: theme.colors.bgColors,
                  },
                  "&:hover": {
                    backgroundColor: theme.colors.thirdBgColors,
                  },
                },
                "& .MuiMultiSectionDigitalClockSection-item": {
                  color: theme.colors.white,
                  "&:hover": {
                    backgroundColor: theme.colors.thirdBgColors,
                  },
                  "&.Mui-selected": {
                    backgroundColor: `${theme.colors.primaryColors} !important`,
                    color: theme.colors.bgColors,
                    "&:hover": {
                      backgroundColor: theme.colors.primaryColors,
                    },
                    "&:focus": {
                      backgroundColor: theme.colors.primaryColors,
                    },
                  },
                },
                "& .MuiButton-text": {
                  color: theme.colors.primaryColors,
                },
              },
            },
            day: {
              sx: {
                color: theme.colors.white,
                "&:hover": {
                  backgroundColor: theme.colors.thirdBgColors,
                },
                "&.Mui-selected": {
                  backgroundColor: `${theme.colors.primaryColors} !important`,
                  color: theme.colors.bgColors,
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: theme.colors.primaryColors,
                  },
                  "&:focus": {
                    backgroundColor: theme.colors.primaryColors,
                  },
                },
                "&.MuiPickersDay-today": {
                  borderColor: theme.colors.primaryColors,
                  color: theme.colors.primaryColors,
                },
              },
            },
          }}
        />
      </LocalizationProvider>
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
            Funding Duration
          </Typography>
          <Box height={20} />
          <TextField
            id={label}
            type="number"
            label="Funding Duration"
            placeholder="Input Funding Duration"
            value={fundingDurationValue ?? ""}
            onChange={(e) => onFundingDurationChange(e.target.value)}
            variant="outlined"
            fullWidth
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      "& .MuiTypography-root": {
                        color: theme.colors.white,
                      },
                    }}
                  >
                    Days
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

        {/* Weight Column */}
        <Box display="flex" flexDirection="column" flex={1}>
          <Typography
            variant="body1"
            color={theme.colors.white}
            fontWeight={600}
            sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
          >
            Repayment Duration
          </Typography>
          <Box height={20} />
          <TextField
            id={label}
            type="number"
            label="Repayment Duration"
            placeholder="Input Repayment Duration"
            value={repaymentDurationValue ?? ""}
            onChange={(e) => onRepaymentDurationChange(e.target.value)}
            variant="outlined"
            fullWidth
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      "& .MuiTypography-root": {
                        color: theme.colors.white,
                      },
                    }}
                  >
                    Days
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
    </Card>
  );
}
