import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { config } from "./chains/evm/config";
// import { config } from "./chains/evm/wagmi-provider";
import { StarknetProvider } from "./chains/starknet/starknet-provider";
// import { AptosProvider } from "./chains/aptos/aptos-provider";

import { createWeb3Modal } from "@web3modal/wagmi/react";
// import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import {
  bitTorrent,
  bitTorrentTestnet,
  liskSepolia,
  mainnet,
  sepolia,
  taraxaTestnet,
} from "wagmi/chains";
import { http, createConfig, WagmiProvider } from "wagmi";
import { walletConnect, injected, coinbaseWallet } from "wagmi/connectors";

import { defineChain } from "viem";

export const liskTestnet = defineChain({
  id: 4202,
  name: "Lisk Sepolia",
  nativeCurrency: { name: "LISK", symbol: "LISK", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.sepolia-api.lisk.com"] },
  },
  blockExplorers: {
    default: { name: "testscan", url: "https://sepolia-blockscout.lisk.com" },
  },
});
export const mantaSepolia = defineChain({
  id: 3441006,
  name: "Manta Sepolia",
  nativeCurrency: { name: "MANTA", symbol: "MANTA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://pacific-rpc.sepolia-testnet.manta.network/http"],
    },
  },
  blockExplorers: {
    default: {
      name: "testscan",
      url: "https://pacific-explorer.sepolia-testnet.manta.network",
    },
  },
});
export const mantaTestnet = defineChain({
  id: 3441005,
  name: "Manta Testnet",
  nativeCurrency: { name: "MANTA", symbol: "MANTA", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://manta-testnet.calderachain.xyz/http"] },
  },
  blockExplorers: {
    default: {
      name: "testscan",
      url: "https://pacific-explorer.testnet.manta.network",
    },
  },
});
export const bttcDonaou = defineChain({
  id: 1029,
  name: "BTTC Testnet",
  nativeCurrency: { name: "BTT", symbol: "BTT", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://pre-rpc.bt.io/"] },
  },
  blockExplorers: {
    default: { name: "testscan", url: "https://testscan.bt.io" },
  },
});
export const opBnbTestnet = defineChain({
  id: 5611,
  name: "opBNB Testnet",
  nativeCurrency: { name: "tBNB", symbol: "tBNB", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://opbnb-testnet-rpc.bnbchain.org"] },
  },
  blockExplorers: {
    default: { name: "testscan", url: "https://opbnb-testnet.bscscan.com" },
  },
});

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "861ef743dceed75deb813e6d390dc4a8";

// 2. Create wagmiConfig
const metadata = {
  name: "STAR-EX",
  description: "STAR-EX Metadata",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [
  bttcDonaou,
  taraxaTestnet,
  opBnbTestnet,
  sepolia,

  mantaSepolia,
  mantaTestnet,
  liskTestnet,
] as const;
// const config = defaultWagmiConfig({
//   chains,
//   projectId,
//   metadata,
//   // ...wagmiOptions // Optional - Override createConfig parameters
// });

const config = createConfig({
  chains,
  transports: {
    [bttcDonaou.id]: http(),
    [taraxaTestnet.id]: http(),
    [opBnbTestnet.id]: http(),
    [sepolia.id]: http(),
    [mantaSepolia.id]: http(),
    [mantaTestnet.id]: http(),
    [liskTestnet.id]: http(),
  },
  connectors: [
    walletConnect({
      projectId,
      //  metadata, showQrModal: false
    }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export default function HubProvider({ children }) {
  const queryClient = new QueryClient();
  return (
    <>
      {/* <StarknetProvider> */}
      {/* <AptosProvider> */}
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
      {/* </AptosProvider> */}
      {/* </StarknetProvider> */}
    </>
  );
}

// declare module "wagmi" {
//   interface Register {
//     config: typeof config;
//   }
// }
