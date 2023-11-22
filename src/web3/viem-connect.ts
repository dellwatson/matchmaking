import { createPublicClient, http, defineChain } from "viem";
import { lukso, mainnet, polygon } from "viem/chains";
import { erc20ABI } from "wagmi";

// 0xE06Bd4F5aAc8D0aA337D13eC88dB6defC6eAEefE
// const CONTRACT_ADDRESS = "0x8F8b8cAe625b8628BdA85a1EbB6a1f28734Cbe4c"; //random lukso testnet
const CONTRACT_ADDRESS = "0xE06Bd4F5aAc8D0aA337D13eC88dB6defC6eAEefE"; //ixt

// const wagmiContract = {
//   abi: erc20ABI,
//   address: "0xE06Bd4F5aAc8D0aA337D13eC88dB6defC6eAEefE",
// };

export const wagmiContract = {
  address: CONTRACT_ADDRESS,
  abi: [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "from",
          type: "address",
        },
        { indexed: true, name: "to", type: "address" },
        {
          indexed: true,
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        { name: "to", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "tokenId", type: "uint256" }],
      name: "getApproved",
      outputs: [{ name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "owner", type: "address" },
        { name: "operator", type: "address" },
      ],
      name: "isApprovedForAll",
      outputs: [{ name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "tokenId", type: "uint256" }],
      name: "ownerOf",
      outputs: [{ name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "tokenId", type: "uint256" },
        { name: "_data", type: "bytes" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { name: "operator", type: "address" },
        { name: "approved", type: "bool" },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ name: "tokenId", type: "uint256" }],
      name: "tokenURI",
      outputs: [{ name: "", type: "string" }],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { name: "from", type: "address" },
        { name: "to", type: "address" },
        { name: "tokenId", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
} as const;

const client = createPublicClient({
  chain: polygon,
  transport: http("https://rpc-mainnet.maticvigil.com"),
});

export const clientx = defineChain({
  id: 4201,
  name: "Lukso Testnet",
  network: "Lukso Tes",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "LYXt",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.lukso.network"],
      webSocket: ["wss://ws-rpc.testnet.lukso.network"],
    },
    public: {
      http: ["https://rpc.testnet.lukso.network"],
      webSocket: ["wss://ws-rpc.testnet.lukso.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://explorer.execution.testnet.lukso.network",
    },
  },
});

const [name, totalSupply, symbol, tokenUri, balance] = await Promise.all([
  client.readContract({
    ...wagmiContract,
    functionName: "name",
  }),
  client.readContract({
    ...wagmiContract,
    functionName: "totalSupply",
  }),
  client.readContract({
    ...wagmiContract,
    functionName: "symbol",
  }),
  client.readContract({
    ...wagmiContract,
    functionName: "tokenURI",
    args: [420n],
  }),
  //   client.readContract({
  //     ...wagmiContract,
  //     functionName: "balanceOf",
  //     args: ["0xcA11bde05977b3631167028862bE2a173976CA11"],
  //   }),
]);
export default client;
