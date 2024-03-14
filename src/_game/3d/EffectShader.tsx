import {
  Box,
  Effects,
  OrbitControls,
  PerspectiveCamera,
  Plane,
} from "@react-three/drei";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { ShaderPass } from "postprocessing";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { DepthTexture, Vector2, WebGLRenderTarget } from "three";

extend({ ShaderPass });

export default function EffectShader() {
  const size = useThree((s) => s.size);

  const depthRenderTarget = useMemo(
    () =>
      new WebGLRenderTarget(size.width, size.height, {
        depthBuffer: true,
        depthTexture: new DepthTexture(size.width, size.height),
      }),
    [size]
  );

  useFrame(({ gl, scene, camera }) => {
    gl.setRenderTarget(depthRenderTarget);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  const vertexShader = useMemo(
    () => /* glsl */ `
      varying vec2 vUv;
    
      void main() {
        vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    []
  );

  const fragmentShader = useMemo(
    () => /* glsl */ `
      #include <common>
      #include <packing>
  
      varying vec2 vUv;
  
      uniform vec2 uCameraNearFar;
      uniform sampler2D uDepthTexture;
  
          float readDepth(vec2 coord) {
              float fragCoordZ = texture2D(uDepthTexture, coord).x;
              float viewZ = perspectiveDepthToViewZ(fragCoordZ, uCameraNearFar.x, uCameraNearFar.y);
              return viewZToPerspectiveDepth(viewZ, uCameraNearFar.x, uCameraNearFar.y);
          }
  
      void main() {
        float depth = readDepth(vUv);
        gl_FragColor = vec4(vec3(depth), 1.0);
      }
    `,
    []
  );

  const uniforms = useMemo(
    () => ({
      uDepthTexture: { value: depthRenderTarget.depthTexture },
      uCameraNearFar: { value: new Vector2() },
    }),
    []
  );

  //   const camera = useThree((s) => s.camera);

  //   useLayoutEffect(() => {
  //     uniforms.uCameraNearFar.value.set(camera.near, camera.far);
  //   }, [camera]);

  return (
    <Effects>
      <shaderPass
        args={[
          {
            // @ts-ignore
            vertexShader,
            fragmentShader,
            uniforms,
          },
        ]}
      />
    </Effects>
  );
}

//  function EffectShader() {
//     return (
//       <Canvas shadows>
//         <OrbitControls makeDefault />
//         <PerspectiveCamera position={[5, 2, 2]} makeDefault near={1} far={20} />

//         <Plane args={[20, 20]} rotation-x={-Math.PI / 2} />
//         <Box position={[1, 1, 0]} material-color="red" />
//         <Box position={[-1, 1, 0]} material-color="red" />
//         <Box position={[-3, 1, 0]} material-color="red" />
//         <Box position={[3, 1, 0]} material-color="red" />

//         <Thing />
//       </Canvas>
//     );
//   }
