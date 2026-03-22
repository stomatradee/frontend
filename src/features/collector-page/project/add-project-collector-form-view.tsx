"use client";

import { imageConfig } from "@/core/config/images-config";
import { themeConfig } from "@/core/config/theme-config";
import { AppBar, Box, Typography } from "@mui/material";
import Image from "next/image";
import useAddProjectCollectorForm from "./hooks/use-add-project-collector-form";
import { Form } from "@/core/component/form-provider";
import InputComponent from "@/core/component/input-component";

export default function AddProjectCollectorFormView() {
  const { methods, assetName, setAssetName } = useAddProjectCollectorForm();

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: themeConfig.colors.bgColors,
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
      <Form methods={methods} onSubmit={() => {}}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          padding={{ xs: "100px 20px 40px", md: "121px" }}
          width="100%"
          maxWidth="1200px"
          margin="0 auto"
        >
          <Typography
            variant="h1"
            color={themeConfig.colors.white}
            fontWeight={600}
            sx={{ fontSize: { xs: 16, sm: 18, md: 30 } }}
          >
            Tokenize New Asset
          </Typography>
          <Box height={10} />
          <Typography
            variant="body1"
            color={themeConfig.colors.thirdBgColors}
            fontWeight={600}
            sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
          >
            Enter the core details of the real-world asset you wish to tokenize
            on-chain.
          </Typography>
          <Box height={30} />
          <InputComponent
            title={"Asset Name"}
            description={"Please input asset name"}
            label={"Asset Name"}
            placeholder={"Input Asset Name..."}
            value={assetName}
            onChange={(value) => {
              setAssetName(value);
              methods.setValue("assetName", value, { shouldValidate: true });
            }}
          />
        </Box>
      </Form>
    </>
  );
}
