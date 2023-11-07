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
} from "@react-three/drei";
import TestTerrains from "./terrains/test-terrains";
import SpaceShip from "./star-ship";
import Effects from "./3d/Effects";

import { useLayoutEffect, useRef, useState } from "react";
import Stars from "./3d/Stars";
import Gamestate from "./gamestate";
import Camera from "./camera";
// import Controls from "./hud/controller/keyboard-stick";
import Movement from "./movement";
import Interface from "./hud";
// import { LayerMaterial, Color, Depth } from 'lamina'

export default function SoloGameApp() {
  //   const { fov } = useStore((state) => state.mutation);
  //   const actions = useStore((state) => state.actions);

  return (
    <Canvas
      linear
      className="border"
      mode="concurrent"
      style={{ height: "100vh", width: "100vw" }}
      dpr={[1, 1.5]}
      // gl={{ antialias: false }}
      // // camera={{ position: [0, 0, 2000], near: 0.01, far: 10000 }}
      onCreated={({ gl, camera }) => {
        //   actions.init(camera);
        // gl.toneMapping = THREE.ReinhardToneMapping;
        // gl.setClearColor(new THREE.Color("#020209"));
        gl.toneMapping = THREE.Uncharted2ToneMapping;
        gl.setClearColor(new THREE.Color("#020209"));
      }}
      gl={{
        alpha: false,
        powerPreference: "high-performance",
        stencil: false,
        antialias: false,
        depth: true,
      }}
    >
      {/* <PivotControls
        autoTransform={false}
        activeAxes={[true, false, true]}
        anchor={[0, 0, 0]}
        depthTest={true}
        scale={5000}
        lineWidth={3}
        onDragStart={() => null}
        onDrag={() => null}
        onDragEnd={() => null}
      >
        <mesh>
          <boxGeometry args={[0, 0, 0]} />
          <meshStandardMaterial />
        </mesh>
      </PivotControls> */}

      {/* hierrachy order is important?? */}
      <Movement />

      {/* <Perf position="top-left" /> */}
      {/* <fog attach="fog" args={["#070710", 100, 700]} /> */}
      {/* <Stats /> */}
      <TestTerrains />
      <SpaceShip />
      <Environment preset="city" />
      {/* <Stars /> */}
      <Gamestate />
      <Camera />

      {/* <OrbitControls /> */}
      {/* <Suspense fallback={null}>
          <Rocks />
          <Planets />
        </Suspense> */}
      {/* <Effects /> */}
    </Canvas>
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
