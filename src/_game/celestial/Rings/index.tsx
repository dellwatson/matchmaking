import * as THREE from "three";
import React from "react";
import useStore from "@/_game/store";
// import useStore from '../store'

// owner of the rings ? so each players have their own ring
const geometry = new THREE.RingBufferGeometry(1, 1.01, 64);
const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("lightgreen"),
  side: THREE.DoubleSide,
});

export default function Rings() {
  const { rings } = useStore((state) => state?.mutation);

  console.log(rings, "rings");

  return rings.map(([pos, matrix], i) => {
    const f = (Math.sin(i / 10) * Math.PI) / 2;
    console.log(f, pos, "pos", matrix);
    return (
      <mesh
        key={i}
        position={pos}
        scale={[30 + i * 5 * f, 30 + i * 5 * f, 30 + i * 5 * f]}
        onUpdate={(self) => {
          // console.log(self, "self");
          self.quaternion.setFromRotationMatrix(matrix);
        }}
        geometry={geometry}
        material={material}
      />
    );
  });
}
