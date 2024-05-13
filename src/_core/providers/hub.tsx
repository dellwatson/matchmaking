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
  mainnet,
  sepolia,
  taraxaTestnet,
} from "wagmi/chains";
import { http, createConfig, WagmiProvider } from "wagmi";
import { walletConnect, injected, coinbaseWallet } from "wagmi/connectors";

import { defineChain } from "viem";

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

const chains = [bttcDonaou, taraxaTestnet, opBnbTestnet, sepolia] as const;
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
