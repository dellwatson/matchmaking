import {
  OrbitControls,
  Effects,
  PerspectiveCamera,
  useFBO,
} from "@react-three/drei";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
// import { useControls } from "leva";
import * as THREE from "three";
import { v4 as uuidv4 } from "uuid";

import MoebiusPass from "./MoebiusPass";
// import CustomNormalMaterial from "./CustomNormalMaterial";
// import Spaceship from "./Spaceship";
// import GroundMaterial from "./GroundMaterial";
// import GroundNormalMaterial from "./GroundNormalMaterial";
extend({
  MoebiusPass,
  // GroundMaterial
});

export default function Moebius() {
  const mesh = useRef();
  const spaceship = useRef();
  const ground = useRef();

  const lightPosition = [-50, 50, 15];

  const { camera } = useThree();

  const depthTexture = new THREE.DepthTexture(
    window.innerWidth,
    window.innerHeight
  );

  const depthRenderTarget = useFBO(window.innerWidth, window.innerHeight, {
    depthTexture,
    depthBuffer: true,
  });

  const normalRenderTarget = useFBO();

  useFrame((state) => {
    state.camera.lookAt(0, 0, 0);
  });

  //   useFrame((state) => {
  //     const { gl, scene, camera, clock } = state;

  //     gl.setRenderTarget(depthRenderTarget);
  //     gl.render(scene, camera);

  //     const materials = [];

  //     gl.setRenderTarget(normalRenderTarget);

  //     scene.traverse((obj) => {
  //       if (obj.isMesh) {
  //         materials.push(obj.material);
  //         if (obj.name === "ground") {
  //           obj.material = GroundNormalMaterial;
  //           obj.material.uniforms.uTime.value = clock.elapsedTime;
  //           obj.material.uniforms.lightPosition.value = lightPosition;
  //         } else {
  //           obj.material = CustomNormalMaterial;
  //           obj.material.uniforms.lightPosition.value = lightPosition;
  //         }
  //       }
  //     });

  //     gl.render(scene, camera);

  //     scene.traverse((obj) => {
  //       if (obj.isMesh) {
  //         obj.material = materials.shift();
  //       }
  //     });

  //     gl.setRenderTarget(null);
  //   });

  //   useFrame((state) => {
  //     const { clock } = state;

  //     spaceship.current.rotation.x =
  //       Math.cos(state.clock.getElapsedTime() * 2.0) *
  //       Math.cos(state.clock.getElapsedTime()) *
  //       0.15;
  //     spaceship.current.position.y =
  //       Math.sin(state.clock.getElapsedTime() * 2.0) + 1.0;

  //     ground.current.material.uniforms.uTime.value = clock.elapsedTime;
  //   });

  return (
    <>
      <ambientLight intesity={10} />
      {/* <directionalLight
          castShadow
          position={lightPosition}
          intensity={4.5}
          color="#fff"
          target={ground.current}
        /> */}
      {/* <mesh position={[80, 30, 140]} scale={10}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial color="darkorange" />
        </mesh>
        <mesh position={[50, 35, 120]} scale={3}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial color="cyan" />
        </mesh>
        <group rotation={[0, Math.PI / 2, 0]} position={[0, 2, 0]}>
          <Spaceship ref={spaceship} />
        </group> */}
      {/* <mesh
          ref={ground}
          name="ground"
          castShadow
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
        >
          <planeGeometry args={[300, 300, 100, 100]} />
          <groundMaterial receiveShadow color="#FF6457" />
        </mesh> */}
      <Effects key={uuidv4()}>
        <moebiusPass
          args={[
            {
              depthRenderTarget,
              normalRenderTarget,
              camera,
            },
          ]}
        />
      </Effects>
    </>
  );
}
