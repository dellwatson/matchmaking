import React from "react";
import { Cylinder } from "@react-three/drei";
import FakeFlame from "./FakeFlame/FakeFlame";

export default function BoostFlame() {
  return (
    <Cylinder
      args={[0.1, 0, 1, 128, 64, true]}
      position={[0.3, 0.65, -1.35]}
      rotation={[Math.PI / 1.5, 0, 0]}
      scale={[20, 20, 20]}>
      <FakeFlame isBoosting={true} />
    </Cylinder>
  );
}
