"use client";

import { SIDEBAR_WIDTH } from "./dashboard-sidebar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useConnection } from "wagmi";
import { useEffect, useRef } from "react";
import { Button } from "@/core/component/shadcn-ui/button";

export interface DashboardNavbarProps {
  handleDisconnect: () => void;
}

export default function DashboardNavbar({
  handleDisconnect,
}: DashboardNavbarProps) {
  const { status } = useConnection();
  const wasConnected = useRef(false);

  useEffect(() => {
    if (status === "connected") {
      wasConnected.current = true;
    }

    if (status === "disconnected" && wasConnected.current) {
      wasConnected.current = false;
      handleDisconnect();
    }
  }, [status, handleDisconnect]);

  return (
    <header
      className="fixed top-0 right-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
      style={{
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
      }}
    >
      <div className="flex justify-end items-center px-6 h-14">
        <ConnectButton.Custom>
          {({
            openConnectModal,
            account,
            chain,
            mounted,
            openAccountModal,
          }) => {
            const connected = mounted && account && chain;

            return (
              <div>
                {connected ? (
                  <Button
                    onClick={() => openAccountModal()}
                    variant="outline"
                    className="rounded-full border-primary text-primary hover:bg-primary hover:text-black font-semibold px-6"
                  >
                    {account.displayName}
                  </Button>
                ) : (
                  <Button
                    onClick={openConnectModal}
                    variant="outline"
                    className="rounded-full border-primary text-primary hover:bg-primary hover:text-black font-semibold px-6"
                  >
                    Connect Wallet
                  </Button>
                )}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </header>
  );
}

