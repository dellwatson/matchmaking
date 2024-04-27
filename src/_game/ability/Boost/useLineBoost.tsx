import usePathStore from "@/_game/celestial/Path/store";
import useStore, { playAudio, audio } from "@/_game/store";
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
    superBoost,
    boostBars,
  } = useBoostStore();

  const audioPlayingRef = useRef(false); // Ref to track if audio is already playing

  useEffect(() => {
    // Only start the audio if it's not already playing and chargeProgress is greater than 0
    if (boostBars !== 3 && !audioPlayingRef.current) {
      console.log("Charge in progress - play sound");
      playAudio(audio.boost_charging, 0.5, true); // Assuming you want the sound to loop
      audioPlayingRef.current = true; // Set ref to true indicating audio is playing
    } else if (chargeProgress === 0 && audioPlayingRef.current) {
      console.log("Charge stopped - pause sound");
      audio.boost_charging.pause();
      audio.boost_charging.currentTime = 0; // Reset the time
      audioPlayingRef.current = false; // Set ref to false indicating audio is stopped
    }
  }, [chargeProgress]); // Depend on chargeProgress

  useEffect(() => {
    // Only start the audio if it's not already playing and chargeProgress is greater than 0
    if (superBoost) {
      playAudio(audio.warp); // Assuming you want the sound to loop
    }
  }, [superBoost]); // Depend on chargeProgress

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
          const progress = Math.min(100, (elapsed / 3000) * 100); // Convert time to progress percentage
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
