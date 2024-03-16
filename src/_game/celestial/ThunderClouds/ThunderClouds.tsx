import * as THREE from "three";
import { Clouds } from "@react-three/drei";
import Puffycloud from "./PuffyClouds";

export default function ThunderClouds(props) {
  return (
    <Clouds {...props} limit={400} material={THREE.MeshLambertMaterial}>
      <Puffycloud seed={10} position={[10, 0, 0]} />
      <Puffycloud seed={20} position={[0, 10, 0]} />
      <Puffycloud seed={30} position={[10, 0, 10]} />
      <Puffycloud seed={40} position={[0, 0, -10]} />
      {/* <CuboidCollider position={[0, -15, 0]} args={[400, 10, 400]} /> */}
    </Clouds>
  );
}
