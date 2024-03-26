import React, { useRef, useEffect } from "react";
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
} from "@react-three/postprocessing";
import useStore from "../store";
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

  return (
    <EffectComposer disableNormalPass>
      {/* <BrightnessContrast brightness={0} contrast={0.1} /> */}
      {/* <ToneMapping mode={ToneMappingMode.ACES_FILMIC} /> */}
      {/* <LUT lut={texture} /> */}

      <Bloom
        luminanceThreshold={0.2}
        mipmapBlur
        luminanceSmoothing={1}
        intensity={10}
      />
      {/* <DepthOfField
        target={dofTarget.current} // Set the target to the ref
        focalLength={1.5}
        // bokehScale={15}
        height={700}
      /> */}
    </EffectComposer>
  );
}
