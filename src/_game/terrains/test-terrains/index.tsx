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
      {/* <Lights /> */}
      {/* 
      <directionalLight position={[-10, 0, -5]} intensity={2} color="red" />
      <directionalLight
        position={[-1, -2, -5]}
        intensity={0.2}
        color="#0c8cbf"
      /> */}
      {/* <spotLight
        position={[5, 0, 5]}
        intensity={2.5}
        penumbra={1}
        angle={0.35}
        castShadow
        color="#0c8cbf"
      /> */}
      {/* <pointLight
        // castShadow
        distance={40000000}
        position={[0, 100, -420]}
        intensity={50000000}
        color="indianred"
      /> */}

      {/* <RockTest /> */}
      <ProcedurObstacle />
      {/* <Rings /> */}
      {/* <Skybox /> */}
      {/* <Flares /> */}
    </>
  );
}
