import React, { useRef, useEffect } from "react";
import useStore, { mutation } from "../store";
import { useFrame } from "@react-three/fiber";
import controlStore from "../hud/controller/control-store";

const MAX_FLIP = 0.5;
// utils define -> left and right, or axis
// speed momentum -> can be from ship metadata
//  number of momentum
// should be instance of camera and controls? because left, right is being used for camera too?

//
export default function Movement() {
  // subscribe to controller updates on mount
  const ship = useStore((s) => s.ship);
  const speed = useStore((s) => s.speed);
  const controls = controlStore((s) => s.controls);
  const controlsRef = useRef(controls);

  useEffect(
    () =>
      controlStore.subscribe(
        (controls) => (controlsRef.current = controls),
        (state) => state.controls
      ),
    []
  );

  useFrame((state, delta) => {
    if (controlsRef.current?.controls) {
      const { left, right, up, down } = controlsRef.current?.controls;
      const accelDelta = 1 * delta * 2;
      // const accelDelta = speed;

      // // this will reset back to original position
      // if ((left && right) || (!left && !right)) {

      //   if (mutation.horizontalVelocity < 0) {
      //     if (mutation.horizontalVelocity + accelDelta > 0) {
      //       mutation.horizontalVelocity = 0;
      //     } else {
      //       mutation.horizontalVelocity += accelDelta;
      //     }
      //   }
      //   if (mutation.horizontalVelocity > 0) {
      //     if (mutation.horizontalVelocity - accelDelta < 0) {
      //       mutation.horizontalVelocity = 0;
      //     } else {
      //       mutation.horizontalVelocity -= accelDelta;
      //     }
      //   }
      // }

      // Lateral Movement
      if (mutation.gameOver) {
        mutation.horizontalVelocity = 0;
        mutation.verticalVelocity = 0;
      }

      // this is the speed of momentum
      ship.current.position.x += mutation.horizontalVelocity * delta * 165;
      ship.current.position.y += mutation.verticalVelocity * delta * 165;

      // // Curving during turnsaa
      // z -> for ability quick roll
      ship.current.rotation.z = -mutation.horizontalVelocity * 1.5;
      // y -> because of impact
      // ship.current.rotation.y = mutation.horizontalVelocity * 0.4;
      // ship.current.rotation.y = mutation.verticalVelocity * 1.5; // will moonwalk
      // x -> for up and down key

      //CAMERA SHOULD FOLLOW X when up and down

      if (!left && right) {
        console.log("this is right trigger");

        // phase 0 ->
        mutation.horizontalVelocity = Math.max(
          -MAX_FLIP,
          mutation.horizontalVelocity - accelDelta
        );

        // phase 1 -> freedom, will not move back position?
      }

      if (left && !right) {
        mutation.horizontalVelocity = Math.min(
          MAX_FLIP,
          mutation.horizontalVelocity + accelDelta
        );
      }

      if ((up && down) || (!up && !down)) {
        if (mutation.verticalVelocity < 0) {
          if (mutation.verticalVelocity + accelDelta > 0) {
            mutation.verticalVelocity = 0;
          } else {
            mutation.verticalVelocity += accelDelta;
          }
        }
        if (mutation.verticalVelocity > 0) {
          if (mutation.verticalVelocity - accelDelta < 0) {
            mutation.verticalVelocity = 0;
          } else {
            mutation.verticalVelocity -= accelDelta;
          }
        }
      }

      // up
      if (!down && up) {
        mutation.verticalVelocity = Math.min(
          0.7 /* 0.7 */,
          mutation.verticalVelocity + accelDelta
        );

        // wing trail
        // leftWingTrail.current.scale.x = fastSine / 30;
        // leftWingTrail.current.scale.y = slowSine / 30;
        // rightWingTrail.current.scale.x = fastSine / 200;
        // rightWingTrail.current.scale.y = slowSine / 200;
      }
      // down
      if (!up && down) {
        mutation.verticalVelocity = Math.min(
          -0.7 /* 0.7 */,
          mutation.verticalVelocity - accelDelta
        );

        // wing trail
        // leftWingTrail.current.scale.x = fastSine / 30;
        // leftWingTrail.current.scale.y = slowSine / 30;
        // rightWingTrail.current.scale.x = fastSine / 200;
        // rightWingTrail.current.scale.y = slowSine / 200;
      }
    }

    //   if ((up && down) || (!up && !down)) {
    //     if (mutation.verticalVelocity < 0) {
    //       if (mutation.verticalVelocity + accelDelta > 0) {
    //         mutation.verticalVelocity = 0;
    //       } else {
    //         mutation.verticalVelocity += accelDelta;
    //       }
    //     }
    //     if (mutation.verticalVelocity > 0) {
    //       if (mutation.verticalVelocity - accelDelta < 0) {
    //         mutation.verticalVelocity = 0;
    //       } else {
    //         mutation.verticalVelocity -= accelDelta;
    //       }
    //     }
    //   }

    //   // CONTROL ship, left right up down
    //   if (!mutation.gameOver && mutation.gameSpeed > 0) {
    //     // left
    //     if (left && !right) {
    //       mutation.horizontalVelocity = Math.max(
    //         -0.7 /* -0.5 */,
    //         mutation.horizontalVelocity - accelDelta
    //       );

    //       // wing trail
    //       // rightWingTrail.current.scale.x = fastSine / 30;
    //       // rightWingTrail.current.scale.y = slowSine / 30;
    //       // leftWingTrail.current.scale.x = fastSine / 200;
    //       // leftWingTrail.current.scale.y = slowSine / 200;
    //     }

    //     //right
    //     if (!left && right) {
    //       mutation.horizontalVelocity = Math.min(
    //         0.7 /* 0.7 */,
    //         mutation.horizontalVelocity + accelDelta
    //       );

    //       // wing trail
    //       // leftWingTrail.current.scale.x = fastSine / 30;
    //       // leftWingTrail.current.scale.y = slowSine / 30;
    //       // rightWingTrail.current.scale.x = fastSine / 200;
    //       // rightWingTrail.current.scale.y = slowSine / 200;
    //     }

    //     // up
    //     if (!down && up) {
    //       mutation.verticalVelocity = Math.min(
    //         0.7 /* 0.7 */,
    //         mutation.verticalVelocity + accelDelta
    //       );

    //       // wing trail
    //       // leftWingTrail.current.scale.x = fastSine / 30;
    //       // leftWingTrail.current.scale.y = slowSine / 30;
    //       // rightWingTrail.current.scale.x = fastSine / 200;
    //       // rightWingTrail.current.scale.y = slowSine / 200;
    //     }
    //     // down
    //     if (!up && down) {
    //       mutation.verticalVelocity = Math.min(
    //         -0.7 /* 0.7 */,
    //         mutation.verticalVelocity - accelDelta
    //       );

    //       // wing trail
    //       // leftWingTrail.current.scale.x = fastSine / 30;
    //       // leftWingTrail.current.scale.y = slowSine / 30;
    //       // rightWingTrail.current.scale.x = fastSine / 200;
    //       // rightWingTrail.current.scale.y = slowSine / 200;
    //     }
    //   }

    // @note: make sure to detach to detach left, right ? easier?
  });

  return null;
}
