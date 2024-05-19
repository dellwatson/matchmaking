import Ship from "@/components/showroom/Ship";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import useStore, { audio, playAudio } from "../../../store";
import { useFrame } from "@react-three/fiber";
import Buster from "../../../hud/AbilitySlot/category/shield/Buster";
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

export default function DefaultStarship() {
  const mutation = useStore((state) => state.mutation);
  const explode = useStore((state) => state.explode);
  // const { clock } = mutation;

  useEffect(() => {
    playAudio(audio.engine, 0.5, true);
    playAudio(audio.engine2, 0.2, true);

    return () => {
      audio.engine.pause();
      audio.engine2.pause();
    };
  }, []);

  // useFrame((state, delta) => {
  //   // boundingBox?.setFromObject(ship.current);
  //   exhaust.current.scale.x = 1 + Math.sin(clock.getElapsedTime() * 50);
  //   exhaust.current.scale.y = 1 + Math.sin(clock.getElapsedTime() * 50);
  // });

  return (
    <>
      {explode && <Explosion position={[0, 0, 0]} scale={2} />}
      <Buster />

      <pointLight
        castShadow
        distance={5000}
        position={[0, 0, 400]}
        intensity={80000}
        color="indianred"
      />

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

        {/* <mesh
            ref={exhaust}
            scale={[0.3, 1, 10]}
            position={[0, 0, -20]}
            rotation={[Math.PI, 0, 0]}
          >
            <dodecahedronGeometry args={[1.5, 0]} />
            <meshStandardMaterial
              color="lightblue"
              emissive="lightblue"
              emissiveIntensity={1}
            />
          </mesh> */}
      </Sphere>
    </>
  );
}
