import { LoadingScreen } from "@/core/component/loading-component";
import { imageConfig } from "@/core/config/images-config";
import Image from "next/image";
import { useMemo } from "react";

export default function SplashPageView() {
  const iconImg = useMemo(() => {
    return imageConfig.logo.stomatradeLogo;
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <Image src={iconImg} alt="Stomatrade" width={300} height={300} />
        <div className="h-5" />
        <div className="py-5">
          <LoadingScreen primaryBgActive={true} />
        </div>
      </div>
    </div>
  );
}

