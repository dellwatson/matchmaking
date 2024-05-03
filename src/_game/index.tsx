import * as THREE from "three";
import { Canvas, applyProps, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Stats,
  Lightformer,
  Float,
  Hud,
  PivotControls,
  useTexture,
  Stars,
} from "@react-three/drei";
import TestTerrains from "./terrains/test-terrains";
import SpaceShip from "./players/star-ship";
// import Effects from "./3d/Effects2";
import Effects from "./graphics/Effects";
// import { Effects } from "@components/showroom/Effects";

import { Suspense, useLayoutEffect, useRef, useState } from "react";
// import Stars from "./celestial/Stars";
import Gamestate from "./system/gamestate";
import Camera from "./control/camera";
import CameraV2 from "./control/cameraV2";
// import Camera from "./control/camera";
// import Controls from "./hud/controller/keyboard-stick";
import Movement from "./control/movement/movementV2";
// import Movement from "./control/movement";
import Interface from "./hud";
// import { LayerMaterial, Color, Depth } from 'lamina'
import bgSpace from "@assets/4k_stars.jpg";
import useStore from "./store";
import ModelPortal from "./celestial/Portal/Portal";
import BoostFlame from "./vfx/BoostFlame";
import ThunderClouds from "./celestial/ThunderClouds/ThunderClouds";
import Rig from "./players/Rig";
import Rings from "./celestial/Rings";
import Desert from "./terrains/Desert";
import SpaceV1 from "./terrains/Space/SpaceV1";
import { MotionBlur } from "./vfx/MotionBlur/MotionBlur";
import Moebius from "./graphics/Moebius/MoebiusShader";
import CombinedEffects from "./graphics/CombinedEffects";
import { Explosion } from "./vfx/Explosion/Explosion";
import useMatchmaking from "@/helpers/hooks/useMatchmaking";
import Cable from "./celestial/Path/Cable";
// import bgSpace from "@assets/hydra_constellation.jpg";

function SceneBackground() {
  const backgroundSpace = useTexture(bgSpace);

  // Set opacity of the texture
  backgroundSpace.encoding = THREE.LinearEncoding; // Ensure the texture is properly encoded
  backgroundSpace.minFilter = THREE.LinearFilter; // Ensure smooth texture filtering
  backgroundSpace.magFilter = THREE.LinearFilter;
  backgroundSpace.wrapS = THREE.ClampToEdgeWrapping; // Ensure no wrapping
  backgroundSpace.wrapT = THREE.ClampToEdgeWrapping;
  backgroundSpace.anisotropy = 16; // Optionally set anisotropy for better texture quality

  // Adjust opacity of the texture
  backgroundSpace.opacity = 0.1; // Set opacity value (0 is fully transparent, 1 is fully opaque)

  return <primitive attach="background" object={backgroundSpace} />;
}

export default function SoloGameApp() {
  //   const { fov } = useStore((state) => state.mutation);
  const actions = useStore((state) => state.actions);
  const { stage } = useMatchmaking();
  // console.log(stage, "in-game");
  // if starting -> countdown -> useStore
  // hud: if stage === winner ->

  return (
    <div
      // style={{ backgroundColor: "green" }}
      className="w-full h-full  ">
      <Canvas
        shadows={true}
        mode="concurrent"
        style={{
          height: "100vh",
          width: "100vw",
          // background: "#00008B",
        }}
        dpr={[1, 1.5]}
        onCreated={({ gl }) => {
          actions.init();
          // gl.setClearColor(new THREE.Color("#020209"));
        }}
        gl={{
          // alpha: false,
          // powerPreference: "high-performance",
          // stencil: false,
          antialias: false,
          depth: true,
        }}>
        {/* <Suspense fallback={null}>
          <SceneBackground />
        </Suspense> */}
        {/* <color attach="background" args={["blue"]} /> */}
        {/* <color attach="background" args={["#1b1122"]} /> */}
        {/* <color attach="background" args={["#ADD8E6"]} /> */}
        <color attach="background" args={["#020209"]} />
        {/* <color attach="background" args={["#260221"]} /> */}

        <ambientLight intensity={0.5} />

        {/* <Perf position="top-left" /> */}
        <fog attach="fog" args={["#070710", 100, 700]} />
        <Stats />
        {/* <Stars radius={100} depth={100} count={10000} /> */}
        <Suspense>
          <SpaceShip />
          <Gamestate />

          {/* <CameraV2 /> */}
          <Camera />
          {/* <OrbitControls />*/}
          <Movement />
          {/* <Rig> */}
          {/* </Rig> */}
          {/* <TestTerrains /> */}
          <SpaceV1 />
          <Cable />
          {/* <ThunderClouds /> */}
          {/* <BoostFlame position={[0, 20, 0]} /> */}

          {/* <Explosion position={[0, 0, 0]} scale={2} /> */}
        </Suspense>
        {/* <Environment preset="city" /> */}
        {/* <Rings /> */}

        {/* <Desert /> */}
        {/* <Suspense fallback={null}>
          <Rocks />
          <Planets />
        </Suspense> */}
        <Effects />
        {/* <Moebius /> */}
        {/* <CombinedEffects /> */}
      </Canvas>
    </div>
  );
}

// function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
//   const group = useRef()
//   useFrame((state, delta) => (group.current.position.z += delta * 10) > 20 && (group.current.position.z = -60))
//   return (
//     <>
//       {/* Ceiling */}
//       <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
//       <group rotation={[0, 0.5, 0]}>
//         <group ref={group}>
//           {positions.map((x, i) => (
//             <Lightformer key={i} form="circle" intensity={2} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
//           ))}
//         </group>
//       </group>
//       {/* Sides */}
//       <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
//       <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
//       <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
//       {/* Accent (red) */}
//       <Float speed={5} floatIntensity={2} rotationIntensity={2}>
//         <Lightformer form="ring" color="red" intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
//       </Float>
//       {/* Background */}
//       <mesh scale={100}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <LayerMaterial side={THREE.BackSide}>
//           <Color color="#444" alpha={1} mode="normal" />
//           <Depth colorA="blue" colorB="black" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
//         </LayerMaterial>
//       </mesh>
//     </>
//   )
// }
