import { LoadingScreen } from "@/core/component/loading-component";
import { getUSDCSymbol, getUSDTSymbol } from "@/repository/token/token-repository";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/core/component/shadcn-ui/card";
import { Label } from "@/core/component/shadcn-ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/core/component/shadcn-ui/select";
import { Input } from "@/core/component/shadcn-ui/input";

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
        <Card className="bg-background-secondary border-background-third w-full max-w-[1000px] transition-all duration-300 hover:border-primary mx-auto sm:mx-0 rounded-[30px] border">
            <CardHeader className="px-5 pt-[25px] sm:px-[35px] sm:pt-[35px]">
                <CardTitle className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[25px]">
                    Financial Information
                </CardTitle>
                <CardDescription className="text-background-third font-semibold text-[16px] sm:text-[18px] md:text-[15px] pt-[10px]">
                    Input information about the financial aspect for start investment
                </CardDescription>
            </CardHeader>

            <CardContent className="px-5 pb-[25px] sm:px-[35px] sm:pb-[35px]">
                {isLoading === true ? (
                    <div className="py-[20px]">
                        <LoadingScreen primaryBgActive={true} />
                    </div>
                ) : (
                    <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-3">
                            <Label 
                                htmlFor="token-code"
                                className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[15px]"
                            >
                                Choose Token
                            </Label>
                            <Select
                                value={tokenCode}
                                onValueChange={(value) => {
                                    setTokenCode(value || "");
                                    onTokenCodeChange?.(value || "");
                                }}
                            >
                                <SelectTrigger id="token-code" className="w-full bg-background border-background-third rounded-[25px] px-4 h-12 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none">
                                    <SelectValue placeholder="Select Token" />
                                </SelectTrigger>
                                <SelectContent className="bg-background-secondary border-background-third text-white">
                                    {tokenCodeList.map((data) => (
                                        <SelectItem key={data.value} value={data.value} className="focus:bg-primary/20 focus:text-primary">
                                            {data.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label 
                                htmlFor="amount-value"
                                className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[15px]"
                            >
                                Amount
                            </Label>
                            
                            <div className="relative flex items-center">
                                <div className="absolute left-4 text-white font-medium z-10 pointer-events-none">
                                    {tokenCode}
                                </div>
                                <Input
                                    id="amount-value"
                                    type="number"
                                    placeholder="Input Amount"
                                    value={amountValue ?? ""}
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        onAmountValueChange?.(newValue);
                                    }}
                                    className="w-full bg-background border-background-third rounded-[25px] h-12 pl-[60px] pr-4 text-white placeholder:text-background-third focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-offset-0"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}