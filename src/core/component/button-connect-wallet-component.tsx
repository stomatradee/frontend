import { Icon } from "@iconify/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useMemo } from "react";
import { Button } from "@/core/component/shadcn-ui/button";
import { useConnection } from "wagmi";

interface ButtonConnectWalletComponentProps {
    onConnectWalletClick: (address: string) => void;
}

export default function ButtonConnectWalletComponent({ onConnectWalletClick }: ButtonConnectWalletComponentProps) {

    const { isConnected, address } = useConnection();

    useEffect(() => {
        if (isConnected) {
            onConnectWalletClick(address ?? "");
        }
    }, [isConnected, address, onConnectWalletClick]);

    const pageMemo = useMemo(
        () => ({
            connectWalletButtonText: "Connect Wallet",
        }),
        [],
    );

    return (
        <ConnectButton.Custom>
            {({ openConnectModal }) => {
                return (
                    <Button
                        variant="outline"
                        onClick={openConnectModal}
                        className="w-full flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-primary text-primary font-semibold text-xs sm:text-[0.85rem] md:text-[0.95rem] py-2 px-4 md:py-[9px] md:px-6 hover:bg-primary hover:text-[#0A0A0A] transition-all duration-300 h-auto"
                    >
                        <span className="whitespace-nowrap">{pageMemo.connectWalletButtonText}</span>
                        <Icon icon="mdi:arrow-top-right" className="text-[14px] md:text-[16px] shrink-0" />
                    </Button>
                );
            }}
        </ConnectButton.Custom>
    )
}