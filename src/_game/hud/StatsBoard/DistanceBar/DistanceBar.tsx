import useStore from "@/_game/store";
import React, { useMemo } from "react";
import { useSpring, animated } from "@react-spring/web";

import useStatStore from "../store";
import { TOTAL_LENGTH_RACE } from "@/_game/system/gamestate";

export default function DistanceBar({}) {
  const { ship, speed } = useStore();
  const { speedScore, lineDistance } = useStatStore();

  // console.log(ship?.current?.position?.z);
  const positionZ = useMemo(
    () => Math.round(ship?.current?.position?.z),
    [ship?.current?.position?.z]
  );
  const percentage = Math.round((positionZ / TOTAL_LENGTH_RACE) * 100);
  const props = useSpring({ height: `${percentage}%` });

  return (
    <>
      <div className="w-3 h-100 bg-gray-700 flex items-end justify-center m-4 py-2">
        <div className="w-2 bg-black rotate-180" style={{ height: "100%" }}>
          <animated.div
            className="bg-orange-400 "
            style={{ height: props.height }}
          />
        </div>
      </div>
    </>
  );
}
