"use client";

import { imageConfig } from "@/core/config/images-config";
import Image from "next/image";
import useAddProjectCollectorForm from "./hooks/use-add-project-collector-form";
import { Form } from "@/core/component/form-provider";
import InputComponent from "@/core/component/input-component";
import UploadFileComponent from "@/core/component/upload-file-component";
import InputProjectInformationComponent from "./component/input-project-information-component";
import FinancialInformationComponent from "./component/financial-information-component";
import SubmitButtonComponent from "@/core/component/submit-button-component";

export default function AddProjectCollectorFormView() {
  const {
    methods,
    isLoading,
    assetName,
    handleAssetNameChange,
    fundingDuration,
    handleFundingDurationChange,
    repaymentDuration,
    handleRepaymentDurationChange,
    handleCidImageChange,
    weight,
    handleWeightChange,
    assetPrice,
    handleAssetPriceChange,
    fundingPrice,
    handleFundingPriceChange,
    handleCategoryChange,
    handleDeliveryDateChange,
    handleTokenCodeChange,
    onSubmit,
  } = useAddProjectCollectorForm();

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
      <Form methods={methods} onSubmit={() => {}}>
        <div className="flex flex-col justify-center items-center min-h-screen pt-[100px] px-5 pb-10 md:py-[121px] w-full max-w-[1200px] mx-auto">
          <h1 className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[30px]">
            Tokenize New Asset
          </h1>
          <div className="h-[10px]" />
          <p className="text-background-third font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
            Enter the core details of the real-world asset you wish to tokenize
            on-chain.
          </p>
          <div className="h-[30px]" />
          
          <InputComponent
            title={"Asset Name"}
            description={"Please input asset name"}
            label={"Asset Name"}
            placeholder={"Input Asset Name..."}
            value={assetName}
            onChange={handleAssetNameChange}
          />
          <div className="h-[30px]" />
          
          <UploadFileComponent
            title={"Asset Imagery"}
            description={"Please add the file image for new asset"}
            onCIDChange={handleCidImageChange}
          />
          <div className="h-[30px]" />
          
          <InputProjectInformationComponent
            title={"Asset Information"}
            description={"Please add the information for new asset"}
            quantityValue={weight}
            fundingDurationValue={fundingDuration}
            repaymentDurationValue={repaymentDuration}
            onFundingDurationChange={handleFundingDurationChange}
            onRepaymentDurationChange={handleRepaymentDurationChange}
            onCategoryChange={handleCategoryChange}
            onQuantityChange={handleWeightChange}
            onDeliveryDateChange={handleDeliveryDateChange}
          />
          <div className="h-[30px]" />
          
          <FinancialInformationComponent
            assetPriceValue={assetPrice}
            fundingPriceValue={fundingPrice}
            onAssetPriceChange={handleAssetPriceChange}
            onFundingPriceChange={handleFundingPriceChange}
            onTokenCodeChange={handleTokenCodeChange}
          />
          <div className="h-[30px]" />
          
          <SubmitButtonComponent
            title={"Submit Your Asset?"}
            description={"Press the right button to submit your Asset"}
            disabled={!methods.formState.isValid}
            onSubmit={onSubmit}
            isLoading={isLoading}
          />
        </div>
      </Form>
    </>
  );
}
