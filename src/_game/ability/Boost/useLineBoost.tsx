import usePathStore from "@/_game/celestial/Path/store";
import useStore from "@/_game/store";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import useBoostStore from "./store";

export default function useLineBoost() {
  // playerRef
  //
  const playerRef = useStore((state) => state?.ship);
  const chargeRef = useRef(null);
  const chargeStartTime = useRef(null); // To track when charging started
  const { points, getPlayerDistanceToPath } = usePathStore();
  const {
    increaseBoostBars,
    activateSuperBoost,
    deactivateSuperBoost,
    setChargeProgress,
    boostActive,
    chargeProgress,
  } = useBoostStore();

  useFrame(() => {
    if (!playerRef.current && Number(chargeProgress)) return;

    const playerPosition = playerRef.current.position;
    const currentDistance = getPlayerDistanceToPath(
      [playerPosition.x, playerPosition.y, playerPosition.z],
      points
    );

    // Charge boost bars if within range
    if (currentDistance > 1 && currentDistance <= 100) {
      if (!chargeRef.current) {
        chargeStartTime.current = Date.now();
        chargeRef.current = setInterval(() => {
          const elapsed = Date.now() - chargeStartTime.current;
          const progress = Math.min(100, (elapsed / 5000) * 100); // Convert time to progress percentage
          setChargeProgress(progress);
          if (progress >= 100) {
            increaseBoostBars();
            clearInterval(chargeRef.current);
            chargeRef.current = null;
            chargeStartTime.current = null;
          }
        }, 100); // Update progress every 100ms
      }
    } else {
      if (chargeRef.current) {
        clearInterval(chargeRef.current);
        chargeRef.current = null;
        chargeStartTime.current = null;
        setChargeProgress(0); // Reset progress if out of charge range
      }
    }

    // Manage Super Boost on proximity
    if (currentDistance === 0 && !boostActive) {
      activateSuperBoost();
      setTimeout(deactivateSuperBoost, 200); // Activate super boost for 200ms
    }
  });

  // function handleLineBoost() {
  //   const { useBoost, boostBars } = useBoostStore.getState();
  //   if (boostBars > 0) {
  //     useBoost();
  //     // Logic to apply the boost effect
  //     console.log("Boost activated for 3 seconds!");
  //     setTimeout(() => {
  //       console.log("Boost ended.");
  //     }, 3000); // Boost lasts for 3 seconds
  //   }
  // }

  // return {
  //   handleLineBoost,
  // };
}
