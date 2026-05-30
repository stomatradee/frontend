import { LoadingScreen } from "@/core/component/loading-component";
import { themeConfig } from "@/core/config/theme-config";
import { getUSDCSymbol, getUSDTSymbol } from "@/repository/token/token-repository";
import { Box, Card, InputAdornment, MenuItem, TextField, Typography } from "@mui/material";
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
    const theme = themeConfig;

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
        <Card
            sx={{
                bgcolor: theme.colors.secondaryBgColors,
                borderRadius: "30px",
                border: "1px solid",
                borderColor: theme.colors.thirdBgColors,
                width: "100%",
                maxWidth: "1000px",
                padding: { xs: "25px 20px", sm: "35px" },
            }}
        >
            <Typography
                variant="h1"
                color={theme.colors.white}
                fontWeight={600}
                sx={{ fontSize: { xs: 16, sm: 18, md: 25 } }}
            >
                Financial Information
            </Typography>
            <Box height={10} />
            <Typography
                variant="body1"
                color={theme.colors.thirdBgColors}
                fontWeight={600}
                sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
            >
                Input information about the financial aspect for start investment
            </Typography>
            <Box height={30} />

            {isLoading === true ? (
                <LoadingScreen
                    primaryBgActive={true}
                    sx={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                    }}
                />
            ) : (
                <>
                    <Box display="flex" flexDirection="column" flex={1}>
                        <Typography
                            variant="body1"
                            color={theme.colors.white}
                            fontWeight={600}
                            sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
                        >
                            Choose Token
                        </Typography>
                        <Box height={20} />
                        <TextField
                            id="token-code"
                            select
                            defaultValue="USDT"
                            variant="outlined"
                            onChange={(e) => {
                                setTokenCode(e.target.value);
                                onTokenCodeChange?.(e.target.value);
                            }}
                            fullWidth
                            SelectProps={{
                                MenuProps: {
                                    PaperProps: {
                                        sx: {
                                            backgroundColor: theme.colors.secondaryBgColors,
                                            borderRadius: "15px",
                                        },
                                    },
                                },
                            }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    backgroundColor: theme.colors.bgColors,
                                    borderRadius: "25px",
                                    "&:hover fieldset": {
                                        borderColor: theme.colors.primaryColors,
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: theme.colors.primaryColors,
                                    },
                                },
                                "& .MuiInputLabel-root": {
                                    color: "gray",
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: theme.colors.white,
                                },
                                "& .MuiInputBase-input,  & input": {
                                    color: theme.colors.white,
                                },
                                "& .MuiSelect-icon": {
                                    color: theme.colors.white,
                                },
                            }}
                        >
                            {tokenCodeList.map((data) => (
                                <MenuItem
                                    key={data.value}
                                    value={data.value}
                                    sx={{
                                        color: theme.colors.white,
                                        "&:hover": {
                                            backgroundColor: theme.colors.thirdBgColors,
                                        },
                                        "&.Mui-selected": {
                                            backgroundColor: theme.colors.primaryColors + "08",
                                            color: theme.colors.primaryColors,
                                            "&:hover": {
                                                backgroundColor: theme.colors.primaryColors + "14",
                                            },
                                        },
                                    }}
                                >
                                    {data.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box height={50} />
                    <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="flex-start"
                        margin="0 auto"
                        gap={3}
                        width="100%"
                    >
                        {/* Category Column */}
                        <Box display="flex" flexDirection="column" flex={1}>
                            <Typography
                                variant="body1"
                                color={theme.colors.white}
                                fontWeight={600}
                                sx={{ fontSize: { xs: 16, sm: 18, md: 15 } }}
                            >
                                Amount
                            </Typography>
                            <Box height={20} />
                            <TextField
                                id="amount-value"
                                type="number"
                                placeholder="Input Amount"
                                value={amountValue ?? ""}
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    onAmountValueChange?.(newValue);
                                }}
                                variant="outlined"
                                fullWidth
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment
                                                position="start"
                                                sx={{
                                                    "& .MuiTypography-root": {
                                                        color: theme.colors.white,
                                                    },
                                                }}
                                            >
                                                {tokenCode}
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: theme.colors.bgColors,
                                        borderRadius: "25px",
                                        "&:hover fieldset": {
                                            borderColor: theme.colors.primaryColors,
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: theme.colors.primaryColors,
                                        },
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "gray",
                                    },
                                    "& .MuiInputLabel-root.Mui-focused": {
                                        color: theme.colors.white,
                                    },
                                    "& .MuiInputBase-input::placeholder": {
                                        color: theme.colors.thirdBgColors,
                                    },
                                    "& .MuiInputBase-input": {
                                        color: theme.colors.white,
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </>
            )}
        </Card>
    );

}