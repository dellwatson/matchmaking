import {
  LOGO_APTOS,
  LOGO_ETHEREUM,
  TOKEN_APTOS,
} from "@/components/product/mock_products";

// used in modelId too
// {stateModel && LIST_STARSHIPS[stateModel?.modelId]}
const ARR_NFTS_ID = [
  //NFT_STARSHIP_A
  1,
  // NFT_STARSHIP_B
  2,
  // NFT_STARSHIP_C
  3,
];

export const NFT_STARSHIP_A = {
  // address
  gameId: "",
  modelId: 0,
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
  nfts: [
    {
      productId: "",
      network_logo: LOGO_APTOS,
      blockExplorer: "",
      network: "Aptos", //might not needed here
      chainId: "",
      bgChain: "bg-white p-1 rounded-full",
      bgIcon: "bg-white p-1 rounded-full",
      bgToken: "bg-white rounded-full",
      provider: "move",
      address:
        "0xe895013a4360a07c13829974865fd90988d7287e13a41342a4e62d6f1be32576",
      model_type: "MODEL_1",
      // supply
    },
  ],
  minted: {
    productId: "",
    network_logo: LOGO_APTOS,
    address: "0xA31A54e4C258B1BE8cE887a2724906BfCe88Cc6A",
    blockExplorer: "",
    network: "Aptos", //might not needed here
    chainId: "",
    bgChain: "bg-white p-1 rounded-full",
    bgIcon: "bg-white p-1 rounded-full",
    bgToken: "bg-white rounded-full",
    // tokenId: '',
    // direct
    // wrapped
  },
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
    // this is main NFT network (minteded )
    address: "",
    network: "",
    // overlap_3d = false
    type: "image", //img | 3d mode | video
    assetUrl: "/shops/starshipA/ship1.png", // portrait
    assetImage: "",
    classNameImage: " rounded-md object-cover",
    // prices: [
    //   {
    //     isCrypto: true,
    //     chainId: "",
    //     network: "Aptos",
    //     token: "APT",
    //     currency: "aptos",
    //     symbol: "APT",
    //     symbolUrl: TOKEN_APTOS,
    //     network_logo: TOKEN_APTOS,
    //     bgChain: "bg-white p-1 rounded-full",
    //     bgToken: "bg-white rounded-full",
    //     supply: "100",
    //     price: "0.03",
    //     price_in_wei: "30000000000000000",
    //     usdPrice: "",
    //     address: "",
    //     isNative: true,
    //     fee: "",
    //     archived: false,
    //     hidden: false,
    //     disable: false,
    //     type: "direct", //wrapped //custody
    //   },
    // ],
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
      subtitle: "aptos",
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

  // auction: false, // direct
};
export const NFT_STARSHIP_C = {
  // address
  gameId: "",
  modelId: 2,
  shopId: "",
  productId: "",
  id: "3",
  archived: false,
  disable: false,
  title: "Mercedes X",
  category: "SHIP",
  description: `The Mercedes Prototype, a pioneering spacecraft engineered by
  Horizon Dynamics Corporation, epitomizes innovation in interstellar
  exploration. Fueled by the experimental Quasar Core Engine, the X-23
  achieves unparalleled speed and agility, complemented by a warp drive
  for instantaneous interstellar jumps.`,
  rarity: "epic",
  supply: "",
  nfts: [
    {
      productId: "",
      network_logo: LOGO_APTOS,
      blockExplorer: "",
      network: "Aptos", //might not needed here
      chainId: "",
      bgChain: "bg-white p-1 rounded-full",
      bgIcon: "bg-white p-1 rounded-full",
      bgToken: "bg-white rounded-full",
      provider: "move",
      address:
        "0xe895013a4360a07c13829974865fd90988d7287e13a41342a4e62d6f1be32576",
      model_type: "MODEL_3",
      // supply
    },
  ],
  minted: {
    productId: "",
    network_logo: LOGO_APTOS,
    address: "0xA31A54e4C258B1BE8cE887a2724906BfCe88Cc6A",
    blockExplorer: "",
    network: "Aptos", //might not needed here
    chainId: "",
    bgChain: "bg-white p-1 rounded-full",
    bgIcon: "bg-white p-1 rounded-full",
    bgToken: "bg-white rounded-full",
    // tokenId: '',
    // direct
    // wrapped
  },
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
    // this is main NFT network (minteded )
    address: "",
    network: "",
    // overlap_3d = false
    type: "image", //img | 3d mode | video
    assetUrl: "/shops/starshipC/starshipC4.png", // portrait
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
      subtitle: "aptos",
    },
  ],
  listContents: [
    // {
    //   type: "image", //3D | image | video
    //   url: "/shops/starshipC/starshipC1.png",
    // },
    {
      type: "image", //3D | image | video
      url: "/shops/starshipC/starshipC2.png",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/starshipC/starshipC3.png",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/starshipC/starshipC4.png",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/starshipC/starshipC5.png",
    },
  ],
  // auction: false, // direct
};
export const NFT_RANDOM = {
  // address
  gameId: "",
  shopId: "",
  productId: "",
  id: "298",
  archived: false,
  disable: false,
  title: "Skyblaze Mockup X",
  category: "CHARM",
  description: `The X-23 Starblaze Prototype, a pioneering spacecraft engineered by
  Horizon Dynamics Corporation, epitomizes innovation in interstellar
  exploration. Fueled by the experimental Quasar Core Engine, the X-23
  achieves unparalleled speed and agility, complemented by a warp drive
  for instantaneous interstellar jumps.`,
  rarity: "uncommon",
  supply: "",
  minted: {
    productId: "",
    network_logo: LOGO_APTOS,
    address: "0xA31A54e4C258B1BE8cE887a2724906BfCe88Cc6A",
    blockExplorer: "",
    network: "Aptos", //might not needed here
    chainId: "",
    bgChain: "bg-white p-1 rounded-full",
    bgIcon: "bg-white p-1 rounded-full",
    bgToken: "bg-white rounded-full",
    // tokenId: '',
    // direct
    // wrapped
  },
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
    // this is main NFT network (minteded )
    address: "",
    network: "",
    // overlap_3d = false
    type: "image", //img | 3d mode | video
    assetUrl: "/shops/itemB.png", // portrait
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
      subtitle: "aptos",
    },
  ],
  listContents: [
    {
      type: "image", //3D | image | video
      url: "/shops/itemB.png",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/itemB.png",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/itemB.png",
    },
  ],

  // auction: false, // direct
};
export const NFT_STARSHIP_B = {
  // address
  gameId: "",
  modelId: 1,

  shopId: "",
  productId: "",
  id: "2",
  archived: false,
  disable: false,
  title: "Z-9023 Mockup B",
  category: "SHIP",
  description: `Z-9023 Mockup, a pioneering spacecraft engineered by
  Horizon Dynamics Corporation, epitomizes innovation in interstellar
  exploration. Fueled by the experimental Quasar Core Engine, the X-23
  achieves unparalleled speed and agility, complemented by a warp drive
  for instantaneous interstellar jumps.`,
  rarity: "uncommon",
  supply: "",
  nfts: [
    {
      productId: "",
      network_logo: LOGO_APTOS,
      blockExplorer: "",
      network: "Aptos", //might not needed here
      chainId: "",
      bgChain: "bg-white p-1 rounded-full",
      bgIcon: "bg-white p-1 rounded-full",
      bgToken: "bg-white rounded-full",
      provider: "move",
      address:
        "0xe895013a4360a07c13829974865fd90988d7287e13a41342a4e62d6f1be32576",
      model_type: "MODEL_2",
      // supply
    },
  ],
  minted: {
    productId: "",
    network_logo: LOGO_APTOS,
    address: "0xA31A54e4C258B1BE8cE887a2724906BfCe88Cc6A",
    blockExplorer: "",
    network: "Aptos", //might not needed here
    chainId: "",
    bgChain: "bg-white p-1 rounded-full",
    bgIcon: "bg-white p-1 rounded-full",
    bgToken: "bg-white rounded-full",
    // tokenId: '',
    // direct
    // wrapped
  },
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
    textColor: "text-gray-800",
    bgColor: "backdrop-blur-md ",
    htmlTag: null,
  },

  display: {
    // this is main NFT network (minteded )
    address: "",
    network: "",
    // overlap_3d = false
    type: "image", //img | 3d mode | video
    assetUrl: "/shops/starshipB/starshipB.png", // portrait
    assetImage: "",
    classNameImage: " rounded-md object-cover",
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
      subtitle: "aptos",
    },
  ],
  listContents: [
    {
      type: "image", //3D | image | video
      url: "/shops/starshipB/starshipB.png",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/starshipB/starshipB1.png",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/starshipB/starshipB2.png",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/starshipB/starshipB3.png",
    },
  ],

  // auction: false, // direct
};
export const NFT_PASS = {
  // address
  gameId: "",
  shopId: "",
  productId: "",
  id: "2",
  archived: false,
  disable: false,
  title: "Season PASS v1",
  category: "PASS",
  description: `The X-23 Starblaze Prototype, a pioneering spacecraft engineered by
  Horizon Dynamics Corporation, epitomizes innovation in interstellar
  exploration. Fueled by the experimental Quasar Core Engine, the X-23
  achieves unparalleled speed and agility, complemented by a warp drive
  for instantaneous interstellar jumps.`,
  rarity: "common",
  supply: "",
  minted: {
    productId: "",
    network_logo: LOGO_APTOS,
    address: "0xA31A54e4C258B1BE8cE887a2724906BfCe88Cc6A",
    blockExplorer: "",
    network: "Aptos", //might not needed here
    chainId: "",
    bgChain: "bg-white p-1 rounded-full",
    bgIcon: "bg-white p-1 rounded-full",
    bgToken: "bg-white rounded-full",
    // tokenId: '',
    // direct
    // wrapped
  },
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
    // this is main NFT network (minteded )
    address: "",
    network: "",
    // overlap_3d = false
    type: "image", //img | 3d mode | video
    assetUrl: "/shops/season-pass.svg", // portrait
    assetImage: "",
    classNameImage: " rounded-md object-cover -rotate-20 -z-1 opacity-75",
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
      subtitle: "aptos",
    },
  ],
  listContents: [
    {
      type: "image", //3D | image | video
      url: "/shops/season-pass.svg",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/season-pass.svg",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/season-pass.svg",
    },
  ],

  // auction: false, // direct
};

export const NFT_RANDOM_ETH = {
  // address
  gameId: "",
  shopId: "",
  productId: "",
  id: "222",
  archived: false,
  disable: false,
  title: "Skyblaze Mockup X",
  category: "CHARM",
  description: `The X-23 Starblaze Prototype, a pioneering spacecraft engineered by
  Horizon Dynamics Corporation, epitomizes innovation in interstellar
  exploration. Fueled by the experimental Quasar Core Engine, the X-23
  achieves unparalleled speed and agility, complemented by a warp drive
  for instantaneous interstellar jumps.`,
  rarity: "rare",
  supply: "",
  minted: {
    productId: "",
    network_logo: LOGO_ETHEREUM,
    address: "0xA31A54e4C258B1BE8cE887a2724906BfCe88Cc6A",
    blockExplorer: "",
    network: "Ethereum", //might not needed here
    chainId: "",
    bgChain: "bg-white p-1 rounded-full",
    bgIcon: "bg-white p-1 rounded-full",
    bgToken: "bg-white rounded-full",
    // tokenId: '',
    // direct
    // wrapped
  },
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
    // this is main NFT network (minteded )
    address: "",
    network: "",
    // overlap_3d = false
    type: "image", //img | 3d mode | video
    assetUrl: "/shops/itemB.png", // portrait
    assetImage: "",
    classNameImage: " rounded-md object-cover",
    prices: [
      {
        isCrypto: true,
        chainId: "1",
        network: "ethereum",
        token: "ETH",
        currency: "ETH",
        symbol: "ETH",
        symbolUrl: LOGO_ETHEREUM,
        network_logo: LOGO_ETHEREUM,
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
      subtitle: "aptos",
    },
  ],
  listContents: [
    {
      type: "image", //3D | image | video
      url: "/shops/itemB.png",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/itemB.png",
    },
    {
      type: "image", //3D | image | video
      url: "/shops/itemB.png",
    },
  ],

  // auction: false, // direct
};

export const ALL_PRODUCTS = [
  NFT_STARSHIP_A,
  NFT_STARSHIP_B,
  NFT_STARSHIP_C,
  NFT_PASS,
  NFT_RANDOM,
];
export const MOCK_INVENTORY = [
  // APTOS
  NFT_STARSHIP_A,
  NFT_STARSHIP_B,
  NFT_STARSHIP_C,
  NFT_RANDOM,
  NFT_RANDOM,
  NFT_RANDOM,
  NFT_PASS,
  // ETH ?
  NFT_RANDOM_ETH,
  NFT_RANDOM_ETH,
];
export const MOCK_INVENTORY___A = [
  // APTOS
  NFT_STARSHIP_A,
  NFT_STARSHIP_B,
  NFT_STARSHIP_C,
  NFT_RANDOM,
  NFT_RANDOM,
  NFT_RANDOM,
  NFT_PASS,
];

//
export const MOCK_INVENTORY___B = [
  // APTOS
  NFT_STARSHIP_A,
  NFT_STARSHIP_C,
  NFT_RANDOM,
  NFT_RANDOM,
  NFT_PASS,
];

export const MOCK_INVENTORY__GOERLI__A = [
  // ETH ?
  NFT_RANDOM_ETH,
  NFT_RANDOM_ETH,
];
export const MOCK_INVENTORY__GOERLI__b = [
  // ETH ?
  NFT_RANDOM_ETH,
  NFT_RANDOM_ETH,
  NFT_RANDOM_ETH,
  NFT_RANDOM_ETH,
];

export const MOCK_ADDRESS_INVENTORY = [
  {
    address: "0xA31A54e4C258B1BE8cE887a2724906BfCe88Cc6A",
    provider: "evm",
    network: "chain 5",
    list: [...MOCK_INVENTORY__GOERLI__A],
  },
  {
    address: "0xA31A54e4C258B1BE8cE887a2724906BfCe88Cc6A",
    provider: "evm",
    network: "chain 11155111",
    list: [...MOCK_INVENTORY__GOERLI__b],
  },
  {
    address:
      "0xd475a64ba04ac64028c9b2c7ab61d68550a34062a579c89ffd331e7751cbfd4e",
    provider: "move",
    network: "aptos",
    list: [...MOCK_INVENTORY___A],
  },
  {
    address:
      "0xfa6a61337c14734fea3dbecd80b5a312d040b6ab2089315b4dbf8c06ccb3c4ba",
    provider: "move",
    network: "aptos",
    list: [...MOCK_INVENTORY___B],
  },
];
