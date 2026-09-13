"use client";

import { useCallback, useEffect, useState } from "react";
import { LoadingScreen } from "@/core/component/loading-component";
import {
  getUSDTSymbol,
  getUSDCSymbol,
} from "@/repository/token/token-repository";
import { toast } from "sonner";

type FinancialInformationComponentProps = {
  assetPriceValue?: string;
  fundingPriceValue?: string;
  onAssetPriceChange?: (value: string) => void;
  onFundingPriceChange?: (value: string) => void;
  onTokenCodeChange?: (value: string) => void;
};

export default function FinancialInformationComponent({
  assetPriceValue,
  fundingPriceValue,
  onAssetPriceChange,
  onFundingPriceChange,
  onTokenCodeChange,
}: FinancialInformationComponentProps) {
  const [isLoading, setLoading] = useState<boolean>(false);

  const [tokenCodeList, setTokenCodeList] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  const [tokenCode, setTokenCode] = useState("USDT");

  const getToken = useCallback(async () => {
    try {
      setLoading(true);
      const usdtToken = await getUSDTSymbol();
      const usdcToken = await getUSDCSymbol();

      const usdtValue = {
        value: usdtToken,
        label: usdtToken,
      };

      const usdcValue = {
        value: usdcToken,
        label: usdcToken,
      };

      onTokenCodeChange?.(usdtToken);

      setTokenCodeList([usdtValue, usdcValue]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(`Get data failed: ${error}`, {
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
  }, [onTokenCodeChange]);

  useEffect(() => {
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateFundingPrice = useCallback(
    (newAssetPriceStr: string) => {
      const assetPrice = parseInt(newAssetPriceStr || "0");
      const fundingPrice = (assetPrice * 75) / 100;
      onFundingPriceChange?.(fundingPrice.toString());
    },
    [onFundingPriceChange],
  );

  return (
    <div className="bg-background-secondary rounded-[30px] border border-background-third w-full max-w-[1000px] px-5 py-[25px] sm:p-[35px]">
      <h1 className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[25px]">
        Financial Information
      </h1>
      <div className="h-[10px]" />
      <p className="text-background-third font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
        Input information about the financial aspect of the asset
      </p>
      <div className="h-[30px]" />

      {isLoading === true ? (
        <div className="py-5">
          <LoadingScreen primaryBgActive={true} />
        </div>
      ) : (
        <>
          <div className="flex flex-col flex-1 w-full">
            <label className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
              Choose Token
            </label>
            <div className="h-[20px]" />
            <select
              defaultValue="USDT"
              onChange={(e) => {
                setTokenCode(e.target.value);
                onTokenCodeChange?.(e.target.value);
              }}
              className="w-full bg-background border border-background-third rounded-[25px] text-white px-4 py-3 sm:py-4 focus:outline-none focus:border-primary transition-colors appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem top 50%',
                backgroundSize: '0.65rem auto'
              }}
            >
              {tokenCodeList.map((data) => (
                <option key={data.value} value={data.value} className="bg-background-secondary text-white">
                  {data.label}
                </option>
              ))}
            </select>
          </div>
          <div className="h-[50px]" />
          <div className="flex flex-col sm:flex-row items-start mx-auto gap-5 sm:gap-8 w-full">
            {/* Asset Price Column */}
            <div className="flex flex-col flex-1 w-full">
              <label className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
                Asset Price
              </label>
              <div className="h-[20px]" />
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <span className="text-white">{tokenCode}</span>
                </div>
                <input
                  type="number"
                  placeholder="Input Asset Price"
                  value={assetPriceValue ?? ""}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    onAssetPriceChange?.(newValue);
                    calculateFundingPrice(newValue);
                  }}
                  className="w-full bg-background border border-background-third rounded-[25px] text-white px-4 py-3 sm:py-4 focus:outline-none focus:border-primary transition-colors placeholder:text-background-third pl-16"
                />
              </div>
            </div>

            {/* Funding Price Column */}
            <div className="flex flex-col flex-1 w-full">
              <label className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
                Funding Price
              </label>
              <div className="h-[20px]" />
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <span className="text-white">{tokenCode}</span>
                </div>
                <input
                  type="number"
                  placeholder="Input Funding Price"
                  value={fundingPriceValue ?? ""}
                  onChange={(e) => onFundingPriceChange?.(e.target.value)}
                  className="w-full bg-background border border-background-third rounded-[25px] text-white px-4 py-3 sm:py-4 focus:outline-none focus:border-primary transition-colors placeholder:text-background-third pl-16"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
