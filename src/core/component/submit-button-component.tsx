import { LoadingScreen } from "@/core/component/loading-component";
import { Card, CardContent } from "@/core/component/shadcn-ui/card";
import { Button } from "@/core/component/shadcn-ui/button";

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
    <Card className="w-full max-w-[1000px] bg-background-secondary border-background-third">
      <CardContent className="p-6 sm:p-8">
        {isLoading === true ? (
          <div className="py-2 flex justify-center">
            <LoadingScreen primaryBgActive={true} />
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col space-y-1.5 flex-grow">
              <h3 className="font-semibold leading-none tracking-tight text-lg md:text-xl text-foreground">
                {title ?? "Submit Your Profile?"}
              </h3>
              <p className="text-sm text-muted-foreground font-medium">
                {description ?? "Press the right button to submit your profile"}
              </p>
            </div>
            <Button
              onClick={onSubmit}
              disabled={disabled ?? false}
              variant="outline"
              className="w-full sm:w-auto sm:min-w-[140px] rounded-full border-primary text-primary hover:bg-primary hover:text-black font-semibold h-11 px-8"
            >
              {buttonTitle}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

