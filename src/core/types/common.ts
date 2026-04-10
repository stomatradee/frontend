import { Dayjs } from "dayjs";

export type IDatePickerControl = Dayjs | null;


export enum TokenSymbol {
    USDC = "USDC",
    USDT = "USDT",
}

export enum ROLE {
    COLLECTOR = "collector",
    INVESTOR = "investor",
}