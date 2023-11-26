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

import styles from "./styles.module.scss";
export default function Drawer({ direction = "left" }) {
  const [open, set] = useState(false);

  const springApi = useSpringRef();

  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: "20%",
      translateX: "100%",
      opacity: 0,
    },
    to: {
      size: open ? "100%" : "20%",
      translateX: open ? "-80%" : "100%",
      opacity: open ? 1 : 0,
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div>
      <div className="cursor-pointer p-2" onClick={() => set((open) => !open)}>
        <RxHamburgerMenu size={24} />
      </div>

      <animated.div
        className={`absolute min-w-[400px] bg-gray-800 pr-6`}
        style={{
          ...rest,
          height: window?.innerHeight,
          marginTop: -55,
          zIndex: -1,
          paddingTop: 60,
        }}
        // className={styles.container}
      >
        <div className="m-2">*note: navbar is under development</div>

        {transition((style, item, I) => {
          console.log(style, item, "HUH", I);
          return (
            <animated.div
              // className={styles.item}
              className={`m-2 bg-black p-6 uppercase font-bold cursor-pointer`}
              style={{ ...style }}
            >
              {item?.name}
            </animated.div>
          );
        })}
      </animated.div>
    </div>
  );
}

// Gradients taken from: https://webgradients.com/
export const data = [
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
