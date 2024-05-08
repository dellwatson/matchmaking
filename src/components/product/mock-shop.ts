// token options

import {
  PRODUCT_STARSHIP_A,
  PRODUCT_STARSHIP_APTOS_A,
  PRODUCT_STARSHIP_APTOS_B,
  PRODUCT_STARSHIP_BTTC_A,
  PRODUCT_STARSHIP_ETH_A,
  PRODUCT_STARSHIP_SEPOLIA_A,
  PRODUCT_STARSHIP_TARAXA_A,
} from "../../_backend/_mockBackend/listing";

// https://cryptologos.cc/logos/aptos-apt-logo.svg?v=029
const LOGO_APTOS =
  "https://cryptologos.cc/logos/versions/aptos-apt-logo-full.svg?v=029";
const TOKEN_APTOS = "https://cryptologos.cc/logos/aptos-apt-logo.svg?v=029";

export const MOCK_SHOP = {
  gameId: "",
  shop_list: [
    {
      archived: false,
      disable: false,
      countdown: false,
      //
      shopId: "",
      title: "BTTC Testnet Sale", // sale title
      bgColor: "",
      bgUrl: "",
      network: "testnet-bttc", //mixed | polygon
      sale_list: [PRODUCT_STARSHIP_BTTC_A],
    },
    {
      archived: false,
      disable: false,
      countdown: false,
      //
      shopId: "",
      title: "Taraxa Testnet Sale", // sale title
      bgColor: "",
      bgUrl: "",
      network: "testnet-taraxa", //mixed | polygon
      sale_list: [PRODUCT_STARSHIP_TARAXA_A],
    },
    // {
    //   archived: false,
    //   disable: false,
    //   countdown: false,
    //   //
    //   shopId: "",
    //   title: "Sepolia Sale", // sale title
    //   bgColor: "",
    //   bgUrl: "",
    //   network: "sepolia", //mixed | polygon
    //   sale_list: [PRODUCT_STARSHIP_SEPOLIA_A],
    // },
    {
      archived: false,
      disable: false,
      countdown: false,
      //
      shopId: "",
      title: "Aptos Event", // sale title
      bgColor: "transparent",
      // bgColor: "bg-gray-400",
      bgUrl: "",
      network: "", //mixed | polygon
      storeAddress: "",
      // storeFunctionName: "",
      // storeArgs: [],
      sale_list: [
        // PRODUCT_STARSHIP_A
        PRODUCT_STARSHIP_APTOS_A,
        PRODUCT_STARSHIP_APTOS_B,
      ],
    },
    // {
    //   archived: false,
    //   disable: false,
    //   countdown: false,
    //   //
    //   shopId: "",
    //   title: "Ethereum Sale", // sale title
    //   bgColor: "",
    //   bgUrl: "",
    //   network: "", //mixed | polygon
    //   sale_list: [PRODUCT_STARSHIP_ETH_A],
    // },
  ],
};

const VISA = (network = "ethereum", chainId = "1", isCrypto = false) => ({
  isCrypto,
  chainId,
  network,
  currency: "usd",
  symbol: "$",
  symbolUrl: "/logo/visa_logo.svg",
  paymentImage: "/logo/visa_logo.svg",
  supply: "100",
  price: "30",
  usdPrice: "",
  address: "",
  isNative: false,
  fee: "",
  archived: false,
  hidden: false,
  disable: false,
  type: "wrapped", //wrapped //custody
});

const GPAY = (network = "ethereum", chainId = "1", isCrypto = false) => ({
  isCrypto,
  chainId,
  network,
  token: "gpay",
  currency: "usd",
  symbol: "$",
  symbolUrl: "/logo/google-pay.svg",
  paymentImage: "/logo/google-pay.svg",
  supply: "100",
  price: "30",
  usdPrice: "",
  address: "",
  isNative: false,
  fee: "",
  archived: false,
  hidden: false,
  disable: false,
  type: "wrapped", //wrapped //custody
});

export const PAYMENT_OPTIONS = [
  {
    network: "Aptos",
    // network_logo: TOKEN_APTOS,
    network_logo: LOGO_APTOS,
    bgColor: "",
    bgIcon: "bg-white",
    chainId: "",
    layer: 1,
    current_supply: " ∞",
    total_supply: " ∞",
    nft_address: "0x",
    block_explorer: "https://",
    payment_options: [
      {
        isCrypto: true,
        chainId: "",
        network: "aptos",
        token: "APT",
        currency: "aptos",
        symbol: "APT",
        symbolUrl: TOKEN_APTOS,
        network_logo: TOKEN_APTOS,
        bgChain: "bg-white p-1 rounded-full",
        bgToken: "bg-white rounded-full",
        supply: "100",
        price: "0.03",
        price_in_wei: "30000000000000000",
        usdPrice: "",
        address: "",
        isNative: true,
        fee: "",
        archived: false,
        hidden: false,
        disable: false,
        type: "direct", //wrapped //custody
      },
      VISA("aptos", "1", false),
      GPAY("aptos", "1", false),
    ],
  },
  {
    network: "ethereum",
    bgIcon: "bg-white",
    network_logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
    chainId: 1,
    layer: 1,
    current_supply: 999,
    total_supply: 999,
    nft_address: "0x",
    block_explorer: "https://",
    payment_options: [
      {
        isCrypto: true,
        chain: "1",
        network: "ethereum",
        network_logo:
          "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
        token: "eth",
        currency: "eth",
        symbol: "eth",
        symbolUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
        supply: "100",
        price: "1",
        usdPrice: "",
        address: "",
        isNative: true,
        fee: "",
        archived: false,
        hidden: false,
        disable: false,
        type: "direct", //wrapped //custody
      },
      {
        isCrypto: true,

        chain: "1",
        network: "ethereum",
        token: "usdc",
        currency: "usdc",
        symbol: "usdc",
        symbolUrl: " https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
        supply: "100",
        network_logo:
          "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
        price: "1000",
        usdPrice: "",
        address: "",
        isNative: false,
        fee: "",
        archived: false,
        hidden: false,
        disable: false,
        type: "direct", //wrapped //custody
      },
      VISA(),
      GPAY(),
      {
        isCrypto: true,
        chain: "1",
        network_logo: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=029",
        network: "binance",
        token: "bnb",
        currency: "bnb",
        symbol: "bnb",
        symbolUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=029",
        supply: "100",
        price: "30",
        usdPrice: "",
        address: "",
        isNative: true,
        fee: "",
        archived: false,
        hidden: false,
        disable: false,
        type: "WRAPPED", //wrapped //custody
      },
    ],
  },
];
