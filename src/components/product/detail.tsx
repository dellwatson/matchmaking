import {
  Title,
  Subtitle,
  Paragraph,
  Caption,
  Heading,
  Accent,
  Overline,
  Label,
} from "@/_ui/Typography";
import NetworkSelect from "@/_ui/select/NetworkSelect";
import { shortenEthAddress } from "@/utils/ethaddress";
import { PurchaseOptions } from "./modal-detail-item";
import Rarity from "@/_ui/utils/Rarity";
import InfoNetwork from "./info-network";
import ProgressBar from "@/_ui/utils/ProgressBar";
import IconBox from "@/_ui/Box/IconBox";
import { Button } from "@/stories/ui/Button/Button";
import { useState } from "react";
import BlockTitle from "@/_ui/block/BlockTitle";
import ListPayment from "@/_ui/Payment/ListPayment";
// import React from "react";

// SHOP
// AND INVENTORY DIFFERENCE

export default function DetailProduct({ data = {}, page = "inventory" }) {
  const isInventory = page === "inventory";
  // page
  return (
    <div className="  border-red-500 bg-slate-900 pt-6  ">
      <div
        className={`overflow-scroll grid ${
          !isInventory && `xl:grid-cols-2`
        }  px-8 h-full xl:my-6 `}>
        <div className="col-span-1">
          <VisualContent data={data} />
        </div>

        <div className="col-span-1 ">
          <AssetContent data={data} page={page} />
        </div>
      </div>
    </div>
  );
}

// can detect 3d or image or video
const VisualContent = ({ data }) => {
  return (
    <>
      <div className="text-center">
        <Subtitle className="tracking-[10px] ">SHIP</Subtitle>
        <Title className="text-gray-500 my-2 mb-6">Armstring IMP Tap</Title>
        <Rarity className="bg-transparent mb-10 uppercase" />
      </div>

      {/* 3d will take all view */}
      <div className="w-full  xl:h-[500px] h-[400px] md:p-8 md:px-10 p-4">
        <div className=" bg-black h-full w-full"></div>
        {/* <img src={data?.imageUrl} className="object-cover w-full h-full" /> */}
      </div>

      <div className="flex overflow-x-auto   xl:px-8 px-4 pb-2">
        {[1, 1, 1].map((item, i) => (
          <div className="flex-shrink-0  bg-black w-32 h-20  rounded-md mr-2 ">
            <div src={item} className="object-cover w-full h-full " />
          </div>
        ))}

        {/* {data && data?.allImages.map((item, i) => (
            <div className="bg-black w-14 h-14 mr-4">
              <img src={item} className="object-cover w-full h-full" />
            </div>
          ))} */}
      </div>
      <div className="mt-12 mr-8  xl:px-8 px-4 pb-2">
        <Description {...{ data }} />
        <Traits {...{ data }} />
      </div>
    </>
  );
};

const AssetContent = ({ data }) => {
  // load inventory/shop here
  const [tab, setTab] = useState(0);

  return (
    <div className="px-4 pb-40">
      <NetworkTabs
        // selected
        {...{
          tab,
          setTab,
        }}
      />
      {/*  */}
      <ListPayment
        {...{
          tab,
        }}
      />
      <InventorySection />
      <Offers />
      <Listing />

      {/* ability slots --- */}
      {/* auctions */}
      {/* traits */}
    </div>
  );
};

const InventorySection = () => {
  //
  return (
    <div className="mt-12">
      <div className="grid xl:grid-cols-2 !uppercase gap-5 mb-12">
        <button className="w-full p-4 bg-green-600 rounded-md uppercase font-medium">
          Equipped
        </button>
        <button
          disabled
          className="!cursor-not-allowed w-full p-4 bg-blue-600 rounded-md uppercase font-medium">
          create order
        </button>
        <button
          disabled
          className="!cursor-not-allowed w-full p-4 bg-gray-600 rounded-md uppercase font-medium">
          Craft
        </button>
      </div>
      {/* <div>button here</div> */}
      <BlockTitle title="progress" variant="progress" />

      {/* progress */}
      <ProgressAsset />
    </div>
  );
};
const ProgressAsset = () => {
  return (
    // <div className="flex w-full justify-center items-center min-h-60 bg-[#111322] rounded-md mt-2">
    <div className="flex w-full justify-center items-center min-h-90 border border-gray-700 rounded-md mt-2">
      <span className="uppercase text-xs">No Progress</span>
    </div>
  );
};

const NetworkTabs = ({ tab, setTab }) => {
  //load traits
  return (
    <>
      <BlockTitle title="network chain" />

      <div className="grid grid-cols-2 gap-6 ">
        {/* load up to four */}
        {PAYMENT_OPTIONS.map((item, i) => (
          <div className="col-span-1 ">
            <IconBox
              {...item}
              hasBorder={tab === i}
              onClick={() => setTab(i)}
            />
          </div>
        ))}
      </div>
      {/* load the rest here*/}

      {/* <div className="mt-4 flex gap-4">
        <TraitBox />
        <TraitBox />
        <TraitBox />
        <TraitBox />
      </div> */}
    </>
  );
};

// MODAL PAYMENT -> supply/quantity -> native with approve or visa

const Description = ({ data }) => {
  return (
    <>
      <BlockTitle title="description" className="mt-12" variant="desc" />
      <Paragraph className="text-gray-300 my-8 font-medium ">
        {/* {data?.description} */}
        The X-23 Starblaze Prototype, a pioneering spacecraft engineered by
        Horizon Dynamics Corporation, epitomizes innovation in interstellar
        exploration. Fueled by the experimental Quasar Core Engine, the X-23
        achieves unparalleled speed and agility, complemented by a warp drive
        for instantaneous interstellar jumps.
      </Paragraph>
    </>
  );
};

// // details
const Traits = ({ data }) => {
  return (
    <>
      <BlockTitle title="traits" className="mt-12" variant="detail" />
      <div className="grid grid-cols-3 my-8">
        {[
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
        ].map((item, i) => (
          <BlockTrait key={i} {...item} />
        ))}
      </div>
    </>
  );
};

const BlockTrait = ({ title = "", subtitle = "", ...props }) => {
  return (
    <div className="mb-8">
      <Label className="text-gray-400 uppercase tracking-wide">{title}</Label>
      <Subtitle className="font-medium ">{subtitle}</Subtitle>
    </div>
  );
};

const Offers = ({ data }) => {
  return (
    <>
      <BlockTitle title="Offers" className="mt-12" variant="offers" />
      {/* <div className="flex w-full justify-center items-center min-h-32 bg-[#111322] rounded-md mt-2"> */}
      <div className="flex w-full justify-center items-center min-h-32 border border-gray-700 rounded-md mt-2">
        <span className="uppercase text-xs">No Offers yet</span>
      </div>
    </>
  );
};
const Listing = ({ data }) => {
  return (
    <>
      <BlockTitle title="listing" className="mt-12" variant="listings" />

      {/* <div className="flex w-full justify-center items-center min-h-32 bg-[#111322] rounded-md mt-2"> */}
      <div className="flex w-full justify-center items-center min-h-32 border border-gray-700 rounded-md mt-2">
        <span className="uppercase text-xs">No listing yet</span>
      </div>
    </>
  );
};

// progress
// staking
// stats
//

// https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=029
// https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029
// https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=029
// usdt, usdc, eth,
// visa, gpay
// bnb
// TGEM ?

export const PAYMENT_OPTIONS = [
  {
    network: "ethereum",
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
      {
        isCrypto: false,
        chain: "1",
        network: "ethereum",
        network_logo:
          "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
        token: "visa",
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
        type: "custody", //wrapped //custody
      },
      {
        isCrypto: false,
        chain: "1",
        network: "ethereum",
        network_logo:
          "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
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
        type: "custody", //wrapped //custody
      },
      // {
      //   isCrypto: false,
      //   payment_type: "paypal",
      //   chain: "1",
      //   network: "ethereum",
      //   network_logo:
      //     "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
      //   token: "gpay",
      //   currency: "usd",
      //   symbol: "$",
      //   symbolUrl: "/logo/paypal.svg",
      //   paymentImage: "/logo/paypal.svg",
      //   supply: "100",
      //   price: "30",
      //   usdPrice: "",
      //   address: "",
      //   isNative: false,
      //   fee: "",
      //   archived: false,
      //   hidden: false,
      //   disable: false,
      //   type: "custody", //wrapped //custody
      // },
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
  {
    network: "Aptos",
    network_logo: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=029",
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
        type: "direct", //wrapped //custody
      },
      {
        isCrypto: false,
        chain: "1",
        network: "ethereum",
        token: "visa",
        currency: "usd",
        symbol: "$",
        symbolUrl: "./logo/visa_logo.svg",
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
      },
      {
        isCrypto: false,
        chain: "1",
        network: "ethereum",
        token: "gpay",
        currency: "usd",
        symbol: "$",
        symbolUrl: "./logo/google-pay.svg",
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
      },
    ],
  },
];

const MOCK_PAYMENTS = [
  {
    isCrypto: true,
    chain: "1",
    network: "ethereum",
    networkLogo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=029",
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
  {
    isCrypto: true,

    chain: "1",
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
    type: "direct", //wrapped //custody
  },
  {
    isCrypto: false,
    chain: "1",
    network: "ethereum",
    token: "visa",
    currency: "usd",
    symbol: "$",
    symbolUrl: "./logo/visa_logo.svg",
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
  },
  {
    isCrypto: false,
    chain: "1",
    network: "ethereum",
    token: "gpay",
    currency: "usd",
    symbol: "$",
    symbolUrl: "./logo/google-pay.svg",
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
  },
];

// {
//   "properties": {
//     "ID": "unique_identifier",
//     "Name": "spaceship_name",
//     "Tier": "rarity_tier",
//     "Durability": "integer",
//     "AccelerationRate": "float",
//     "TopSpeed": "float",
//     "Maneuverability": "float",
//     "EnergyEfficiency": "float",
//     "ShieldStrength": "integer",
//     "WeaponPower": "integer",
//     "CargoCapacity": "integer",
//     "ScavengingAbility": "float",
//     "RepairmentRate": "float",
//     "NitroBoost": "float",
//     "NitroCooldown": "integer",
//     "SensorRange": "float",
//     "StealthMode": "boolean",
//     "EvasiveManeuvers": "boolean",
//     "AllTerrainAdaptation": "boolean",
//     "ResourceMagnetism": "boolean",
//     "RepairDrone": "boolean",
//     "EmergencyTeleport": "boolean",
//     "EnvironmentalResistance": "float"
//   }
// }
