import { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import { RxHamburgerMenu } from "react-icons/rx";
import { toast } from "react-toastify";

import styles from "./styles.module.scss";
import DrawerTailwind from "@theras_labs/ui/src/Drawer/DrawerTailwind";
import { Link } from "react-router-dom";
import { TitlePage } from "../interfaces/LobbyTop";
import { Title } from "@theras_labs/ui/src/Typography";
export default function Drawer({ direction = "left" }) {
  const [open, set] = useState(false);

  return (
    <div>
      <div className="cursor-pointer p-2" onClick={() => set((open) => !open)}>
        <RxHamburgerMenu size={24} />
      </div>
      <DrawerTailwind {...{ open, set }}>
        {/* <div className="md:hidden">
          {DATA_NAVBAR.map((item, i) => (
            <DrawerItem key={i} {...item} />
          ))}
        </div> */}
        <div className="-mt-4 mb-8">
          <Link to="/">
            <Title className="uppercase tracking-[10px] !font-thin">{`STAR-EX`}</Title>
          </Link>
        </div>

        {DATA_NAVBAR.map((item, i) => (
          <DrawerItem key={i} {...item} />
        ))}
      </DrawerTailwind>
    </div>
  );
}

const DrawerItem = (props) => {
  // navigation
  // disabled
  if (props?.enable) {
    return (
      <Link className="my-2" to={props?.path}>
        <div className="p-5 my-2 border font-bold border-gray-600 rounded-md text-white hover:bg-slate-800 uppercase">
          {props?.name}
        </div>
      </Link>
    );
  } else {
    return (
      <div className="p-5 my-2 border font-bold border-gray-600 rounded-md text-white bg-gray-900 opacity-50  uppercase cursor-not-allowed">
        {props?.name}
      </div>
    );
  }
};

// Gradients taken from: https://webgradients.com/
export const DATA_NAVBAR = [
  {
    name: "GAMEBOOK",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 200,
  },
  {
    name: "SHOP",
    path: "/shop",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 200,
    enable: true,
  },
  {
    name: "INVENTORY",
    path: "/inventory",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 200,
    enable: true,
  },
  {
    name: "Claim",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
    // enable: true,
  },
  {
    name: "CRAFTING",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 200,
    // enable: true,
  },

  {
    name: "Battle Log",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
  },

  {
    name: "Leaderboard",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
  },
  // {
  //   name: "Inbox",
  //   description: "#f5f7fa → #c3cfe2",
  //   css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  //   height: 400,
  // },
  // {
  //   name: "Friends",
  //   description: "#f5f7fa → #c3cfe2",
  //   css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  //   height: 400,
  // },
  {
    name: "DAO Mapmaker",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
  },
  {
    name: "DAO Guilds",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
  },
  {
    name: "Social NFT",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
  },
];
