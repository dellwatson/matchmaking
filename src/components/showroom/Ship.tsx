import { forwardRef, useLayoutEffect } from "react";
import {
  useGLTF,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import MODEL_SHIP from "@assets/game/model/shipmodel.gltf";
import TEXTURE_1 from "@assets/ships/texture/aerodynamics_workshop_1k.hdr";
import { RGBELoader } from "three-stdlib";
import { useLoader } from "@react-three/fiber";

// check it's lobby or not, lobby -> store lobby skin, game -> game store skin
// One-click copy/paste from the poimandres market: https://market.pmnd.rs/model/low-poly-spaceship
const Ship = forwardRef((props, ref) => {
  // example ship
  const { selected } = props;
  const { nodes, materials } = useGLTF(MODEL_SHIP);
  const texture = useLoader(RGBELoader, TEXTURE_1);

  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0;
    });
  }, []);

  return (
    <group
      // rotation={[Math.PI / 2, Math.PI, 0]}
      ref={ref}
      {...props}
      dispose={null}>
      {props?.children}
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
        material-color={selected?.color}>
        {selected?.materialMesh === "refraction" && (
          <MeshRefractionMaterial envMap={texture} toneMapped={true} />
        )}
        {selected?.materialMesh === "transmission" && (
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={3}
            chromaticAberration={0.025}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.2}
            iridescence={1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
          />
        )}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_2.geometry}
        material={materials.Mat2}
        material-envMapIntensity={0.2}
        material-color={selected?.color}>
        {/* {selected?.materialMesh === "refraction" && (
          <MeshRefractionMaterial envMap={texture} toneMapped={true} />
        )} */}
        {selected?.materialMesh === "transmission" && (
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={3}
            chromaticAberration={0.025}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.2}
            iridescence={1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
          />
        )}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_3.geometry}
        material={materials.Window_Frame}>
        {/* {selected?.materialMesh === "refraction" && (
          <MeshRefractionMaterial envMap={texture} toneMapped={true} />
        )}
        {props?.ExhaustMiddle} */}
      </mesh>
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
});

export default Ship;
