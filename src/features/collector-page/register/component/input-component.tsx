import { themeConfig } from "@/core/config/theme-config";
import { Box, Card, TextField, Typography } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";

type InputComponentProps = {
  title: string;
  description: string;
  label: string;
  placeholder: string;
  value: string;
  inputType?: HTMLInputTypeAttribute | undefined;
  onChange: (value: string) => void;
};

export default function InputComponent({
  title,
  description,
  label,
  placeholder,
  value,
  inputType,
  onChange,
}: InputComponentProps) {
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
      <TextField
        id={label}
        type={inputType ?? "text"}
        label={label ?? "Input label"}
        placeholder={placeholder ?? "Input placeholder"}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        variant="outlined"
        sx={{
          minWidth: "100%",
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
    </Card>
  );
}
