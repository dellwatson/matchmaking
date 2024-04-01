import ProceduralObstacle from "@/_game/system/ProceduralObstacle";
import React from "react";
import rockGLB from "../../asset/obstacles/rock.gltf";
import LinePath from "@/_game/celestial/Path/LinePath";

export default function SpaceV1() {
  return (
    <>
      <LinePath />
      <LinePath />
      <LinePath />
      <ProceduralObstacle
        {...{
          modelUrl: rockGLB,
        }}
      />
    </>
  );
}
