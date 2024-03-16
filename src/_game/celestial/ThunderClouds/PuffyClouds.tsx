import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Cloud } from "@react-three/drei";
import { random } from "maath";

export default function Puffycloud({
  seed,
  vec = new THREE.Vector3(),
  ...props
}) {
  //   const api = useRef();
  const light = useRef();
  //   const rig = useContext(context);
  const [flash] = useState(
    () => new random.FlashGen({ count: 10, minDuration: 40, maxDuration: 200 })
  );

  //   const contact = (payload) =>
  //     payload.other.rigidBodyObject.userData?.cloud &&
  //     payload.totalForceMagnitude / 1000 > 100 &&
  //     flash.burst();

  useFrame((state, delta) => {
    const impulse = flash.update(state.clock.elapsedTime, delta);
    light.current.intensity = impulse * 15000;
    // if (impulse === 1) rig?.current?.setIntensity(1);
    // api.current?.applyImpulse(
    //   vec.copy(api.current.translation()).negate().multiplyScalar(10)
    // );
  });
  return (
    <group
      //   ref={api}
      {...props}>
      {/* <BallCollider args={[4]} /> */}
      <Cloud
        seed={seed}
        fade={30}
        speed={0.1}
        growth={4}
        segments={40}
        volume={6}
        opacity={0.6}
        bounds={[4, 3, 1]}
      />
      <Cloud
        seed={seed + 1}
        fade={30}
        position={[0, 1, 0]}
        speed={0.5}
        growth={4}
        volume={10}
        opacity={1}
        bounds={[6, 2, 1]}
      />
      <pointLight position={[0, 0, 0.5]} ref={light} color="blue" />
    </group>
  );
}
