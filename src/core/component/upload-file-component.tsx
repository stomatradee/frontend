import { Box, Card, Typography } from "@mui/material";
import { themeConfig } from "../config/theme-config";
import { HTMLInputTypeAttribute, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

type UploadFileComponentProps = {
  title?: string;
  description?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  inputType?: HTMLInputTypeAttribute | undefined;
  onChange?: (value: string) => void;
};

export default function UploadFileComponent({
  title,
  description,
}: UploadFileComponentProps) {
  const theme = themeConfig;

  const [file, setFile] = useState<File | null>(null);

  const handleFile = (file: File) => {
    setFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

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
      <label>
        <Box
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          sx={{
            border: `2px dashed ${theme.colors.primaryColors}`,
            borderRadius: 3,
            p: 6,
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "#0b0f0c",
            color: "#fff",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#111",
            },
          }}
        >
          {/* Hidden input */}
          <input
            hidden
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleFile(e.target.files[0]);
              }
            }}
          />

          {/* Icon */}
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: "#1b5e20",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <CloudUploadIcon />
          </Box>

          {/* Text */}
          <Typography fontWeight={500}>
            Click to upload or drag and drop
          </Typography>

          <Typography variant="body2" color="gray" mt={1}>
            SVG, PNG, JPG or GIF (max. 800x400px)
          </Typography>

          {/* Preview */}
          {file && (
            <Box
              mt={3}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography variant="body2">{file.name}</Typography>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                style={{ marginTop: 10, maxWidth: "100%", maxHeight: 200 }}
              />
            </Box>
          )}
        </Box>
      </label>
    </Card>
  );
}
