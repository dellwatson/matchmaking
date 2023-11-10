import Ship from "@/components/showroom/Ship";
import {
  Environment,
  Float,
  PerspectiveCamera,
  PivotControls,
} from "@react-three/drei";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import useStore from "../store";
import { useFrame, useThree } from "@react-three/fiber";
import { MirroredRepeatWrapping, Vector2, Vector3, Raycaster } from "three";
import { useControls } from "leva";
// import ATOM_EFFECT from "./atom.json";
import { BatchedRenderer, QuarksLoader } from "three.quarks";
import { ATOM } from "./atom";
import * as THREE from "three";
import Effects from "../3d/Effects";

const v = new Vector3();

export default function SpaceShip() {
  const directionalLight = useRef();

  const ship = useStore((s) => s?.ship);
  const boundingBox = useStore((s) => s?.shipBox);
  // const boundingBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3()); // Create a bounding box

  const exhaust = useStore((s) => s?.exhaust);
  // console.log(exhaust, ship, "current ref");

  const camera = useStore((s) => s.camera);

  let lastRotationTime = 0;
  let rotationStartTime = 0;
  const rotationInterval = 5000; // 5 seconds in milliseconds
  const rotationDuration = 1000; // 1 second in milliseconds

  const [batchRenderer, setBatchRenderer] = useState(new BatchedRenderer());

  useEffect(() => {}, [ship]);

  useFrame((state, delta) => {
    boundingBox?.setFromObject(ship.current);

    // console.log(boundingBox?.min?.z, "shipbox");
    // console.log(boundingBox?.current?.m, "shipbox");
    // if (ship.current) {
    //   boundingBox
    //     ?.copy(ship.current?.geometry?.boundingBox)
    //     .applyMatrix4(ship.current?.matrixWorld);
    // }

    // ref.current.rotation.x = ref.current.rotation.y += 0.01
    batchRenderer.update(delta);
  });
  const { scene } = useThree();

  // MOVE: effects
  useEffect(() => {
    if (ship.current) {
      const loader = new QuarksLoader();

      loader.setCrossOrigin("");

      const obj = loader.parse(ATOM);
      obj.traverse((child) => {
        if (child.type === "ParticleEmitter") {
          batchRenderer.addSystem(child.system);
        }
      });
      obj.scale.set(0.3, 0.3, 0.3);
      ship.current.add(obj);
      // ship.current.add(batchRenderer);
      scene.add(batchRenderer);
    }
  }, []);
  return (
    <>
      <Ship
        ref={ship}
        // rotation={[0.3, 0, 0]}
        ExhaustMiddle={
          <mesh
            ref={exhaust}
            scale={[1, 0.3, 20]}
            position={[0, -0.5, -29.5]}
            // rotation={[Math.PI, 0, 0]}
          >
            <dodecahedronBufferGeometry args={[1.5, 0]} />
            <meshBasicMaterial color="lightblue" />
          </mesh>
        }
      >
        {/* {directionalLight.current && (
            <primitive object={directionalLight.current.target} />
          )} */}

        {/* move this into exhaust component children later */}
      </Ship>
    </>
  );
}
