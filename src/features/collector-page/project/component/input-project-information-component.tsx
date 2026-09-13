"use client";

import { useEffect } from "react";
import dayjs from "dayjs";
import { IDatePickerControl } from "@/core/types/common";

type InputProjectInformationComponentProps = {
  title?: string;
  description?: string;
  label?: string;
  placeholder?: string;
  quantityValue?: string;
  fundingDurationValue?: string;
  repaymentDurationValue?: string;
  onCategoryChange: (value: string) => void;
  onQuantityChange: (value: string) => void;
  onDeliveryDateChange: (date: IDatePickerControl) => void;
  onFundingDurationChange: (value: string) => void;
  onRepaymentDurationChange: (value: string) => void;
};

export default function InputProjectInformationComponent({
  title,
  description,
  label,
  quantityValue,
  fundingDurationValue,
  repaymentDurationValue,
  onCategoryChange,
  onQuantityChange,
  onDeliveryDateChange,
  onFundingDurationChange,
  onRepaymentDurationChange,
}: InputProjectInformationComponentProps) {
  const category = [
    { value: "coffee", label: "Coffee" },
    { value: "cocoa", label: "Cocoa" },
    { value: "palm-oil", label: "Palm Oil" },
    { value: "rubber", label: "Rubber" },
  ];

  useEffect(() => {
    onCategoryChange(category[0].value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      
      <div className="flex flex-col sm:flex-row items-start mx-auto gap-5 sm:gap-8 w-full">
        {/* Category Column */}
        <div className="flex flex-col flex-1 w-full">
          <label className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
            Category
          </label>
          <div className="h-[20px]" />
          <select
            defaultValue="coffee"
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full bg-background border border-background-third rounded-[25px] text-white px-4 py-3 sm:py-4 focus:outline-none focus:border-primary transition-colors appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem top 50%',
              backgroundSize: '0.65rem auto'
            }}
          >
            {category.map((data) => (
              <option key={data.value} value={data.value} className="bg-background-secondary text-white">
                {data.label}
              </option>
            ))}
          </select>
        </div>

        {/* Weight Column */}
        <div className="flex flex-col flex-1 w-full">
          <label className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
            Weight
          </label>
          <div className="h-[20px]" />
          <div className="relative w-full">
            <input
              type="number"
              placeholder="Input Weight"
              value={quantityValue ?? ""}
              onChange={(e) => onQuantityChange(e.target.value)}
              className="w-full bg-background border border-background-third rounded-[25px] text-white px-4 py-3 sm:py-4 focus:outline-none focus:border-primary transition-colors placeholder:text-background-third pr-12"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <span className="text-white">Kg</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-[50px]" />
      
      <label className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
        Delivery Date
      </label>
      <div className="h-[20px]" />
      <input
        type="datetime-local"
        onChange={(e) => {
          const value = e.target.value;
          onDeliveryDateChange(value ? dayjs(value) : null);
        }}
        className="w-full bg-background border border-background-third rounded-[25px] text-white px-4 py-3 sm:py-4 focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
      />
      
      <div className="h-[50px]" />
      
      <div className="flex flex-col sm:flex-row items-start mx-auto gap-5 sm:gap-8 w-full">
        {/* Funding Duration Column */}
        <div className="flex flex-col flex-1 w-full">
          <label className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
            Funding Duration
          </label>
          <div className="h-[20px]" />
          <div className="relative w-full">
            <input
              type="number"
              placeholder="Input Funding Duration"
              value={fundingDurationValue ?? ""}
              onChange={(e) => onFundingDurationChange(e.target.value)}
              className="w-full bg-background border border-background-third rounded-[25px] text-white px-4 py-3 sm:py-4 focus:outline-none focus:border-primary transition-colors placeholder:text-background-third pr-[60px]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <span className="text-white">Days</span>
            </div>
          </div>
        </div>

        {/* Repayment Duration Column */}
        <div className="flex flex-col flex-1 w-full">
          <label className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
            Repayment Duration
          </label>
          <div className="h-[20px]" />
          <div className="relative w-full">
            <input
              type="number"
              placeholder="Input Repayment Duration"
              value={repaymentDurationValue ?? ""}
              onChange={(e) => onRepaymentDurationChange(e.target.value)}
              className="w-full bg-background border border-background-third rounded-[25px] text-white px-4 py-3 sm:py-4 focus:outline-none focus:border-primary transition-colors placeholder:text-background-third pr-[60px]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <span className="text-white">Days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
