import React, { useEffect, useState } from "react";
import useBoostStore from "../ability/Boost/store";
import { MotionBlur } from "../vfx/MotionBlur/MotionBlur";

export default function VisualEffect() {
  const superBoost = useBoostStore((state) => state?.superBoost);
  const [isBoost, setBoost] = useState(false);
  useEffect(() => {
    if (superBoost) {
      console.log("settrue");
      setBoost(true);
    } else {
      setBoost(false);
    }
  }, [superBoost]);
  console.log("ANJING SUPER BOOST", superBoost);

  return (
    <>
      {/* <MotionBlur strength={isBoost ? 1 : 0} /> */}
      {/* {superBoost ? <MotionBlur /> : null} */}
      {isBoost && <MotionBlur />}
    </>
  );
}
