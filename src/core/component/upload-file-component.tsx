import { useState } from "react";
import { Icon } from "@iconify/react";
import UploadFileRepository from "@/repository/upload-file/uplolad-file-repository";
import { UploadFileRequestModel } from "@/repository/upload-file/model/upload-file-model";
import { LoadingScreen } from "./loading-component";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/core/component/shadcn-ui/card";

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
    <Card className="w-full max-w-[1000px] bg-background-secondary border-background-third">
      <CardHeader className="px-5 pt-6 pb-2 sm:p-8 sm:pb-4">
        <CardTitle className="text-lg sm:text-xl md:text-2xl text-foreground">
          {title ?? "Title"}
        </CardTitle>
        <CardDescription className="text-base font-medium text-muted-foreground">
          {description ?? "Description"}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="px-5 pb-6 pt-2 sm:px-8 sm:pb-8">
        <label>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-primary/50 hover:border-primary rounded-xl p-8 text-center cursor-pointer bg-black/40 text-foreground transition-all duration-300 hover:bg-black/60"
          >
            {isLoading === true ? (
              <div className="py-8">
                <LoadingScreen primaryBgActive={true} />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
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
                <div className="w-16 h-16 rounded-full bg-primary-dark/30 flex items-center justify-center mb-4">
                  <Icon icon="material-symbols:cloud-upload" className="text-primary text-3xl" />
                </div>

                {/* Text */}
                <p className="font-semibold text-lg text-foreground">
                  Click to upload or drag and drop
                </p>

                <p className="text-sm text-muted-foreground mt-2">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>

                {/* Preview */}
                {file && (
                  <div className="mt-8 flex flex-col items-center">
                    <p className="text-sm font-medium mb-3 text-muted-foreground">{file.name}</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      className="max-w-full max-h-[200px] rounded-lg border border-border shadow-sm object-contain"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </label>
      </CardContent>
    </Card>
  );
}
