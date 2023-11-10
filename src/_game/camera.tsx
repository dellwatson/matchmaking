import React, { useLayoutEffect } from "react";
import useStore from "./store";
import { MirroredRepeatWrapping, Vector2, Vector3, Raycaster } from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const v = new Vector3();

export default function Camera() {
  const ship = useStore((s) => s.ship);
  const camera = useStore((s) => s.camera);

  useLayoutEffect(() => {
    // camera.current.rotation.set(0, Math.PI, 0);
    camera.current.position.set(0, 4, -9); // 0, 1.5, -8
    camera.current.lookAt(
      v.set(
        ship.current.position.x,
        ship.current.position.y,
        ship.current.position.z + 4
      )
    );
    // modify the camera tracking to look above the center of the ship
    camera.current.rotation.z = Math.PI;
    // ship.current.rotation.y = Math.PI;
  }, [ship, camera]);

  useFrame((state, delta) => {
    if (ship.current && camera.current) {
      camera.current.position.z = ship.current.position.z - 12; // + 13.5
      camera.current.position.y = ship.current.position.y + 7; // need to setup between the screen device?
      camera.current.position.x = ship.current.position.x;
    }
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault
        ref={camera}
        // {...perscamera}
        // fov={100}
        // rotation={[0, 0, 0]}
        // position={[0, 10, -10]}
      />
      {/* <OrbitControls /> */}
    </>
  );
}

// camera.current.rotation.y = Math.PI;
// camera.current.lookAt(
//   v.set(
//     ship.current.position.x,
//     ship.current.position.y,
//     ship.current.position.z
//   )
// );
//either this position or camera?
// ship.current.rotation.set(0, Math.PI, 0);

// ship.current.rotation.z += 2;

// const currentTime = performance.now();

// // Check if the desired interval has passed
// if (currentTime - lastRotationTime >= rotationInterval) {
//   lastRotationTime = currentTime;
//   rotationStartTime = currentTime;
// }

// // Check if rotation duration has not passed
// if (currentTime - rotationStartTime <= rotationDuration && ship.current) {
//   ship.current.rotation.z += 2; // Rotating over the course of the current frame
// }
