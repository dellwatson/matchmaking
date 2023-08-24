import * as THREE from "three";
import React, { forwardRef, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Float,
  PivotControls,
  QuadraticBezierLine,
  Backdrop,
  ContactShadows,
} from "@react-three/drei";

export default function ShowRoom() {
  return (
    <Canvas
      // className="absolute w-full h-full"
      style={{ width: "100vw", height: "100vh" }}
      shadows
      camera={{ position: [0, 1.5, 3] }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[-10, 0, -5]} intensity={1} color="red" />
      <directionalLight
        position={[-1, -2, -5]}
        intensity={0.2}
        color="#0c8cbf"
      />
      <spotLight
        position={[5, 0, 5]}
        intensity={2.5}
        penumbra={1}
        angle={0.35}
        castShadow
        color="#0c8cbf"
      />

      <Backdrop
        castShadow
        floor={2}
        position={[0, -0.5, -8]}
        scale={[50, 10, 4]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial color="#353540" envMapIntensity={0.1} />
      </Backdrop>
      <Backdrop
        castShadow
        floor={2}
        position={[2, -0.5, 8]}
        scale={[50, 10, 4]}
        rotation={[0, 3, 0]}
      >
        <meshStandardMaterial color="#353540" envMapIntensity={0.1} />
      </Backdrop>

      <ContactShadows position={[0, -0.485, 0]} scale={5} blur={1.5} far={1} />
      <Environment preset="city" />
      {/* <OrbitControls makeDefault /> */}
    </Canvas>
  );
}
