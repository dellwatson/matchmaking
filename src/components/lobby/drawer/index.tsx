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
import DrawerTailwind from "@/_ui/Drawer/DrawerTailwind";
export default function Drawer({ direction = "left" }) {
  const [open, set] = useState(false);

  return (
    <div>
      <div className="cursor-pointer p-2" onClick={() => set((open) => !open)}>
        <RxHamburgerMenu size={24} />
      </div>
      <DrawerTailwind {...{ open, set }}>
        <div className="md:hidden">
          {DATA_NAVBAR.map((item, i) => (
            <DrawerItem key={i} />
          ))}
        </div>
        {DATA_NAVBAR.map((item, i) => (
          <DrawerItem key={i} />
        ))}
      </DrawerTailwind>
    </div>
  );
}

const DrawerItem = () => {
  return <div>item</div>;
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
  {
    name: "Inbox",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
  },
  {
    name: "Friends",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 400,
  },
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
