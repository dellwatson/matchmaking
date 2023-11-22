import { createConfig, configureChains, mainnet } from "wagmi";
// import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

// import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
// import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WALLETCONNECT_ID } from "@/utils/constant/wallet-helper";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { polygon, polygonMumbai } from "viem/chains";

import { Chain } from "@wagmi/core";

export const lukso_testnet = {
  id: 4201,
  name: "Lukso T",
  network: "lukso",
  nativeCurrency: {
    decimals: 18,
    name: "LYX",
    symbol: "LYXt",
  },
  rpcUrls: {
    public: { http: ["https://rpc.testnet.lukso.network"] },
    default: { http: ["https://rpc.testnet.lukso.network"] },
  },
  blockExplorers: {
    etherscan: {
      name: "Explorer",
      url: "https://explorer.execution.testnet.lukso.network",
    },
    default: {
      name: "Explorer",
      url: "https://explorer.execution.testnet.lukso.network",
    },
  },
  // contracts: {
  //   multicall3: {
  //     address: '0xca11bde05977b3631167028862be2a173976ca11',
  //     blockCreated: 11_907_934,
  //   },
  // },
} as const satisfies Chain;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // mainnet,
    lukso_testnet,
    polygonMumbai,
  ],
  [publicProvider()]
);

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [mainnet],
//   [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
// )

// 1. Get projectId
const projectId = WALLETCONNECT_ID;

// 2. Create wagmiConfig
const metadata = {
  name: "STAR EX",
  description: "STAR EX - GAME",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// 3. Create modal

export const configx = defaultWagmiConfig({ chains, projectId, metadata }); //web3modal
export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: "star-ex",
    //   },
    // }),
    new WalletConnectConnector({
      chains,
      options: {
        // projectId: "861ef743dceed75deb813e6d390dc4a8",
        projectId: WALLETCONNECT_ID,
      },
    }),
    // new InjectedConnector({
    //   chains,
    //   options: {
    //     name: "Injected",
    //     shimDisconnect: true,
    //   },
    // }),
  ],

  publicClient,
  webSocketPublicClient,
});

// createWeb3Modal({
//   wagmiConfig: config,
//   projectId,
//   chains,

//   themeMode: "dark",
// });
