import { Chain } from "@wagmi/core";
// const createWeb3ModalPromise = import("@web3modal/wagmi/react").then(
//   (module) => module.createWeb3Modal
// );

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

export const klaytn_testnet = {
  id: 1001,
  name: "Chain 1001",
  network: "Chain 1001",
  nativeCurrency: {
    decimals: 18,
    name: "KLAY",
    symbol: "KLAY",
  },
  rpcUrls: {
    public: { http: ["https://public-en-baobab.klaytn.net"] },
    default: { http: ["https://public-en-baobab.klaytn.net"] },
  },
  blockExplorers: {
    etherscan: {
      name: "Explorer",
      url: "",
    },
    default: {
      name: "Explorer",
      url: "",
    },
  },
} as const satisfies Chain;

export const exzo_testnet = {
  id: 2370,
  name: "Exzo T",
  network: "Exzo",
  nativeCurrency: {
    decimals: 18,
    name: "XZO",
    symbol: "XZO",
  },
  rpcUrls: {
    public: { http: ["https://evm-test.exzo.network"] },
    default: { http: ["https://evm-test.exzo.network"] },
  },
  blockExplorers: {
    etherscan: {
      name: "Explorer",
      url: "",
    },
    default: {
      name: "Explorer",
      url: "",
    },
  },
} as const satisfies Chain;
