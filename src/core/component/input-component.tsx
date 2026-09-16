import { HTMLInputTypeAttribute } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/core/component/shadcn-ui/card";
import { Input } from "@/core/component/shadcn-ui/input";
import { Label } from "@/core/component/shadcn-ui/label";

type InputComponentProps = {
  title: string;
  description: string;
  label: string;
  placeholder: string;
  value: string;
  inputType?: HTMLInputTypeAttribute | undefined;
  onChange: (value: string) => void;
};

export default function InputComponent({
  title,
  description,
  label,
  placeholder,
  value,
  inputType,
  onChange,
}: InputComponentProps) {
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
        <div className="grid w-full items-center gap-3">
          <Label htmlFor={label} className="text-muted-foreground font-medium text-sm">
            {label ?? "Input label"}
          </Label>
          <Input
            id={label}
            type={inputType ?? "text"}
            placeholder={placeholder ?? "Input placeholder"}
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            className="h-12 sm:h-14 rounded-xl px-4 bg-background border-background-third text-foreground placeholder:text-muted-foreground focus-visible:ring-primary focus-visible:border-primary transition-colors text-base"
          />
        </div>
      </CardContent>
    </Card>
  );
}

