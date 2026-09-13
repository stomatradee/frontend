"use client";

import Image from "next/image";
import useUserProfile from "./hook/use-user-profile";
import { LoadingScreen } from "@/core/component/loading-component";
import { imageConfig } from "@/core/config/images-config";
import { Icon } from "@iconify/react";
import QrDialog from "./component/qr-dialog";

export default function UserProfileCollectorView() {
  const { userData, isLoading, address, isQrOpen, openQrCode, closeQrCode } =
    useUserProfile();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-[100px] px-5 pb-10 md:p-5 mx-auto">
      <h1 className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[25px]">
        Your Profile
      </h1>

      <div className="h-[30px]" />

      <div className="bg-background-secondary rounded-[20px] border border-background-third w-full px-5 py-[25px] sm:p-[35px] transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(44,255,158,0.15)]">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px] mx-auto">
          <div className="relative rounded-[20%] overflow-hidden border-2 border-background-third shrink-0 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
            <Image
              src={imageConfig.icon.profileIcon}
              alt="Profile Icon"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col grow items-center sm:items-start">
            <h2 className="text-white font-bold text-[18px] sm:text-[22px] md:text-[30px]">
              {userData?.fullname}
            </h2>

            <p className="text-primary font-medium text-[11px] sm:text-[13px] md:text-[15px] font-mono overflow-hidden text-ellipsis max-w-[200px] sm:max-w-[300px] md:max-w-full whitespace-nowrap">
              {userData?.contractAddress}
            </p>
          </div>

          <button
            onClick={openQrCode}
            className="bg-background border border-background-third rounded-full p-4 cursor-pointer transition-all duration-300 shrink-0 hover:border-primary hover:shadow-[0_0_16px_rgba(44,255,158,0.2)] active:scale-95 flex items-center justify-center"
          >
            <Icon
              icon="ic:baseline-qrcode"
              width={24}
              className="text-white"
            />
          </button>
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
