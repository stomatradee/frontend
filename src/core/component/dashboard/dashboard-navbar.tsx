"use client";

import { SIDEBAR_WIDTH } from "./dashboard-sidebar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect, useRef } from "react";

export interface DashboardNavbarProps {
  handleDisconnect: () => void;
}

export default function DashboardNavbar({
  handleDisconnect,
}: DashboardNavbarProps) {
  const { status } = useAccount();
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
      className="fixed top-0 right-0 z-40 bg-background border-b border-background-secondary"
      style={{
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
      }}
    >
      <div className="flex justify-end items-center px-6 min-h-[56px]">
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
                  <button
                    onClick={() => openAccountModal()}
                    className="rounded-full border border-primary text-primary font-semibold text-[0.85rem] px-6 py-2 hover:bg-primary hover:text-background transition-all duration-300"
                  >
                    {account.displayName}
                  </button>
                ) : (
                  <button
                    onClick={openConnectModal}
                    className="rounded-full border border-primary text-primary font-semibold text-[0.85rem] px-6 py-2 hover:bg-primary hover:text-background transition-all duration-300"
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </header>
  );
}

