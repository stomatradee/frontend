import { HTMLInputTypeAttribute } from "react";

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
    <div className="bg-background-secondary rounded-[30px] border border-background-third w-full max-w-[1000px] p-[25px_20px] sm:p-[35px]">
      <h1 className="text-foreground font-semibold text-[16px] sm:text-[18px] md:text-[25px]">
        {title ?? "Title"}
      </h1>
      <div className="h-2.5" />
      <p className="text-background-third font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
        {description ?? "Description"}
      </p>
      <div className="h-[30px]" />
      
      <div className="relative w-full">
        <label 
          htmlFor={label} 
          className="block text-gray-500 mb-2 font-medium"
        >
          {label ?? "Input label"}
        </label>
        <input
          id={label}
          type={inputType ?? "text"}
          placeholder={placeholder ?? "Input placeholder"}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-background text-foreground rounded-[25px] border border-background-third px-4 py-3 sm:py-4 focus:outline-none focus:border-primary hover:border-primary transition-colors placeholder-background-third"
        />
      </div>
    </div>
  );
}

