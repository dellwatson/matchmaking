import React, { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import useStore from "@/_game/store";
import obstacleStore, { INTERVAL } from "./obstacle-store";
import ROCK from "./rock.gltf";
import Effects from "../../graphics/Effects";
import Particles from "../Particles";
import ThunderClouds from "../ThunderClouds/ThunderClouds";
import Puffycloud from "../ThunderClouds/PuffyClouds";
import Enemies from "../Enemies";

export default function Obstacle() {
  const gltf = useLoader(GLTFLoader, ROCK);

  const groupA = obstacleStore((s) => s.group_rocksA);
  const groupB = obstacleStore((s) => s.group_rocksB);
  const groupC = obstacleStore((s) => s.group_rocksC);
  const groupValue = obstacleStore((s) => s.groupValue);

  const regenerateRandom = obstacleStore((s) => s.regenerateRandom);
  const ship = useStore((s) => s.ship);

  //   useframe here, detect ship, and regenerate rocks ?

  useFrame((state, delta) => {
    if (!ship?.current) return;
    // GET 3 POSITONS:
    // AND SORT
    //update box axis calculation
    const CURRENT_SHIP_X = ship?.current?.position?.x;
    const CURRENT_SHIP_Y = ship?.current?.position?.y;
    const CURRENT_SHIP_Z = ship?.current?.position?.z;

    const closer_z = groupValue.reduce((lowest, currentValue) => {
      if (currentValue.value < lowest.value) {
        return currentValue;
      } else {
        return lowest;
      }
    }, groupValue[0]);

    if (CURRENT_SHIP_Z > closer_z?.value) {
      // update
      regenerateRandom(closer_z?.title, closer_z?.value);
    }
  });

  return (
    <>
      <GroupRocks {...{ arr: groupA, gltf }} />
      <GroupRocks {...{ arr: groupB, gltf }} />
      <GroupRocks {...{ arr: groupC, gltf }} />
    </>
  );
}

const GroupRocks = ({ arr = [], gltf }) => {
  // console.log(arr.length, "array length");
  // this wont move
  return (
    <>
      {!!arr?.length &&
        arr?.map((data) => (
          <ClonedRock key={data?.guid} data={data} {...gltf} />
        ))}
    </>
  );
};

const material = new THREE.MeshStandardMaterial({
  color: new THREE.Color("brown"),
  side: THREE.DoubleSide,
});

const ClonedRock = React.memo(({ nodes, materials, data }) => {
  const ref = useRef();
  const updateGame = useStore((s) => s.updateGame);
  const { clock } = useStore((state) => state.mutation);

  const shipBox = useStore((s) => s.shipBox);
  const rockBox = new THREE.Box3();

  // Generate random rotations for each axis independently
  const randomRotationX = (Math.random() * 2 - 1) * (Math.PI / 180) * 10; // Random rotation in radians, between -10 and 10 degrees
  const randomRotationY = (Math.random() * 2 - 1) * (Math.PI / 180) * 10; // Random rotation in radians, between -10 and 10 degrees
  const randomRotationZ = (Math.random() * 2 - 1) * (Math.PI / 180) * 10; // Random rotation in radians, between -10 and 10 degrees

  // Define maximum rotation speeds for each axis
  const maxRotationSpeedX = 0.2; // Adjust this value as needed
  const maxRotationSpeedY = 0.2; // Adjust this value as needed
  const maxRotationSpeedZ = 0.2; // Adjust this value as needed

  useFrame(() => {
    const r = Math.cos((clock.getElapsedTime() / 2) * data.speed) * Math.PI;
    ref.current.rotation.set(r, r, r);
  });

  // useEffect(() => {
  //   rockBox.setFromObject(ref.current);
  // }, [rockBox]);

  // useFrame((state, delta) => {
  //   if (ref?.current && ref?.current?.rotation) {
  //     // Apply rotation increments based on delta and clamp them
  //     ref.current.rotation.x += Math.min(
  //       randomRotationX * delta,
  //       maxRotationSpeedX
  //     );
  //     ref.current.rotation.y += Math.min(
  //       randomRotationY * delta,
  //       maxRotationSpeedY
  //     );
  //     ref.current.rotation.z += Math.min(
  //       randomRotationZ * delta,
  //       maxRotationSpeedZ
  //     );
  //   }
  // });

  // useFrame((state, delta) => {
  //   if (shipBox.intersectsBox(rockBox)) {
  //     updateGame();
  //   }
  // });

  // return (
  //   <group
  //     ref={ref}
  //     //   name="group-ROCK"
  //     position={data.offset}
  //     scale={[data.scale, data.scale, data.scale]}>
  //     <Puffycloud seed={20} position={[0, 10, 0]} />
  //     <Puffycloud seed={20} position={[0, 10, 0]} />
  //     <Puffycloud seed={20} position={[0, 10, 0]} />

  //     <ThunderClouds />
  //     {/*
  //       <boxGeometry args={[1, 1, 1]} />
  //       <meshStandardMaterial color="hotpink" />
  //     */}
  //   </group>
  // );

  // box matrix
  // return (
  //   <group
  //     ref={ref}
  //     //   name="group-ROCK"
  //     position={data.offset}
  //     scale={[data.scale, data.scale, data.scale]}>
  //     <mesh
  //       ref={ref}
  //       scale={[20, 20, 20]}
  //       // scale={[data.scale, data.scale, data.scale]}
  //     >
  //       <boxGeometry args={[1, 1, 1]} />
  //       <meshStandardMaterial color="hotpink" />
  //     </mesh>
  //   </group>
  // );

  // // rock assets
  return (
    <group
      ref={ref}
      //   name="group-ROCK"
      position={data.offset}
      scale={[data.scale, data.scale, data.scale]}>
      {/* <Stars radius={100} count={20} /> */}
      {/* <Stars radius={100} depth={50} count={10} factor={4} saturation={0} fade speed={1} />  */}
      {/* <Particles /> */}
      <Stars radius={500} depth={50} count={20} />
      <Particles />
      {/* <Enemies /> */}
      {console.log(Math.random(), "math random")}
      {Math.random() <= 0.2 && <Enemies />}
      <group scale={[20, 20, 20]}>
        <mesh
          //   name="single-rock"
          geometry={nodes.node_id4_Material_52_0.geometry}
          // material={material}
          material={materials.Material_52}
          // material-roughness={0.5}
          // material-metalness={0.4}
          material-roughness={1}
          material-metalness={1}
        />
      </group>
    </group>
  );
});
