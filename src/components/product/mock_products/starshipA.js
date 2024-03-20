import { LOGO_APTOS, TOKEN_APTOS } from ".";
// import { PAYMENT_OPTIONS } from "../mock-shop";

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
        weiPrice: "30000000000000000",
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
          weiPrice: "30000000000000000",
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
