import { useRef } from "react";
import { Color, AdditiveBlending } from "three";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sparkles,
  shaderMaterial,
  useGLTF,
  useTexture,
  useLoader,
} from "@react-three/drei";
import TEXTURE_MAP from "./baked-02.jpeg";
import NODE_MODEL from "./portal-2.glb";
import glsl from "babel-plugin-glsl/macro";
import PortalMaterial from "./PortalMaterial";
// import glsl from "glslify";

export default function ModelPortal(props) {
  const bakedTexture = useTexture(TEXTURE_MAP);
  //   const bakedTexture = useTexture("./baked-02.jpeg");
  const { nodes } = useGLTF(NODE_MODEL);
  //   const gltf = useLoader(GLTFLoader, BLEND);
  //   console.log(gltf, "gltf");

  console.log(nodes, bakedTexture);
  //   useFrame((state, delta) => (portalMaterial.current.uTime += delta));
  return (
    <group
      {...props}
      position={[100, -50, 100]}
      scale={[100, 100, 0]}
      dispose={null}>
      <mesh
        geometry={nodes.portalCircle.geometry}
        position={[0, 0.78, 1.6]}
        rotation={[-Math.PI / 2, 0, 0]}>
        <PortalMaterial />
      </mesh>
    </group>
  );
}

// const PortalMaterial = shaderMaterial(
//   {
//     uTime: 0,
//     uColorStart: new Color("hotpink"),
//     uColorEnd: new Color("white"),
//   },
//   glsl`
//     varying vec2 vUv;
//     void main() {
//       vec4 modelPosition = modelMatrix * vec4(position, 1.0);
//       vec4 viewPosition = viewMatrix * modelPosition;
//       vec4 projectionPosition = projectionMatrix * viewPosition;
//       gl_Position = projectionPosition;
//       vUv = uv;
//     }`,
//   glsl`
//     #pragma glslify: cnoise3 = require(glsl-noise/classic/3d.glsl)
//     uniform float uTime;
//     uniform vec3 uColorStart;
//     uniform vec3 uColorEnd;
//     varying vec2 vUv;
//     void main() {
//       vec2 displacedUv = vUv + cnoise3(vec3(vUv * 7.0, uTime * 0.1));
//       float strength = cnoise3(vec3(displacedUv * 5.0, uTime * 0.2));
//       float outerGlow = distance(vUv, vec2(0.5)) * 4.0 - 1.4;
//       strength += outerGlow;
//       strength += step(-0.2, strength) * 0.8;
//       strength = clamp(strength, 0.0, 1.0);
//       vec3 color = mix(uColorStart, uColorEnd, strength);
//       gl_FragColor = vec4(color, 1.0);
//       #include <tonemapping_fragment>
//       #include <encodings_fragment>
//     }`
// );

// // // shaderMaterial creates a THREE.ShaderMaterial, and auto-creates uniform setter/getters
// // // extend makes it available in JSX, in this case <portalMaterial />
// extend({ PortalMaterial });
