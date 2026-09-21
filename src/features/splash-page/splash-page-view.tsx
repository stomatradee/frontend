"use client";

import { LoadingScreen } from "@/core/component/loading-component";
import { imageConfig } from "@/core/config/images-config";
import Image from "next/image";
import { useMemo } from "react";
import { useSplashScreen } from "./hooks/use-splash-screen";

export default function SplashPageView() {
  useSplashScreen();

  const iconImg = useMemo(() => {
    return imageConfig.logo.stomatradeLogo;
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen px-6 bg-background">
      <div className="flex flex-col justify-center items-center w-full max-w-md">
        <Image
          src={iconImg}
          alt="Stomatrade"
          width={300}
          height={300}
          className="w-40 h-auto sm:w-56 md:w-[300px] transition-all duration-300"
          priority
        />
        <div className="h-6 sm:h-8" />
        <div className="w-full max-w-[200px] sm:max-w-xs md:max-w-sm py-4 sm:py-5">
          <LoadingScreen primaryBgActive={true} />
        </div>
      </div>
    </div>
  );
}
