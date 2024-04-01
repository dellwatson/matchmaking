import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import useStore from "@/_game/store";

const SkyboxStars = () => {
  const starsRef = useRef();
  // const { camera } = useThree();
  const spaceshipPosition = useStore((state) => state.ship); // Assuming this is how you get the spaceship position
  useFrame(() => {
    if (spaceshipPosition?.current && starsRef.current) {
      // Update stars position to match the spaceship position
      starsRef.current.position.copy(spaceshipPosition?.current?.position);

      // Optionally reset rotation to align with the world or camera orientation
      // starsRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return <Stars radius={500} ref={starsRef} />;
};

export default SkyboxStars;
