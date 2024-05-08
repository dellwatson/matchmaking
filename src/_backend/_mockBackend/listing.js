import {
  NFT_STARSHIP_A,
  NFT_STARSHIP_B,
} from "@/_backend/_mockBackend/listInventory";
import {
  LOGO_APTOS,
  TOKEN_APTOS,
} from "../../components/product/mock_products";
// import { PAYMENT_OPTIONS } from "../mock-shop";

const APTOS_STORE_ADDRESS =
  "0xb2b0d497eed8a08b35fe83c0a4882fdeb7f8126ceec5fad515f1041d0febb547";
const APTOS_NETWORK = {};

export const PRODUCT_STARSHIP_A = {
  // address
  gameId: "",
  shopId: "",
  productId: "",
  id: "1",
  archived: false,
  disable: false,
  title: "Skyblaze Mockup X",
  category: "SHIP",
  description: `The X-23 Starblaze Prototype, a pioneering spacecraft engineered by
  Horizon Dynamics Corporation, epitomizes innovation in interstellar
  exploration. Fueled by the experimental Quasar Core Engine, the X-23
  achieves unparalleled speed and agility, complemented by a warp drive
  for instantaneous interstellar jumps.`,
  rarity: "demo",
  supply: "",
  network: "Aptos",
  chainId: "",
  // bg:
  // type  ==> image | 3d
  header: {
    textColor: "text-gray-500",
    bgColor: "",
    htmlTag: null,
  },
  body: {
    textColor: "",
    bgColor: "",
    htmlTag: null,
  },
  footer: {
    textColor: "text-gray-500",
    bgColor: "backdrop-blur-md border",
    htmlTag: null,
  },

  display: {
    // overlap_3d = false
    type: "image", //img | 3d mode | video
    assetUrl: "/shops/starshipA/ship1.png", // portrait
    assetImage: "",
    classNameImage: " rounded-md object-cover",
    prices: [
      {
        isCrypto: true,
        chainId: "",
        network: "Aptos",
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
    ],
    // classNameImage: "object-fit -rotate-20 rounded-md ",
  }, //img | 3d mode | video
  traits: [
    {
      title: "category",
      subtitle: "ship",
    },
    {
      title: "rarity",
      subtitle: "common",
    },
    {
      title: "make",
      subtitle: "Abcde 123",
    },
    {
      title: "network",
      subtitle: "solana",
    },
  ],
  listContents: [
    {
      type: "image", //3D | image | video
      url: "/shops/starshipA/ship1.png",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/starshipA/ship2.png",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/starshipA/ship3.png",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/starshipA/ship4.png",
    },
  ],

  payments: [
    {
      network: "Aptos",
      network_logo: LOGO_APTOS,
      bgColor: "",
      bgIcon: "bg-white",
      chainId: "",
      layer: 1,
      current_supply: "∞",
      total_supply: "∞",
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
        // VISA("aptos", "1", false),
        // GPAY("aptos", "1", false),
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
          symbolUrl:
            " https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
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
        // VISA(),
        // GPAY(),
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
  ],
  // auction: false, // direct
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

// type TPaymentNetwork = {
//   paymentNetworkId: String,
//   provider: TProvider
// };

// product: minted
// my-product: ext + minted
// shop: ext + display + payments
export const PRODUCT_STARSHIP_APTOS_A = {
  ...NFT_STARSHIP_A,
  listingId: "1", //theras ID listing -> not reflecting the store id
  payments: [
    {
      paymentNetworkId: "",
      provider: "move",
      network: "Aptos",
      network_logo: LOGO_APTOS,
      bgColor: "",
      bgIcon: "bg-white",
      chainId: "",
      layer: 1,
      current_supply: "∞",
      total_supply: "∞",
      // nft_address: "0x",
      storeAddress: APTOS_STORE_ADDRESS,
      contractName: "manager_shop",
      functionPurchaseName: "purchase_product_direct",
      // ABI: [],
      block_explorer: "https://",
      payment_options: [
        {
          isCrypto: true,
          provider: "move",
          storeAddress: APTOS_STORE_ADDRESS,
          contractName: "manager_shop",
          functionPurchaseName: "purchase_product_direct",
          block_explorer: "https://",
          // ABI: [],

          chainId: "",
          network: "Aptos",
          token: "APT",
          currency: "aptos",
          symbol: "APT",
          symbolUrl: TOKEN_APTOS,
          network_logo: TOKEN_APTOS,
          bgChain: "bg-white p-1 rounded-full",
          bgToken: "bg-white rounded-full",
          supply: "100",
          price: "0.03",
          price_in_wei: "300000",
          decimals: "8",
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
          chainId: "1",
          network: "Ethereum",
          token: "ETH",
          currency: "ETH",
          symbol: "ETH",
          symbolUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
          network_logo:
            "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
          bgChain: "bg-white p-1 rounded-full",
          bgToken: "bg-white rounded-full  w-8 h-8 border-2",
          supply: "100",
          price: "1",
          price_in_wei: "1000000000000000000",
          decimals: "18",
          usdPrice: "",
          address: "",
          isNative: true,
          fee: "",
          archived: false,
          hidden: false,
          disable: true,
          type: "direct", //wrapped //custody
        },
        // VISA("aptos", "1", false),
        // GPAY("aptos", "1", false),
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
          disable: true,
          type: "direct", //wrapped //custody
        },
        {
          isCrypto: true,

          chain: "1",
          network: "ethereum",
          token: "usdc",
          currency: "usdc",
          symbol: "usdc",
          symbolUrl:
            " https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
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
          disable: true,

          type: "direct", //wrapped //custody
        },
        // VISA(),
        // GPAY(),
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
          disable: true,
          type: "WRAPPED", //wrapped //custody
        },
      ],
    },
  ],
  // auction: false, // direct
};
export const PRODUCT_STARSHIP_APTOS_B = {
  ...NFT_STARSHIP_B,
  listingId: "2",
  payments: [
    {
      paymentNetworkId: "",
      provider: "move",
      network: "Aptos",
      network_logo: LOGO_APTOS,
      bgColor: "",
      bgIcon: "bg-white",
      chainId: "",
      layer: 1,
      current_supply: "∞",
      total_supply: "∞",
      nft_address: "0x",
      block_explorer: "https://",
      storeAddress: APTOS_STORE_ADDRESS,
      contractName: "manager_shop",
      functionPurchaseName: "purchase_product_direct",
      payment_options: [
        {
          provider: "move",
          storeAddress: APTOS_STORE_ADDRESS,
          contractName: "manager_shop",
          functionPurchaseName: "purchase_product_direct",
          block_explorer: "https://",
          // ABI: [],
          isCrypto: true,
          chainId: "",
          network: "Aptos",
          token: "APT",
          currency: "aptos",
          symbol: "APT",
          symbolUrl: TOKEN_APTOS,
          network_logo: TOKEN_APTOS,
          bgChain: "bg-white p-1 rounded-full",
          bgToken: "bg-white rounded-full",
          supply: "100",
          price: "0.4",
          price_in_wei: "4000000",
          decimals: "8",
          usdPrice: "",
          address: "",
          isNative: true,
          fee: "",
          archived: false,
          hidden: false,
          disable: false,
          type: "direct", //wrapped //custody
        },
        // VISA("aptos", "1", false),
        // GPAY("aptos", "1", false),
      ],
    },
  ],
  // auction: false, // direct
};

export const PRODUCT_STARSHIP_ETH_A = {
  ...NFT_STARSHIP_A,
  listingId: "3",
  payments: [
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
          symbolUrl:
            " https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
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
          disable: true,

          type: "direct", //wrapped //custody
        },
        // VISA(),
        // GPAY(),
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
          disable: true,
          type: "WRAPPED", //wrapped //custody
        },
      ],
    },
  ],
  // auction: false, // direct
};
export const PRODUCT_STARSHIP_SEPOLIA_A = {
  ...NFT_STARSHIP_A,
  listingId: "4",
  payments: [
    {
      network: "sepolia",
      bgIcon: "bg-white",
      network_logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
      chainId: 11155111,
      layer: 1,
      current_supply: 99,
      total_supply: 99,
      nft_address: "0xE41B1f5d9C4d8d1c309118b034C807126D87FcB4",
      block_explorer: "https://",
      payment_options: [
        {
          shop_address: "0x07Ab9eed2d023dB86a1E6F38bC71565f76d561Fb",
          product_address: "0xE41B1f5d9C4d8d1c309118b034C807126D87FcB4",
          price_in_wei: "23000000000000000",
          provider: "evm",
          isCrypto: true,
          chain: "11155111",
          network: "sepolia",
          network_logo:
            "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
          token: "eth",
          currency: "eth",
          symbol: "eth",
          symbolUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
          supply: "100",
          price: "0.023",
          usdPrice: "",
          address: "",
          isNative: true,
          fee: "",
          archived: false,
          hidden: false,
          disable: false,
          type: "direct", //wrapped //custody
        },
        // {
        //   isCrypto: true,
        //   chain: "11155111",
        //   network: "ethereum",
        //   token: "usdc",
        //   currency: "usdc",
        //   symbol: "usdc",
        //   symbolUrl:
        //     " https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
        //   supply: "100",
        //   network_logo:
        //     "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
        //   price: "1000",
        //   usdPrice: "",
        //   address: "", // ADDRESS
        //   isNative: false,
        //   fee: "",
        //   archived: false,
        //   hidden: false,
        //   disable: true,
        //   type: "direct", //wrapped //custody
        // },
        // VISA(),
        // GPAY(),
      ],
    },
  ],
  // auction: false, // direct
};
export const PRODUCT_STARSHIP_TARAXA_A = {
  ...NFT_STARSHIP_A,
  listingId: "5",
  payments: [
    {
      // describing the NFT DETAIL
      network: "testnet-taraxa",
      bgIcon: "bg-white",
      network_logo:
        "https://s2.coinmarketcap.com/static/img/coins/64x64/8715.png",
      chainId: 842,
      layer: 1,
      current_supply: 99,
      total_supply: 99,
      nft_address: "0xd65d3146f6a46158741DB47E56da197115879938",
      shop_address: "0x9D2067BeB1c165FDE0F89E40Bd97f3276C153385",
      block_explorer: "https://",
      payment_options: [
        {
          // describing the PAYMENT DIRECTION
          shop_address: "0x9D2067BeB1c165FDE0F89E40Bd97f3276C153385",
          // function_name:
          product_address: "0xd65d3146f6a46158741DB47E56da197115879938",
          provider: "evm",
          isCrypto: true,
          chain: "842",
          network: "testnet-taraxa",
          network_logo:
            "https://s2.coinmarketcap.com/static/img/coins/64x64/8715.png",
          token: "tara",
          currency: "tara",
          symbol: "tara",
          symbolUrl:
            "https://s2.coinmarketcap.com/static/img/coins/64x64/8715.png",
          supply: "100",
          price: "0.023",
          price_in_wei: "23000000000000000",
          usdPrice: "",
          address: "",
          isNative: true,
          fee: "",
          archived: false,
          hidden: false,
          disable: false,
          type: "direct", //wrapped //custody
        },
        // {
        //   isCrypto: true,
        //   chain: "11155111",
        //   network: "ethereum",
        //   token: "usdc",
        //   currency: "usdc",
        //   symbol: "usdc",
        //   symbolUrl:
        //     " https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
        //   supply: "100",
        //   network_logo:
        //     "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
        //   price: "1000",
        //   usdPrice: "",
        //   address: "", // ADDRESS
        //   isNative: false,
        //   fee: "",
        //   archived: false,
        //   hidden: false,
        //   disable: true,
        //   type: "direct", //wrapped //custody
        // },
        // VISA(),
        // GPAY(),
      ],
    },
  ],
  // auction: false, // direct
};
export const PRODUCT_STARSHIP_BTTC_A = {
  ...NFT_STARSHIP_A,
  listingId: "6",
  payments: [
    {
      // describing the NFT DETAIL
      network: "testnet-bttc",
      bgIcon: "bg-white",
      network_logo:
        "https://cryptologos.cc/logos/bittorrent-bttold-logo.png?v=032",
      chainId: 842,
      layer: 1,
      current_supply: 99,
      total_supply: 99,
      nft_address: "0xD8f003dc5C270aAeDd94B4104402095c4EcE814C",
      shop_address: "0xE39C0AAA925337a5499A2cCe0D906cc38B5CEA54",
      block_explorer: "https://",
      payment_options: [
        {
          // describing the PAYMENT DIRECTION
          shop_address: "0xE39C0AAA925337a5499A2cCe0D906cc38B5CEA54",
          // function_name:
          product_address: "0xD8f003dc5C270aAeDd94B4104402095c4EcE814C",
          provider: "evm",
          isCrypto: true,
          chain: "1029",
          network: "testnet-bttc",
          network_logo:
            "https://cryptologos.cc/logos/bittorrent-bttold-logo.png?v=032",
          token: "BTT",
          currency: "BTT",
          symbol: "BTT",
          symbolUrl:
            "https://cryptologos.cc/logos/bittorrent-bttold-logo.png?v=032",
          supply: "100",
          price: "0.023",
          price_in_wei: "23000000000000000",
          usdPrice: "",
          address: "",
          isNative: true,
          fee: "",
          archived: false,
          hidden: false,
          disable: false,
          type: "direct", //wrapped //custody
        },
        // {
        //   isCrypto: true,
        //   chain: "11155111",
        //   network: "ethereum",
        //   token: "usdc",
        //   currency: "usdc",
        //   symbol: "usdc",
        //   symbolUrl:
        //     " https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029",
        //   supply: "100",
        //   network_logo:
        //     "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
        //   price: "1000",
        //   usdPrice: "",
        //   address: "", // ADDRESS
        //   isNative: false,
        //   fee: "",
        //   archived: false,
        //   hidden: false,
        //   disable: true,
        //   type: "direct", //wrapped //custody
        // },
        // VISA(),
        // GPAY(),
      ],
    },
  ],
  // auction: false, // direct
};

export const ALL_LISTING_PRODUCTS = [
  PRODUCT_STARSHIP_APTOS_A,
  PRODUCT_STARSHIP_APTOS_B,
  PRODUCT_STARSHIP_ETH_A,
  PRODUCT_STARSHIP_SEPOLIA_A,
  PRODUCT_STARSHIP_BTTC_A,
  PRODUCT_STARSHIP_TARAXA_A,
];
