import React from "react";
// import { useSpring, animated } from "react-spring";
import { useSpring, animated } from "@react-spring/web";

import useMeasure from "react-use-measure";
// import useBoostStore from "./pathToBoostStore"; // Adjust the path as necessary
import styles from "./boostbar.module.css"; // Ensure your CSS module is correctly imported
import useBoostStore from "@/_game/ability/Boost/store";

export default function BoostBar() {
  const [ref, { width }] = useMeasure(); // Measure the width of the container
  const boostBars = useBoostStore((state) => state.boostBars);
  const chargeProgress = useBoostStore((state) => state.chargeProgress); // Get chargeProgress from Zustand

  // Calculate the animated width based on chargeProgress for the current bar
  // When boostBars is 3, keep the width at 100% of the container
  const maxBars = 3; // Maximum number of boost bars
  let animatedWidth = (width * chargeProgress) / 100;

  // If the number of boost bars is at maximum, keep the width at 100%
  if (boostBars === maxBars) {
    animatedWidth = width; // Full width of the container
  }
  const props = useSpring({ width: animatedWidth });

  return (
    <div>
      <div className="flex w-full">
        {[1, 1, 1].map((item, i) => (
          <div
            key={i}
            className={`h-2 w-full border-2 border-[#272727] ${
              i < boostBars ? "bg-green-200" : "bg-whited"
            }`}
          />
        ))}
      </div>
      <div className={styles.container}>
        <div ref={ref} className={styles.main}>
          <animated.div className={styles.fill} style={props} />
          <animated.div className={styles.content}>
            {/* BOOST */}
            {/* {boostBars} Bar(s), {Math.round(chargeProgress)}% Filled */}
          </animated.div>
        </div>
      </div>
    </div>
  );
}
