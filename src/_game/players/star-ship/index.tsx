import Ship from "@/components/showroom/Ship";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import useStore, { audio, playAudio } from "../../store";
import { useFrame } from "@react-three/fiber";
import Buster from "../../hud/AbilitySlot/category/shield/Buster";
import { Box, Sphere, Stars } from "@react-three/drei";
import { Model as StarshipB } from "@/_backend/starship/starshipB/Scene";
import { Model as Phoenix } from "@/_backend/conveyance/phoenix/Phoenix_bird";
// import { Model } from "@/_backend/conveyance/animatedDragon/Animated_dragon";
import { Model } from "@/_backend/starship/sparrow/Scene";
import { Explosion } from "@/_game/vfx/Explosion/Explosion";

// import { Model } from "@/_backend/starship/starshipA/Ship";
// import { Model } from "@/_backend/starship/mercyA/Scene";
// import { MirroredRepeatWrapping, Vector2, Vector3, Raycaster } from "three";
// import { useControls } from "leva";
// import ATOM_EFFECT from "./atom.json";

// const v = new Vector3();

export default function SpaceShip() {
  const mutation = useStore((state) => state.mutation);
  const explode = useStore((state) => state.explode);
  const { clock } = mutation;

  const ship = useStore((s) => s?.ship);
  const boundingBox = useStore((s) => s?.shipBox);
  const exhaust = useStore((s) => s?.exhaust);

  useEffect(() => {
    playAudio(audio.engine, 0.5, true);
    playAudio(audio.engine2, 0.2, true);

    return () => {
      audio.engine.pause();
      audio.engine2.pause();
    };
  }, []);

  useFrame((state, delta) => {
    // boundingBox?.setFromObject(ship.current);
    exhaust.current.scale.x = 1 + Math.sin(clock.getElapsedTime() * 50);
    exhaust.current.scale.y = 1 + Math.sin(clock.getElapsedTime() * 50);
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
        {/* <spotLight
          color="white"
          intensity={1}
          position={[0, 5, -10]} // Position behind and above the character
          angle={Math.PI / 6} // Cone angle
          penumbra={1} // Softness of the edges of the spotlight
          decay={1} // The rate at which the light intensity diminishes over distance
          distance={500} // Maximum range of the light
          castShadow // Enable shadow casting
        /> */}
        {explode && <Explosion position={[0, 0, 0]} scale={2} />}
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
        {/* <Phoenix scale={[0.015, 0.015, 0.015]} rotation={[0, 4.7, 0]} /> */}
        {/* <Model scale={[3, 3, 3]} position={[0, -6, 0]} /> */}
        {/* <Model scale={[0.3, 0.3, 0.3]} /> */}
        <Sphere
          scale={[0.5, 0.5, 0.5]}
          //
        >
          <pointLight
            castShadow
            position={[0, 0, -200]}
            distance={1000000}
            intensity={100000}
            color="green"
          />

          <mesh
            ref={exhaust}
            scale={[0.3, 1, 10]}
            position={[0, 0, -20]}
            rotation={[Math.PI, 0, 0]}>
            <dodecahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial
              color="lightblue"
              emissive="lightblue"
              emissiveIntensity={1}
            />
          </mesh>
        </Sphere>
        {/* 
        <Model
          scale={[0.3, 0.3, 0.3]}
          // scale={[0.5, 0.5, 0.5]}
          //
        >
          <pointLight
            castShadow
            position={[0, 0, -200]}
            distance={1000000}
            intensity={100000}
            color="green"
          />

          <mesh
            ref={exhaust}
            scale={[0.3, 1, 10]}
            position={[0, 0, -20]}
            rotation={[Math.PI, 0, 0]}>
            <dodecahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial
              color="lightblue"
              emissive="lightblue"
              emissiveIntensity={1}
            />
          </mesh>
        </Model> */}
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
