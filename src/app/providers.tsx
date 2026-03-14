"use client"

if (typeof global !== 'undefined' && global.localStorage && typeof global.localStorage.getItem !== 'function') {
  Object.defineProperty(global, 'localStorage', {
    value: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
    },
    writable: true,
  });
}

import '@rainbow-me/rainbowkit/styles.css'

import {
  RainbowKitProvider,
  getDefaultConfig,
  midnightTheme
} from '@rainbow-me/rainbowkit'

import {
  WagmiProvider
} from 'wagmi'

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import { arbitrum, mainnet, sepolia } from 'wagmi/chains'

import { cookieStorage, createStorage } from 'wagmi'

const config = getDefaultConfig({
  appName: 'Stomatrade',
  projectId: '852a9ba61459e8efb27a9a3631d2c883',
  chains: [mainnet, arbitrum, sepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})

const queryClient = new QueryClient()

const myTheme = midnightTheme({
  accentColor: "var(--third-bg-colors)",
})

export function Providers({ children }: { children: React.ReactNode }) {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={myTheme}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}