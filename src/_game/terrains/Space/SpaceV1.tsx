import ProceduralObstacle from "@/_game/system/ProceduralObstacle";
import React from "react";
import rockGLB from "../../asset/obstacles/rock.gltf";
import LinePath from "@/_game/celestial/Path/LinePath";
import SkyboxStars from "@/_game/celestial/Skybox/SkyboxStars";
import SphereProcedural from "@/_game/system/SphereProcedural";
import useLineBoost from "@/_game/ability/Boost/useLineBoost";

export default function SpaceV1() {
  useLineBoost();

  return (
    <>
      <SkyboxStars />
      {/* <LinePath /> */}
      {/* <LinePath /> */}
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
