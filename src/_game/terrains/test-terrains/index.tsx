import React from "react";
import Lights from "./Lights";
import Particles from "@/_game/celestial/Particles";
import Skybox from "./Skybox";
// import Flares from "./Flares";
import ProcedurObstacle from "@/_game/celestial/Obstacles/obb";
// import RockTest from "@/_game/celestial/Obstacles";
import Rings from "@/_game/celestial/Rings";

export default function TestTerrains() {
  return (
    <>
      <Lights />

      <ambientLight intensity={0.2} />
      <directionalLight position={[-10, 0, -5]} intensity={1} color="red" />
      <directionalLight
        position={[-1, -2, -5]}
        intensity={0.2}
        color="#0c8cbf"
      />
      <spotLight
        position={[5, 0, 5]}
        intensity={2.5}
        penumbra={1}
        angle={0.35}
        castShadow
        color="#0c8cbf"
      />

      {/* <RockTest /> */}
      <ProcedurObstacle />
      {/* <Rings /> */}
      <Particles />
      {/* <Skybox /> */}
      {/* <Flares /> */}
    </>
  );
}
