import { createConfig, configureChains, mainnet } from "wagmi";
// import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
// import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WALLETCONNECT_ID } from "@/utils/constant/wallet-helper";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
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

export const config = defaultWagmiConfig({ chains, projectId, metadata }); //web3modal
export const config2 = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "star-ex",
      },
    }),
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

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,

  themeMode: "dark",
});
