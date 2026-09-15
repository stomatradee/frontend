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
                        className="w-full flex items-center justify-center gap-2 rounded-full border border-primary text-primary font-semibold text-[0.85rem] md:text-[0.95rem] py-2 md:py-[9px] hover:bg-primary hover:text-[#0A0A0A] transition-all duration-300"
                    >
                        {pageMemo.connectWalletButtonText}
                        <Icon icon="mdi:arrow-top-right" className="text-[14px] md:text-[16px]" />
                    </Button>
                );
            }}
        </ConnectButton.Custom>
    )
}