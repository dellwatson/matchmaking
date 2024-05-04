import React, { useEffect, useRef } from "react";
import useStore, { mutation } from "../store";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useBoostStore from "../ability/Boost/store";
import useMatchmaking from "@/helpers/hooks/useMatchmaking";
import useStatStore from "../hud/StatsBoard/store";
import usePathStore from "../celestial/Path/store";

export const TOTAL_LENGTH_RACE = 40000;

export default function Gamestate() {
  const ship = useStore((s) => s?.ship);
  const SPEED = useStore((s) => s?.speed);
  const { setGameOver, crashes, setStartTime, game_over } = useStore();
  const increaseSpeed = useStore((s) => s?.increaseSpeed);

  const { setSpeedScore } = useStatStore();

  const { superBoost } = useBoostStore();
  const BOOST_SPEED = SPEED * 1.4;
  const CURRENT_SPEED = superBoost ? BOOST_SPEED : SPEED;
  const { stage } = useMatchmaking();
  // console.log("gamestate on GAME", stage);

  useEffect(() => {
    // if (stage === "playing" || SPEED > 0) {
    // Set start time when stage is "playing" or speed is set
    if (!game_over) {
      setStartTime(Date.now());
    }
    // }
  }, []);

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

  // SET TIME LIMIT ->
  // if obstracle more than 10 + -> end game
  // if far more than distance 1000 ->
  //

  // multiplayerState
  // setState() //speed now
  //

  useFrame((_, delta) => {
    // music?
    // engine start
    //

    if (ship.current) {
      //------ gameover ------
      //
      //
      if (ship.current.position.z > TOTAL_LENGTH_RACE) {
        // should give finish line
        // finish -> sound
        setGameOver(true);
        //update supabase data
      }

      // crashes too many
      if (crashes > 20) {
        setGameOver(true);
      }

      //------ speed ------
      //
      //
      // Desired position based on speed and delta
      const targetZ = ship.current.position.z + CURRENT_SPEED * delta;
      setSpeedScore(CURRENT_SPEED * delta);

      // if (stage === "playing") {
      // Use lerp to smoothly transition the ship to the target position
      ship.current.position.z = THREE.MathUtils.lerp(
        ship.current.position.z,
        targetZ,
        0.51
      ); // Adjust the 0.1 factor as needed
      // }

      // distance on progress update

      // Gradually increase speed to simulate acceleration
      // increaseSpeed(SPEED + 0.008);
      // increaseSpeed(SPEED + 0.008);
    }
  });

  return null;
  //
}
