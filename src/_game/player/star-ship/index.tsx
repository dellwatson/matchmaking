import Ship from "@/components/showroom/Ship";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import useStore from "../../store";
import { useFrame } from "@react-three/fiber";
import Buster from "../../hud/abilities/category/shield/Buster";
import { Model } from "@/_backend/starship/starshipB/Scene";
import { Box, Stars } from "@react-three/drei";
// import { MirroredRepeatWrapping, Vector2, Vector3, Raycaster } from "three";
// import { useControls } from "leva";
// import ATOM_EFFECT from "./atom.json";

// const v = new Vector3();

export default function SpaceShip() {
  const mutation = useStore((state) => state.mutation);
  const { clock } = mutation;

  const ship = useStore((s) => s?.ship);
  const boundingBox = useStore((s) => s?.shipBox);
  const exhaust = useStore((s) => s?.exhaust);

  // useEffect(() => {}, [ship]);
  useFrame((state, delta) => {
    // boundingBox?.setFromObject(ship.current);
    exhaust.current.scale.x = 1 + Math.sin(clock.getElapsedTime() * 100);
    exhaust.current.scale.y = 1 + Math.sin(clock.getElapsedTime() * 100);
  });

  return (
    <>
      {/* <Stars radius={100} depth={1000} count={5000} /> */}
      <group ref={ship}>
        {/* {  <Stars />} */}
        {/* <directionalLight
          color="white"
          intensity={0.3} // Adjust the intensity as needed
          position={[0, 10, -10]} // Position it behind and above your character
          // castShadow // Enable shadow casting
          shadow-mapSize-width={1024} // Shadow map size
          shadow-mapSize-height={1024}
          shadow-camera-far={50} // Adjust shadow camera far plane
          shadow-camera-near={0.1} // Adjust shadow camera near plane
        /> */}
        <spotLight
          color="white"
          intensity={1}
          position={[0, 5, -10]} // Position behind and above the character
          angle={Math.PI / 6} // Cone angle
          penumbra={1} // Softness of the edges of the spotlight
          decay={1} // The rate at which the light intensity diminishes over distance
          distance={500} // Maximum range of the light
          castShadow // Enable shadow casting
        />
        <Buster />
        {/* <pointLight
          // castShadow
          position={[0, 0, -20]}
          // distance={1000000}
          intensity={100000}
          color="white"
        /> */}
        {/* <Box position={[0, 0, -20]} /> */}
        <pointLight
          castShadow
          distance={5000}
          position={[0, 0, 400]}
          intensity={80000}
          color="indianred"
        />

        <Model>
          {/* <pointLight
            castShadow
            position={[0, 0, -20]}
            distance={10000}
            intensity={300000}
            // intensity={50000}
            color="green"
          /> */}

          <pointLight
            castShadow
            position={[0, 0, -20]}
            distance={1000000}
            intensity={100000}
            color="green"
          />

          <mesh
            ref={exhaust}
            scale={[0.3, 1, 20]}
            position={[0, -1, -29.5]}
            // rotation={[Math.PI, 0, 0]}
          >
            <dodecahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial
              color="lightblue"
              emissive="lightblue"
              emissiveIntensity={2}
            />
          </mesh>
        </Model>
        {/* <Ship
        {...{
          selected: {
            color: "white",
            materialMesh: "transmission",
          },
        }}
        ref={ship}
        // rotation={[0.3, 0, 0]}
        ExhaustMiddle={
          <mesh
            ref={exhaust}
            scale={[1, 0.3, 20]}
            position={[0, -0.5, -29.5]}
            // rotation={[Math.PI, 0, 0]}
          >
            <dodecahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial
              color="lightblue"
              emissive="lightblue"
              emissiveIntensity={2}
            />
          </mesh>
        }></Ship> */}
        {/* {directionalLight.current && (
            <primitive object={directionalLight.current.target} />
          )} */}
      </group>
    </>
  );
}
