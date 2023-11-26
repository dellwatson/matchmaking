import React from "react";
import Card from "../_ui/card";
import MockImg from "@assets/mock/ship2.png";
import MockImg2 from "@assets/mock/ship1.png";
import MockImg3 from "@assets/mock/ship3.png";
import MockImg4 from "@assets/mock/ship4.png";
import MockDefault from "@assets/mock/default_ship.png";
// type or channel: ship | tools | abilities | resources
export default function CardList({ page = "inventory" }) {
  const DATA =
    page === "inventory" ? [...mocked_default, ...mocked_data] : mocked_data;
  return (
    <div className=" grid xl:grid-cols-4  md:grid-cols-3  xl:gap-4 ">
      {DATA?.map((item, i) => (
        <Card {...{ item, page }} key={i} />
      ))}
    </div>
  );
}

// /replace with data from nfts
const mocked_data = [
  {
    title: "The X-23 Starblaze Prototype",
    category: "ship",
    type: "xs",
    rarity: "common-test",
    description:
      "The X-23 Starblaze Prototype, a pioneering spacecraft engineered by Horizon Dynamics Corporation, epitomizes innovation in interstellar exploration. Fueled by the experimental Quasar Core Engine, the X-23 achieves unparalleled speed and agility, complemented by a warp drive for instantaneous interstellar jumps. ",
    totalSupply: 20,
    imageUrl: MockImg,
    modelUrl: "",
    videoUrl: "",
    allImages: [MockImg, MockImg2, MockImg3, MockImg4],
    tags: [],
    price: [
      {
        payment_token: "GEMS",
        price: 30,
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
const mocked_default = [
  {
    title: "The Celestial Pioneer",
    category: "ship",
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
