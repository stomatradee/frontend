import { LoadingScreen } from "@/core/component/loading-component";
import { getUSDCSymbol, getUSDTSymbol } from "@/repository/token/token-repository";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

type AmountInformationComponentProps = {
    amountValue?: string;
    onAmountValueChange?: (value: string) => void;
    onTokenCodeChange?: (value: string) => void;
};

export default function AmountInformationComponent({
    amountValue,
    onAmountValueChange,
    onTokenCodeChange,
}: AmountInformationComponentProps) {
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

    return (
        <div className="bg-background-secondary border border-background-third rounded-[30px] w-full max-w-[1000px] px-5 py-[25px] sm:p-[35px] transition-all duration-300 hover:border-primary">
            <h2 className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[25px]">
                Financial Information
            </h2>
            <div className="h-[10px]" />
            <p className="text-background-third font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
                Input information about the financial aspect for start investment
            </p>
            <div className="h-[30px]" />

            {isLoading === true ? (
                <div className="py-[20px]">
                    <LoadingScreen primaryBgActive={true} />
                </div>
            ) : (
                <>
                    <div className="flex flex-col flex-1">
                        <label 
                            htmlFor="token-code"
                            className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[15px] mb-5 block"
                        >
                            Choose Token
                        </label>
                        <div className="relative">
                            <select
                                id="token-code"
                                defaultValue="USDT"
                                onChange={(e) => {
                                    setTokenCode(e.target.value);
                                    onTokenCodeChange?.(e.target.value);
                                }}
                                className="w-full bg-background border border-background-third rounded-[25px] px-4 py-3.5 text-white appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
                            >
                                {tokenCodeList.map((data) => (
                                    <option key={data.value} value={data.value} className="bg-background-secondary text-white">
                                        {data.label}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="h-[50px]" />

                    <div className="flex flex-row items-start mx-auto gap-3 w-full">
                        <div className="flex flex-col flex-1">
                            <label 
                                htmlFor="amount-value"
                                className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[15px] mb-5 block"
                            >
                                Amount
                            </label>
                            
                            <div className="relative flex items-center">
                                <div className="absolute left-4 text-white font-medium">
                                    {tokenCode}
                                </div>
                                <input
                                    id="amount-value"
                                    type="number"
                                    placeholder="Input Amount"
                                    value={amountValue ?? ""}
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        onAmountValueChange?.(newValue);
                                    }}
                                    className="w-full bg-background border border-background-third rounded-[25px] py-3.5 pl-16 pr-4 text-white placeholder:text-background-third focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}