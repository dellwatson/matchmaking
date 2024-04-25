/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 icy_dragon.glb --transform 
Files: icy_dragon.glb [28.42MB] > /Users/dellwatson/Desktop/vitejs-vite-arzf67/src/_backend/conveyance/icyDragon/icy_dragon-transformed.glb [2.26MB] (92%)
Author: chengzijieczj (https://sketchfab.com/chengzijieczj)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/icy-dragon-2db9268227b943e6a41e88390f2875a6
Title: icy dragon
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import GLB_MODEL from "./icy_dragon-transformed.glb";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(GLB_MODEL);
  const { actions } = useAnimations(animations, group);

  // Play all animations when the component mounts
  useEffect(() => {
    actions && Object.values(actions).forEach((action) => action.play());
    return () =>
      actions && Object.values(actions).forEach((action) => action.stop());
  }, [actions]); // Depend on actions to re-run this effect if they change

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Object_4">
          <group
            name="IK_Chain001"
            position={[-32.45, 10.45, -50.653]}
            rotation={[-Math.PI / 2, 0, 0]}>
            <group name="IK_Chain003" position={[-0.588, -16.956, -0.712]} />
          </group>
          <group
            name="IK_Chain002"
            position={[34.512, 10.45, -50.653]}
            rotation={[-Math.PI / 2, 0, 0]}>
            <group name="IK_Chain004" position={[0.567, -16.956, -0.712]} />
          </group>
        </group>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.defaultMat}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials["03_-_Default"]}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials["03_-_Default"]}
          skeleton={nodes.Object_11.skeleton}
        />
        <skinnedMesh
          name="Object_13"
          geometry={nodes.Object_13.geometry}
          material={materials["03_-_Default"]}
          skeleton={nodes.Object_13.skeleton}
        />
        <skinnedMesh
          name="Object_15"
          geometry={nodes.Object_15.geometry}
          material={materials.defaultMat}
          skeleton={nodes.Object_15.skeleton}
        />
        <skinnedMesh
          name="Object_17"
          geometry={nodes.Object_17.geometry}
          material={materials.defaultMat_0}
          skeleton={nodes.Object_17.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload(GLB_MODEL);