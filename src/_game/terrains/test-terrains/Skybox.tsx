import { Suspense, useRef, useMemo, useLayoutEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useTexture, Stars } from "@react-three/drei";
import {
  Color,
  BackSide,
  MirroredRepeatWrapping,
  CubeTextureLoader,
} from "three";

import galaxyTexture from "./galaxy.jpg";
import { COLORS } from "./constants";
// import { mutation, useStore } from "../state/useStore";

export default function Skybox() {
  return (
    <>
      <Sky />
      {/* <SkyBoxx /> */}
    </>
  );
}

function Sky() {
  const texture = useTexture(galaxyTexture);
  const sky = useRef();
  const stars = useRef();

  console.log(sky, "sky", stars);
  // const ship = useStore((s) => s.ship);

  useLayoutEffect(() => {
    texture.wrapS = texture.wrapT = MirroredRepeatWrapping;
    texture.repeat.set(1.8, 1.8);
    texture.anisotropy = 16;
  }, [texture]);

  useFrame((state, delta) => {
    // sky.current.rotation.z += delta * 0.02 * mutation.gameSpeed;
    // stars.current.rotation.z += delta * 0.02 * mutation.gameSpeed;
    // sky.current.emissive = mutation.globalColor;
    // if (ship.current) {
    //   sky.current.position.x = ship.current.position.x;
    //   stars.current.position.x = ship.current.position.x;
    //   sky.current.position.z = ship.current.position.z;
    //   stars.current.position.z = ship.current.position.z;
    // }
  });

  return (
    <>
      <Stars
        ref={stars}
        radius={800}
        depth={100}
        count={10000}
        factor={40}
        saturation={1}
        fade
      />
      <mesh ref={sky} position={[0, 10, -50]} rotation={[0, 0, Math.PI]}>
        <hemisphereLight intensity={0.7} />
        <sphereGeometry attach="geometry" args={[2000, 10, 10]} />
        <meshPhongMaterial
          emissive={COLORS[0].three}
          emissiveIntensity={0.1}
          fog={false}
          side={BackSide}
          attach="material"
          map={texture}
        />
      </mesh>
    </>
  );
}

// Loads the skybox texture and applies it to the scene.
function SkyBoxx() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  console.log(scene, "scene");
  return null;
}
