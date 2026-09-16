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
    <div className="flex flex-col justify-center items-center py-20 text-center">
      <Image
        src={image}
        alt="Empty Asset Icon"
        width={150}
        height={150}
        className="opacity-90 mb-8"
      />
      <h3 className="text-foreground font-semibold text-lg md:text-base tracking-tight">
        {title}
      </h3>
    </div>
  );
}

