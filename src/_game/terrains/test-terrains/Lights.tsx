import { useControls, folder } from "leva";
import React from "react";

export default function Lights() {
  // const ambient = useControls("ambient", {
  //   intesity: {
  //     value: 0.25,
  //     label: "intesity",
  //     min: 0,
  //     max: 5,
  //   },
  //   enabled: {
  //     value: true,
  //   },
  // });
  // const directionalL = useControls("directional", {
  //   intesity: {
  //     value: 0.25,
  //     label: "intesity",
  //     min: 0,
  //     max: 5,
  //   },
  //   enabled: {
  //     value: true,
  //     label: "enabled",
  //   },
  // });

  return (
    <>
      {/* {ambient?.enabled && <ambientLight {...ambient} />}
      {directionalL?.enabled && <directionalLight {...directionalL} />} */}
      {/* <ambientLight
        {...{
          intensity: 1,
        }}
      />
      <Directional /> */}
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        castShadow
        intensity={5}
        shadow-bias={-0.0001}
      />
      <FillLight brightness={2.6} color={"#bdefff"} />
      <RimLight brightness={54} color={"#fff"} />
      <pointLight />
      {/* distance, angle, penumbra, decay */}
      {/* <spotLight /> */}
      {/* more like sun? */}
      {/* <hemisphereLight /> */}
      {/* like bomb, laser, emit light */}
      {/* <pointLight /> */}
    </>
  );
}

const Ambient = () => {
  const ambient = useControls({
    intensity: {
      value: 0.25,
      label: "Intensity",
      min: 0,
      max: 5,
    },
    enabled: {
      value: true,
    },
  });
  return <ambientLight {...ambient} />;
};
const Directional = () => {
  const ambient = useControls(
    //     "My folder", {
    //     lighting: folder({
    //       enabled: true,
    //       intensity: {
    //         value: 0.25,
    //         label: "Intensity",
    //         min: 0,
    //         max: 100,
    //       },
    //       position: {
    //         x: 0,
    //         y: 0,
    //         z: 0,
    //       },
    //     }),
    //     "Show stats": folder({
    //       showStats: false,
    //     }),
    //   }
    {
      intensity: {
        value: 0.25,
        label: "Intensity",
        min: 0,
        max: 100,
      },
      enabled: {
        value: true,
      },
      //   position: {
      //     x: 0,
      //     y: 0,
      //     z: 0,
      //   },
    }
  );
  return <directionalLight {...ambient} />;
};

// Lights
function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}
function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
}

function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  );
}
