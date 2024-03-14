import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  ContactShadows,
  OrbitControls,
  Float,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";
import { Effects } from "./Effects";
import Ship from "./Ship";
import { useRef } from "react";
import useStore from "@/store/lobby-store";
import { Mercedes } from "./Mercedes";
import { SparrowModel } from "@/assets/game/model/mock/sparrow/Scene";
import { OrchidModel } from "@/assets/game/model/mock/orchid/Scene";

// todo: refactor ship component for modularity
export default function ShowRoom() {
  const { garage, selectedShip } = useStore();
  return (
    <Canvas
      frameloop="demand"
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 15], fov: 25 }}>
      {/* <Stats /> */}
      <color attach="background" args={["darkblue"]} />
      <Float
        floatingRange={[0, 0]} //
      >
        <Mercedes />
        {/* <SparrowModel /> */}
        {/* <OrchidModel /> */}
        {/* <Ship {...{ selected: selectedShip, isLobby: true }} /> */}
      </Float>
      <hemisphereLight intensity={0.5} />

      <Garage />

      <OrbitControls
      // enablePan={false}
      // enableZoom={false}
      // minPolarAngle={Math.PI / 2.2}
      // maxPolarAngle={Math.PI / 2.2}
      />
      <AnimatedCamera />
    </Canvas>
  );
}
function AnimatedCamera() {
  const cameraRef = useRef();
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const radius = 15; // Radius of the circular path
    const speed = 0.05; // Speed of rotation, lower is slower

    // Calculate the camera's position over time
    const x = radius * Math.sin(speed * elapsedTime);
    const z = radius * Math.cos(speed * elapsedTime);

    if (cameraRef.current) {
      cameraRef.current.position.set(x, 3, z);
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return (
    <PerspectiveCamera
      makeDefault
      ref={cameraRef}
      fov={25}
      position={[0, 0, 15]} // Initial position
    />
  );
}

const Garage = () => (
  <>
    <ContactShadows
      resolution={1024}
      frames={1}
      position={[0, -1.16, 0]}
      scale={15}
      blur={0.5}
      opacity={1}
      far={20}
    />
    <mesh
      scale={4}
      position={[3, -1.161, -0.5]}
      rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
      <ringGeometry args={[0.9, 1, 4, 1]} />
      <meshStandardMaterial color="white" roughness={1} />
    </mesh>
    <mesh
      scale={4}
      position={[-3, -1.161, 0]}
      rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
      <ringGeometry args={[0.9, 1, 3, 1]} />
      <meshStandardMaterial color="white" roughness={0.75} />
    </mesh>
    <Environment resolution={512}>
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, -9]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, -6]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, -3]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, 0]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, 3]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, 6]}
        scale={[10, 1, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 4, 9]}
        scale={[10, 1, 1]}
      />
      {/* Sides */}
      <Lightformer
        intensity={2}
        rotation-y={Math.PI / 2}
        position={[-50, 2, 0]}
        scale={[100, 2, 1]}
      />
      <Lightformer
        intensity={2}
        rotation-y={-Math.PI / 2}
        position={[50, 2, 0]}
        scale={[100, 2, 1]}
      />
      <Lightformer
        form="ring"
        color="red"
        intensity={10}
        scale={2}
        position={[10, 5, 10]}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </Environment>
    <Effects />
  </>
);
