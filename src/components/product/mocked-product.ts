import MockImg from "@assets/mock/ship2.png";
import MockImg2 from "@assets/mock/ship1.png";
import MockImg3 from "@assets/mock/ship3.png";
import MockImg4 from "@assets/mock/ship4.png";
import MockDefault from "@assets/mock/default_ship.png";
import MockTicket from "@assets/mock/ticket.svg";
import MockPass from "@assets/svg/lobby/ticket-icon.svg";
import {
  ASSET_NFT,
  PASS_NFT,
  SHIP_NFT,
  TICKET_NFT,
  getContractAddress,
} from "@/web3/contract-list";

// /replace with data from nfts
export const mocked_data = [
  {
    title: "The X-23 Starblaze Prototype",
    category: "ship",
    address: getContractAddress(SHIP_NFT),
    contract_type: SHIP_NFT,

    stats: true,
    type: "xs",
    rarity: "common-test",
    stakeable: true,
    description:
      "The X-23 Starblaze Prototype, a pioneering spacecraft engineered by Horizon Dynamics Corporation, epitomizes innovation in interstellar exploration. Fueled by the experimental Quasar Core Engine, the X-23 achieves unparalleled speed and agility, complemented by a warp drive for instantaneous interstellar jumps. ",
    totalSupply: 200,
    imageUrl: MockImg,
    modelUrl: "",
    videoUrl: "",
    allImages: [MockImg, MockImg2, MockImg3, MockImg4],
    tags: [],
    price: [
      {
        payment_token: "GEMS",
        price: 25000,
        network: "",
      },
    ],
    detail: {},
    creator: {
      title: "",
      time: "",
    },
    traits: [
      {
        title: "creator",
        value: "TheMuffinCoder",
      },
      {
        title: "model",
        value: "prototype",
      },
      {
        title: "rarity",
        value: "common",
      },
      {
        title: "spec",
        value: "racer",
      },
      {
        title: "class",
        value: "small",
      },
      // {
      //   title: "width",
      //   value: "",
      // },
      // {
      //   title: "height",
      //   value: "",
      // },
      // {
      //   title: "length",
      //   value: "",
      // },
      {
        title: "category",
        value: "old junk",
      },
    ],
    stats: {
      make: "test",
      model: "prototype",
      rarity: "common",
      spec: "racer",
      class: "small",
      width: "",
      height: "",
      length: "",
      category: "old junk",
    },
  },
];
export const mocked_default = [
  {
    title: "The Celestial Pioneer",
    category: "ship",
    address: "0x0000000000000000000000000000000000000000",
    type: "xs",
    rarity: "common",
    stats: true,
    stakeable: true,
    contract_type: SHIP_NFT,
    description:
      "Powered by the revolutionary Nova Drive, this prototype ship leverages quantum propulsion, allowing for unprecedented speed and efficiency in traversing the cosmos. With an intuitive command interface and modular design, the Celestial Pioneer stands ready for founder-prototype testing, promising a new era of space exploration under the guidance of its visionary creator.",
    totalSupply: "∞",
    imageUrl: MockDefault,
    modelUrl: "",
    videoUrl: "",
    allImages: [MockDefault, MockDefault, MockDefault, MockDefault],
    tags: [],
    price: [
      // {
      //   payment_token: "GEMS",
      //   price: 30,
      //   network: "",
      // },
    ],
    detail: {},
    creator: {
      title: "",
      time: "",
    },
    traits: [
      {
        title: "creator",
        value: "unknown",
      },
      {
        title: "model",
        value: "prototype",
      },
      {
        title: "rarity",
        value: "common",
      },
      {
        title: "spec",
        value: "racer",
      },
      {
        title: "class",
        value: "small",
      },
      // {
      //   title: "width",
      //   value: "",
      // },
      // {
      //   title: "height",
      //   value: "",
      // },
      // {
      //   title: "length",
      //   value: "",
      // },
      {
        title: "category",
        value: "default junk",
      },
    ],
  },
];
export const mocked_ticket = [
  {
    title: "Stellar Realm Ticket",
    category: "consumption",
    address: getContractAddress(TICKET_NFT),
    contract_type: TICKET_NFT,

    type: "xs",
    rarity: "common",
    description: `Embark on an extraordinary journey with our NFT Tickets! Each ticket grants access to a parallel dimension in space, offering a unique terrain filled with rare items, materials, and blueprints scattered throughout. Dare to explore, as the challenges and rewards in this alternate location promise an unparalleled gaming experience. Secure your ticket, traverse the cosmic realms, and unearth the hidden treasures of the universe.`,
    totalSupply: "∞",
    imageUrl: MockTicket,
    modelUrl: "",
    videoUrl: "",
    allImages: [MockTicket, MockTicket, MockTicket],
    tags: [],
    price: [
      {
        payment_token: "GEMS",
        price: 1000,
        network: "",
      },
    ],
    detail: {},
    creator: {
      title: "",
      time: "",
    },
    traits: [
      {
        title: "creator",
        value: "unknown",
      },
      {
        title: "model",
        value: "prototype",
      },
      {
        title: "rarity",
        value: "common",
      },
      {
        title: "dimension",
        value: "STELLAR",
      },
    ],
  },
];

export const mocked_pass = [
  {
    title: "Season Pass",
    category: "tools",
    address: getContractAddress(PASS_NFT),
    contract_type: PASS_NFT,
    locked: false,
    type: "pass",
    rarity: "common",
    description: `Unlock boundless adventures with our exclusive NFT Season Pass! Valid for one month, this pass grants you unrestricted access to dimension space without the need for tickets. Every match within this celestial realm brings the chance to discover rare drop items, enhancing your gameplay and elevating your cosmic journey. Seize the opportunity to maximize your exploration, as each passing season promises fresh challenges and valuable rewards. Your ticket to limitless exploration awaits with the NFT Season Pass!`,
    totalSupply: "∞",
    imageUrl: MockPass,
    modelUrl: "",
    videoUrl: "",
    allImages: [MockPass, MockPass, MockPass],
    tags: [],
    price: [
      {
        payment_token: "GEMS",
        price: 10000,
        network: "",
      },
    ],
    detail: {},
    creator: {
      title: "",
      time: "",
    },
    traits: [
      {
        title: "creator",
        value: "unknown",
      },
      {
        title: "model",
        value: "prototype",
      },
    ],
  },
];

export const mocked_ammo = [
  {
    title: "Ammo",
    category: "consumption",
    locked: true,
    contract_type: ASSET_NFT,
    address: getContractAddress(),
    type: "xs",
    rarity: "common",
    description:
      "Powered by the revolutionary Nova Drive, this prototype ship leverages quantum propulsion, allowing for unprecedented speed and efficiency in traversing the cosmos. With an intuitive command interface and modular design, the Celestial Pioneer stands ready for founder-prototype testing, promising a new era of space exploration under the guidance of its visionary creator.",
    totalSupply: "∞",
    imageUrl: MockDefault,
    modelUrl: "",
    videoUrl: "",
    allImages: [MockDefault, MockDefault, MockDefault, MockDefault],
    tags: [],
    price: [
      // {
      //   payment_token: "GEMS",
      //   price: 30,
      //   network: "",
      // },
    ],
    detail: {},
    creator: {
      title: "",
      time: "",
    },
    traits: [
      {
        title: "creator",
        value: "unknown",
      },
      {
        title: "model",
        value: "prototype",
      },
      {
        title: "rarity",
        value: "common",
      },
      {
        title: "spec",
        value: "racer",
      },
      {
        title: "class",
        value: "small",
      },
      // {
      //   title: "width",
      //   value: "",
      // },
      // {
      //   title: "height",
      //   value: "",
      // },
      // {
      //   title: "length",
      //   value: "",
      // },
      {
        title: "category",
        value: "default junk",
      },
    ],
  },
];
export const mocked_energy = [
  {
    title: "Energy",
    category: "consumption",
    contract_type: ASSET_NFT,

    locked: true,
    address: getContractAddress(),
    type: "xs",
    rarity: "common",
    description:
      "Powered by the revolutionary Nova Drive, this prototype ship leverages quantum propulsion, allowing for unprecedented speed and efficiency in traversing the cosmos. With an intuitive command interface and modular design, the Celestial Pioneer stands ready for founder-prototype testing, promising a new era of space exploration under the guidance of its visionary creator.",
    totalSupply: "∞",
    imageUrl: MockDefault,
    modelUrl: "",
    videoUrl: "",
    allImages: [MockDefault, MockDefault, MockDefault, MockDefault],
    tags: [],
    price: [
      // {
      //   payment_token: "GEMS",
      //   price: 30,
      //   network: "",
      // },
    ],
    detail: {},
    creator: {
      title: "",
      time: "",
    },
    traits: [
      {
        title: "creator",
        value: "unknown",
      },
      {
        title: "model",
        value: "prototype",
      },
      {
        title: "rarity",
        value: "common",
      },
      {
        title: "spec",
        value: "racer",
      },
      {
        title: "class",
        value: "small",
      },
      // {
      //   title: "width",
      //   value: "",
      // },
      // {
      //   title: "height",
      //   value: "",
      // },
      // {
      //   title: "length",
      //   value: "",
      // },
      {
        title: "category",
        value: "default junk",
      },
    ],
  },
];
