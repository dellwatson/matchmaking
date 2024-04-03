import React, { useState, useEffect } from "react";
import { extend, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import MoebiusShader from "./Moebius/MoebiusShader";
import { MotionBlur } from "../vfx/MotionBlur/MotionBlur";

export default function CustomEffects() {
  const [mode, setMode] = useState(0); // Starts with Moebius
  const { scene } = useThree();

  useEffect(() => {
    const interval = setInterval(() => {
      setMode((prevMode) => (prevMode + 1) % 4); // Cycle through 0, 1, 2, 3
    }, 5000); // Switch every 3000 milliseconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];
        materials.forEach((material) => {
          material.wireframe = mode === 3; // Enable wireframe if mode is 3
        });
      }
    });
  }, [mode, scene]);

  return (
    <>
      {mode === 0 ? (
        <MoebiusShader />
      ) : mode === 1 ? (
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={0.2}
            luminanceSmoothing={1}
            intensity={10}
          />
        </EffectComposer>
      ) : mode === 2 ? (
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={0.2}
            luminanceSmoothing={1}
            intensity={10}
          />
          <MotionBlur />
        </EffectComposer>
      ) : null}
    </>
  );
}
