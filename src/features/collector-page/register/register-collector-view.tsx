"use client";

import { AppBar, Box, Typography } from "@mui/material";
import InputComponent from "./component/input-component";
import { themeConfig } from "@/core/theme-config";
import { useState } from "react";
import { useClient } from "wagmi";
import { imageConfig } from "@/core/images-config";
import SubmitButtonComponent from "./component/submit-button-component";
import useRegisterCollector from "./hook/use-register-collector";

export default function RegisterCollectorView() {
  const theme = themeConfig;

  const [fullname, setFullname] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [residenceId, setResidenceId] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [companyAddress, setCompanyAddress] = useState<string>("");

  const { handleSubmit } = useRegisterCollector();

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: theme.colors.bgColors,
          padding: "20px 30px",
        }}
      >
        <img
          src={imageConfig.logo.stomatradeLogo}
          alt="Stomatrade"
          style={{ width: "200px" }}
        />
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        padding="121px"
      >
        <Typography
          variant="h1"
          color={theme.colors.white}
          fontWeight={600}
          sx={{ fontSize: { xs: 16, sm: 18, md: 30 } }}
        >
          Complete Your Profile
        </Typography>
        <Box height={10} />
        <Typography
          variant="body1"
          color={theme.colors.thirdBgColors}
          fontWeight={600}
          sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
        >
          Please complete your profile to get started collector's platform
        </Typography>
        <Box height={30} />
        <InputComponent
          title={"Collectors Name"}
          description={"Please input collectors name"}
          label={"Collectors Name"}
          placeholder={"Input Collectors Name..."}
          value={fullname}
          onChange={(value) => {
            setFullname(value);
          }}
        />
        <Box height={30} />
        <InputComponent
          title={"Phone Number"}
          inputType={"number"}
          description={"Please input phone number"}
          label={"Phone Number"}
          placeholder={"Input Phone Number..."}
          value={phoneNumber}
          onChange={(value) => {
            setPhoneNumber(value);
          }}
        />
        <Box height={30} />
        <InputComponent
          title={"Residence ID"}
          inputType={"number"}
          description={"Please input residence ID"}
          label={"Residence ID"}
          placeholder={"Input Residence ID..."}
          value={residenceId}
          onChange={(value) => {
            setResidenceId(value);
          }}
        />
        <Box height={30} />
        <InputComponent
          title={"Company Name"}
          description={"Please input company name"}
          label={"Company Name"}
          placeholder={"Input Company Name..."}
          value={companyName}
          onChange={(value) => {
            setCompanyName(value);
          }}
        />
        <Box height={30} />
        <InputComponent
          title={"Company Address"}
          description={"Please input company address"}
          label={"Company Address"}
          placeholder={"Input Company Address..."}
          value={companyAddress}
          onChange={(value) => {
            setCompanyAddress(value);
          }}
        />
        <Box height={30} />
        <SubmitButtonComponent onSubmit={handleSubmit} />
      </Box>
    </>
  );
}
