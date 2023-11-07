import Ship from "@/components/showroom/Ship";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import useStore from "../store";
import { useFrame, useThree } from "@react-three/fiber";
import { MirroredRepeatWrapping, Vector2, Vector3, Raycaster } from "three";
import { useControls } from "leva";
// import ATOM_EFFECT from "./atom.json";
import { BatchedRenderer, QuarksLoader } from "three.quarks";
import { ATOM } from "./atom";

const v = new Vector3();

export default function SpaceShip() {
  const directionalLight = useRef();

  const ship = useStore((s) => s?.ship);
  const exhaust = useStore((s) => s?.exhaust);
  // console.log(exhaust, ship, "current ref");

  const camera = useStore((s) => s.camera);

  let lastRotationTime = 0;
  let rotationStartTime = 0;
  const rotationInterval = 5000; // 5 seconds in milliseconds
  const rotationDuration = 1000; // 1 second in milliseconds

  const [batchRenderer, setBatchRenderer] = useState(new BatchedRenderer());

  useFrame((state, delta) => {
    // ref.current.rotation.x = ref.current.rotation.y += 0.01
    batchRenderer.update(delta);
  });
  const { scene } = useThree();

  // MOVE: effects
  // useEffect(() => {
  //   if (ship.current) {
  //     const loader = new QuarksLoader();
  //     console.log(loader, "loader");

  //     loader.setCrossOrigin("");

  //     const obj = loader.parse(ATOM);
  //     obj.traverse((child) => {
  //       if (child.type === "ParticleEmitter") {
  //         batchRenderer.addSystem(child.system);
  //       }
  //     });
  //     obj.scale.set(0.3, 0.3, 0.3);
  //     ship.current.add(obj);
  //     // ship.current.add(batchRenderer);
  //     scene.add(batchRenderer);
  //   }
  // }, []);

  return (
    <>
      {/* <directionalLight
        ref={directionalLight}
        intensity={3}
        position={[0, Math.PI, 0]}
      /> */}
      <PerspectiveCamera
        makeDefault
        ref={camera}
        // {...perscamera}
        // fov={100}
        // rotation={[0, 0, 0]}
        // position={[0, 10, -10]}
      />
      <Ship
        ref={ship}
        // rotation={[0.3, 0, 0]}

        // ExhaustMiddle={
        //   <mesh
        //     ref={exhaust}
        //     scale={[1, 1, 20]}
        //     position={[0, -1, 30]}
        //     // rotation={[0, Math.PI, 0]}
        //   >
        //     <dodecahedronBufferGeometry args={[1.5, 0]} />
        //     <meshBasicMaterial color="lightblue" />
        //   </mesh>
        // }
      >
        {/* {directionalLight.current && (
            <primitive object={directionalLight.current.target} />
          )} */}

        {/* move this into exhaust component children later */}
      </Ship>
    </>
  );
}
