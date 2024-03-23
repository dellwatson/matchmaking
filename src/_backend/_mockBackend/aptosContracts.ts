const APTOS_CONTRACTS_STARSHIPS = {
  title: "nft_starship",
  network: "aptos",
  type: "main",
  provider: "move", // move, evm, ink, cairo, solana
  category: "nft", //token, manager
  // address: "0xb2b0d497eed8a08b35fe83c0a4882fdeb7f8126ceec5fad515f1041d0febb547",
  collectionId:
    "0xe895013a4360a07c13829974865fd90988d7287e13a41342a4e62d6f1be32576",
  abis: [],
  views: [
    {
      name: "get_nfts",
      // balance check
    },
  ],
  write: [],
};
const APTOS_CONTRACTS_STORE = {
  title: "store",
  network: "aptos",
  type: "main",
  provider: "move",
  category: "manager", //token, manager
  address: "0x",
  abis: [],
  views: [
    {
      name: "purchase",
    },
  ],
  write: [],
};

const NFT_COLLECTIONS_ADDRESS = [
  {
    title: "BAPE",
    type: "collection", // main,  collection, support, manager
    category: "test_nft", //token, manager
    address: "0x",
    abis: [], //erc721
    views: [],
    write: [],
  },
];
const TOKENS_ADDRESS = [
  {
    title: "USDT",
    type: "support", // main,  collection, support, manager
    category: "token", //token, manager
    address: "0x",
    abis: [], //erc20
    views: [],
    write: [],
  },
  {
    title: "PEPE",
    type: "support", // main,  collection, support, manager
    category: "token", //token, manager
    address: "0x",
    abis: [], //erc20
    views: [],
    write: [],
  },
];

export const MOCK_LIST_ALL_APTOS_CONTRACT = {
  network: "aptos",
  provider: "move",
  chainId: "",
  list_contracts: [
    APTOS_CONTRACTS_STARSHIPS,
    APTOS_CONTRACTS_STORE,
    ...NFT_COLLECTIONS_ADDRESS,
    ...TOKENS_ADDRESS,
  ],
};

// const get_nft_contract = () => {};
//
