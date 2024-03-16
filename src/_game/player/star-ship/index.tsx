import Ship from "@/components/showroom/Ship";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import useStore from "../../store";
import { useFrame } from "@react-three/fiber";
import Buster from "../../hud/abilities/category/shield/Buster";
// import { MirroredRepeatWrapping, Vector2, Vector3, Raycaster } from "three";
// import { useControls } from "leva";
// import ATOM_EFFECT from "./atom.json";

// const v = new Vector3();

export default function SpaceShip() {
  // const directionalLight = useRef();

  const mutation = useStore((state) => state.mutation);
  const { clock } = mutation;

  const ship = useStore((s) => s?.ship);
  const boundingBox = useStore((s) => s?.shipBox);
  // const boundingBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3()); // Create a bounding box

  const exhaust = useStore((s) => s?.exhaust);
  // console.log(exhaust, ship, "current ref");

  // const camera = useStore((s) => s.camera);

  // let lastRotationTime = 0;
  // let rotationStartTime = 0;
  // const rotationInterval = 5000; // 5 seconds in milliseconds
  // const rotationDuration = 1000; // 1 second in milliseconds

  useEffect(() => {}, [ship]);

  useFrame((state, delta) => {
    boundingBox?.setFromObject(ship.current);

    // main.current.position.z = Math.sin(clock.getElapsedTime() * 40) * Math.PI * 0.2

    exhaust.current.scale.x = 1 + Math.sin(clock.getElapsedTime() * 200);
    exhaust.current.scale.y = 1 + Math.sin(clock.getElapsedTime() * 200);
  });

  return (
    <>
      <Buster />
      <Ship
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
            <dodecahedronBufferGeometry args={[1.5, 0]} />
            <meshBasicMaterial color="lightblue" />
          </mesh>
        }>
        {/* {directionalLight.current && (
            <primitive object={directionalLight.current.target} />
          )} */}
      </Ship>
    </>
  );
}
