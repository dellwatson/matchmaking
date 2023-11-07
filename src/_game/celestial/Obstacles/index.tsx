import React, { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import useStore from "@/_game/store";
// import { useStore } from "../state/useStore";
import ROCK from "./rock.gltf";

// recieve props of somewhre
/**
 * rocks/ box ?
 * does it randomed?
 *
 * interval or length?
 * @returns
 */
export default function Obstacle() {
  //   const gltf = useLoader(GLTFLoader, "./rock.gltf");
  const gltf = useLoader(GLTFLoader, ROCK);
  console.log(gltf, "gltf ?");
  const rocks = useStore((state) => state.rocks);

  console.log(rocks, "rocks");
  const ship = useStore((s) => s.ship);

  const generateRandomPosition = () => {
    const radius = 2000; // Increase the radius for more spread
    const angle = Math.random() * Math.PI * 2;
    const x = ship?.current?.position.x + radius * (Math.random() - 0.5); // Randomize x within a range
    const y = ship?.current?.position.y + radius * (Math.random() - 0.5); // Randomize y within a range
    const z = ship?.current?.position.z - 1000 - Math.random() * 2000; // Randomize z position between 500 and 1500
    return [x, y, z];
  };

  //OBSTACLE
  // choose here: box or rocks (color/material) / box (colors) -> Switch // geometry, size?

  //Cloned
  //  + x,y,z
  // array

  return rocks.map((data) => (
    <ClonedRock
      shipPosition={ship.current?.position}
      generateRandomPosition={generateRandomPosition}
      {...gltf}
      key={data.guid}
      data={data}
    />
  ));
}

//
const ClonedRock = React.memo(
  ({ nodes, materials, data, shipPosition, generateRandomPosition }) => {
    const ref = useRef();
    // const rockBox = new THREE.Box3();
    // const shipBox = useStore((s) => s.shipBox);
    // const ship = useStore((s) => s.ship);

    // // Generate a random rotation for each rock
    // const randomRotation = Math.random() * Math.PI * 2;

    // // Generate a random scale between 3 and 20 for each rock
    // const randomScale = 1 + Math.random() * 8;

    // useEffect(() => {
    //   rockBox.setFromObject(ref.current);
    // }, [rockBox]);

    // useFrame((state, delta) => {
    //   if (!ref.current && !ship?.current) return;
    //   //
    //   ref.current.rotation.x += delta * randomRotation * 0.5;
    //   // 0  > -500
    //   if (ship?.current?.position?.z < ref.current.position.z) {
    //     const newPosition = generateRandomPosition();
    //     ref.current.position.set(
    //       newPosition[0], // x
    //       newPosition[1], // y depends too
    //       newPosition[2] // y depends too
    //     );

    //     ref.current.scale.set(randomScale, randomScale, randomScale);
    //   }
    // });

    // useFrame((state, delta) => {
    //   if (shipBox.intersectsBox(rockBox)) {
    //     console.log("INTERSECT WITH BOX");
    //   }
    // });

    return (
      <group
        ref={ref}
        name="group-ROCK"
        position={data.offset}
        scale={[data.scale, data.scale, data.scale]}
      >
        <group
          // position={[
          //   -0.016298329457640648, -0.012838120572268963, 0.24073271453380585,
          // ]}
          // rotation={[
          //   3.0093872578726644, 0.27444228385461117, -0.22745113653772078,
          // ]}
          scale={[20, 20, 20]}
        >
          <mesh
            name="single-rock"
            geometry={nodes.node_id4_Material_52_0.geometry}
            material={materials.Material_52}
            material-roughness={1}
            material-metalness={1}
          />
        </group>
      </group>
    );
  }
);
