"use client";

import { themeConfig } from "@/core/config/theme-config";
import { Box, Card, MenuItem, TextField, Typography } from "@mui/material";
import { on } from "events";
import { HTMLInputTypeAttribute } from "react";

type InputProjectInformationComponentProps = {
  title?: string;
  description?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  inputType?: HTMLInputTypeAttribute | undefined;
  onCategoryChange: (value: string) => void;
  onQuantityChange: (value: string) => void;
};

export default function InputProjectInformationComponent({
  title,
  description,
  label,
  placeholder,
  value,
  inputType,
  onCategoryChange,
  onQuantityChange,
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
            label="Select"
            defaultValue="coffee"
            variant="outlined"
            onChange={(e) => onCategoryChange(e.target.value)}
            fullWidth
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
              "& .MuiInputBase-input": {
                color: theme.colors.white,
              },
              "& .MuiSelect-icon": {
                color: theme.colors.white,
              },
            }}
          >
            {category.map((data) => (
              <MenuItem key={data.value} value={data.value}>
                {data.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Quantity Column */}
        <Box display="flex" flexDirection="column" flex={1}>
          <Typography
            variant="body1"
            color={theme.colors.white}
            fontWeight={600}
            sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
          >
            Quantity
          </Typography>
          <Box height={20} />
          <TextField
            id={label}
            type="number"
            label="Quantity"
            placeholder="Input Quantity"
            value={value ?? ""}
            onChange={(e) => onQuantityChange(e.target.value)}
            variant="outlined"
            fullWidth
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
