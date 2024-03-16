import React, { useMemo, useRef } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { Color, AdditiveBlending } from "three";

export default function PortalMaterial(props) {
  const PortalMaterial = useMemo(() => {
    return shaderMaterial(
      {
        uTime: 0,
        uColorStart: new Color("hotpink"),
        uColorEnd: new Color("white"),
      },
      /* GLSL Vertex Shader */
      `
      varying vec2 vUv;
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
        gl_Position = projectionPosition;
        vUv = uv;
      }`,
      /* GLSL Fragment Shader */
      `
      #pragma glslify: cnoise3 = require(glsl-noise/classic/3d.glsl)
      uniform float uTime;
      uniform vec3 uColorStart;
      uniform vec3 uColorEnd;
      varying vec2 vUv;
      void main() {
        vec2 displacedUv = vUv + cnoise3(vec3(vUv * 7.0, uTime * 0.1));
        float strength = cnoise3(vec3(displacedUv * 5.0, uTime * 0.2));
        float outerGlow = distance(vUv, vec2(0.5)) * 4.0 - 1.4;
        strength += outerGlow;
        strength += step(-0.2, strength) * 0.8;
        strength = clamp(strength, 0.0, 1.0);
        vec3 color = mix(uColorStart, uColorEnd, strength);
        gl_FragColor = vec4(color, 1.0);
        #include <tonemapping_fragment>
        #include <encodings_fragment>
      }`
    );
  }, []);

  extend({ PortalMaterial }); // Extend shaderMaterial to be used as a mesh material

  useFrame((state, delta) => {
    ref.current.uniforms.uTime.value += delta;
  });
  const ref = useRef();

  return (
    <portalMaterial
      transparent={true}
      blending={AdditiveBlending}
      uColorStart="hotpink"
      uColorEnd="black"
      ref={ref}
    />
  );
}
