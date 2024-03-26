import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import GLB_MODEL from "./model_starshipB.gltf";

export function Model(props) {
  const { nodes, materials } = useGLTF(GLB_MODEL);
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0;
    });
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_1.geometry}
        material={materials.Mat1}
        material-color="black"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_2.geometry}
        material={materials.Mat2}
        material-envMapIntensity={0.2}
        material-color="black"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_3.geometry}
        material={materials.Window_Frame}
      />
      {props?.children}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_4.geometry}
        material={materials.Mat4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_6.geometry}
        material={materials.Window}
      />
    </group>
  );
}

useGLTF.preload(GLB_MODEL);
