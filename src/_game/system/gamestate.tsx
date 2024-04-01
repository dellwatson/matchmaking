import React, { useEffect, useRef } from "react";
import useStore, { mutation } from "../store";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Gamestate() {
  const ship = useStore((s) => s?.ship);
  const SPEED = useStore((s) => s?.speed);
  const increaseSpeed = useStore((s) => s?.increaseSpeed);
  // level
  // abilities
  // gamestart
  // useEffect
  // const speedRef = useRef(200); // Initial speed

  // useFrame((state, delta) => {
  //   if (ship.current) {
  //     // sets the score counter in the hud
  //     // mutation.score = Math.abs(ship.current.position.z) - 10;
  //     // // optimization, instead of calculating this for all elements we do it once per frame here
  //     // mutation.shouldShiftItems =
  //     //   ship.current.position.z < -400 &&
  //     //   ship.current.position.z < mutation.currentLevelLength - 400 &&
  //     //   ship.current.position.z > mutation.currentLevelLength - 1000;
  //     // ship.current.position.z -= 10 * delta;

  //     // Calculate the ship's movement distance in this frame
  //     const movementDistance = SPEED * delta;

  //     // Update the ship's position based on the movement distance
  //     ship.current.position.z += movementDistance;
  //     increaseSpeed(SPEED + 0.0008);

  //     // console.log(SPEED, "SPEED");
  //     // console.log(movementDistance, "Movement Distance");
  //   }
  // });

  useFrame((_, delta) => {
    if (ship.current) {
      // Desired position based on speed and delta
      const targetZ = ship.current.position.z + SPEED * delta;

      // Use lerp to smoothly transition the ship to the target position
      ship.current.position.z = THREE.MathUtils.lerp(
        ship.current.position.z,
        targetZ,
        0.51
      ); // Adjust the 0.1 factor as needed

      // Gradually increase speed to simulate acceleration
      // increaseSpeed(SPEED + 0.008);
      // increaseSpeed(SPEED + 0.008);
    }
  });

  return null;

  //
}
