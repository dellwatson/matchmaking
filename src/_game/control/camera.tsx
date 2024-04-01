import React, { useLayoutEffect } from "react";
import useStore from "../store";
import { MirroredRepeatWrapping, Vector2, Vector3, Raycaster } from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const v = new Vector3();

export default function Camera() {
  const PLAYER = useStore((s) => s.ship);
  const SPEED = useStore((s) => s?.speed);
  const camera = useStore((s) => s.camera);

  useLayoutEffect(() => {
    // camera.current.rotation.set(0, Math.PI, 0);
    camera.current.position.set(0, 4, -9); // 0, 1.5, -8
    camera.current.lookAt(
      v.set(
        PLAYER.current.position.x,
        PLAYER.current.position.y,
        PLAYER.current.position.z + 4
      )
    );
    camera.current.rotation.z = Math.PI;
    // camera.near = 1; // Minimum distance to start rendering objects
    // camera.far = 10000; // Increase this value so the far parts of the model are not culled
    // camera.updateProjectionMatrix(); // Important to apply the changes
  }, [PLAYER, camera]);

  useFrame((state, delta) => {
    if (PLAYER.current && camera.current) {
      const targetPosition = new Vector3(
        PLAYER.current.position.x,
        PLAYER.current.position.y + 4,
        PLAYER.current.position.z - 20
      );

      camera.current.position.lerp(targetPosition, 0.4); // Smoothly move towards the target
      // const lerpFactor = Math.min(1, 0.5 + SPEED); // Example adjustment
      // camera.current.position.lerp(targetPosition, lerpFactor);
      camera.current.lookAt(
        PLAYER.current.position.x,
        PLAYER.current.position.y + 4,
        PLAYER.current.position.z
      ); // Adjust as needed
    }
  });
  // useFrame((state, delta) => {
  //   if (PLAYER.current && camera.current) {
  //     const targetPosition = new Vector3(
  //       PLAYER.current.position.x,
  //       PLAYER.current.position.y + 2,
  //       PLAYER.current.position.z + 30
  //     );

  //     // Example dynamic lerp factor adjustment
  //     // Adjust this formula as needed to achieve the desired smoothing effect
  //     const distanceToTarget =
  //       camera.current.position.distanceTo(targetPosition);

  //     const dynamicLerpFactor = Math.min(
  //       1,
  //       0.4 * delta * (distanceToTarget / 10)
  //     );

  //     camera.current.position.lerp(targetPosition, dynamicLerpFactor);
  //     camera.current.lookAt(
  //       PLAYER.current.position.x,
  //       PLAYER.current.position.y + 4,
  //       PLAYER.current.position.z + 30
  //     );
  //   }
  // });

  return (
    <>
      <PerspectiveCamera
        rotation={[0, 100, 0]}
        makeDefault
        ref={camera}
        fov={60}
        far={2000}
      />
      {/* <OrbitControls /> */}
    </>
  );
}
