import ProceduralObstacle from "@/_game/system/ProceduralObstacle";
import React from "react";
import rockGLB from "../../asset/obstacles/rock.gltf";
import LinePath from "@/_game/celestial/Path/LinePath";
import SkyboxStars from "@/_game/celestial/Skybox/SkyboxStars";
import SphereProcedural from "@/_game/system/SphereProcedural";

export default function SpaceV1() {
  return (
    <>
      <SkyboxStars />
      <LinePath />
      <LinePath />
      <LinePath />
      {/* <ProceduralObstacle
        {...{
          modelUrl: rockGLB,
        }}
      /> */}

      <SphereProcedural
        {...{
          modelUrl: rockGLB,
        }}
      />
    </>
  );
}
