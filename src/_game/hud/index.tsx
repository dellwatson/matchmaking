import React from "react";
import Controller from "./controller";
import Abilities from "./AbilitySlot";
import Menu from "./menu";
import Distance from "./stats/distance";
import Radar from "./Radar";
import Scores from "./Stats/Score/Scores";
import DistanceBar from "./Stats/DistanceBar/DistanceBar";
import BoostBar from "./Stats/BoostBar/BoostBar";

export default function Interface() {
  // if (true) return null;
  // divide to 4
  return (
    <div className="border-red-500 w-full h-full grid md:grid-cols-2 md:grid-rows-2 bg-transparent absolute z-5 p-2">
      <div className="hidden md:block border-gray-600 ">
        {/* MAP */}
        {/* <Radar /> */}
      </div>
      <div className="hidden md:flex border-gray-600  flex-col items-end ">
        <div className="flex">
          <Menu />
        </div>
        <DistanceBar />
        <div className="p-4 text-xl ">{/* <Distance /> */}</div>
      </div>
      <div className=" border-gray-600 relative ">
        {/* <Abilities /> */}

        <Controller />
      </div>
      <div className="hidden md:flex border-gray-600  justify-end items-end ">
        <div>
          <Abilities />
          <br />

          <BoostBar />
        </div>
        {/* <img
          src={"./keyControls.png"}
          className="min-w-[200px] min-h-[200px] relative left-105 scale-60 opacity-50"
        /> */}
      </div>
    </div>
  );
}

const GlassBlock = ({ children }) => <div>{children}</div>;
