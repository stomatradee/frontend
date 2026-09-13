"use client";

import { imageConfig } from "@/core/config/images-config";
import { RegisterInvestorRequestModel } from "@/repository/investor-profile/register/model/register-investor-model";
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
    <div>
      <header className="bg-background px-[30px] py-[20px]">
        <Image
          src={imageConfig.logo.stomatradeLogo}
          alt="Stomatrade"
          width={200}
          height={60}
          className="w-[200px] h-auto"
        />
      </header>

      <Form methods={methods} onSubmit={onSubmit}>
        <div className="flex flex-col justify-center items-center min-h-screen pt-[100px] px-5 pb-10 md:py-[121px] w-full max-w-[1200px] mx-auto">
          <h1 className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[30px]">
            Complete Your Profile
          </h1>
          <div className="h-[10px]" />
          <p className="text-background-third font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
            Please complete your profile to start investment on Stomatrade
          </p>
          <div className="h-[30px]" />
          
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
          <div className="h-[30px]" />
          
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
          <div className="h-[30px]" />
          
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
          <div className="h-[30px]" />
          
          <SubmitButtonComponent
            onSubmit={onSubmit}
            disabled={!methods.formState.isValid}
            isLoading={isLoading}
          />
        </div>
      </Form>
    </div>
  );
}
