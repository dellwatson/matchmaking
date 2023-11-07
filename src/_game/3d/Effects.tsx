import React, { useRef, useEffect } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
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
} from "@react-three/postprocessing";

// extend({ EffectComposer, ShaderPass, RenderPass, UnrealBloomPass, FilmPass })

export default function Effects() {
  // const composer = useRef()
  // const { scene, gl, size, camera } = useThree()
  // useEffect(() => void composer.current.setSize(size.width, size.height), [size])
  // useFrame(() => composer.current.render(), 2)
  return (
    // <EffectComposer>
    //   <DepthOfField
    //     focusDistance={0}
    //     focalLength={0.02}
    //     bokehScale={2}
    //     height={480}
    //   />
    //   <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
    //   <Noise opacity={0.02} />
    //   <Vignette eskil={false} offset={0.1} darkness={1.1} />
    // </EffectComposer>

    <EffectComposer disableNormalPass>
      <Bloom
        luminanceThreshold={0}
        mipmapBlur
        luminanceSmoothing={0.0}
        intensity={6}
      />
      <DepthOfField
        target={[0, 0, 13]}
        focalLength={0.3}
        bokehScale={15}
        height={700}
      />
    </EffectComposer>
  );
}
