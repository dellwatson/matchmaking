import React, { useEffect } from "react";
import useStore, { mutation } from "./store";
import { useFrame } from "@react-three/fiber";

export default function Gamestate() {
  const ship = useStore((s) => s?.ship);
  // level
  // abilities
  // gamestart
  // useEffect

  useFrame((state, delta) => {
    if (ship.current) {
      // sets the score counter in the hud
      // mutation.score = Math.abs(ship.current.position.z) - 10;
      // // optimization, instead of calculating this for all elements we do it once per frame here
      // mutation.shouldShiftItems =
      //   ship.current.position.z < -400 &&
      //   ship.current.position.z < mutation.currentLevelLength - 400 &&
      //   ship.current.position.z > mutation.currentLevelLength - 1000;
      // ship.current.position.z -= 10 * delta;
      //
      ship.current.position.z += 200 * delta;

      // ship.current.position.z += 0.1 * delta;
    }
  });

  return <></>;
}
