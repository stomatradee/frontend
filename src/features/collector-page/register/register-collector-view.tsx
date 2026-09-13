"use client";

import Image from "next/image";
import InputComponent from "../../../core/component/input-component";
import { useCallback, useState } from "react";
import z from "zod";
import { imageConfig } from "@/core/config/images-config";
import SubmitButtonComponent from "../../../core/component/submit-button-component";
import useRegisterCollector from "./hook/use-register-collector";
import { Form } from "@/core/component/form-provider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterRequestModel } from "@/repository/collector-profile/register/model/register-model";

export default function RegisterCollectorView() {
  const [fullname, setFullname] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [residenceId, setResidenceId] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [companyAddress, setCompanyAddress] = useState<string>("");

  const { handleSubmit, isLoading } = useRegisterCollector();

  const RegisterCollectorSchema = z.object({
    fullname: z.string().min(1, "Fullname is required"),
    phoneNumber: z.string().min(1, "Phone Number is required"),
    residenceId: z.string().min(1, "Residence ID is required"),
    companyName: z.string().min(1, "Company Name is required"),
    companyAddress: z.string().min(1, "Company Address is required"),
  });

  const methods = useForm({
    resolver: zodResolver(RegisterCollectorSchema),
    defaultValues: {
      fullname: "",
      phoneNumber: "",
      residenceId: "",
      companyName: "",
      companyAddress: "",
    },
  });

  const onSubmit = useCallback(() => {
    const data: RegisterRequestModel = {
      contractAddress: "",
      role: "collector",
      fullname: methods.getValues("fullname"),
      phoneNumber: methods.getValues("phoneNumber"),
      residenceId: methods.getValues("residenceId"),
      companyName: methods.getValues("companyName"),
      companyAddress: methods.getValues("companyAddress"),
    };

    handleSubmit(data);
  }, [handleSubmit, methods]);

  return (
    <>
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
            Please complete your profile to get started collector&apos;s
            platform
          </p>
          <div className="h-[30px]" />
          
          <InputComponent
            title={"Collectors Name"}
            description={"Please input collectors name"}
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
          
          <InputComponent
            title={"Company Name"}
            description={"Please input company name"}
            label={"Company Name"}
            placeholder={"Input Company Name..."}
            value={companyName}
            onChange={(value) => {
              setCompanyName(value);
              methods.setValue("companyName", value, { shouldValidate: true });
            }}
          />
          <div className="h-[30px]" />
          
          <InputComponent
            title={"Company Address"}
            description={"Please input company address"}
            label={"Company Address"}
            placeholder={"Input Company Address..."}
            value={companyAddress}
            onChange={(value) => {
              setCompanyAddress(value);
              methods.setValue("companyAddress", value, {
                shouldValidate: true,
              });
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
    </>
  );
}
