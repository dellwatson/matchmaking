import React from "react";
import rockGLB from "../../asset/obstacles/rock.gltf";
import dropBox from "../../asset/obstacles/question_box.glb";
import LinePath from "@/_game/celestial/Path/LinePath";
import SkyboxStars from "@/_game/celestial/Skybox/SkyboxStars";
import SphereProcedural from "@/_game/system/SphereProcedural";
import useLineBoost from "@/_game/ability/Boost/useLineBoost";
import useStore from "@/_game/store";
// import ProceduralObstacle from "@/_game/system/ProceduralObstacle";
import ProceduralObstacleV2 from "@/_game/system/ProceduralObstacleV2";

export default function SpaceV1() {
  useLineBoost();

  const { addCollect } = useStore();

  return (
    <>
      <SkyboxStars />
      {/* <LinePath /> */}
      {/* <LinePath /> */}
      <LinePath />
      <ProceduralObstacleV2
        {...{
          modelUrl: dropBox,
          numObstacles: 2,

          scaleRange: { min: 0.1, max: 0.1, variability: 0.1 },
          collisionFn: () => addCollect(),
        }}
      />
      {/* <ProceduralObstacle
        {...{
          modelUrl: dropBox,
          numObstacles: 2,

          scaleRange: { min: 0.1, max: 0.1, variability: 0.1 },
          collisionFn: () => addCollect(),
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
