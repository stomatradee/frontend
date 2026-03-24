"use client";

import { imageConfig } from "@/core/config/images-config";
import { themeConfig } from "@/core/config/theme-config";
import { AppBar, Box, Typography } from "@mui/material";
import Image from "next/image";
import useAddProjectCollectorForm from "./hooks/use-add-project-collector-form";
import { Form } from "@/core/component/form-provider";
import InputComponent from "@/core/component/input-component";
import UploadFileComponent from "@/core/component/upload-file-component";
import InputProjectInformationComponent from "./component/input-project-information-component";
import FinancialInformationComponent from "./component/financial-information-component";
import SubmitButtonComponent from "@/core/component/submit-button-component";
import { useState } from "react";

export default function AddProjectCollectorFormView() {
  const { methods, isLoading } = useAddProjectCollectorForm();

  const [assetName, setAssetName] = useState<string>("");
  const [rateInvestment, setRateInvestment] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [assetPrice, setAssetPrice] = useState<string>("");
  const [fundingPrice, setFundingPrice] = useState<string>("");
  const [investmentStatus, setInvestmentStatus] = useState<boolean>(false);

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
          <Box height={30} />
          <UploadFileComponent
            title={"Asset Imagery"}
            description={"Please add the file image for new asset"}
          />
          <Box height={30} />
          <InputProjectInformationComponent
            title={"Asset Information"}
            description={"Please add the information for new asset"}
            quantityValue={quantity}
            onCategoryChange={(category) => {
              methods.setValue("assetCategory", category, {
                shouldValidate: true,
              });
            }}
            onQuantityChange={(quantity) => {
              setQuantity(quantity);
              methods.setValue("quantity", quantity, {
                shouldValidate: true,
              });
            }}
            onDeliveryDateChange={(date) => {
              methods.setValue("deliveryDate", date, {
                shouldValidate: true,
              });
            }}
          />
          <Box height={30} />
          <FinancialInformationComponent
            assetPriceValue={assetPrice}
            fundingPriceValue={fundingPrice}
            investmentStatus={investmentStatus}
            rateValue={rateInvestment}
            onAssetPriceChange={(assetPrice) => {
              setAssetPrice(assetPrice);
              methods.setValue("assetPrice", assetPrice, {
                shouldValidate: true,
              });
            }}
            onFundingPriceChange={(fundingPrice) => {
              setFundingPrice(fundingPrice);
              methods.setValue("fundingPrice", fundingPrice, {
                shouldValidate: true,
              });
            }}
            onInvestmentStatusChange={(investmentStatus) => {
              setInvestmentStatus(investmentStatus);
              methods.setValue("investmentStatus", investmentStatus, {
                shouldValidate: true,
              });
            }}
            onTokenCodeChange={(tokenCode) => {
              methods.setValue("tokenCode", tokenCode, {
                shouldValidate: true,
              });
            }}
            onRateValueChange={(rateValue) => {
              setRateInvestment(rateValue);
              methods.setValue("returnRate", rateValue, {
                shouldValidate: true,
              });
            }}
          />
          <Box height={30} />
          <SubmitButtonComponent
            title={"Submit Your Asset?"}
            description={"Press the right button to submit your Asset"}
            disabled={!methods.formState.isValid}
            isLoading={isLoading}
          />
        </Box>
      </Form>
    </>
  );
}
