/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 fire_dragon.glb --transform 
Files: fire_dragon.glb [38.91MB] > /Users/dellwatson/Desktop/vitejs-vite-arzf67/src/_backend/conveyance/fireDragon/fire_dragon-transformed.glb [2.99MB] (92%)
Author: chengzijieczj (https://sketchfab.com/chengzijieczj)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/fire-dragon-cf745691e2734c94b7f416232c3d6955
Title: fire dragon
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import GLB_MODEL from "./fire_dragon-transformed.glb";

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
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials["17_-_Defaultddg"]}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials["17_-_Defaultddg"]}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials["17_-_Defaultddg"]}
          skeleton={nodes.Object_11.skeleton}
        />
        <skinnedMesh
          name="Object_13"
          geometry={nodes.Object_13.geometry}
          material={materials["17_-_Default"]}
          skeleton={nodes.Object_13.skeleton}
        />
        <skinnedMesh
          name="Object_15"
          geometry={nodes.Object_15.geometry}
          material={materials["17_-_Ddgdgefaultddg"]}
          skeleton={nodes.Object_15.skeleton}
        />
        <skinnedMesh
          name="Object_17"
          geometry={nodes.Object_17.geometry}
          material={materials["17_-_Defaultddg"]}
          skeleton={nodes.Object_17.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload(GLB_MODEL);