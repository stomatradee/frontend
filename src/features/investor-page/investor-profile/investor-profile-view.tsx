"use client";

import { useInvestorProfile } from "./hooks/use-investor-profile";
import { LoadingScreen } from "@/core/component/loading-component";
import QrDialog from "@/features/collector-page/user-profile/component/qr-dialog";
import Image from "next/image";
import { imageConfig } from "@/core/config/images-config";
import { Icon } from "@iconify/react";

export default function InvestorProfileView() {
  const { userData, isLoading, address, isQrOpen, openQrCode, closeQrCode } =
    useInvestorProfile();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-[100px] px-5 pb-10 md:pt-5 mx-auto">
      <h1 className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[25px]">
        Your Profile
      </h1>

      <div className="h-[30px]" />

      <div className="bg-background-secondary rounded-[20px] border border-background-third w-full px-5 py-[25px] sm:p-[35px] transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(44,255,158,0.15)]">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px] mx-auto">
          <div className="relative rounded-[20%] overflow-hidden border-2 border-background-third shrink-0 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
            <Image
              src={imageConfig.icon.investorProfileIcon}
              alt="Profile Icon"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col flex-grow items-center sm:items-start">
            <p className="text-white font-bold text-[18px] sm:text-[22px] md:text-[30px]">
              {userData?.fullname}
            </p>

            <p className="text-primary font-medium font-mono overflow-hidden text-ellipsis max-w-[200px] sm:max-w-[300px] md:max-w-full whitespace-nowrap text-[11px] sm:text-[13px] md:text-[15px]">
              {userData?.contractAddress}
            </p>
          </div>

          <div
            onClick={openQrCode}
            className="bg-background border border-background-third rounded-full p-4 cursor-pointer transition-all duration-300 shrink-0 hover:border-primary hover:shadow-[0_0_16px_rgba(44,255,158,0.2)] active:scale-95"
          >
            <Icon
              icon="ic:baseline-qrcode"
              width={24}
              className="text-white"
            />
          </div>
        </div>
      </div>

      <QrDialog
        walletAddress={address ?? ""}
        open={isQrOpen}
        onClose={closeQrCode}
      />
    </div>
  );
}

