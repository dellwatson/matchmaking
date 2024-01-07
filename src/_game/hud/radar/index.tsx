import React from "react";
import RadarImg from "./radar.svg";
export default function Radar() {
  return (
    <div
      style={
        {
          // transform: `skew(5deg, 5deg)`,
        }
      }
      className="w-80 h-80   backdrop-blur-xl rounded-full "
    >
      <div className="absolute font-bold z-10 w-full h-full flex justify-center items-center text-center uppercase text-[60px]">
        prototype <br /> Viction
        <br />
        Dimension
      </div>
      <img
        style={{
          animationDuration: "0.3s",
        }}
        src={RadarImg}
        className="w-full h-full opacity-50 animate-spin"
      />
    </div>
  );
}
