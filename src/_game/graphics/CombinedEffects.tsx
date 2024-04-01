import React, { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import MoebiusShader from "./Moebius/MoebiusShader";
import { MotionBlur } from "../vfx/MotionBlur/MotionBlur";

export default function CustomEffects() {
  // Define a state variable to cycle through the effects
  // 0: Moebius, 1: Bloom, 2: Bloom + MotionBlur
  const [effectStage, setEffectStage] = useState(0);

  useEffect(() => {
    // Set an interval to advance the effectStage every 3 seconds
    const interval = setInterval(() => {
      setEffectStage((prevStage) => (prevStage + 1) % 3); // Cycle through 0, 1, 2
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      {effectStage === 0 ? (
        <MoebiusShader />
      ) : (
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={0.2}
            luminanceSmoothing={1}
            intensity={10}
          />
          {effectStage === 2 && <MotionBlur />}
        </EffectComposer>
      )}
    </>
  );
}
