import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
// import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
// import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
  BrightnessContrast,
  Pixelation,
  Glitch,
  Scanline,
  ASCII,
} from "@react-three/postprocessing";
import useStore from "../store";
import { MotionBlur } from "../vfx/MotionBlur/MotionBlur";
// import { LUTCubeLoader, ToneMappingMode } from 'postprocessing'

// extend({ EffectComposer, ShaderPass, RenderPass, UnrealBloomPass, FilmPass })

export default function Effects() {
  // const texture = useLoader(LUTCubeLoader, '/F-6800-STD.cube')

  // const ship = useStore((s) => s.ship);
  // const composer = useRef();
  // const dofTarget = useRef(); // Create a ref for the DepthOfField target

  // // Update the position of the DepthOfField target based on the ship's position
  // useFrame(() => {
  //   if (ship.current && dofTarget.current) {
  //     dofTarget?.current?.position.copy(ship.current.position);
  //   }
  // });
  // const densityRef = useRef(0.8);
  // useFrame(() => {
  //   if (densityRef?.current) {
  //     densityRef.current = Math.random() * (0.8 - 0.5) + 0.5; // Random d
  //   }
  // });
  const [density, setDensity] = useState(0.8);

  // Update scanline density randomly within the range of 0.5 to 0.8
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDensity(0.3 + Math.random() * 1.7); // 0.3
  //   }, 50); // Change every second (adjust as needed)
  //   return () => clearInterval(interval);
  // }, []);

  // const [glitchActive, setGlitchActive] = useState(false);

  // useEffect(() => {
  //   // Activate Glitch for 2 seconds
  //   setGlitchActive(true);
  //   const glitchTimeout = setTimeout(() => {
  //     setGlitchActive(false);
  //   }, 2000); // 2 seconds in milliseconds

  //   return () => {
  //     clearTimeout(glitchTimeout);
  //   };
  // }, []);

  return (
    <>
      <EffectComposer>
        {/* <BrightnessContrast brightness={0} contrast={0.1} /> */}
        {/* <ToneMapping mode={ToneMappingMode.ACES_FILMIC} /> */}
        {/* <LUT lut={texture} /> */}
        {/* <MotionBlur /> */}
        {/* <Pixelation granularity={6} /> */}
        {/*
        {glitchActive && (
          <Glitch
            strength={[0.01, 0.2]} // min and max glitch strength
            ratio={0.1}
          />
        )} */}
        {/* <Glitch
          strength={[0.01, 0.2]} // min and max glitch strength
          ratio={0.1}
        /> */}
        {/* <Scanline density={density} /> */}

        {/* <ASCII color="lightgreen" /> */}
        <Bloom
          luminanceThreshold={0.2}
          mipmapBlur
          luminanceSmoothing={1}
          intensity={3}
          // intensity={7}
        />
        {/* <DepthOfField
        target={dofTarget.current} // Set the target to the ref
        focalLength={1.5}
        // bokehScale={15}
        height={700}
      /> */}
      </EffectComposer>
    </>
  );
}
