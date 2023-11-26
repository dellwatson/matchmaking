import React, { useEffect, useRef, useState } from "react";
import useStore from "../../store";
import { useFrame } from "@react-three/fiber";

export default function Distance() {
  // get distance from
  const ship = useStore((s) => s?.ship);
  const speed = useStore((s) => s?.speed);
  // Reference to the DOM element for the text
  // State variable to hold the distance
  const [distance, setDistance] = useState("∞");

  // Use requestAnimationFrame to debounce the updates
  const updateDistance = () => {
    if (ship.current) {
      // Update the position of the text element

      // Update the distance state variable
      setDistance(Math.round(ship?.current?.position?.z / 10));
    }

    // Request the next frame
    requestAnimationFrame(updateDistance);
  };

  // Start the animation loop when the component mounts
  useEffect(() => {
    requestAnimationFrame(updateDistance);
  }, []);
  return (
    <div
      style={{
        transform: `skew(-5deg, -5deg)`,
      }}
      className="flex flex-col justify-end items-end font-bold uppercase"
    >
      <div>Distance:</div>
      <div className="text-[120px] mt-10">{distance}</div>
      <br />
      <br />
      <div>Speed:</div>
      <div className="text-[120px] mt-10">{Math.round(speed / 10)} </div>
    </div>
  );
}
