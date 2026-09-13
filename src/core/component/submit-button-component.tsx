import { LoadingScreen } from "@/core/component/loading-component";

type SubmitButtonComponentProps = {
  title?: string;
  buttonTitle?: string;
  description?: string;
  onSubmit?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};

export default function SubmitButtonComponent({
  title,
  buttonTitle = "Submit",
  description,
  onSubmit,
  disabled,
  isLoading,
}: SubmitButtonComponentProps) {
  return (
    <div className="bg-background-secondary rounded-[30px] border border-background-third w-full max-w-[1000px] p-[25px_20px] sm:p-[35px]">
      {isLoading === true ? (
        <div className="py-5">
          <LoadingScreen primaryBgActive={true} />
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0">
          <div className="flex flex-col flex-grow w-full">
            <h3 className="text-foreground font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
              {title ?? "Submit Your Profile?"}
            </h3>
            <div className="h-2.5" />
            <p className="text-background-third font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
              {description ?? "Press the right button to submit your profile"}
            </p>
          </div>
          <button
            onClick={onSubmit}
            disabled={disabled ?? false}
            className={`w-full sm:w-[200px] rounded-full border font-semibold text-[0.85rem] md:text-[0.95rem] py-2 md:py-[9px] transition-all duration-300 ${
              disabled
                ? "border-background-third text-background-third cursor-not-allowed"
                : "border-primary text-primary hover:bg-primary hover:border-primary hover:text-[#0A0A0A]"
            }`}
          >
            {buttonTitle}
          </button>
        </div>
      )}
    </div>
  );
}

