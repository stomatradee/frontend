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
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <Image src={iconImg} alt="Stomatrade" width={300} height={300} />
        <div className="h-5" />
        <div className="py-5 w-full max-w-sm">
          <LoadingScreen primaryBgActive={true} />
        </div>
      </div>
    </div>
  );
}
