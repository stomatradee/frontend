"use client";

import { imageConfig } from "@/core/config/images-config";
import { themeConfig } from "@/core/config/theme-config";
import { RegisterInvestorRequestModel } from "@/repository/investor-profile/register/model/register-investor-model";
import { AppBar, Box, Typography } from "@mui/material";
import Image from "next/image";
import { useCallback, useState } from "react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useRegisterInvestor from "./hooks/use-register-investor";
import { Form } from "@/core/component/form-provider";
import InputComponent from "@/core/component/input-component";
import SubmitButtonComponent from "@/core/component/submit-button-component";

export default function RegisterInvestorView() {
  const theme = themeConfig;

  const [fullname, setFullname] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [residenceId, setResidenceId] = useState<string>("");

  const { handleSubmit, isLoading } = useRegisterInvestor();

  const RegisterCollectorSchema = z.object({
    fullname: z.string().min(1, "Fullname is required"),
    phoneNumber: z.string().min(1, "Phone Number is required"),
    residenceId: z.string().min(1, "Residence ID is required"),
  });

  const methods = useForm({
    resolver: zodResolver(RegisterCollectorSchema),
    defaultValues: {
      fullname: "",
      phoneNumber: "",
      residenceId: "",
    },
  });

  const onSubmit = useCallback(() => {
    const data: RegisterInvestorRequestModel = {
      contractAddress: "",
      role: "investor",
      fullname: methods.getValues("fullname"),
      phoneNumber: methods.getValues("phoneNumber"),
      residenceId: methods.getValues("residenceId"),
    };

    handleSubmit(data);
  }, [handleSubmit, methods]);

  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: theme.colors.bgColors,
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

      <Form methods={methods} onSubmit={onSubmit}>
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
            Please complete your profile to start investment on Stomatrade
          </Typography>
          <Box height={30} />
          <InputComponent
            title={"Investor Name"}
            description={"Please input investor name"}
            label={"Collectors Name"}
            placeholder={"Input Collectors Name..."}
            value={fullname}
            onChange={(value) => {
              setFullname(value);
              methods.setValue("fullname", value, { shouldValidate: true });
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
              methods.setValue("phoneNumber", value, { shouldValidate: true });
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
              methods.setValue("residenceId", value, { shouldValidate: true });
            }}
          />
          <Box height={30} />
          <SubmitButtonComponent
            onSubmit={onSubmit}
            disabled={!methods.formState.isValid}
            isLoading={isLoading}
          />
        </Box>
      </Form>
    </Box>
  );
}
