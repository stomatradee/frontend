import { imageConfig } from "@/core/config/images-config";
import Image from "next/image";

interface EmptyAssetComponentProps {
  title?: string;
  image?: string;
}

export default function EmptyAssetComponent({
  title = "You dont have any asset yet",
  image = imageConfig.icon.confusedIcon,
}: EmptyAssetComponentProps) {
  return (
    <div className="flex flex-col justify-center items-center pt-[90px]">
      <Image
        src={image}
        alt="Profile Icon"
        width={150}
        height={150}
      />
      <div className="h-[30px]" />
      <p className="text-foreground font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
        {title}
      </p>
      <div className="h-[30px]" />
    </div>
  );
}

