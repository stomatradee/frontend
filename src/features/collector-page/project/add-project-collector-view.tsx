"use client";

import { imageConfig } from "@/core/config/images-config";
import Image from "next/image";
import useAddProjectCollector from "./hooks/use-add-project-collector";

export default function AddProjectCollectorView() {
  const { onAddProject } = useAddProjectCollector();

  return (
    <div className="flex flex-col pt-[100px] px-5 pb-10 md:p-5 mx-auto">
      <h1 className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[25px]">
        Tokenize New Asset
      </h1>

      <div className="flex flex-col justify-center items-center pt-[90px]">
        <Image
          src={imageConfig.icon.sudgestedIcon}
          alt="Profile Icon"
          width={150}
          height={150}
        />
        <div className="h-[30px]" />
        <p className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
          Upload your asset and tokenize on Stomatrade Platform
        </p>
        <div className="h-[30px]" />
        <button
          onClick={onAddProject}
          className="w-full sm:w-[200px] rounded-full border border-primary text-primary font-semibold text-[13.6px] md:text-[15.2px] py-2 md:py-[9px] transition-all duration-300 hover:bg-primary hover:text-background disabled:text-background-third disabled:border-background-third disabled:cursor-not-allowed"
        >
          Upload Asset
        </button>
      </div>
    </div>
  );
}
