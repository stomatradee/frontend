import { useState } from "react";
import { Icon } from "@iconify/react";
import UploadFileRepository from "@/repository/upload-file/uplolad-file-repository";
import { UploadFileRequestModel } from "@/repository/upload-file/model/upload-file-model";
import { LoadingScreen } from "./loading-component";
import { toast } from "sonner";

type UploadFileComponentProps = {
  title?: string;
  description?: string;
  onCIDChange: (cid: string) => void;
};

export default function UploadFileComponent({
  title,
  description,
  onCIDChange,
}: UploadFileComponentProps) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFile = (file: File) => {
    setFile(file);
    submitToPinata(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const submitToPinata = async (file: File) => {
    setLoading(true);

    try {
      const data: UploadFileRequestModel = {
        file: file,
      };

      const response = await UploadFileRepository(data);

      onCIDChange(response.cid);
    } catch (error) {
      toast.error(`Submit failed: ${error}`, {
        position: "top-center",
        style: {
          width: "600px",
          left: "50%",
          right: "50%",
          transform: "translate(-50%)",
          display: "flex",
          alignItems: "center",
        },
      });
    }

    setLoading(false);
  };

  return (
    <div className="bg-background-secondary rounded-[30px] border border-background-third w-full max-w-[1000px] px-5 py-[25px] sm:p-[35px]">
      <h1 className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[25px]">
        {title ?? "Title"}
      </h1>
      <div className="h-[10px]" />
      <p className="text-background-third font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
        {description ?? "Description"}
      </p>
      <div className="h-[30px]" />
      <label>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border-2 border-dashed border-primary rounded-xl p-6 text-center cursor-pointer bg-[#0b0f0c] text-white transition-colors duration-300 hover:bg-[#111]"
        >
          {isLoading === true ? (
            <div className="py-5">
              <LoadingScreen primaryBgActive={true} />
            </div>
          ) : (
            <>
              {/* Hidden input */}
              <input
                hidden
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    handleFile(e.target.files[0]);
                  }
                }}
              />

              {/* Icon */}
              <div className="w-[60px] h-[60px] rounded-full bg-[#1b5e20] flex items-center justify-center mx-auto mb-4">
                <Icon icon="material-symbols:cloud-upload" className="text-white text-2xl" />
              </div>

              {/* Text */}
              <p className="font-medium">
                Click to upload or drag and drop
              </p>

              <p className="text-sm text-gray-500 mt-2">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>

              {/* Preview */}
              {file && (
                <div className="mt-6 flex flex-col items-center">
                  <p className="text-sm">{file.name}</p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="mt-2.5 max-w-full max-h-[200px]"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </label>
    </div>
  );
}
